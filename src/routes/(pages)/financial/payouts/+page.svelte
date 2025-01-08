<script>
    import { onMount } from 'svelte';
    
    // Payout transactions data
    let transactions = [
      {
        recipient: "Sarah's Crafts",
        amount: 1250.00,
        status: "Completed",
        timestamp: "Just now"
      },
      {
        recipient: "Global Artisans",
        amount: 890.53,
        status: "Processing",
        timestamp: "2 min ago"
      },
      {
        recipient: "Digital Creators Co",
        amount: 2829.53,
        status: "Completed",
        timestamp: "5 min ago"
      },
      {
        recipient: "Freelance Hub",
        amount: 1032.10,
        status: "Processing",
        timestamp: "12 min ago"
      },
      {
        recipient: "Creative Studios",
        amount: 750.25,
        status: "Completed",
        timestamp: "15 min ago"
      }
    ];
  
    // Enhanced salesData with all metrics
    let salesData = [
      { 
        day: 'Mon', 
        amount: 420.50, 
        transactions: 24, 
        success_rate: 98,
        processingTime: 1.1,
        volume: 24 
      },
      { 
        day: 'Tue', 
        amount: 280.75, 
        transactions: 18, 
        success_rate: 99,
        processingTime: 1.3,
        volume: 18 
      },
      { 
        day: 'Wed', 
        amount: 510.25, 
        transactions: 32, 
        success_rate: 97,
        processingTime: 1.2,
        volume: 32 
      },
      { 
        day: 'Thu', 
        amount: 380.90, 
        transactions: 22, 
        success_rate: 100,
        processingTime: 1.0,
        volume: 22 
      },
      { 
        day: 'Fri', 
        amount: 420.30, 
        transactions: 28, 
        success_rate: 99,
        processingTime: 1.4,
        volume: 28 
      }
    ];
  
    // Analytics metrics
    let analytics = {
      total_processed: 24892.50,
      pending_amount: 1940.20,
      success_rate: 99.2,
      avg_processing_time: "1.2s",
      recentActivity: {
        hour: 42,
        day: 156
      }
    };
  
    // Computed values
    $: maxAmount = Math.max(...salesData.map(d => d.amount));
    $: totalTransactions = salesData.reduce((sum, day) => sum + day.transactions, 0);
    $: avgSuccessRate = (salesData.reduce((sum, day) => sum + day.success_rate, 0) / salesData.length).toFixed(1);
    $: avgProcessingTime = (salesData.reduce((sum, day) => sum + day.processingTime, 0) / salesData.length).toFixed(1);
  
    // Calculate bar heights as percentages
    $: getBarHeight = (amount) => (amount / maxAmount) * 100;
  
    // Simulated real-time updates
    function updatePayouts() {
      const newPayout = {
        recipient: "New Payout",
        amount: Math.random() * 3000,
        status: Math.random() > 0.5 ? "Completed" : "Processing",
        timestamp: "Just now"
      };
      
      transactions = [newPayout, ...transactions.slice(0, -1)];
    }
  
    // Enhanced updateSalesData function
    function updateSalesData() {
      salesData = salesData.map(day => ({
        ...day,
        amount: day.amount + (Math.random() * 100 - 50),
        transactions: Math.max(10, day.transactions + Math.floor(Math.random() * 5 - 2)),
        success_rate: Math.min(100, day.success_rate + (Math.random() * 2 - 1)),
        processingTime: Math.max(0.8, Math.min(2, day.processingTime + (Math.random() * 0.4 - 0.2))),
        volume: Math.max(10, day.volume + Math.floor(Math.random() * 5 - 2))
      }));
  
      // Update analytics
      analytics = {
        ...analytics,
        avg_processing_time: avgProcessingTime + "s",
        success_rate: Math.min(100, analytics.success_rate + (Math.random() * 0.4 - 0.2)),
        recentActivity: {
          hour: analytics.recentActivity.hour + Math.floor(Math.random() * 5 - 2),
          day: analytics.recentActivity.day + Math.floor(Math.random() * 8 - 3)
        }
      };
    }
  
    onMount(() => {
      const payoutInterval = setInterval(updatePayouts, 5000);
      const salesInterval = setInterval(updateSalesData, 5000);
      return () => {
        clearInterval(payoutInterval);
        clearInterval(salesInterval);
      };
    });
  </script>
  
  <section class="relative overflow-hidden bg-white py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </div>
  
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="relative space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <!-- Badge -->
          <div class="flex justify-center lg:justify-start">
            <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                        bg-[#605bff]/5 border border-[#605bff]/10 
                        shadow-sm transition-all duration-500">
              <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
                <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-[#605bff] tracking-wide">PAYOUTS</span>
            </div>
          </div>
  
          <!-- Title -->
          <div class="space-y-6">
            <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2] mx-auto lg:mx-0 max-w-xl">
              Send global payouts in
              <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
                real time
              </span>
            </h2>
  
            <p class="text-xl text-[#32325d]/70 mx-auto lg:mx-0 max-w-lg">
              Get funds to your sellers, vendors, gig economy workers, or partners in real time with instant payouts.
            </p>
  
            <!-- CTA Button -->
            <div class="pt-4 flex justify-center lg:justify-start">
              <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#605bff] text-white font-medium 
                           hover:bg-[#605bff]/90 transition-colors duration-300 group">
                Start sending payouts
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Right Content - Dynamic Payout Dashboard -->
        <div class="relative order-first lg:order-last">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
          
          <div class="relative bg-white rounded-2xl shadow-xl border border-[#605bff]/10 overflow-hidden">
            <!-- Header -->
            <div class="p-4 border-b border-[#605bff]/10 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="font-medium text-[#32325d]">Payout Dashboard</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">Live Updates</div>
              </div>
            </div>
  
            <!-- Stats Overview -->
            <div class="grid grid-cols-2 gap-4 p-4">
              <div class="p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
                <p class="text-sm text-[#32325d]/70">Total Paid Today</p>
                <p class="text-2xl font-medium text-[#32325d]">$24,892.50</p>
              </div>
              <div class="p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
                <p class="text-sm text-[#32325d]/70">Pending Payouts</p>
                <p class="text-2xl font-medium text-[#605bff]">$3,150.80</p>
              </div>
            </div>
  
            <!-- Transactions List -->
            <div class="h-[400px] overflow-y-auto">
              {#each transactions as payout}
                <div class="flex items-center justify-between p-4 border-b border-[#605bff]/10 hover:bg-[#605bff]/5 transition-colors animate-fadeIn">
                  <div>
                    <div class="font-medium text-[#32325d]">{payout.recipient}</div>
                    <div class="text-sm text-[#32325d]/70">{payout.timestamp}</div>
                  </div>
                  <div class="text-right">
                    <div class="font-medium text-[#32325d]">USD {payout.amount.toFixed(2)}</div>
                    <div class="text-sm {payout.status === 'Completed' ? 'text-green-500' : 'text-[#605bff]'}">
                      {payout.status}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
  
          <!-- Decorative Elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
          <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }
  
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  </style>

<section class="relative overflow-hidden bg-white py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </div>
  
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-tight mb-6">
          Faster payouts,
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            instant benefits
          </span>
        </h2>
      </div>
  
      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Access Funds Faster -->
        <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                    hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)] 
                    border border-[#605bff]/10 hover:border-[#605bff]/20
                    shadow-[0_4px_20px_rgb(96,91,255,0.05)]">
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                        shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" 
                      stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
              Access funds faster
            </h3>
            <p class="text-[#32325d]/70">
              Provide faster access to funds, which can be reinvested or used to cover expenses more quickly.
            </p>
          </div>
        </div>
  
        <!-- Boost Stickiness -->
        <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                    hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)]
                    border border-[#605bff]/10 hover:border-[#605bff]/20
                    shadow-[0_4px_20px_rgb(96,91,255,0.05)]">
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                        shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4M8 21V7m8 14V7" 
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
              Boost stickiness and revenue
            </h3>
            <p class="text-[#32325d]/70">
              Increase loyalty and monetization opportunities by providing your users with faster payouts.
            </p>
          </div>
        </div>
  
        <!-- Reduce Delays -->
        <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                    hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)]
                    border border-[#605bff]/10 hover:border-[#605bff]/20
                    shadow-[0_4px_20px_rgb(96,91,255,0.05)]">
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                        shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
              Reduce delays
            </h3>
            <p class="text-[#32325d]/70">
              Reduce delays and troubleshooting through our single banking infrastructure.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Optional: Bottom CTA -->
      <div class="mt-16 text-center">
        <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#605bff] text-white font-medium 
                     hover:bg-[#605bff]/90 transition-colors duration-300 group">
          Start sending payouts
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  
  
  
  <section class="relative overflow-hidden bg-white py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </div>
  
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="relative space-y-8">
          <h2 class="text-4xl font-medium text-[#32325d] leading-tight">
            Faster payments,
            <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
              faster payouts
            </span>
          </h2>
          
          <p class="text-xl text-[#32325d]/70">
            Connect faster payments to real-time payouts. Our banking infrastructure lets you pay out quickly without involving intermediaries.
          </p>
  
          <!-- Analytics Overview -->
          <div class="grid grid-cols-2 gap-4 mt-8">
            <div class="p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
              <p class="text-sm text-[#32325d]/70">Success Rate</p>
              <div class="flex items-end gap-2">
                <p class="text-2xl font-medium text-[#605bff]">{avgSuccessRate}%</p>
                <p class="text-sm text-green-500">↑ 0.3%</p>
              </div>
            </div>
            <div class="p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
              <p class="text-sm text-[#32325d]/70">Avg. Processing Time</p>
              <div class="flex items-end gap-2">
                <p class="text-2xl font-medium text-[#605bff]">{analytics.avg_processing_time}</p>
                <p class="text-sm text-green-500">↓ 0.1s</p>
              </div>
            </div>
          </div>
  
          <div class="space-y-4">
            {#each [
              'Pay out 24/7 in the US, EU, UK',
              'Connect to real-time card and banking schemes directly',
              'No cut-off times or weekend restrictions in the US, EU, UK'
            ] as feature}
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="text-[#32325d]/80">{feature}</span>
              </div>
            {/each}
          </div>
        </div>
  
        <!-- Right Content - Dynamic Analytics Dashboard -->
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
          
          <div class="relative bg-white rounded-2xl shadow-xl border border-[#605bff]/10 overflow-hidden p-6">
            <!-- Account Header -->
            <div class="flex justify-between items-start mb-8">
              <div>
                <p class="text-sm text-[#32325d]/70">Total Processed Today</p>
                <div class="flex items-baseline gap-2">
                  <p class="text-lg font-medium text-[#32325d]">
                    ${analytics.total_processed.toLocaleString('en-US', {minimumFractionDigits: 2})}
                  </p>
                  <span class="text-xs text-green-500">↑ 2.4%</span>
                </div>
                <p class="text-xs text-[#32325d]/70 mt-1">{analytics.recentActivity.day} transactions</p>
              </div>
              <div class="text-right">
                <p class="text-sm text-[#32325d]/70">Pending Amount</p>
                <div class="flex items-baseline gap-2 justify-end">
                  <p class="text-lg font-medium text-[#605bff]">
                    ${analytics.pending_amount.toLocaleString('en-US', {minimumFractionDigits: 2})}
                  </p>
                  <span class="text-xs text-[#605bff]">{analytics.recentActivity.hour} pending</span>
                </div>
                <p class="text-xs text-[#32325d]/70 mt-1">Last updated: Just now</p>
              </div>
            </div>

            <!-- Performance Metrics -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="p-3 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
                <p class="text-sm text-[#32325d]/70">Processing Time</p>
                <div class="flex items-baseline gap-2">
                  <p class="text-xl font-medium text-[#605bff]">{analytics.avg_processing_time}</p>
                  <span class="text-xs text-green-500">↓ 0.1s</span>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
                <p class="text-sm text-[#32325d]/70">Success Rate</p>
                <div class="flex items-baseline gap-2">
                  <p class="text-xl font-medium text-[#605bff]">{avgSuccessRate}%</p>
                  <span class="text-xs text-green-500">↑ 0.3%</span>
                </div>
              </div>
            </div>

            <!-- Sales Chart -->
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <h3 class="text-[#32325d] font-medium">This week's activity</h3>
                <div class="text-sm text-[#32325d]/70">
                  Total Volume: {totalTransactions}
                </div>
              </div>
              
              <div class="h-[200px] flex items-end gap-4">
                {#each salesData as { day, amount, transactions, success_rate, processingTime }}
                  <div class="flex-1 flex flex-col items-center gap-2">
                    <div class="w-full bg-[#605bff]/10 rounded-lg relative group h-full">
                      <div 
                        class="w-full bg-[#605bff] rounded-lg absolute bottom-0 transition-all duration-500 ease-out
                               group-hover:bg-[#605bff]/80"
                        style="height: {getBarHeight(amount)}%"
                      >
                        <!-- Enhanced Tooltip -->
                        <div class="absolute -top-24 left-1/2 -translate-x-1/2 bg-[#32325d] text-white px-3 py-2 rounded-lg text-sm
                                    opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          <div class="text-center mb-1">${amount.toFixed(2)}</div>
                          <div class="text-xs text-white/70">
                            {transactions} transactions<br>
                            {success_rate}% success rate<br>
                            {processingTime}s avg. time
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="text-sm text-[#32325d]/70">{day}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Live Updates Badge -->
            <div class="mt-6 flex justify-between items-center">
              <div class="text-sm text-[#32325d]/70">
                Last hour: {analytics.recentActivity.hour} transactions
              </div>
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#605bff]/10 border border-[#605bff]/20">
                <div class="w-2 h-2 rounded-full bg-[#605bff] animate-pulse"></div>
                <span class="text-sm text-[#605bff]">Live Updates</span>
              </div>
            </div>
          </div>
  
          <!-- Decorative Elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
          <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Automation Features Section -->
<section class="relative overflow-hidden bg-white py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </div>
  
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content - Automation Status -->
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
          
          <div class="relative bg-white rounded-2xl shadow-xl border border-[#605bff]/10 overflow-hidden p-6">
            <!-- Account Header -->
            <div class="flex items-center gap-3 mb-8">
              <div class="w-10 h-10 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 7h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" 
                        stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="text-xl font-medium text-[#32325d]">Account holder</h3>
            </div>
  
            <!-- Automation Status List -->
            <div class="space-y-6">
              {#each [
                { label: 'Detailed payout statuses', status: 'Automated', time: '0.3s' },
                { label: 'Failure reasons', status: 'Automated', time: '0.5s' },
                { label: 'Credit confirmations', status: 'Automated', time: '0.2s' },
                { label: 'Estimated time of arrivals', status: 'Automated', time: '0.4s' }
              ] as { label, status, time }, i}
                <div class="flex items-center justify-between p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10
                            transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                            animate-fadeIn" style="animation-delay: {i * 0.1}s">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <span class="font-medium text-[#32325d]">{label}</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                      {status}
                    </span>
                    <span class="text-sm text-[#32325d]/70">{time}</span>
                  </div>
                </div>
              {/each}
            </div>
  
            <!-- Performance Indicator -->
            <div class="mt-8 p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-[#32325d]/70">System Performance</span>
                <span class="text-sm font-medium text-[#605bff]">99.99% uptime</span>
              </div>
              <div class="w-full h-2 rounded-full bg-[#605bff]/10">
                <div class="w-[99.99%] h-full rounded-full bg-[#605bff] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Content -->
        <div class="relative space-y-8">
          <h2 class="text-4xl font-medium text-[#32325d] leading-tight">
            Simplify financial
            <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
              operations
            </span>
          </h2>
          
          <p class="text-xl text-[#32325d]/70">
            Save valuable time and resources by running payments and payouts on our single banking infrastructure.
          </p>
  
          <!-- Feature List -->
          <div class="space-y-6">
            {#each [
              'Pay out globally through a single API',
              'One account to manage all payouts',
              'Automate instructions, approvals, and reconciliation'
            ] as feature}
              <div class="flex items-center gap-3 group">
                <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center
                            group-hover:bg-[#605bff] transition-colors duration-300">
                  <svg class="w-3 h-3 text-[#605bff] group-hover:text-white transition-colors duration-300" 
                       viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="text-[#32325d]/80 group-hover:text-[#605bff] transition-colors duration-300">
                  {feature}
                </span>
              </div>
            {/each}
          </div>
  
          <!-- CTA Button -->
          <div class="pt-4">
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#605bff] text-white font-medium 
                         hover:bg-[#605bff]/90 transition-colors duration-300 group">
              Get started
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>