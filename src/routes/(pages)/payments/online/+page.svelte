<script lang="ts">
    import {page} from "$app/stores";
    $: routeTd = $page.route.id;
  </script>
  
  <section class="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="max-w-xl">
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l5.09 5.09L12 12.18 6.91 7.09 12 2z"/>
            </svg>
            <span class="text-sm text-gray-600">Online payments</span>
          </div>
  
          <h1 class="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Effortless online payments for 
            <span class="block">you and your customer</span>
          </h1>
  
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Accept, process, and settle payments with the online payment solution built for scale. Experience elite payments performance around the world.
          </p>
  
          <div class="flex flex-wrap gap-4">
            <a href="/contact" class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Get in touch
            </a>
            <a href="/pricing" class="inline-flex items-center px-6 py-3 text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors">
              See pricing →
            </a>
          </div>
  
          <!-- Trusted By -->
          <div class="mt-16">
            <p class="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
            <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              <img src="/images/brands/usdt.png" alt="Uber" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/A-pay.png" alt="Booking.com" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/G-pay.png" alt="Spotify" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/vss.png" alt="LinkedIn" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/mscrad.png" alt="McDonald's" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/maestro.png" alt="Zara" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
            </div>
          </div>
        </div>
  
        <!-- Right Side - Payment Demo -->
        <div class="relative h-[700px] hidden lg:block">
          <!-- Background Image -->
          <div class="absolute inset-0 rounded-3xl overflow-hidden bg-gray-100">
            <img 
              src="/images/photos/pay2.jpg" 
              alt="Lifestyle payment" 
              class="w-full h-full object-cover opacity-90"
            />
          </div>
          
          <!-- Payment Form - Floating -->
          <div class="absolute top-1/2 -translate-y-1/2 -left-12">
            <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[420px]">
              <!-- Payment Form Header -->
              <div class="p-6 border-b border-gray-100">
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-5 bg-primary/10 rounded flex items-center justify-center">
                      <svg class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                    </div>
                    <span class="font-medium text-gray-900">Credit card</span>
                  </div>
                </div>
              </div>
  
              <!-- Payment Form -->
              <div class="p-6 space-y-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Card number</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      value="•••• •••• •••• 6746"
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      disabled
                    >
                    <img src="/images/brands/MasterCard.png" alt="Visa" class="absolute right-3 top-1/2 -translate-y-1/2 h-5">
                  </div>
                </div>
  
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Expiry date</label>
                    <div class="relative">
                      <input 
                        type="text" 
                        value="12 / 28"
                        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        disabled
                      >
                      <svg class="w-5 h-5 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                    <div class="relative">
                      <input 
                        type="text" 
                        value="789"
                        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        disabled
                      >
                      <svg class="w-5 h-5 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
  
                <div class="flex items-center gap-2">
                  <input type="checkbox" id="save-card" class="rounded text-primary focus:ring-primary" checked>
                  <label for="save-card" class="text-sm text-gray-600">Save details for next time</label>
                </div>
  
                <button class="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                  </svg>
                  Pay $ 99.00
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    /* Root variables */
    :root {
      --primary: #605bff;
      --title-color: #32325d;
    }

    /* Animation keyframes */
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Add the new float-slow animation */
    @keyframes float-slow {
      0%, 100% { 
        transform: translate(0, 0) rotate(0deg) scale(1); 
      }
      25% { 
        transform: translate(2%, 2%) rotate(1deg) scale(1.02); 
      }
      50% { 
        transform: translate(-1%, 3%) rotate(-1deg) scale(0.98); 
      }
      75% { 
        transform: translate(-2%, -1%) rotate(0.5deg) scale(1.01); 
      }
    }

    .animate-float-slow {
      animation: float-slow 20s ease-in-out infinite;
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

    /* Color utilities */
    .bg-primary\/10 {
      background-color: rgb(96 91 255 / 0.1);
    }

    /* Global styles */
    :global(.gradient-animate) {
      background-size: 200% 200%;
      animation: gradient 15s ease infinite;
    }

    /* Input styles */
    input[type="checkbox"] {
      accent-color: var(--primary);
    }
    
    input:disabled {
      background-color: white;
      color: #0f172a;
    }

    /* Container styles */
    .container {
      max-width: 1280px;
    }

    /* Text and background utilities */
    .text-primary {
      color: var(--primary);
    }

    .bg-primary {
      background-color: var(--primary);
    }

    /* Hover and focus states */
    .hover\:bg-primary\/90:hover {
      background-color: rgb(96 91 255 / 0.9);
    }

    .focus\:ring-primary\/20:focus {
      --tw-ring-color: rgb(96 91 255 / 0.2);
    }

    .focus\:border-primary:focus {
      border-color: var(--primary);
    }

    .hover\:grayscale-0:hover {
      filter: grayscale(0);
    }

    .text-title {
      color: var(--title-color);
    }

    /* Add smooth transitions */
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }

    /* Add hover animations */
    .group:hover .group-hover\:scale-110 {
      transform: scale(1.1);
    }

    .group:hover .group-hover\:translate-x-1 {
      transform: translateX(0.25rem);
    }
  </style>

<section class="py-16 md:py-24 bg-gradient-to-b from-white via-[#fafafa]/50 to-white relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Trusted By Section -->
      <div class="mb-16 text-center">
        <p class="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          <img src="/images/brands/uber.png" alt="Company logo" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
          <img src="/images/brands/booking.png" alt="Company logo" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
          <img src="/images/brands/G-pay.png" alt="Company logo" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
          <img src="/images/brands/A-pay.png" alt="Company logo" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
          <img src="/images/brands/Shopy.png" alt="Company logo" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
          <img src="/images/brands/woocommerce.png" alt="Company logo" class="h-6 grayscale hover:grayscale-0 transition-all duration-200">
        </div>
      </div>
  
      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Full-funnel conversion -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[#0f172a] mb-3">Full-funnel conversion</h3>
          <p class="text-gray-600">
            Avoid drop-off at checkout by offering elite payments experiences and local payment methods to customers.
          </p>
        </div>
  
        <!-- Reduce overhead -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[#0f172a] mb-3">Reduce overhead</h3>
          <p class="text-gray-600">
            Save time and resources. Connect to our API and get access to our complete payments solution.
          </p>
        </div>
  
        <!-- Increase authorization rates -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[#0f172a] mb-3">Increase authorization rates</h3>
          <p class="text-gray-600">
            Guard against failed transactions and fraud by leveraging our machine learning optimizations.
          </p>
        </div>
      </div>
    </div>
  </section>

<!-- Payment Services Section -->
<section class="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa]/80 to-white">
  <!-- Enhanced Background -->
  <div class="absolute inset-0">
    <!-- Subtle grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;">
    </div>
    <!-- Floating gradients -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <!-- Floating Payment Elements -->
    <div class="relative mb-16">
      <!-- Payment Form Demo -->
      <div class="absolute left-0 top-0 w-[400px] bg-white rounded-2xl shadow-xl transform -rotate-12 translate-x-12">
        <div class="p-6">
          <!-- Product Preview -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-20 h-20 bg-[#FFB84C] rounded-lg"></div>
            <div>
              <h4 class="font-medium text-gray-900">Modern Chair</h4>
              <p class="text-sm text-gray-600">Comfort Design</p>
            </div>
          </div>
          
          <!-- Payment Form -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Card number</label>
              <input 
                type="text" 
                value="•••• •••• •••• 6745"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50"
                disabled
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                <input 
                  type="text" 
                  value="12/24"
                  class="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50"
                  disabled
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                <input 
                  type="text" 
                  value="789"
                  class="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50"
                  disabled
                />
              </div>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="mt-6 space-y-3">
            <div class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <div class="w-8 h-8 bg-[#DE1D8D] rounded-md flex items-center justify-center text-white text-sm font-medium">
                iD
              </div>
              <span class="text-sm font-medium">iDEAL</span>
            </div>
            <div class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <div class="w-8 h-8 bg-[#00457C] rounded-md flex items-center justify-center text-white text-sm font-medium">
                PP
              </div>
              <span class="text-sm font-medium">PayPal</span>
            </div>
            <div class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <div class="w-8 h-8 bg-[#07C160] rounded-md flex items-center justify-center text-white text-sm font-medium">
                W
              </div>
              <span class="text-sm font-medium">WeChat Pay</span>
            </div>
          </div>
        </div>
      </div>

      <!-- QR Code Demo -->
      <div class="absolute right-0 bottom-0 w-[300px] bg-white rounded-2xl shadow-xl transform rotate-6 translate-x-24">
        <div class="p-6">
          <div class="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
            <div class="w-3/4 h-3/4 grid grid-cols-4 gap-1">
              {#each Array(16) as _}
                <div class="bg-white"></div>
              {/each}
            </div>
          </div>
          <div class="mt-4 text-center">
            <p class="font-medium">$4,500.00</p>
            <p class="text-sm text-gray-600">Scan to pay</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-3xl">
      <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #32325d">
        Our online payments services
      </h2>
      <p class="text-lg text-gray-600 mb-12">
        Let your customers pay with their favorite method via web, in-app, or with recurring payments.
      </p>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Website Payments -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2" style="color: #32325d">Website payments</h3>
          <p class="text-gray-600 mb-4">In-browser payments for web and mobile.</p>
          <a href="/payments/website" class="text-[#605bff] font-medium hover:text-[#4f4cce] inline-flex items-center gap-1">
            Learn more
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- In-app Payments -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2" style="color: #32325d">In-app payments</h3>
          <p class="text-gray-600 mb-4">Native mobile payment experiences.</p>
          <a href="/payments/in-app" class="text-[#605bff] font-medium hover:text-[#4f4cce] inline-flex items-center gap-1">
            Learn more
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Online Subscriptions -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2" style="color: #32325d">Online subscriptions</h3>
          <p class="text-gray-600 mb-4">One-click payments and recurring billing.</p>
          <a href="/payments/subscriptions" class="text-[#605bff] font-medium hover:text-[#4f4cce] inline-flex items-center gap-1">
            Learn more
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Online Subscriptions Section -->
<section class="py-32 relative overflow-hidden">
  <!-- Modern Background with Layered Effects -->
  <div class="absolute inset-0">
    <!-- Modern gradient base -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4ff]"></div>
    
    <!-- Mesh gradient overlay -->
    <div class="absolute inset-0 opacity-40"
         style="background: radial-gradient(circle at top right, #605bff08, transparent 50%),
                          radial-gradient(circle at bottom left, #32325d05, transparent 50%);">
    </div>

    <!-- Subtle modern grid -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: center center;">
    </div>

    <!-- Modern floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Glass morphism effect -->
      <div class="absolute top-20 right-20 w-96 h-96 
                  bg-gradient-to-br from-white/10 to-[#605bff]/5 
                  backdrop-blur-3xl rounded-full 
                  animate-float-slow"
           style="animation-duration: 18s;">
      </div>

      <!-- Modern accent blobs -->
      <div class="absolute bottom-40 left-20 w-80 h-80 
                  bg-gradient-to-tr from-[#605bff]/10 via-[#32325d]/5 to-transparent 
                  blur-3xl rounded-full animate-float-slow opacity-60"
           style="animation-duration: 22s; animation-delay: -5s;">
      </div>

      <!-- Light streaks -->
      <div class="absolute top-1/3 left-1/4 w-full h-px 
                  bg-gradient-to-r from-transparent via-[#605bff]/10 to-transparent 
                  rotate-45 blur-sm">
      </div>
    </div>

    <!-- Noise texture overlay -->
    <div class="absolute inset-0 opacity-[0.015]"
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E');">
    </div>
  </div>

  <!-- Your existing content remains unchanged -->
  <div class="container relative z-10">
    <!-- ... existing content ... -->
  </div>
</section>