<script>
    import { onMount } from 'svelte';
    
    // Dashboard data
    let currentRevenue = 16000.00;
    let pendingPayments = 78;
    let openDisputes = 23;
    let notifications = 5;
    let chartPoints = Array(12).fill(0).map(() => Math.random() * 100);
    let isChartAnimating = false;
    let selectedPeriod = '1 month';
    
    // Analytics data
    let newPayments = 70000;
    let authorizedTransactions = 56000;
    let declinedTransactions = 14000;
    let avgTicketValue = 52.00;
    let authRateData = Array(30).fill(0).map(() => 85 + Math.random() * 10);
    let selectedTab = 'Authorized & valued';
  
    // Payment methods data
    let paymentMethods = [
      { 
        id: 'card',
        name: 'Credit Card',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2"/>
                <path d="M2 10h20" stroke-width="2"/>
                <path d="M6 15h4" stroke-width="2"/>
              </svg>`,
        status: 'Primary payment method',
        isSelected: true
      },
      {
        id: 'wallet',
        name: 'Digital Wallet',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z" stroke-width="2"/>
                <path d="M16 12a2 2 0 104 0 2 2 0 00-4 0z" stroke-width="2"/>
              </svg>`,
        status: 'Apple Pay, Google Pay',
        isSelected: false
      },
      {
        id: 'bank',
        name: 'Bank Transfer',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
        status: 'SEPA, Wire Transfer',
        isSelected: false
      },
      {
        id: 'qr',
        name: 'QR Payment',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" stroke-width="2"/>
                <rect x="7" y="7" width="3" height="3" stroke-width="2"/>
                <rect x="14" y="7" width="3" height="3" stroke-width="2"/>
                <rect x="7" y="14" width="3" height="3" stroke-width="2"/>
                <path d="M14 14h3v3" stroke-width="2"/>
              </svg>`,
        status: 'WeChat Pay, Alipay',
        isSelected: false
      }
    ];
  
    const tabs = [
      'JTO & Report',
      'Authorized & valued',
      'State in analysis',
      'Chargebacks & Disputes',
      'Settlement & fees'
    ];
  
    const paymentTabs = ['Payment methods', 'Local accounts', 'Create users'];
    let activePaymentTab = 'Payment methods';
  
    const features = [
      'Understand channel performance.',
      'Examine payment method effectiveness.',
      'Uncover high-spending and frequent purchasers.',
      'Test the impact of your loyalty programs.'
    ];
  
    // Animation states
    let isConfiguring = false;
    let selectedMethod = null;
    
    function updateData() {
      // Dashboard updates
      currentRevenue += (Math.random() - 0.5) * 1000;
      pendingPayments += Math.floor((Math.random() - 0.5) * 5);
      openDisputes += Math.floor((Math.random() - 0.5) * 2);
      notifications = Math.max(0, notifications + Math.floor((Math.random() - 0.5) * 2));
      chartPoints = [...chartPoints.slice(1), Math.random() * 100];
      
      // Analytics updates
      newPayments += Math.floor((Math.random() - 0.5) * 1000);
      authorizedTransactions += Math.floor((Math.random() - 0.5) * 800);
      declinedTransactions += Math.floor((Math.random() - 0.5) * 200);
      avgTicketValue += (Math.random() - 0.5) * 2;
      authRateData = [...authRateData.slice(1), 85 + Math.random() * 10];
    }
  
    function animateChart() {
      isChartAnimating = true;
      setTimeout(() => isChartAnimating = false, 1000);
    }
  
    function changePeriod(period) {
      selectedPeriod = period;
      animateChart();
      chartPoints = Array(12).fill(0).map(() => Math.random() * 100);
    }
  
    function selectMethod(method) {
      selectedMethod = method;
      isConfiguring = true;
      setTimeout(() => {
        isConfiguring = false;
      }, 2000);
    }
  
    onMount(() => {
      const interval = setInterval(updateData, 3000);
      return () => clearInterval(interval);
    });
  </script>
<!-- Customer Area Insights Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
  <!-- Enhanced Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-br 
                from-[#f8faff] via-white to-[#f0f4ff]">
    </div>
    
    <!-- Mesh gradient -->
    <div class="absolute inset-0"
         style="background: 
           radial-gradient(circle at 0% 0%, rgba(96, 91, 255, 0.03) 0%, transparent 50%),
           radial-gradient(circle at 100% 0%, rgba(50, 50, 93, 0.03) 0%, transparent 50%),
           radial-gradient(circle at 100% 100%, rgba(96, 91, 255, 0.03) 0%, transparent 50%),
           radial-gradient(circle at 0% 100%, rgba(50, 50, 93, 0.03) 0%, transparent 50%);">
    </div>

    <!-- Grid pattern -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px);
            background-size: 40px 40px;">
    </div>

    <!-- Floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] 
                  bg-gradient-to-br from-[#605bff]/5 via-[#605bff]/3 to-transparent 
                  rounded-full animate-float-slow opacity-70"
           style="animation-duration: 25s;">
      </div>
      <div class="absolute -bottom-32 -left-32 w-[600px] h-[600px] 
                  bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/3 to-transparent 
                  rounded-full animate-float-slow opacity-70"
           style="animation-duration: 30s; animation-delay: -5s;">
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div class="relative space-y-8">
        <!-- Category Label -->
        <div class="flex items-center gap-2 text-[#605bff]">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6l-10 7L2 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="font-medium">Customer Area</span>
        </div>

        <!-- Title with Animation -->
        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
          Use insights to drive your
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            business growth
          </span>
        </h2>

        <!-- Description -->
        <p class="text-xl text-[#32325d]/70">
          Manage your payments and access real time data across all channels from your Adyen Customer Area.
        </p>

        <!-- CTA Button -->
        <div class="pt-4">
          <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#605bff] text-white font-medium 
                         hover:bg-[#605bff]/90 transition-colors duration-300 group">
            Get in touch
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Right Content - Dashboard Preview -->
      <div class="relative order-first lg:order-last">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative rounded-2xl overflow-hidden">
          <!-- Changed to match RevenueAccelerate height -->
          <div class="relative h-[600px] sm:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#605bff]/5">
            <!-- Dashboard Image -->
            <img 
              src="/images/reop.webp" 
              alt="Customer Area Dashboard" 
              class="w-full h-full object-cover object-center rounded-2xl transform hover:scale-105 transition-transform duration-700"
            />
            
            <!-- Glass Effect Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#605bff]/10 to-transparent opacity-60"></div>
            
            <!-- Interactive Elements -->
            <div class="absolute top-8 right-8 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 
                        transform hover:scale-105 transition-all duration-300">
              <div class="w-3 h-3 rounded-full bg-[#605bff] animate-pulse"></div>
              <span class="text-sm font-medium text-[#32325d]">Live Updates</span>
            </div>

            <!-- Stats Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm border-t border-[#605bff]/10">
              <div class="grid grid-cols-3 gap-4">
                <div class="space-y-1">
                  <div class="text-sm text-[#32325d]/70">Active Users</div>
                  <div class="text-lg font-medium text-[#605bff]">2.4k</div>
                </div>
                <div class="space-y-1">
                  <div class="text-sm text-[#32325d]/70">Success Rate</div>
                  <div class="text-lg font-medium text-[#605bff]">99.9%</div>
                </div>
                <div class="space-y-1">
                  <div class="text-sm text-[#32325d]/70">Growth</div>
                  <div class="text-lg font-medium text-[#605bff]">+24%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Decorative Elements -->
        <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        
        <!-- Additional Light Effects -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#605bff]/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24">
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/3 to-white"></div>
    
    <!-- Subtle grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px);
            background-size: 30px 30px;">
    </div>

    <!-- Floating gradient -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[800px] h-[800px] bg-gradient-radial from-[#605bff]/5 to-transparent 
                  rounded-full opacity-60 blur-3xl">
      </div>
      <!-- Additional floating element -->
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] 
                  bg-gradient-to-bl from-[#605bff]/5 via-[#605bff]/3 to-transparent 
                  rounded-full animate-float-slow opacity-70"
           style="animation-duration: 25s;">
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid md:grid-cols-3 gap-16">
      <!-- Understand your customers -->
      <div class="relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative space-y-6">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 4v-2m0 0v-2m0 2h-2m2 0h2" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
  
          <h3 class="text-xl font-medium text-[#32325d]">
            Understand your customers
          </h3>
  
          <p class="text-[#32325d]/70">
            Get insights into channel performance and real time payment behavior.
          </p>
        </div>
      </div>
  
      <!-- Easy user management -->
      <div class="relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative space-y-6">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
  
          <h3 class="text-xl font-medium text-[#32325d]">
            Easy user management
          </h3>
  
          <p class="text-[#32325d]/70">
            Assign users to manage risk, perform refunds, add payment methods, and more.
          </p>
        </div>
      </div>
  
      <!-- Analyze across channels -->
      <div class="relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative space-y-6">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M8 18a2 2 0 100-4 2 2 0 000 4zM12 6a2 2 0 100-4 2 2 0 000 4zM16 18a2 2 0 100-4 2 2 0 000 4z" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.5 6.5l3-3M15.5 6.5l-3-3M8.5 17.5l7-7" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
  
          <h3 class="text-xl font-medium text-[#32325d]">
            Analyze across channels
          </h3>
  
          <p class="text-[#32325d]/70">
            Connect your online and offline payments for a true unified commerce view.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Operations & Analytics Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24">
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/3 to-white"></div>
    
    <!-- Subtle grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px);
            background-size: 30px 30px;">
    </div>

    <!-- Floating gradient -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[800px] h-[800px] bg-gradient-radial from-[#605bff]/5 to-transparent 
                  rounded-full opacity-60 blur-3xl">
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2] mb-6">
        Make meaningful
        <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
          decisions
        </span>
      </h2>
      <p class="text-xl text-[#32325d]/70">
        With all of your business data at your fingertips, finding out revenue generated by each channel and the number of payments made with each payment method will be a breeze.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div class="space-y-8">
        <h3 class="text-3xl font-medium text-[#32325d]">Simplify your operations</h3>
        <p class="text-xl text-[#32325d]/70">
          Automate the management of your payment data while automating manual processes so you have more time to run your business.
        </p>

        <!-- Feature List -->
        <div class="space-y-4">
          {#each [
            'Understand and predict your cash flow.',
            'Manage chargebacks and risk.',
            'Export or connect data to third-party systems.',
            'Manage your payment terminals.'
          ] as feature}
            <div class="flex items-center gap-3 group">
              <div class="w-5 h-5 rounded-full bg-[#605bff]/10 flex items-center justify-center 
                          group-hover:bg-[#605bff]/20 transition-colors">
                <svg class="w-3 h-3 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-[#32325d]/70 group-hover:text-[#32325d] transition-colors">{feature}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right Content - Dynamic Dashboard -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative bg-white rounded-2xl shadow-xl border border-[#605bff]/10 overflow-hidden
                    transform hover:scale-[1.02] transition-all duration-500">
          <!-- Dashboard Header -->
          <div class="flex items-center justify-between p-6 border-b border-[#605bff]/10">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-[#605bff] animate-pulse"></div>
              <h4 class="text-lg font-medium text-[#32325d]">Welcome back, Julie!</h4>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2 text-sm text-[#32325d]/70 relative group">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>System messages ({notifications})</span>
                {#if notifications > 0}
                  <div class="absolute -top-1 -right-1 w-3 h-3 bg-[#605bff] rounded-full animate-ping"></div>
                {/if}
              </div>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="p-6 space-y-6">
            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4">
              {#each [
                { 
                  label: "Today's revenue", 
                  value: `EUR ${currentRevenue.toFixed(2)}`, 
                  delta: `${currentRevenue > 16000 ? '+' : ''}${((currentRevenue - 16000) / 160).toFixed(1)}%` 
                },
                { 
                  label: "Pending payments", 
                  value: pendingPayments, 
                  delta: `${pendingPayments > 78 ? '+' : ''}${((pendingPayments - 78) / 0.78).toFixed(1)}%` 
                },
                { 
                  label: "Open disputes", 
                  value: openDisputes, 
                  delta: `${openDisputes > 23 ? '+' : ''}${((openDisputes - 23) / 0.23).toFixed(1)}%` 
                }
              ] as stat}
                <div class="p-4 rounded-xl bg-[#605bff]/5 hover:bg-[#605bff]/10 transition-all duration-300
                            transform hover:scale-105">
                  <div class="text-sm text-[#32325d]/70 mb-2">{stat.label}</div>
                  <div class="text-lg font-medium text-[#32325d] transition-all">
                    {stat.value}
                    <div class="text-sm {stat.delta.includes('+') ? 'text-green-500' : 'text-red-500'}">
                      {stat.delta}
                    </div>
                  </div>
                </div>
              {/each}
            </div>

            <!-- Chart Section -->
            <div class="bg-[#605bff]/5 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h5 class="font-medium text-[#32325d]">Insights overview</h5>
                <div class="flex gap-2">
                  {#each ['1 week', '1 month', '1 year', 'All'] as period}
                    <button 
                      class="px-3 py-1 rounded-lg text-sm transition-all duration-300
                             {period === selectedPeriod 
                               ? 'bg-[#605bff] text-white shadow-lg scale-105' 
                               : 'text-[#32325d]/70 hover:bg-[#605bff]/10'}"
                      on:click={() => changePeriod(period)}
                    >
                      {period}
                    </button>
                  {/each}
                </div>
              </div>
              
              <!-- Dynamic Chart Area -->
              <div class="h-48 relative">
                <div class="absolute inset-0 flex items-end justify-between px-2">
                  {#each chartPoints as point, i}
                    <div 
                      class="w-[6%] bg-gradient-to-t from-[#605bff] to-[#605bff]/30 rounded-t-lg
                             transition-all duration-500 ease-out"
                      style="height: {point}%; opacity: {isChartAnimating ? 0 : 1}"
                    >
                      <div class="w-full h-2 bg-[#605bff] rounded-full -mt-1 opacity-30"></div>
                    </div>
                  {/each}
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-px bg-[#605bff]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- New Analytics Section -->
<section class="relative overflow-hidden bg-white py-24">
  <!-- The new analytics section code -->
  <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  </div>

  <!-- Rest of the new analytics section -->
  <!-- ... Previous analytics code ... -->
</section>

<!-- Action on your insights Section -->
<section class="relative overflow-hidden bg-white py-24">
  <!-- Enhanced Modern Background -->
  <div class="absolute inset-0">
    <!-- Enhanced base gradient with special insights-focused colors -->
    <div class="absolute inset-0 bg-gradient-to-br 
                from-[#f0f4ff] via-[#fafbff] to-[#f8f9ff]
                dark:from-[#1a1b3f] dark:via-[#2a2a5a] dark:to-[#1f1f45]">
    </div>
    
    <!-- Enhanced multi-layered mesh gradient with data-focused patterns -->
    <div class="absolute inset-0"
         style="background: 
           radial-gradient(circle at 0% 0%, rgba(96, 91, 255, 0.15) 0%, transparent 50%),
           radial-gradient(circle at 100% 0%, rgba(50, 50, 93, 0.15) 0%, transparent 50%),
           radial-gradient(circle at 100% 100%, rgba(96, 91, 255, 0.12) 0%, transparent 50%),
           radial-gradient(circle at 0% 100%, rgba(50, 50, 93, 0.15) 0%, transparent 50%);">
    </div>

    <!-- Enhanced modern grid pattern with data visualization style -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(96, 91, 255, 0.02) 2px, transparent 2px);
          background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
          background-position: center center;">
    </div>

    <!-- Enhanced floating elements with insights theme -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary glass morphism sphere -->
      <div class="absolute top-1/4 right-1/4 w-[700px] h-[700px] 
                  bg-gradient-to-br from-[#605bff]/20 via-[#605bff]/15 to-transparent 
                  backdrop-blur-3xl rounded-full animate-float-slow"
           style="animation-duration: 28s;">
      </div>

      <!-- Secondary glass morphism sphere -->
      <div class="absolute -bottom-32 -left-32 w-[800px] h-[800px] 
                  bg-gradient-to-tr from-[#32325d]/20 via-[#605bff]/15 to-transparent 
                  backdrop-blur-2xl rounded-full animate-float-slow"
           style="animation-duration: 35s; animation-delay: -7s;">
      </div>

      <!-- Data visualization inspired decorative elements -->
      <div class="absolute top-1/3 left-1/4 w-40 h-40
                  bg-gradient-to-r from-[#605bff]/35 to-[#32325d]/25 
                  blur-3xl rounded-full animate-pulse"
           style="animation-duration: 10s;">
      </div>
    </div>

    <!-- Enhanced light streaks with data flow effect -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-0 w-full h-[3px] 
                  bg-gradient-to-r from-transparent via-[#605bff]/40 to-transparent 
                  rotate-[15deg] blur-xl">
      </div>
      <div class="absolute bottom-1/3 right-0 w-full h-[3px] 
                  bg-gradient-to-r from-transparent via-[#605bff]/35 to-transparent 
                  -rotate-[15deg] blur-xl">
      </div>
      <!-- Additional data flow streaks -->
      <div class="absolute top-1/2 left-0 w-full h-[2px] 
                  bg-gradient-to-r from-transparent via-[#605bff]/30 to-transparent 
                  rotate-[5deg] blur-xl">
      </div>
    </div>
  </div>

  <!-- Existing content remains unchanged -->
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative bg-white rounded-2xl shadow-xl border border-[#605bff]/10 overflow-hidden">
          <!-- Dashboard Header -->
          <div class="p-6 border-b border-[#605bff]/10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-medium text-[#32325d]">Payment lifecycle</h3>
              <!-- Control Buttons -->
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#605bff]/5 text-sm text-[#32325d]">
                  <span>Jan 1 - Jan 31</span>
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <button class="p-2 rounded-lg hover:bg-[#605bff]/5 transition-colors">
                  <svg class="w-5 h-5 text-[#32325d]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 4h13M3 8h9M3 12h5m0 0l-2 2m2-2l-2-2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
  
            <!-- Tabs -->
            <div class="flex gap-1 border-b border-[#605bff]/10">
              {#each tabs as tab}
                <button 
                  class="px-4 py-2 text-sm transition-all relative {selectedTab === tab ? 'text-[#605bff]' : 'text-[#32325d]/70'}"
                  on:click={() => selectedTab = tab}
                >
                  {tab}
                  {#if selectedTab === tab}
                    <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#605bff]"></div>
                  {/if}
                </button>
              {/each}
            </div>
          </div>
  
          <!-- Analytics Content -->
          <div class="p-6 space-y-8">
            <!-- Key Metrics -->
            <div class="grid grid-cols-4 gap-4">
              <div class="space-y-2">
                <div class="text-sm text-[#32325d]/70">New payments</div>
                <div class="text-lg font-medium text-[#32325d]">{newPayments.toLocaleString()}</div>
              </div>
              <div class="space-y-2">
                <div class="text-sm text-[#32325d]/70">Authorized transactions</div>
                <div class="text-lg font-medium text-[#32325d]">{authorizedTransactions.toLocaleString()}</div>
              </div>
              <div class="space-y-2">
                <div class="text-sm text-[#32325d]/70">Declined transactions</div>
                <div class="text-lg font-medium text-[#32325d]">{declinedTransactions.toLocaleString()}</div>
              </div>
              <div class="space-y-2">
                <div class="text-sm text-[#32325d]/70">Avg ticket value (EUR)</div>
                <div class="text-lg font-medium text-[#32325d]">{avgTicketValue.toFixed(2)}</div>
              </div>
            </div>
  
            <!-- Authorization Rate Chart -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-[#32325d] font-medium">Authorization rate</h4>
                <div class="flex items-center gap-2 text-sm text-[#32325d]/70">
                  <div class="w-3 h-3 rounded-full bg-[#605bff]/20"></div>
                  Includes MPIs
                </div>
              </div>
              
              <div class="h-40 relative">
                <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d={`M0,${100 - authRateData[0]} ${authRateData.map((point, i) => `L${(i + 1) * (100 / authRateData.length)},${100 - point}`).join(' ')}`}
                    class="stroke-[#605bff] stroke-2 fill-none"
                  />
                  <path 
                    d={`M0,100 ${authRateData.map((point, i) => `L${(i + 1) * (100 / authRateData.length)},${100 - point}`).join(' ')} L100,100 Z`}
                    class="fill-[#605bff]/10"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Right Content -->
      <div class="space-y-8">
        <h2 class="text-4xl font-medium text-[#32325d]">
          Action on your
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            insights
          </span>
        </h2>
        
        <p class="text-xl text-[#32325d]/70">
          Get to know the customer behind each payment with unified data from all of your sales channels and markets.
        </p>
  
        <!-- Feature List -->
        <div class="space-y-4">
          {#each features as feature}
            <div class="flex items-center gap-3 group">
              <div class="w-5 h-5 rounded-full bg-[#605bff]/10 flex items-center justify-center 
                          group-hover:bg-[#605bff]/20 transition-colors">
                <svg class="w-3 h-3 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-[#32325d]/70 group-hover:text-[#32325d] transition-colors">{feature}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes float-slow {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg) scale(1); 
    }
    25% { 
      transform: translate(2%, 2%) rotate(1deg) scale(1.02); 
    }
    50% { 
      transform: translate(-1%, 3%) rotate(-1deg) scale(0.98); 
    }
    75% { 
      transform: translate(-2%, -1%) rotate(0.5deg) scale(1.01); 
    }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }

  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
  }
</style>