<script lang="ts">
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  
  const paymentExamples = [
    { type: 'One-time', amount: '$99.00', period: 'Single payment', color: 'from-[#605bff] to-[#8b7fff]' },
    { type: 'Subscription', amount: '$29.00', period: 'Monthly', color: 'from-purple-500 to-indigo-500' },
    { type: 'Custom', amount: 'Flexible', period: 'Any amount', color: 'from-blue-500 to-cyan-500' }
  ];

  const features = [
    {
      title: 'Smart Links',
      description: "Links that adapt to your customer's location and currency",
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>`
    },
    {
      title: 'Instant Checkout',
      description: 'One-click payments with smart form autofill',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>`
    },
    {
      title: 'Analytics',
      description: 'Track conversions and payment success rates',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>`
    }
  ];

  let selectedType = 0;
  let isVisible = false;
  let linkPreview = spring({ x: 0, y: 0, scale: 1 });
  let copyText = 'Copy Link';
  let notifications = [
    'New payment received',
    'Link shared 5 times',
    'Analytics updated'
  ];
  let currentNotification = 0;

  const handleCopy = () => {
    copyText = 'Copied!';
    linkPreview.set({ scale: 0.95 })
      .then(() => linkPreview.set({ scale: 1 }));
    setTimeout(() => copyText = 'Copy Link', 2000);
  };

  onMount(() => {
    isVisible = true;
    setInterval(() => {
      selectedType = (selectedType + 1) % paymentExamples.length;
      currentNotification = (currentNotification + 1) % notifications.length;
      linkPreview.set({ x: 10, y: -10 })
        .then(() => linkPreview.set({ x: 0, y: 0 }));
    }, 3000);
  });
</script>

<section class="relative py-8 sm:py-16 lg:py-32 overflow-hidden px-4 sm:px-6 lg:px-8">
  <!-- Enhanced Modern Background -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[#0A0A0A]"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-[#605bff]/20 via-transparent to-purple-500/10"></div>
    <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#605bff]/5 to-transparent"></div>
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05]"></div>
  </div>

  <div class="relative container mx-auto">
    <!-- Enhanced Header with better mobile spacing -->
    <div class="max-w-4xl mx-auto text-center mb-8 sm:mb-16 lg:mb-24">
      <!-- Notification Badge - Mobile optimized -->
      <div class="inline-flex items-center gap-1.5 sm:gap-3 rounded-full 
                  bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl 
                  p-1.5 pr-3 sm:pr-6 border border-white/[0.15] mb-4 sm:mb-8 
                  shadow-xl shadow-black/20 transition-all duration-300
                  text-[11px] sm:text-sm">
        <span class="rounded-full bg-[#605bff] px-2 sm:px-4 py-1 sm:py-1.5 
                     font-semibold text-white shadow-lg shadow-[#605bff]/20 
                     relative overflow-hidden">
          <span class="relative z-10">New</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent animate-shimmer"></div>
        </span>
        <span class="font-bold text-white flex items-center gap-1 sm:gap-2 tracking-wide">
          Payment Links 2.0
          <div class="relative flex">
            <span class="absolute inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 
                         rounded-full bg-[#605bff] animate-ping opacity-75"></span>
            <span class="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 
                         rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>

      <!-- Title - Mobile optimized -->
      <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 
                 tracking-tight leading-[1.1] px-4 sm:px-0">
        Create Payment Links
        <span class="relative inline-block mt-1 sm:mt-0 sm:ml-2">
          <span class="relative z-10 bg-gradient-to-r {paymentExamples[selectedType].color} 
                       bg-clip-text text-transparent">Instantly</span>
          <div class="absolute -bottom-2 left-0 right-0 h-3 
                      bg-gradient-to-r {paymentExamples[selectedType].color} 
                      opacity-20 blur-lg transform -rotate-1"></div>
        </span>
      </h1>
    </div>

    <!-- Content Grid - Mobile optimized -->
    <div class="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-20 max-w-6xl mx-auto">
      <!-- Left: Payment Link Generator - Mobile optimized -->
      <div class="space-y-4 sm:space-y-8">
        <div class="bg-white/[0.03] backdrop-blur-xl rounded-xl sm:rounded-2xl 
                    border border-white/10 p-4 sm:p-6">
          <!-- Amount Input - Mobile optimized -->
          <div class="space-y-4 sm:space-y-6">
            <div class="relative group">
              <input type="text" 
                     value={paymentExamples[selectedType].amount}
                     class="w-full bg-white/5 border border-white/10 rounded-lg 
                            px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white 
                            placeholder-white/40 focus:outline-none focus:ring-2 
                            focus:ring-[#605bff]/50 focus:border-[#605bff]"
                     placeholder="Enter amount">
              <div class="absolute right-3 top-1/2 -translate-y-1/2">
                <select class="bg-transparent text-white/60 text-sm sm:text-base 
                             border-none focus:outline-none">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>

            <!-- Payment Type Selector - Mobile optimized -->
            <div class="grid grid-cols-3 gap-2 sm:gap-3">
              {#each ['One-time', 'Recurring', 'Subscription'] as type}
                <button class="relative group bg-white/5 rounded-lg p-2 sm:p-3 
                             border border-white/10 hover:bg-white/10 
                             transition-all duration-300 text-xs sm:text-sm
                             {selectedType === 0 ? 'border-[#605bff] bg-[#605bff]/10' : ''}">
                  <span class="font-medium text-white">{type}</span>
                </button>
              {/each}
            </div>

            <!-- Features Toggle - Mobile optimized -->
            <div class="space-y-2 sm:space-y-3">
              {#each [
                { name: 'Custom branding', icon: '🎨' },
                { name: 'Payment reminder', icon: '⏰' },
                { name: 'Analytics tracking', icon: '📊' }
              ] as feature}
                <label class="flex items-center justify-between p-2.5 sm:p-3 
                             bg-white/5 rounded-lg hover:bg-white/10 
                             transition-all duration-300 cursor-pointer group">
                  <div class="flex items-center gap-2 sm:gap-3">
                    <span class="text-base sm:text-lg">{feature.icon}</span>
                    <span class="text-xs sm:text-sm text-white">{feature.name}</span>
                  </div>
                  <div class="relative">
                    <div class="w-10 h-6 bg-white/10 rounded-full transition-colors 
                               group-hover:bg-white/20">
                      <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
                                 transition-transform duration-200 transform"></div>
                    </div>
                  </div>
                </label>
              {/each}
            </div>

            <!-- Action Buttons - Mobile optimized -->
            <div class="flex gap-2 sm:gap-3 mt-4">
              <button class="flex-1 bg-[#605bff] text-white rounded-xl px-4 sm:px-6 
                             py-2.5 sm:py-3 text-sm sm:text-base font-medium 
                             hover:bg-[#605bff]/90 transition-all duration-300">
                Create Link
              </button>
              <button class="flex-1 bg-white/5 text-white rounded-xl px-4 sm:px-6 
                             py-2.5 sm:py-3 text-sm sm:text-base font-medium 
                             hover:bg-white/10 transition-all duration-300 
                             border border-white/10">
                Preview
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Stats - Mobile optimized -->
        <div class="grid grid-cols-3 gap-2 sm:gap-4">
          {#each [
            { label: 'Total Links', value: '2,431' },
            { label: 'Active Links', value: '1,823' },
            { label: 'Success Rate', value: '98.3%' }
          ] as stat}
            <div class="bg-white/[0.03] backdrop-blur-xl rounded-lg sm:rounded-xl 
                        p-3 sm:p-4 border border-white/10">
              <div class="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div class="text-xs sm:text-sm text-white/60">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right side preview remains the same but with mobile optimization -->
      <div class="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
        <div style="transform: translate({$linkPreview.x}px, {$linkPreview.y}px) 
                    scale({$linkPreview.scale})"
             class="w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 
                    backdrop-blur-xl rounded-2xl border border-white/20 p-8 
                    shadow-2xl shadow-black/20 transition-all duration-300">
          <div class="space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h3 class="text-xl font-bold text-white">
                  {paymentExamples[selectedType].type} Payment
                </h3>
                <p class="text-white/60 text-sm">
                  {paymentExamples[selectedType].period}
                </p>
              </div>
              <div class="text-2xl font-bold text-white">
                {paymentExamples[selectedType].amount}
              </div>
            </div>

            <!-- Payment Methods -->
            <div class="grid grid-cols-3 gap-3">
              {#each ['Visa', 'Mastercard', 'PayPal'] as method}
                <div class="bg-white/5 rounded-lg p-3 text-center text-white/60 
                          text-sm hover:bg-white/10 transition-colors duration-300">
                  {method}
                </div>
              {/each}
            </div>

            <!-- Security Info -->
            <div class="flex items-center justify-center gap-2 text-white/40 text-sm">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Secured & Encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-shimmer {
    animation: shimmer 2.5s infinite;
  }

  @keyframes slide-up {
    0% { transform: translateY(10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out forwards;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
</style>