<script lang="ts">
  import { spring } from 'svelte/motion';
  import { fade } from 'svelte/transition';

  const steps = [
    {
      title: 'Create Account',
      description: 'Sign up and verify your identity',
      icon: 'user',
      features: ['Quick registration', 'Secure verification', 'Business profile setup']
    },
    {
      title: 'Connect Payment Methods',
      description: 'Set up your preferred payment options',
      icon: 'card',
      features: ['Multiple payment options', 'Secure integration', 'Instant activation']
    },
    {
      title: 'Start Accepting Payments',
      description: 'Begin receiving payments immediately',
      icon: 'money',
      features: ['Real-time transactions', 'Payment dashboard', 'Transaction history']
    }
  ];

  let currentStep = 0;
  let direction = 1;
  const progress = spring(0, {
    stiffness: 0.1,
    damping: 0.4
  });

  function nextStep() {
    if (currentStep < steps.length - 1) {
      direction = 1;
      currentStep++;
      progress.set(currentStep / (steps.length - 1));
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      direction = -1;
      currentStep--;
      progress.set(currentStep / (steps.length - 1));
    }
  }
</script>

<section class="py-16 md:py-24 relative overflow-hidden pb-20 border-b border-gray-200">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Content -->
      <div class="max-w-xl">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <span class="text-sm text-gray-600">Easy Onboarding</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-[#32325d] mb-6">
          Start accepting payments
          <span class="block">in minutes</span>
        </h1>

        <p class="text-lg text-gray-600 mb-8">
          Our streamlined onboarding process gets you up and running quickly. Follow these simple steps to begin accepting payments from your customers.
        </p>

        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              class="h-full bg-[#605bff] transition-all duration-500 ease-out rounded-full"
              style="width: {$progress * 100}%"
            ></div>
          </div>
          <div class="mt-2 text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex gap-4 mb-8">
          <button
            class="px-4 py-2 rounded-lg border border-[#605bff] text-[#605bff] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#605bff]/5 transition-colors"
            on:click={prevStep}
            disabled={currentStep === 0}
          >
            ← Previous
          </button>
          <button
            class="px-4 py-2 rounded-lg bg-[#605bff] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#605bff]/90 transition-colors"
            on:click={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            Next →
          </button>
        </div>

       
      </div>

      <!-- Right Side - Interactive Steps -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent rounded-3xl"></div>
        <div class="relative overflow-hidden">
          <div 
            class="flex transition-all duration-700 ease-in-out"
            style="transform: translateX(-{currentStep * 100}%)"
          >
            {#each steps as step, i}
              <div class="w-full flex-none">
                <div class="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                      {#if step.icon === 'user'}
                        <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      {:else if step.icon === 'card'}
                        <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                          <line x1="1" y1="10" x2="23" y2="10"/>
                        </svg>
                      {:else}
                        <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                        </svg>
                      {/if}
                    </div>

                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="bg-[#605bff]/10 text-[#605bff] text-sm font-medium px-2 py-1 rounded">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 class="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                      <p class="text-gray-600 mb-4">{step.description}</p>
                      
                      <div class="space-y-2">
                        {#each step.features as feature}
                          <div class="flex items-center gap-2 text-sm text-gray-600">
                            <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            {feature}
                          </div>
                        {/each}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 1280px;
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .flex-none {
    flex: 0 0 100%;
  }
</style>