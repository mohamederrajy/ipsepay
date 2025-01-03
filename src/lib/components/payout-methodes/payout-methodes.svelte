<script lang="ts">
    const payoutMethods = [
      {
        name: 'Local Bank Transfer',
        icon: 'bank',
        description: 'Direct transfer to your local bank account',
        features: ['No fees', '1-2 business days', 'Available worldwide'],
        color: '#605bff'
      },
      {
        name: 'USDT (TRC20)',
        icon: 'crypto',
        description: 'Receive payments in USDT stablecoin',
        features: ['Instant transfer', 'Low fees', 'Global access'],
        color: '#26A17B'
      },
      {
        name: 'Payoneer',
        icon: 'payoneer',
        description: 'Professional payment service provider',
        features: ['Multiple currencies', 'Global reach', 'Professional tools'],
        color: '#FF4800'
      },
      {
        name: 'Wise',
        icon: 'wise',
        description: 'International money transfers made easy',
        features: ['Best exchange rates', 'Fast transfers', '50+ currencies'],
        color: '#00B9FF'
      }
    ];
  </script>
  
  <section class="py-16 md:py-24 relative overflow-hidden  pb-20 border-b border-gray-200">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="max-w-xl">
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l5.09 5.09L12 12.18 6.91 7.09 12 2z"/>
            </svg>
            <span class="text-sm text-gray-600">Payout Methods</span>
          </div>
  
          <h1 class="text-4xl md:text-5xl font-bold text-[#32325d] mb-6">
            Get paid your way, 
            <span class="block">anywhere in the world</span>
          </h1>
  
          <p class="text-lg text-gray-600 mb-8">
            Choose from multiple payout options that suit your business needs. Whether you prefer traditional banking or modern digital solutions, we've got you covered.
          </p>
  
          <div class="flex flex-wrap gap-4">
            <a href="/account/setup-payout" class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-lg hover:bg-[#605bff]/90 transition-colors">
              Set up payouts
            </a>
            <a href="/payout-guide" class="inline-flex items-center px-6 py-3 text-[#605bff] font-medium hover:bg-[#605bff]/5 rounded-lg transition-colors">
              Learn more →
            </a>
          </div>
        </div>
  
        <!-- Right Side - Payout Methods -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent rounded-3xl"></div>
          <div class="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each payoutMethods as method}
              <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <!-- Icon -->
                <div class="mb-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background-color: {method.color}10">
                    {#if method.icon === 'bank'}
                      <svg class="w-6 h-6" style="color: {method.color}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                      </svg>
                    {:else if method.icon === 'crypto'}
                      <svg class="w-6 h-6" style="color: {method.color}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8M12 16V8"/>
                      </svg>
                    {:else if method.icon === 'payoneer'}
                      <svg class="w-6 h-6" style="color: {method.color}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    {:else}
                      <svg class="w-6 h-6" style="color: {method.color}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    {/if}
                  </div>
                </div>
  
                <!-- Content -->
                <h3 class="text-lg font-medium text-gray-900 mb-2 group-hover:text-[#605bff] transition-colors">
                  {method.name}
                </h3>
                <p class="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
  
                <!-- Features -->
                <div class="space-y-2">
                  {#each method.features as feature}
                    <div class="flex items-center gap-2 text-sm text-gray-600">
                      <svg class="w-4 h-4" style="color: {method.color}" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {feature}
                    </div>
                  {/each}
                </div>
  
                <!-- Corrected Setup Button -->
                <button 
                  class="mt-6 w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-opacity-20"
                  style="color: {method.color}; background-color: {method.color}10"
                >
                  Set up {method.name} →
                </button>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .container {
      max-width: 1280px;
    }
  </style>