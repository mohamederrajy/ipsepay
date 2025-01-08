<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let statsVisible = false;
  let statsRef: HTMLElement;
  let currentValues = [0, 0, 0, 0];
  
  const stats = [
    {
      start: 0,
      end: 100,
      suffix: "+",
      text: "Countries Served",
      subtext: "Global Presence"
    },
    {
      start: 0,
      end: 99.9,
      suffix: "%",
      text: "Uptime",
      subtext: "System Reliability"
    },
    {
      start: 0,
      end: 10,
      suffix: "B+",
      text: "Transactions",
      subtext: "Processed Annually"
    },
    {
      start: 0,
      end: 250,
      suffix: "K+",
      text: "Merchants",
      subtext: "Trust Our Platform"
    }
  ];

  function formatNumber(num: number): string {
    if (Number.isInteger(num)) {
      return num.toString();
    }
    return num.toFixed(1);
  }

  function startCounters() {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = (stat.end - stat.start) / steps;
      
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          currentValues[index] = stat.start + (stepValue * i);
          currentValues = [...currentValues]; // Trigger reactivity
        }, (i / steps) * duration);
      }
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          statsVisible = true;
          startCounters();
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef) {
      observer.observe(statsRef);
    }

    return () => {
      if (statsRef) {
        observer.unobserve(statsRef);
      }
    };
  });
</script>

<main class="pt-20">
  <!-- Hero Section with Enhanced Background -->
  <div class="relative overflow-hidden bg-gradient-to-b from-[#605bff]/5 via-white to-white">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
      <!-- Gradient Circles -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl"></div>
    </div>

    <!-- Title Content -->
    <div class="relative container mx-auto px-4 pt-20 pb-32 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Decorative Element -->
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Our Story</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Revolutionizing Digital Payments
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Building the future of financial technology with innovative solutions and unwavering security.
        </p>
      </div>
    </div>

    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-24 fill-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </div>
  </div>

  <!-- Mission & Vision Section with 3D Elements -->
  <section class="relative py-24 overflow-hidden">
    <!-- Enhanced Background Elements -->
    <div class="absolute inset-0">
      <!-- Base gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-[#605bff]/5 to-purple-50"></div>
      
      <!-- Animated mesh gradient -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(96,91,255,0.1),transparent_50%)]"></div>
        <div class="absolute -inset-[100%] bg-[radial-gradient(circle_at_80%_20%,rgba(149,144,255,0.1),transparent_50%)]"></div>
        <div class="absolute -inset-[100%] bg-[radial-gradient(circle_at_20%_80%,rgba(96,91,255,0.05),transparent_50%)]"></div>
      </div>

      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.15]"></div>
      
      <!-- Dynamic floating elements -->
      {#each Array(8) as _, i}
        <div 
          class="absolute rounded-full mix-blend-multiply blur-xl opacity-20 animate-float"
          style="
            left: {Math.random() * 100}%;
            top: {Math.random() * 100}%;
            width: {200 + Math.random() * 200}px;
            height: {200 + Math.random() * 200}px;
            background: linear-gradient(
              ${Math.random() * 360}deg,
              rgba(96, 91, 255, 0.2),
              rgba(149, 144, 255, 0.1)
            );
            animation-delay: -{i * 1.5}s;
            animation-duration: ${10 + i * 2}s;
          "
        ></div>
      {/each}

      <!-- Geometric shapes -->
      {#each Array(6) as _, i}
        <div 
          class="absolute opacity-20"
          style="
            left: {Math.random() * 100}%;
            top: {Math.random() * 100}%;
            transform: rotate({Math.random() * 360}deg);
          "
        >
          <div class="w-24 h-24 border border-[#605bff]/20 rounded-xl"></div>
        </div>
      {/each}

      <!-- Light beams -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -inset-[10%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(96,91,255,0.05)_0%,transparent_60%)] animate-spin-slow"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Side: Interactive Visualization -->
        <div class="relative">
          <div class="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#605bff]/5 to-transparent p-8">
            <!-- Dynamic Background Effects -->
            <div class="absolute inset-0">
              <!-- Gradient Mesh -->
              <div class="absolute inset-0 opacity-30">
                <div class="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(96,91,255,0.1),transparent_50%)] animate-pulse-slow"></div>
                <div class="absolute -inset-[100%] bg-[radial-gradient(circle_at_80%_20%,rgba(149,144,255,0.1),transparent_50%)] animate-pulse-slow" style="animation-delay: -2s;"></div>
                <div class="absolute -inset-[100%] bg-[radial-gradient(circle_at_20%_80%,rgba(96,91,255,0.05),transparent_50%)] animate-pulse-slow" style="animation-delay: -4s;"></div>
              </div>
              
              <!-- Animated Grid with Glow -->
              <div class="absolute inset-0">
                <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 via-transparent to-purple-500/5"></div>
              </div>

              <!-- Moving Light Beams -->
              <div class="absolute inset-0 overflow-hidden">
                {#each Array(3) as _, i}
                  <div 
                    class="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-[#605bff]/10 to-transparent transform -rotate-45"
                    style="
                      top: {Math.random() * 100}%;
                      left: -50%;
                      animation: moveLight {15 + i * 5}s linear infinite;
                      animation-delay: -{i * 5}s;
                    "
                  ></div>
                {/each}
              </div>
            </div>

            <!-- Core Element with Enhanced Effects -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <!-- Outer Pulse Rings -->
              {#each Array(4) as _, i}
                <div 
                  class="absolute rounded-full border border-[#605bff]/20"
                  style="
                    width: {240 + i * 40}px;
                    height: {240 + i * 40}px;
                    animation: pulse-ring {3 + i}s ease-out infinite;
                    animation-delay: -{i * 0.5}s;
                  "
                ></div>
              {/each}

              <!-- Core Hub -->
              <div class="relative w-48 h-48">
                <!-- Rotating Gradient Border -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[#605bff] via-purple-500 to-[#605bff] animate-spin-slow"></div>
                
                <!-- Glass Effect Inner -->
                <div class="absolute inset-[2px] rounded-full backdrop-blur-sm bg-white/90 flex items-center justify-center group">
                  <!-- Inner Glow -->
                  <div class="absolute inset-2 rounded-full bg-gradient-to-br from-[#605bff]/20 to-purple-500/20 blur-sm group-hover:opacity-75 transition-opacity duration-500"></div>
                  
                  <!-- Content -->
                  <div class="relative z-10 text-center">
                    <div class="relative">
                      <svg class="w-12 h-12 mx-auto text-[#605bff] transform group-hover:scale-110 transition-transform duration-300" 
                           fill="none" 
                           stroke="currentColor" 
                           viewBox="0 0 24 24">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M13 10V3L4 14h7v7l9-11h-7z">
                        </path>
                      </svg>
                      <!-- Glow Effect -->
                      <div class="absolute inset-0 bg-[#605bff]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span class="block mt-2 text-sm font-medium text-[#605bff] group-hover:text-[#32325d] transition-colors duration-300">
                      Our Vision
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Enhanced Orbiting Features -->
            {#each [
              { 
                title: 'Innovation', 
                icon: 'lightbulb', 
                color: 'from-blue-500 to-purple-500', 
                description: 'Leading-edge solutions',
                stats: '250+ Features'
              },
              { 
                title: 'Security', 
                icon: 'shield', 
                color: 'from-green-500 to-emerald-600', 
                description: 'Bank-grade protection',
                stats: '99.99% Uptime'
              },
              { 
                title: 'Scale', 
                icon: 'chart', 
                color: 'from-purple-500 to-pink-500', 
                description: 'Global reach',
                stats: '100+ Countries'
              },
              { 
                title: 'Speed', 
                icon: 'lightning', 
                color: 'from-orange-500 to-red-500', 
                description: 'Instant processing',
                stats: '<10ms Latency'
              }
            ] as feature, i}
              <div 
                class="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style="transform: rotate({i * 90}deg)"
              >
                <div class="absolute top-0 left-1/2 -translate-x-1/2 origin-bottom"
                     style="animation: orbit {20 + i * 2}s linear infinite;">
                  <div class="relative -translate-y-[180px] group">
                    <!-- Enhanced Feature Card -->
                    <div class="w-36 h-36 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg
                                transform transition-all duration-500 
                                group-hover:scale-110 group-hover:shadow-xl
                                border border-gray-100 group-hover:border-[#605bff]/20">
                      <!-- Gradient Background -->
                      <div class="absolute inset-0 rounded-2xl bg-gradient-to-br {feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      
                      <!-- Content -->
                      <div class="relative h-full flex flex-col items-center justify-center gap-2 p-4">
                        <!-- Icon with Enhanced Effects -->
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br {feature.color} 
                                    flex items-center justify-center transform group-hover:-rotate-12 transition-all duration-300
                                    shadow-lg group-hover:shadow-xl">
                          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {#if feature.icon === 'lightbulb'}
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            {:else if feature.icon === 'shield'}
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            {:else if feature.icon === 'chart'}
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            {:else}
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            {/if}
                          </svg>
                        </div>
                        <!-- Title with Gradient -->
                        <span class="text-sm font-medium bg-gradient-to-r from-[#32325d] to-[#605bff] bg-clip-text text-transparent group-hover:to-purple-600 transition-all duration-300">
                          {feature.title}
                        </span>
                        <!-- Description -->
                        <span class="text-xs text-gray-500 text-center">
                          {feature.description}
                        </span>
                        <!-- Stats -->
                        <span class="text-xs font-medium text-[#605bff]/70">
                          {feature.stats}
                        </span>
                      </div>
                    </div>

                    <!-- Enhanced Connection Line -->
                    <div class="absolute top-full left-1/2 -translate-x-1/2 w-px h-[140px]">
                      <div class="h-full bg-gradient-to-b from-[#605bff]/20 to-transparent"></div>
                      <!-- Multiple Traveling Dots -->
                      {#each Array(2) as _, j}
                        <div 
                          class="absolute w-2 h-2 bg-[#605bff] rounded-full -translate-x-1/2"
                          style="
                            animation: travel-dot 4s ease-in-out infinite;
                            animation-delay: -{j * 2}s;
                          "
                        >
                          <div class="absolute inset-0 rounded-full bg-[#605bff]/30 animate-ping"></div>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
            {/each}

            <!-- Enhanced Floating Particles -->
            {#each Array(20) as _, i}
              <div
                class="absolute rounded-full mix-blend-screen"
                style="
                  left: {Math.random() * 100}%;
                  top: {Math.random() * 100}%;
                  width: {2 + Math.random() * 4}px;
                  height: {2 + Math.random() * 4}px;
                  --tx: {Math.random() * 100 - 50}px;
                  --ty: {Math.random() * 100 - 50}px;
                  background: linear-gradient(to right, #605bff, purple);
                  animation: particle {3 + Math.random() * 4}s linear infinite;
                  animation-delay: -{Math.random() * 5}s;
                  opacity: {0.3 + Math.random() * 0.7};
                "
              >
                <div class="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Right Side: Content -->
        <div class="space-y-8">
          <div class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#605bff]/10">
            <span class="text-sm font-medium text-[#605bff]">Our Mission</span>
            <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
          </div>
          
          <h2 class="text-4xl font-bold text-[#32325d] leading-tight">
            Empowering Global Commerce Through
            <span class="bg-gradient-to-r from-[#605bff] to-purple-500 text-transparent bg-clip-text">
              Innovation
            </span>
          </h2>

          <p class="text-gray-600 text-lg leading-relaxed">
            We're revolutionizing digital payments by creating seamless, secure, and 
            accessible solutions that empower businesses worldwide to thrive in the 
            digital economy.
          </p>
          
          <!-- Feature Cards -->
          <div class="grid gap-4">
            {#each [
              {
                title: 'Security First',
                description: 'Bank-grade encryption and advanced fraud prevention',
                icon: 'shield'
              },
              {
                title: 'Global Scale',
                description: 'Seamless payments across 100+ countries',
                icon: 'globe'
              },
              {
                title: 'Innovation Driven',
                description: 'Cutting-edge technology and continuous improvement',
                icon: 'lightbulb'
              }
            ] as feature}
              <div class="group bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center 
                             group-hover:bg-[#605bff] transition-colors duration-300">
                    <svg class="w-6 h-6 text-[#605bff] group-hover:text-white transition-colors duration-300" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {#if feature.icon === 'shield'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      {:else if feature.icon === 'globe'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      {/if}
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-[#32325d] group-hover:text-[#605bff] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p class="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Animated Stats Section -->
  <section 
    bind:this={statsRef}
    class="py-24 relative overflow-hidden"
  >
    <!-- Dynamic Background -->
    <div class="absolute inset-0">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 via-white to-gray-50"></div>
      
      <!-- Animated Particles -->
      {#each Array(20) as _, i}
        <div 
          class="absolute rounded-full animate-float"
          style="
            left: {Math.random() * 100}%;
            top: {Math.random() * 100}%;
            width: {4 + Math.random() * 8}px;
            height: {4 + Math.random() * 8}px;
            background: linear-gradient(135deg, #605bff {Math.random() * 100}%, #8f8aff);
            animation-delay: -{Math.random() * 5}s;
            animation-duration: {5 + Math.random() * 5}s;
          "
        ></div>
      {/each}
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Our Impact</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
          Numbers That Define Us
        </h2>
      </div>

      <!-- Stats Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each stats as stat, i}
          <div class="relative group">
            <!-- Card Background -->
            <div class="absolute inset-0 bg-white rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
            
            <!-- Content -->
            <div class="relative p-8 text-center space-y-4">
              <!-- Number Counter -->
              <div class="relative h-16">
                <div class="text-5xl font-bold bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
                  {formatNumber(currentValues[i])}{stat.suffix}
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-semibold text-[#32325d] group-hover:text-[#605bff] transition-colors duration-300">
                {stat.text}
              </h3>

              <!-- Subtitle -->
              <p class="text-gray-600">
                {stat.subtext}
              </p>

              <!-- Decorative Line -->
              <div class="w-12 h-1 mx-auto bg-gradient-to-r from-[#605bff] to-purple-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Bottom Wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-24 fill-white transform rotate-180" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
    </div>
  </section>

  <!-- Our Journey Section -->
  <section class="py-24 relative overflow-hidden">
    <!-- Dynamic Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 via-white to-gray-50">
      <!-- Animated Grid Pattern -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
      
      <!-- Floating Elements -->
      {#each Array(6) as _, i}
        <div class="absolute w-24 h-24 rounded-full bg-gradient-to-r from-[#605bff]/10 to-purple-500/10"
             style="left: {Math.random() * 100}%; top: {Math.random() * 100}%;
                    animation: float {5 + i}s ease-in-out infinite;
                    animation-delay: -{i}s">
        </div>
      {/each}
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Our Story</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
          Our Journey of Innovation
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          From our founding to today, we've been revolutionizing the payment industry with cutting-edge solutions.
        </p>
      </div>

      <!-- Interactive Timeline -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#605bff] to-purple-500"></div>

        <!-- Timeline Events -->
        {#each [
          {
            year: "2018",
            title: "Company Founded",
            description: "Started with a vision to revolutionize payments",
            icon: "rocket",
            achievement: "First 100 merchants onboarded"
          },
          {
            year: "2019",
            title: "Global Expansion",
            description: "Expanded operations to 50+ countries",
            icon: "globe",
            achievement: "Processed $1B in transactions"
          },
          {
            year: "2020",
            title: "Innovation Award",
            description: "Recognized for payment technology excellence",
            icon: "award",
            achievement: "Industry-leading security standards"
          },
          {
            year: "2021",
            title: "Enterprise Solutions",
            description: "Launched advanced enterprise payment suite",
            icon: "building",
            achievement: "500+ enterprise clients"
          },
          {
            year: "2022",
            title: "AI Integration",
            description: "Implemented AI-powered fraud prevention",
            icon: "chip",
            achievement: "99.99% fraud prevention rate"
          },
          {
            year: "2023",
            title: "Global Recognition",
            description: "Named leading payment provider in multiple regions",
            icon: "star",
            achievement: "Present in 100+ countries"
          }
        ] as milestone, i}
          <div class="relative mb-16 group">
            <div class="flex items-center gap-8 {i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
              <!-- Year Bubble -->
              <div class="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0
                          group-hover:scale-110 transition-transform duration-300
                          relative z-10">
                <div class="text-center">
                  <span class="block text-3xl font-bold text-[#605bff]">{milestone.year}</span>
                  <div class="w-8 h-1 bg-gradient-to-r from-[#605bff] to-purple-500 mx-auto mt-2"></div>
                </div>
              </div>

              <!-- Content Card -->
              <div class="flex-1 bg-white rounded-2xl p-8 shadow-lg
                          group-hover:shadow-xl transition-all duration-300
                          {i % 2 === 0 ? 'text-left' : 'text-right'}">
                <div class="flex items-center gap-4 mb-4 {i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
                  <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {#if milestone.icon === 'rocket'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      {:else if milestone.icon === 'globe'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      {:else if milestone.icon === 'award'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                      {:else if milestone.icon === 'building'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      {:else if milestone.icon === 'chip'}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                      {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                      {/if}
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-[#32325d]">{milestone.title}</h3>
                </div>
                <p class="text-gray-600 mb-4">{milestone.description}</p>
                <div class="inline-flex items-center gap-2 text-sm font-medium text-[#605bff]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {milestone.achievement}
                </div>
              </div>
            </div>

            <!-- Connecting Line Animation -->
            <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4">
              <div class="w-full h-full bg-[#605bff] rounded-full animate-ping"></div>
              <div class="absolute inset-0 w-full h-full bg-[#605bff] rounded-full"></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Security & Compliance Section -->
  <section class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
      <!-- Add security certifications, compliance badges, etc. -->
    </div>
  </section>

  <!-- Payment Flow Section -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Side: Interactive Payment Flow -->
        <div class="relative">
          <!-- Main Circle Container -->
          <div class="relative w-full aspect-square">
            <!-- Center Circle -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#605bff]/10 rounded-full flex items-center justify-center">
              <div class="w-24 h-24 bg-[#605bff]/20 rounded-full flex items-center justify-center">
                <div class="w-16 h-16 bg-[#605bff] rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Orbital Circles with Icons -->
            {#each [
              { icon: 'card', label: 'Payment Initiation', angle: 0 },
              { icon: 'process', label: 'Processing', angle: 72 },
              { icon: 'security', label: 'Security Check', angle: 144 },
              { icon: 'analytics', label: 'Analysis', angle: 216 },
              { icon: 'complete', label: 'Settlement', angle: 288 }
            ] as item, i}
              <!-- Orbital Path -->
              <div class="absolute top-1/2 left-1/2 w-[300px] h-[300px] -mt-[150px] -ml-[150px] rounded-full border-2 border-dashed border-[#605bff]/20"
                   style="transform: rotate({item.angle}deg)">
                <!-- Moving Element -->
                <div class="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12">
                  <div class="relative w-full h-full animate-orbit"
                       style="animation-delay: -{i * 1.2}s">
                    <!-- Icon Circle -->
                    <div class="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center
                               hover:scale-110 transition-transform duration-300 cursor-pointer group">
                      <svg class="w-6 h-6 text-[#605bff] group-hover:scale-110 transition-transform duration-300" 
                           fill="none" 
                           stroke="currentColor" 
                           viewBox="0 0 24 24">
                        {#if item.icon === 'card'}
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                        {:else if item.icon === 'process'}
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        {:else if item.icon === 'security'}
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        {:else if item.icon === 'analytics'}
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        {:else}
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        {/if}
                      </svg>
                    </div>
                    <!-- Label -->
                    <span class="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap
                               text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100
                               transition-opacity duration-300">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            {/each}

            <!-- Animated Particles -->
            <div class="absolute inset-0">
              {#each Array(5) as _, i}
                <div class="absolute w-2 h-2 bg-[#605bff] rounded-full animate-float"
                     style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; 
                            animation-delay: -{i * 0.5}s; animation-duration: {3 + i}s">
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Right Side: Content -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-[#32325d] mb-6">
              Revolutionizing Payment Processing
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Our advanced payment infrastructure combines cutting-edge technology with 
              bank-grade security to deliver a seamless payment experience. We process 
              millions of transactions daily while maintaining industry-leading uptime 
              and security standards.
            </p>
          </div>

          <!-- Key Features -->
          <div class="grid gap-6">
            {#each [
              {
                title: "Lightning Fast Processing",
                description: "Process transactions in milliseconds with our optimized payment infrastructure"
              },
              {
                title: "Bank-Grade Security",
                description: "Multi-layer encryption and security protocols protect every transaction"
              },
              {
                title: "Global Coverage",
                description: "Support for multiple currencies and payment methods across 100+ countries"
              }
            ] as feature}
              <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-[#605bff] group-hover:text-white transition-colors duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-[#32325d] mb-1">{feature.title}</h3>
                  <p class="text-gray-600">{feature.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technology Stack Section -->
  <section class="py-24 relative overflow-hidden">
    <!-- Dynamic Background -->
    <div class="absolute inset-0">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#605bff]/5"></div>
      
      <!-- Animated Grid -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
      
      <!-- Floating Elements -->
      {#each Array(8) as _, i}
        <div 
          class="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style="
            left: {Math.random() * 100}%;
            top: {Math.random() * 100}%;
            width: {100 + Math.random() * 200}px;
            height: {100 + Math.random() * 200}px;
            background: linear-gradient(
              {Math.random() * 360}deg,
              rgba(96, 91, 255, 0.1),
              rgba(149, 144, 255, 0.05)
            );
            animation: float {15 + i * 2}s ease-in-out infinite;
            animation-delay: -{i * 2}s;
          "
        ></div>
      {/each}
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Our Technology</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Powered by Advanced Technology
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Our cutting-edge infrastructure combines security, scalability, and innovation
        </p>
      </div>

      <!-- Tech Stack Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {#each [
          {
            title: 'Security First',
            description: 'Bank-grade encryption and advanced fraud prevention',
            icon: 'shield',
            stats: '99.99% Uptime',
            gradient: 'from-blue-500 to-cyan-500'
          },
          {
            title: 'Cloud Native',
            description: 'Scalable infrastructure with global reach',
            icon: 'cloud',
            stats: '100+ Regions',
            gradient: 'from-purple-500 to-pink-500'
          },
          {
            title: 'API Driven',
            description: 'Modern RESTful APIs with comprehensive SDKs',
            icon: 'code',
            stats: '50+ Endpoints',
            gradient: 'from-orange-500 to-red-500'
          },
          {
            title: 'Real-time Analytics',
            description: 'Advanced monitoring and insights',
            icon: 'chart',
            stats: '< 10ms Latency',
            gradient: 'from-green-500 to-emerald-500'
          }
        ] as tech, i}
          <div 
            class="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                   transition-all duration-500 overflow-hidden"
            style="animation: fadeIn 0.5s ease-out forwards {i * 0.1}s"
          >
            <!-- Gradient Background -->
            <div class="absolute inset-0 bg-gradient-to-br {tech.gradient} opacity-0 
                        group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <!-- Animated Border -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute inset-0 rounded-2xl border-2 border-dashed border-[#605bff]/20 animate-spin-slow"></div>
            </div>

            <!-- Content -->
            <div class="relative space-y-4">
              <!-- Icon -->
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br {tech.gradient} p-0.5">
                <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center
                            group-hover:bg-gradient-to-br {tech.gradient} transition-colors duration-500">
                  <svg class="w-6 h-6 text-[#605bff] group-hover:text-white transition-colors duration-500" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24">
                    {#if tech.icon === 'shield'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    {:else if tech.icon === 'cloud'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    {:else if tech.icon === 'code'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    {:else}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    {/if}
                  </svg>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-[#32325d] group-hover:text-[#605bff] transition-colors duration-300">
                {tech.title}
              </h3>

              <!-- Description -->
              <p class="text-gray-600 text-sm leading-relaxed">
                {tech.description}
              </p>

              <!-- Stats -->
              <div class="flex items-center gap-2 text-sm font-medium text-[#605bff]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                {tech.stats}
              </div>
            </div>

            <!-- Hover Effect Particles -->
            {#each Array(3) as _, j}
              <div 
                class="absolute w-2 h-2 rounded-full bg-[#605bff]/20 opacity-0 
                       group-hover:opacity-100 transition-opacity duration-500"
                style="
                  left: {Math.random() * 100}%;
                  top: {Math.random() * 100}%;
                  animation: particle {2 + j}s linear infinite;
                  animation-delay: -{j * 0.5}s;
                "
              ></div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Global Impact Section with Map -->
  <section class="py-24 relative overflow-hidden">
    <!-- Enhanced Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#605bff]/5"></div>
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Global Network</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Worldwide Impact
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering businesses across 100+ countries with seamless payment solutions
        </p>
      </div>

      <!-- Interactive Map Component -->
      <div class="relative aspect-[16/9] bg-[#1a1a2e] rounded-3xl overflow-hidden shadow-2xl">
        <!-- Map Base Layer -->
        <div class="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 400" class="w-full h-full">
            <!-- World Map Path - You'll need to add the actual path data here -->
            <path 
              d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
              class="fill-current text-[#605bff]/10"
            />
          </svg>
        </div>

        <!-- Active Regions -->
        {#each [
          { 
            x: 20, y: 30, 
            name: 'North America',
            stats: {
              transactions: '2.5M+',
              volume: '$10B+',
              growth: '+45%',
              clients: '100K+'
            }
          },
          { 
            x: 45, y: 25, 
            name: 'Europe',
            stats: {
              transactions: '1.8M+',
              volume: '$8B+',
              growth: '+38%',
              clients: '85K+'
            }
          },
          { 
            x: 70, y: 35, 
            name: 'Asia Pacific',
            stats: {
              transactions: '3.2M+',
              volume: '$12B+',
              growth: '+52%',
              clients: '150K+'
            }
          }
        ] as region}
          <div 
            class="absolute group cursor-pointer"
            style="left: {region.x}%; top: {region.y}%;"
          >
            <!-- Pulse Effect -->
            <div class="relative">
              {#each Array(3) as _, i}
                <div 
                  class="absolute rounded-full border-2 border-[#605bff]"
                  style="
                    width: {40 + i * 20}px;
                    height: {40 + i * 20}px;
                    left: ${-10 - i * 10}px;
                    top: ${-10 - i * 10}px;
                    animation: pulse-ring {2 + i}s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    animation-delay: -{i * 0.5}s;
                  "
                ></div>
              {/each}

              <!-- Region Marker -->
              <div class="relative w-5 h-5">
                <div class="absolute inset-0 rounded-full bg-[#605bff] opacity-75"></div>
                <div class="absolute inset-0 rounded-full bg-[#605bff] animate-ping"></div>
              </div>

              <!-- Tooltip -->
              <div class="absolute z-20 opacity-0 group-hover:opacity-100 transition-all duration-300
                          -translate-y-full -translate-x-1/2 left-1/2 bottom-full mb-4
                          min-w-[300px] transform scale-95 group-hover:scale-100">
                <div class="bg-white rounded-xl shadow-xl p-4">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-lg font-bold text-[#32325d]">{region.name}</h4>
                    <div class="flex items-center gap-1 text-sm font-medium text-green-500">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                      {region.stats.growth}
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    {#each Object.entries(region.stats) as [key, value]}
                      <div class="bg-gray-50 rounded-lg p-3">
                        <div class="text-sm text-gray-600 capitalize">{key}</div>
                        <div class="text-base font-bold text-[#32325d]">{value}</div>
                      </div>
                    {/each}
                  </div>

                  <!-- Live Indicator -->
                  <div class="mt-3 flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-xs text-gray-600">Live Activity</span>
                  </div>
                </div>
                <!-- Tooltip Arrow -->
                <div class="absolute left-1/2 transform -translate-x-1/2 -bottom-2
                            border-8 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        {/each}

        <!-- Connection Lines -->
        <svg class="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color: #605bff; stop-opacity: 0.1"/>
              <stop offset="50%" style="stop-color: #605bff; stop-opacity: 0.5"/>
              <stop offset="100%" style="stop-color: #605bff; stop-opacity: 0.1"/>
            </linearGradient>
          </defs>

          {#each Array(15) as _, i}
            {@const startX = 20 + Math.random() * 60}
            {@const startY = 20 + Math.random() * 60}
            {@const endX = 40 + Math.random() * 40}
            {@const endY = 30 + Math.random() * 40}
            <path
              d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${Math.min(startY, endY) - 20} ${endX} ${endY}`}
              stroke="url(#lineGradient)"
              stroke-width="1"
              fill="none"
              style="
                animation: flowLine {5 + i * 0.5}s linear infinite;
                animation-delay: -{i * 0.5}s;
              "
            />
          {/each}
        </svg>

        <!-- Floating Particles -->
        {#each Array(30) as _, i}
          <div
            class="absolute rounded-full bg-white/30"
            style="
              width: {2 + Math.random() * 2}px;
              height: {2 + Math.random() * 2}px;
              left: {Math.random() * 100}%;
              top: {Math.random() * 100}%;
              animation: floatingParticle {3 + Math.random() * 2}s linear infinite;
              animation-delay: -{Math.random() * 3}s;
            "
          ></div>
        {/each}
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {#each [
          { title: 'Global Reach', value: '100+', suffix: 'Countries', icon: 'globe' },
          { title: 'Transaction Volume', value: '$30B+', suffix: 'Processed', icon: 'chart' },
          { title: 'Active Users', value: '1M+', suffix: 'Worldwide', icon: 'users' },
          { title: 'Uptime', value: '99.99', suffix: '% Reliability', icon: 'server' }
        ] as stat}
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <!-- Add appropriate icon paths based on stat.icon -->
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-[#32325d]">{stat.value}</div>
                <div class="text-sm text-gray-600">{stat.title}</div>
                <div class="text-xs text-[#605bff]">{stat.suffix}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Partners Section -->
  <section class="py-24 relative overflow-hidden">
    <!-- Dynamic Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-white via-[#605bff]/5 to-white"></div>
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Our Partners</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        <h2 class="text-4xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Trusted By Leading Brands
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Partnering with global leaders to transform digital payments
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center max-w-5xl mx-auto">
        {#each [
          { name: 'American Express', logo: '/images/brands/amex.png', delay: 0 },
          { name: 'Mastercard', logo: '/images/brands/mscrad.png', delay: 0.1 },
          { name: 'WooCommerce', logo: '/images/brands/woocommerce.png', delay: 0.2 },
          { name: 'Shopify', logo: '/images/brands/Shopy.png', delay: 0.3 }
        ] as partner, i}
          <div 
            class="relative group p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500"
            style="animation: fadeIn 0.6s ease-out forwards {partner.delay}s"
          >
            <!-- Hover Effects -->
            <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent rounded-xl"></div>
            </div>

            <!-- Logo Container -->
            <div class="relative">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                class="h-12 w-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
              />
              
              <!-- Glow Effect -->
              <div class="absolute inset-0 bg-[#605bff]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  :global(.bg-primary) {
    background-color: #605bff;
  }
  :global(.text-primary) {
    color: #605bff;
  }
  :global(.hover\:bg-primary:hover) {
    background-color: #605bff;
  }

  /* Add animations and transitions */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }

  /* Add new animations */
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.2;
    }
    50% {
      transform: translate(20px, -20px) rotate(5deg);
      opacity: 0.3;
    }
  }

  .animate-float {
    animation: float 15s ease-in-out infinite;
  }

  /* Add new animations */
  @keyframes flowLine {
    0% {
      stroke-dashoffset: 1000;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0;
    }
  }

  .flow-line {
    stroke-dasharray: 1000;
    animation: flowLine 3s ease-in-out infinite;
  }

  /* Add more custom animations as needed */

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(0) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(0) rotate(-360deg);
    }
  }

  .animate-orbit {
    animation: orbit 12s linear infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-20px) scale(1.2);
      opacity: 1;
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes pulse-scale {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .pulse-scale {
    animation: pulse-scale 2s ease-in-out infinite;
  }

  /* Add this to your existing styles */
  .counter {
    display: inline-block;
    transition: content 0.3s ease;
  }

  @keyframes countUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add these new animations to your existing styles */
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 30s linear infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.2;
    }
    50% {
      transform: translate(20px, -20px) rotate(5deg);
      opacity: 0.3;
    }
  }

  .animate-float {
    animation: float 15s ease-in-out infinite;
  }

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(0) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(0) rotate(-360deg);
    }
  }

  @keyframes particle {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--tx), var(--ty)) scale(0);
      opacity: 0;
    }
  }

  @keyframes pulse-slow {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @keyframes travel-dot {
    0% {
      top: 0;
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      top: 100%;
      opacity: 0;
    }
  }

  .animate-travel-dot {
    animation: travel-dot 4s ease-in-out infinite;
  }

  @keyframes moveLight {
    0% {
      transform: translateX(-100%) rotate(-45deg);
    }
    100% {
      transform: translateX(100%) rotate(-45deg);
    }
  }

  @keyframes float-orb {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: translate(30px, -30px) rotate(10deg) scale(1.1);
      opacity: 0.3;
    }
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes flowLine {
    0% {
      stroke-dasharray: 0 1000;
      stroke-opacity: 0;
    }
    50% {
      stroke-opacity: 1;
    }
    100% {
      stroke-dasharray: 1000 0;
      stroke-opacity: 0;
    }
  }

  @keyframes floatingParticle {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--tx, 100px), var(--ty, -100px));
      opacity: 0;
    }
  }

  @keyframes growWidth {
    from { width: 0%; }
    to { width: 100%; }
  }

  @keyframes animate-gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
