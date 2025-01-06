<script lang="ts">
  import {page} from "$app/stores";
  import { onMount } from 'svelte';
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const brands = ['usdt', 'A-pay', 'G-pay', 'vss', 'mscrad', 'maestro'];
</script>

<section class="relative overflow-hidden py-16 sm:py-24 lg:py-32">
  <!-- Background Elements - Matching pay-method style -->
  <div class="absolute inset-0 bg-[#fafafa]">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.3]"></div>
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[1200px] h-[1200px] 
                  bg-gradient-to-br from-[#605bff]/10 via-purple-100/10 to-transparent 
                  rounded-full blur-3xl transform rotate-12 animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-[1000px] h-[1000px] 
                  bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/5 to-transparent 
                  rounded-full blur-3xl transform -rotate-12 animate-pulse"></div>
    </div>
  </div>

  <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <!-- Left Content with Updated Header Style -->
      <div class="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
        <!-- Modern Badge -->
        <div class="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/90 p-1.5 pr-4 sm:pr-6 
                    backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                    transition-all duration-300 mb-8 animate-float">
          <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                       px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
            <span class="relative z-10">New</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                        to-transparent animate-shimmer"></div>
          </span>
          <span class="text-sm font-medium text-[#32325d] flex items-center gap-2">
            Online payments
            <div class="relative flex">
              <span class="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full 
                           bg-[#605bff] opacity-75"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#605bff]"></span>
            </div>
          </span>
        </div>

        <!-- Enhanced Heading -->
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-[#32325d]">
          Effortless online
          <span class="relative inline-block">
            <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                         text-transparent animate-gradient">payments</span>
            <svg class="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" 
                 preserveAspectRatio="none">
              <path d="M0 0L50 10L100 0" fill="url(#gradient)" opacity="0.2"></path>
            </svg>
          </span>
        </h2>

        <p class="text-lg sm:text-xl text-[#32325d]/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
          Accept, process, and settle payments with the online payment solution built for scale. 
          Experience elite payments performance around the world.
        </p>

        <!-- CTA Buttons - Made responsive -->
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
          <a href="/contact" 
             class="group relative inline-flex items-center justify-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <span class="relative z-10">Get in touch</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </a>
          <a href="/pricing" 
             class="group inline-flex items-center justify-center px-6 py-3 text-[#605bff] font-medium hover:bg-[#605bff]/5 rounded-xl transition-all duration-300">
            See pricing
            <svg class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Trusted By Section - Made responsive -->
        <div class="mt-8 sm:mt-16 text-center lg:text-left">
          <p class="text-sm text-gray-500 mb-4 sm:mb-6 font-medium">Trusted by leading companies</p>
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8 items-center">
            {#each brands as brand}
              <div class="group relative">
                <img 
                  src="/images/brands/{brand}.png" 
                  alt={brand} 
                  class="h-4 sm:h-5 mx-auto lg:mx-0 grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Side - Simple & Clean Design -->
      <div class="relative h-[500px] sm:h-[600px] lg:h-[700px] mt-8 lg:mt-0">
        <!-- Main Card -->
        <div class="relative w-full h-full rounded-3xl bg-white shadow-2xl overflow-hidden group">
          <!-- Simple Header -->
          <div class="absolute top-0 inset-x-0 h-14 bg-white/90 backdrop-blur-sm px-6 flex items-center justify-between z-20 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-sm font-medium text-[#32325d]">Online Payment Platform</span>
            </div>
          </div>

          <!-- Main Content Area -->
          <div class="relative h-full pt-14">
            <!-- Main Dashboard Image -->
            <img 
              src="/images/photos/pay2.jpg" 
              alt="Payment Dashboard" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            <!-- Simple Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

            <!-- Payment Card - Matching hero-ips style -->
            <div class="absolute top-24 right-2 sm:right-6 transform hover:scale-105 transition-all duration-500">
              <div class="w-64 sm:w-80 h-40 sm:h-48 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-4 sm:p-6">
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

            <!-- Simple Transaction Card -->
            <div class="absolute bottom-16 sm:bottom-24 left-2 sm:left-6 transform hover:scale-[1.02] transition-all duration-300">
              <div class="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-[#32325d]">Payment Successful</div>
                  <div class="text-sm text-gray-500">Transaction ID: #892-2392</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<!-- Floating Success Badges -->
{#each Array(3) as _, i}
  <div class="hidden sm:block absolute animate-float-badge"
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

  .perspective-3d {
    perspective: 2000px;
  }

  .rotate-y-5 {
    transform: rotateY(5deg);
  }

  @keyframes progress-fill {
    from { width: 0; }
    to { width: 85%; }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-progress-fill {
    animation: progress-fill 1.5s ease-out forwards;
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }
</style>