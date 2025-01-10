<script lang="ts">
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { fade, fly } from 'svelte/transition';

  const paymentExamples = [
    { type: 'One-time', amount: '$99.00', period: 'Single payment', color: 'from-[#605bff] to-[#8b7fff]' },
    { type: 'Subscription', amount: '$29.00', period: 'Monthly', color: 'from-purple-500 to-indigo-500' },
    { type: 'Custom', amount: 'Flexible', period: 'Any amount', color: 'from-blue-500 to-cyan-500' }
  ];

  const demoSteps = [
    { step: 1, title: 'Create Link', action: 'Enter amount and details' },
    { step: 2, title: 'Share', action: 'Send to your customers' },
    { step: 3, title: 'Get Paid', action: 'Receive instant payments' }
  ];

  let selectedType = 0;
  let currentStep = 0;
  let demoPreview = spring({ x: 0, y: 0, scale: 1 });

  function nextStep() {
    currentStep = (currentStep + 1) % demoSteps.length;
    demoPreview.set({ x: 10, y: -5 }).then(() => demoPreview.set({ x: 0, y: 0 }));
  }

  onMount(() => {
    setInterval(() => {
      selectedType = (selectedType + 1) % paymentExamples.length;
      nextStep();
    }, 3000);
  });
</script>

<section class="relative py-6 sm:py-12 lg:py-32 overflow-hidden px-4 sm:px-6 lg:px-8">
  <!-- Enhanced Modern Background -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[#0A0A0A]"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-[#605bff]/20 via-transparent to-purple-500/10"></div>
    <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#605bff]/5 to-transparent"></div>
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05]"></div>
  </div>

  <div class="relative container mx-auto">
    <!-- Enhanced Mobile-Responsive Title Section -->
    <div class="max-w-4xl mx-auto text-center mb-6 sm:mb-12 lg:mb-20">
      <!-- Mobile-Optimized Notification Badge -->
      <div class="inline-flex items-center gap-1 sm:gap-3 rounded-full 
                  bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl 
                  p-1 sm:p-1.5 pr-2 sm:pr-6 border border-white/[0.15] 
                  mb-4 sm:mb-6 lg:mb-8 shadow-xl shadow-black/20 
                  transition-all duration-300 text-[10px] sm:text-sm
                  mx-auto max-w-[90vw] sm:max-w-none">
        <span class="rounded-full bg-[#605bff] px-1.5 sm:px-4 py-0.5 sm:py-1.5 
                     font-semibold text-white shadow-lg shadow-[#605bff]/20 
                     relative overflow-hidden whitespace-nowrap">
          <span class="relative z-10">New</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent animate-shimmer"></div>
        </span>
        <span class="font-bold text-white flex items-center gap-1 sm:gap-2 
                     tracking-wide whitespace-nowrap">
          Payment Links 2.0
          <div class="relative flex">
            <span class="absolute inline-flex h-1 w-1 sm:h-2 sm:w-2 
                         rounded-full bg-[#605bff] animate-ping opacity-75"></span>
            <span class="relative inline-flex h-1 w-1 sm:h-2 sm:w-2 
                         rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>

      <!-- Mobile-Optimized Title -->
      <h1 class="text-2xl sm:text-4xl lg:text-7xl font-bold text-white 
                 mb-3 sm:mb-6 lg:mb-8 tracking-tight leading-[1.2] sm:leading-[1.1] 
                 px-2 sm:px-4 lg:px-0">
        Create Payment Links
        <span class="relative inline-block mt-1 sm:mt-0 sm:ml-2">
          <span class="relative z-10 bg-gradient-to-r {paymentExamples[selectedType].color} 
                       bg-clip-text text-transparent">Instantly</span>
          <div class="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 
                      bg-gradient-to-r {paymentExamples[selectedType].color} 
                      opacity-20 blur-lg transform -rotate-1"></div>
        </span>
      </h1>
    </div>

    <!-- Mobile-Responsive Interactive Demo -->
    <div class="max-w-[90vw] sm:max-w-2xl mx-auto">
      <div class="relative">
        <!-- Adjusted blur effect for mobile -->
        <div class="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 
                    w-40 sm:w-72 h-40 sm:h-72 
                    bg-[#605bff]/30 rounded-full blur-[60px] sm:blur-[120px]"></div>
        
        <!-- Mobile-Optimized Demo Card -->
        <div 
          style="transform: translate({$demoPreview.x}px, {$demoPreview.y}px) scale({$demoPreview.scale})"
          class="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl 
                 rounded-xl sm:rounded-2xl border border-white/20 
                 p-4 sm:p-6 lg:p-8 shadow-2xl"
        >
          <!-- Mobile-Optimized Step Indicator -->
          <div class="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            {#each demoSteps as { step }, i}
              <div class="flex items-center">
                <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full 
                           flex items-center justify-center text-sm sm:text-base
                           {i === currentStep ? 'bg-[#605bff] text-white' : 'bg-white/10 text-white/60'}">
                  {step}
                </div>
                {#if i < demoSteps.length - 1}
                  <div class="w-4 sm:w-8 h-0.5 bg-white/10"></div>
                {/if}
              </div>
            {/each}
          </div>

          <!-- Mobile-Optimized Content -->
          {#key currentStep}
            <div class="space-y-4 sm:space-y-6" in:fly={{ y: 20, duration: 300 }}>
              <h3 class="text-lg sm:text-xl font-bold text-white">
                {demoSteps[currentStep].title}
              </h3>
              <p class="text-sm sm:text-base text-white/60">
                {demoSteps[currentStep].action}
              </p>
              
              <div class="grid grid-cols-3 gap-2 sm:gap-3">
                {#each ['Amount', 'Currency', 'Link'] as field}
                  <div class="bg-white/5 rounded-lg p-2 sm:p-3 text-center 
                             text-white/60 text-sm hover:bg-white/10 
                             transition-colors">
                    {field}
                  </div>
                {/each}
              </div>
            </div>
          {/key}
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
</style>
