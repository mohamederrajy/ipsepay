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
          <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l5.09 5.09L12 12.18 6.91 7.09 12 2z"/>
          </svg>
          <span class="text-sm text-gray-600">Online payments</span>
        </div>

        <h1 class="text-xl md:text-4xl font-bold text-[#32325d] mb-6">
          Effortless online payments for 
          <span class="block">you and your customer</span>
        </h1>

        <p class="text-lg text-gray-600 mb-8">
          Accept, process, and settle payments with the online payment solution built for scale. Experience elite payments performance around the world.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="/contact" class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-lg hover:bg-[#605bff]/90 transition-colors">
            Get in touch
          </a>
          <a href="/pricing" class="inline-flex items-center px-6 py-3 text-[#605bff] font-medium hover:bg-[#605bff]/5 rounded-lg transition-colors">
            See pricing →
          </a>
        </div>

        <!-- Trusted By -->
        <div class="mt-16">
          <p class="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            <img src="/images/brands/usdt.png" alt="Uber" class="h-5 grayscale hover:grayscale-0 transition-all duration-200">
            <img src="/images/brands/A-pay.png" alt="Booking.com" class="h-5 grayscale hover:grayscale-0 transition-all duration-200">
            <img src="/images/brands/G-pay.png" alt="Spotify" class="h-5 grayscale hover:grayscale-0 transition-all duration-200">
            <img src="/images/brands/vss.png" alt="LinkedIn" class="h-5 grayscale hover:grayscale-0 transition-all duration-200">
            <img src="/images/brands/mscrad.png" alt="McDonald's" class="h-5 grayscale hover:grayscale-0 transition-all duration-200">
            <img src="/images/brands/maestro.png" alt="Zara" class="h-5 grayscale hover:grayscale-0 transition-all duration-200">
          </div>
        </div>
      </div>

      <!-- Right Side - Payment Demo -->
      <div class="relative h-[700px]">
        <!-- Background Image -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden">
          <img 
            src="/images/photos/pay2.jpg" 
            alt="Lifestyle payment" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Payment Form - Floating -->
        <div class="absolute top-13 -left-6 md:-left-12 mt-20">
          <div class="bg-white rounded-2xl shadow-xl border border-gray-200 w-96">
            <!-- Payment Form Header -->
            <div class="p-6 border-b border-gray-200">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-5 bg-[#605bff]/10 rounded flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <span class="font-medium text-gray-900">Credit card</span>
                </div>
              </div>
            </div>

            <!-- Payment Form -->
            <div class="p-6 space-y-4">
              <div>
                <label class="block text-sm text-gray-700 mb-1">Card number</label>
                <div class="relative">
                  <input 
                    type="text" 
                    value="•••• •••• •••• 6746"
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff] transition-colors"
                    disabled
                  >
                  <img src="/images/brands/MasterCard.png" alt="Visa" class="absolute right-3 top-1/2 -translate-y-1/2 h-4">
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Expiry date</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      value="12 / 28"
                      class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff] transition-colors"
                      disabled
                    >
                    <svg class="w-4 h-4 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">CVC</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      value="789"
                      class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff] transition-colors"
                      disabled
                    >
                    <svg class="w-4 h-4 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <input type="checkbox" id="save-card" class="rounded text-[#605bff] focus:ring-[#605bff]" checked>
                <label for="save-card" class="text-sm text-gray-600">Save details for next time</label>
              </div>

              <button class="w-full bg-[#605bff] text-white py-3 px-4 rounded-lg hover:bg-[#0f172a]/90 transition-colors flex items-center justify-center gap-2">
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
</style>