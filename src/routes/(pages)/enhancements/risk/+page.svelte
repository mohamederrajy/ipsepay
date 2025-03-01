<script>
  import { onMount } from 'svelte';
  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<!-- Revenue Protection Section -->
<section class="relative overflow-hidden py-24">
  <!-- Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4ff]"></div>
    
    <!-- Mesh gradient overlay -->
    <div class="absolute inset-0 opacity-40"
         style="background: radial-gradient(circle at top right, #605bff08, transparent 50%),
                          radial-gradient(circle at bottom left, #32325d05, transparent 50%);">
    </div>

    <!-- Modern grid pattern -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: center center;">
    </div>

    <!-- Floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-20 w-96 h-96 
                  bg-gradient-to-br from-white/10 to-[#605bff]/5 
                  backdrop-blur-3xl rounded-full 
                  animate-float-slow">
      </div>
      <div class="absolute bottom-40 left-20 w-80 h-80 
                  bg-gradient-to-tr from-[#605bff]/10 via-[#32325d]/5 to-transparent 
                  blur-3xl rounded-full animate-float-slow opacity-60">
      </div>
    </div>
  </div>

  <div class="container relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div class="space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">REVENUEPROTECT</span>
        </div>
  
        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
          Strike the right balance between
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            risk and revenue
          </span>
        </h2>
  
        <p class="text-xl text-[#32325d]/70">
          Discover a fraud detection and prevention solution powered by network-wide insights and machine learning technology.
        </p>
  
        <div class="pt-4">
          <a href="/contact" 
             class="inline-block px-8 py-4 rounded-xl bg-[#605bff] text-white font-medium
                    hover:bg-[#605bff]/90 transition-colors duration-300">
            Get in touch
          </a>
        </div>
      </div>
  
      <!-- Right Content - Image with longer aspect ratio -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative rounded-2xl overflow-hidden h-[600px] sm:h-[700px]">
          <img src="/images/risk.webp" 
               alt="Revenue Protection" 
               class="w-full h-full rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
               style="object-fit: cover; object-position: center;" />
          
          <div class="absolute inset-0 bg-gradient-to-tr from-[#605bff]/10 via-transparent to-transparent"></div>
        </div>
  
        <!-- Enhanced Decorative Elements -->
        <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="relative overflow-hidden py-24">
  <!-- Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fafbff] to-white"></div>
    
    <!-- Mesh gradient overlay -->
    <div class="absolute inset-0 opacity-30"
         style="background: radial-gradient(circle at 0% 0%, #605bff05, transparent 50%),
                          radial-gradient(circle at 100% 100%, #32325d05, transparent 50%);">
    </div>

    <!-- Subtle grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px);
          background-size: 40px 40px;">
    </div>
  </div>

  <div class="container relative z-10">
    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
      <!-- Save time and effort -->
      <div class="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/10
                  hover:bg-white/80 transition-all duration-300 hover:shadow-lg group">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M15 3h4a2 2 0 0 1 2 2v4M21 15v4a2 2 0 0 1-2 2h-4M9 21H5a2 2 0 0 1-2-2v-4M3 9V5a2 2 0 0 1 2-2h4"/>
            </svg>
          </div>
  
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            Save time and effort
          </h3>
  
          <p class="text-[#32325d]/70">
            Use machine learning to automate part of the risk assessment.
          </p>
        </div>
      </div>
  
      <!-- Increase revenue -->
      <div class="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/10
                  hover:bg-white/80 transition-all duration-300 hover:shadow-lg group">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
  
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            Increase revenue
          </h3>
  
          <p class="text-[#32325d]/70">
            Make informed decisions on payments with network-wide insights.
          </p>
        </div>
      </div>
  
      <!-- Fraud protection -->
      <div class="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/10
                  hover:bg-white/80 transition-all duration-300 hover:shadow-lg group">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative">
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
  
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            Fraud protection
          </h3>
  
          <p class="text-[#32325d]/70">
            Address unique risks and protect your business with customizable risk rules.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Network Graph Analysis Section -->
<section class="relative overflow-hidden py-24">
  <!-- Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4ff]"></div>
    
    <!-- Enhanced mesh gradient -->
    <div class="absolute inset-0"
         style="background: 
           radial-gradient(circle at 20% 0%, rgba(96, 91, 255, 0.08) 0%, transparent 50%),
           radial-gradient(circle at 80% 100%, rgba(50, 50, 93, 0.05) 0%, transparent 50%);">
    </div>

    <!-- Modern grid pattern -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.015) 1px, transparent 1px);
          background-size: 50px 50px;">
    </div>
  </div>

  <div class="container relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content - Enhanced Network Graph Interface -->
      <div class="relative order-2 lg:order-1">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative rounded-2xl overflow-hidden">
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <!-- Network Analysis Interface -->
            <div class="space-y-4">
              <!-- Enhanced Header -->
              <div class="flex items-center justify-between mb-6">
                <div class="space-y-2">
                  <h4 class="text-sm font-medium text-[#32325d]">Network</h4>
                  <div class="flex gap-4">
                    <div class="flex items-center gap-2 text-xs">
                      <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span class="text-green-700">Authorised (15)</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                      <div class="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                      <span class="text-red-700">Refused (19)</span>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="px-4 py-1.5 text-xs font-medium rounded-lg bg-[#605bff] text-white
                               hover:bg-[#605bff]/90 transition-colors">
                    Oilsplash
                  </button>
                  <button class="px-4 py-1.5 text-xs font-medium rounded-lg bg-white text-[#605bff] border border-[#605bff]/20
                               hover:bg-[#605bff]/5 transition-colors">
                    Force
                  </button>
                </div>
              </div>

              <!-- Enhanced Network Graph -->
              <div class="relative h-[500px] bg-gradient-to-br from-[#f8f9fc] to-white rounded-xl p-6 overflow-hidden">
                <!-- Central Node -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div class="w-12 h-12 rounded-full bg-[#605bff] shadow-lg flex items-center justify-center
                             animate-pulse">
                    <span class="text-white text-xs font-medium">Core</span>
                  </div>
                  
                  <!-- Orbital Rings -->
                  <div class="absolute inset-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2
                              border border-[#605bff]/10 rounded-full animate-spin"
                       style="animation-duration: 60s;">
                  </div>
                  <div class="absolute inset-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2
                              border border-[#605bff]/10 rounded-full animate-spin"
                       style="animation-duration: 45s;">
                  </div>
                  <div class="absolute inset-0 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2
                              border border-[#605bff]/10 rounded-full animate-spin"
                       style="animation-duration: 30s;">
                  </div>
                </div>

                <!-- Dynamic Nodes -->
                {#each Array(30) as _, i}
                  <div class="absolute animate-pulse transition-all duration-1000 hover:scale-150"
                       style="left: {Math.random() * 100}%; top: {Math.random() * 100}%;
                              animation-delay: {i * 0.1}s;">
                    <div class="w-3 h-3 rounded-full shadow-md
                               {i % 3 === 0 ? 'bg-green-400' : i % 3 === 1 ? 'bg-red-400' : 'bg-blue-400'}">
                    </div>
                    <div class="absolute w-4 h-4 rounded-full animate-ping
                               {i % 3 === 0 ? 'bg-green-400/30' : i % 3 === 1 ? 'bg-red-400/30' : 'bg-blue-400/30'}">
                    </div>
                  </div>
                {/each}

                <!-- Connection Lines -->
                <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
                  {#each Array(20) as _, i}
                    <line x1="{Math.random() * 100}%" 
                          y1="{Math.random() * 100}%" 
                          x2="{Math.random() * 100}%" 
                          y2="{Math.random() * 100}%"
                          stroke="#605bff"
                          stroke-width="0.5"
                          stroke-opacity="0.2"
                          class="animate-dash">
                    </line>
                  {/each}
                </svg>

                <!-- Data Points -->
                <div class="absolute top-4 left-4 space-y-2">
                  {#each ['1876567892', '3276663452', '1656587893'] as id, i}
                    <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5
                               hover:bg-white transition-colors">
                      <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
                        <span class="text-[10px] text-white font-medium">{i + 1}</span>
                      </div>
                      <span class="text-xs text-[#32325d]">{id}</span>
                    </div>
                  {/each}
                </div>

                <!-- Attributes -->
                <div class="absolute top-4 right-4 space-y-2">
                  {#each ['Email', 'Card', 'Address', 'Name'] as attr, i}
                    <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5
                               hover:bg-white transition-colors">
                      <span class="text-xs text-[#32325d]">{attr}</span>
                      <div class="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                        <span class="text-[10px] text-white font-medium">{attr[0]}</span>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Decorative Elements -->
        <div class="absolute -top-8 -left-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute -bottom-12 -right-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      <!-- Right Content -->
      <div class="space-y-8 order-1 lg:order-2">
        <!-- Badge -->
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">NETWORK ANALYSIS</span>
        </div>

        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
          Visualize connections and
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            detect patterns
          </span>
        </h2>

        <p class="text-xl text-[#32325d]/70">
          Analyze transaction networks in real-time to identify suspicious patterns and connections between transactions, helping you make informed decisions about potential fraud.
        </p>

        <div class="pt-4">
          <a href="/contact" 
             class="inline-block px-8 py-4 rounded-xl bg-[#605bff] text-white font-medium
                    hover:bg-[#605bff]/90 transition-colors duration-300">
            Explore features
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  
  .animate-dash {
    stroke-dasharray: 10;
    stroke-dashoffset: 20;
    animation: dash 20s linear infinite;
  }
</style>
<!-- Risk Profile Section -->
<section class="relative overflow-hidden py-24">
  <!-- Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fafbff] to-white"></div>
    
    <!-- Modern mesh gradient -->
    <div class="absolute inset-0 opacity-30"
         style="background: radial-gradient(circle at 100% 0%, #605bff05, transparent 50%),
                          radial-gradient(circle at 0% 100%, #32325d05, transparent 50%);">
    </div>

    <!-- Subtle modern grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px);
          background-size: 45px 45px;">
    </div>
  </div>

  <div class="container relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div class="space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">RISK MANAGEMENT</span>
        </div>

        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
          Smart risk profiles with
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            real-time adaptation
          </span>
        </h2>

        <p class="text-xl text-[#32325d]/70">
          Let the system dynamically adapt settings to optimize authorization rates while maintaining security. Customize risk profiles for different markets and business needs.
        </p>

        <div class="pt-4">
          <a href="/contact" 
             class="inline-block px-8 py-4 rounded-xl bg-[#605bff] text-white font-medium
                    hover:bg-[#605bff]/90 transition-colors duration-300">
            Explore features
          </a>
        </div>
      </div>

      <!-- Right Content - Dynamic Risk Profile Interface -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        
        <div class="relative rounded-2xl overflow-hidden">
          <div class="bg-white shadow-lg rounded-2xl">
            <!-- Header with Live Indicator -->
            <div class="p-6 border-b border-gray-100">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <h3 class="text-xl font-semibold text-[#32325d]">Risk Profile (Swiss Market)</h3>
                  <span class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    Premium
                  </span>
                </div>
              </div>

              <!-- Interactive Tabs -->
              <div class="flex gap-8 mt-6">
                {#each ['Profile overview', 'Manual risk', 'Automated risk'] as tab, i}
                  <button class="relative text-sm pb-3 transition-colors duration-300
                               {i === 2 ? 'text-[#32325d] font-medium' : 'text-gray-600 hover:text-[#32325d]'}">
                    {tab}
                    {#if i === 2}
                      <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#605bff] rounded-full"></div>
                    {/if}
                  </button>
                {/each}
              </div>
            </div>

            <!-- Dynamic Content -->
            <div class="p-6 space-y-6">
              <!-- Risk Level Selector -->
              <div class="rounded-xl border-2 border-[#605bff] bg-white p-4 transition-all duration-300 hover:shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="w-5 h-5 rounded-full border-2 border-[#605bff] flex items-center justify-center">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#605bff] animate-pulse"></div>
                  </div>
                  <div>
                    <h4 class="font-medium text-[#32325d] mb-1">Default (recommended)</h4>
                    <p class="text-sm text-gray-600">
                      Dynamic risk adaptation based on real-time market data
                    </p>
                  </div>
                </div>
              </div>

              <!-- Live Stats -->
              <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6">
                <h4 class="text-sm font-medium text-[#32325d] mb-4">Live Performance Metrics:</h4>
                
                <div class="space-y-6">
                  <!-- Stats -->
                  <div class="space-y-2">
                    <div class="flex justify-between items-baseline">
                      <span class="text-sm text-gray-600">Current Risk Level</span>
                      <div class="flex items-baseline gap-2">
                        <span class="text-3xl font-semibold text-[#32325d]">1.35%</span>
                        <span class="text-sm font-medium text-green-500">↓ 0.75%</span>
                      </div>
                    </div>
                    <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div class="h-full bg-[#605bff] rounded-full w-[35%] animate-pulse"></div>
                    </div>
                  </div>

                  <!-- Real-time Updates -->
                  <div class="space-y-3">
                    {#each ['Transaction approved', 'Risk check passed', 'Profile updated'] as event, i}
                      <div class="flex items-center gap-3 text-sm text-gray-600 transition-all duration-500 ease-out"
                           class:opacity-0={!visible}
                           class:translate-y-2={!visible}
                           class:opacity-100={visible}
                           class:translate-y-0={visible}
                           style="transition-delay: {i * 200}ms">
                        <span class="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                        {event}
                        <span class="text-xs text-gray-400">just now</span>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-40 h-40 bg-[#605bff]/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  </div>
</section>
<!-- Enhancement Options Section -->
<section class="relative overflow-hidden py-24">
  <!-- Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4ff]"></div>
    
    <!-- Mesh gradient overlay -->
    <div class="absolute inset-0 opacity-40"
         style="background: radial-gradient(circle at top left, #605bff08, transparent 50%),
                          radial-gradient(circle at bottom right, #32325d05, transparent 50%);">
    </div>

    <!-- Refined grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;">
    </div>
  </div>

  <div class="container relative z-10">
    <!-- Section Header -->
    <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] text-center mb-16">
      Explore ways to 
      <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
        enhance your strategy
      </span>
    </h2>

    <!-- Enhancement Cards Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Authentication -->
      <div class="group relative p-6 rounded-2xl bg-white hover:bg-[#605bff]/[0.02] border border-gray-100 
                  hover:border-[#605bff]/20 transition-all duration-300 hover:shadow-lg">
        <div class="mb-6">
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">Authentication</h3>
        <p class="text-[#32325d]/70 mb-6">
          Improve the payment experience with smart authentication.
        </p>

        <a href="/authentication" class="inline-flex items-center text-[#605bff] font-medium hover:opacity-80 transition-opacity">
          Learn more
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- RevenueAccelerate -->
      <div class="group relative p-6 rounded-2xl bg-white hover:bg-[#605bff]/[0.02] border border-gray-100 
                  hover:border-[#605bff]/20 transition-all duration-300 hover:shadow-lg">
        <div class="mb-6">
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none">
              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">RevenueAccelerate</h3>
        <p class="text-[#32325d]/70 mb-6">
          Unlock more revenue using data and machine learning.
        </p>

        <a href="/revenue" class="inline-flex items-center text-[#605bff] font-medium hover:opacity-80 transition-opacity">
          Learn more
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Insights -->
      <div class="group relative p-6 rounded-2xl bg-white hover:bg-[#605bff]/[0.02] border border-gray-100 
                  hover:border-[#605bff]/20 transition-all duration-300 hover:shadow-lg">
        <div class="mb-6">
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">Insights</h3>
        <p class="text-[#32325d]/70 mb-6">
          Understand customer behavior to drive growth.
        </p>

        <a href="/insights" class="inline-flex items-center text-[#605bff] font-medium hover:opacity-80 transition-opacity">
          Learn more
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Adyen Impact -->
      <div class="group relative p-6 rounded-2xl bg-white hover:bg-[#605bff]/[0.02] border border-gray-100 
                  hover:border-[#605bff]/20 transition-all duration-300 hover:shadow-lg">
        <div class="mb-6">
          <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">Adyen Impact</h3>
        <p class="text-[#32325d]/70 mb-6">
          Let customers support good causes.
        </p>

        <a href="/impact" class="inline-flex items-center text-[#605bff] font-medium hover:opacity-80 transition-opacity">
          Learn more
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>