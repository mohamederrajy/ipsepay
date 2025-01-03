<script>
  import { page } from '$app/stores';
  $: routeId = $page.url.pathname;

  const plans = [
    {
      name: "Starter",
      transactions: "10K",
      price: "199",
      featured: false,
      description: "Perfect for small businesses just getting started",
      savings: "Save $240/year",
      popular: false,
      features: [
        "Up to 10,000 transactions",
        "Basic analytics dashboard",
        "Email support",
        "API access",
        "Basic fraud protection"
      ]
    },
    {
      name: "Growth",
      transactions: "25K",
      price: "299",
      featured: false,
      description: "Ideal for growing businesses",
      savings: "Save $468/year",
      popular: false,
      features: [
        "Up to 25,000 transactions",
        "Advanced analytics",
        "Priority email support",
        "API access with higher limits",
        "Enhanced fraud protection"
      ]
    },
    {
      name: "Scale",
      transactions: "50K",
      price: "399",
      featured: true,
      description: "Best value for growing teams",
      savings: "Save $588/year",
      popular: true,
      features: [
        "Up to 50,000 transactions",
        "Custom analytics dashboard",
        "24/7 phone & email support",
        "Advanced API features",
        "Premium fraud protection",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      transactions: "100K+",
      price: "499",
      featured: false,
      description: "For large-scale enterprises",
      savings: "Save $948/year",
      popular: false,
      features: [
        "Unlimited transactions",
        "Enterprise analytics suite",
        "Dedicated support team",
        "Custom API solutions",
        "Advanced security features",
        "Custom development"
      ]
    }
  ];
</script>

<section class="py-20 relative overflow-hidden">
  <!-- Enhanced Background Pattern -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/8 to-transparent"/>
    <div class="absolute inset-0" 
         style="background-image: radial-gradient(#605bff 0.5px, transparent 0.5px), radial-gradient(#605bff 0.5px, transparent 0.5px);
                background-size: 20px 20px;
                background-position: 0 0, 10px 10px;
                opacity: 0.1;">
    </div>
  </div>

  <div class="container mx-auto px-4 relative">
    <!-- Enhanced Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-4 py-2 mb-6">
        <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-sm font-medium text-[#605bff]">Pricing Plans</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-[#32325d] mb-6">
        Choose your perfect plan
      </h2>
      <p class="text-xl text-gray-600 mb-8">
        Start with our flexible pricing plans. No hidden fees, cancel anytime.
      </p>
      
      <!-- Billing Toggle -->
      <div class="inline-flex items-center gap-3 bg-gray-100 p-1 rounded-full">
        <button class="px-6 py-2 rounded-full bg-white text-[#605bff] font-medium shadow-sm">
          Monthly
        </button>
        <button class="px-6 py-2 rounded-full text-gray-600 hover:text-[#605bff] transition-colors">
          Annual
        </button>
      </div>
    </div>

    <!-- Enhanced Pricing Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {#each plans as plan}
        <div class="relative group h-full">
          {#if plan.popular}
            <div class="absolute -top-4 inset-x-0 flex justify-center">
              <div class="bg-gradient-to-r from-[#605bff] to-[#8983ff] text-white 
                          px-4 py-1 rounded-full text-sm font-medium shadow-lg shadow-[#605bff]/20">
                Most Popular
              </div>
            </div>
          {/if}

          <div class="h-full flex flex-col 
                      {plan.featured ? 'bg-[#605bff]' : 'bg-white'} 
                      rounded-2xl p-8 
                      {plan.featured ? 'shadow-xl shadow-[#605bff]/20' : 'shadow-lg'} 
                      transition-all duration-300 
                      group-hover:-translate-y-1 group-hover:shadow-xl
                      {plan.featured ? 'border-2 border-[#605bff]' : 'border border-gray-100'}">
            
            <!-- Plan Header -->
            <div class="mb-8">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="{plan.featured ? 'text-white' : 'text-[#32325d]'} text-2xl font-bold">
                    {plan.name}
                  </h3>
                  <p class="{plan.featured ? 'text-white/80' : 'text-gray-600'} text-sm mt-1">
                    {plan.description}
                  </p>
                </div>
                {#if plan.savings}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              {plan.featured ? 'bg-white/20 text-white' : 'bg-[#605bff]/10 text-[#605bff]'}">
                    {plan.savings}
                  </span>
                {/if}
              </div>

              <div class="flex items-baseline">
                <span class="{plan.featured ? 'text-white' : 'text-[#32325d]'} text-5xl font-bold">
                  ${plan.price}
                </span>
                <span class="{plan.featured ? 'text-white/70' : 'text-gray-500'} ml-2 text-lg">/mo</span>
              </div>
            </div>

            <!-- Features List -->
            <div class="flex-grow space-y-4">
              {#each plan.features as feature}
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 flex-shrink-0 {plan.featured ? 'text-white' : 'text-[#605bff]'}" 
                       fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clip-rule="evenodd"/>
                  </svg>
                  <span class="{plan.featured ? 'text-white/90' : 'text-gray-600'} text-sm">
                    {feature}
                  </span>
                </div>
              {/each}
            </div>

            <!-- CTA Button -->
            <a href="/account/signup" 
               class="{plan.name === 'Scale'
                 ? 'bg-white text-[#32325d] hover:bg-white/90' 
                 : plan.featured 
                   ? 'bg-white text-[#605bff] hover:bg-white/90' 
                   : 'bg-[#605bff] text-white hover:bg-[#605bff]/90'} 
                 group inline-flex items-center justify-center w-full mt-8 
                 font-semibold rounded-xl py-4 px-6 
                 transition-all duration-300 shadow-sm hover:shadow-md">
              Get started
              <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                   viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
    .text-white {
        color: white;
    }
  .container {
    max-width: 1280px;
  }

  /* Enhanced transitions */
  .transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Smooth hover effects */
  .group:hover {
    transform: scale(1.02);
  }

  /* Gradient animation */
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .bg-gradient-animate {
    background-size: 200% 200%;
    animation: gradient 6s ease infinite;
  }
</style>