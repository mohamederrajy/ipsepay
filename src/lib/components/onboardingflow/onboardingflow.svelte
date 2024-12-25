<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;
</script>

<section class="py-16 md:py-24 relative overflow-hidden" id="Onboarding">
    <div class="container mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16">
        <span class="text-[#605bff] text-sm md:text-base font-semibold mb-4 block">Onboarding flow</span>
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Getting started with a few steps
        </h2>
        <div class="flex gap-4 justify-center relative z-10">
          <a 
             class="inline-flex items-center justify-center px-6 py-3 bg-[#605bff] text-white rounded-full hover:bg-[#605bff]/90 transition-colors pointer-events-auto" href="/account/signup" class:active={routeTd === "/account/signup"}>
              Open an account <span class="ml-2">→</span>
          </a>
          <a href="/contact" 
             class="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#605bff] text-[#605bff] rounded-full hover:bg-[#605bff]/10 transition-colors pointer-events-auto">
              Contact us
          </a>
        </div>
      </div>
  
      <!-- Steps Grid -->
      <div class="hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <!-- Step 1 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-[220px]">
          <span class="text-[#605bff] mb-4 block">01</span>
          <div class="bg-[#605bff]/10 rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center mx-auto">
            <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-gray-900 text-lg font-semibold mb-2">Singup</h3>
          <p class="text-gray-600 text-sm">Fill in your company details</p>
        </div>

        <!-- Arrow 1 -->
        <img src="/images/arrow-top.png" alt="arrow" class="w-20" />
  
        <!-- Step 2 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-[220px]">
          <span class="text-[#605bff] mb-4 block">02</span>
          <div class="bg-[#605bff]/10 rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center mx-auto">
            <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
          <h3 class="text-gray-900 text-lg font-semibold mb-2">Sign in the contact</h3>
          <p class="text-gray-600 text-sm">Get pricing and sign agreement</p>
        </div>

        <!-- Arrow 2 -->
        <img src="/images/arrow-top.png" alt="arrow" class="w-20" />
  
        <!-- Step 3 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-[220px]">
          <span class="text-[#605bff] mb-4 block">03</span>
          <div class="bg-[#605bff]/10 rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center mx-auto">
            <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-gray-900 text-lg font-semibold mb-2">Fill in verification</h3>
          <p class="text-gray-600 text-sm">Complete verification documents</p>
        </div>

        <!-- Arrow 3 -->
        <img src="/images/arrow-top.png" alt="arrow" class="w-20" />
  
        <!-- Step 4 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-[220px]">
          <span class="text-[#605bff] mb-4 block">04</span>
          <div class="bg-[#605bff]/10 rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center mx-auto">
            <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3 class="text-gray-900 text-lg font-semibold mb-2">Integrate </h3>
          <p class="text-gray-600 text-sm">Get API keys for integration</p>
        </div>
      </div>

      <!-- Mobile Steps (shown only on small screens) -->
      <div class="md:hidden space-y-4">
        <!-- Mobile cards here (same content, stacked) -->
      </div>
    </div>
</section>

<style>
    .text-white {
        color: #fff; 
    }
    .text-main {
        color: #3935d2; 
    }
</style>