<script lang="ts">
  import { onMount } from 'svelte';
  
  let activeTab = 'Overview';
  let isVisible = false;
  onMount(() => isVisible = true);

  const tabs = [
    { id: 'Overview', label: 'Overview' },
    { id: 'Analytics', label: 'Analytics' },
    { id: 'Reports', label: 'Reports' },
    { id: 'Settings', label: 'Settings' }
  ];

  // Dynamic data generation
  const generateData = () => Array(24).fill(0).map(() => ({
    value: Math.floor(Math.random() * 100),
    time: new Date().toLocaleTimeString()
  }));

  let chartData = generateData();
  let currentValue = '$48,562.20';
  let currentGrowth = '+12.5%';

  // Update data periodically
  onMount(() => {
    const interval = setInterval(() => {
      chartData = [...chartData.slice(1), {
        value: Math.floor(Math.random() * 100),
        time: new Date().toLocaleTimeString()
      }];
      currentValue = `$${(48000 + Math.random() * 2000).toFixed(2)}`;
      currentGrowth = `+${(10 + Math.random() * 5).toFixed(1)}%`;
    }, 3000);

    return () => clearInterval(interval);
  });

  const stats = [
    { value: '45%', label: 'Revenue Growth', trend: '+12.5%', color: 'green' },
    { value: '2.4M', label: 'Total Sales', trend: '+8.1%', color: 'blue' },
    { value: '98%', label: 'Satisfaction', trend: '+5.2%', color: 'purple' }
  ];
</script>

<section class="relative py-12 sm:py-16 lg:py-32">
  <div class="relative w-full sm:container mx-auto px-2 sm:px-4 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-20 items-center">
      <!-- Left Content - Enhanced mobile layout -->
      <div class="max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-4">
        <!-- Badge with better mobile sizing -->
        <div class="flex justify-center lg:justify-start">
          <div class="inline-flex items-center gap-1.5 sm:gap-3 rounded-full bg-white 
                      p-1 sm:p-1.5 pr-3 sm:pr-4 md:pr-6 border border-gray-100 
                      shadow-xl hover:shadow-2xl transition-all duration-300 
                      mb-4 sm:mb-6 md:mb-8 scale-90 sm:scale-100">
            <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                         px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs 
                         md:text-sm font-medium text-white">
              <span class="relative z-10">Analytics</span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                          to-transparent animate-shimmer"></div>
            </span>
            <span class="text-[11px] sm:text-xs md:text-sm font-medium text-[#32325d]">
              Real-time Insights
            </span>
          </div>
        </div>

        <!-- Enhanced heading responsiveness -->
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                   leading-tight mb-3 sm:mb-4 md:mb-8 text-[#32325d]">
          <span class="inline-block">Analytics</span>
          <span class="relative inline-block">
            <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] 
                         bg-clip-text text-transparent animate-gradient 
                         ml-1 sm:ml-2">Simplified</span>
          </span>
        </h2>
        
        <!-- Enhanced paragraph responsiveness -->
        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-[#32325d]/70 
                  leading-relaxed mb-4 sm:mb-6 md:mb-8 mx-auto lg:mx-0 
                  max-w-[90%] sm:max-w-full">
          Track your business performance in real-time with comprehensive analytics. 
          Get detailed insights into sales trends, customer behavior, and revenue growth.
        </p>

        <!-- Enhanced button responsiveness -->
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start 
                    gap-2 sm:gap-3 md:gap-4 px-4 sm:px-0">
          <a href="/account/signup" 
             class="w-full sm:w-auto inline-flex items-center justify-center 
                    px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#605bff] text-white 
                    text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl 
                    hover:bg-[#605bff]/90 transition-all duration-300 shadow-lg 
                    shadow-[#605bff]/25 hover:shadow-xl hover:shadow-[#605bff]/30 
                    hover:-translate-y-0.5">
            Get Started
          </a>
          <a href="/account/signup" 
             class="w-full sm:w-auto inline-flex items-center justify-center 
                    px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-[#605bff] 
                    text-xs sm:text-sm md:text-base font-medium hover:bg-[#605bff]/5 
                    rounded-lg sm:rounded-xl transition-all duration-300 
                    border border-[#605bff]/10 hover:border-[#605bff]/30">
            Learn More →
          </a>
        </div>
      </div>

      <!-- Right Section - Responsive Browser Style Analytics Dashboard -->
      <div class="relative mt-6 sm:mt-8 lg:mt-0 w-full max-w-[calc(100%-1rem)] sm:max-w-full mx-auto">
        <!-- Browser-like Window -->
        <div class="bg-[#f0f1f4] rounded-xl shadow-lg overflow-hidden">
          <!-- Browser Controls Bar -->
          <div class="bg-[#e4e5e7] px-3 sm:px-4 py-2 flex items-center">
            <!-- Browser Controls -->
            <div class="flex gap-1 sm:gap-1.5 items-center">
              <div class="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#ff5f57]"></div>
              <div class="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#febc2e]"></div>
              <div class="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#28c840]"></div>
            </div>
          </div>

          <!-- Browser Content Area -->
          <div class="bg-white p-3 sm:p-4 lg:p-6">
            <div class="space-y-4 sm:space-y-6">
              <!-- Dashboard Header -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <div class="text-xs sm:text-sm font-medium text-[#32325d]/70 flex items-center gap-2">
                    Analytics Overview
                    <span class="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs 
                               font-medium bg-green-100 text-green-800">
                      Live
                    </span>
                  </div>
                  <div class="text-xl sm:text-2xl font-bold text-[#32325d] transition-all duration-300">
                    {currentValue}
                    <span class="text-xs sm:text-sm font-medium text-green-500 ml-2">{currentGrowth}</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  {#each ['1H', '1D', '1W', '1M'] as period}
                    <button class="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-lg 
                               {period === '1D' ? 'bg-[#605bff] text-white' : 'text-[#32325d]/70 hover:bg-[#605bff]/10'}
                               transition-all duration-300">
                      {period}
                    </button>
                  {/each}
                </div>
              </div>

              <!-- Dynamic Chart -->
              <div class="relative h-32 sm:h-40">
                <!-- Gradient Background -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#605bff]/5 to-transparent rounded-lg"></div>
                
                <!-- Enhanced Chart -->
                <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <!-- Grid Lines -->
                  {#each Array(5) as _, i}
                    <line x1="0" y1={i * 10} x2="100" y2={i * 10} 
                          stroke="#605bff" stroke-width="0.1" stroke-dasharray="1 1"/>
                  {/each}
                  
                  <!-- Dynamic Chart Line -->
                  {#key chartData}
                    <path d={`M ${chartData.map((d, i) => 
                      `${(i * 100) / (chartData.length - 1)} ${40 - (d.value * 30) / 100}`).join(' L ')}`}
                          fill="none" stroke="#605bff" stroke-width="0.5"
                          class="animate-draw"/>
                            
                  <!-- Chart Area -->
                  <path d={`M 0 40 ${chartData.map((d, i) => 
                    `L ${(i * 100) / (chartData.length - 1)} ${40 - (d.value * 30) / 100}`).join(' ')} L 100 40`}
                        fill="url(#gradient)" opacity="0.2"/>
                              
                  <!-- Data Points -->
                  {#each chartData as point, i}
                    <circle cx={(i * 100) / (chartData.length - 1)} 
                            cy={40 - (point.value * 30) / 100} 
                            r="0.5" fill="#605bff" 
                            class="animate-pulse"/>
                  {/each}
                {/key}
                </svg>
                
                <!-- Enhanced Gradient -->
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#605bff;stop-opacity:0.4"/>
                    <stop offset="100%" style="stop-color:#605bff;stop-opacity:0"/>
                  </linearGradient>
                </defs>
              </div>

              <!-- Stats Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                {#each stats as stat}
                  <div class="p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 
                              transition-all duration-300 cursor-pointer">
                    <div class="text-lg sm:text-xl font-bold text-[#32325d]">{stat.value}</div>
                    <div class="text-xs sm:text-sm text-[#32325d]/70">{stat.label}</div>
                    <div class="text-[10px] sm:text-xs text-green-500 mt-1 sm:mt-2 flex items-center gap-1">
                      <svg class="w-2 sm:w-3 h-2 sm:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                      {stat.trend}
                    </div>
                  </div>
                {/each}
              </div>

              <!-- Activity Indicators -->
              <div class="flex items-center justify-between px-2 py-3 sm:py-4 bg-gray-50 rounded-lg">
                {#each Array(6) as _, i}
                  <div class="w-1 sm:w-1.5 h-6 sm:h-8 rounded-full bg-[#605bff]/20 overflow-hidden">
                    <div class="w-full bg-[#605bff] animate-activity"
                         style="height: {30 + Math.random() * 70}%; animation-delay: {i * 0.2}s">
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Card - Hidden on mobile, visible on larger screens -->
        <div class="hidden sm:block absolute -right-4 top-10 transform translate-x-1/2 w-64 animate-float">
          <div class="bg-white rounded-xl p-4 shadow-lg">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-[#32325d]">Real-time Update</span>
            </div>
            <div class="text-2xl font-bold text-[#32325d]">+24.5%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }

  @keyframes activity {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.7); }
  }

  @keyframes float {
    0%, 100% { transform: translate(50%, 0); }
    50% { transform: translate(50%, -10px); }
  }

  .animate-draw {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 2s ease-out forwards;
  }

  .animate-activity {
    animation: activity 2s ease-in-out infinite;
    transform-origin: bottom;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
</style>