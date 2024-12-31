<!-- Loyalty Section -->
<section class="py-20 bg-gray-50">
    <div class="container px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Side - Loyalty Card -->
        <div class="relative">
          <div class="max-w-sm mx-auto">
            <!-- Loyalty App Screen -->
            <div class="bg-[#f8faff] rounded-3xl p-8 shadow-xl relative">
              <!-- Header Icons -->
              <div class="flex justify-between mb-8">
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v.01M19 12l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
  
              <!-- Title -->
              <h3 class="text-3xl font-bold text-[#32325d] mb-10 text-center">
                Get a free<br />dinner for 2
              </h3>
  
              <!-- Stamp Grid -->
              <div class="grid grid-cols-3 gap-6 mb-10">
                {#each Array(9) as _, i}
                  <div class={`aspect-square rounded-full flex items-center justify-center ${i < 6 ? 'bg-[#605bff]' : 'bg-white border-2 border-dashed border-[#605bff]/30'}`}>
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={i < 6 ? 'white' : '#605bff'} stroke-width="1.5">
                      <path d="M20 12a8 8 0 0 1-8 8m8-8a8 8 0 1 0-8 8m8-8H4m8 8V4" stroke-linecap="round"/>
                    </svg>
                  </div>
                {/each}
              </div>
  
              <!-- Card Number -->
              <div class="flex items-center justify-between text-sm text-gray-600 border-t border-gray-200 pt-4">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <path d="M2 10h20"/>
                  </svg>
                  <span>•••• 6766</span>
                </div>
                <span class="text-[#605bff] font-medium">6 of 9 stamps</span>
              </div>
            </div>
  
            <!-- Physical Card -->
            <div class="absolute -right-16 top-1/2 -translate-y-1/2 rotate-12">
              <div class="w-48 h-32 bg-[#605bff] rounded-xl shadow-xl p-4 flex flex-col justify-between">
                <div class="flex justify-end">
                  <svg class="w-8 h-8 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1z"/>
                  </svg>
                </div>
                <div class="text-white/90 text-sm">
                  <div class="mb-1">EXP DATE</div>
                  <div class="font-medium">12/24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Content -->
        <div>
          <h2 class="text-[2rem] font-medium text-[#32325d] mb-6">
            Loyalty that benefits you and your customers
          </h2>
          <p class="text-lg text-gray-600 mb-12">
            Diners love returning to their favorite restaurants. Make sure you're equipped to reward their loyalty with payment-linked technology at the checkout.
          </p>
  
          <!-- Features Grid -->
          <div class="grid sm:grid-cols-2 gap-8">
            {#each [
              {
                icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                text: 'Recognize customers at the terminal and create personal interactions.'
              },
              {
                icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z',
                text: 'Smooth reconciliation of local and QR payment methods, loyalty rewards, and gift cards.'
              },
              {
                icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
                text: 'Detect customer language, and let them choose their preferred currency.'
              },
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                text: 'Ability to continue sales if internet connection is lost.'
              }
            ] as feature}
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d={feature.icon} stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-gray-600">{feature.text}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>