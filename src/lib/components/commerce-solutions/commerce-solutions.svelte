<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  onMount(() => isVisible = true);

  const stats = [
    { value: '45%', label: 'Revenue Growth', trend: '+12.5%' },
    { value: '2.4M', label: 'Total Sales', trend: '+8.1%' },
    { value: '98%', label: 'Satisfaction', trend: '+5.2%' }
  ];

  const chartData = Array(10).fill(0).map(() => ({
    current: 30 + Math.random() * 70,
    previous: 30 + Math.random() * 70
  }));
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

      <!-- Right Side - Added minimal spacing -->
      <div class="relative mt-6 sm:mt-8 lg:mt-0 w-[calc(100%-1rem)] sm:w-full 
                  mx-auto sm:max-w-full overflow-hidden">
        <!-- Main Analytics Card - Small side spacing on mobile -->
        <div class="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg 
                    sm:shadow-xl p-2 sm:p-4 lg:p-8 border border-gray-100">
          <!-- Enhanced Header -->
          <div class="space-y-4 sm:space-y-6 mb-4 sm:mb-6 lg:mb-8">
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center 
                        justify-between">
              <div class="w-full sm:w-auto text-center sm:text-left">
                <h3 class="text-sm sm:text-base lg:text-lg font-semibold text-[#32325d] 
                           flex items-center justify-center sm:justify-start gap-2">
                  Revenue Analytics
                  <span class="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full 
                               text-[10px] sm:text-xs font-medium bg-green-100 text-green-800">
                    Live
                  </span>
                </h3>
                <p class="text-[11px] sm:text-xs lg:text-sm text-gray-500 mt-0.5">
                  Last 30 days performance
                </p>
              </div>
              
              <!-- Enhanced Controls -->
              <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <select class="w-full sm:w-auto px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 
                               text-xs lg:text-sm font-medium text-[#32325d] bg-gray-50 
                               rounded-lg border border-gray-200 focus:outline-none 
                               focus:ring-2 focus:ring-[#605bff]/20">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
                <button class="w-full sm:w-auto px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 
                               text-xs lg:text-sm font-medium text-[#605bff] 
                               bg-[#605bff]/5 rounded-lg hover:bg-[#605bff]/10 
                               transition-all duration-300">
                  <span class="flex items-center justify-center gap-1.5 sm:gap-2">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" 
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Export
                  </span>
                </button>
              </div>
            </div>

            <!-- Enhanced Tabs -->
            <div class="flex gap-2 sm:gap-4 lg:gap-6 border-b border-gray-100 
                        overflow-x-auto hide-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
              {#each ['Overview', 'Revenue', 'Orders', 'Customers'] as tab, i}
                <button class="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium 
                               whitespace-nowrap text-gray-500 hover:text-[#605bff] 
                               transition-colors relative group 
                               {i === 0 ? 'text-[#605bff]' : ''}">
                  {tab}
                  {#if i === 0}
                    <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#605bff]"></div>
                  {/if}
                  <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#605bff] 
                             scale-x-0 group-hover:scale-x-100 transition-transform 
                             duration-300 origin-left"></div>
                </button>
              {/each}
            </div>
          </div>

          <!-- Enhanced Chart Area -->
          <div class="relative h-[140px] sm:h-[180px] lg:h-[280px] mb-3 sm:mb-4 lg:mb-6 
                      group overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-[#605bff]/5 to-transparent 
                        rounded-lg transition-opacity duration-300 opacity-50 
                        group-hover:opacity-100"></div>
            
            <!-- Responsive Chart Lines -->
            <div class="relative h-full flex items-end gap-1 sm:gap-2 lg:gap-3 px-1">
              {#each Array(12) as _, i}
                <div class="relative flex-1 group/bar cursor-pointer">
                  <div class="absolute bottom-0 w-full h-[120px] sm:h-[160px] 
                              bg-[#605bff]/10 rounded-t-lg transition-all duration-300 
                              group-hover/bar:h-[140px] sm:group-hover/bar:h-[180px]"></div>
                  <div class="absolute bottom-0 w-full bg-[#605bff] rounded-t-lg 
                              transition-all duration-300 group-hover/bar:opacity-100 
                              opacity-80 hover:shadow-lg hover:shadow-[#605bff]/20"
                       style="height: {30 + Math.random() * 90}px"></div>
                  <!-- Enhanced Tooltip -->
                  <div class="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 
                              bg-[#32325d] text-white px-2 sm:px-3 py-1 sm:py-1.5 
                              rounded-lg text-[10px] sm:text-xs opacity-0 
                              group-hover/bar:opacity-100 transition-all duration-300
                              group-hover/bar:-translate-y-1 shadow-lg whitespace-nowrap">
                    <div class="font-semibold">${(Math.random() * 10000).toFixed(0)}</div>
                    <div class="text-[8px] sm:text-[10px] opacity-75">
                      +{(Math.random() * 20).toFixed(1)}%
                    </div>
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                               translate-y-1/2 rotate-45 w-1.5 sm:w-2 h-1.5 sm:h-2 
                               bg-[#32325d]"></div>
                  </div>
                </div>
              {/each}
            </div>

            <!-- Enhanced Time Labels -->
            <div class="flex justify-between mt-2 sm:mt-4 text-[10px] sm:text-xs lg:text-sm">
              {#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
                <span class="px-1 sm:px-2 py-0.5 sm:py-1 rounded-md transition-colors 
                           duration-300 hover:bg-[#605bff]/5 hover:text-[#605bff] 
                           cursor-pointer">
                  {day}
                </span>
              {/each}
            </div>
          </div>

          <!-- Enhanced Stats Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            {#each [
              { label: 'Total Revenue', value: '$487,239', trend: '+12.5%' },
              { label: 'Avg. Order Value', value: '$149.99', trend: '+8.3%' },
              { label: 'Conversion Rate', value: '3.42%', trend: '+2.1%' }
            ] as stat}
              <div class="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 
                          transition-all duration-300 group hover:bg-white 
                          hover:-translate-y-1 hover:shadow-lg cursor-pointer
                          border border-transparent hover:border-[#605bff]/20">
                <div class="flex items-start justify-between mb-1 sm:mb-2">
                  <p class="text-xs sm:text-sm text-gray-500 group-hover:text-[#605bff] 
                           transition-colors">{stat.label}</p>
                  <div class="w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-[#605bff]/10 
                             flex items-center justify-center group-hover:bg-[#605bff]/20 
                             transition-colors">
                    <svg class="w-3 sm:w-4 h-3 sm:h-4 text-[#605bff]" viewBox="0 0 24 24" 
                         fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" 
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div class="flex items-baseline gap-1 sm:gap-2">
                  <span class="text-sm sm:text-base lg:text-xl font-semibold text-[#32325d] 
                             group-hover:text-[#605bff] transition-colors">
                    {stat.value}
                  </span>
                  <span class="text-[10px] sm:text-xs font-medium text-green-500 
                             flex items-center gap-0.5 sm:gap-1">
                    <svg class="w-2 sm:w-3 h-2 sm:h-3" viewBox="0 0 24 24" fill="none" 
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                    {stat.trend}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Update notification positioning -->
        <!-- Sales Increase Alert -->
        <div class="absolute -right-1 sm:-right-8 top-4 sm:top-8 transform 
                    translate-x-1/2 w-auto lg:w-64 animate-float">
          <div class="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 sm:w-8 h-10 sm:h-8 rounded-xl sm:rounded-lg 
                          bg-green-500/10 flex items-center justify-center">
                <svg class="w-5 sm:w-4 h-5 sm:h-4 text-green-500" viewBox="0 0 24 24" 
                     fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <span class="text-base sm:text-sm font-medium text-[#32325d]">
                Sales Increase
              </span>
            </div>
            <div class="text-3xl sm:text-2xl font-bold text-[#32325d] mb-1">+24.5%</div>
            <p class="text-sm sm:text-xs text-gray-500">Compared to last month</p>
          </div>
        </div>

        <!-- Revenue Update Alert -->
        <div class="absolute -left-1 sm:-left-8 bottom-4 sm:bottom-8 transform 
                    -translate-x-1/2 w-auto lg:w-64 animate-float">
          <div class="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 sm:w-8 h-10 sm:h-8 rounded-xl sm:rounded-lg 
                          bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-5 sm:w-4 h-5 sm:h-4 text-[#605bff]" viewBox="0 0 24 24" 
                     fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span class="text-base sm:text-sm font-medium text-[#32325d]">
                Revenue Update
              </span>
            </div>
            <div class="text-3xl sm:text-2xl font-bold text-[#32325d] mb-1">$12.4M</div>
            <p class="text-sm sm:text-xs text-gray-500">Total revenue this quarter</p>
          </div>
        </div>
      </div>
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

  /* Add hide-scrollbar utility */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>