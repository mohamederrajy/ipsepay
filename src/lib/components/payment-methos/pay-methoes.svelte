<script lang="ts">
  import { page } from "$app/stores";
  import { onMount, onDestroy } from 'svelte';
  import { fade, slide } from 'svelte/transition';

  $: routeId = $page.route.id;

  let isVisible = false;
  let activeMethodIndex = 0;
  let interval: ReturnType<typeof setInterval>;

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
      icon: '/images/brands/usdt.png',
      description: 'Expand your reach with local and alternative payment methods worldwide', 
      stat: '150+', 
      label: 'Payment Methods',
      bgColor: 'bg-gradient-to-br from-[#FF6000]/5 to-[#FF6000]/10',
      textColor: 'text-[#FF6000]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#FF6000]/10 to-[#FF6000]/20',
      features: ['Local Methods', 'Bank Transfers', 'Crypto Ready']
    }
  ];

  function startAutoRotation() {
    interval = setInterval(() => {
      activeMethodIndex = (activeMethodIndex + 1) % paymentMethods.length;
    }, 3000); // Rotate every 3 seconds
  }

  function handleMethodClick(index: number) {
    activeMethodIndex = index;
    // Reset interval to prevent immediate switch after click
    if (interval) clearInterval(interval);
    startAutoRotation();
  }

  onMount(() => {
    isVisible = true;
    startAutoRotation();
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  $: activeMethod = paymentMethods[activeMethodIndex];
</script>

<section class="relative overflow-hidden py-16 sm:py-24 lg:py-32">
  <!-- Professional Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa] to-[#f5f5f5]"></div>
    
    <!-- Animated mesh gradient -->
    <div class="absolute inset-0 opacity-75"
         style="background: linear-gradient(45deg, 
                  rgba(96, 91, 255, 0.03) 0%, 
                  rgba(96, 91, 255, 0.03) 1%, 
                  transparent 1%
                ) center / 3rem 3rem,
                linear-gradient(-45deg, 
                  rgba(96, 91, 255, 0.03) 0%, 
                  rgba(96, 91, 255, 0.03) 1%, 
                  transparent 1%
                ) center / 3rem 3rem;">
    </div>

    <!-- Floating orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary orb -->
      <div class="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-full
                  bg-gradient-to-br from-[#605bff]/10 via-[#605bff]/5 to-transparent 
                  blur-3xl animate-float-slow transform rotate-12"
           style="animation-duration: 15s;">
      </div>
      
      <!-- Secondary orb -->
      <div class="absolute -bottom-[40%] -left-[10%] w-[80%] h-[80%] rounded-full
                  bg-gradient-to-tr from-[#32325d]/8 via-[#605bff]/5 to-transparent 
                  blur-3xl animate-float-slow transform -rotate-12"
           style="animation-duration: 18s; animation-delay: -5s;">
      </div>

      <!-- Accent orbs -->
      <div class="absolute top-[20%] left-[10%] w-[20%] h-[20%] rounded-full
                  bg-gradient-to-r from-purple-500/5 to-transparent 
                  blur-2xl animate-pulse"
           style="animation-duration: 10s;">
      </div>
      <div class="absolute bottom-[30%] right-[20%] w-[15%] h-[15%] rounded-full
                  bg-gradient-to-l from-blue-500/5 to-transparent 
                  blur-2xl animate-pulse"
           style="animation-duration: 12s; animation-delay: -3s;">
      </div>
    </div>

    <!-- Noise texture overlay -->
    <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay"
         style="background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPg0KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPg0KPC9maWx0ZXI+DQo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+DQo8L3N2Zz4=');">
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

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(1%, 1%) rotate(2deg); }
    50% { transform: translate(-1%, 2%) rotate(-1deg); }
    75% { transform: translate(-2%, -1%) rotate(1deg); }
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

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>