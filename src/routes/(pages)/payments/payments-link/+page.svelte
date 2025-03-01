<section class="relative overflow-hidden bg-white py-20">
  <!-- Simplified Background Elements -->
  <div class="absolute inset-0">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.1]"></div>
    
    <!-- Simplified, more subtle blobs -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
    
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white"></div>
  </div>

  <div class="container relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div>
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
          <span class="text-sm font-medium text-[#605bff]">Payment Links</span>
          <div class="w-1.5 h-1.5 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        
        <!-- Heading -->
        <h1 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Make any channel your checkout
        </h1>

        <!-- Subheading -->
        <p class="text-xl text-gray-600 mb-8">
          Shift from conversation to payment in an instant. Send your customers links over email, SMS, social media, and messaging apps to enable speedy, convenient payments – with no code required.
        </p>

        <!-- CTA Buttons -->
        <div class="flex gap-4">
          <a href="/contact" 
             class="group inline-flex items-center px-6 py-3.5 rounded-xl bg-[#605bff] text-white font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
            Get in touch
          </a>
          <a href="/documentation" 
             class="group inline-flex items-center px-6 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-medium transition-all hover:border-[#605bff] hover:text-[#605bff]">
            See documentation
            <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Share Methods -->
        <div class="mt-16">
          <p class="text-sm text-gray-500 mb-6">Share payment links through</p>
          <div class="flex flex-wrap items-center gap-x-12 gap-y-6">
            {#each ['email', 'sms', 'whatsapp', 'messenger'] as method}
              <div class="flex items-center gap-2 text-gray-600">
                <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {#if method === 'email'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    {:else if method === 'sms'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    {:else if method === 'whatsapp'}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18v.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    {:else}
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    {/if}
                  </svg>
                </div>
                <span class="text-sm font-medium capitalize">{method}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Content - Payment Demo -->
      <div class="relative">
        <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl bg-white">
          <!-- Chat Header -->
          <div class="bg-[#1E1E1E] p-4 flex items-center justify-between">
            <span class="text-white/80 text-sm font-medium">Support Chat</span>
            <div class="flex gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
          </div>

          <div class="p-6 space-y-6">
            <!-- Chat Message -->
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <div class="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                  <p class="text-gray-600 mb-3">Of course we can help!</p>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <div class="flex items-center gap-4 mb-3">
                      <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <div class="h-2 w-24 bg-gray-200 rounded-full"></div>
                        <div class="h-2 w-16 bg-gray-200 rounded-full mt-2"></div>
                      </div>
                    </div>
                    <div class="text-[#605bff] text-sm font-medium">pay.checkout.com/RTRSilud-jlY</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Form -->
            <div class="bg-gradient-to-b from-gray-50/50 to-white rounded-xl p-8 shadow-lg shadow-gray-200/50">
              <!-- Product Info -->
              <div class="flex items-center gap-4 pb-6 mb-6 border-b border-gray-100">
                <div class="w-16 h-16 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-[#32325d] font-medium mb-1">Premium Package</h3>
                  <div class="text-sm text-gray-500">Order #RTRSilud-jlY</div>
                </div>
                <div class="text-xl font-medium text-[#32325d]">$149.00</div>
              </div>

              <!-- Card Input Section -->
              <div class="space-y-6">
                <!-- Card Number Section -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Card Information</label>
                  <div class="relative group">
                    <input 
                      type="text" 
                      placeholder="1234 1234 1234 1234" 
                      class="w-full h-12 pl-12 pr-36 rounded-xl border border-gray-200 group-hover:border-[#605bff] focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 transition-all outline-none bg-white"
                    >
                    <div class="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg class="w-5 h-5 text-gray-400 group-hover:text-[#605bff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                    </div>
                    <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                     
                    </div>
                  </div>
                </div>

                <!-- Expiry and CVC -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <div class="relative group">
                      <input 
                        type="text" 
                        placeholder="MM / YY" 
                        class="w-full h-12 pl-12 rounded-xl border border-gray-200 group-hover:border-[#605bff] focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 transition-all outline-none bg-white"
                      >
                      <div class="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-[#605bff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                    <div class="relative group">
                      <input 
                        type="text" 
                        placeholder="CVC" 
                        class="w-full h-12 pl-12 rounded-xl border border-gray-200 group-hover:border-[#605bff] focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 transition-all outline-none bg-white"
                      >
                      <div class="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-[#605bff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pay Button -->
                <button class="w-full h-12 bg-[#605bff] text-white rounded-xl font-medium hover:bg-[#605bff]/90 transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-[#605bff]/20">
                  <span>Pay $149.00</span>
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>

                <!-- Secure Badge -->
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <span>Secured by ipsepay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Streamline Payment Experience Section -->
<section class="py-16 md:py-24 relative overflow-hidden">
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
  </div>

  <div class="container relative z-10">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-20">
      <div class="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
        <span class="text-sm font-medium text-[#605bff]">Payment Links Features</span>
        <div class="w-1.5 h-1.5 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
      </div>
      
      <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
        Streamline your payment experience
      </h2>
      
      <p class="text-xl text-gray-600">
        Enhance your business with powerful features designed to boost conversions and delight customers
      </p>
    </div>

    <!-- Feature Cards Grid -->
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Boost conversions -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 rounded-3xl blur-xl transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
        <div class="relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#605bff]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#605bff]/10">
          <!-- Icon -->
          <div class="w-12 h-12 mb-8 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-medium text-[#32325d] mb-4">
            Boost conversions
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Elevate performance with smart optimizations, recover cart abandonment, and reclaim lost sales.
          </p>
        </div>
      </div>

      <!-- Delight every customer -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 rounded-3xl blur-xl transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
        <div class="relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#605bff]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#605bff]/10">
          <!-- Icon -->
          <div class="w-12 h-12 mb-8 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
            </svg>
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-medium text-[#32325d] mb-4">
            Delight every customer
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Reduce checkout friction, support over 20 languages, and customize the payment page to match your look and feel.
          </p>
        </div>
      </div>

      <!-- Get paid faster -->
      <div class="group relative">
        <div class="absolute -inset-2 bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 rounded-3xl blur-xl transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
        <div class="relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#605bff]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#605bff]/10">
          <!-- Icon -->
          <div class="w-12 h-12 mb-8 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-medium text-[#32325d] mb-4">
            Get paid faster
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Empower your team to create Payment Links in just a few clicks – directly from the Dashboard, with no code.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

<section class="py-16 md:py-24">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
          <span class="text-sm font-medium text-[#605bff]">How it works</span>
          <div class="w-1.5 h-1.5 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        
        <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Accept payments in minutes, without a line of code
        </h2>
      </div>
  
      <!-- Steps Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Steps List -->
        <div class="space-y-12">
          <!-- Step 1 -->
          <div class="relative">
            <div class="flex items-start gap-6">
              <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-medium text-[#605bff]">1</span>
              </div>
              <div>
                <h3 class="text-xl font-medium text-[#32325d] mb-3">Create a link</h3>
                <p class="text-gray-600 leading-relaxed">
                  You can use Payment Links to sell a product or service, start a subscription, or collect a donation. Match the look and feel of your brand by adding your logo and colors.
                </p>
              </div>
            </div>
          </div>
  
          <!-- Step 2 -->
          <div class="relative">
            <div class="flex items-start gap-6">
              <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-medium text-[#605bff]">2</span>
              </div>
              <div>
                <h3 class="text-xl font-medium text-[#32325d] mb-3">Share the link</h3>
                <p class="text-gray-600 leading-relaxed">
                  Paste or embed the link anywhere. The same payment link can be shared with many customers and used across multiple channels.
                </p>
              </div>
            </div>
          </div>
  
          <!-- Step 3 -->
          <div class="relative">
            <div class="flex items-start gap-6">
              <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-medium text-[#605bff]">3</span>
              </div>
              <div>
                <h3 class="text-xl font-medium text-[#32325d] mb-3">Get paid</h3>
                <p class="text-gray-600 leading-relaxed">
                  Use the Dashboard or email to be notified of a successful payment, and have the funds deposited into your bank account.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right: Enhanced Demo -->
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-br from-[#605bff]/5 to-purple-100/20 rounded-3xl"></div>
          <div class="relative space-y-6">
            <!-- Chat/Message Demo -->
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02]">
              <!-- Chat Header -->
              <div class="bg-[#1E1E1E] p-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-[#605bff]"></div>
                  <span class="text-white/90 text-sm font-medium">Payment Chat</span>
                </div>
                <div class="flex gap-2">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <!-- Chat Content -->
              <div class="p-6">
                <div class="flex gap-4 mb-6">
                  <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex-shrink-0 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <div class="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p class="text-gray-600">Here's your payment link for the Premium Package 🚀</p>
                  </div>
                </div>

                <!-- Payment Card Preview -->
                <div class="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-[#32325d] font-medium">Premium Package</h4>
                      <div class="flex items-center gap-2">
                        <span class="text-2xl font-medium text-[#32325d]">$149.00</span>
                        <span class="text-sm text-gray-500">one-time</span>
                      </div>
                    </div>
                  </div>
                  <button class="w-full bg-[#605bff] text-white rounded-lg py-3 font-medium hover:bg-[#605bff]/90 transition-all flex items-center justify-center gap-2 group">
                    Pay now
                    <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Social Share Preview -->
            <div class="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.02]">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-3">
                    <h4 class="text-[#32325d] font-medium">Share anywhere</h4>
                    <span class="px-2 py-1 rounded-full bg-[#605bff]/10 text-[#605bff] text-xs font-medium">New</span>
                  </div>
                  <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                        <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                        <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                      </div>
                      <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                        <svg class="w-4 h-4 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100">
                      <span class="text-[#605bff] text-sm font-medium">pay.ipsepay.com/premium-pkg</span>
                      <button class="text-gray-400 hover:text-[#605bff] transition-colors">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- QR Code Preview -->
            <div class="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.02]">
              <div class="flex items-center justify-between">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <h4 class="text-[#32325d] font-medium">Quick Scan & Pay</h4>
                    <span class="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-xs font-medium">Active</span>
                  </div>
                  <div class="flex items-baseline gap-2">
                    <span class="text-2xl font-medium text-[#32325d]">$19.99</span>
                    <span class="text-sm text-gray-500">per item</span>
                  </div>
                </div>
                <div class="relative group">
                  <div class="w-24 h-24 bg-[#605bff]/5 rounded-xl flex items-center justify-center border-2 border-dashed border-[#605bff]/20 group-hover:border-[#605bff]/40 transition-colors">
                    <svg class="w-12 h-12 text-[#605bff]/40 group-hover:text-[#605bff]/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div class="absolute -bottom-1 -right-1">
                    <div class="w-6 h-6 rounded-full bg-[#605bff] text-white flex items-center justify-center shadow-lg">
                      <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
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

 
  <section class="relative overflow-hidden bg-white py-20">
    <!-- Simplified Background Elements -->
    <div class="absolute inset-0">
      <!-- Subtle grid background -->
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.1]"></div>
      
      <!-- Simplified, more subtle blobs -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      
      <!-- Subtle gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white"></div>
    </div>
  
    <div class="container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
          <span class="text-sm font-medium text-[#605bff]">Channel Features</span>
          <div class="w-1.5 h-1.5 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        
        <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          From any channel to your own branded checkout
        </h2>
      </div>
  
      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- SMS and email -->
        <div class="group relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 rounded-3xl blur-xl transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
          <div class="relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#605bff]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#605bff]/10">
            <div class="w-12 h-12 mb-8 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-[#32325d] mb-4">SMS and email</h3>
            <p class="text-gray-600 leading-relaxed">
              Embed links within your text messages and emails to accept instant payments.
            </p>
          </div>
        </div>
  
        <!-- Repeat the same pattern for other features -->
        {#each ['Social media', 'Support calls', 'Invoices', 'QR codes', 'In-person payments'] as feature, i}
          <div class="group relative">
            <div class="absolute -inset-2 bg-gradient-to-r from-[#605bff]/10 to-[#605bff]/5 rounded-3xl blur-xl transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
            <div class="relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#605bff]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#605bff]/10">
              <div class="w-12 h-12 mb-8 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {#if feature === 'Social media'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  {:else if feature === 'Support calls'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  {:else if feature === 'Invoices'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  {:else if feature === 'QR codes'}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                  {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                  {/if}
                </svg>
              </div>
              <h3 class="text-xl font-medium text-[#32325d] mb-4">{feature}</h3>
              <p class="text-gray-600 leading-relaxed">
                {#if feature === 'Social media'}
                  Reduce friction by embedding payment links in your social media messages.
                {:else if feature === 'Support calls'}
                  Send customers a link during support calls to instantly take secure, seamless payments.
                {:else if feature === 'Invoices'}
                  Add payment links to your invoices for fast, secure B2B payments.
                {:else if feature === 'QR codes'}
                  Generate QR codes to help your customers pay quickly and easily.
                {:else}
                  Create and share links or QR codes with customers for flexible in-person payments.
                {/if}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>