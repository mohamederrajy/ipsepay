<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  
  const features = [
    {
      icon: 'bolt',
      title: 'Instant Transfers',
      description: 'Get paid in seconds, not days'
    },
    {
      icon: 'globe',
      title: 'Global Coverage',
      description: 'Send money to 150+ countries'
    },
    {
      icon: 'shield',
      title: 'Secure & Reliable',
      description: 'Bank-grade encryption'
    }
  ];

  // Animated counter for processing time
  const processingTime = tweened(1, {
    duration: 2000,
    easing: cubicOut
  });

  // Mock transaction data
  const transactions = [
    { amount: 2459.42, currency: 'USD', type: 'Instant Payout' },
    { amount: 1837.89, currency: 'EUR', type: 'Express Transfer' },
    { amount: 5940.23, currency: 'GBP', type: 'Quick Payment' },
    { amount: 3298.67, currency: 'USD', type: 'Rapid Transfer' }
  ];

  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
    processingTime.set(0.1);
  });
</script>

<section class="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
  <!-- Enhanced Modern Dark Background -->
  <div class="absolute inset-0">
    <!-- Main gradient with richer colors -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#0A0A0A]"></div>
    
    <!-- Subtle patterns and effects -->
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.07]"></div>
    
    <!-- Enhanced glow effects -->
    <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#605bff]/5 rounded-full blur-[100px]"></div>
  </div>

  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Enhanced Header -->
    <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-24 lg:mb-32">
      <!-- Improved badge design -->
      <div class="inline-flex items-center gap-2 sm:gap-3 rounded-full 
                  bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl 
                  p-1.5 pr-4 sm:pr-6 border border-white/[0.15] mb-6 sm:mb-8 
                  shadow-xl shadow-black/20 transition-all duration-300">
        <span class="rounded-full bg-[#605bff] px-3 sm:px-4 py-1.5 
                     text-xs sm:text-sm font-semibold text-white 
                     shadow-lg shadow-[#605bff]/20 relative overflow-hidden">
          <span class="relative z-10">Real-time</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent animate-shimmer"></div>
        </span>
        <span class="text-xs sm:text-sm font-bold text-white 
                     flex items-center gap-2 tracking-wide">
          Instant Payouts
          <div class="relative flex">
            <span class="absolute inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 
                         rounded-full bg-white animate-ping opacity-75"></span>
            <span class="relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 
                         rounded-full bg-white"></span>
          </div>
        </span>
      </div>

      <!-- Enhanced title with better contrast -->
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 bg-clip-text">
        <span class="text-white">Get Your Money</span>
        <span class="relative inline-block ml-2 sm:ml-3">
          <span class="relative z-10 bg-gradient-to-r from-[#605bff] to-[#8b7fff] 
                       bg-clip-text text-transparent font-extrabold">Instantly</span>
          <div class="absolute -bottom-2 left-0 right-0 h-3 bg-[#605bff]/20 
                      -rotate-1 blur-sm"></div>
        </span>
      </h2>
      
      <p class="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed 
                font-medium px-4 sm:px-0">
        Experience lightning-fast payouts with our advanced payment infrastructure. 
        No more waiting – get your money when you need it.
      </p>
    </div>

    <!-- Enhanced Feature Grid -->
    <div class="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
      <!-- Left: Feature Cards -->
      <div class="grid gap-4 sm:gap-6">
        {#each features as feature}
          <div class="group relative bg-white/[0.02] backdrop-blur-xl rounded-xl sm:rounded-2xl 
                      p-5 sm:p-7">
            <div class="flex items-start gap-4 sm:gap-6">
              <div class="flex-shrink-0">
                <div class="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#605bff]/10 flex items-center justify-center
                            transition-all duration-500 group-hover:bg-[#605bff]
                            shadow-lg shadow-[#605bff]/10 group-hover:shadow-[#605bff]/20">
                  <svg class="w-7 h-7 text-[#605bff] group-hover:text-white
                            transition-colors duration-500" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {#if feature.icon === 'bolt'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    {:else if feature.icon === 'globe'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    {:else}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    {/if}
                  </svg>
                </div>
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p class="text-sm sm:text-[15px] text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>

            <!-- Enhanced hover effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#605bff]/20 
                        to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                        duration-500 pointer-events-none"></div>
          </div>
        {/each}
      </div>

      <!-- Right: Modern Analytics Display -->
      <div class="relative mt-8 lg:mt-0">
        <div class="relative mx-auto w-full max-w-[480px]">
          <!-- Simple Modern Display -->
          <div class="relative aspect-square">
            <!-- Clean Background -->
            <div class="absolute inset-0">
              <div class="absolute inset-[5%] rounded-full border border-white/5"></div>
              <div class="absolute inset-[10%] rounded-full border border-white/5"></div>
            </div>

            <!-- Central Display -->
            <div class="absolute inset-[15%] rounded-full bg-black/40 backdrop-blur-xl 
                        border border-white/[0.08] flex items-center justify-center
                        hover:scale-105 transition-transform duration-500">
              <div class="text-center">
                <div class="relative mb-4">
                  <div class="flex items-baseline justify-center">
                    <span class="text-7xl font-bold bg-gradient-to-r from-white to-white/80 
                                bg-clip-text text-transparent">
                      {$processingTime.toFixed(1)}
                    </span>
                    <span class="text-3xl font-medium text-[#605bff] ml-2">s</span>
                  </div>
                  <div class="text-sm text-white/60 mt-2">Instant Payout</div>
                </div>
                
                <!-- Simple Progress Indicator -->
                <div class="w-32 h-1 mx-auto bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-[#605bff] animate-progress"></div>
                </div>
              </div>
            </div>

            <!-- Simplified Transaction Cards -->
            {#each transactions as tx, i}
              <div class="transaction-card" 
                   style="--delay: {i * 0.2}s; --tx: {-50 + i * 20}px; --ty: {-50 + i * 20}px;"
                   in:fly={{ y: 20, duration: 500, delay: i * 200 }}>
                <div class="flex items-center gap-3 p-3 rounded-xl 
                            bg-black/40 backdrop-blur-md border border-white/10">
                  <div class="text-base font-medium text-white">
                    {tx.currency} {tx.amount.toFixed(2)}
                  </div>
                </div>
              </div>
            {/each}

            <!-- Simple Stats -->
            <div class="absolute -left-12 top-1/3 animate-float" style="--delay: 0s">
              <div class="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md 
                          border border-white/10">
                <span class="text-lg font-bold text-white">99.9%</span>
              </div>
            </div>

            <div class="absolute -right-12 bottom-1/3 animate-float" style="--delay: 0.3s">
              <div class="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md 
                          border border-white/10">
                <span class="text-lg font-bold text-white">150+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Modern Base Styles */
  :global(.modern-blur) {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Enhanced Animations */
  @keyframes float-up {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  }

  @keyframes glow-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @keyframes slide-in {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes rotate-3d {
    0% { transform: perspective(1000px) rotateY(0deg); }
    100% { transform: perspective(1000px) rotateY(360deg); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  /* Modern Card Effects */
  .neo-card {
    @apply relative overflow-hidden rounded-2xl;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.01) 100%
    );
    box-shadow: 
      0 4px 24px -1px rgba(0, 0, 0, 0.2),
      0 0 1px 0 rgba(255, 255, 255, 0.1) inset;
  }

  .neo-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
  }

  /* Glassmorphism Effects */
  .glass-effect {
    @apply backdrop-blur-xl bg-white/[0.02] border border-white/[0.05];
  }

  /* Modern Gradient Text */
  .gradient-text {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(
      135deg,
      #fff 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
  }

  /* Animated Icons */
  .icon-container {
    @apply relative rounded-xl p-3 transition-all duration-300;
    background: linear-gradient(
      135deg,
      rgba(96, 91, 255, 0.1) 0%,
      rgba(96, 91, 255, 0.05) 100%
    );
  }

  .icon-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -4px rgba(96, 91, 255, 0.2);
  }

  /* Floating Elements */
  .float-element {
    animation: float-up 3s ease-in-out infinite;
  }

  /* Glowing Effects */
  .glow-effect {
    @apply relative;
  }

  .glow-effect::after {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(
      45deg,
      #605bff20,
      transparent,
      #605bff10
    );
    filter: blur(20px);
    z-index: -1;
    animation: glow-pulse 3s ease-in-out infinite;
  }

  /* Modern Button Styles */
  .neo-button {
    @apply relative overflow-hidden rounded-full px-6 py-2 
           transition-all duration-300;
    background: linear-gradient(
      135deg,
      rgba(96, 91, 255, 0.2) 0%,
      rgba(96, 91, 255, 0.1) 100%
    );
  }

  .neo-button:hover {
    @apply transform -translate-y-0.5;
    box-shadow: 0 8px 20px -4px rgba(96, 91, 255, 0.3);
  }

  /* Progress Indicators */
  .progress-bar {
    @apply relative h-1 rounded-full overflow-hidden;
    background: rgba(255, 255, 255, 0.1);
  }

  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    background: linear-gradient(
      90deg,
      #605bff,
      #8b7fff
    );
    animation: progress 2s ease-in-out infinite;
  }

  /* 3D Transform Effects */
  .transform-3d {
    transform-style: preserve-3d;
    animation: rotate-3d 20s linear infinite;
  }

  /* Responsive Design Utilities */
  @media (max-width: 640px) {
    .neo-card {
      @apply rounded-xl;
    }

    .gradient-text {
      background-image: linear-gradient(
        135deg,
        #fff 0%,
        rgba(255, 255, 255, 0.8) 100%
      );
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(96, 91, 255, 0.3);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(96, 91, 255, 0.5);
  }

  /* Animation Utilities */
  .animate-slide-in {
    animation: slide-in 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float-up 3s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow-pulse 3s ease-in-out infinite;
  }

  .stat-card {
    @apply flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] 
           backdrop-blur-sm border border-white/10 shadow-lg;
  }

  .stat-icon {
    @apply w-10 h-10 rounded-lg flex items-center justify-center;
  }

  .transaction-pill {
    @apply absolute transition-all duration-500;
    animation: float-out 4s ease-out infinite;
    animation-delay: var(--tx-delay);
  }

  @keyframes float-out {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    20% {
      opacity: 1;
      transform: translate(var(--tx-x, -20px), var(--tx-y, -20px));
    }
    80% {
      opacity: 1;
      transform: translate(var(--tx-x, -40px), var(--tx-y, -40px));
    }
    100% {
      opacity: 0;
      transform: translate(var(--tx-x, -60px), var(--tx-y, -60px));
    }
  }

  @keyframes progress {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-progress {
    animation: progress 2s ease-in-out infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
    animation-delay: var(--float-delay);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }

  .animate-spin-reverse {
    animation: spin 30s linear infinite reverse;
  }

  .animate-pulse-slow {
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }

  /* Enhanced Base Styles */
  .bg-hub-gradient {
    background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 100%
    );
  }

  .shadow-hub {
    box-shadow: 
      0 0 60px -12px rgba(96, 91, 255, 0.2),
      0 0 1px 0 rgba(255, 255, 255, 0.1) inset;
  }

  .text-shadow-glow {
    text-shadow: 0 0 20px rgba(96, 91, 255, 0.3);
  }

  .text-shadow-glow-intense {
    text-shadow: 0 0 30px rgba(96, 91, 255, 0.5);
  }

  /* Particle System */
  .particle {
    @apply absolute rounded-full bg-white;
    width: var(--particle-size);
    height: var(--particle-size);
    animation: particle-float var(--particle-speed) linear infinite;
    animation-delay: var(--particle-delay);
    opacity: 0.2;
  }

  @keyframes particle-float {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translate(var(--tx, 100px), var(--ty, -100px)) scale(0);
      opacity: 0;
    }
  }

  /* Enhanced Progress Line */
  .progress-line {
    @apply absolute inset-0 bg-gradient-to-r from-[#605bff] via-blue-400 to-[#605bff];
    background-size: 200% 100%;
    animation: progress-slide 2s linear infinite;
  }

  @keyframes progress-slide {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  /* Orbital Effects */
  .orbital-ring {
    @apply transition-all duration-500;
  }

  .orbital-ring:hover {
    @apply border-white/20;
    filter: drop-shadow(0 0 10px rgba(96, 91, 255, 0.3));
  }

  /* Enhanced Transaction Pills */
  .transaction-pill-enhanced {
    @apply absolute transition-all duration-700;
    animation: enhanced-float-out 5s ease-out infinite;
    animation-delay: var(--tx-delay);
  }

  .pill-content {
    @apply flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] 
           backdrop-blur-sm border border-white/10 shadow-lg
           hover:bg-white/[0.05] transition-all duration-300
           hover:scale-105 hover:border-white/20;
  }

  /* Additional Animations */
  @keyframes enhanced-float-out {
    0% {
      opacity: 0;
      transform: translate(0, 0) scale(0.9);
    }
    10% {
      opacity: 1;
      transform: translate(var(--tx-x, -20px), var(--tx-y, -20px)) scale(1);
    }
    80% {
      opacity: 1;
      transform: translate(var(--tx-x, -60px), var(--tx-y, -60px)) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(var(--tx-x, -80px), var(--tx-y, -80px)) scale(0.9);
    }
  }

  .transaction-card {
    @apply absolute transition-all duration-500;
    animation: float-out 4s ease-out infinite;
    animation-delay: var(--delay);
  }

  .stat-indicator {
    @apply flex flex-col items-center p-3 rounded-xl 
           bg-black/40 backdrop-blur-md border border-white/10;
  }

  @keyframes float-out {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    20% {
      opacity: 1;
      transform: translate(var(--tx, -20px), var(--ty, -20px));
    }
    80% {
      opacity: 1;
      transform: translate(var(--tx, -40px), var(--ty, -40px));
    }
    100% {
      opacity: 0;
      transform: translate(var(--tx, -60px), var(--ty, -60px));
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  .animate-spin-slow {
    animation: spin 30s linear infinite;
  }

  .animate-spin-reverse {
    animation: spin 20s linear infinite reverse;
  }

  .animate-progress {
    width: 0%;
    animation: progress 2s ease-out infinite;
  }

  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Add these new animations to your existing styles */
  @keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.25; }
    100% { transform: scale(1); opacity: 0.5; }
  }

  @keyframes shrink {
    from { transform: scaleX(1); }
    to { transform: scaleX(0); }
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }

  .animate-ping-slow {
    animation: ping-slow 2s ease-in-out infinite;
  }

  .animate-shrink {
    animation: shrink 4s linear forwards;
  }

  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(0.95); }
  }

  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.2); opacity: 0.1; }
    100% { transform: scale(1); opacity: 0.2; }
  }

  @keyframes shrink-smooth {
    from { transform: scaleX(1); }
    to { transform: scaleX(0); }
  }

  @keyframes particle {
    0% {
      opacity: 0;
      transform: translate(0, 0) scale(0);
    }
    50% {
      opacity: 1;
      transform: translate(
        calc(var(--particle-index) * 10px - 30px),
        calc(var(--particle-index) * -5px + 15px)
      ) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(
        calc(var(--particle-index) * 20px - 60px),
        calc(var(--particle-index) * -10px + 30px)
      ) scale(0);
    }
  }

  .animate-pulse-subtle {
    animation: pulse-subtle 2s ease-in-out infinite;
  }

  .animate-ping-slow {
    animation: ping-slow 3s ease-in-out infinite;
  }

  .animate-shrink-smooth {
    animation: shrink-smooth 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-particle {
    animation: particle 2s ease-out infinite;
    animation-delay: calc(var(--particle-index) * 200ms);
  }

  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .animate-gradient-x {
    animation: gradient-x 3s linear infinite;
    background-size: 200% 100%;
  }

  .transaction-card {
    animation: float-out 4s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes float-out {
    0% {
      opacity: 0;
      transform: translate(0, 0) scale(0.9);
    }
    20% {
      opacity: 1;
      transform: translate(calc(var(--tx) * 0.2), calc(var(--ty) * 0.2)) scale(1);
    }
    80% {
      opacity: 1;
      transform: translate(calc(var(--tx) * 0.8), calc(var(--ty) * 0.8)) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(var(--tx), var(--ty)) scale(0.9);
    }
  }

  /* Simplified animations */
  .transaction-card {
    @apply absolute transition-all duration-500;
    animation: simple-float 4s ease-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes simple-float {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    20% {
      opacity: 1;
      transform: translate(var(--tx), var(--ty));
    }
    80% {
      opacity: 1;
      transform: translate(var(--tx), var(--ty));
    }
    100% {
      opacity: 0;
      transform: translate(calc(var(--tx) * 2), calc(var(--ty) * 2));
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
</style>