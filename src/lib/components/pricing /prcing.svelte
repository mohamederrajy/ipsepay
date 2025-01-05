<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const pricingPlans = [
    {
      name: 'Bank Transfer',
      icon: '/images/payment/bank.svg',
      description: '*Fees (excl VAT)',
      onlinePayment: '3.5% plus USD 1.00',
      payout: '3.5% plus USD 1.00',
      bgColor: 'bg-gradient-to-br from-[#1434CB]/5 to-[#1434CB]/10',
      textColor: 'text-[#1434CB]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#1434CB]/10 to-[#1434CB]/20',
      paymentIcons: [
        '/images/brands/visa.png',
        '/images/brands/MasterCard.png',
        '/images/brands/logoamx.png'
      ]
    },
    {
      name: 'e-Wallet',
      icon: '/images/payment/wallet.svg',
      description: '*Need Verification',
      onlinePayment: '3.5% plus USD 1.00',
      payout: '3.5% plus USD 1.00',
      bgColor: 'bg-gradient-to-br from-[#FF6000]/5 to-[#FF6000]/10',
      textColor: 'text-[#FF6000]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#FF6000]/10 to-[#FF6000]/20',
      paymentIcons: [
        '/images/brands/aplepay.png',
        '/images/brands/logog.webp'
      ]
    },
    {
      name: 'Credit Card',
      icon: '/images/payment/credit-card.svg',
      description: '*Fees (excl VAT)',
      onlinePayment: '3.5% plus USD 1.00',
      payout: '3.5% plus USD 1.00',
      bgColor: 'bg-gradient-to-br from-[#32325d]/5 to-[#32325d]/10',
      textColor: 'text-[#32325d]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#32325d]/10 to-[#32325d]/20',
      paymentIcons: [
        '/images/brands/visa.png',
        '/images/brands/MasterCard.png'
      ]
    },
    {
      name: 'Cardless Credit',
      icon: '/images/payment/cardless.svg',
      description: '*Account Must be registered',
      onlinePayment: '3.5% plus USD 1.00',
      payout: '3.5% plus USD 1.00',
      bgColor: 'bg-gradient-to-br from-[#605bff]/5 to-[#605bff]/10',
      textColor: 'text-[#605bff]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#605bff]/10 to-[#605bff]/20',
      paymentIcons: [
        '/images/brands/Discover.png'
      ]
    }
  ];
</script>

<section class="relative overflow-hidden py-32">
  <!-- Enhanced Background with Animation -->
  <div class="absolute inset-0 bg-[#fafafa]">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.3]"></div>
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[1200px] h-[1200px] 
                  bg-gradient-to-br from-[#605bff]/10 via-purple-100/10 to-transparent 
                  rounded-full blur-3xl transform rotate-12 animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-[1000px] h-[1000px] 
                  bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/5 to-transparent 
                  rounded-full blur-3xl transform -rotate-12 animate-pulse"></div>
    </div>
  </div>

  <!-- Content Container -->
  <div class="relative container mx-auto px-4 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Modern Header -->
    <div class="max-w-3xl mx-auto text-center mb-24">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                  transition-all duration-300 mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
          <span class="relative z-10">Pricing Plans</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-sm font-medium text-[#32325d]">
          Transparent & Flexible
        </span>
      </div>

      <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
        Smart Financial
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">Solutions</span>
        </span>
      </h2>
      
      <p class="text-xl text-[#32325d]/70 max-w-2xl mx-auto leading-relaxed">
        Experience the best in smart payments with IpsePay—where innovation meets simplicity!
      </p>
    </div>

    <!-- Pricing Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
      {#each pricingPlans as plan, i}
        <div class="group bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 
                    shadow-xl hover:shadow-2xl transition-all duration-500 
                    hover:-translate-y-1 relative overflow-hidden p-8
                    animate-fade-up" style="animation-delay: {i * 200}ms">
          <!-- Card Content -->
          <div class="relative">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-4 rounded-2xl transition-all duration-500
                          {plan.bgColor} {plan.hoverBg}">
                <img 
                  src={plan.icon} 
                  alt={plan.name}
                  class="w-12 h-12 object-contain"
                />
              </div>
              {#if plan.paymentIcons}
                <div class="flex -space-x-4">
                  {#each plan.paymentIcons as icon}
                    <img 
                      src={icon} 
                      alt=""
                      class="w-10 h-10 object-contain rounded-full bg-white/50 
                             backdrop-blur-sm p-1.5 border border-white/20"
                    />
                  {/each}
                </div>
              {/if}
            </div>

            <h3 class="text-xl font-bold mb-2 {plan.textColor}">
              {plan.name}
            </h3>
            <p class="text-[#32325d]/60 text-sm mb-6">
              {plan.description}
            </p>

            <!-- Pricing Details -->
            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-[#32325d]/70">Online Payment</span>
                <span class="font-medium text-[#32325d]">{plan.onlinePayment}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[#32325d]/70">Payout</span>
                <span class="font-medium text-[#32325d]">{plan.payout}</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
      <!-- Features content -->
    </div>
  </div>
</section>

<style>
  /* Include all the animations from the original */
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* ... rest of the animations ... */
</style>