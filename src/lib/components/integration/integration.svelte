<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;
</script>

<section class="relative py-16 md:py-24 overflow-hidden bg-[#f4f4f459]" id="integration">
  <div class="absolute inset-0 bg-[#F8F9FF]">
    <div class="absolute inset-0" style="background-image: radial-gradient(#E2E7FF 1px, transparent 1px);background-size: 24px 24px;"></div>
  </div>

  <div class="container relative mx-auto px-4 md:px-6">
    <div class="text-center mb-12 md:mb-16">
      <span class="text-[#605bff] text-sm md:text-base font-semibold mb-4 block">How to integrate</span>
      <h2 class="text-3xl md:text-5xl font-bold mb-6">
        Integration <span class="text-[#605bff]">made simple</span>
      </h2>
      <p class="text-gray-600 max-w-3xl mx-auto mb-8">
        Improve performance and unlock global coverage through a single integration of all payment methods
      </p>
      <a  class="inline-flex items-center justify-center px-6 py-3 bg-[#0f1728] text-white rounded-full hover:bg-[#0f1728]/90 transition-colors" href="/contact" class:active={routeTd === "/contact"}>
        Contact Us
      </a>
    </div>
  
    <!-- Integration Methods Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
      <!-- API -->
      <div class="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <div class="w-10 h-10">
          <img src="/images/payapi.png" alt="API" class="w-full h-full object-contain" />
        </div>
        <span class="font-semibold">API</span>
      </div>
  
      <!-- Praxis -->
      <div class="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <div class="w-10 h-10">
          <img src="/images/pay-link.png" alt="Praxis" class="w-full h-full object-contain" />
        </div>
        <span class="font-semibold">Payment Link</span>
      </div>
  
      <!-- PIQ Devcode -->
      <div class="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <div class="w-10 h-10">
          <img src="/images/shopify-icon.webp" alt="PIQ" class="w-full h-full object-contain" />
        </div>
        <span class="font-semibold">Shopify</span>
      </div>
  
      <!-- OpenCart -->
      <div class="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm md:col-start-2">
        <div class="w-10 h-10">
          <img src="/images/open-icon.png" alt="OpenCart" class="w-full h-full object-contain" />
        </div>
        <span class="font-semibold">OpenCart</span>
      </div>
  
      <!-- WooCommerce -->
      <div class="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <div class="w-10 h-10">
          <img src="/images/wooicon.webp" alt="WooCommerce" class="w-full h-full object-contain" />
        </div>
        <span class="font-semibold">WooCommerce</span>
      </div>
    </div>
  </div>
</section>
  
<style>
  @keyframes pulse {
    0% { opacity: 0.4; }
    50% { opacity: 0.7; }
    100% { opacity: 0.4; }
  }

  :global(.bg-\[#F8F9FF\] div) {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
  