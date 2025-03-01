<script>
  import { onMount } from 'svelte';
  
  // Account transactions data
  let transactions = [
    {
      name: "Instant cash out",
      amount: 2000.00,
      status: "Credited",
      timestamp: "Just now"
    },
    {
      name: "Wholesale",
      amount: 570.53,
      status: "Pending",
      timestamp: "2 min ago"
    },
    {
      name: "Sales March 28th",
      amount: 829.53,
      status: "Credited",
      timestamp: "5 min ago"
    },
    {
      name: "N.H Group",
      amount: 3032.10,
      status: "Pending",
      timestamp: "12 min ago"
    },
    {
      name: "M. Insta",
      amount: 3032.10,
      status: "Pending",
      timestamp: "15 min ago"
    },
    {
      name: "Wholesale",
      amount: 390.82,
      status: "Credited",
      timestamp: "20 min ago"
    },
    {
      name: "Sales March 27th",
      amount: 1290.38,
      status: "Credited",
      timestamp: "25 min ago"
    },
    {
      name: "Insurance",
      amount: 1057.47,
      status: "Credited",
      timestamp: "30 min ago"
    }
  ];

  // Animation states
  let isLoading = false;
  
  // Simulated real-time updates
  function updateTransactions() {
    const newTransaction = {
      name: "New Transaction",
      amount: Math.random() * 5000,
      status: Math.random() > 0.5 ? "Credited" : "Pending",
      timestamp: "Just now"
    };
    
    transactions = [newTransaction, ...transactions.slice(0, -1)];
  }

  onMount(() => {
    const interval = setInterval(updateTransactions, 5000);
    return () => clearInterval(interval);
  });
</script>

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
      <!-- Left Content - Now centered -->
      <div class="relative space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
        <!-- Updated Badge - Centered -->
        <div class="flex justify-center lg:justify-start">
          <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                      bg-[#605bff]/5 border border-[#605bff]/10 
                      shadow-sm transition-all duration-500">
            <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
              <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                <path d="M4 8h16" stroke-width="2"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-[#605bff] tracking-wide">ACCOUNTS</span>
          </div>
        </div>

        <!-- Title - Now with better spacing -->
        <div class="space-y-6">
          <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2] mx-auto lg:mx-0 max-w-xl">
            Offer business accounts to
            <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
              users on your platform
            </span>
          </h2>

          <p class="text-xl text-[#32325d]/70 mx-auto lg:mx-0 max-w-lg">
            Create accounts for users to run their finances where they do business and get instant access to funds.
          </p>

          <!-- CTA Button - Centered -->
          <div class="pt-4 flex justify-center lg:justify-start">
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#605bff] text-white font-medium 
                         hover:bg-[#605bff]/90 transition-colors duration-300 group">
              Get started
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Content - Dynamic Transaction List -->
      <div class="relative order-first lg:order-last">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative bg-white rounded-2xl shadow-xl border border-[#605bff]/10 overflow-hidden">
          <!-- Header -->
          <div class="p-4 border-b border-[#605bff]/10 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                  <path d="M4 8h16" stroke-width="2"/>
                </svg>
              </div>
              <span class="font-medium text-[#32325d]">MyStore</span>
            </div>
            <button class="p-2 hover:bg-[#605bff]/5 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-[#32325d]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" stroke-width="2"/>
              </svg>
            </button>
          </div>

          <!-- Account Holder -->
          <div class="p-4 border-b border-[#605bff]/10">
            <div class="text-sm text-[#32325d]/70">Account holder</div>
            <div class="font-medium text-[#32325d]">Sam's Studio</div>
          </div>

          <!-- Transactions List -->
          <div class="h-[500px] overflow-y-auto">
            {#each transactions as transaction}
              <div class="flex items-center justify-between p-4 border-b border-[#605bff]/10 hover:bg-[#605bff]/5 transition-colors animate-fadeIn">
                <div>
                  <div class="font-medium text-[#32325d]">{transaction.name}</div>
                  <div class="text-sm text-[#32325d]/70">{transaction.timestamp}</div>
                </div>
                <div class="text-right">
                  <div class="font-medium text-[#32325d]">USD {transaction.amount.toFixed(2)}</div>
                  <div class="text-sm {transaction.status === 'Credited' ? 'text-green-500' : 'text-[#605bff]'}">
                    {transaction.status}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Enhanced Decorative Elements -->
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

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
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

  /* Add new background gradient animation */
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
  }
</style>

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
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Top Features -->
    <div class="grid md:grid-cols-3 gap-12 mb-24">
      <!-- Platform Feature -->
      <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                  hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)] 
                  border border-[#605bff]/10 hover:border-[#605bff]/20">
        <div class="relative space-y-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                      flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                      shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
            Your platform, your accounts
          </h3>
          <p class="text-[#32325d]/70">
            Let users open an account that's fully branded and embedded into your platform and let them manage their finance where they do business.
          </p>
        </div>
      </div>

      <!-- Banking Feature -->
      <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                  hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)]
                  border border-[#605bff]/10 hover:border-[#605bff]/20">
        <div class="relative space-y-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                      flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                      shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
            Banking done right
          </h3>
          <p class="text-[#32325d]/70">
            Our proprietary banking infrastructure merges payments and financial services to limit dependencies on traditional banks and other parties.
          </p>
        </div>
      </div>

      <!-- Revenue Feature -->
      <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                  hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)]
                  border border-[#605bff]/10 hover:border-[#605bff]/20">
        <div class="relative space-y-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                      flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                      shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
            New revenue streams
          </h3>
          <p class="text-[#32325d]/70">
            Attract users to open accounts with competitive pricing. You decide the best way to monetize your offering.
          </p>
        </div>
      </div>
    </div>

    <!-- Center Content with Enhanced Title -->
    <div class="max-w-3xl mx-auto text-center mb-24 relative">
      <div class="absolute -inset-x-4 top-0 h-full bg-gradient-to-r from-[#605bff]/5 via-transparent to-[#605bff]/5 rounded-3xl blur-2xl"></div>
      <div class="relative space-y-6">
        <h2 class="text-3xl sm:text-4xl font-medium leading-tight">
          <span class="bg-gradient-to-r from-[#32325d] to-[#32325d] bg-clip-text text-transparent">
            Simplify business and
          </span>
          <br />
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            money management for users
          </span>
        </h2>
        <p class="text-xl text-[#32325d]/70 max-w-2xl mx-auto">
          Create premium financial experiences for your users by allowing them to run fast and reliable financial operations on the same platform they run their business.
        </p>
      </div>
    </div>

    <!-- Bottom Features -->
    <div class="grid md:grid-cols-3 gap-12">
      {#each [
        {
          number: '1',
          title: 'Speed up access to money',
          description: 'Give users access to funds by the end of each sales day, or even in real time.'
        },
        {
          number: '2',
          title: 'Seamless money management',
          description: 'Money management and doing business in one single experience.'
        },
        {
          number: '3',
          title: 'Open accounts in record time',
          description: 'Leverage KYC data you already have. No need for extensive paperwork.'
        }
      ] as { number, title, description }, i}
        <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                    hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)]
                    border border-[#605bff]/10 hover:border-[#605bff]/20">
          <div class="relative space-y-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90
                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                        shadow-[0_4px_20px_rgb(96,91,255,0.25)]">
              <span class="text-white text-xl font-medium">{number}</span>
            </div>
            <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
              {title}
            </h3>
            <p class="text-[#32325d]/70">
              {description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<!-- Account Types Section -->
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
    <!-- Title Section -->
    <div class="max-w-3xl mx-auto text-center mb-24 relative">
      <div class="absolute -inset-x-4 top-0 h-full bg-gradient-to-r from-[#605bff]/5 via-transparent to-[#605bff]/5 rounded-3xl blur-2xl"></div>
      <div class="relative space-y-6">
        <h2 class="text-4xl sm:text-5xl font-medium leading-tight">
          <span class="bg-gradient-to-r from-[#32325d] to-[#32325d] bg-clip-text text-transparent">
            Offer the account that
          </span>
          <br />
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            suits your users best
          </span>
        </h2>
        <p class="text-xl text-[#32325d]/70 max-w-2xl mx-auto">
          Different platform users have different needs. Start by offering the basics and expand when needed thanks to our modular approach to accounts.
        </p>
      </div>
    </div>

    <!-- Content Grid -->
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content - Image -->
      <div class="relative order-last lg:order-first">
        <!-- Background Effects -->
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <!-- Main Interface Container -->
        <div class="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-[#605bff]/10
                    shadow-[0_8px_30px_rgb(96,91,255,0.12)] group">
          
          <!-- Top Navigation Bar -->
          <div class="flex items-center justify-between p-6 bg-white border-b border-[#605bff]/10">
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                  <path d="M4 8h16" stroke-width="2"/>
                </svg>
              </div>
              <span class="font-medium text-[#32325d]">Business Account</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-sm text-[#32325d]/70">Active</span>
            </div>
          </div>

          <!-- Main Content Area -->
          <div class="p-8 space-y-8">
            <!-- Account Balance Card -->
            <div class="bg-gradient-to-r from-[#605bff] to-[#605bff]/90 rounded-2xl p-6 text-white
                        transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
              <div class="flex justify-between items-start mb-6">
                <div class="space-y-1">
                  <p class="text-white/70">Total Balance</p>
                  <h3 class="text-3xl font-medium">$24,562.00</h3>
                  <p class="text-white/70 text-sm">Last updated: Just now</p>
                </div>
                <div class="flex gap-2">
                  {#each ['USD', 'EUR', 'GBP'] as currency}
                    <div class="px-2 py-1 rounded-md bg-white/10 text-sm">{currency}</div>
                  {/each}
                </div>
              </div>
              <div class="flex gap-4">
                <button class="flex-1 px-4 py-2.5 rounded-xl bg-white text-[#605bff] font-medium hover:bg-white/90 transition-colors
                               flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Add Money
                </button>
                <button class="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors
                               flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Send
                </button>
              </div>
            </div>

            <!-- Quick Stats Grid -->
            <div class="grid grid-cols-3 gap-4">
              {#each [
                { label: 'Active Cards', value: '2', icon: 'credit-card' },
                { label: 'Countries', value: '3', icon: 'globe' },
                { label: 'Transfers', value: '24', icon: 'transfer' }
              ] as stat}
                <div class="p-4 rounded-xl bg-[#605bff]/5 hover:bg-[#605bff]/10 transition-all
                            border border-[#605bff]/10 group">
                  <div class="flex flex-col items-center gap-2">
                    <div class="w-10 h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center
                                group-hover:scale-110 transition-transform">
                      <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {#if stat.icon === 'credit-card'}
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                          <path d="M4 8h16" stroke-width="2"/>
                        {:else if stat.icon === 'globe'}
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke-width="2"/>
                          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke-width="2"/>
                        {:else}
                          <path d="M8 7h12M8 12h12M8 17h12M4 7h0M4 12h0M4 17h0" stroke-width="2" stroke-linecap="round"/>
                        {/if}
                      </svg>
                    </div>
                    <p class="text-2xl font-medium text-[#32325d]">{stat.value}</p>
                    <p class="text-sm text-[#32325d]/70">{stat.label}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <!-- Bottom Action Bar -->
          <div class="p-6 bg-white border-t border-[#605bff]/10">
            <div class="flex justify-between items-center">
              <button class="text-sm text-[#605bff] hover:text-[#605bff]/80 transition-colors">View Details →</button>
              <div class="flex gap-2">
                <button class="p-2 rounded-lg hover:bg-[#605bff]/5 transition-colors">
                  <svg class="w-5 h-5 text-[#32325d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
                <button class="p-2 rounded-lg hover:bg-[#605bff]/5 transition-colors">
                  <svg class="w-5 h-5 text-[#32325d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" 
                          stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <!-- Right Content -->
      <div class="relative space-y-8">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2"/>
              <path d="M9 12l2 2 4-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">BUSINESS ACCOUNT</span>
        </div>

        <h3 class="text-3xl font-medium text-[#32325d]">Business Account</h3>
        <p class="text-xl text-[#32325d]/70">
          Let users receive, store, and spend funds anywhere by offering a business account.
        </p>

        <!-- Features List -->
        <div class="space-y-6">
          {#each [
            'Built for businesses',
            'Supports domestic and international transfers',
            'Comes with a bank account number',
            'Supported in the EU, US, and UK'
          ] as feature}
            <div class="flex items-center gap-3 group">
              <div class="w-5 h-5 rounded-full bg-[#605bff]/10 flex items-center justify-center
                          group-hover:bg-[#605bff] transition-colors duration-300">
                <svg class="w-3 h-3 text-[#605bff] group-hover:text-white transition-colors duration-300" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-[#32325d] group-hover:text-[#605bff] transition-colors duration-300">
                {feature}
              </span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Balance Account Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
    <div class="absolute inset-0">
        <!-- Base gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-white to-[#f0f4ff]"></div>
        
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
        <div class="relative space-y-8 max-w-2xl">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                      bg-[#605bff]/5 border border-[#605bff]/10 
                      shadow-sm transition-all duration-500">
            <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
              <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 16V8M8 12h8" 
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-[#605bff] tracking-wide">BALANCE ACCOUNT</span>
          </div>
  
          <!-- Title and Description -->
          <div class="space-y-6">
            <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
              Balance Account
            </h2>
            <p class="text-xl text-[#32325d]/70">
              Create digital wallets for users to receive, store, and spend funds within your platform's ecosystem.
            </p>
          </div>
  
          <!-- Features List -->
          <div class="space-y-4">
            {#each [
              'Built for all platform users',
              'Lightweight API integration',
              'Topped up through direct payments or transfers',
              'Pay out to the connected bank account'
            ] as feature}
              <div class="flex items-center gap-3 group">
                <div class="w-5 h-5 rounded-full bg-[#605bff]/10 flex items-center justify-center
                            group-hover:bg-[#605bff] transition-colors duration-300">
                  <svg class="w-3 h-3 text-[#605bff] group-hover:text-white transition-colors duration-300" 
                       viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="text-[#32325d] group-hover:text-[#605bff] transition-colors duration-300">
                  {feature}
                </span>
              </div>
            {/each}
          </div>
  
          <!-- CTA Button -->
          <div class="pt-4">
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#605bff] text-white font-medium 
                         hover:bg-[#605bff]/90 transition-colors duration-300 group">
              Get started
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Right Content - Image -->
        <div class="relative order-first lg:order-last">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
          
          <!-- Main Interface Container -->
          <div class="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-[#605bff]/10
                      shadow-[0_8px_30px_rgb(96,91,255,0.12)] group">
            
            <!-- Top Navigation Bar -->
            <div class="flex items-center justify-between p-6 bg-white border-b border-[#605bff]/10">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 16V8M8 12h8" 
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="font-medium text-[#32325d]">Balance Account</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#605bff]/5 border border-[#605bff]/10">
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span class="text-sm text-[#605bff]">Live Updates</span>
                </div>
              </div>
            </div>
  
            <!-- Main Content Area -->
            <div class="p-8 space-y-6">
              <!-- Balance Cards -->
              <div class="grid grid-cols-2 gap-4">
                <!-- Available Balance Card -->
                <div class="p-6 rounded-2xl bg-gradient-to-br from-[#605bff] to-[#605bff]/80 text-white
                            transform hover:scale-[1.02] transition-all duration-300 group/card">
                  <div class="space-y-4">
                    <div class="flex justify-between items-start">
                      <p class="text-white/70">Available Balance</p>
                      <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                                  group-hover/card:rotate-12 transition-transform">
                        <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <h3 class="text-2xl font-medium">$12,345.67</h3>
                    <div class="flex items-center gap-2 text-sm">
                      <span class="text-white/70">Updated just now</span>
                      <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <!-- Pending Balance Card -->
                <div class="p-6 rounded-2xl bg-white border border-[#605bff]/10 
                            transform hover:scale-[1.02] transition-all duration-300">
                  <div class="space-y-4">
                    <div class="flex justify-between items-start">
                      <p class="text-[#32325d]/70">Pending</p>
                      <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                        <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <h3 class="text-2xl font-medium text-[#32325d]">$2,890.00</h3>
                    <p class="text-sm text-[#32325d]/70">Processing 3 transactions</p>
                  </div>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="grid grid-cols-3 gap-4">
                {#each [
                  { label: 'Top Up', icon: 'plus' },
                  { label: 'Transfer', icon: 'transfer' },
                  { label: 'Withdraw', icon: 'withdraw' }
                ] as action}
                  <button class="p-4 rounded-xl bg-[#605bff]/5 hover:bg-[#605bff]/10 transition-all
                                 border border-[#605bff]/10 group flex flex-col items-center gap-2">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center
                                group-hover:scale-110 transition-transform">
                      <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {#if action.icon === 'plus'}
                          <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
                        {:else if action.icon === 'transfer'}
                          <path d="M17 8l4 4-4 4M7 16l-4-4 4-4" stroke-width="2" stroke-linecap="round"/>
                          <path d="M21 12H3" stroke-width="2" stroke-linecap="round"/>
                        {:else}
                          <path d="M12 19V5M5 12l7 7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        {/if}
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-[#32325d]">{action.label}</span>
                  </button>
                {/each}
              </div>

              <!-- Recent Activity -->
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <h4 class="font-medium text-[#32325d]">Recent Activity</h4>
                  <button class="text-sm text-[#605bff] hover:underline">View All</button>
                </div>
                <div class="space-y-2">
                  {#each [
                    { type: 'in', amount: 1250.00, desc: 'Payment received', time: '2 min ago' },
                    { type: 'out', amount: 850.00, desc: 'Withdrawal to Bank', time: '1 hour ago' }
                  ] as transaction}
                    <div class="flex items-center justify-between p-3 rounded-xl hover:bg-[#605bff]/5 transition-all">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                          <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d={transaction.type === 'in' 
                              ? 'M12 19V5m0 14l-7-7m7 7l7-7' 
                              : 'M12 5v14m0-14l-7 7m7-7l7 7'} 
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p class="font-medium text-[#32325d]">{transaction.desc}</p>
                          <p class="text-sm text-[#32325d]/60">{transaction.time}</p>
                        </div>
                      </div>
                      <p class={`font-medium ${transaction.type === 'in' ? 'text-green-500' : 'text-[#32325d]'}`}>
                        {transaction.type === 'in' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </p>
                    </div>
                  {/each}
                </div>
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

  <!-- Financial Operations Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
    <div class="absolute inset-0">
        <!-- Base gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-white via-[#605bff]/3 to-white"></div>
        
        <!-- Subtle pattern -->
        <div class="absolute inset-0 opacity-5"
             style="background-image: url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23605bff%22 fill-opacity=%220.05%22 fill-rule=%22evenodd%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E');">
        </div>

        <!-- Floating elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] 
                        bg-gradient-to-bl from-[#605bff]/5 via-[#605bff]/3 to-transparent 
                        rounded-full animate-float-slow opacity-70"
                 style="animation-duration: 28s;">
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-tight mb-6">
          Let users run their financial operations on your platform
        </h2>
        <p class="text-xl text-[#32325d]/70">
          Help your users simplify their finances on a platform they use and trust with embedded accounts.
        </p>
      </div>
  
      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-12 mb-24">
        {#each [
          {
            icon: 'building',
            title: 'Offer branded business accounts',
            description: 'Offer branded business accounts thanks to our fully customizable solution'
          },
          {
            icon: 'clock',
            title: 'Open accounts in record time',
            description: 'Open accounts in record time by adding on existing user information'
          },
          {
            icon: 'currency',
            title: 'Multi currency support',
            description: 'Provide multi currency or single currency accounts depending on your users'
          }
        ] as feature}
          <div class="group relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative space-y-4">
              <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {#if feature.icon === 'building'}
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4M8 21V7m8 14V7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                {:else if feature.icon === 'clock'}
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                {:else}
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 16V8M8 12h8" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                {/if}
              </div>
              <h3 class="text-xl font-medium text-[#32325d]">{feature.title}</h3>
              <p class="text-[#32325d]/70">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
  
      <!-- Bottom Features Grid -->
      <div class="grid md:grid-cols-3 gap-12">
        {#each [
          {
            icon: 'payments',
            title: 'Instant payments',
            description: 'Pay users instantly by running payments and accounts on our single platform'
          },
          {
            icon: 'customize',
            title: 'Tailored accounts',
            description: 'Offer accounts that are tailored to your users\' needs and expand when needed'
          },
          {
            icon: 'card',
            title: 'Card linking',
            description: 'Allow users to spend funds immediately by linking your own issued cards'
          }
        ] as feature}
          <div class="group relative p-6 bg-white rounded-2xl transition-all duration-300
                      hover:shadow-[0_8px_30px_rgb(96,91,255,0.12)] 
                      border border-[#605bff]/10 hover:border-[#605bff]/20">
            <div class="relative space-y-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 
                          flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                          shadow-[0_4px_20px_rgb(96,91,255,0.15)]">
                {#if feature.icon === 'payments'}
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 8l4 4-4 4M7 16l-4-4 4-4M21 12H3" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                {:else if feature.icon === 'customize'}
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
                          stroke-width="2" stroke-linecap="round"/>
                  </svg>
                {:else}
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm-9 3h4m-4 4h7" 
                          stroke-width="2" stroke-linecap="round"/>
                  </svg>
                {/if}
              </div>
              <h3 class="text-xl font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">
                {feature.title}
              </h3>
              <p class="text-[#32325d]/70">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
  
      <!-- Get Started Section -->
      <div class="mt-24 text-center">
        <h2 class="text-3xl font-medium text-[#32325d] mb-4">Get started with one simple integration</h2>
        <p class="text-xl text-[#32325d]/70 mb-8">
          Start with an end-to-end business account solution engineered to launch a fully branded experience fast.
        </p>
        <a href="/docs" class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#605bff]/80 transition-colors">
          Go to docs
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>