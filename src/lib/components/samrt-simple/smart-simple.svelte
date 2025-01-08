<script lang="ts">
  export let title = "Smart Payments Simplified with IpsePay!";
  export let subtitle = "Experience the best in smart payments with IpsePay—where innovation meets simplicity!";
  
  const features = [
    {
      title: "Payment Solution",
      description: "Ipsepay ensures secure, seamless payments, trusted by online stores worldwide.",
      icon: `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>`
    },
    {
      title: "Growth Business",
      description: "Ipsepay ensures secure, seamless payments, trusted by online stores worldwide.",
      icon: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>`
    },
    {
      title: "Connected People",
      description: "Ipsepay connects people through secure and effortless payments, anytime, anywhere",
      icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`
    }
  ];
</script>

<section class="py-24 bg-gradient-to-b from-white to-gray-50/50">
  <div class="container">
    <!-- Header with Enhanced Smart Features Badge -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <div class="inline-flex items-center justify-center mb-6 relative group">
        <!-- Background Glow Effect -->
        <div class="absolute inset-0 bg-[#605bff]/10 blur-xl rounded-full 
                    group-hover:bg-[#605bff]/20 transition-all duration-500"></div>
        
        <!-- Badge Container -->
        <div class="relative flex items-center gap-2 px-5 py-2 bg-white rounded-full 
                    shadow-md border border-[#605bff]/10 group-hover:border-[#605bff]/20
                    transition-all duration-300">
          <!-- Icon -->
          <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" 
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          
          <!-- Text -->
          <span class="text-sm font-semibold bg-gradient-to-r from-[#605bff] to-[#8b85ff] 
                       inline-block text-transparent bg-clip-text">
            Smart Features
          </span>
          
          <!-- Animated Dots -->
          <div class="flex gap-1 ml-1">
            <div class="w-1 h-1 rounded-full bg-[#605bff] animate-pulse 
                        [animation-delay:-0.3s]"></div>
            <div class="w-1 h-1 rounded-full bg-[#605bff] animate-pulse 
                        [animation-delay:-0.2s]"></div>
            <div class="w-1 h-1 rounded-full bg-[#605bff] animate-pulse 
                        [animation-delay:-0.1s]"></div>
          </div>
        </div>
      </div>
      
      <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#32325d] to-[#605bff] 
                 inline-block text-transparent bg-clip-text">
        {title}
      </h2>
      <p class="text-gray-600">{subtitle}</p>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each features as feature}
        <div class="group relative">
          <!-- Card -->
          <div class="h-full p-8 rounded-2xl bg-white border border-gray-100 
                      hover:border-[#605bff]/20 transition-all duration-300
                      hover:shadow-xl hover:shadow-[#605bff]/5">
            <!-- Icon -->
            <div class="mb-6 relative">
              <div class="absolute inset-0 bg-[#605bff]/10 rounded-xl blur-xl 
                          group-hover:bg-[#605bff]/20 transition-all duration-300"></div>
              <div class="relative flex items-center justify-center w-14 h-14 
                          rounded-xl bg-[#605bff] group-hover:scale-110 
                          transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-7 h-7 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2"
                >
                  {@html feature.icon}
                </svg>
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold mb-3 text-[#32325d]">{feature.title}</h3>
            <p class="text-gray-600 leading-relaxed">{feature.description}</p>

            <!-- Arrow Icon -->
            <div class="mt-6 flex items-center text-[#605bff] opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300">
              <span class="text-sm font-medium mr-2">Learn more</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  [animation-delay="-0.3s"] {
    animation-delay: -0.3s;
  }

  [animation-delay="-0.2s"] {
    animation-delay: -0.2s;
  }

  [animation-delay="-0.1s"] {
    animation-delay: -0.1s;
  }
</style>