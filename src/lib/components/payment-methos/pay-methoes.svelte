<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const paymentMethods = [
    { 
      name: 'Credit Card Processing', 
      icon: '/images/brands/visa.png',
      description: 'Accept major credit cards worldwide with industry-leading approval rates and instant settlements', 
      stat: '99.9%', 
      label: 'Approval Rate',
      bgColor: 'bg-gradient-to-br from-[#1434CB]/5 to-[#1434CB]/10',
      textColor: 'text-[#1434CB]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#1434CB]/10 to-[#1434CB]/20',
      additionalIcons: [
        '/images/brands/MasterCard.png',
        '/images/brands/logoamx.png'
      ],
      features: ['Instant Settlement', 'Fraud Protection', 'Global Coverage']
    },
    { 
      name: 'Digital Wallets', 
      icon: '/images/brands/aplepay.png',
      description: 'Streamline checkout with modern digital payment solutions for faster transactions', 
      stat: '2x', 
      label: 'Faster Checkout',
      bgColor: 'bg-gradient-to-br from-black/5 to-black/10',
      textColor: 'text-black',
      hoverBg: 'group-hover:bg-gradient-to-br from-black/10 to-black/20',
      additionalIcons: [
        '/images/brands/logog.webp'
      ],
      features: ['One-Click Pay', 'Biometric Auth', 'Mobile-First']
    },
    { 
      name: 'Alternative Payments', 
      icon: '/images/brands/Discover.png',
      description: 'Expand your reach with local and alternative payment methods worldwide', 
      stat: '150+', 
      label: 'Payment Methods',
      bgColor: 'bg-gradient-to-br from-[#FF6000]/5 to-[#FF6000]/10',
      textColor: 'text-[#FF6000]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#FF6000]/10 to-[#FF6000]/20',
      features: ['Local Methods', 'Bank Transfers', 'Crypto Ready']
    }
  ];
</script>

<section class="relative overflow-hidden py-16 sm:py-24 lg:py-32">
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

  <!-- Content Container with Fade-In Animation -->
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Modern Header with Enhanced Animation -->
    <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-24">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                  transition-all duration-300 mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-xs sm:text-sm font-medium text-white relative overflow-hidden">
          <span class="relative z-10">Enterprise-Ready</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-xs sm:text-sm font-medium text-[#32325d] flex items-center gap-2">
          Global Payment Solutions
          <div class="relative flex">
            <span class="absolute inline-flex h-2 sm:h-2.5 w-2 sm:w-2.5 animate-ping rounded-full 
                         bg-[#605bff] opacity-75"></span>
            <span class="relative inline-flex h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-[#32325d]">
        Unified Payment
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">Infrastructure</span>
          <svg class="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" 
               preserveAspectRatio="none">
            <path d="M0 0L50 10L100 0" fill="url(#gradient)" opacity="0.2"></path>
          </svg>
        </span>
      </h2>
      
      <p class="text-lg sm:text-xl text-[#32325d]/70 max-w-2xl mx-auto leading-relaxed">
        Experience seamless payments with our unified platform. Built for scale, 
        engineered for reliability.
      </p>
    </div>

    <!-- Enhanced Payment Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
      {#each paymentMethods as method, i}
        <div class="group bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                    border border-white/20 shadow-xl hover:shadow-2xl transition-all 
                    duration-500 hover:-translate-y-1 relative overflow-hidden 
                    p-6 sm:p-8 animate-fade-up" 
             style="animation-delay: {i * 200}ms">
          <!-- Enhanced Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent 
                      to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <!-- Content with Enhanced Layout -->
          <div class="relative">
            <!-- Icon Container with Animation -->
            <div class="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500
                          {method.bgColor} {method.hoverBg}">
                <img 
                  src={method.icon} 
                  alt={method.name}
                  class="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              {#if method.additionalIcons}
                <div class="flex -space-x-2 sm:-space-x-4 animate-slide-in" 
                     style="animation-delay: {i * 300}ms">
                  {#each method.additionalIcons as additionalIcon}
                    <img 
                      src={additionalIcon} 
                      alt=""
                      class="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full 
                             bg-white/50 backdrop-blur-sm p-1 sm:p-1.5"
                    />
                  {/each}
                </div>
              {/if}
            </div>

            <!-- Enhanced Content -->
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#32325d]">
              {method.name}
            </h3>
            <p class="text-sm sm:text-base text-[#32325d]/60 mb-4 sm:mb-6 leading-relaxed">
              {method.description}
            </p>

            <!-- Features List -->
            <div class="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
              {#each method.features as feature}
                <div class="flex items-center gap-2 text-xs sm:text-sm text-[#32325d]/70">
                  <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  {feature}
                </div>
              {/each}
            </div>

            <!-- Enhanced Stats -->
            <div class="flex items-center gap-2 sm:gap-3 pt-4 border-t border-gray-100">
              <span class="text-2xl sm:text-3xl font-bold {method.textColor}">
                {method.stat}
              </span>
              <span class="text-xs sm:text-sm text-[#32325d]/50 font-medium">
                {method.label}
              </span>
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

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }

  .animate-fade-up {
    animation: fade-up 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-in {
    animation: slide-in 0.6s ease-out forwards;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>