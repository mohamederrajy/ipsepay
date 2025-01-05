<script lang="ts">
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let isVisible = false;
    let timer: NodeJS.Timer;
  
    const steps = [
      {
        title: 'Create Link',
        icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
              </svg>`,
        description: 'Generate instant payment links',
        points: ['One-click generation', 'Custom amounts', 'Shareable links']
      },
      {
        title: 'Share & Accept',
        icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
              </svg>`,
        description: 'Share via any channel',
        points: ['Email & SMS', 'Social media', 'Direct messages']
      },
      {
        title: 'Get Paid',
        icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>`,
        description: 'Instant payments',
        points: ['Secure transactions', 'Multiple currencies', 'Instant settlement']
      }
    ];
  
    let currentStep = 0;
  
    function startAutoSlide() {
      timer = setInterval(() => {
        currentStep = (currentStep + 1) % steps.length;
      }, 4000);
    }
  
    onMount(() => {
      isVisible = true;
      startAutoSlide();
      return () => clearInterval(timer);
    });
  </script>
  
  <section class="relative py-32">
    <div class="relative container mx-auto px-4">
      <!-- Modern Header with Enhanced Animation -->
      <div class="max-w-3xl mx-auto text-center mb-24">
        <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                    backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                    transition-all duration-300 mb-8 animate-float">
          <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                       px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
            <span class="relative z-10">Payment Links</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                        to-transparent animate-shimmer"></div>
          </span>
          <span class="text-sm font-medium text-[#32325d] flex items-center gap-2">
            Simplified Payments
            <div class="relative flex">
              <span class="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full 
                           bg-[#605bff] opacity-75"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#605bff]"></span>
            </div>
          </span>
        </div>
  
        <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
          Payment Links Made
          <span class="relative inline-block">
            <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                         text-transparent animate-gradient">Simple</span>
          </span>
        </h2>
        
        <p class="text-xl text-[#32325d]/70 max-w-2xl mx-auto leading-relaxed">
          Create and share payment links instantly. Accept payments from anywhere in the world.
        </p>
      </div>
  
      <!-- Content Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Enhanced Left: Features List -->
          <div class="space-y-8">
            <!-- Step Title -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#605bff]/10 flex items-center justify-center text-[#605bff]">
                {@html steps[currentStep].icon}
              </div>
              <div>
                <h3 class="text-2xl font-bold text-[#32325d] mb-1">{steps[currentStep].title}</h3>
                <p class="text-gray-500">{steps[currentStep].description}</p>
              </div>
            </div>

            <!-- Enhanced Feature Points -->
            {#each steps[currentStep].points as point, i}
              <div class="transform hover:-translate-y-1 transition-all duration-300">
                <div class="flex items-start gap-4 p-6 rounded-2xl bg-white 
                            border border-gray-100 shadow-sm hover:shadow-lg 
                            hover:border-[#605bff]/20 group transition-all duration-300">
                  <!-- Animated Number -->
                  <div class="flex-shrink-0 w-8 h-8 rounded-xl bg-[#605bff]/10 
                              group-hover:bg-[#605bff] text-[#605bff] group-hover:text-white 
                              flex items-center justify-center font-semibold transition-all duration-300">
                    {i + 1}
                  </div>
                  
                  <!-- Feature Content -->
                  <div class="space-y-2">
                    <h4 class="font-semibold text-[#32325d] group-hover:text-[#605bff] 
                               transition-colors duration-300">
                      {point}
                    </h4>
                    <!-- Dynamic descriptions based on points -->
                    <p class="text-sm text-gray-500 leading-relaxed">
                      {#if i === 0}
                        Generate secure payment links in seconds with custom amounts and descriptions.
                      {:else if i === 1}
                        Share your payment links across any platform or communication channel.
                      {:else}
                        Track payments in real-time with instant notifications and detailed analytics.
                      {/if}
                    </p>
                  </div>

                  <!-- Hover Arrow -->
                  <div class="ml-auto transform translate-x-2 opacity-0 group-hover:opacity-100 
                              group-hover:translate-x-0 transition-all duration-300">
                    <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            {/each}

            <!-- Action Button -->
            <div class="pt-4">
              <button class="inline-flex items-center gap-2 px-6 py-3 bg-[#605bff]/10 
                             text-[#605bff] font-medium rounded-xl hover:bg-[#605bff] 
                             hover:text-white transition-all duration-300 group">
                Learn More
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
          </div>
  
          <!-- Right: Interactive Payment Link Demo -->
          <div class="relative">
            <div class="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div class="mb-8 space-y-4">
                <div class="flex items-center justify-between">
                  <div class="text-2xl font-bold text-[#32325d]">
                    {steps[currentStep].title}
                  </div>
                  <div class="text-[#605bff]">
                    {@html steps[currentStep].icon}
                  </div>
                </div>
                <p class="text-gray-600">
                  {steps[currentStep].description}
                </p>
              </div>
  
              <!-- Interactive Elements -->
              <div class="space-y-4">
                <div class="p-4 rounded-xl bg-[#605bff]/5 border border-[#605bff]/10">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-[#32325d]">Payment Amount</span>
                    <span class="text-[#605bff] font-bold">$99.00</span>
                  </div>
                </div>
                
                <button class="w-full py-3 px-4 bg-[#605bff] text-white rounded-xl 
                             hover:bg-[#605bff]/90 transition-all duration-300 
                             shadow-lg shadow-[#605bff]/25 hover:shadow-xl 
                             hover:shadow-[#605bff]/30">
                  Create Payment Link
                </button>
              </div>
            </div>
  
            <!-- Navigation dots -->
            <div class="flex justify-center gap-2 mt-8">
              {#each steps as _, i}
                <button
                  class="w-2 h-2 rounded-full transition-all duration-300 
                         {currentStep === i ? 'bg-[#605bff] w-8' : 'bg-gray-300'}"
                  on:click={() => currentStep = i}
                ></button>
              {/each}
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
  
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  
    .animate-gradient {
      background-size: 200% auto;
      animation: gradient 4s ease infinite;
    }
  
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  
    /* Add new animation for number hover effect */
    @keyframes number-pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  
    .number-animate {
      animation: number-pulse 1s ease-in-out infinite;
    }
  </style>