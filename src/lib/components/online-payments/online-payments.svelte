<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const brands = ['usdt', 'A-pay', 'G-pay', 'vss', 'mscrad', 'maestro'];
  const stats = [
    { value: '99.99%', label: 'Uptime', trend: '+0.1%' },
    { value: '$2B+', label: 'Processed', trend: '+12%' },
    { value: '150+', label: 'Countries', trend: '+5' }
  ];
</script>

<section class="relative min-h-screen bg-[#fafbff]">
  <!-- Premium Background Effects -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Gradient Orbs -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px]">
      <div class="absolute inset-0 bg-[conic-gradient(from_0deg,#605bff10,#8b85ff05,transparent)] 
                  rounded-full blur-3xl animate-slow-spin"></div>
    </div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px]">
      <div class="absolute inset-0 bg-[conic-gradient(from_180deg,#32325d08,#605bff05,transparent)] 
                  rounded-full blur-3xl animate-slow-spin-reverse"></div>
    </div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.07] 
                [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

    <!-- Animated Lines -->
    <div class="absolute inset-0">
      {#each Array(5) as _, i}
        <div class="absolute h-[1px] w-full 
                    bg-gradient-to-r from-transparent via-[#605bff]/10 to-transparent
                    animate-flow-line" 
             style="top: {20 + i * 15}%; animation-delay: -{i * 2}s;">
        </div>
      {/each}
    </div>
  </div>

  <!-- Main Content -->
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Column -->
      <div class="relative z-10 space-y-12">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-3 p-1.5 pr-4 rounded-2xl 
                    bg-white/80 border border-[#605bff]/10 shadow-xl shadow-[#605bff]/5 
                    backdrop-blur-xl">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#605bff]">
            <div class="flex -space-x-1">
              <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <div class="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
            <span class="text-sm font-medium text-white">Live</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="flex h-2 w-2">
              <span class="animate-ping absolute h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span class="relative h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span class="text-sm font-medium text-[#32325d]">All Systems Operational</span>
          </div>
        </div>

        <!-- Title Stack -->
        <div class="space-y-6">
          <h1 class="text-[3.5rem] leading-[1.1] font-bold tracking-tight">
            <span class="block text-[#32325d] mb-2">Enterprise</span>
            <span class="relative inline-block">
              <span class="relative z-10 bg-gradient-to-r from-[#605bff] via-[#8b85ff] to-[#32325d] 
                         bg-clip-text text-transparent">Payment Platform</span>
              <div class="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r 
                         from-[#605bff]/10 via-[#8b85ff]/10 to-transparent blur-xl"></div>
            </span>
          </h1>
          
          <p class="text-xl leading-relaxed text-[#32325d]/70 max-w-xl">
            Next-generation payment infrastructure for modern businesses. 
            Scale globally with enterprise-grade security and reliability.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-8">
          {#each stats as stat}
            <div class="group">
              <div class="text-2xl font-bold text-[#32325d]">
                {stat.value}
                <span class="text-sm font-medium text-green-500 ml-1">{stat.trend}</span>
              </div>
              <div class="text-sm text-[#32325d]/60">{stat.label}</div>
            </div>
          {/each}
        </div>

        <!-- CTA Section -->
        <div class="flex items-center gap-6">
          <a href="/contact" 
             class="group relative inline-flex items-center gap-2 px-8 py-4 
                    bg-[#605bff] text-white font-medium rounded-xl overflow-hidden
                    hover:shadow-2xl hover:shadow-[#605bff]/20 
                    transition-all duration-300">
            <span class="relative z-10">Start Integration</span>
            <svg class="w-5 h-5 relative z-10 transition-transform duration-300 
                      group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" 
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M14 5l7 7-7 7"/>
            </svg>
            <div class="absolute inset-0 bg-gradient-to-r from-[#605bff] to-[#8b85ff] 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a href="/documentation" 
             class="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                    border border-[#605bff]/10 text-[#32325d] font-medium
                    hover:bg-[#605bff]/5 transition-all duration-300">
            View Documentation
            <div class="w-6 h-6 rounded-full bg-[#605bff]/5 flex items-center justify-center
                        group-hover:bg-[#605bff]/10 transition-colors duration-300">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        </div>

        <!-- Ultra Modern Payment Methods -->
        <div class="relative mt-20">
          <!-- Modern Grid Layout -->
          <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            <!-- Modern Card Payment -->
            <div class="group">
              <div class="relative flex items-center justify-center p-6 rounded-2xl 
                          bg-white/60 hover:bg-white border border-[#605bff]/5
                          hover:shadow-xl hover:shadow-[#605bff]/10 
                          hover:scale-105 hover:border-[#605bff]/10
                          transition-all duration-300 ease-out">
                <svg class="w-10 h-10 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M7 15H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <rect x="3" y="5" width="18" height="14" rx="2" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M13 15H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <!-- Digital Wallet -->
            <div class="group">
              <div class="relative flex items-center justify-center p-6 rounded-2xl 
                          bg-white/60 hover:bg-white border border-[#605bff]/5
                          hover:shadow-xl hover:shadow-[#605bff]/10 
                          hover:scale-105 hover:border-[#605bff]/10
                          transition-all duration-300 ease-out">
                <svg class="w-10 h-10 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                  <path d="M19 7V6C19 4.89543 18.1046 4 17 4H6C4.89543 4 4 4.89543 4 6V17C4 18.1046 4.89543 19 6 19H7" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <rect x="8" y="8" width="15" height="11" rx="2" 
                        stroke="currentColor" stroke-width="1.5"/>
                  <circle cx="16" cy="14" r="2" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
            </div>

            <!-- Fast Transfer -->
            <div class="group">
              <div class="relative flex items-center justify-center p-6 rounded-2xl 
                          bg-white/60 hover:bg-white border border-[#605bff]/5
                          hover:shadow-xl hover:shadow-[#605bff]/10 
                          hover:scale-105 hover:border-[#605bff]/10
                          transition-all duration-300 ease-out">
                <svg class="w-10 h-10 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V18M12 6L7 11M12 6L17 11" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="10" 
                          stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
            </div>

            <!-- Mobile Pay -->
            <div class="group">
              <div class="relative flex items-center justify-center p-6 rounded-2xl 
                          bg-white/60 hover:bg-white border border-[#605bff]/5
                          hover:shadow-xl hover:shadow-[#605bff]/10 
                          hover:scale-105 hover:border-[#605bff]/10
                          transition-all duration-300 ease-out">
                <svg class="w-10 h-10 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="3" width="12" height="18" rx="3" 
                        stroke="currentColor" stroke-width="1.5"/>
                  <path d="M10.5 7H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M12 17V17.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M10 14H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <!-- Smart Pay -->
            <div class="group">
              <div class="relative flex items-center justify-center p-6 rounded-2xl 
                          bg-white/60 hover:bg-white border border-[#605bff]/5
                          hover:shadow-xl hover:shadow-[#605bff]/10 
                          hover:scale-105 hover:border-[#605bff]/10
                          transition-all duration-300 ease-out">
                <svg class="w-10 h-10 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V13L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M12 4C16.4183 4 20 7.58172 20 12" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M4 12C4 7.58172 7.58172 4 12 4" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <!-- Crypto -->
            <div class="group">
              <div class="relative flex items-center justify-center p-6 rounded-2xl 
                          bg-white/60 hover:bg-white border border-[#605bff]/5
                          hover:shadow-xl hover:shadow-[#605bff]/10 
                          hover:scale-105 hover:border-[#605bff]/10
                          transition-all duration-300 ease-out">
                <svg class="w-10 h-10 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M9.5 10C9.5 8.89543 10.3954 8 11.5 8H13.5C14.6046 8 15.5 8.89543 15.5 10C15.5 11.1046 14.6046 12 13.5 12H11.5C10.3954 12 9.5 12.8954 9.5 14C9.5 15.1046 10.3954 16 11.5 16H13.5C14.6046 16 15.5 15.1046 15.5 14" 
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M12.5 7V8M12.5 16V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Modern Gradient Background -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
            <div class="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#605bff]/5 to-transparent"></div>
            <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#605bff]/5 to-transparent"></div>
          </div>
        </div>
      </div>

      <!-- Right Column - Interactive Dashboard -->
      <div class="relative">
        <div class="relative rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl 
                    border border-white/20 overflow-hidden group
                    hover:shadow-[#605bff]/5 transition-all duration-500">
          <!-- Dashboard Header -->
          <div class="absolute top-0 inset-x-0 h-14 bg-white/90 backdrop-blur-sm 
                      border-b border-[#605bff]/5 px-6 flex items-center justify-between z-20">
            <div class="flex items-center gap-4">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="text-sm font-medium text-[#32325d]/70">Payment Dashboard</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <span class="text-sm text-[#32325d]/60">Connected</span>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="relative pt-14">
            <img src="/images/photos/pay2.jpg" 
                 alt="Payment Dashboard"
                 class="w-full transition-transform duration-700 
                        group-hover:scale-[1.02]" />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        <!-- Floating Success Messages -->
        {#each Array(3) as _, i}
          <div class="absolute animate-float-message"
               style="
                 top: {30 + Math.random() * 40}%;
                 right: {10 + Math.random() * 20}%;
                 animation-delay: -{i * 2}s;
               ">
            <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 
                        backdrop-blur-sm shadow-lg border border-[#605bff]/10">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <span class="text-sm font-medium text-[#32325d]">Payment Successful</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slow-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes slow-spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes flow-line {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }

  @keyframes float-message {
    0%, 100% { opacity: 0; transform: translateY(10px); }
    50% { opacity: 1; transform: translateY(0); }
  }

  .animate-slow-spin {
    animation: slow-spin 20s linear infinite;
  }

  .animate-slow-spin-reverse {
    animation: slow-spin-reverse 25s linear infinite;
  }

  .animate-flow-line {
    animation: flow-line 8s linear infinite;
  }

  .animate-float-message {
    animation: float-message 4s ease-in-out infinite;
  }

  @keyframes pulse-subtle {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.05); opacity: 0.7; }
  }

  .animate-pulse-subtle {
    animation: pulse-subtle 3s ease-in-out infinite;
  }
</style>