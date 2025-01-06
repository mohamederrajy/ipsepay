<script lang="ts">
  import { spring } from 'svelte/motion';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isAnnual = false;
  let selectedPlan = 'Scale';

  const plans = 
    [
    {
      name: "Starter",
      transactions: "10K",
      monthlyPrice: "199",
      annualPrice: "159",
      featured: false,
      description: "Perfect for small businesses",
      savings: "Save 20%",
      popular: false,
      features: [
        { title: "10,000 Transactions", desc: "Monthly transaction limit" },
        { title: "Basic Analytics", desc: "Real-time dashboard" },
        { title: "Email Support", desc: "24/7 response time" },
        { title: "API Access", desc: "Basic endpoints" },
        { title: "Fraud Protection", desc: "Standard security" }
      ]
    },
    {
      name: "Growth",
      transactions: "25K",
      monthlyPrice: "299",
      annualPrice: "239",
      featured: false,
      description: "Ideal for growing businesses",
      savings: "Save 25%",
      popular: false,
      features: [
        { title: "25,000 Transactions", desc: "Monthly transaction limit" },
        { title: "Advanced Analytics", desc: "Custom reports" },
        { title: "Priority Support", desc: "4hr response time" },
        { title: "Extended API", desc: "Advanced endpoints" },
        { title: "Enhanced Security", desc: "Advanced protection" }
      ]
    },
    {
      name: "Scale",
      transactions: "50K",
      monthlyPrice: "399",
      annualPrice: "319",
      featured: true,
      description: "Best for scaling teams",
      savings: "Save 30%",
      popular: true,
      features: [
        { title: "50,000 Transactions", desc: "Monthly transaction limit" },
        { title: "Custom Analytics", desc: "White-label reports" },
        { title: "24/7 Support", desc: "1hr response time" },
        { title: "Full API Access", desc: "All endpoints" },
        { title: "Premium Security", desc: "Enterprise-grade" },
        { title: "Custom Integration", desc: "Personal support" }
      ]
    },
    {
      name: "Enterprise",
      transactions: "100K+",
      monthlyPrice: "499",
      annualPrice: "399",
      featured: false,
      description: "For large organizations",
      savings: "Save 35%",
      popular: false,
      features: [
        { title: "Unlimited", desc: "No transaction limits" },
        { title: "Enterprise Suite", desc: "Full customization" },
        { title: "Dedicated Team", desc: "Personal manager" },
        { title: "Custom Solutions", desc: "Tailored setup" },
        { title: "Advanced Security", desc: "Custom security" },
        { title: "Priority Dev", desc: "Custom development" }
      ]
    }
  ];

  // Animated counter for savings
  let savings = spring(0, {
    stiffness: 0.1,
    damping: 0.4
  });

  $: {
    if (isAnnual) {
      savings.set(35);
    } else {
      savings.set(0);
    }
  }
</script>

<section class="py-16 sm:py-24 lg:py-32 relative">
  <div class="container mx-auto px-4 relative">
    <!-- Responsive Header -->
    <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
      <div class="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white 
                  p-1 sm:p-1.5 pr-3 sm:pr-6 border border-gray-100 shadow-xl 
                  hover:shadow-2xl transition-all duration-300 mb-6 sm:mb-8">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium 
                     text-white relative overflow-hidden">
          <span class="relative z-10">Payment Links</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-xs sm:text-sm font-medium text-[#32325d]">Pricing Plans</span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-8 
                 text-[#32325d] px-4">
        Simple pricing for
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">everyone</span>
        </span>
      </h2>
      
      <p class="text-base sm:text-lg lg:text-xl text-[#32325d]/70 max-w-2xl mx-auto 
                leading-relaxed mb-8 sm:mb-12 px-4">
        Choose the perfect plan for your business. No hidden fees, cancel anytime.
      </p>

      <!-- Responsive Pricing Toggle -->
      <div class="flex items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-16">
        <div class="flex items-center gap-2 sm:gap-3 bg-white rounded-full p-1 
                    shadow-md border border-gray-100">
          <button 
            class="px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base 
                   font-medium transition-all duration-300 relative
                   {!isAnnual ? 'bg-[#605bff] text-white shadow-md' : 'text-gray-600 hover:text-[#605bff]'}"
            on:click={() => isAnnual = false}
          >
            Monthly
          </button>
          <button 
            class="px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base 
                   font-medium transition-all duration-300 relative
                   {isAnnual ? 'bg-[#605bff] text-white shadow-md' : 'text-gray-600 hover:text-[#605bff]'}"
            on:click={() => isAnnual = true}
          >
            Annual
            {#if !isAnnual}
              <span class="absolute -top-7 left-1/2 transform -translate-x-1/2 
                          bg-[#605bff] text-white text-xs font-medium px-2 sm:px-3 
                          py-1 rounded-full whitespace-nowrap shadow-lg">
                Save up to 35%
              </span>
            {/if}
          </button>
        </div>
      </div>
    </div>

    <!-- Responsive Pricing Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 
                max-w-[1400px] mx-auto px-2 sm:px-4">
      {#each plans as plan}
        <div class="relative group h-full" transition:fade={{ duration: 300 }}>
          <!-- Popular Badge -->
          {#if plan.popular}
            <div class="absolute -top-3 inset-x-0 flex justify-center z-10">
              <div class="relative group/badge">
                <div class="flex items-center gap-1.5 bg-[#605bff] px-3 sm:px-4 
                            py-1 sm:py-1.5 rounded-full text-xs sm:text-sm
                            shadow-[0_4px_14px_0_rgba(96,91,255,0.39)]
                            border border-white/10 backdrop-blur-sm">
                  <svg class="w-3 sm:w-3.5 h-3 sm:h-3.5 text-yellow-300 flex-shrink-0" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116.001-1.46c-.107-.345-.346-.624-.822-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"/>
                  </svg>
                  <span class="text-white font-semibold tracking-wide whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
                <!-- Glow and shimmer effects remain the same -->
              </div>
            </div>
          {/if}

          <!-- Plan Card -->
          <div class="h-full flex flex-col bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 
                      {plan.featured ? 'border-2 border-[#605bff] shadow-xl' : 'border border-gray-100 shadow-lg'} 
                      hover:shadow-2xl transition-all duration-500 hover:-translate-y-1
                      relative overflow-hidden">
            
            <!-- Plan Header -->
            <div class="mb-6 sm:mb-8 relative">
              <div class="flex items-center justify-between mb-3 sm:mb-4">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-[#32325d] 
                           group-hover:text-[#605bff] transition-colors">
                  {plan.name}
                </h3>
                {#if plan.transactions === "100K+"}
                  <div class="flex items-center gap-1.5 px-3 py-1 rounded-full 
                              {plan.featured ? 'bg-[#605bff]/10 text-[#605bff]' : 'bg-gray-100 text-gray-600'}
                              group-hover:bg-[#605bff]/10 group-hover:text-[#605bff] transition-all">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                    <span class="text-xs lg:text-sm font-medium">100K+</span>
                  </div>
                {:else}
                  <span class="text-xs lg:text-sm font-medium px-3 py-1 rounded-full 
                               {plan.featured ? 'bg-[#605bff]/10 text-[#605bff]' : 'bg-gray-100 text-gray-600'}
                               group-hover:bg-[#605bff]/10 group-hover:text-[#605bff] transition-all">
                    {plan.transactions} / mo
                  </span>
                {/if}
              </div>
              
              <div class="mb-6">
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl lg:text-4xl font-bold text-[#32325d]
                             group-hover:text-[#605bff] transition-colors">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span class="text-gray-500 text-base lg:text-lg">/mo</span>
                </div>
                <p class="text-gray-600 text-xs lg:text-sm mt-2">{plan.description}</p>
                {#if isAnnual}
                  <div class="mt-2 text-[#605bff] text-sm font-medium">{plan.savings}</div>
                {/if}
              </div>

              <!-- Responsive button -->
              <button class="w-full py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl 
                           font-medium text-sm sm:text-base transition-all duration-300
                           {plan.featured 
                             ? 'bg-[#605bff] text-white hover:bg-[#605bff]/90' 
                             : 'bg-[#605bff]/10 text-[#605bff] hover:bg-[#605bff]/20'} 
                           group/btn flex items-center justify-center gap-2 
                           relative overflow-hidden">
                <span class="relative z-10">Get Started</span>
                <svg class="w-5 h-5 transition-transform group-hover/btn:translate-x-1 relative z-10" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                            translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform
                            duration-700"></div>
              </button>
            </div>

            <!-- Features List -->
            <div class="space-y-3 sm:space-y-4 flex-grow">
              {#each plan.features as feature}
                <div class="flex items-start gap-2 sm:gap-3 group/feature 
                            hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <svg class="w-4 sm:w-5 h-4 sm:h-5 text-[#605bff] mt-0.5 flex-shrink-0 
                             group-hover/feature:scale-110 transition-transform" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <div class="text-[#32325d] font-medium text-xs sm:text-sm lg:text-base
                                group-hover/feature:text-[#605bff] transition-colors">
                      {feature.title}
                    </div>
                    {#if feature.desc}
                      <div class="text-[10px] sm:text-xs lg:text-sm text-gray-500">
                        {feature.desc}
                      </div>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
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

  @keyframes bounce {
    0%, 100% { transform: translateY(-50%) translateX(-50%); }
    50% { transform: translateY(-75%) translateX(-50%); }
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  /* Add this to ensure text is always white */
  :global(.text-white) {
    color: #ffffff !important;
  }
</style>