
  <!-- Reporting Section -->
  <section class="py-20">
    <div class="container px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Side - Dashboard UI -->
        <div class="relative bg-white rounded-2xl shadow-xl border border-gray-200 max-w-3xl">
          <!-- Sidebar -->
          <div class="absolute left-0 top-0 bottom-0 w-[180px] bg-gray-50 border-r border-gray-200 p-4">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-7 h-7 bg-[#605bff] rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </div>
              <span class="text-gray-900 font-medium text-sm">Dashboard</span>
            </div>
            
            <nav class="space-y-1">
              {#each ['Overview', 'Payouts', 'Transactions', 'Reports', 'Settings'] as item}
                <div class={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${item === 'Payouts' ? 'bg-[#605bff] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                  <div class={`w-3.5 h-3.5 ${item === 'Payouts' ? 'text-white' : 'text-gray-400'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 6v12m-8-6h16"/>
                    </svg>
                  </div>
                  {item}
                </div>
              {/each}
            </nav>
          </div>
  
          <!-- Main Content -->
          <div class="ml-[180px] p-5">
            <!-- Header -->
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-base font-semibold text-gray-900">Payment Analytics</h3>
              <div class="flex gap-2">
                <select class="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">
                  <option>Last 7 days</option>
                </select>
                <button class="px-2 py-1 bg-[#605bff] text-white rounded text-xs font-medium">
                  Export
                </button>
              </div>
            </div>
  
            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div class="flex items-center justify-between mb-3">
                  <div class="p-1.5 bg-[#605bff]/10 rounded">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div class="flex items-center gap-0.5 text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                    <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 15l-6-6-6 6"/>
                    </svg>
                    12.5%
                  </div>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-0.5">Total Revenue</p>
                  <p class="text-base font-semibold text-gray-900">$24,563.00</p>
                  <p class="text-[10px] text-gray-500">vs. $21,836 last month</p>
                </div>
              </div>

              <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div class="flex items-center justify-between mb-3">
                  <div class="p-1.5 bg-[#605bff]/10 rounded">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                    </svg>
                  </div>
                  <div class="flex items-center gap-0.5 text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                    <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 15l-6-6-6 6"/>
                    </svg>
                    8.2%
                  </div>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-0.5">Transactions</p>
                  <p class="text-base font-semibold text-gray-900">1,245</p>
                  <p class="text-[10px] text-gray-500">vs. 1,150 last month</p>
                </div>
              </div>

              <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div class="flex items-center justify-between mb-3">
                  <div class="p-1.5 bg-[#605bff]/10 rounded">
                    <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                  </div>
                  <div class="flex items-center gap-0.5 text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                    <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 15l-6-6-6 6"/>
                    </svg>
                    5.3%
                  </div>
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-0.5">Average Order</p>
                  <p class="text-base font-semibold text-gray-900">$123.45</p>
                  <p class="text-[10px] text-gray-500">vs. $117.24 last month</p>
                </div>
              </div>
            </div>
  
            <!-- Chart -->
            <div class="bg-gray-50 rounded-xl p-6 mb-8">
              <div class="flex justify-between items-center mb-6">
                <h4 class="font-medium text-gray-900">Revenue Overview</h4>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-[#605bff] rounded-full"></div>
                    <span class="text-sm text-gray-600">Revenue</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-[#605bff]/20 rounded-full"></div>
                    <span class="text-sm text-gray-600">Orders</span>
                  </div>
                </div>
              </div>
              
              <!-- Chart Bars -->
              <div class="h-[200px] flex items-end gap-6">
                {#each Array(7) as _, i}
                  <div class="flex-1 flex flex-col gap-1">
                    <div class="bg-[#605bff] h-[${60 + Math.random() * 40}%] rounded-t-lg"></div>
                    <div class="bg-[#605bff]/20 h-[${40 + Math.random() * 30}%] rounded-t-lg"></div>
                    <p class="text-xs text-gray-600 text-center mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </p>
                  </div>
                {/each}
              </div>
            </div>
  
            <!-- Recent Transactions -->
            <div>
              <h4 class="font-medium text-gray-900 mb-4">Recent Transactions</h4>
              <div class="bg-gray-50 rounded-xl overflow-hidden">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="text-left py-3 px-4 text-sm font-medium text-gray-600">Transaction ID</th>
                      <th class="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                      <th class="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                      <th class="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each Array(3) as _, i}
                      <tr class="border-b border-gray-200 last:border-0">
                        <td class="py-3 px-4 text-sm text-gray-900">#TRX-{1234 + i}</td>
                        <td class="py-3 px-4 text-sm text-gray-600">May {15 + i}, 2024</td>
                        <td class="py-3 px-4 text-sm text-gray-900">${(150 + i * 25).toFixed(2)}</td>
                        <td class="py-3 px-4">
                          <span class={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            i === 0 ? 'bg-green-100 text-green-700' : 
                            i === 1 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {i === 0 ? 'Completed' : i === 1 ? 'Pending' : 'Processing'}
                          </span>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Content -->
        <div>
          <h2 class="text-[2.5rem] font-medium text-[#32325d] mb-6">
            Get complete reporting with our Customer Area
          </h2>
  
          <div class="space-y-8">
            <div class="flex gap-3">
              <svg class="w-5 h-5 mt-1 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <div>
                <h3 class="text-lg font-medium text-[#32325d] mb-2">All payments in one place:</h3>
                <p class="text-gray-600">Gather insights into your payouts, number of chargebacks, types of payment methods, and transaction volumes across channels.</p>
              </div>
            </div>
  
            <div class="flex gap-3">
              <svg class="w-5 h-5 mt-1 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <div>
                <h3 class="text-lg font-medium text-[#32325d] mb-2">Optimized reconciliation:</h3>
                <p class="text-gray-600">As processor and acquirer, we provide reporting for all payments. No matter the channel or location. With our settlement reports, you can rely less on accounting teams.</p>
              </div>
            </div>
  
            <div class="flex gap-3">
              <svg class="w-5 h-5 mt-1 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <div>
                <h3 class="text-lg font-medium text-[#32325d] mb-2">Clearer insights:</h3>
                <p class="text-gray-600">Get a better understanding of how your business is doing. From guest behavior to channel and location performance.</p>
              </div>
            </div>
          </div>
  
          <a href="/account/signup" class="inline-flex items-center text-[#605bff] hover:text-[#605bff]/90 font-medium mt-8">
Get start now             <svg class="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  