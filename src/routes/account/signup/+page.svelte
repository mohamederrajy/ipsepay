<script>
  import { onMount } from 'svelte';
  import Select from 'svelte-select';
  import countries from 'world-countries';
  
  let showPassword = false;
  let selectedCountry = null;

  // Format countries for the select component
  const formattedCountries = countries.map(country => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag
  }));

  const Item = (item) => `
    <div class="flex items-center gap-2">
      <span class="text-lg">${item.flag}</span>
      <span>${item.label}</span>
    </div>
  `;

  let currentIndex = 0;
  
  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 2) % testimonials.length;
    }, 4000);

    return () => clearInterval(interval);
  });

  const testimonials = [
    {
      name: "Olga Malinochka",
      country: "Ukraine",
      date: "15 Feb, 2024",
      title: "Reliable and Fast Service",
      text: "IpsePay has transformed how I handle payments for my high-risk business. The fast payouts and secure platform give me peace of mind every day",
      avatar: "/images/blog/profile1.jpg",
      rating: 5
    },
    {
      name: "Emma L",
      country: "Australia",
      date: "22 Jun, 2024",
      title: "Exceptional Customer Support",
      text: "The 24/7 support team at IpsePay is always there to help. They ve gone above and beyond to ensure my business runs smoothly.",
      avatar: "/images/4profi.webp",
      rating: 5
    },
    {
      name: "Michael Smith",
      country: "United Kingdom",
      date: "3 Mar, 2024",
      title: "Perfect for High-Risk Businesses",
      text: "Finding a gateway that supported my industry was a challenge until I discovered IpsePay. Their team is professional, and the service is unmatched",
      avatar: "/images/prifilee.jpeg",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      country: "Canada",
      date: "18 Apr, 2024",
      title: "Seamless Integration",
      text: "IpsePay made integrating their payment solution into my system so simple. I’ve been able to manage transactions effortlessly since day one.",
      avatar: "/images/profile3.jpeg",
      rating: 5
    }
  ];

  const togglePassword = () => showPassword = !showPassword;
</script>

<div class="h-screen flex bg-gray-50 overflow-hidden">
  <!-- Left Section -->
  <div class="hidden lg:flex lg:w-[60%] p-8 flex-col justify-between relative overflow-hidden">
    <!-- Added Header -->
    <div class="flex justify-between items-center mb-2 ml-10 relative z-10"> <!-- Added z-10 to show above gradient -->
      <a href="/" class="hover:opacity-90 transition-opacity">
        <img src="/images/lgopis.png" alt="IpsePay" class="h-6" />
      </a>
      <a href="/account/login" 
         class="inline-flex items-center gap-1 text-[#605bff] text-xs font-medium
                bg-[#605bff]/10 px-2 py-3 rounded-lg">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        Sign in
      </a>
    </div>

    <!-- Modern gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent">
      <div class="absolute inset-0 opacity-10" 
           style="background-image: radial-gradient(#605bff 1px, transparent 1px);
                  background-size: 24px 24px;">
      </div>
    </div>
    
    <!-- Content wrapper - adjusted for larger space -->
    <div class="relative space-y-12 max-w-3xl mx-auto w-full">
      <!-- Trust Badge -->
      <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-3 py-1">
        <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span class="text-sm font-medium text-[#605bff]">Trusted by 10,000+ merchants</span>
      </div>

      <!-- Features List - replaced with new section -->
      <div class="space-y-8">
        <!-- Hero Section -->
        <div class="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 class="text-3xl font-bold text-[#32325d] mb-4">
            Start Accepting <br/>
            <span class="text-[#605bff]">Global Payments</span> Today
          </h2>
          <p class="text-gray-600 text-lg mb-6">Join thousands of businesses that trust IpsePay for their payment needs</p>
          
          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
              <div class="text-2xl font-bold text-[#605bff] mb-1">$2B+</div>
              <div class="text-sm text-gray-600">Processed Annually</div>
            </div>
            <div class="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
              <div class="text-2xl font-bold text-[#605bff] mb-1">150+</div>
              <div class="text-sm text-gray-600">Countries Served</div>
            </div>
            <div class="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
              <div class="text-2xl font-bold text-[#605bff] mb-1">99.9%</div>
              <div class="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 bg-[#605bff]/10 rounded-xl">
                <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-[#32325d]">Instant Payouts</h3>
                <p class="text-sm text-gray-600">Get paid within 24 hours</p>
              </div>
            </div>
          </div>

          <div class="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 bg-[#605bff]/10 rounded-xl">
                <svg class="w-6 h-6 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-[#32325d]">Secure Platform</h3>
                <p class="text-sm text-gray-600">Bank-grade security</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Integration Partners -->
        <div class="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 class="text-sm font-medium text-gray-500 mb-4">Trusted By Leading Platforms</h3>
          <div class="flex items-center justify-between">
            <img src="/images/brands/Shopy.png" alt="Shopify" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
            <img src="/images/brands/woocommerce.png" alt="WooCommerce" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
            <img src="/images/brands/magento.png" alt="Magento" class="h-8  hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
            <img src="/images/brands/opencart.png" alt="PrestaShop" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
          </div>
        </div>

        <!-- Support Section - White Background -->
        
        
          
       
      </div>
    </div>
  </div>

  <!-- Right Section - Form Adjustments -->
  <div class="w-full lg:w-[40%] p-4"> <!-- Reduced padding -->
    <!-- Header - Reduced margins -->
    

    <!-- Form Container - Adjusted spacing -->
    <div class="bg-white rounded-xl p-4 shadow-lg"> <!-- Reduced padding -->
      <!-- Form Header - Compact -->
      <div class="mb-3"> <!-- Reduced margin -->
        <h1 class="text-lg font-bold mb-1 text-[#32325d]">Get Started</h1>
        <p class="text-xs text-gray-600">Create your account to process payments</p>
      </div>

      <!-- Form - Tighter spacing -->
      <form class="space-y-3"> <!-- Reduced gap -->
        <!-- Name Fields in one line -->
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label class="form-label">First name</label>
            <div class="relative">
              <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <input type="text" class="form-input pl-10" placeholder="John" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Last name</label>
            <div class="relative">
              <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <input type="text" class="form-input pl-10" placeholder="Doe" required />
            </div>
          </div>
        </div>

        <!-- Single line fields -->
        <div class="form-group">
          <label class="form-label">Email address</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <input type="email" class="form-input pl-10" placeholder="you@example.com" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Phone number</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <input type="tel" class="form-input pl-10" placeholder="+1 (555) 000-0000" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Country</label>
          <Select
            items={formattedCountries}
            bind:value={selectedCountry}
            class="country-select"
            placeholder="Select your country"
            let:item
          >
            <div class="flex items-center gap-2 px-2">
              <span class="text-lg">{item.flag}</span>
              <span class="text-gray-700">{item.label}</span>
            </div>
          </Select>
        </div>

        <div class="form-group">
          <label class="form-label">Address</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <input type="text" class="form-input pl-10" placeholder="Enter your full address" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">ZIP Code</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <input type="text" class="form-input pl-10" placeholder="Enter ZIP code" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            <input 
              type={showPassword ? "text" : "password"} 
              class="form-input pl-10 pr-10" 
              placeholder="Create a secure password" 
              required 
            />
            <button 
              type="button" 
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              on:click={togglePassword}
            >
              {#if showPassword}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              {:else}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              {/if}
            </button>
          </div>
        </div>

        <!-- Terms and Submit Button -->
        <div class="space-y-6 pt-4">
          <div class="flex items-start space-x-3">
            <input
              id="terms"
              type="checkbox"
              class="mt-1 h-4 w-4 rounded border-gray-300 text-[#605bff] focus:ring-[#605bff]"
              required
            />
            <label for="terms" class="text-sm text-gray-600">
              By signing up, you agree to our 
              <a href="/terms" class="text-[#605bff] hover:text-[#605bff]/80 font-medium">Terms & Conditions</a>
              {" and "}
              <a href="/privacy" class="text-[#605bff] hover:text-[#605bff]/80 font-medium">Privacy Policy</a>
            </label>
          </div>

          <button 
            type="submit" 
            class="w-full bg-[#605bff] text-white py-3.5 rounded-xl hover:bg-[#605bff]/90 
                   transition-all duration-300 font-medium text-base flex items-center 
                   justify-center gap-2 shadow-lg shadow-[#605bff]/25 hover:shadow-xl 
                   hover:shadow-[#605bff]/20"
          >
            Create Account
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  /* Improved input and icon styles */
  .form-input {
    @apply w-full h-11 px-4 py-2 text-base bg-gray-50 border border-gray-200 rounded-xl
           focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]
           placeholder-gray-400 transition-all duration-200 pl-11; /* Increased left padding for icon */
  }

  .input-icon {
    @apply w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2;
    /* Improved icon positioning */
  }

  .form-label {
    @apply text-sm font-medium text-gray-700 mb-1; /* Slightly larger labels */
  }

  /* Adjust select height to match inputs */
  :global(.country-select) {
    --height: 2.75rem; /* Match input height */
    --border-radius: 0.75rem;
    --border-color: #e5e7eb;
    --border-hover-color: #605bff;
    --background: #f9fafb;
    font-size: 1rem;
  }

  :global(.selectContainer) {
    --border-radius: 0.75rem;
    --border: 1px solid #e5e7eb;
    --padding: 0.5rem 1rem 0.5rem 2.75rem; /* Adjusted padding for icon alignment */
  }

  /* Maintain compact form but with larger inputs */
  .form-group {
    @apply space-y-1;
  }

  /* Adjust spacing between form elements */
  :global(.space-y-6) {
    @apply space-y-4;
  }

  :global(.space-y-8) {
    @apply space-y-4;
  }

  /* Make form container more compact but accommodate larger inputs */
  :global(.p-8) {
    @apply p-5;
  }

  /* Larger button to match inputs */
  :global(.py-3\.5) {
    @apply py-3;
  }
</style>
