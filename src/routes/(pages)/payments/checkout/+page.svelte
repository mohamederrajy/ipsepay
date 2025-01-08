<section class="relative overflow-hidden bg-white py-20">
  <!-- Enhanced Background -->
  <div class="absolute inset-0">
    <!-- Professional Gradient Base -->
    <div class="absolute inset-0 bg-gradient-to-tr from-[#f8f9ff] via-white to-[#f0f4ff]"></div>
    
    <!-- Strategic Light Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full
                  bg-[radial-gradient(70%_50%_at_50%_0%,rgba(96,91,255,0.06)_0%,transparent_100%)]"></div>
      <div class="absolute top-20 right-[20%] w-[600px] h-[600px]
                  bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_60%)]
                  animate-pulse-slow"></div>
    </div>

    <!-- Modern Geometric Patterns -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: repeating-linear-gradient(-45deg,#605bff 0px,#605bff 1px,transparent 1px,transparent 40px);"></div>
      <div class="absolute inset-0 opacity-[0.02]"
           style="background-image: repeating-linear-gradient(0deg,#605bff 0px,#605bff 1px,transparent 1px,transparent 80px);"></div>
    </div>
  </div>

  <div class="container relative z-10">
    <!-- First Section -->
    <div class="grid lg:grid-cols-2 gap-16 items-center mb-32">
      <!-- Left Content -->
      <div>
        <!-- Refined Badge -->
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-white/80 backdrop-blur-sm border border-[#605bff]/10 
                    shadow-sm hover:shadow transition-all duration-500 mb-8">
          <div class="flex items-center gap-2">
            <div class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#605bff]/40"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#605bff]/60"></span>
            </div>
            <span class="text-sm font-normal text-[#32325d]/70 tracking-wide">Checkout</span>
          </div>
        </div>
        
        <!-- Heading -->
        <h1 class="text-[2.75rem] font-normal text-[#32325d] leading-[1.2] mb-6">
          We built Checkout<br/>
          <span class="text-[#605bff]">so you don't have to</span>
        </h1>

        <!-- Description -->
        <p class="text-lg text-[#32325d]/70 mb-8 leading-relaxed">
          ipsepay Checkout is a prebuilt payment form optimized for conversion. Embed Checkout into your website or direct customers to a Stripe-hosted page to easily and securely accept one-time payments or subscriptions.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <a href="/start" 
             class="inline-flex items-center px-6 py-3 rounded-xl bg-[#605bff] text-white font-normal
                    shadow-sm hover:shadow-lg hover:shadow-[#605bff]/20 transition-all duration-300">
            Start now
            <svg class="w-4 h-4 ml-2 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
          <a href="/demo" 
             class="inline-flex items-center px-6 py-3 rounded-xl border border-[#605bff]/10 
                    text-[#32325d]/70 font-normal hover:text-[#605bff] transition-all duration-300">
            Try the demo
          </a>
        </div>
      </div>

      <!-- Right Content - Checkout Demo -->
      <div class="relative max-w-[640px]">
        <!-- Background Glow Effect -->
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/20 to-[#605bff]/5 rounded-3xl blur-xl opacity-50"></div>
        
        <!-- Checkout Window -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50">
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
              <div class="flex gap-4">
                <a href="#" class="hover:text-[#605bff] transition-colors">Terms</a>
                <a href="#" class="hover:text-[#605bff] transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div>
        <!-- Refined Badge -->
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-white/80 backdrop-blur-sm border border-[#605bff]/10 
                    shadow-sm hover:shadow transition-all duration-500 mb-8">
          <span class="text-sm font-normal text-[#32325d]/70 tracking-wide">Conversion</span>
        </div>
        
        <!-- Heading -->
        <h1 class="text-[2.75rem] font-normal text-[#32325d] leading-[1.2] mb-6">
          Increase sales with a<br/>
          better payments<br/>
          experience
        </h1>

        <!-- Description -->
        <p class="text-lg text-[#32325d]/70 mb-8 leading-relaxed">
          We obsess over every detail of the checkout page—from its load time to the smallest animation. By using Checkout, you have a team of Stripe engineers and designers working continually to increase sales on your behalf.
        </p>
      </div>

      <!-- Right Content - Payment Form Demo -->
      <div class="relative max-w-[480px]">
        <!-- Background Glow Effect -->
        <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/20 to-[#605bff]/5 rounded-3xl blur-xl opacity-50"></div>
        
        <!-- Payment Form Window -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50 p-6 space-y-4">
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
          <button class="w-full py-3 px-4 bg-[#605bff] text-white rounded-xl font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
            Pay $65.00
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="relative overflow-hidden bg-[#0A2540] py-24">
    <!-- Enhanced Background -->
    <div class="absolute inset-0">
      <!-- Modern Geometric Patterns -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 opacity-[0.03]"
             style="background-image: repeating-linear-gradient(-45deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px);"></div>
        <div class="absolute inset-0 opacity-[0.02]"
             style="background-image: repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 80px);"></div>
      </div>
  
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-tr from-[#0A2540] via-[#0A2540]/95 to-[#0A2540]/90"></div>
      
      <!-- Glow Effects -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full
                  bg-[radial-gradient(70%_50%_at_50%_0%,rgba(96,91,255,0.12)_0%,transparent_100%)]"></div>
    </div>
  
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                      bg-white/5 backdrop-blur-sm border border-white/10 
                      shadow-sm transition-all duration-500">
            <span class="text-sm font-normal text-[#605bff] tracking-wide">GLOBAL PAYMENTS</span>
          </div>
  
          <!-- Heading -->
          <h2 class="text-4xl sm:text-5xl font-normal text-white leading-[1.2]">
            Grow into new markets and<br/>
            convert more customers
          </h2>
  
          <!-- Features List -->
          <div class="space-y-8">
            <!-- Global Payment Methods -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M3 10h18M7 15h2m4 0h2"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white mb-2">Global and local payment methods</h3>
                <p class="text-gray-400 leading-relaxed">
                  Collect payments from customers in 180+ countries through 160+ payment methods, including popular local options.
                </p>
              </div>
            </div>
  
            <!-- Currency Conversion -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M19 8l-7 7-7-7m14 8l-7-7-7 7"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white mb-2">Automatic currency conversion</h3>
                <p class="text-gray-400 leading-relaxed">
                  ipsepay will use the location you specified or the one we detected to display the payment priced in your customer's local currency with the corresponding local payment methods.
                </p>
              </div>
            </div>
  
            <!-- Multi-currency -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white mb-2">Multi-currency transfers</h3>
                <p class="text-gray-400 leading-relaxed">
                  Use the funds you settle into your multi-currency wallet to pay out to suppliers using ipsepay's global payout network or corporate cards.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Content - Enhanced version -->
        <div class="relative lg:ml-12">
          <!-- Background glow effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
          
          <!-- Merchant Account Card - Enhanced -->
          <div class="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl 
                      border border-white/10 p-6 mb-8 group hover:bg-white/[0.05] 
                      transition-all duration-500 hover:border-white/20 hover:shadow-lg 
                      hover:shadow-[#605bff]/10">
            <!-- Card glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/10 via-transparent to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative space-y-4">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span class="text-gray-400 font-medium">Merchant Account</span>
                </div>
                <span class="text-white font-medium">Total balance</span>
              </div>

              <!-- Enhanced balance display -->
              <div class="flex items-baseline gap-2">
                <div class="text-3xl font-bold text-white">$8,789.37</div>
                <div class="text-lg text-[#605bff] font-medium">USD</div>
              </div>
              
              <!-- Currency List - Enhanced -->
              <div class="space-y-3 mt-6">
                {#each [{code: 'GBP', name: 'Great Britain Pound', amount: '1,000.00'},
                        {code: 'USD', name: 'United States Dollar', amount: '1,000.00'},
                        {code: 'EUR', name: 'Euro', amount: '1,000.00'}] as currency}
                  <div class="flex items-center justify-between py-2.5 px-3 rounded-xl 
                              hover:bg-white/[0.03] transition-colors duration-300">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center 
                                  text-sm font-medium text-white">
                        {currency.code.slice(0, 2)}
                      </div>
                      <div>
                        <div class="text-white text-sm font-medium">{currency.code}</div>
                        <div class="text-gray-400 text-xs">{currency.name}</div>
                      </div>
                    </div>
                    <div class="text-white font-medium">{currency.amount} {currency.code}</div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- Payment Methods Grid - Dynamic Enhanced Version -->
          <div class="space-y-6">
            <!-- Section Header -->
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-white font-medium">Popular Payment Methods</h3>
              <button class="text-[#605bff] text-sm hover:text-white transition-colors duration-300">
                View all →
              </button>
            </div>

            <!-- Dynamic Payment Methods Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {#each [
                { 
                  name: 'Credit Card', 
                  icon: 'M3 10h18M7 15h2m4 0h2M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z',
                  popular: true 
                },
                { 
                  name: 'Apple Pay', 
                  icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
                  popular: true 
                },
                { 
                  name: 'Google Pay', 
                  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  new: true 
                },
                { 
                  name: 'PayPal', 
                  icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
                  popular: true 
                },
                { 
                  name: 'Crypto', 
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  new: true 
                },
                { 
                  name: 'Bank Transfer', 
                  icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
                  popular: true 
                },
                { 
                  name: 'Digital Wallet', 
                  icon: 'M3 10h18M7 15h2m4 0h2M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z',
                  popular: true 
                },
                { 
                  name: 'QR Payment', 
                  icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
                  popular: true 
                }
              ] as method}
                <div class="group relative">
                  <!-- Card Background -->
                  <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] 
                              rounded-xl transition-all duration-300 group-hover:from-white/[0.05] 
                              group-hover:to-white/[0.02]"></div>
                  
                  <!-- Card Content -->
                  <div class="relative rounded-xl border border-white/10 p-4 
                              transition-all duration-300 group-hover:border-white/20 
                              hover:shadow-lg hover:shadow-[#605bff]/10">
                    <div class="flex flex-col items-center gap-3">
                      <!-- Icon Container -->
                      <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center 
                                  transition-transform duration-300 group-hover:scale-110">
                        <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" 
                             fill="none" stroke="currentColor" 
                             stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d={method.icon} />
                        </svg>
                      </div>
                      
                      <!-- Method Name -->
                      <span class="text-sm text-white/80 font-medium text-center 
                                 group-hover:text-white transition-colors duration-300">
                        {method.name}
                      </span>

                      <!-- Status Badge -->
                      {#if method.popular}
                        <span class="absolute top-2 right-2 px-2 py-1 rounded-full 
                                    bg-[#605bff]/10 text-[#605bff] text-xs font-medium">
                          Popular
                        </span>
                      {:else if method.new}
                        <span class="absolute top-2 right-2 px-2 py-1 rounded-full 
                                    bg-green-500/10 text-green-400 text-xs font-medium">
                          New
                        </span>
                      {/if}
                    </div>

                    <!-- Hover State Info -->
                    <div class="absolute inset-0 rounded-xl bg-[#605bff] opacity-0 
                                group-hover:opacity-5 transition-opacity duration-300"></div>
                  </div>
                </div>
              {/each}
            </div>

            <!-- Integration Preview -->
            <div class="mt-8 rounded-xl bg-white/[0.02] border border-white/10 p-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                    <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white font-medium">Easy Integration</h4>
                    <p class="text-gray-400 text-sm">Simple API & SDK available</p>
                  </div>
                </div>
                <button class="px-4 py-2 rounded-lg bg-[#605bff]/10 text-[#605bff] 
                               hover:bg-[#605bff]/20 transition-colors duration-300">
                  View Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative overflow-hidden bg-white py-24">
    <!-- Add Subtle Background Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: repeating-linear-gradient(-45deg,#605bff 0px,#605bff 1px,transparent 1px,transparent 40px);"></div>
    </div>

    <div class="container relative z-10">
      <!-- Enhanced Header -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500 mb-8">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">CONVERSION OPTIMISATION</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2] mb-6">
          Boost conversion and acceptance rates
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            across markets
          </span>
        </h2>
        <p class="text-xl text-[#32325d]/70 leading-relaxed">
          with out-of-the-box optimisations
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <h3 class="text-3xl font-medium text-[#32325d]">
            Make it easier for customers to pay
          </h3>
          <p class="text-xl text-[#32325d]/70">
            Localise and tailor your checkout experience to individual customers
          </p>

          <!-- Features List -->
          <div class="space-y-6">
            {#each [
              "Automatically show available local payment methods",
              "Display checkout page in the customer's local language",
              "Present prices in local currencies or convert currency based on location",
              "Leverage responsive design and browser-based autofill",
              "Pay in one click with saved payment details"
            ] as feature}
              <div class="flex items-center gap-4">
                <div class="flex-shrink-0">
                  <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                </div>
                <span class="text-lg text-[#32325d]/80">{feature}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Right Content - Interactive Checkout Preview -->
        <div class="relative">
          <!-- Background Effects -->
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl"></div>
          
          <!-- Checkout Preview Card -->
          <div class="relative rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden p-8">
            <!-- Order Summary -->
            <div class="border-b border-gray-100 pb-6 mb-6">
              <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-medium text-[#32325d]">Order Summary</h4>
                <span class="text-sm text-[#32325d]/60">USD</span>
              </div>
              
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-lg bg-[#605bff]/10 flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-[#32325d]">Premium Plan</div>
                    <div class="text-sm text-[#32325d]/60">Annual Subscription</div>
                  </div>
                </div>
                <span class="font-medium text-[#32325d]">$299.00</span>
              </div>
            </div>

            <!-- Payment Methods -->
            <div class="space-y-4">
              <h4 class="text-lg font-medium text-[#32325d] mb-4">Payment Method</h4>
              
              <!-- Payment Options -->
              <div class="grid grid-cols-2 gap-4">
                {#each ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay'] as method}
                  <div class="relative rounded-xl border border-gray-200 p-4 hover:border-[#605bff] 
                              cursor-pointer transition-all duration-300 group">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center 
                                  group-hover:bg-[#605bff]/10 transition-colors duration-300">
                        <svg class="w-5 h-5 text-[#32325d]/40 group-hover:text-[#605bff] transition-colors duration-300" 
                             viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M3 10h18M7 15h2m4 0h2M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"/>
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-[#32325d]/80 group-hover:text-[#32325d]">{method}</span>
                    </div>
                  </div>
                {/each}
              </div>

              <!-- Pay Button -->
              <button class="w-full mt-6 px-8 py-4 rounded-xl bg-[#605bff] text-white font-medium
                           hover:bg-[#605bff]/90 transition-colors duration-300">
                Pay Now • $299.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative overflow-hidden bg-white py-24">
    <!-- Add Subtle Background Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: repeating-linear-gradient(-45deg,#605bff 0px,#605bff 1px,transparent 1px,transparent 40px);"></div>
    </div>
  
    <div class="container relative z-10">
      <!-- Enhanced Header -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-[#605bff]/5 border border-[#605bff]/10 
                    shadow-sm transition-all duration-500 mb-8">
          <div class="w-5 h-5 rounded-full bg-[#605bff] flex items-center justify-center">
            <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-[#605bff] tracking-wide">GLOBAL PAYMENTS</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-medium text-[#32325d] leading-[1.2] mb-6">
          Streamline your global
          <span class="bg-gradient-to-r from-[#605bff] to-[#605bff]/80 bg-clip-text text-transparent">
            payment operations
          </span>
        </h2>
      </div>
  
      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Feature 1 -->
        <div class="group relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-6">
            <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-medium text-[#32325d] mb-3">Accept payments from global customers</h3>
              <p class="text-[#32325d]/70 leading-relaxed">
                Convert more customers by pricing in local currency and letting customers pay with their preferred payment methods.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Feature 2 -->
        <div class="group relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-6">
            <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-medium text-[#32325d] mb-3">Boost conversion and acceptance rates</h3>
              <p class="text-[#32325d]/70 leading-relaxed">
                Airwallex's machine learning powered optimisation engine, 3DS logic, and local acquiring improve global acceptance rates.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Feature 3 -->
        <div class="group relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-6">
            <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-medium text-[#32325d] mb-3">Eliminate costly FX fees</h3>
              <p class="text-[#32325d]/70 leading-relaxed">
                Settle funds in the same currency your customers pay in, avoiding hidden FX conversion fees.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Feature 4 -->
        <div class="group relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#605bff]/10 to-transparent rounded-3xl blur-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative space-y-6">
            <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-medium text-[#32325d] mb-3">Reduce chargebacks</h3>
              <p class="text-[#32325d]/70 leading-relaxed">
                Identify suspicious transactions and reduce chargebacks with an AI-powered fraud engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>