<script lang="ts">
    import Dashbords from "$lib/components/industries/sections/dashbord-section.svelte";

    
</script>
<!-- Hero Section -->
<section class="py-20 bg-[#f7f7f8]">
  <div class="container px-4 sm:px-6">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Content -->
      <div>
        <h1 class="text-[2rem] lg:text-[2.5rem] font-medium text-[#32325d] leading-tight mb-6">
          All payments services for your hotel in a single platform
        </h1>
        
        <p class="text-lg text-gray-600 mb-8">
          From booking to check-in, to the bar, spa, and check-out, use a unified approach when managing payments and surpass guests' expectations.
        </p>

        <a 
          href="/contact" 
          class="bg-[#605bff] text-white px-6 py-3 rounded-lg inline-flex items-center text-sm font-medium hover:bg-[#605bff]/90 transition-colors"
        >
          Get in touch
        </a>
      </div>

      <!-- Right Image -->
      <div class="relative">
        <!-- Background Decoration -->
        <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
        
        <!-- Payment Info Overlay -->
        <div class="absolute top-8 right-8 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-5 h-5 text-[#00d924]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-600">Payment completed</span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Room Service</span>
              <span class="font-medium">$58.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Spa Treatment</span>
              <span class="font-medium">$120.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Restaurant</span>
              <span class="font-medium">$85.00</span>
            </div>
          </div>
        </div>

        <img 
          src="/images/photos/heltl.jpg" 
          alt="Hotel guest making payment" 
          class="relative rounded-2xl w-full shadow-lg"
        >
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-20 border-t border-gray-100">
    <div class="container px-4 sm:px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Personalized experiences -->
        <div>
          <div class="w-12 h-12 mb-6 text-[#605bff]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
              <path d="M12 11v3m0 0l-2-2m2 2l2-2"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            Personalized experiences
          </h3>
          <p class="text-gray-600">
            Give guests flexibility checking in and out, enhanced loyalty programs, and their choice of local payment methods.
          </p>
        </div>
  
        <!-- One platform -->
        <div>
          <div class="w-12 h-12 mb-6 text-[#605bff]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            One platform
          </h3>
          <p class="text-gray-600">
            Unify payments across properties and channels, regardless of where they are in the world.
          </p>
        </div>
  
        <!-- Remove PCI scope -->
        <div>
          <div class="w-12 h-12 mb-6 text-[#605bff]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            Remove PCI scope
          </h3>
          <p class="text-gray-600">
            Reduce exposure of card data and resources needed to maintain PCI compliance.
          </p>
        </div>
  
        <!-- Partners you know -->
        <div>
          <div class="w-12 h-12 mb-6 text-[#605bff]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
              <path d="M12 11c1.5 0 2.5 1 2.5 2.5S13.5 16 12 16s-2.5-1-2.5-2.5S10.5 11 12 11z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-3">
            Partners you know
          </h3>
          <p class="text-gray-600">
            Create an integrated solution by combining the power of payments with the partners you already love.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Brand Logos -->
  <div class="border-b border-gray-200 pb-16">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
      {#each ['kempinski', 'belmond', 'bandb', 'sircle', 'louvre'] as brand}
        <img 
          src={`/images/brands/${brand}.svg`}
          alt={`${brand} logo`}
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all"
        >
      {/each}
    </div>
  </div>

  <!-- Testimonial -->
  <div class="max-w-3xl mx-auto text-center pt-16">
    <p class="text-lg text-gray-600 mb-8">
      "With innovative and flexible solutions, Adyen stood out to us as a preferred strategic partner to meet our vision. Collaborating with Adyen has successfully allowed us to deliver a promise that is secure and contactless while enhancing our offerings as a lifestyle destination where guests can stay, dine, shop, celebrate and relax as they create treasured memories, without interruptions."
    </p>

    <!-- Author -->
    <div class="flex items-center justify-center gap-4">
      <img 
        src="/images/brands/raffles.svg" 
        alt="Raffles Hotel logo" 
        class="h-12 w-auto"
      >
      <div class="text-left">
        <div class="font-medium text-[#32325d]">Chadi Chemaly</div>
        <div class="text-sm text-gray-600">Hotel Manager, Raffles Hotel Singapore</div>
      </div>
    </div>
  </div>

  <!-- Solution Section -->
<section class="py-20">
    <div class="container px-4 sm:px-6">
      <!-- Section Header -->
      <h2 class="text-[2.5rem] font-medium text-[#32325d] text-center mb-16">
        Our solution for hotels
      </h2>
  
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div>
          <h3 class="text-2xl font-medium text-[#32325d] mb-6">
            Create flexible guest journeys
          </h3>
          
          <p class="text-lg text-gray-600 mb-8">
            Centralize the management of payments across all channels and regions with a unified payments partner. We offer the flexibility to open new sales channels and roll-out new guest journeys, fast and at scale.
          </p>
  
          <a 
            href="/guest-journeys" 
            class="inline-flex items-center text-[#605bff] hover:text-[#605bff]/90 font-medium"
          >
Get start now             <svg class="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
  
        <!-- Right Image -->
        <div class="relative">
          <!-- Background Decoration -->
          <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
          
          <!-- Terminal Overlay -->
          <div class="absolute -top-4 -right-4 z-10 bg-white rounded-lg shadow-lg p-3">
            <svg class="w-8 h-8 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"/>
              <path d="M8 14L12 10L16 14"/>
            </svg>
          </div>
  
          <img 
            src="/images/photos/hotel-payment-terminal.jpg" 
            alt="Hotel staff member processing payment with guest" 
            class="relative rounded-2xl w-full shadow-lg"
          >
        </div>
      </div>
    </div>
  </section>

  <Dashbords/>

  <!-- Security Section -->
<section class="py-20">
  <div class="container px-4 sm:px-6">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Content -->
      <div>
        <h2 class="text-[2.5rem] font-medium text-[#32325d] mb-6">
          Reduce data exposure
        </h2>
        
        <p class="text-lg text-gray-600 mb-8">
          Security is our priority; we'll ensure you're PCI compliant, offer secure ways to pay with secure links, while our pre-certified terminals offer either end-to-end or point-to-point-encryption.
        </p>

        <a href="/security" class="inline-flex items-center text-[#605bff] hover:text-[#605bff]/90 font-medium">
          Learn more about security
          <svg class="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>

      <!-- Right Side - Booking UI -->
      <div class="relative bg-white rounded-3xl shadow-xl max-w-sm ml-auto">
        <!-- Header with Back Button -->
        <div class="absolute top-0 left-0 right-0 p-4 z-10">
          <button class="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors">
            <svg class="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        </div>

        <!-- Hotel Image -->
        <div class="relative h-64">
          <img 
            src="/images/photos/4859.jpg" 
            alt="Dog and person relaxing in hotel bed" 
            class="w-full h-full object-cover"
          />
          <!-- Rating Stars -->
          <div class="absolute bottom-4 left-4 flex gap-1">
            {#each Array(5) as _}
              <svg class="w-4 h-4 text-[#fbbf24]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            {/each}
          </div>
        </div>

        <!-- Hotel Info -->
        <div class="p-6 bg-white">
          <h3 class="text-xl font-semibold text-[#0f1729] mb-6">Dogs & Chill Hotel</h3>
          
          <!-- Check In/Out -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p class="text-xs text-gray-500 mb-1">Check in</p>
              <p class="text-sm font-medium text-[#0f1729]">Thu, Mar 18</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">Check out</p>
              <p class="text-sm font-medium text-[#0f1729]">Thu, Mar 24</p>
            </div>
          </div>

          <!-- Guests Info -->
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p class="text-xs text-gray-500 mb-1">Dogs</p>
              <p class="text-sm font-medium text-[#0f1729]">1</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">People</p>
              <p class="text-sm font-medium text-[#0f1729]">2</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">Stored card</p>
              <p class="text-sm font-medium text-[#0f1729]">•••• 2345</p>
            </div>
          </div>

          <!-- Book Button -->
          <button class="w-full bg-[#605bff] text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Book now • 120.-
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

