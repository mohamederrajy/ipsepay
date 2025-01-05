<section class="relative overflow-hidden bg-white py-20">
    <!-- Simplified Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.1]"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white"></div>
    </div>
  
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div>
          <!-- Logo Badge -->
          <div class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
            <div class="w-5 h-5 bg-[#605bff] rounded flex items-center justify-center">
              <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-[#605bff]">Checkout</span>
          </div>
          
          <!-- Heading -->
          <h1 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
            We built Checkout<br/>
            <span class="text-[#605bff]">so you don't have to</span>
          </h1>
  
          <!-- Description -->
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            ipsepay Checkout is a prebuilt payment form optimized for conversion. Embed Checkout into your website or direct customers to a Stripe-hosted page to easily and securely accept one-time payments or subscriptions.
          </p>
  
          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <a href="/start" 
               class="inline-flex items-center px-6 py-3.5 rounded-xl bg-[#605bff] text-white font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
              Start now
              <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <a href="/demo" 
               class="inline-flex items-center px-6 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-medium transition-all hover:border-[#605bff] hover:text-[#605bff]">
              Try the demo
            </a>
          </div>
        </div>
  
        <!-- Right Content - Checkout Demo -->
        <div class="relative max-w-[640px]">
          <!-- Background Glow Effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/20 to-[#605bff]/5 rounded-3xl blur-xl opacity-50"></div>
          
          <!-- Checkout Window -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <!-- Header -->
            <div class="flex items-center justify-between px-4 py-3 bg-[#605bff]/5 border-b border-[#605bff]/10">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="text-sm font-medium text-[#605bff]">ipsepay.com</span>
            </div>
  
            <!-- Content -->
            <div class="p-6">
              <div class="grid grid-cols-2 gap-8">
                <!-- Left Column -->
                <div class="space-y-6">
                  <!-- Brand Header -->
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#605bff] rounded-xl flex items-center justify-center">
                      <span class="text-white font-medium text-lg">i</span>
                    </div>
                    <span class="font-medium text-[#32325d] text-lg">ipsepay</span>
                  </div>
  
                  <!-- Product Info -->
                  <div>
                    <h3 class="text-xl font-medium text-[#32325d] mb-2">Pure set</h3>
                    <div class="text-3xl font-semibold text-[#605bff]">$65.00</div>
                  </div>
  
                  <!-- Product Image -->
                  <div class="bg-[#605bff]/5 rounded-xl p-4">
                    <img src="/images/photos/tshrt.jpg" alt="Pure Set" class="w-full h-auto"/>
                  </div>
                </div>
  
                <!-- Right Column -->
                <div class="space-y-4">
                  <!-- Payment Options -->
                  <div class="space-y-3">
                    <button class="w-full py-3 px-4 bg-[#605bff] text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.72,11.62h-8.51a.6.6,0,0,0,0,1.2h8.51a.6.6,0,0,0,0-1.2"/>
                      </svg>
                      Pay with Apple Pay
                    </button>
  
                    <button class="w-full py-3 px-4 bg-[#00D632] text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-[#00D632]/90 hover:shadow-lg hover:shadow-[#00D632]/20">
                      Pay with <span class="font-semibold">Link</span>
                    </button>
  
                    <div class="relative text-center">
                      <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-200"></div>
                      </div>
                      <div class="relative">
                        <span class="px-4 text-sm text-gray-500 bg-white">Or pay another way</span>
                      </div>
                    </div>
                  </div>
  
                  <!-- Payment Form -->
                  <div class="space-y-3">
                    <div>
                      <label class="block text-sm font-medium text-[#32325d] mb-1">Email</label>
                      <input type="email" 
                             placeholder="jane.diaz@example.com"
                             class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all placeholder:text-gray-400 text-sm"/>
                    </div>
  
                    <div>
                      <label class="block text-sm font-medium text-[#32325d] mb-1">Card information</label>
                      <div class="relative">
                        <input type="text" 
                               placeholder="1234 1234 1234 1234"
                               class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all placeholder:text-gray-400 text-sm"/>
                        
                      </div>
                      <div class="grid grid-cols-2 gap-3 mt-3">
                        <input type="text" 
                               placeholder="MM / YY"
                               class="px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all placeholder:text-gray-400 text-sm"/>
                        <div class="relative">
                          <input type="text" 
                                 placeholder="CVC"
                                 class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all placeholder:text-gray-400 text-sm"/>
                          
                        </div>
                      </div>
                    </div>
  
                    <!-- Pay Button -->
                    <button class="w-full py-3 px-4 bg-[#605bff] text-white rounded-xl font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
                      Pay $65.00
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Powered by Stripe -->
              <div class="flex items-center justify-between text-sm text-gray-500 pt-4 mt-4 border-t border-gray-100">
                <span>Powered by ipsepay</span>
                <svg class="h-4" viewBox="0 0 60 25" fill="currentColor">
                  <path d="M59.64 14.28h-8.06v-1.83h8.06v1.83zm-8.06-4.84h8.06v1.83h-8.06V9.44zm0-4.84h8.06v1.83h-8.06V4.6zm-45.45 1.83h-3.34V4.6h3.34v1.83z"/>
                </svg>
                <div class="flex gap-4">
                  <a href="#" class="hover:text-[#605bff] transition-colors">Terms</a>
                  <a href="#" class="hover:text-[#605bff] transition-colors">Privacy</a>
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
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.1]"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white"></div>
    </div>
  
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
            <span class="text-sm font-medium text-[#605bff]">Conversion</span>
          </div>
          
          <!-- Heading -->
          <h1 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
            Increase sales with a<br/>
            better payments<br/>
            experience
          </h1>
  
          <!-- Description -->
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            We obsess over every detail of the checkout page—from its load time to the smallest animation. By using Checkout, you have a team of Stripe engineers and designers working continually to increase sales on your behalf.
          </p>
        </div>
  
        <!-- Right Content - Payment Form Demo -->
        <div class="relative max-w-[480px]">
          <!-- Background Glow Effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/20 to-[#605bff]/5 rounded-3xl blur-xl opacity-50"></div>
          
          <!-- Payment Form Window -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-6 space-y-4">
            <!-- Form Fields -->
            <div>
              <label class="block text-sm font-medium text-[#32325d] mb-1">Email</label>
              <input type="email" 
                     value="jane.diaz@example.com"
                     class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all text-sm"/>
            </div>
  
            <div>
              <label class="block text-sm font-medium text-[#32325d] mb-1">Card information</label>
              <div class="relative">
                <input type="text" 
                       value="4242 4242 4242 4242"
                       class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all text-sm"/>
                <div class="absolute right-3 top-1/2 -translate-y-1/2">
                  <img src="/images/visa.svg" alt="Visa" class="h-4"/>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 mt-3">
                <input type="text" 
                       value="12/24"
                       class="px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all text-sm"/>
                <div class="relative">
                  <input type="text" 
                         value="123"
                         class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all text-sm"/>
                  <div class="absolute right-3 top-1/2 -translate-y-1/2">
                    <img src="/images/cvc-hint.svg" alt="CVC" class="h-4 opacity-50"/>
                  </div>
                </div>
              </div>
            </div>
  
            <div>
              <label class="block text-sm font-medium text-[#32325d] mb-1">Name on card</label>
              <input type="text" 
                     value="Jane Diaz"
                     class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all text-sm"/>
            </div>
  
            <div>
              <label class="block text-sm font-medium text-[#32325d] mb-1">Country or region</label>
              <div class="relative">
                <select class="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all appearance-none bg-white text-sm">
                  <option>United States</option>
                </select>
                <div class="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
              <input type="text" 
                     value="97712"
                     class="w-full px-3 py-2.5 mt-3 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring-2 focus:ring-[#605bff]/20 outline-none transition-all text-sm"/>
            </div>
  
            <!-- Pay Button -->
            <button class="w-full py-3 px-4 bg-[#0A2540] text-white rounded-xl font-medium transition-all hover:bg-[#0A2540]/90">
              Pay $65.00
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>