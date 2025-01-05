<script lang="ts">
  import { spring } from 'svelte/motion';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });

  const steps = [
    {
      title: 'Store Setup',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M20 11.5v-1a2.5 2.5 0 00-2.5-2.5h-15A2.5 2.5 0 000 10.5v1m20 0v7.5a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 010 19v-7.5m20 0h-20m17.5 3.75h-15m15 3.75h-15"/>
            </svg>`,
      description: 'Create your digital storefront',
      points: [
        'Custom domain setup',
        'Brand customization',
        'Product catalog'
      ],
      color: '#605bff'
    },
    {
      title: 'Payment Integration',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>`,
      description: 'Set up your payment methods',
      points: [
        'Multiple payment gateways',
        'Subscription billing',
        'Global currencies'
      ],
      color: '#0A2540'
    },
    {
      title: 'Launch & Grow',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M13 10V3L4 14h7v7l9-11h-7zm-2 4l-2 2m4-4l2 2m-6-6l2 2m2-2l2 2"/>
            </svg>`,
      description: 'Start selling globally',
      points: [
        'Analytics dashboard',
        'Marketing tools',
        'Growth insights'
      ],
      color: '#00A3FF'
    }
  ];

  let currentStep = 0;
  const progress = spring(0, { stiffness: 0.1, damping: 0.4 });

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      progress.set(currentStep / (steps.length - 1));
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      progress.set(currentStep / (steps.length - 1));
    }
  }
</script>

<section class="relative overflow-hidden py-32">
  <!-- Enhanced Background -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50/90"></div>
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[800px] h-[800px] 
                  bg-gradient-to-br from-[#605bff]/10 via-purple-400/5 to-transparent 
                  rounded-full blur-3xl animate-slow-float"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] 
                  bg-gradient-to-tr from-[#32325d]/10 via-blue-400/5 to-transparent 
                  rounded-full blur-2xl animate-slow-float-reverse"></div>
    </div>
  </div>

  <div class="relative container mx-auto px-4 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Modern Header with Enhanced Animation -->
    <div class="max-w-3xl mx-auto text-center mb-24">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                  transition-all duration-300 mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
          <span class="relative z-10">E-commerce Ready</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-sm font-medium text-[#32325d] flex items-center gap-2">
          Start Selling Online Today
          <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
        </span>
      </div>

      <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
        Build Your
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">Online Store</span>
          <svg class="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" 
               preserveAspectRatio="none">
            <path d="M0 0L50 10L100 0" fill="url(#gradient)" opacity="0.2"></path>
          </svg>
        </span>
      </h2>
      
      <p class="text-xl text-[#32325d]/70 max-w-2xl mx-auto leading-relaxed">
        Launch your e-commerce business with our powerful platform. 
        Built for modern merchants, designed for growth.
      </p>
    </div>

    <!-- Rest of the content remains the same -->
    <div class="max-w-4xl mx-auto">
      <!-- Steps Timeline -->
      <div class="flex justify-between mb-12 relative">
        <!-- Progress Line -->
        <div class="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2">
          <div class="h-full bg-[#605bff] transition-all duration-500"
               style="width: {$progress * 100}%">
          </div>
        </div>

        {#each steps as step, i}
          <button 
            class="relative z-10 group"
            on:click={() => {
              currentStep = i;
              progress.set(i / (steps.length - 1));
            }}
          >
            <div class="icon-container w-12 h-12 rounded-full flex items-center justify-center
                        transition-all duration-300 
                        {i <= currentStep ? 'bg-[#605bff] text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}
                        hover:scale-110">
              {@html step.icon}
            </div>
            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                        whitespace-nowrap text-sm font-medium
                        {i <= currentStep ? 'text-[#605bff]' : 'text-gray-400'}">
              {step.title}
            </div>
          </button>
        {/each}
      </div>

      <!-- Content Area -->
      <div class="relative min-h-[400px] bg-white/80 backdrop-blur-xl rounded-3xl 
                  shadow-xl overflow-hidden border border-white/20">
        {#each [steps[currentStep]] as step (currentStep)}
          <div
            in:fly={{ x: 50, duration: 400 }}
            out:fly={{ x: -50, duration: 400 }}
            class="absolute inset-0 p-8 flex"
          >
            <!-- Left Content -->
            <div class="w-1/2 pr-8 border-r border-gray-100">
              <div class="w-16 h-16 rounded-2xl bg-[#605bff]/10 flex items-center 
                          justify-center text-[#605bff] mb-6 icon-container
                          hover:bg-[#605bff]/20 transition-all duration-300">
                {@html step.icon}
              </div>
              <h2 class="text-3xl font-bold text-[#32325d] mb-4">{step.title}</h2>
              <p class="text-gray-600 mb-8">{step.description}</p>
              
              <div class="space-y-4">
                {#each step.points as point}
                  <div class="flex items-center gap-3 text-gray-700">
                    <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    {point}
                  </div>
                {/each}
              </div>
            </div>

            <!-- Right Visual -->
            <div class="w-1/2 pl-8 flex items-center justify-center">
              <div class="relative w-72 h-72">
                <!-- Animated Background -->
                <div class="absolute inset-0">
                  <div class="absolute inset-0 bg-gradient-to-br from-[{step.color}]/10 
                              via-transparent to-transparent rounded-full animate-spin-slow"></div>
                  <div class="absolute inset-8 bg-gradient-to-tr from-[{step.color}]/15 
                              via-transparent to-transparent rounded-full animate-spin-slow-reverse"></div>
                </div>

                <!-- Main Icon -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="relative group">
                    <div class="absolute inset-0 bg-white/50 rounded-2xl blur-xl 
                                group-hover:bg-[{step.color}]/20 transition-all duration-500"></div>
                    <div class="relative w-24 h-24 rounded-2xl bg-white/80 backdrop-blur-xl 
                                shadow-xl border border-white/20 flex items-center justify-center 
                                text-[{step.color}] transform group-hover:scale-110 
                                group-hover:rotate-3 transition-all duration-500">
                      {@html step.icon}
                    </div>
                  </div>
                </div>

                <!-- Floating Elements -->
                {#each step.points as point, i}
                  <div class="absolute"
                       style="
                         top: {50 + 40 * Math.sin(2 * Math.PI * i / 3)}%;
                         left: {50 + 40 * Math.cos(2 * Math.PI * i / 3)}%;
                         transform: translate(-50%, -50%) rotate({i * 120}deg)
                       ">
                    <div class="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-xl shadow-lg 
                                border border-white/20 flex items-center justify-center 
                                text-[{step.color}] animate-float"
                         style="animation-delay: {i * 0.5}s">
                      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Navigation -->
      <div class="flex justify-between mt-8">
        <button
          class="px-6 py-3 rounded-xl border-2 border-[#605bff] text-[#605bff] 
                 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#605bff]/5 
                 transition-colors"
          on:click={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          class="px-6 py-3 rounded-xl bg-[#605bff] text-white 
                 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#605bff]/90 
                 transition-colors"
          on:click={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slow-float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-20px, 20px); }
  }

  .animate-slow-float {
    animation: slow-float 20s ease-in-out infinite;
  }

  .animate-slow-float-reverse {
    animation: slow-float 25s ease-in-out infinite reverse;
  }

  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.3; }
  }

  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }

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

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes spin-slow-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .animate-spin-slow-reverse {
    animation: spin-slow 25s linear infinite reverse;
  }
</style>