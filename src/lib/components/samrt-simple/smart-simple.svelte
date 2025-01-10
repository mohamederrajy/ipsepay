<script lang="ts">
  export let title = "Smart Payment Infrastructure";
  export let subtitle = "Experience seamless payments with our unified platform. Built for scale, engineered for reliability.";
  
  const features = [
    {
      title: "Global Payments",
      description: "Accept payments from anywhere with 150+ payment methods and currencies",
      icon: `<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>`
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and fraud protection for peace of mind",
      icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`
    },
    {
      title: "Smart Analytics",
      description: "Real-time insights and reporting to optimize your business",
      icon: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>`
    }
  ];
</script>

<section class="py-16 bg-[#fafafa]">
  <div class="container max-w-6xl mx-auto px-4">
    <!-- Enhanced Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl mb-8">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white">
          Enterprise-Ready
        </span>
        <span class="text-sm font-medium text-[#32325d] flex items-center gap-2">
          Global Payment Solutions
          <div class="relative flex">
            <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full 
                         bg-[#605bff] opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>
      
      <h2 class="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[#32325d]">
        {title.split(' ')[0]}
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] 
                       bg-clip-text text-transparent">
            {title.split(' ').slice(1).join(' ')}
          </span>
        </span>
      </h2>
      
      <p class="text-lg text-[#32325d]/70 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="group">
          <div class="p-6 rounded-xl bg-white border border-gray-100 
                      hover:border-[#605bff]/20 transition-all duration-300 
                      hover:shadow-lg">
            <div class="mb-6">
              <div class="flex items-center justify-center w-12 h-12 
                          rounded-lg bg-[#605bff] text-white">
                <svg class="w-6 h-6" viewBox="0 0 24 24" 
                     fill="none" stroke="currentColor" stroke-width="2">
                  {@html feature.icon}
                </svg>
              </div>
            </div>

            <h3 class="text-xl font-semibold mb-2 text-[#32325d]">
              {feature.title}
            </h3>
            <p class="text-gray-600">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
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
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
</style>