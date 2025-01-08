<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { slide } from 'svelte/transition';
  
  let pricingVisible = false;
  let pricingRef: HTMLElement;
  
  // Toggle between monthly and annual billing
  let isAnnual = false;
  
  const plans = [
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

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pricingVisible) {
          pricingVisible = true;
        }
      },
      { threshold: 0.1 }
    );
    
    if (pricingRef) {
      observer.observe(pricingRef);
    }

    return () => {
      if (pricingRef) {
        observer.unobserve(pricingRef);
      }
    };
  });

  const handleSignup = () => {
    goto('/account/signup');
  };

  // Add this to manage FAQ state
  let faqs = [
    {
      question: "How does billing work?",
      answer: "We offer both monthly and annual billing options. Choose annual billing to save up to 35% on your subscription. You can change your billing cycle at any time from your account settings.",
      isOpen: false
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade, downgrade, or change your plan at any time. Changes to a higher tier take effect immediately. When downgrading, the new rate applies at the start of the next billing cycle.",
      isOpen: false
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for business accounts. All payments are processed securely through our payment partners.",
      isOpen: false
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.",
      isOpen: false
    },
    {
      question: "How does the refund policy work?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you are not satisfied with our service, contact our support team within 30 days of your purchase for a full refund.",
      isOpen: false
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 support through email and chat for all paid plans. Enterprise plans include dedicated support managers and priority response times. Our knowledge base is available to all users.",
      isOpen: false
    }
  ];

  const toggleFaq = (index: number) => {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
  };
</script>

<main class="pt-20">
  <!-- Hero Section -->
  <div class="relative overflow-hidden bg-gradient-to-b from-[#605bff]/5 via-white to-white">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl"></div>
    </div>

    <!-- Title Content -->
    <div class="relative container mx-auto px-4 pt-20 pb-32 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Pricing Plans</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Simple, Transparent Pricing
          </span>
        </h1>

        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Choose the perfect plan for your business needs
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <span class="text-gray-600 {!isAnnual ? 'font-semibold' : ''}">Monthly</span>
          <button
            class="relative w-16 h-8 rounded-full bg-[#605bff]/10 p-1 transition-colors duration-300
                   hover:bg-[#605bff]/20"
            on:click={() => isAnnual = !isAnnual}
          >
            <div
              class="w-6 h-6 rounded-full bg-[#605bff] transition-transform duration-300"
              style="transform: translateX({isAnnual ? '100%' : '0%'})"
            ></div>
          </button>
          <span class="text-gray-600 {isAnnual ? 'font-semibold' : ''}">
            Annual
            <span class="text-sm text-[#605bff]">(Save 20%)</span>
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Pricing Cards Section -->
  <section class="py-24 relative" bind:this={pricingRef}>
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {#each plans as plan}
          <div class="relative group {plan.popular ? 'lg:-mt-6' : ''}">
            <!-- Popular Badge -->
            {#if plan.popular}
              <div class="absolute -top-3 inset-x-0 flex justify-center z-10">
                <div class="relative group">
                  <div class="absolute -inset-1 bg-gradient-to-r from-[#605bff] to-purple-600 
                              opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>
                  <div class="relative px-5 py-1.5 rounded-full bg-[#605bff] hover:bg-[#6c64ff] 
                              shadow-lg shadow-[#605bff]/20 hover:shadow-[#605bff]/30
                              transform hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    <div class="flex items-center gap-3">
                      <div class="flex gap-1">
                        {#each Array(3) as _, i}
                          <div class="w-1 h-1 rounded-full bg-white/70"
                               style="animation: pulse 1.5s ease-in-out {i * 0.2}s infinite"></div>
                        {/each}
                      </div>
                      <span class="text-sm font-medium text-white tracking-wide">Most Popular</span>
                    </div>
                  </div>
                </div>
              </div>
            {/if}

            <!-- Plan Card -->
            <div class="relative h-full rounded-2xl transition-all duration-500 
                        {plan.popular ? 
                          'bg-gradient-to-b from-[#605bff]/5 via-white to-white border-2 border-[#605bff]/20' : 
                          'bg-white border border-gray-100'}
                        group-hover:border-[#605bff]/30 group-hover:shadow-xl
                        {plan.popular ? 'shadow-lg shadow-[#605bff]/10' : 'shadow-md'}">
              
              <!-- Card Content -->
              <div class="p-8">
                <!-- Header -->
                <div class="space-y-4">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="text-2xl font-bold text-[#32325d] group-hover:text-[#605bff] 
                                 transition-colors duration-300">
                        {plan.name}
                      </h3>
                      <p class="text-gray-600 mt-2">{plan.description}</p>
                    </div>
                    
                    <!-- Transaction Badge -->
                    <div class="px-3 py-1 rounded-lg bg-[#605bff]/10 text-[#605bff] text-sm font-medium
                                group-hover:bg-[#605bff]/20 transition-all duration-300">
                      {plan.transactions}
                    </div>
                  </div>

                  <!-- Price -->
                  <div class="mt-8">
                    <div class="flex items-baseline">
                      <span class="text-5xl font-bold text-[#32325d] group-hover:text-[#605bff] 
                                 transition-colors duration-300">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span class="ml-2 text-gray-600">/mo</span>
                    </div>
                    {#if isAnnual}
                      <div class="mt-2 inline-flex items-center gap-1.5 text-sm text-green-500 font-medium">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7"/>
                        </svg>
                        {plan.savings}
                      </div>
                    {/if}
                  </div>

                  <!-- Features -->
                  <div class="mt-8 space-y-4">
                    {#each plan.features as feature}
                      <div class="flex items-start gap-3 p-2 rounded-lg
                                 hover:bg-[#605bff]/5 transition-all duration-300">
                        <div class="flex-shrink-0 w-5 h-5 rounded-full bg-[#605bff]/10 
                                    flex items-center justify-center mt-0.5">
                          <svg class="w-3 h-3 text-[#605bff]" fill="none" viewBox="0 0 24 24" 
                               stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <div>
                          <div class="font-medium text-[#32325d]">{feature.title}</div>
                          <div class="text-sm text-gray-600">{feature.desc}</div>
                        </div>
                      </div>
                    {/each}
                  </div>

                  <!-- CTA Button -->
                  <button 
                    class="w-full mt-8 px-6 py-3 rounded-xl font-medium
                           transition-all duration-300 transform
                           {plan.popular ? 
                             'bg-[#605bff] text-white hover:bg-[#6c64ff] hover:shadow-lg hover:shadow-[#605bff]/25' : 
                             'bg-[#605bff]/10 text-[#605bff] hover:bg-[#605bff]/20'}
                           relative overflow-hidden group"
                    on:click={handleSignup}
                  >
                    <span class="relative flex items-center justify-center gap-2">
                      Get Started
                      <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                           fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-24 bg-gradient-to-b from-gray-50/50 to-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Core Features</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Everything You Need
          </span>
        </h2>
        <p class="text-gray-600 text-lg">
          Powerful features to help your business grow and succeed
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {#each [
          {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>`,
            title: 'Enterprise Security',
            description: 'Bank-grade encryption and advanced fraud prevention to keep your data safe',
            gradient: 'from-blue-500 to-cyan-500'
          },
          {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>`,
            title: 'Advanced Analytics',
            description: 'Real-time insights and detailed reporting to track your business growth',
            gradient: 'from-violet-500 to-purple-500'
          },
          {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>`,
            title: '24/7 Support',
            description: 'Round-the-clock dedicated support team ready to help you succeed',
            gradient: 'from-amber-500 to-orange-500'
          },
          {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/>`,
            title: 'API Access',
            description: 'Powerful APIs and webhooks for seamless integration with your systems',
            gradient: 'from-green-500 to-emerald-500'
          },
          {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"/>`,
            title: 'Global Coverage',
            description: 'Accept payments from anywhere in the world with local processing',
            gradient: 'from-pink-500 to-rose-500'
          },
          {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/>`,
            title: 'Easy Integration',
            description: 'Quick setup with popular platforms and content management systems',
            gradient: 'from-teal-500 to-cyan-500'
          }
        ] as feature}
          <div class="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl 
                      transition-all duration-300 hover:-translate-y-1">
            <!-- Gradient Border on Hover -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r {feature.gradient} 
                        opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            <!-- Content -->
            <div class="relative">
              <!-- Icon with Gradient -->
              <div class="w-12 h-12 rounded-xl bg-gradient-to-r {feature.gradient} 
                          flex items-center justify-center mb-6 transform group-hover:scale-110 
                          transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" 
                     stroke="currentColor">
                  {@html feature.icon}
                </svg>
              </div>

              <h3 class="text-xl font-semibold text-[#32325d] mb-3 
                         group-hover:text-transparent group-hover:bg-clip-text 
                         group-hover:bg-gradient-to-r {feature.gradient}
                         transition-all duration-300">
                {feature.title}
              </h3>
              
              <p class="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-24 bg-gradient-to-b from-white to-gray-50/50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">FAQ</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Frequently Asked Questions
          </span>
        </h2>
        <p class="text-gray-600 text-lg">
          Everything you need to know about our services
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        {#each faqs as faq, i}
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <!-- Question Button -->
            <button 
              class="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300
                     hover:text-[#605bff]"
              on:click={() => toggleFaq(i)}
            >
              <span class="text-lg font-medium pr-8">{faq.question}</span>
              <div class="relative flex-shrink-0 ml-2 transition-transform duration-300
                          {faq.isOpen ? 'rotate-45' : ''}">
                <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center
                            group-hover:bg-[#605bff]/20 transition-colors duration-300">
                  <svg 
                    class="w-5 h-5 text-[#605bff]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </button>

            <!-- Answer -->
            {#if faq.isOpen}
              <div 
                class="px-6 pb-5"
                transition:slide={{ duration: 300 }}
              >
                <div class="pt-3 border-t border-gray-100">
                  <p class="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Help Center Link -->
      <div class="text-center mt-12">
        <a 
          href="/help" 
          class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#4f4ad3] 
                 font-medium transition-colors duration-300 group"
        >
          <span>Visit our Help Center</span>
          <svg 
            class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24 bg-gradient-to-br from-[#605bff]/5 via-white to-purple-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Ready to Get Started?
          </span>
        </h2>
        <p class="text-gray-600 text-lg mb-8">
          Join thousands of businesses already using our platform
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            class="px-8 py-3 rounded-xl bg-[#605bff] text-white font-medium 
                   hover:bg-[#4f4ad3] transition-colors duration-300"
            on:click={handleSignup}
          >
            Start Free Trial
          </button>
          <button 
            class="px-8 py-3 rounded-xl bg-[#605bff]/10 text-[#605bff] font-medium 
                   hover:bg-[#605bff]/20 transition-colors duration-300"
            on:click={handleSignup}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-shimmer {
    animation: shimmer 2.5s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% { 
      opacity: 0.4;
      transform: scale(1);
    }
    50% { 
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) skewX(-15deg);
    }
    100% {
      transform: translateX(100%) skewX(-15deg);
    }
  }

  .animate-slideDown {
    animation: slideDown 0.2s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Optional: Add custom animations if needed */
  :global(.slide-enter) {
    transition: all 0.3s ease-out;
  }
  
  :global(.slide-enter-active) {
    transition: all 0.3s ease-out;
  }
</style>