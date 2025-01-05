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

<section class="relative py-32">
  <div class="relative container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-20 items-center">
      <!-- Left Content -->
      <div class="max-w-xl">
        <div class="inline-flex items-center gap-3 rounded-full bg-white p-1.5 pr-6 
                    border border-gray-100 shadow-xl hover:shadow-2xl 
                    transition-all duration-300 mb-8 animate-float">
          <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                       px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
            <span class="relative z-10">Analytics</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                        to-transparent animate-shimmer"></div>
          </span>
          <span class="text-sm font-medium text-[#32325d]">Real-time Insights</span>
        </div>

        <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
          Analytics
          <span class="relative inline-block">
            <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                         text-transparent animate-gradient">Simplified</span>
          </span>
        </h2>
        
        <p class="text-xl text-[#32325d]/70 max-w-2xl leading-relaxed mb-8">
          Track your business performance in real-time with comprehensive analytics. 
          Get detailed insights into sales trends, customer behavior, and revenue growth.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="/account/signup" 
             class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white 
                    font-medium rounded-xl hover:bg-[#605bff]/90 transition-all 
                    duration-300 shadow-lg shadow-[#605bff]/25 hover:shadow-xl 
                    hover:shadow-[#605bff]/30 hover:-translate-y-0.5">
            Get Started
          </a>
          <a href="/account/signup" 
             class="inline-flex items-center px-6 py-3 text-[#605bff] font-medium 
                    hover:bg-[#605bff]/5 rounded-xl transition-all duration-300 
                    border border-[#605bff]/10 hover:border-[#605bff]/30">
            Learn More →
          </a>
        </div>
      </div>

      <!-- Right Side - Analytics Dashboard -->
      <div class="relative">
        <!-- Main Analytics Card -->
        <div class="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 
                    transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <!-- Enhanced Header with Tabs -->
          <div class="space-y-6 mb-8">
            <div class="flex justify-between items-center">
              <div class="space-y-1">
                <h3 class="text-lg font-semibold text-[#32325d] flex items-center gap-2">
                  Revenue Analytics
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
                               font-medium bg-green-100 text-green-800">
                    Live
                  </span>
                </h3>
                <p class="text-sm text-gray-500">Last 30 days performance</p>
              </div>
              <div class="flex items-center gap-3">
                <select class="px-4 py-2 text-sm font-medium text-[#32325d] bg-gray-50 
                             rounded-lg border border-gray-200 hover:border-[#605bff]/30 
                             transition-all duration-300 cursor-pointer outline-none 
                             focus:ring-2 focus:ring-[#605bff]/20">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
                <button class="px-4 py-2 text-sm font-medium text-[#605bff] bg-[#605bff]/5 
                             rounded-lg hover:bg-[#605bff]/10 transition-all duration-300
                             hover:-translate-y-0.5 hover:shadow-lg">
                  <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Export
                  </span>
                </button>
              </div>
            </div>

            <!-- Interactive Tabs -->
            <div class="flex gap-6 border-b border-gray-100">
              {#each ['Overview', 'Revenue', 'Orders', 'Customers'] as tab, i}
                <button class="px-4 py-2 text-sm font-medium text-gray-500 
                             hover:text-[#605bff] transition-colors relative 
                             group {i === 0 ? 'text-[#605bff]' : ''}">
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
          <div class="relative h-[280px] mb-6 group">
            <div class="absolute inset-0 bg-gradient-to-t from-[#605bff]/5 to-transparent 
                        rounded-lg transition-opacity duration-300 opacity-50 
                        group-hover:opacity-100"></div>
            
            <!-- Interactive Chart Lines -->
            <div class="relative h-full flex items-end gap-3">
              {#each Array(12) as _, i}
                <div class="relative flex-1 group/bar cursor-pointer">
                  <div class="absolute bottom-0 w-full h-[160px] bg-[#605bff]/10 rounded-t-lg 
                            transition-all duration-300 group-hover/bar:h-[180px]"></div>
                  <div class="absolute bottom-0 w-full bg-[#605bff] rounded-t-lg 
                            transition-all duration-300 group-hover/bar:opacity-100 opacity-80
                            hover:shadow-lg hover:shadow-[#605bff]/20"
                       style="height: {40 + Math.random() * 120}px"></div>
                  <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#32325d] 
                            text-white px-3 py-1.5 rounded-lg text-xs opacity-0 
                            group-hover/bar:opacity-100 transition-all duration-300
                            group-hover/bar:-translate-y-1 shadow-lg">
                    <div class="font-semibold">${(Math.random() * 10000).toFixed(0)}</div>
                    <div class="text-[10px] opacity-75">+{(Math.random() * 20).toFixed(1)}%</div>
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                               rotate-45 w-2 h-2 bg-[#32325d]"></div>
                  </div>
                </div>
              {/each}
            </div>

            <!-- Interactive Time Labels -->
            <div class="flex justify-between mt-4 text-sm">
              {#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
                <span class="px-2 py-1 rounded-md transition-colors duration-300 
                           hover:bg-[#605bff]/5 hover:text-[#605bff] cursor-pointer">
                  {day}
                </span>
              {/each}
            </div>
          </div>

          <!-- Enhanced Stats Cards -->
          <div class="grid grid-cols-3 gap-6">
            {#each [
              { label: 'Total Revenue', value: '$487,239', trend: '+12.5%', icon: 'chart-bar' },
              { label: 'Avg. Order Value', value: '$149.99', trend: '+8.3%', icon: 'shopping-cart' },
              { label: 'Conversion Rate', value: '3.42%', trend: '+2.1%', icon: 'arrow-trending-up' }
            ] as stat}
              <div class="bg-gray-50 rounded-xl p-4 transition-all duration-300 group
                        hover:bg-white hover:-translate-y-1 hover:shadow-lg cursor-pointer
                        border border-transparent hover:border-[#605bff]/20">
                <div class="flex items-start justify-between mb-2">
                  <p class="text-sm text-gray-500 group-hover:text-[#605bff] 
                           transition-colors">{stat.label}</p>
                  <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center 
                             justify-center group-hover:bg-[#605bff]/20 transition-colors">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" 
                         fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" 
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-semibold text-[#32325d] group-hover:text-[#605bff] 
                             transition-colors">{stat.value}</span>
                  <span class="text-xs font-medium text-green-500 flex items-center gap-1">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

        <!-- Floating Cards with enhanced animations -->
        <div class="absolute -right-8 top-8 transform translate-x-1/2 w-64 animate-float" 
             style="animation-delay: -1s">
          <div class="bg-white rounded-xl p-4 shadow-lg border border-gray-100
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-[#32325d]">Sales Increase</span>
            </div>
            <div class="text-2xl font-bold text-[#32325d] mb-1">+24.5%</div>
            <p class="text-xs text-gray-500">Compared to last month</p>
          </div>
        </div>

        <div class="absolute -left-8 bottom-8 transform -translate-x-1/2 w-64 animate-float" 
             style="animation-delay: -2s">
          <div class="bg-white rounded-xl p-4 shadow-lg border border-gray-100
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span class="text-sm font-medium text-[#32325d]">Revenue Update</span>
            </div>
            <div class="text-2xl font-bold text-[#32325d] mb-1">$12.4M</div>
            <p class="text-xs text-gray-500">Total revenue this quarter</p>
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
</style>