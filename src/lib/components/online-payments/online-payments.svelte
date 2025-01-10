<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const stats = [
    { value: '99.99%', label: 'Uptime', trend: '+0.1%' },
    { value: '$2B+', label: 'Processed', trend: '+12%' },
    { value: '150+', label: 'Countries', trend: '+5' }
  ];
</script>

<section class="relative min-h-[calc(100vh-4rem)] sm:min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <!-- Left Column -->
      <div class="space-y-8 sm:space-y-12">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                    border border-[#605bff]/10 bg-white shadow-sm">
          <div class="flex items-center gap-1.5 text-[#605bff]">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-2 w-2 rounded-full bg-[#605bff] opacity-75"></span>
              <span class="relative h-2 w-2 rounded-full bg-[#605bff]"></span>
            </span>
            <span class="text-sm font-medium">Live System</span>
          </div>
        </div>

        <!-- Title Section -->
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#32325d] leading-tight">
            Enterprise
            <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text text-transparent">
              Payment Platform
            </span>
          </h1>
          <p class="text-lg text-[#32325d]/70 max-w-xl">
            Next-generation payment infrastructure for modern businesses. 
            Scale globally with enterprise-grade security and reliability.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-8">
          {#each stats as stat}
            <div>
              <div class="text-2xl font-bold text-[#32325d]">
                {stat.value}
                <span class="text-sm font-medium text-green-500 ml-1">{stat.trend}</span>
              </div>
              <div class="text-sm text-[#32325d]/60">{stat.label}</div>
            </div>
          {/each}
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/contact" 
             class="inline-flex items-center justify-center px-8 py-3 
                    bg-[#605bff] text-white font-medium rounded-xl
                    hover:bg-[#4f4ccc] transition-colors duration-200">
            Start Integration
            <svg class="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="/documentation" 
             class="inline-flex items-center justify-center px-8 py-3
                    border border-[#605bff]/10 text-[#32325d] font-medium rounded-xl
                    hover:bg-[#605bff]/5 transition-colors duration-200">
            View Documentation
          </a>
        </div>

        <!-- After CTA Buttons and before the main payment methods grid -->
        <div class="space-y-4 mt-8 pt-8 border-t border-gray-100">
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 py-6">
            <!-- Visa -->
            <div class="grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/vss.png" 
                   alt="Visa" 
                   class="h-8 w-auto object-contain" />
            </div>
            
            <!-- Mastercard -->
            <div class="grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/mscrad.png" 
                   alt="Mastercard" 
                   class="h-8 w-auto object-contain" />
            </div>
            
            <!-- American Express -->
            <div class="grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/amex.png" 
                   alt="American Express" 
                   class="h-8 w-auto object-contain" />
            </div>
            
            <!-- Discover -->
            <div class="grayscale hover:grayscale-0 transition-all duration-200">
              <img src="/images/brands/disco.png" 
                   alt="Discover" 
                   class="h-8 w-auto object-contain" />
            </div>
            
            
          </div>
          
        </div>
      </div>

      <!-- Right Column - Dashboard Preview -->
      <div class="relative">
        <div class="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          <!-- Dashboard Header -->
          <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="text-sm font-medium text-[#32325d]">Payment Dashboard</span>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="relative">
            <img src="/images/photos/pay2.jpg" 
                 alt="Payment Dashboard"
                 class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>