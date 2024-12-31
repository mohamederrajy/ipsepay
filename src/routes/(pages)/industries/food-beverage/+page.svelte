<script lang="ts">

import Loyalty from "$lib/components/industries/sections/Loyalty.svelte";
</script>

<!-- Hero Section -->
<section class="py-20">
    <div class="container px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div>
          <h1 class="text-[2.5rem] lg:text-[2.3rem] font-medium text-[#32325d] leading-tight mb-6">
            The complete payments platform for food and beverage
          </h1>
          
          <p class="text-lg lg:text-xl text-gray-600 mb-8">
            A complicated industry requires a unified approach to payments. From bars and pubs to quick service, table service, and delivery, make things simple for customers.
          </p>
  
          <a 
            href="/contact" 
            class="bg-[#605bff] text-white px-6 py-3 rounded-lg inline-flex items-center text-sm font-medium hover:bg-[#605bff]/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
  
        <!-- Right Image with Payment Info -->
        <div class="relative">
          <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
          
          <!-- Payment Info Overlay -->
          
  
          <img 
            src="/images/photos/womn-coof.jpg" 
            alt="Friends enjoying food at a restaurant" 
            class="relative rounded-2xl w-full shadow-lg"
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
<section class="py-20 border-b border-gray-200">
  <div class="container px-4 sm:px-6">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Better Customer Service -->
      <div>
        <div class="w-12 h-12 mb-6 text-[#605bff]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="M12 11v3m0 0l-2-2m2 2l2-2"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Better Customer Service
        </h3>
        <p class="text-gray-600">
          In the food and beverage industry, customers are the number one priority. Cut the queues with kiosks, and increase convenience by letting guests pay-at-table.
        </p>
      </div>

      <!-- Suitable for the entire industry -->
      <div>
        <div class="w-12 h-12 mb-6 text-[#605bff]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <path d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Suitable for the entire industry
        </h3>
        <p class="text-gray-600">
          Built with franchisees, franchisors, delivery services, and restaurants in mind. We offer easy terminal rollout, consolidation of payments across sales channels, and faster payouts.
        </p>
      </div>

      <!-- One platform -->
      <div>
        <div class="w-12 h-12 mb-6 text-[#605bff]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          One platform
        </h3>
        <p class="text-gray-600">
          Cut down on fees, contracts, and partners. Focus on both scalability and your customers with one <a href="/payment-solution" class="text-[#605bff] hover:underline">payment solution</a>.
        </p>
      </div>

      <!-- Data you can use -->
      <div>
        <div class="w-12 h-12 mb-6 text-[#605bff]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Data you can use
        </h3>
        <p class="text-gray-600">
          Understand customers and learn where your business is popular, to make the right choice when opening new locations.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Video/Image Section with Logos -->
<section class="py-20">
  <div class="container px-4 sm:px-6">
    <!-- Main Image -->
    <div class="rounded-2xl overflow-hidden mb-16 relative">
      <img 
        src="/images/photos/rest.jpg"
        alt="Customer ordering at digital kiosk in restaurant" 
        class="w-full h-auto"
      >
    </div>

    <!-- Brand Logos -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
      <img 
        src="/images/brands/dunkin.svg"
        alt="Dunkin' logo"
        class="h-8 w-auto grayscale hover:grayscale-0 transition-all"
      >
      <img 
        src="/images/brands/hakkasan.svg"
        alt="Hakkasan Group logo"
        class="h-8 w-auto grayscale hover:grayscale-0 transition-all"
      >
      <img 
        src="/images/brands/hms-host.svg"
        alt="HMS Host logo"
        class="h-8 w-auto grayscale hover:grayscale-0 transition-all"
      >
      <img 
        src="/images/brands/brooklyn-brewery.svg"
        alt="Brooklyn Brewery logo"
        class="h-8 w-auto grayscale hover:grayscale-0 transition-all"
      >
      <img 
        src="/images/brands/mcdonalds.svg"
        alt="McDonald's logo"
        class="h-8 w-auto grayscale hover:grayscale-0 transition-all"
      >
    </div>
  </div>
</section>

<!-- Ordering Section -->
<section class="py-20 bg-gray-50">
  <div class="container px-4 sm:px-6">
    <!-- Section Header -->
    <h2 class="text-[2.5rem] font-medium text-[#32325d] text-center mb-16">
      Tailored to the food and beverage industry
    </h2>

    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Content -->
      <div>
        <h3 class="text-2xl font-medium text-[#32325d] mb-4">
          Ordering just got easier
        </h3>
        <p class="text-lg text-gray-600">
          Cut queues with in-store payment kiosks, and let customers order online or on mobile to collect at your restaurant.
        </p>
      </div>

      <!-- Right Mobile App Mock -->
      <div class="relative">
        <div class="max-w-sm mx-auto">
          <!-- Phone Frame -->
          <div class="bg-[#605bff] rounded-3xl p-4 shadow-xl">
            <!-- Status Bar -->
            <div class="flex justify-between items-center mb-4">
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24">
                <path d="M4 18L20 18" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>

            <!-- Content -->
            <div class="bg-white rounded-2xl p-4">
              <!-- Back Button -->
              <div class="mb-4">
                <svg class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </div>

              <!-- Restaurant Header -->
              <div class="mb-6">
                <img 
                  src="/images/photos/pork.jpg" 
                  alt="Poke bowl" 
                  class="w-full h-32 object-cover rounded-lg mb-3"
                >
                <h4 class="text-xl font-semibold text-gray-900">Poke Cafe</h4>
              </div>

              <!-- Menu Items -->
              <div class="space-y-4 mb-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 flex items-center justify-center bg-[#605bff] text-white text-sm rounded">1</span>
                    <span class="text-gray-900">Poke salad</span>
                  </div>
                  <span class="text-gray-900">$18.00</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 flex items-center justify-center bg-[#605bff] text-white text-sm rounded">2</span>
                    <span class="text-gray-900">Apple smoothie</span>
                  </div>
                  <span class="text-gray-900">$16.00</span>
                </div>
              </div>

              <!-- Total -->
              <div class="flex justify-between items-center py-3 border-t border-gray-200">
                <span class="text-gray-900 font-medium">Total</span>
                <span class="text-gray-900 font-medium">$34.00</span>
              </div>

              <!-- Order Button -->
              <button class="w-full bg-[#605bff] text-white py-3 rounded-lg mt-4 font-medium">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Reporting Section -->
<section class="py-20">
  <div class="container px-4 sm:px-6">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Content -->
      <div>
        <h2 class="text-[2rem] font-medium text-[#32325d] mb-6">
          Complete reporting for every level of your business
        </h2>

        <div class="space-y-6">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 mt-1 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="text-lg font-medium text-[#32325d] mb-1">Dashboards for each location</h3>
              <p class="text-gray-600">See daily sales and payouts, automate reconciliation, and manage <a href="#" class="text-[#605bff] hover:underline">chargebacks</a>, all in a dedicated dashboard for your restaurant.</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 mt-1 text-[#605bff ]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="text-lg font-medium text-[#32325d] mb-1">View all payments in one place</h3>
              <p class="text-gray-600">One view to understand your business's channels and location performance</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 mt-1 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h3 class="text-lg font-medium text-[#32325d] mb-1">Full terminal management system</h3>
              <p class="text-gray-600">A centralized system that allows for easy troubleshooting and terminal replacements.</p>
            </div>
          </div>

          <a href="/account/signup" class="inline-flex items-center text-[#605bff] hover:underline mt-4">
           Get start now 
            <svg class="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 12l4-4-4-4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Dashboard Mock -->
      <div class="relative">
        <div class="bg-[#605bff] rounded-xl p-4 shadow-xl">
          <!-- Dashboard Header -->
          <div class="flex justify-between items-center mb-6 text-white">
            <div class="text-lg">Payouts</div>
            <div class="flex items-center gap-4">
              <span>EUR (USD)</span>
              <span>All stores</span>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-5 gap-2 mb-8">
            {#each ['PAYOUT', 'SALES (SETTLED)', 'REFUND', 'COST OF TRANSACTION', 'ADJUSTMENT'] as stat}
              <div class="bg-[#fff] p-3 rounded-lg">
                <div class="text-gray-400 text-xs mb-2">{stat}</div>
                <div class="text-gray-600 text-sm">USD {Math.floor(Math.random() * 100000)}.00</div>
              </div>
            {/each}
          </div>

          <!-- Chart Area -->
          <div class="bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-4">
              <div class="text-lg font-medium">Payouts, Sales and Refund</div>
              <div class="flex gap-2">
                {#each ['Day', 'Month', 'Week', 'Hours'] as period}
                  <button class="px-3 py-1 text-sm rounded {period === 'Month' ? 'bg-[#605bff] text-white' : 'text-gray-600'}">
                    {period}
                  </button>
                {/each}
              </div>
            </div>

            <!-- Chart Placeholder -->
            <div class="h-48 bg-gray-50 rounded-lg mb-4"></div>

            <!-- Table -->
            <table class="w-full text-sm">
              <thead>
                <tr class="text-gray-500">
                  <th class="text-left py-2">Batch</th>
                  <th class="text-left py-2">Status</th>
                  <th class="text-left py-2">Payout Date</th>
                  <th class="text-right py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {#each Array(2) as _, i}
                  <tr class="border-t border-gray-100">
                    <td class="py-2">#{4512 + i}</td>
                    <td class="py-2">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        {i === 0 ? 'Paid' : 'Pending'}
                      </span>
                    </td>
                    <td class="py-2">05/01/2023</td>
                    <td class="text-right py-2">$5,000.00</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <Loyalty/>

    <!-- Solutions Section -->
<section class="py-20">
  <div class="container px-4 sm:px-6">
    <!-- Main Image -->
    <div class="rounded-2xl overflow-hidden mb-16">
      <img 
        src="/images/photos/foods.jpg" 
        alt="People enjoying meal at restaurant" 
        class="w-full h-[400px] object-cover"
      >
    </div>

    <!-- Section Header -->
    <h2 class="text-[2.5rem] font-medium text-[#32325d] mb-12">
      A solution built for
    </h2>

    <!-- Solutions Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
      <!-- Quick service restaurants -->
      <div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Quick service restaurants
        </h3>
        <p class="text-gray-600">
          Payments to keep up with your speed. Say goodbye to long lines, never miss a sale, and get new franchisees set up faster.
        </p>
      </div>

      <!-- Food delivery services -->
      <div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Food delivery services
        </h3>
        <p class="text-gray-600">
          Accept payments anywhere people order food. Expand globally with localized and one-click payments.
        </p>
      </div>

      <!-- Restaurant chains -->
      <div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Restaurant chains
        </h3>
        <p class="text-gray-600">
          Make sure customers have a consistent experience, wherever the location. Remember them when they return and boost convenience with pay-at-table.
        </p>
      </div>

      <!-- Restaurant groups -->
      <div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Restaurant groups
        </h3>
        <p class="text-gray-600">
          Simplify how you manage payments from your various brands. Have one contract and use one integration across regions, with centralized reporting.
        </p>
      </div>

      <!-- Bars and pubs -->
      <div>
        <h3 class="text-xl font-semibold text-[#32325d] mb-3">
          Bars and pubs
        </h3>
        <p class="text-gray-600">
          Get the right tools to capture more sales. Equip staff with secure, reliable terminals that help them work efficiently and without stress.
        </p>
      </div>

      <!-- Empty div for grid alignment -->
      <div class="hidden lg:block"></div>
    </div>
  </div>
</section>

