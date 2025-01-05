<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const brands = ['usdt', 'A-pay', 'G-pay', 'vss', 'mscrad', 'maestro'];
</script>

<section class="py-16 md:py-24 relative overflow-hidden pb-20">
  <!-- Modern Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50"></div>
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#605bff]/5 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#605bff]/5 to-transparent rounded-full blur-3xl"></div>
    
    <!-- Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.02]"
         style="background-image: linear-gradient(to right, rgb(148 163 184 / 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(148 163 184 / 0.3) 1px, transparent 1px);
                background-size: 64px 64px;">
    </div>
  </div>

  <div class="container mx-auto px-4 md:px-6 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Enhanced Left Content -->
      <div class="max-w-xl">
        <!-- Modern Badge -->
        <div class="inline-flex items-center gap-2 rounded-2xl bg-white/80 p-1.5 pr-4 backdrop-blur-sm border border-white/60 shadow-sm mb-8 group hover:shadow-lg transition-all duration-300">
          <span class="rounded-xl bg-[#605bff] px-3 py-1 text-sm font-medium text-white relative overflow-hidden">
            <span class="relative z-10">New</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </span>
          <span class="text-sm font-medium text-[#32325d] group-hover:text-[#605bff] transition-colors">Online payments</span>
        </div>

        <!-- Enhanced Heading -->
        <h1 class="text-4xl md:text-5xl font-bold text-[#32325d] mb-6 leading-tight">
          Effortless online payments
          <span class="block mt-2 text-3xl md:text-4xl text-gray-600/90">
            for you and your customer
          </span>
        </h1>

        <p class="text-lg text-gray-600/90 mb-8 leading-relaxed">
          Accept, process, and settle payments with the online payment solution built for scale. Experience elite payments performance around the world.
        </p>

        <!-- Modern CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <a href="/contact" 
             class="group relative inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <span class="relative z-10">Get in touch</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </a>
          <a href="/pricing" 
             class="group inline-flex items-center px-6 py-3 text-[#605bff] font-medium hover:bg-[#605bff]/5 rounded-xl transition-all duration-300">
            See pricing
            <svg class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Enhanced Trusted By Section -->
        <div class="mt-16">
          <p class="text-sm text-gray-500 mb-6 font-medium">Trusted by leading companies</p>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {#each brands as brand}
              <div class="group relative">
                <img 
                  src="/images/brands/{brand}.png" 
                  alt={brand} 
                  class="h-5 grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Side - Ultra Modern Payment Demo -->
      <div class="relative h-[700px]">
        <!-- Modern Layered Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 rounded-3xl border border-gray-100/50 shadow-2xl overflow-hidden">
          <!-- Main Image with Modern Effects -->
          <div class="relative h-full w-full perspective-1000">
            <div class="absolute inset-0 rounded-3xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="/images/photos/pay2.jpg" 
                alt="Payment Dashboard" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <!-- Gradient Overlays -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-[#605bff]/10 to-transparent"></div>
              
              <!-- Modern Grid Overlay -->
              <div class="absolute inset-0 opacity-[0.03]"
                   style="background-image: 
                     linear-gradient(to right, rgb(148 163 184 / 0.3) 1px, transparent 1px),
                     linear-gradient(to bottom, rgb(148 163 184 / 0.3) 1px, transparent 1px);
                     background-size: 40px 40px;">
              </div>

              <!-- Animated Scan Lines -->
              {#each Array(6) as _, i}
                <div class="absolute h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-scan-line"
                     style="left: {10 + i * 15}%; animation-delay: -{i * 1.5}s">
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Updated Floating Analytics Card -->
        <div class="absolute top-10 right-8 transform hover:scale-105 transition-all duration-500">
          <div class="w-[340px] bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            <!-- Card Header -->
            <div class="p-6">
              <div class="flex justify-between items-start">
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span class="text-sm text-gray-400 font-medium">Live Processing</span>
                  </div>
                  <div class="text-3xl font-bold bg-gradient-to-r from-[#605bff] to-purple-600 bg-clip-text text-transparent">
                    $48,284.42
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="flex items-center text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                      <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                      </svg>
                      +2.4%
                    </span>
                    <span class="text-gray-400">vs last month</span>
                  </div>
                </div>
                <div class="flex flex-col items-end gap-2">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#605bff] to-purple-600 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <div class="flex -space-x-2">
                    <div class="w-6 h-6 rounded-full border-2 border-white bg-[#605bff]/20 flex items-center justify-center">
                      <span class="text-[10px] font-medium text-[#605bff]">US</span>
                    </div>
                    <div class="w-6 h-6 rounded-full border-2 border-white bg-[#605bff]/20 flex items-center justify-center">
                      <span class="text-[10px] font-medium text-[#605bff]">EU</span>
                    </div>
                    <div class="w-6 h-6 rounded-full border-2 border-white bg-[#605bff]/20 flex items-center justify-center">
                      <span class="text-[10px] font-medium text-[#605bff]">+3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modern Chart Section -->
            <div class="px-6 pb-6">
              <div class="h-[120px] flex items-end gap-1.5 relative">
                <!-- Chart Background Grid -->
                <div class="absolute inset-0 flex flex-col justify-between">
                  {#each Array(4) as _}
                    <div class="w-full h-px bg-gray-100"></div>
                  {/each}
                </div>
                
                <!-- Bars -->
                {#each Array(12) as _, i}
                  <div class="relative group flex-1">
                    <div class="w-full bg-gradient-to-t from-[#605bff]/20 via-[#605bff]/40 to-[#605bff] rounded-t-lg transition-all duration-300 group-hover:to-purple-600"
                         style="height: {30 + Math.random() * 70}%">
                      <!-- Tooltip -->
                      <div class="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="bg-gray-900 text-white text-xs py-1.5 px-2.5 rounded-lg whitespace-nowrap">
                          ${(Math.random() * 5000).toFixed(2)}
                          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                    <!-- Time Label -->
                    <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">
                      {(i + 1).toString().padStart(2, '0')}h
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="px-6 pb-6 grid grid-cols-3 gap-4">
              {#each [
                { label: 'Success Rate', value: '99.8%', color: 'text-green-500' },
                { label: 'Avg. Time', value: '0.2s', color: 'text-blue-500' },
                { label: 'Total Trans.', value: '2.4k', color: 'text-purple-500' }
              ] as stat}
                <div class="bg-gray-50/50 rounded-xl p-3">
                  <div class="text-sm text-gray-400">{stat.label}</div>
                  <div class="text-sm font-semibold {stat.color}">{stat.value}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Modern Payment Card -->
        <div class="absolute bottom-10 -left-6 transform hover:scale-105 transition-all duration-500">
          <div class="w-80 h-48 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
            <div class="h-full flex flex-col justify-between">
              <div class="flex justify-between">
                <div class="space-y-1">
                  <div class="text-sm text-gray-500">Virtual Card</div>
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                    </div>
                    <span class="font-medium text-gray-700">IPSEPAY</span>
                  </div>
                </div>
                <img src="/images/brands/MasterCard.png" alt="MasterCard" class="h-8"/>
              </div>

              <div class="flex space-x-4">
                {#each Array(4) as _}
                  <div class="w-10 h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
                {/each}
              </div>

              <div class="flex justify-between items-end">
                <div class="space-y-1">
                  <div class="text-xs text-gray-400">Card Holder</div>
                  <div class="text-sm font-medium text-gray-700">JOHN DOE</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span class="text-xs text-gray-500">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Indicators -->
        {#each Array(8) as _, i}
          <div class="absolute animate-float-particle"
               style="top: {Math.random() * 100}%; left: {Math.random() * 100}%; animation-delay: -{Math.random() * 5}s">
            <div class="w-2 h-2 bg-gradient-to-br from-[#605bff]/20 to-purple-400/20 rounded-full"></div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>






<!-- Floating Success Badges -->
{#each Array(3) as _, i}
  <div class="absolute animate-float-badge"
       style="top: {20 + Math.random() * 60}%; left: {20 + Math.random() * 60}%; animation-delay: -{i * 2}s">
    <div class="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-green-400"></div>
      <span class="text-xs font-medium text-gray-600">Payment Successful</span>
    </div>
  </div>
{/each}

<style>
  input[type="checkbox"] {
    accent-color: #605bff;
  }
  
  input:disabled {
    background-color: white;
    color: #0f172a;
  }

  .container {
    max-width: 1280px;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  @keyframes slow-drift {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, 20px) rotate(1deg); }
  }

  @keyframes slow-drift-reverse {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, -20px) rotate(-1deg); }
  }

  @keyframes pulse-fade {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.5); opacity: 0.7; }
  }

  @keyframes mesh-flow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    50% { transform: translate(-30px, 30px) rotate(3deg); opacity: 0.7; }
  }

  @keyframes mesh-flow-reverse {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    50% { transform: translate(30px, -30px) rotate(-3deg); opacity: 0.7; }
  }

  @keyframes scan-line {
    0% { transform: scaleY(0); opacity: 0; }
    50% { transform: scaleY(1); opacity: 1; }
    100% { transform: scaleY(0); opacity: 0; }
  }

  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
    50% { transform: translate(20px, -20px) scale(1.2); opacity: 0.8; }
  }

  .animate-mesh-flow {
    animation: mesh-flow 15s ease-in-out infinite;
  }

  .animate-mesh-flow-reverse {
    animation: mesh-flow-reverse 15s ease-in-out infinite;
  }

  .animate-scan-line {
    animation: scan-line 4s ease-in-out infinite;
  }

  .animate-float-particle {
    animation: float-particle 8s ease-in-out infinite;
  }

  @keyframes float-badge {
    0%, 100% { 
      transform: translate(0, 0) scale(1); 
      opacity: 0; 
    }
    50% { 
      transform: translate(-20px, -10px) scale(1.05); 
      opacity: 1; 
    }
  }

  .animate-float-badge {
    animation: float-badge 6s ease-in-out infinite;
  }
</style>