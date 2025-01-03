<script lang="ts">
  import { page } from "$app/stores";
  $: routeTd = $page.route.id;

  const paymentMethods = [
    { name: 'Credit Card', icon: 'credit-card', description: 'Visa, Mastercard, Amex' },
    { name: 'Digital Wallets', icon: 'wallet', description: 'Apple Pay, Google Pay' },
    { name: 'Bank Transfer', icon: 'bank', description: 'ACH, Wire, SEPA' },
    { name: 'Cryptocurrency', icon: 'crypto', description: 'Bitcoin, USDT, ETH' },
    { name: 'Local Methods', icon: 'globe', description: 'iDEAL, Sofort, GiroPay' },
    { name: 'Buy Now Pay Later', icon: 'calendar', description: 'Klarna, Affirm, Afterpay' }
  ];
</script>

<section class="py-20 bg-[#f7f7f8]/70  pb-20 border-b border-gray-200">
  <div class="container px-4 sm:px-6 mx-auton ">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-[2.5rem] font-medium text-[#32325d] mb-6">
        Accept payments everywhere
      </h2>
      <p class="text-gray-600 text-lg">
        Enable your business to accept payments globally with our comprehensive payment solution.
      </p>
    </div>

    <!-- Payment Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto bg-[#f7f7f8]/70 ">
      {#each paymentMethods as method}
        <div class="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#605bff]/20 transition-all duration-300">
          <!-- Icon -->
          <div class="mb-5">
            <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center group-hover:bg-[#605bff]/20 transition-colors">
              {#if method.icon === 'credit-card'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <path d="M2 10h20M7 15h2"/>
                </svg>
              {:else if method.icon === 'wallet'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2z"/>
                  <path d="M16 12h.01"/>
                </svg>
              {:else if method.icon === 'bank'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m4-11v11m4-11v11m4-11v11m4-11v11"/>
                </svg>
              {:else if method.icon === 'crypto'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M15 9.354a4 4 0 100 5.292"/>
                </svg>
              {:else if method.icon === 'globe'}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              {:else}
                <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              {/if}
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-lg font-medium text-gray-900 mb-2 group-hover:text-[#605bff] transition-colors">
            {method.name}
          </h3>
          <p class="text-gray-600 text-sm">
            {method.description}
          </p>

          <!-- Hover State Indicator -->
          <div class="mt-4 flex items-center gap-2 text-[#605bff] opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-sm font-medium">Learn more</span>
            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
            </svg>
          </div>
        </div>
      {/each}
    </div>

    <!-- CTA -->
    <div class="text-center mt-16">
      <a href="/account/signup" class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-lg hover:bg-[#605bff]/90 transition-colors">
        Start Accepting Payments →
      </a>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 1280px;
  }
</style>