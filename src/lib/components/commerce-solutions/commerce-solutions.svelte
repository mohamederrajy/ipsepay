<script lang="ts">
  let selectedSize = 'XL';
  let selectedColor = 'Multi';
</script>

<section class="py-16 md:py-24 relative overflow-hidden pb-20 border-b border-gray-200">
  <div class="container mx-auto px-4 md:px-6">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Content -->
      <div class="max-w-xl">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <path d="M4 9h16"/>
            <path d="M4 14h16"/>
          </svg>
          <span class="text-sm text-gray-600">Sales Dashboard</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-[#32325d] mb-6">
          Powerful analytics and 
          <span class="block">reporting tools</span>
        </h1>

        <p class="text-lg text-gray-600 mb-8">
          Track your business performance in real-time with comprehensive analytics. Get detailed insights into sales trends, customer behavior, and revenue growth all in one place.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="/account/signup" class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-medium rounded-lg hover:bg-[#605bff]/90 transition-colors">
            Get Started
          </a>
          <a href="/account/signup" class="inline-flex items-center px-6 py-3 text-[#605bff] font-medium hover:bg-[#605bff]/5 rounded-lg transition-colors">
            Generate Reports →
          </a>
        </div>

        <!-- Stats -->
        <div class="mt-12 grid grid-cols-3 gap-8">
          <div>
            <div class="text-2xl font-bold text-[#32325d]">45%</div>
            <div class="text-sm text-gray-600">Revenue Growth</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#32325d]">2.4M</div>
            <div class="text-sm text-gray-600">Total Sales</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-[#32325d]">98%</div>
            <div class="text-sm text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      <!-- Right Side - Sales Preview -->
      <div class="relative bg-gradient-to-br from-[#605bff]/5 to-transparent p-8 rounded-3xl">
        <!-- Notification Card -->
        <div class="bg-[#32325d] text-white p-4 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform">
          <div class="flex items-center justify-between">
            <span class="text-sm">You have made 1,529 sales this week!</span>
            <div class="bg-[#2a2a2a] p-2 rounded-lg">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Sales Report Card -->
        <div class="bg-white rounded-3xl p-8 shadow-xl mb-6">
          <div class="flex justify-between items-center mb-8">
            <h3 class="text-lg font-medium text-gray-900">Sales Report</h3>
            <span class="text-sm text-gray-400">Mar 21-Apr 20</span>
          </div>

          <!-- Bar Chart -->
          <div class="h-48 flex items-end gap-3 mb-4">
            {#each Array(10) as _, i}
              <div 
                class="w-8 bg-[#605bff]/10 rounded-t-lg transition-all duration-500"
                style="height: {30 + Math.random() * 70}%"
              >
                <div 
                  class="w-full bg-[#605bff] rounded-t-lg transition-all duration-500"
                  style="height: {Math.random() * 100}%"
                ></div>
              </div>
            {/each}
          </div>

          <!-- Legend -->
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-[#605bff]"></div>
              <span class="text-sm text-gray-600">Current Period</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-[#605bff]/10"></div>
              <span class="text-sm text-gray-600">Previous Period</span>
            </div>
          </div>
        </div>

        <!-- Quick Stats Cards -->
        <div class="grid grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20V10M18 20V4M6 20v-8" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-500">Daily Sales</div>
                <div class="text-lg font-semibold">$12,426</div>
              </div>
            </div>
            <div class="text-[#605bff] text-sm">+12.5% from yesterday</div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-500">Customers</div>
                <div class="text-lg font-semibold">1,843</div>
              </div>
            </div>
            <div class="text-[#605bff] text-sm">+8.1% new users</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 1280px;
  }

  /* Smooth animations */
  .transition-all {
    transition: all 0.3s ease-in-out;
  }
</style>