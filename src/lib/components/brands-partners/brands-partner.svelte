<script lang="ts">
  const features = [
    {
      title: 'Smart Routing',
      description: 'Optimize payment pathways for higher success rates',
      icon: `<svg class="w-7 h-7" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>`,
      stat: '99.9%',
      label: 'Success Rate'
    },
    {
      title: 'Real-time Data',
      description: 'Monitor and analyze transactions instantly',
      icon: `<svg class="w-7 h-7" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
        <path d="M8 18v-8m4 8V8m4 10V4"/>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>`,
      stat: '0.1s',
      label: 'Processing'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade encryption and protection',
      icon: `<svg class="w-7 h-7" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
        <path d="M12 3c-1.2 0-2.4.6-3 1.7A4 4 0 004 8v3a8 8 0 1016 0V8a4 4 0 00-5-3.3A3 3 0 0012 3z"/>
        <path d="M12 12v3m0 3h.01"/>
      </svg>`,
      stat: '256-bit',
      label: 'Encryption'
    },
    {
      title: 'Global Reach',
      description: 'Accept payments from anywhere worldwide',
      icon: `<svg class="w-7 h-7" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3a15 15 0 014 9 15 15 0 01-4 9 15 15 0 01-4-9 15 15 0 014-9z"/>
        <path d="M3 12h18"/>
      </svg>`,
      stat: '150+',
      label: 'Countries'
    }
  ];
</script>

<section class="relative overflow-hidden">
  <!-- Modern Layered Background -->
  <div class="absolute inset-0 bg-[#F6F9FC]">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-[#F6F9FC] to-gray-100/80"></div>
    
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#605bff]/5 via-purple-100/10 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200/30 via-[#605bff]/5 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="absolute inset-0 opacity-[0.02]"
         style="background-image: radial-gradient(circle at 2px 2px, rgb(148 163 184 / 0.2) 1px, transparent 0),
           linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
           linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px);
           background-size: 24px 24px, 64px 64px, 64px 64px;">
    </div>
  </div>

  <div class="relative py-20">
    <div class="absolute inset-0 backdrop-blur-[2px]"></div>
    
    <div class="container px-4 mx-auto relative z-10">
      <!-- Features Row -->
      <div class="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
        {#each features as feature}
          <div class="min-w-[280px] group bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
            <!-- Modern Icon with Subtle Background -->
            <div class="inline-flex p-2.5 rounded-xl bg-[#605bff]/5 text-[#605bff] mb-4 group-hover:bg-[#605bff]/10 transition-colors">
              {@html feature.icon}
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#605bff] transition-colors">
              {feature.title}
            </h3>
            <p class="text-gray-600 text-sm mb-6">
              {feature.description}
            </p>

            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-[#605bff]">
                {feature.stat}
              </span>
              <span class="text-sm text-gray-500">{feature.label}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .container {
    max-width: 1280px;
  }
</style>