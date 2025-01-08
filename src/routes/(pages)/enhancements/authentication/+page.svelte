<script lang="ts">
const features = [
  {
    title: 'Maximize conversion',
    description: 'Find the authentication route with the highest success rate every time with machine learning.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Tackle authentication globally',
    description: "Every market has its own regulations and behaviors. Adyen's solution adapts to local needs so that you can offer frictionless authentication everywhere.",
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9'
  },
  {
    title: 'Optimize the full payment flow',
    description: 'Understand how authentication affects transactions from start to finish with Adyen as your authentication provider and acquirer.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
  }
];

const actions = [
  { text: 'Challenge', position: 'top' },
  { text: 'Authenticate', position: 'right' },
  { text: 'Version 2.2.0', position: 'bottom-right' },
  { text: 'Apply rule', position: 'bottom-left' }
];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-white py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <span class="text-sm font-medium text-[#605bff] tracking-wide">AUTHENTICATION</span>
        </div>

        <h1 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
          Balance convenience with
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            security through better authentication
          </span>
        </h1>

        <p class="text-xl text-[#32325d]/70">
          Provide your customers with a fast and seamless authentication experience.
        </p>

        <div class="pt-4">
          <a href="/contact" 
             class="inline-block px-8 py-4 rounded-xl bg-[#605bff] text-white font-medium
                    hover:bg-[#605bff]/90 transition-colors duration-300">
            Get in touch
          </a>
        </div>
      </div>

      <!-- Right Content -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
        <div class="relative rounded-2xl overflow-hidden">
          <img src="/images/autoction.webp" 
               alt="Authentication Preview" 
               class="w-full h-auto rounded-2xl shadow-xl transform scale-110"
               style="aspect-ratio: 3/4; object-fit: cover; object-position: center;" />
          <div class="absolute inset-0 bg-gradient-to-tr from-[#605bff]/10 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-16 md:py-24 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-[#605bff]/5 via-white to-white">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/10 rounded-full filter blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="group relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 rounded-3xl blur-xl 
                      transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
          <div class="relative h-full p-8 rounded-2xl bg-white border border-gray-100 
                      hover:border-[#605bff]/20 transition-all duration-500 
                      hover:shadow-xl hover:shadow-[#605bff]/10">
            <div class="w-12 h-12 mb-8 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={feature.icon}/>
              </svg>
            </div>

            <h3 class="text-xl font-medium text-[#32325d] mb-4">{feature.title}</h3>
            <p class="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Technology Section -->
<section class="py-24 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Updated Title Section -->
    <div class="text-center space-y-4 mb-16">
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
        <span class="text-sm font-medium text-[#605bff] tracking-wide">TECHNOLOGY</span>
      </div>

      <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
        Make authentication easy
        <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
          for everyone
        </span>
      </h2>
    </div>

    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-6">
        <h3 class="text-3xl font-medium text-[#32325d]">
          Let our technology do the manual work
        </h3>
        <p class="text-lg text-[#32325d]/70 leading-relaxed">
          Authentication is completed behind the scenes or with simple customer inputs. Every transaction is routed based on regulation type, risk assessment criteria and policies specifically for your business.
        </p>
      </div>

      <div class="relative aspect-square">
        <!-- Center Circle with Pulse -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="relative">
            <div class="w-32 h-32 bg-[#605bff] rounded-full flex items-center justify-center z-20 relative">
              <svg class="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
              </svg>
            </div>
            <div class="absolute inset-0 animate-ping-slow opacity-75 bg-[#605bff] rounded-full"></div>
            <div class="absolute inset-0 animate-ping-slower opacity-50 bg-[#605bff] rounded-full"></div>
          </div>
        </div>

        <!-- Orbital Rings -->
        {#each [0, 1, 2, 3] as i}
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full 
                      border-2 border-dashed border-[#605bff]/20 orbital-ring"
               style="width: {300 + i * 80}px; height: {300 + i * 80}px; 
                      animation-duration: {20 + i * 5}s; 
                      animation-direction: {i % 2 ? 'reverse' : 'normal'}">
          </div>
        {/each}

        <!-- Action Pills -->
        {#each actions as action, i}
          <div class={`
            absolute transition-transform hover:scale-110
            ${action.position === 'top' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
            ${action.position === 'right' ? 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2' : ''}
            ${action.position === 'bottom-left' ? 'bottom-0 left-1/4 translate-y-1/2' : ''}
            ${action.position === 'bottom-right' ? 'bottom-0 right-1/4 translate-y-1/2' : ''}
          `}>
            <div class="px-4 py-2 bg-slate-900 text-white rounded-full flex items-center gap-2 shadow-lg">
              <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
                <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              {action.text}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
/* Existing animations */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes orbital-rotation {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* New animations */
@keyframes progress {
  0% { width: 0; }
  50% { width: 66.666667%; }
  100% { width: 0; }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Animation classes */
.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.orbital-ring {
  animation: orbital-rotation linear infinite;
}

.animate-ping-slow {
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-ping-slower {
  animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
<!-- Machine Learning Section -->
<section class="py-24 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content - Authentication Card -->
      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl animate-pulse"></div>
        
        <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-500">
          <!-- Card Header -->
          <div class="p-6 border-b border-gray-100">
            <div class="flex items-center gap-4">
              <button class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </button>
              <div class="space-y-1 flex-1">
                <h3 class="text-xl font-medium text-[#32325d] flex items-center gap-2">
                  Verify by phone
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </h3>
                <p class="text-gray-500 text-sm">
                  Message sent to ***023
                </p>
              </div>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 space-y-6">
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <label class="text-sm text-gray-600">Verification Code</label>
                <span class="text-xs text-[#605bff] animate-pulse">Verifying...</span>
              </div>
              
              <!-- Verification Code Input -->
              <div class="flex gap-2 justify-center">
                {#each '197601'.split('') as digit, i}
                  <div class="w-10 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-lg font-medium text-[#32325d]
                              shadow-sm transform transition-all duration-300
                              animate-in fade-in slide-in-from-bottom-4 delay-{i * 100}"
                       style="animation-delay: {i * 100}ms">
                    {digit}
                  </div>
                {/each}
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="absolute inset-y-0 left-0 bg-[#605bff] rounded-full w-2/3 animate-[progress_2s_ease-in-out_infinite]"></div>
            </div>

            <button class="w-full py-3 bg-gray-50 rounded-lg text-gray-400 flex items-center justify-center gap-2 group hover:bg-gray-100 transition-colors">
              <svg class="animate-spin w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span class="group-hover:text-[#605bff] transition-colors">Processing</span>
            </button>

            <button class="w-full text-center text-[#605bff] hover:text-[#605bff]/80 transition-colors">
              Resend code
            </button>
          </div>

          <!-- Animated Dots Grid -->
          <div class="absolute top-0 right-0 grid grid-cols-10 gap-2 p-4">
            {#each Array(100) as _, i}
              <div class={`w-1.5 h-1.5 rounded-full transition-all duration-500
                          ${[12, 24, 47, 52, 72, 83].includes(i) ? 'bg-[#605bff] scale-125' : 'bg-gray-200'}
                          hover:bg-[#605bff] hover:scale-125`}>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500 hover:bg-[#605bff]/10">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">MACHINE LEARNING</span>
        </div>

        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
          Use machine learning to
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            authenticate a payment
          </span>
        </h2>

        <p class="text-xl text-[#32325d]/70">
          Apply authentication in regulated countries, automatically use exemptions where possible, or use authentication to reduce the risk of fraudulent transactions with the Authentication Engine.
        </p>
      </div>
    </div>
  </div>
</section>
<!-- Integration Options Section -->
<section class="py-24 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-white via-[#605bff]/5 to-white">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Section Header -->
    <div class="text-center space-y-4 mb-16">
      <!-- Badge -->
      <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                  bg-[#605bff]/5 border border-[#605bff]/10 
                  shadow-sm transition-all duration-500">
        <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
          <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
          </svg>
        </div>
        <span class="text-sm font-medium text-[#605bff] tracking-wide">INTEGRATION</span>
      </div>

      <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2]">
        Integration options made
        <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
          for your business
        </span>
      </h2>
    </div>

    <!-- Integration Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Checkout API Card -->
      <div class="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 mb-6 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">
          Checkout API: Full customization and control
        </h3>

        <p class="text-[#32325d]/70 leading-relaxed">
          Once you're on our API, simply add the 3DS2 Component. The pre-built UI gets you up and running quickly for PSD2 and you still have full customization control.
        </p>
      </div>

      <!-- Drop-in Card -->
      <div class="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 mb-6 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">
          Checkout Drop-in: Pre-built UI that's ready to go
        </h3>

        <p class="text-[#32325d]/70 leading-relaxed">
          Our Web, iOS, and Android Drop-in automatically supports 3DS2. All you have to do is update your current version.
        </p>
      </div>

      <!-- Pay by Link Card -->
      <div class="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 mb-6 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
          </svg>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">
          Pay by Link: The fastest way to get up and running
        </h3>

        <p class="text-[#32325d]/70 leading-relaxed">
          Redirect your shopper to an Adyen-hosted checkout page and make any online channel your checkout.
        </p>
      </div>

      <!-- Plugins Card -->
      <div class="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 mb-6 rounded-xl bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"/>
          </svg>
        </div>

        <h3 class="text-xl font-medium text-[#32325d] mb-3">
          Plugins: 3DS2 already added to all in-house plugins
        </h3>

        <p class="text-[#32325d]/70 leading-relaxed">
          3DS2 is added into all of our certified built in-house plugins for Magento, SAP Commerce Cloud (Hybris), Salesforce Commerce Cloud.
        </p>
      </div>
    </div>
  </div>
</section>