<script lang="ts">
    import {page} from "$app/stores";
    $: routeTd = $page.route.id;
  </script>
  
  <section class="py-16 md:py-24 relative overflow-hidden pb-20 border-b border-gray-200">
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

<section class="py-16 md:py-24 bg-white">
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
<section class="py-16 md:py-24 relative overflow-hidden">
  <!-- Enhanced Background -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#605bff]/5 via-white to-white">
    <!-- Decorative Grid -->
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    
    <!-- Gradient Blobs -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/10 rounded-full filter blur-3xl animate-blob"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
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

<!-- Payment Services Section -->
<!-- Payment Services Section -->
<section class="py-24 bg-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.1]"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
    </div>
  
    <div class="container relative z-10">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Our online payments services
        </h2>
        <p class="text-xl text-gray-600">
          Let your customers pay with their favorite method via web, in-app, or with recurring payments.
        </p>
      </div>
  
      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-12 mb-32">
        <!-- Website payments -->
        <div class="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70">
          <div class="w-14 h-14 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-4 group-hover:text-[#605bff] transition-colors">
            Website payments
          </h3>
          <p class="text-gray-600 mb-6">
            In-browser payments for web and mobile.
          </p>
          <a href="/payments/website" class="inline-flex items-center text-[#605bff] font-medium group-hover:opacity-80">
            Learn more
            <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
  
        <!-- In-app payments -->
        <div class="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70">
          <div class="w-14 h-14 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-4 group-hover:text-[#605bff] transition-colors">
            In-app payments
          </h3>
          <p class="text-gray-600 mb-6">
            Native mobile payment experiences.
          </p>
          <a href="/payments/in-app" class="inline-flex items-center text-[#605bff] font-medium group-hover:opacity-80">
            Learn more
            <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
  
        <!-- Online subscriptions -->
        <div class="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70">
          <div class="w-14 h-14 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-4 group-hover:text-[#605bff] transition-colors">
            Online subscriptions
          </h3>
          <p class="text-gray-600 mb-6">
            One-click payments and recurring billing.
          </p>
          <a href="/payments/subscriptions" class="inline-flex items-center text-[#605bff] font-medium group-hover:opacity-80">
            Learn more
            <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
  
      <!-- Payment Methods Section -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Get first access to local payment methods globally
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Accept all major payment methods with a single integration. Support credit cards, digital wallets, and more.
        </p>
        <a href="/payment-methods" class="inline-flex items-center px-6 py-3 rounded-xl bg-[#605bff] text-white font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
          Discover payment methods
          <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
  
      <!-- Payment Methods Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {#each [
          { name: 'Visa', bg: 'bg-[#1A1F71]/10', logo: 'vss.png', color: '#1A1F71' },
          { name: 'Mastercard', bg: 'bg-[#EB001B]/10', logo: 'mscrad.png', color: '#EB001B' },
          { name: 'Apple Pay', bg: 'bg-[#000000]/10', logo: 'A-pay.png', color: '#000000' },
          { name: 'Google Pay', bg: 'bg-[#4285F4]/10', logo: 'G-pay.png', color: '#4285F4' }
        ] as method}
          <div class="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/70">
            <div class="{method.bg} p-8 aspect-square flex items-center justify-center transition-all duration-300">
              <img 
                src="/images/brands/{method.logo}" 
                alt="{method.name}" 
                class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              >
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

<!-- Add-ons Section -->
<section class="py-32 bg-white relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.15]"></div>
    <div class="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-[#605bff]/10 to-[#2EC5CE]/5 rounded-full filter blur-[106px] -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-[#605bff]/5 to-[#FF6B6B]/5 rounded-full filter blur-[106px] translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div class="container relative z-10">
    <!-- Features Section -->
    <div class="mb-40">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-24">
        <span class="text-[#605bff] font-semibold mb-4 block">PAYMENT ADD-ONS</span>
        <h2 class="text-[3.5rem] font-medium text-[#32325d] leading-[1.1] mb-8">
          Optimize payments with our add-ons
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Increase conversion, protect your business from fraud, and let customers donate at checkout. All through a single API.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {#each [
          {
            title: "Seamless authentication",
            description: "Create a safe and seamless experience with delegated authentication.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            link: "/authentication",
            gradient: "from-[#605bff]/8 via-[#2EC5CE]/8 to-white"
          },
          {
            title: "Revenue optimization",
            description: "Use machine learning to boost authorization and conversion rates.",
            icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            link: "/revenue",
            gradient: "from-[#605bff]/8 via-[#FF6B6B]/8 to-white"
          },
          {
            title: "Risk management",
            description: "Customize your risk setup and detect, prevent, and respond to fraud.",
            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            link: "/risk",
            gradient: "from-[#605bff]/8 via-[#FFB86C]/8 to-white"
          },
          {
            title: "Donate at checkout",
            description: "Make it easy for your customers to support good causes at checkout.",
            icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            link: "/donate",
            gradient: "from-[#605bff]/8 via-[#A8FF98]/8 to-white"
          }
        ] as feature}
          <div class="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br {feature.gradient} hover:shadow-2xl hover:shadow-[#605bff]/10 border border-gray-100">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#605bff]/5 group-hover:scale-110 transition-transform duration-500">
              <svg class="w-8 h-8 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon}/>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-[#32325d] mb-4 group-hover:text-[#605bff] transition-colors duration-300">
              {feature.title}
            </h3>
            <p class="text-gray-600 mb-8 text-base leading-relaxed">
              {feature.description}
            </p>
            <a href={feature.link} class="inline-flex items-center text-[#605bff] font-medium group-hover:opacity-80">
              Learn more
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        {/each}
      </div>
    </div>

    <!-- Integration Section -->
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <!-- Content -->
        <div class="lg:w-1/2">
          <span class="text-[#605bff] font-semibold mb-4 block">INTEGRATION OPTIONS</span>
          <h2 class="text-[3.5rem] font-medium text-[#32325d] leading-[1.1] mb-8">
            Integrate IpsePay into your payments flow
          </h2>
          <p class="text-xl text-gray-600 mb-16 leading-relaxed">
            Getting started with effortless online payments is easy. One back-end integration offers multiple implementation options. Discover what's right for you.
          </p>

          <!-- Integration Options -->
          <div class="grid gap-8">
            {#each [
              {
                title: "Drop-in",
                description: "Accept online payments with our out-of-the-box solution and pre-built user interface."
              },
              {
                title: "Components",
                description: "Use your UI with our pre-built components for a semi-customizable checkout."
              },
              {
                title: "API-only",
                description: "Create a fully customized checkout by building the checkout from scratch."
              },
              {
                title: "Partners",
                description: "Get access to our easy payments solution through any of our 34+ partners."
              }
            ] as option}
              <div class="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 hover:shadow-xl hover:shadow-[#605bff]/5 transition-all duration-300 border border-gray-100">
                <h3 class="text-xl font-semibold text-[#32325d] mb-3 group-hover:text-[#605bff] transition-colors">
                  {option.title}
                </h3>
                <p class="text-gray-600 text-base leading-relaxed">{option.description}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- Image -->
        <div class="lg:w-1/2">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#605bff]/10">
            <img 
              src="/images/photos/reails.jpg" 
              alt="Integration team working" 
              class="w-full object-cover transform hover:scale-105 transition-transform duration-700"
            >
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-tr from-[#605bff]/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>