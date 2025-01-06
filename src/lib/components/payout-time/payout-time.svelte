<script lang="ts">
  import { onMount } from 'svelte';
  
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

  let isVisible = false;
  onMount(() => isVisible = true);
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

      <!-- Right: Enhanced Timer Display -->
      <div class="relative mt-8 lg:mt-0">
        <div class="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] 
                    aspect-square flex items-center justify-center">
          <!-- Background layers - Adjusted for mobile -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#605bff]/5 
                      via-white/[0.02] to-transparent backdrop-blur-xl border border-white/[0.08] 
                      shadow-2xl shadow-black/20"></div>
          
          <!-- Rotating ring - Adjusted visibility -->
          <div class="absolute inset-4 sm:inset-2 rounded-full border border-white/[0.05] 
                      animate-spin-slow"></div>
          
          <!-- Timer Content - Improved mobile layout -->
          <div class="relative text-center z-10 px-4 sm:px-8">
            <div class="space-y-6 sm:space-y-10">
              <!-- Timer display - Better scaling -->
              <div class="relative transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-baseline justify-center">
                  <span class="text-6xl sm:text-[100px] lg:text-[140px] font-bold text-transparent 
                               bg-gradient-to-r from-white to-white/90 bg-clip-text leading-none 
                               tracking-tight drop-shadow-2xl">0.1</span>
                  <span class="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#605bff] 
                               ml-2 sm:ml-4 drop-shadow-lg">s</span>
                </div>
                <div class="mt-3 sm:mt-6 text-base sm:text-lg font-medium text-white/80">
                  Average Processing Time
                </div>
              </div>

              <!-- Stats - Improved mobile layout -->
              <div class="flex justify-center gap-8 sm:gap-16 mt-6 sm:mt-12">
                {#each [
                  { value: '99.9%', label: 'Success Rate', color: 'from-green-400 to-emerald-500' },
                  { value: '24/7', label: 'Support', color: 'from-[#605bff] to-blue-500' }
                ] as stat}
                  <div class="text-center group cursor-pointer transform hover:scale-105 
                              transition-all duration-300">
                    <div class="text-2xl sm:text-3xl font-bold bg-gradient-to-r {stat.color} 
                                bg-clip-text text-transparent mb-1 sm:mb-2">{stat.value}</div>
                    <div class="text-xs sm:text-sm text-white/70 group-hover:text-white/90 
                                transition-colors duration-300">{stat.label}</div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- Live processing indicator - Adjusted for mobile -->
          <div class="absolute top-4 sm:top-8 left-4 sm:left-8">
            <div class="flex items-center gap-2 bg-white/[0.03] rounded-full px-3 sm:px-4 
                        py-1.5 sm:py-2 border border-white/[0.08] shadow-lg">
              <span class="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 
                            animate-ping opacity-75"></span>
                <span class="relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full 
                            bg-green-400"></span>
              </span>
              <span class="text-xs sm:text-sm font-medium text-white/90">Processing Live</span>
            </div>
          </div>

          <!-- Floating payouts - Hide on mobile, show on larger screens -->
          {#each Array(4) as _, i}
            <div class="hidden sm:block absolute animate-payout"
                 style="animation-delay: -{i * 2}s; {i === 0 ? 'top: 15%; right: -80px;' : 
                                                  i === 1 ? 'top: 65%; right: -80px;' :
                                                  i === 2 ? 'top: 25%; left: -80px;' :
                                                           'top: 75%; left: -80px;'}">
              <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl 
                          rounded-xl p-4 border border-white/[0.08] shadow-2xl shadow-black/20
                          hover:bg-white/[0.05] transition-all duration-300 hover:scale-105
                          hover:border-white/[0.12]">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-lg bg-[#605bff]/20 flex items-center 
                              justify-center shadow-lg shadow-[#605bff]/10">
                    <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" 
                         fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" 
                            stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-base font-semibold text-white">
                      ${(Math.random() * 10000).toFixed(2)}
                    </div>
                    <div class="text-sm text-[#605bff] font-medium">Instant Payout</div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes payout {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    20% {
      opacity: 1;
      transform: translateX(-10px) translateY(-10px);
    }
    80% {
      opacity: 1;
      transform: translateX(-20px) translateY(-20px);
    }
    100% {
      opacity: 0;
      transform: translateX(-30px) translateY(-30px);
    }
  }

  .animate-payout {
    animation: payout 4s ease-out infinite;
  }

  @keyframes wave-flow {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  @keyframes float-card {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(1deg); }
  }

  .animate-float-card {
    animation: float-card 3s ease-in-out infinite;
  }

  @keyframes success-move {
    0% { 
      transform: translate(0, 0) scale(0.8);
      opacity: 0;
    }
    20% { 
      transform: translate(-20px, -20px) scale(1);
      opacity: 1;
    }
    80% { 
      transform: translate(20px, -40px) scale(1);
      opacity: 1;
    }
    100% { 
      transform: translate(40px, -60px) scale(0.8);
      opacity: 0;
    }
  }

  .animate-success-move {
    animation: success-move 8s ease-in-out infinite;
  }

  @keyframes progress {
    0% { width: 0; }
    50% { width: 70%; }
    100% { width: 100%; }
  }

  .animate-progress {
    animation: progress 2s ease-in-out;
    width: 100%;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  /* Add text shadow utility */
  .text-shadow-lg {
    text-shadow: 0 0 40px rgba(0,0,0,0.3);
  }

  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>