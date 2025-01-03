<script lang="ts">
    const transactions = [
      { amount: 223.00, date: '23/03/2022', status: 'Queued' },
      { amount: 899.00, date: '23/03/2022', status: 'Queued' },
      { amount: 988.00, date: '23/03/2022', status: 'Queued' },
      { amount: 443.00, date: '23/03/2022', status: 'Queued' }
    ];
  </script>
  
  <section class="py-16 md:py-24 relative overflow-hidden  pb-20 border-b border-gray-200" >
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Payout Interface (Now on Left) -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent rounded-3xl"></div>
          <div class="relative">
            <!-- Available Balance Card -->
            <div class="bg-gray/100 text-white p-6 rounded-2xl mb-4">
              <p class="text-gray-400 mb-2">Available to withdraw</p>
              <h2 class="text-3xl font-semibold mb-4">AED 991.00</h2>
              <div class="bg-[#fff] rounded-xl p-4 mb-4 border border-gray-200">
                <p class="text-3xl font-bold text-center mb-2 text-[#605bff]">AED 223</p>
              </div>
              <button class="w-full bg-[#605bff] text-white py-3 rounded-xl hover:bg-[#605bff]/90 transition-colors">
                Withdraw
              </button>
            </div>
  
            <!-- Transaction List -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div class="p-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-gray-900 font-medium">Source:</span>
                    <span class="bg-gray-100 px-3 py-1 rounded-lg text-gray-600">MDL Business</span>
                  </div>
                  <button class="text-[#605bff] bg-[#605bff]/5 px-4 py-2 rounded-lg hover:bg-[#605bff]/10 transition-colors">
                    Authorize (24)
                  </button>
                </div>
              </div>
  
              <div class="p-4">
                <div class="grid grid-cols-4 text-sm text-gray-500 mb-2">
                  <span>Amount</span>
                  <span>Created</span>
                  <span>Status</span>
                  <span></span>
                </div>
  
                {#each transactions as tx}
                  <div class="grid grid-cols-4 items-center py-3 border-t border-gray-100 text-sm">
                    <span class="font-medium text-gray-900">AED {tx.amount.toFixed(2)}</span>
                    <span class="text-gray-500">{tx.date}</span>
                    <span class="text-blue-600">{tx.status}</span>
                    <button class="justify-self-end text-[#605bff] hover:text-[#605bff]/80">
                      <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                      </svg>
                    </button>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
  
        <!-- Content Section (Now on Right) -->
        <div class="max-w-xl">
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span class="text-sm text-gray-600">Instant Payouts</span>
          </div>
  
          <h1 class="text-4xl md:text-5xl font-bold text-[#32325d] mb-6">
            Get your money 
            <span class="block">instantly</span>
          </h1>
  
          <p class="text-lg text-gray-600 mb-8">
            Access your earnings immediately with our instant payout system. No more waiting for traditional banking hours or processing delays. Transfer your money when you need it, 24/7.
          </p>
  
          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h3 class="text-gray-900 font-medium mb-1">24/7 Availability</h3>
                <p class="text-gray-600">Withdraw your funds any time, any day</p>
              </div>
            </div>
  
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-gray-900 font-medium mb-1">Instant Processing</h3>
                <p class="text-gray-600">No delays, funds arrive in minutes</p>
              </div>
            </div>
  
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-gray-900 font-medium mb-1">Secure Transfers</h3>
                <p class="text-gray-600">Bank-grade security for all transactions</p>
              </div>
            </div>
          </div>
  
          <a href="/account/withdraw" class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-lg hover:bg-[#605bff]/90 transition-colors">
            Start withdrawing →
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .container {
      max-width: 1280px;
    }
  </style>