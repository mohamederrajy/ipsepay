<section class="relative min-h-[90vh] overflow-hidden py-20 lg:py-24">
  <!-- Ultra Modern Payment Gateway Background -->
  <div class="absolute inset-0">
    <!-- Modern Base Layer -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#fcfcfd] via-[#f8fafc] to-[#f1f5f9]">
      <!-- Enhanced gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#fcfcfd] via-[#f8fafc] to-[#f1f5f9]">
        <!-- Improved noise texture -->
        <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-noise"></div>
      </div>

      <!-- Enhanced Payment Processing Waves -->
      <div class="absolute inset-0">
        {#each Array(5) as _, i}
          <div class="absolute w-full h-40 opacity-[0.04] transform-gpu"
               style="top: {10 + i * 20}%;
                      background: url('data:image/svg+xml,%3Csvg viewBox=%220 0 1000 150%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0,50 C250,0 350,100 500,50 C650,0 750,100 1000,50 L1000,150 L0,150 Z%22 fill=%22%23666%22/%3E%3C/svg%3E') repeat-x;
                      animation: wave-animation 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                      animation-delay: -{i * 4}s">
          </div>
        {/each}
      </div>

      <!-- Digital Network Lines -->
      {#each Array(8) as _, i}
        <div class="absolute h-screen w-px bg-gradient-to-b from-transparent via-[#605bff]/20 to-transparent animate-scan-line"
             style="left: {5 + i * 12}%; animation-delay: -{i * 1.2}s">
        </div>
      {/each}

      <!-- Enhanced Grid Overlay -->
      <div class="absolute inset-0 opacity-[0.02]"
           style="background-image: 
             linear-gradient(to right, rgb(96 91 255 / 0.2) 1px, transparent 1px),
             linear-gradient(to bottom, rgb(96 91 255 / 0.2) 1px, transparent 1px);
             background-size: 64px 64px;">
      </div>

      <!-- Modernized Light Effects -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.9),transparent)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_100%,rgba(255,255,255,0.9),transparent)]"></div>
      </div>
    </div>

    <!-- Modern Payment Cards -->
    {#each Array(3) as _, i}
      <div class="absolute"
           style="top: {15 + i * 25}%; right: {5 + i * 15}%;">
        <div class="w-72 h-44 bg-gradient-to-br from-white/95 to-gray-50/90 rounded-[2rem] 
                    backdrop-blur-xl border border-white/20 shadow-2xl animate-float-card 
                    hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <!-- Add glass effect -->
          <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent"></div>
          
          <!-- Add subtle glow -->
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                      rounded-[2.25rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <div class="p-6 space-y-4">
            <div class="flex justify-between">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </div>
              <div class="flex space-x-1">
                {#each Array(4) as _}
                  <div class="w-1.5 h-6 bg-gradient-to-b from-gray-200 to-gray-100 rounded-full"></div>
                {/each}
              </div>
            </div>
            <div class="space-y-3">
              <div class="w-full h-2 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
              <div class="w-2/3 h-2 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    {/each}

    <!-- Digital Transaction Flows -->
    {#each Array(6) as _, i}
      <div class="absolute left-0 h-screen w-px bg-gradient-to-b from-transparent 
                  via-blue-400/30 to-transparent animate-scan-line"
           style="left: {10 + i * 15}%; animation-delay: -${i * 1.5}s">
      </div>
    {/each}

    <!-- Payment Success Indicators -->
    {#each Array(15) as _, i}
      <div class="absolute animate-pulse-fade"
           style="top: {Math.random() * 100}%; left: {Math.random() * 100}%; animation-delay: -${Math.random() * 5}s">
        <div class="w-2 h-2 bg-gradient-to-br from-emerald-300/50 to-emerald-200/50 
                    rounded-full shadow-lg shadow-emerald-500/20">
        </div>
      </div>
    {/each}

    <!-- Modern Grid Overlay -->
    <div class="absolute inset-0 opacity-[0.02]"
         style="background-image: 
           linear-gradient(to right, rgb(148 163 184 / 0.3) 1px, transparent 1px),
           linear-gradient(to bottom, rgb(148 163 184 / 0.3) 1px, transparent 1px);
           background-size: 100px 100px;">
    </div>

    <!-- Light Effects -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(255,255,255,0.8),transparent)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_100%,rgba(255,255,255,0.8),transparent)]"></div>
    </div>
  </div>

  <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex min-h-[80vh] items-center">
      <div class="relative w-full">
        <!-- Badge with better spacing -->
        <div class="mb-12 inline-flex items-center gap-2.5 rounded-2xl bg-white/80 p-2 pr-5 backdrop-blur-sm border border-white/60 shadow-lg">
          <span class="rounded-xl bg-[#605bff] px-3.5 py-1.5 text-sm font-medium text-white relative overflow-hidden">
            <span class="relative z-10">New</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </span>
          <span class="text-sm font-medium text-[#32325d] flex items-center gap-2.5">
            Next-Gen Payment Platform v2.0
            <span class="flex h-2 w-2">
              <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#605bff] opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-[#605bff]"></span>
            </span>
          </span>
        </div>

        <!-- Content Grid with improved spacing -->
        <div class="grid lg:grid-cols-12 gap-16 items-center">
          <!-- Left Content with better vertical rhythm -->
          <div class="lg:col-span-5 space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold tracking-tight text-[#32325d] leading-[1.1]">
              Revolutionize Your <span class="relative inline-block animate-gradient-text bg-gradient-to-r from-[#605bff] via-purple-600 to-[#605bff] bg-[length:200%_auto] bg-clip-text text-transparent">
                Payments
                <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 385 12" fill="none">
                  <path class="animate-draw" d="M1 5.5C1 5.5 88 -1.5 193.5 3.5C299 8.5 384 5.5 384 5.5" 
                        stroke="url(#gradient-line)" 
                        stroke-width="10" 
                        stroke-linecap="round"/>
                  <defs>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="100%" y2="0">
                      <stop offset="0%" stop-color="#605bff"/>
                      <stop offset="100%" stop-color="#a855f7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p class="text-xl text-[#32325d]/70 leading-relaxed max-w-xl">
              Experience lightning-fast, secure payments with AI-powered fraud detection and seamless integration.
            </p>

            <!-- Stats Grid with improved spacing -->
            <div class="grid grid-cols-3 gap-6 py-8">
              {#each stats as stat}
                <div class="group relative overflow-hidden rounded-xl bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div class="relative z-10">
                    <div class="text-2xl lg:text-3xl font-bold text-[#32325d]">{stat.value}</div>
                    <div class="text-sm text-[#32325d]/70 mt-1">{stat.label}</div>
                  </div>
                  <div class="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#605bff] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              {/each}
            </div>

            <!-- CTA Buttons with better spacing -->
            <div class="grid grid-cols-2 gap-6 pt-4">
              <a href="/start" 
                 class="group relative overflow-hidden rounded-xl bg-[#605bff] px-8 py-4 transition-all duration-300 hover:-translate-y-0.5">
                <div class="relative z-10 flex items-center justify-center gap-2">
                  <span class="font-medium text-white">Get Started Free</span>
                  <svg class="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </a>

              <a href="/login" 
                 class="group flex items-center justify-center gap-3 rounded-xl border border-gray-200 px-8 py-4 font-medium text-gray-600 transition-all duration-300 hover:border-gray-400 hover:text-gray-900">
                <svg class="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zM19 7v5m0 0l-2-2m2 2l2-2"/>
                </svg>
                <span>Login</span>
              </a>
            </div>
          </div>

          <!-- Right Content with adjusted positioning -->
          <div class="lg:col-span-7 lg:-mr-20">
            <div class="relative perspective-1000">
              <!-- Main Dashboard with Enhanced Effects -->
              <div class="rounded-3xl bg-white p-2 shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                <div class="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/images/photos/paydo.jpg" 
                    alt="Dashboard Preview" 
                    class="w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <!-- Small Payment Card - Bottom Left -->
                  <div class="absolute bottom-4 left-4 z-20">
                    <div class="relative w-44 h-28 group">
                      <div class="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-gray-100/80 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:rotate-2">
                        <div class="h-full p-3 flex flex-col justify-between">
                          <!-- Top Section -->
                          <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-1.5">
                              <div class="w-5 h-5 rounded-md bg-gradient-to-br from-gray-100 to-white shadow-sm flex items-center justify-center">
                                <svg class="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                              </div>
                              <span class="text-gray-600 font-medium text-[10px]">IPSEPAY</span>
                            </div>
                          </div>

                          <!-- Middle Section -->
                          <div class="flex justify-center space-x-1.5">
                            {#each Array(4) as _}
                              <div class="w-4 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
                            {/each}
                          </div>

                          <!-- Bottom Section -->
                          <div class="flex justify-between items-end">
                            <div class="space-y-0.5">
                              <div class="text-[8px] text-gray-400">Secure Pay</div>
                              <div class="text-[10px] text-gray-600 font-medium">Active</div>
                            </div>
                            <div class="flex items-center space-x-1">
                              <div class="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                              <span class="text-[8px] text-gray-400">Live</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-[#32325d]/10 to-transparent"></div>
                </div>

                <!-- Floating Cards -->
                <div class="absolute -left-8 top-1/4 animate-float">
                  <div class="group rounded-2xl bg-white p-4 shadow-2xl transition-all hover:scale-105">
                    <div class="flex items-center gap-4">
                      <div class="rounded-xl bg-gradient-to-br from-green-400 to-green-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <div class="font-medium text-[#32325d]">Payment Success</div>
                        <div class="text-sm text-[#32325d]/70">$8,942 processed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="absolute -right-8 bottom-1/4 animate-float-delay">
                  <div class="group rounded-2xl bg-white p-4 shadow-2xl transition-all hover:scale-105">
                    <div class="flex items-center gap-4">
                      <div class="rounded-xl bg-gradient-to-br from-[#605bff] to-purple-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                      </div>
                      <div>
                        <div class="font-medium text-[#32325d]">Real-time Analytics</div>
                        <div class="text-sm text-[#605bff]">+28.14% today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(0, -20px); }
  }

  @keyframes float-delay {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(0, 20px); }
  }

  @keyframes mesh {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, -20px) rotate(1deg); }
  }

  @keyframes gradient-text {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes draw {
    from { stroke-dashoffset: 400; }
    to { stroke-dashoffset: 0; }
  }

  .animate-mesh {
    animation: mesh 15s ease-in-out infinite;
  }

  .animate-mesh-reverse {
    animation: mesh 15s ease-in-out infinite reverse;
  }

  .animate-gradient-text {
    animation: gradient-text 3s linear infinite;
  }

  .animate-draw {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: draw 1.5s ease-in-out forwards;
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delay {
    animation: float-delay 6s ease-in-out infinite;
    animation-delay: 1s;
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }

  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }

  .delay-1000 {
    animation-delay: 1s;
  }

  .bg-radial-gradient {
    background: radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.8) 100%);
  }

  @keyframes float-line {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }

  .animate-float-line {
    animation: float-line 4s ease-in-out infinite;
  }

  @keyframes slow-pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }

  @keyframes glow-line {
    0% { opacity: 0; transform: translateX(-100%); }
    50% { opacity: 1; }
    100% { opacity: 0; transform: translateX(100%); }
  }

  @keyframes scan-vertical {
    0% { transform: scaleY(0); opacity: 0; }
    50% { transform: scaleY(1); opacity: 1; }
    100% { transform: scaleY(0); opacity: 0; }
  }

  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0); opacity: 0.3; }
    50% { transform: translate(20px, -20px); opacity: 1; }
  }

  .animate-slow-pulse {
    animation: slow-pulse 8s ease-in-out infinite;
  }

  .animate-glow-line {
    animation: glow-line 4s ease-in-out infinite;
  }

  .animate-scan-vertical {
    animation: scan-vertical 8s ease-in-out infinite;
  }

  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  @keyframes beam-slide {
    0% { transform: translateY(-100%) scaleY(0.5); opacity: 0; }
    50% { transform: translateY(100%) scaleY(1); opacity: 1; }
    100% { transform: translateY(200%) scaleY(0.5); opacity: 0; }
  }

  @keyframes float-modern {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-10px, -20px) rotate(2deg); }
  }

  @keyframes pulse-subtle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
  }

  .animate-beam-slide {
    animation: beam-slide 6s ease-in-out infinite;
  }

  .animate-float-modern {
    animation: float-modern 8s ease-in-out infinite;
  }

  .animate-pulse-subtle {
    animation: pulse-subtle 8s ease-in-out infinite;
  }

  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-10px, -10px) rotate(3deg); }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }

  @keyframes transaction-line {
    0% { transform: translateX(-100%) scaleY(0.5); opacity: 0; }
    50% { transform: translateX(0) scaleY(1); opacity: 1; }
    100% { transform: translateX(100%) scaleY(0.5); opacity: 0; }
  }

  .animate-transaction-line {
    animation: transaction-line 8s linear infinite;
  }

  @keyframes mesh-flow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    50% { transform: translate(-30px, 30px) rotate(3deg); opacity: 0.7; }
  }

  @keyframes mesh-flow-reverse {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    50% { transform: translate(30px, -30px) rotate(-3deg); opacity: 0.7; }
  }

  @keyframes float-payment {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, -20px) rotate(5deg); }
  }

  @keyframes flow-line {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }

  @keyframes spin-slow {
    to { transform: rotate(360deg); }
  }

  .animate-mesh-flow {
    animation: mesh-flow 15s ease-in-out infinite;
  }

  .animate-mesh-flow-reverse {
    animation: mesh-flow-reverse 15s ease-in-out infinite;
  }

  .animate-float-payment {
    animation: float-payment 10s ease-in-out infinite;
  }

  .animate-flow-line {
    animation: flow-line 8s linear infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }

  @keyframes slow-drift {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, 20px) rotate(1deg); }
  }

  @keyframes slow-drift-reverse {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, -20px) rotate(-1deg); }
  }

  .animate-slow-drift {
    animation: slow-drift 20s ease-in-out infinite;
  }

  .animate-slow-drift-reverse {
    animation: slow-drift-reverse 20s ease-in-out infinite;
  }

  @keyframes slow-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes slow-spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  .animate-slow-spin {
    animation: slow-spin 60s linear infinite;
  }

  .animate-slow-spin-reverse {
    animation: slow-spin-reverse 45s linear infinite;
  }

  .bg-gradient-radial-light {
    background: radial-gradient(
      circle at center,
      rgba(255,255,255,0.8) 0%,
      rgba(255,255,255,0.4) 50%,
      transparent 100%
    );
  }

  @keyframes float-card {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }

  @keyframes flow-payment {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }

  @keyframes pulse-fade {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.5); opacity: 0.7; }
  }

  .animate-float-card {
    animation: float-card 6s ease-in-out infinite;
  }

  @keyframes flow-digital {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }

  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
    50% { transform: translate(20px, -20px) scale(1.2); opacity: 0.8; }
  }

  .animate-float-particle {
    animation: float-particle 8s ease-in-out infinite;
  }

  @keyframes wave-animation {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(-25px) translateY(-15px); }
    100% { transform: translateX(0) translateY(0); }
  }

  @keyframes scan-line {
    0% { transform: scaleY(0) translateY(-100%); opacity: 0; }
    50% { transform: scaleY(1) translateY(0); opacity: 1; }
    100% { transform: scaleY(0) translateY(100%); opacity: 0; }
  }

  .animate-scan-line {
    animation: scan-line 4s ease-in-out infinite;
  }

  .animate-pulse-fade {
    animation: pulse-fade 3s ease-in-out infinite;
  }
</style><script>
  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '0.1s', label: 'Processing' },
    { value: '150+', label: 'Countries' }
  ];
</script>


