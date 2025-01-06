<script lang="ts">
  import { spring } from 'svelte/motion';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isVisible = false;
  let activeSection = 0;

  const onboardingFlow = [
    {
      title: 'Account Setup',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>`,
      features: [
        {
          title: 'IpsePay Dashboard',
          description: 'Your command center for payments',
          progress: 85,
          status: 'active',
          highlight: 'Real-time Analytics'
        },
        {
          title: 'Business Profile',
          description: 'Smart profile setup wizard',
          progress: 60,
          status: 'active',
          highlight: 'AI-Assisted'
        },
        {
          title: 'Security Shield',
          description: 'Advanced security protocols',
          progress: 40,
          status: 'pending',
          highlight: 'Bank-Grade'
        }
      ],
      bgGradient: 'from-[#605bff]/5 to-[#605bff]/10',
      color: '#605bff',
      stats: { completed: '85%', timeLeft: '~5 mins' }
    },
    {
      title: 'Smart Verification',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>`,
      features: [
        {
          title: 'Instant KYC',
          description: 'AI-powered verification',
          progress: 30,
          status: 'pending',
          highlight: '2-Min Process'
        },
        {
          title: 'Smart Docs',
          description: 'Automated document processing',
          progress: 0,
          status: 'pending',
          highlight: 'Auto-Scan'
        },
        {
          title: 'Global Compliance',
          description: 'Multi-region support',
          progress: 0,
          status: 'pending',
          highlight: '200+ Countries'
        }
      ],
      bgGradient: 'from-[#32325d]/5 to-[#32325d]/10',
      color: '#32325d',
      stats: { completed: '30%', timeLeft: '~10 mins' }
    },
    {
      title: 'Payment Suite',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>`,
      features: [
        {
          title: 'Smart Payments',
          description: 'Intelligent routing system',
          progress: 0,
          status: 'locked',
          highlight: 'Auto-Optimize'
        },
        {
          title: 'Instant Payouts',
          description: 'Real-time settlements',
          progress: 0,
          status: 'locked',
          highlight: '24/7 Active'
        },
        {
          title: 'Dynamic Pricing',
          description: 'Smart fee optimization',
          progress: 0,
          status: 'locked',
          highlight: 'Save Up to 30%'
        }
      ],
      bgGradient: 'from-[#00A3FF]/5 to-[#00A3FF]/10',
      color: '#00A3FF',
      stats: { completed: '0%', timeLeft: '~15 mins' }
    }
  ];

  const progress = spring(0);
  let currentStep = 0;

  function updateProgress(index: number) {
    currentStep = index;
    progress.set(index / (onboardingFlow.length - 1));
  }

  onMount(() => {
    isVisible = true;
  });
</script>

<section class="relative overflow-hidden py-8 sm:py-16 lg:py-24">
  <!-- Enhanced Modern iOS-style Background -->
  <div class="absolute inset-0">
    <!-- Dynamic Base Layer -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90"></div>
    
    <!-- Enhanced Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary Glow -->
      <div class="absolute top-0 -right-1/4 w-[1200px] h-[1200px]
                  bg-gradient-to-br from-[#605bff]/20 via-purple-400/10 to-transparent 
                  rounded-full blur-[120px] backdrop-blur-3xl animate-slow-spin"></div>
      
      <!-- Secondary Glow -->
      <div class="absolute -bottom-1/4 -left-1/4 w-[1200px] h-[1200px]
                  bg-gradient-to-tr from-[#32325d]/15 via-blue-300/10 to-transparent 
                  rounded-full blur-[150px] backdrop-blur-3xl animate-slow-spin-reverse"></div>
      
      <!-- Accent Glows -->
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px]
                  bg-gradient-to-tr from-pink-500/10 via-purple-300/10 to-transparent 
                  rounded-full blur-[80px] animate-pulse-slow"></div>
      
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]
                  bg-gradient-to-br from-blue-400/10 via-cyan-300/10 to-transparent 
                  rounded-full blur-[100px] animate-pulse-slow-delay"></div>
    </div>

    <!-- Modern Frosted Glass -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 backdrop-blur-[100px] bg-white/30"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 
                  backdrop-blur-3xl"></div>
    </div>
    
    <!-- Enhanced Grid -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>
    </div>

    <!-- Light Rays -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b 
                  from-transparent via-purple-500/10 to-transparent blur-[2px]"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b 
                  from-transparent via-blue-500/10 to-transparent blur-[2px]"></div>
    </div>
  </div>

  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Title Section -->
    <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
      <div class="inline-flex items-center gap-1.5 sm:gap-3 rounded-full bg-white/90 
                  p-1 sm:p-1.5 pr-3 sm:pr-4 backdrop-blur-xl border border-white/20 
                  shadow-xl hover:shadow-2xl transition-all duration-300 
                  mb-4 sm:mb-6 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-white 
                     relative overflow-hidden">
          <span class="relative z-10">IpsePay</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-[10px] sm:text-xs font-medium text-[#32325d]">Gateway Setup</span>
      </div>

      <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 
                 text-[#32325d] px-2">
        <span class="whitespace-normal sm:whitespace-nowrap">Activate Your</span>
        <span class="relative inline-block mt-1 sm:mt-0 sm:ml-2">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">IpsePay Account</span>
        </span>
      </h2>
      
      <p class="text-sm sm:text-base lg:text-lg text-[#32325d]/70 max-w-2xl mx-auto 
                leading-relaxed px-4">
        Get started with IpsePay's global payment solutions
      </p>
    </div>

    <!-- Steps Section -->
    <div class="max-w-5xl mx-auto">
      <div class="relative">
        <!-- Progress Line -->
        <div class="absolute left-[20px] sm:left-[45px] top-0 bottom-0 w-px bg-gray-200">
          <div class="h-full bg-[#605bff] transition-all duration-500"
               style="height: {$progress * 100}%"></div>
        </div>

        <!-- Steps -->
        <div class="relative space-y-6 sm:space-y-8">
          {#each onboardingFlow as section, index}
            <div class="relative pl-12 sm:pl-24 pb-6 sm:pb-8 group"
                 in:fly={{ y: 20, duration: 400, delay: index * 100 }}>
              <!-- Interactive Step Header -->
              <button class="group w-full text-left mb-4 sm:mb-6 transition-all duration-300
                           hover:transform hover:-translate-y-1"
                      on:click={() => updateProgress(index)}>
                <div class="flex items-center gap-3 sm:gap-4">
                  <div class="absolute left-0 flex items-center justify-center 
                             w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl 
                             bg-white/95 shadow-xl border border-white/20
                             backdrop-blur-xl transition-all duration-300
                             group-hover:shadow-2xl group-hover:scale-110
                             {index <= currentStep ? `text-[${section.color}]` : 'text-gray-400'}">
                    {@html section.icon}
                  </div>
                  <div>
                    <h3 class="text-base sm:text-xl font-semibold text-[#32325d] 
                               group-hover:text-[#605bff] transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p class="text-xs sm:text-sm text-[#32325d]/60">
                      {section.stats.completed} complete • {section.stats.timeLeft} remaining
                    </p>
                  </div>
                </div>
              </button>

              <!-- Enhanced Feature Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {#each section.features as feature}
                  <div class="relative bg-white/95 rounded-lg sm:rounded-xl p-4 sm:p-6 
                             shadow-xl border border-white/20 backdrop-blur-xl
                             transition-all duration-500 group/card
                             hover:shadow-2xl hover:-translate-y-1">
                    <div class="mb-3 sm:mb-4">
                      <h4 class="text-sm sm:text-base font-medium text-[#32325d] 
                                group-hover/card:text-[#605bff] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p class="text-xs sm:text-sm text-[#32325d]/60">{feature.description}</p>
                    </div>

                    <!-- Progress Bar -->
                    <div class="h-1 sm:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-[#605bff] to-[#8b7fff] 
                                transition-all duration-500 shadow-lg shadow-[#605bff]/20"
                           style="width: {feature.progress}%"></div>
                    </div>

                    <!-- Status Badge -->
                    <div class="absolute top-2 sm:top-4 right-2 sm:right-4">
                      {#if feature.status === 'active'}
                        <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs 
                                   font-medium bg-[#605bff]/10 text-[#605bff] animate-pulse">
                          Active
                        </span>
                      {:else if feature.status === 'locked'}
                        <span class="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs 
                                   font-medium bg-[#32325d]/10 text-[#32325d]/40">
                          Locked
                        </span>
                      {/if}
                    </div>

                    <!-- Feature Highlight -->
                    <div class="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 
                               text-[10px] sm:text-xs font-medium text-[#605bff]/60
                               opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      {feature.highlight}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between max-w-5xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 
                border-t border-white/10 px-4 sm:px-0">
      <button class="px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg border-2 
                     border-[#605bff] text-[#605bff] font-medium transition-all duration-300
                     hover:bg-[#605bff]/5 hover:shadow-lg hover:shadow-[#605bff]/10
                     disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentStep === 0}
              on:click={() => updateProgress(currentStep - 1)}>
        Previous
      </button>
      <button class="px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg 
                     bg-gradient-to-r from-[#605bff] to-[#8b7fff]
                     text-white font-medium transition-all duration-300
                     hover:shadow-lg hover:shadow-[#605bff]/20 hover:-translate-y-0.5
                     disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentStep === onboardingFlow.length - 1}
              on:click={() => updateProgress(currentStep + 1)}>
        Continue
      </button>
    </div>
  </div>
</section>

<style>
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(96, 91, 255, 0.3); }
    50% { box-shadow: 0 0 40px rgba(96, 91, 255, 0.6); }
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
</style>