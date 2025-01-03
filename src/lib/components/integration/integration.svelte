<script lang="ts">
  const integrations = [
    {
      name: 'API Integration',
      icon: 'code',
      description: 'Direct integration with our RESTful API',
      features: ['Secure', 'Scalable', 'Well-documented']
    },
    {
      name: 'Payment Links',
      icon: 'link',
      description: 'No-code solution for quick payments',
      features: ['Instant setup', 'Shareable', 'Customizable']
    },
    {
      name: 'Shopify',
      icon: 'shopify',
      description: 'Official Shopify payment integration',
      features: ['One-click setup', 'Auto-sync', 'Dashboard']
    },
    {
      name: 'OpenCart',
      icon: 'cart',
      description: 'Certified OpenCart extension',
      features: ['Easy install', 'Full features', 'Support']
    },
    {
      name: 'WooCommerce',
      icon: 'woo',
      description: 'WordPress WooCommerce plugin',
      features: ['Quick setup', 'Auto-updates', 'Support']
    },
    {
      name: 'Magento',
      icon: 'magento',
      description: 'Official Magento 2 extension',
      features: ['Enterprise-ready', 'Secure', 'Scalable']
    }
  ];
</script>

<section class="py-20 bg-[#f7f7f8]/70  pb-20 border-b border-gray-200">
  <div class="container px-4 sm:px-6 mx-auto">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-[2.5rem] font-medium text-[#32325d] mb-6">
        Quick and easy integration
      </h2>
      <p class="text-gray-600 text-lg">
        Start accepting payments in minutes with our integration options
      </p>
    </div>

    <!-- Integration Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {#each integrations as integration}
        <div class="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#605bff]/20 transition-all duration-300">
          <!-- Icon -->
          <div class="mb-5">
            <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center group-hover:bg-[#605bff]/20 transition-colors">
              {#if integration.icon === 'code'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                </svg>
              {:else if integration.icon === 'link'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                </svg>
              {:else if integration.icon === 'shopify'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M12 16V8m-4 4h8"/>
                </svg>
              {:else if integration.icon === 'cart'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              {:else if integration.icon === 'woo'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              {:else}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M12 8v8m-4-4h8"/>
                </svg>
              {/if}
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-lg font-medium text-gray-900 mb-2 group-hover:text-[#605bff] transition-colors">
            {integration.name}
          </h3>
          <p class="text-gray-600 text-sm mb-4">
            {integration.description}
          </p>

          <!-- Features -->
          <div class="space-y-2">
            {#each integration.features as feature}
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                {feature}
              </div>
            {/each}
          </div>

          <!-- Integration Button -->
          <button class="mt-6 w-full px-4 py-2 text-sm font-medium text-[#605bff] bg-[#605bff]/5 rounded-lg hover:bg-[#605bff]/10 transition-colors">
            Integrate Now
          </button>
        </div>
      {/each}
    </div>

    <!-- CTA -->
    <div class="text-center mt-16">
      <a href="/documentation" class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-lg hover:bg-[#605bff]/90 transition-colors">
        View Integration Guide →
      </a>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 1280px;
  }
</style>