<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const payoutMethods = [
    { 
      name: 'Wise Transfer', 
      icon: '/images/brands/wise.svg',
      description: 'Fast and low-cost international transfers with real exchange rates', 
      stat: '80+', 
      label: 'Countries',
      bgColor: 'bg-gradient-to-br from-[#00B9FF]/5 to-[#00B9FF]/10',
      textColor: 'text-[#00B9FF]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#00B9FF]/10 to-[#00B9FF]/20',
      features: ['Real Exchange Rate', 'Multi-Currency', 'Low Fees']
    },
    { 
      name: 'Payoneer', 
      icon: '/images/brands/payonner.png',
      description: 'Global payment platform with virtual bank accounts and prepaid cards', 
      stat: '200+', 
      label: 'Countries',
      bgColor: 'bg-gradient-to-br from-[#FF4B4B]/5 to-[#FF4B4B]/10',
      textColor: 'text-[#FF4B4B]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#FF4B4B]/10 to-[#FF4B4B]/20',
      features: ['Virtual Accounts', 'Prepaid Cards', 'Global Reach']
    },
    { 
      name: 'USDT (TRC20)', 
      icon: '/images/brands/usdt.png',
      description: 'Fast and low-cost USDT transfers on the TRON network', 
      stat: '< 5', 
      label: 'Minutes',
      bgColor: 'bg-gradient-to-br from-[#26A17B]/5 to-[#26A17B]/10',
      textColor: 'text-[#26A17B]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#26A17B]/10 to-[#26A17B]/20',
      features: ['Instant Transfer', 'Low Network Fees', 'Stable Value']
    },
    { 
      name: 'Local Bank Transfer', 
      icon: '/images/brands/banktrssfer.png',
      description: 'Direct deposits to your local bank account with domestic rates', 
      stat: '1-2', 
      label: 'Business Days',
      bgColor: 'bg-gradient-to-br from-[#605bff]/5 to-[#605bff]/10',
      textColor: 'text-[#605bff]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#605bff]/10 to-[#605bff]/20',
      features: ['No International Fees', 'Local Processing', 'Auto Reconciliation']
    }
  ];
</script>

<section class="relative overflow-hidden py-32">
  <!-- Enhanced Modern iOS-style Background -->
  <div class="absolute inset-0">
    <!-- Dynamic Base Layer -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90"></div>
    
    <!-- Enhanced Blur Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary Glow -->
      <div class="absolute top-0 -right-1/4 w-[1200px] h-[1200px]
                  bg-gradient-to-br from-[#605bff]/20 via-purple-400/10 to-transparent 
                  rounded-full blur-[120px] backdrop-blur-3xl animate-slow-spin"></div>
      
      <!-- Secondary Glow -->
      <div class="absolute -bottom-1/4 -left-1/4 w-[1200px] h-[1200px]
                  bg-gradient-to-tr from-[#32325d]/15 via-blue-300/10 to-transparent 
                  rounded-full blur-[150px] backdrop-blur-3xl animate-slow-spin-reverse"></div>
      
      <!-- Accent Glows -->
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px]
                  bg-gradient-to-tr from-pink-500/10 via-purple-300/10 to-transparent 
                  rounded-full blur-[80px] animate-pulse-slow"></div>
      
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]
                  bg-gradient-to-br from-blue-400/10 via-cyan-300/10 to-transparent 
                  rounded-full blur-[100px] animate-pulse-slow-delay"></div>
    </div>

    <!-- Modern Frosted Glass -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 backdrop-blur-[100px] bg-white/30"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 
                  backdrop-blur-3xl"></div>
    </div>
    
    <!-- Enhanced Grid -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>
    </div>

    <!-- Light Rays -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b 
                  from-transparent via-purple-500/10 to-transparent blur-[2px]"></div>
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b 
                  from-transparent via-blue-500/10 to-transparent blur-[2px]"></div>
    </div>
  </div>

  <!-- Content Container -->
  <div class="relative container mx-auto px-4">
    <!-- Title Section -->
    <div class="max-w-3xl mx-auto text-center mb-24">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                  transition-all duration-300 mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
          <span class="relative z-10">Global</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-sm font-medium text-[#32325d]">Payout Options</span>
      </div>

      <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
        Choose Your
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">Payout Method</span>
        </span>
      </h2>
      
      <p class="text-xl text-[#32325d]/70 max-w-2xl mx-auto leading-relaxed">
        Get paid your way with our flexible payout solutions. Fast, secure, and reliable 
        options for global transactions.
      </p>
    </div>

    <!-- Updated Payment Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {#each payoutMethods as method, i}
        <div class="group bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 
                    shadow-xl hover:shadow-2xl transition-all duration-500 
                    hover:-translate-y-1 relative overflow-hidden p-8
                    animate-fade-up" style="animation-delay: {i * 200}ms">
          <!-- Reduced Size Image Display -->
          <div class="relative mb-6">
            <div class="h-16 rounded-xl overflow-hidden relative 
                        transition-all duration-500">
              <!-- Simple Gradient Background -->
              <div class="absolute inset-0 bg-gradient-to-br {method.bgColor} 
                          transition-all duration-500"></div>
              
              <!-- Image Container -->
              <div class="relative h-full flex items-center justify-center">
                <img 
                  src={method.icon} 
                  alt={method.name}
                  class="h-10 w-auto object-contain drop-shadow-lg 
                         transform group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <h3 class="text-xl font-bold mb-4 text-[#32325d] group-hover:{method.textColor}
                     transition-all duration-300 text-center">
            {method.name}
          </h3>
          
          <p class="text-[#32325d]/60 text-base mb-6 leading-relaxed text-center">
            {method.description}
          </p>

          <div class="space-y-2 mb-8">
            {#each method.features as feature}
              <div class="flex items-center gap-2 text-sm text-[#32325d]/70 
                          hover:text-[#32325d] transition-colors duration-300">
                <svg class="w-4 h-4 {method.textColor}" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>{feature}</span>
              </div>
            {/each}
          </div>

          <div class="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
            <span class="text-3xl font-bold {method.textColor} transition-all duration-300
                         group-hover:scale-110">
              {method.stat}
            </span>
            <span class="text-sm text-[#32325d]/50 font-medium">{method.label}</span>
          </div>

          <!-- Enhanced hover indicator -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                      {method.bgColor} opacity-0 group-hover:opacity-100 
                      transition-all duration-500"></div>
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

  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-10px, 10px); }
  }

  :global(.gradient-orb) {
    animation: float-slow 20s ease-in-out infinite;
  }

  /* Enhanced Animations */
  @keyframes gradient-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-2%, 2%) rotate(3deg); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, 20px) rotate(-3deg); }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }

  @keyframes glow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  .animate-gradient-slow {
    animation: gradient-slow 20s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse-slow 10s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 15s ease-in-out infinite;
  }

  .gradient-orb-1 {
    animation: float-slow 25s ease-in-out infinite;
  }

  .gradient-orb-2 {
    animation: float-slow 20s ease-in-out infinite reverse;
  }

  /* Only necessary animations */
  @keyframes subtle-float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-20px, 20px); }
  }

  @keyframes subtle-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.7; }
  }

  @keyframes slow-spin {
    from { transform: rotate(0deg) scale(1); }
    to { transform: rotate(360deg) scale(1.1); }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }

  .animate-slow-spin {
    animation: slow-spin 60s linear infinite;
  }

  .animate-slow-spin-reverse {
    animation: slow-spin 50s linear infinite reverse;
  }

  .animate-pulse-slow {
    animation: pulse-slow 15s ease-in-out infinite;
  }

  .animate-pulse-slow-delay {
    animation: pulse-slow 15s ease-in-out infinite;
    animation-delay: -7.5s;
  }
</style>