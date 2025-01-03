<script lang="ts">
  import { onMount } from 'svelte';
  
  let showPassword = false;
  const togglePassword = () => showPassword = !showPassword;

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
      text: "The 24/7 support team at IpsePay is always there to help. They've gone above and beyond to ensure my business runs smoothly.",
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
      text: "IpsePay made integrating their payment solution into my system so simple. I've been able to manage transactions effortlessly since day one.",
      avatar: "/images/profile3.jpeg",
      rating: 5
    }
  ];

  let currentIndex = 0;
  
  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 2) % testimonials.length;
    }, 4000);

    return () => clearInterval(interval);
  });
</script>

<div class="min-h-screen bg-gray-50 lg:flex lg:overflow-hidden">
  <!-- Left Section - Now visible on mobile -->
  <div class="lg:w-[60%] p-4 lg:p-8 flex flex-col justify-between relative">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4 relative z-10">
      <a href="/" class="hover:opacity-90 transition-opacity">
        <img src="/images/lgopis.png" alt="IpsePay" class="h-6" />
      </a>
      <a href="/account/signup" 
         class="inline-flex items-center gap-1 text-[#605bff] text-xs font-medium
                bg-[#605bff]/10 px-3 py-2 rounded-lg">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Sign up
      </a>
    </div>

    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent">
      <div class="absolute inset-0 opacity-10" 
           style="background-image: radial-gradient(#605bff 1px, transparent 1px);
                  background-size: 24px 24px;">
      </div>
    </div>
    
    <!-- Content wrapper - Adjusted spacing -->
    <div class="relative space-y-4 lg:space-y-6 w-full max-w-3xl mx-auto mt-2">
      <!-- Trust Badge -->
      <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-3 py-1">
        <svg class="w-4 h-4 lg:w-5 lg:h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span class="text-xs lg:text-sm font-medium text-[#605bff]">Secure Login Portal</span>
      </div>

      <!-- New Security Features Section -->
      <div class="bg-white/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20">
        <h3 class="text-sm lg:text-base font-semibold text-[#32325d] mb-4">Enhanced Security Features</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-[#605bff]/10 rounded-lg">
              <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-[#32325d]">2FA Protection</h4>
              <p class="text-xs text-gray-600">Extra security layer</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="p-2 bg-[#605bff]/10 rounded-lg">
              <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-[#32325d]">SSL Encryption</h4>
              <p class="text-xs text-gray-600">Bank-level security</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Section - Adjusted spacing -->
      <div class="bg-white/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20">
        <h2 class="text-2xl lg:text-3xl font-bold text-[#32325d] mb-2">
          Access Your<br/>
          <span class="text-[#605bff]">Merchant Dashboard</span>
        </h2>
        <p class="text-sm lg:text-base text-gray-600 mb-4">Monitor transactions, manage payments, and grow your business</p>
        
        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-3 lg:gap-6">
          <div class="bg-white/60 rounded-lg lg:rounded-xl p-3 lg:p-4 backdrop-blur-sm">
            <div class="text-xl lg:text-2xl font-bold text-[#605bff] mb-0.5 lg:mb-1">$2B+</div>
            <div class="text-xs lg:text-sm text-gray-600">Processed Annually</div>
          </div>
          <div class="bg-white/60 rounded-lg lg:rounded-xl p-3 lg:p-4 backdrop-blur-sm">
            <div class="text-xl lg:text-2xl font-bold text-[#605bff] mb-0.5 lg:mb-1">150+</div>
            <div class="text-xs lg:text-sm text-gray-600">Countries Served</div>
          </div>
          <div class="bg-white/60 rounded-lg lg:rounded-xl p-3 lg:p-4 backdrop-blur-sm">
            <div class="text-xl lg:text-2xl font-bold text-[#605bff] mb-0.5 lg:mb-1">99.9%</div>
            <div class="text-xs lg:text-sm text-gray-600">Uptime</div>
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
      <div class="bg-white/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20">
        <h3 class="text-xs lg:text-sm font-medium text-gray-500 mb-3 lg:mb-4">Trusted By Leading Platforms</h3>
        <div class="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-4">
          <img src="/images/brands/Shopy.png" alt="Shopify" class="h-6 lg:h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
          <img src="/images/brands/woocommerce.png" alt="WooCommerce" class="h-6 lg:h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
          <img src="/images/brands/magento.png" alt="Magento" class="h-6 lg:h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
          <img src="/images/brands/opencart.png" alt="PrestaShop" class="h-6 lg:h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
        </div>
      </div>

      <!-- New Activity Monitor Section -->
      <div class="bg-white/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20">
        <h3 class="text-sm lg:text-base font-semibold text-[#32325d] mb-4">Real-Time Dashboard Features</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-white/60 rounded-lg p-3 backdrop-blur-sm">
            <svg class="w-5 h-5 text-[#605bff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h4 class="text-xs font-medium text-[#32325d]">Analytics</h4>
          </div>
          <div class="bg-white/60 rounded-lg p-3 backdrop-blur-sm">
            <svg class="w-5 h-5 text-[#605bff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 class="text-xs font-medium text-[#32325d]">Transactions</h4>
          </div>
          <div class="bg-white/60 rounded-lg p-3 backdrop-blur-sm">
            <svg class="w-5 h-5 text-[#605bff] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h4 class="text-xs font-medium text-[#32325d]">Reports</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Section - Login Form -->
  <div class="w-full lg:w-[40%] p-4 lg:p-8 flex items-center justify-center">
    <div class="bg-white rounded-xl p-4 lg:p-6 shadow-lg w-full max-w-md">
      <div class="text-center mb-4 lg:mb-6">
        <h1 class="text-xl lg:text-2xl font-bold mb-1 lg:mb-2 text-[#32325d]">Welcome Back</h1>
        <p class="text-xs lg:text-sm text-gray-600">Sign in to your account</p>
      </div>

      <!-- Form remains the same but with responsive adjustments -->
      <form class="space-y-4">
        <!-- Email Field -->
        <div class="form-group">
          <label class="form-label">Email address</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <input type="email" class="form-input" placeholder="you@example.com" required />
          </div>
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="relative">
            <svg class="input-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            <input 
              type={showPassword ? "text" : "password"} 
              class="form-input" 
              placeholder="Enter your password" 
              required 
            />
            <!-- Password toggle button -->
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

        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-[#605bff] focus:ring-[#605bff]"
            />
            <label for="remember" class="ml-2 text-xs lg:text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <a href="/account/forgot-password" class="text-xs lg:text-sm text-[#605bff] hover:text-[#605bff]/80">
            Forgot password?
          </a>
        </div>

        <!-- Login Button -->
        <button 
          type="submit" 
          class="w-full bg-[#605bff] text-white py-3 lg:py-3.5 rounded-xl hover:bg-[#605bff]/90 
                 transition-all duration-300 font-medium text-sm lg:text-base flex items-center 
                 justify-center gap-2 shadow-lg shadow-[#605bff]/25 hover:shadow-xl 
                 hover:shadow-[#605bff]/20 mt-6"
        >
          Sign In
          <svg class="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</div>

<style>
  .input-icon {
    @apply w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2;
  }

  .form-label {
    @apply text-xs lg:text-sm font-medium text-gray-700 mb-1;
  }

  .form-input {
    @apply w-full h-10 lg:h-11 px-3 lg:px-4 py-2 text-sm lg:text-base bg-gray-50 
           border border-gray-200 rounded-lg lg:rounded-xl
           focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]
           placeholder-gray-400 transition-all duration-200 pl-10 lg:pl-11;
  }

  .form-group {
    @apply space-y-1;
  }
</style>
