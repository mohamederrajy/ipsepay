<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  const paymentMethods = {
    left: [
      { name: 'Mastercard', logo: '/images/brands/mscrad.png' },
      { name: 'Visa', logo: '/images/brands/vss.png' },
      { name: 'Discover', logo: '/images/brands/disco.png' },
      { name: 'USDT', logo: '/images/brands/usdt.png' }
    ]
  };

  let mounted = false;
  let activeIndex = 0;
  let interval: ReturnType<typeof setInterval>;

  const contactInfo = [
    {
      title: "Global Coverage",
      description: "Accept payments worldwide with multiple currency support",
      icon: `<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a8 8 0 0 1-1 3.9L11 8v-4a8.1 8.1 0 0 1 9 8zM9 20a8 8 0 0 1-7-7.9L10 20h-1z"/>`
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and monitoring",
      icon: `<path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/><path d="M12 6v6l4 2"/>`
    },
    {
      title: "Secure Processing",
      description: "PCI DSS Level 1 compliant payment processing",
      icon: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`
    }
  ];

  onMount(() => {
    mounted = true;
    interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % 3;
    }, 2000);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

<section class="py-16 bg-[#fafafa]">
  <div class="container max-w-6xl mx-auto px-4">
    <!-- Enhanced Header -->
    <div class="text-center mb-8 sm:mb-16">
      <div class="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-full 
                  bg-white/90 p-1.5 sm:pr-6 backdrop-blur-xl border border-white/20 shadow-xl mb-6 sm:mb-8">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white w-full sm:w-auto">
          High-Risk Ready
        </span>
        <span class="text-sm font-medium text-[#32325d] flex items-center gap-2 px-4 sm:px-0">
          Payment Gateway Solutions
          <div class="relative flex">
            <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full 
                         bg-[#605bff] opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>
      
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-[#32325d] px-4 sm:px-0">
        High-Risk
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text text-transparent">
            Payment Gateway Providers
          </span>
        </span>
      </h2>
      
      <p class="text-lg text-[#32325d]/70 max-w-2xl mx-auto">
        Ragapay will help you find the best high or low risk merchant account. 
        We have a team of experts who will help you customize merchant account according to your needs.
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
      <!-- Enhanced Left Content -->
      <div class="space-y-8 sm:space-y-12 order-2 lg:order-1">
        <!-- Contact Info Cards -->
        <div class="space-y-4 sm:space-y-5">
          {#each contactInfo as info, index}
            <div class="group relative">
              <div class="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl sm:rounded-2xl 
                          bg-white/70 backdrop-blur-sm relative overflow-hidden
                          border border-gray-100/80 hover:border-[#605bff]/30
                          transform hover:-translate-y-1 hover:translate-x-1
                          transition-all duration-300 hover:bg-white
                          hover:shadow-lg hover:shadow-[#605bff]/10">
                <!-- Icon Container -->
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#605bff]/10 to-[#605bff]/5
                              flex items-center justify-center transition-all duration-300
                              group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#605bff]/20
                              group-hover:bg-gradient-to-br group-hover:from-[#605bff] group-hover:to-[#605bff]/80">
                    <svg class="w-7 h-7 text-[#605bff] group-hover:text-white transition-colors duration-300" 
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      {@html info.icon}
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="space-y-2 relative z-10">
                  <h3 class="text-xl font-semibold text-[#32325d] group-hover:text-[#605bff]
                             transition-colors duration-300 flex items-center gap-2">
                    {info.title}
                    <svg class="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
                               transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </h3>
                  <p class="text-[#32325d]/70 leading-relaxed group-hover:text-[#32325d]/90 
                            transition-colors duration-300">
                    {info.description}
                  </p>
                  
                  <!-- Learn More Link -->
                  <a href="#" class="inline-flex items-center gap-2 text-[#605bff] font-medium text-sm 
                                    opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                                    transition-all duration-300 hover:gap-3">
                    Learn more
                    <svg class="w-4 h-4 transform transition-transform duration-300" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>

                <!-- Decorative Number -->
                <div class="absolute right-4 top-4 opacity-0 group-hover:opacity-10 
                            transition-all duration-500 scale-50 group-hover:scale-100">
                  <div class="text-6xl font-bold text-[#605bff]">
                    0{index + 1}
                  </div>
                </div>

                <!-- Decorative Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="/account/signup" 
             class="flex-1 relative overflow-hidden bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                    text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
                    flex items-center justify-center gap-3 group
                    hover:shadow-lg hover:shadow-[#605bff]/25 
                    transform hover:-translate-y-1 active:translate-y-0
                    transition-all duration-300">
            <span class="transform rotate-45 group-hover:rotate-90 transition-transform duration-300">➤</span>
            <span class="font-medium relative z-10">Apply Now</span>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                        translate-x-[-100%] group-hover:translate-x-[100%] 
                        transition-transform duration-1000"></div>
          </a>
          
          <a href="/contact" 
             class="flex-1 relative overflow-hidden bg-white border-2 border-gray-100 
                    px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl 
                    flex items-center justify-center gap-3 text-[#32325d] group
                    hover:border-[#605bff]/30 hover:shadow-lg
                    transform hover:-translate-y-1 active:translate-y-0
                    transition-all duration-300">
            <span class="transform group-hover:translate-x-1 transition-transform duration-300">➤</span>
            <span class="font-medium relative z-10">Contact Us</span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#605bff]/0 via-[#605bff]/5 to-[#605bff]/0 
                        translate-x-[-100%] group-hover:translate-x-[100%] 
                        transition-transform duration-1000"></div>
          </a>
        </div>

        <!-- New: Trust Indicators -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 
                    pt-6 border-t border-gray-100">
          <div class="flex items-center gap-3">
            <div class="flex -space-x-2">
              {#each Array(4) as _, i}
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-white 
                            border-2 border-white shadow-sm flex items-center justify-center">
                  <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
              {/each}
            </div>
            <span class="text-sm text-[#32325d]/70">Trusted by 2000+ merchants</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[#605bff] font-medium">★★★★★</span>
            <span class="text-sm text-[#32325d]/70">5.0 Rating</span>
          </div>
        </div>
      </div>

      <!-- Right Animation Section -->
      <div class="relative order-1 lg:order-2">
        <!-- Background Gradient Effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-purple-100/30 
                    rounded-[2rem] transform rotate-2"></div>
        
        <div class="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl 
                    p-4 sm:p-8 shadow-xl border border-white">
          <!-- Floating Cards -->
          <div class="hidden sm:block absolute -top-10 -right-8 transform floating-cards">
            <div class="relative perspective-1000">
              <!-- Premium Card -->
              <div class="absolute -top-4 -right-4 w-52 h-32 rounded-2xl transform rotate-6 transition-transform duration-500
                          hover:rotate-12 group cursor-pointer">
                <div class="relative w-full h-full">
                  <!-- Glass Background -->
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 
                              backdrop-blur-md border border-white/30 shadow-xl"></div>
                  <!-- Holographic Effect -->
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div class="relative p-5 text-white">
                    <div class="flex justify-between items-start">
                      <!-- Premium Chip -->
                      <div class="flex items-center gap-2">
                        <div class="w-10 h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 
                                    rounded-md flex items-center justify-center relative overflow-hidden">
                          <div class="w-full h-full absolute">
                            {#each Array(3) as _, i}
                              <div class="absolute inset-0 border-t border-white/30"
                                   style="transform: translateY({i * 8}px)"></div>
                            {/each}
                          </div>
                        </div>
                        <span class="text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 
                                    text-transparent bg-clip-text">PREMIUM</span>
                      </div>
                    </div>
                    
                    <div class="mt-8 space-y-2">
                      <div class="flex justify-between items-center">
                        <div class="text-sm font-medium">**** **** **** 4242</div>
                        <div class="w-8">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2z"/>
                          </svg>
                        </div>
                      </div>
                      <div class="text-xs opacity-75">Expires 12/25</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Main Card -->
              <div class="w-52 h-32 rounded-2xl relative group cursor-pointer transform transition-all duration-500
                          hover:scale-105 hover:translate-y-[-4px]">
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#605bff] to-[#32325d] 
                            shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  <!-- Animated Background Pattern -->
                  <div class="absolute inset-0 overflow-hidden rounded-2xl">
                    {#each Array(8) as _, i}
                      <div class="absolute w-40 h-[1px] bg-white/10"
                           style="transform: rotate({i * 45}deg) translate(-50%, {i * 20}px)"></div>
                    {/each}
                  </div>
                </div>

                <div class="relative p-5 text-white">
                  <div class="flex justify-between items-start">
                    <!-- Modern Chip -->
                    <div class="w-10 h-7 bg-gradient-to-br from-yellow-200 to-yellow-400 
                                rounded-md relative overflow-hidden">
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-full h-[1px] bg-black/10"></div>
                        <div class="w-full h-[1px] bg-black/10 transform rotate-90"></div>
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                    </div>
                    
                    <!-- Wireless Icon -->
                    <div class="transform -rotate-90">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                  </div>

                  <div class="mt-8 space-y-2">
                    <div class="flex justify-between items-center">
                      <div class="text-sm font-medium tracking-wider">**** **** **** 8888</div>
                    </div>
                    <div class="flex justify-between items-center text-xs opacity-75">
                      <span>VALID THRU 12/25</span>
                      <span class="uppercase">Platinum</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Business Card -->
              <div class="absolute -bottom-4 -left-4 w-52 h-32 rounded-2xl transform -rotate-6 transition-transform duration-500
                          hover:-rotate-12 group cursor-pointer">
                <div class="relative w-full h-full">
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 
                              shadow-lg group-hover:shadow-xl">
                    <!-- Metallic Effect -->
                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 
                                opacity-50"></div>
                  </div>

                  <div class="relative p-5 text-white">
                    <div class="flex justify-between items-start">
                      <div class="flex items-center gap-2">
                        <div class="w-10 h-7 bg-gradient-to-br from-gray-600 to-gray-700 
                                    rounded-md flex items-center justify-center relative overflow-hidden">
                          <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>
                        <span class="text-xs font-medium">BUSINESS</span>
                      </div>
                    </div>

                    <div class="mt-8 space-y-2">
                      <div class="text-sm font-medium">**** **** **** 1234</div>
                      <div class="text-xs opacity-75">Corporate Account</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="mt-8 sm:mt-16 space-y-3 sm:space-y-4">
            {#each paymentMethods.left as method, i}
              {#if mounted}
                <div class="transform transition-all duration-500">
                  <div class="bg-white p-5 rounded-xl border border-gray-100
                             shadow-md hover:shadow-lg transition-all duration-300
                             flex items-center justify-between group
                             hover:border-[#605bff]/20">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-lg bg-gray-50 p-2 
                                  group-hover:bg-[#605bff]/5 transition-colors 
                                  flex items-center justify-center">
                        <img src={method.logo} alt={method.name} 
                             class="h-8 w-auto object-contain" />
                      </div>
                      <span class="text-[#32325d] font-medium">{method.name}</span>
                    </div>
                    {#if i === activeIndex}
                      <div class="w-6 h-6 rounded-full bg-[#605bff] flex items-center justify-center
                                 shadow-lg shadow-[#605bff]/25"
                           in:scale={{ duration: 200 }}>
                        <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" 
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" 
                             stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            {/each}
          </div>

          <!-- Smart Routing Engine -->
          <div class="mt-6 sm:mt-8">
            <div class="bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                        rounded-xl p-6 text-white text-center relative
                        transform hover:scale-[1.02] transition-transform duration-300
                        shadow-lg shadow-[#605bff]/25">
              <div class="space-y-1">
                <div class="text-sm font-medium opacity-90">POWERED BY</div>
                <div class="text-xl font-bold">SMART ROUTING ENGINE</div>
              </div>
              <!-- Animated Pulse Effect -->
              <div class="absolute -bottom-2 -right-2">
                <span class="animate-ping absolute inline-flex h-5 w-5 
                             rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 
                             bg-white/30"></span>
              </div>
              <!-- Connection Lines -->
              <div class="absolute inset-0 overflow-hidden">
                {#each Array(5) as _, i}
                  <div class="absolute h-px bg-white/10 w-full 
                              transform -rotate-45 translate-y-[{i * 10}px]"></div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animate-ping {
    animation: ping 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-12px) rotate(2deg);
    }
  }

  .floating-cards {
    animation: float 6s ease-in-out infinite;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  /* Holographic animation */
  @keyframes holographic {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .group:hover .holographic {
    animation: holographic 3s linear infinite;
    background-size: 200% 200%;
  }

  /* Mobile-specific animations */
  @media (max-width: 640px) {
    .floating-cards {
      display: none;
    }
    
    .animate-ping {
      animation-duration: 2s;
    }
  }

  /* Enhanced hover animations */
  @keyframes shine {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }

  .group:hover .shine {
    animation: shine 1.5s ease-in-out infinite;
  }
</style>

