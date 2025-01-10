<script lang="ts">
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { fade, fly } from 'svelte/transition';

  const steps = [
    {
      title: 'Create Account',
      description: 'Set up your business profile',
      icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>`,
      progress: 0
    },
    {
      title: 'Verify Identity',
      description: 'Quick security check',
      icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>`,
      progress: 0
    },
    {
      title: 'Connect Bank',
      description: 'Link your payment method',
      icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>`,
      progress: 0
    }
  ];

  let currentStep = 0;
  let progressValue = spring(0);
  let autoProgress = true;

  function resetProgress() {
    currentStep = 0;
    steps.forEach(step => step.progress = 0);
    progressValue.set(0);
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      steps[currentStep - 1].progress = 100;
      updateProgress();
    } else {
      // Loop back to start
      setTimeout(() => {
        resetProgress();
      }, 1000);
    }
  }

  function updateProgress() {
    const totalProgress = steps.reduce((acc, step) => acc + step.progress, 0);
    progressValue.set(totalProgress / (steps.length * 100));
  }

  onMount(() => {
    if (autoProgress) {
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          steps[currentStep].progress += 10; // Slower progress
          if (steps[currentStep].progress >= 100) {
            nextStep();
          }
          updateProgress();
        }
      }, 800); // Slightly slower interval

      return () => clearInterval(interval);
    }
  });
</script>

<section class="relative overflow-hidden py-6 sm:py-12 lg:py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Enhanced Title Section -->
    <div class="max-w-4xl mx-auto text-center mb-6 sm:mb-12 lg:mb-16">
      <!-- Badge -->
      <div class="inline-flex items-center gap-1.5 sm:gap-3 rounded-full 
                  bg-white hover:bg-gray-50 backdrop-blur-xl 
                  p-1.5 pr-3 sm:pr-6 border border-gray-200 mb-4 sm:mb-6 
                  shadow-lg transition-all duration-300
                  text-[11px] sm:text-sm">
        <span class="rounded-full bg-[#605bff] px-2 sm:px-4 py-1 sm:py-1.5 
                     font-semibold text-white shadow-lg shadow-[#605bff]/20 
                     relative overflow-hidden">
          <span class="relative z-10">New</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent animate-shimmer"></div>
        </span>
        <span class="font-bold text-[#32325d] flex items-center gap-1 sm:gap-2 tracking-wide">
          Account Setup
          <div class="relative flex">
            <span class="absolute inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 
                         rounded-full bg-[#605bff] animate-ping opacity-75"></span>
            <span class="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 
                         rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>

      <!-- Title and Subtitle -->
      <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#32325d] mb-3 sm:mb-4 
                 tracking-tight leading-[1.1] px-4 sm:px-0">
        Complete Your
        <span class="relative inline-block mt-1 sm:mt-0 sm:ml-2">
          <span class="relative z-10 bg-gradient-to-r from-[#605bff] to-[#8b7fff] 
                       bg-clip-text text-transparent">Setup</span>
          <div class="absolute -bottom-2 left-0 right-0 h-3 
                      bg-gradient-to-r from-[#605bff] to-[#8b7fff] 
                      opacity-20 blur-lg transform -rotate-1"></div>
        </span>
      </h1>
      
      <p class="text-sm sm:text-base lg:text-lg text-[#32325d]/70 max-w-2xl mx-auto 
                leading-relaxed px-4 sm:px-0">
        Follow these simple steps to get started with your payment gateway integration
      </p>
    </div>

    <!-- Enhanced Progress Section -->
    <div class="max-w-2xl mx-auto">
      <!-- Progress Bar -->
      <div class="relative mb-8 sm:mb-12 px-4 sm:px-0">
        <div class="h-1.5 sm:h-2 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 
                    rounded-full shadow-inner">
          <div class="absolute top-0 left-0 h-full rounded-full 
                      bg-gradient-to-r from-[#605bff] via-[#8b7fff] to-[#605bff]
                      transition-all duration-300 ease-in-out
                      shadow-[0_0_12px_rgba(96,91,255,0.3)]"
               style="width: {$progressValue * 100}%">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent 
                        via-white/30 to-transparent animate-shimmer-fast"></div>
          </div>
        </div>
        
        <div class="absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 
                    ml-4 text-xs sm:text-sm font-medium text-[#32325d]/70">
          {Math.round($progressValue * 100)}%
        </div>
      </div>

      <!-- Steps -->
      <div class="space-y-4 sm:space-y-6 px-4 sm:px-0">
        {#each steps as step, index}
          <div class="relative {index === currentStep ? 'opacity-100' : 'opacity-60'} 
                      transition-opacity duration-300"
               in:fly={{ y: 20, duration: 300, delay: index * 100 }}>
            <div class="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-4 
                        border border-gray-100 shadow-lg hover:shadow-xl
                        transition-all duration-300">
              <!-- Icon -->
              <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#605bff]/10 
                          flex items-center justify-center text-[#605bff]">
                {@html step.icon}
              </div>

              <!-- Content -->
              <div class="flex-grow min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-[#32325d] truncate">
                  {step.title}
                </h3>
                <p class="text-xs sm:text-sm text-[#32325d]/60 truncate">
                  {step.description}
                </p>
              </div>

              <!-- Progress Circle -->
              <div class="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 
                          {step.progress === 100 ? 'border-green-500 bg-green-50' : 
                           index === currentStep ? 'border-[#605bff] animate-pulse' : 
                           'border-gray-200'} 
                          flex items-center justify-center">
                {#if step.progress === 100}
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="none" viewBox="0 0 24 24" 
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M5 13l4 4L19 7"/>
                  </svg>
                {:else if index === currentStep}
                  <span class="text-[10px] sm:text-xs font-medium text-[#605bff]">
                    {step.progress}%
                  </span>
                {/if}
              </div>
            </div>

            {#if index < steps.length - 1}
              <div class="absolute left-5 sm:left-6 top-full h-4 sm:h-6 w-px bg-gray-200"></div>
            {/if}
          </div>
        {/each}
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

  @keyframes shimmer-fast {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-shimmer-fast {
    animation: shimmer-fast 1.5s infinite linear;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Progress bar glow effect */
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 10px rgba(96, 91, 255, 0.3); }
    50% { box-shadow: 0 0 20px rgba(96, 91, 255, 0.5); }
  }

  .progress-glow {
    animation: glow 2s infinite;
  }
</style>