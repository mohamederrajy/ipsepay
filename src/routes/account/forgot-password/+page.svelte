<script>
  import { onMount } from 'svelte';
  
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
      text: "IpsePay made integrating their payment solution into my system so simple. I've been able to manage transactions effortlessly since day one.",
      avatar: "/images/profile3.jpeg",
      rating: 5
    }
  ];
</script>

<div class="min-h-screen bg-gray-50">
  <div class="flex flex-col lg:flex-row h-screen">
    <!-- Left Section -->
    <div class="hidden lg:flex lg:w-[60%] p-6 flex-col relative overflow-hidden">
      <!-- Header - Reduced top margin -->
      <div class="flex justify-between items-center mb-4 relative z-10">
        <a href="/" class="hover:opacity-90 transition-opacity">
          <img src="/images/lgopis.png" alt="IpsePay" class="h-5" />
        </a>
        <a href="/account/login" 
           class="inline-flex items-center gap-1 text-[#605bff] text-xs font-medium
                  bg-[#605bff]/10 px-2 py-2 rounded-lg">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Sign in
        </a>
      </div>

      <!-- Content wrapper - Adjusted spacing -->
      <div class="relative space-y-4 max-w-3xl mx-auto w-full mt-2">
        <!-- Trust Badge -->
        <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-3 py-1">
          <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="text-xs font-medium text-[#605bff]">Secure Account Recovery</span>
        </div>

        <!-- New Security Features Section -->
        <div class="bg-white/40 backdrop-blur-sm rounded-xl p-5 border border-white/20">
          <h2 class="text-2xl font-bold text-[#32325d] mb-3">
            Secure Password <br/>
            <span class="text-[#605bff]">Recovery Process</span>
          </h2>
          <p class="text-gray-600 text-base mb-4">Our advanced security measures ensure your account remains protected</p>
          
          <!-- Security Features Grid -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-[#605bff]/10 rounded-lg">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-[#32325d] text-sm">Verified Email</h3>
                  <p class="text-xs text-gray-600">Secure link sent to your email</p>
                </div>
              </div>
            </div>
            <div class="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-[#605bff]/10 rounded-lg">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-[#32325d] text-sm">Time-Limited</h3>
                  <p class="text-xs text-gray-600">Links expire in 30 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Steps Section -->
        <div class="bg-white/40 backdrop-blur-sm rounded-xl p-5 border border-white/20">
          <h3 class="text-sm font-medium text-gray-500 mb-4">Recovery Steps</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center text-xs font-medium text-[#605bff]">1</div>
              <p class="text-sm text-gray-600">Enter your registered email address</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center text-xs font-medium text-[#605bff]">2</div>
              <p class="text-sm text-gray-600">Check your inbox for recovery link</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-[#605bff]/10 flex items-center justify-center text-xs font-medium text-[#605bff]">3</div>
              <p class="text-sm text-gray-600">Create your new secure password</p>
            </div>
          </div>
        </div>

        <!-- Integration Partners - Kept but moved up -->
        <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 class="text-sm font-medium text-gray-500 mb-4">Trusted By Leading Platforms</h3>
          <div class="flex items-center justify-between">
            <img src="/images/brands/Shopy.png" alt="Shopify" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
            <img src="/images/brands/woocommerce.png" alt="WooCommerce" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
            <img src="/images/brands/magento.png" alt="Magento" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
            <img src="/images/brands/opencart.png" alt="PrestaShop" class="h-8 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-200" />
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section - Password Recovery Form -->
    <div class="w-full lg:w-[40%] h-screen p-4 lg:p-6 flex flex-col justify-center items-center">
      <!-- Mobile Header - Moved outside form container -->
      <div class="lg:hidden w-full flex justify-between items-center mb-4 absolute top-4 left-4 right-4">
        <a href="/" class="hover:opacity-90 transition-opacity">
          <img src="/images/lgopis.png" alt="IpsePay" class="h-5" />
        </a>
      </div>

      <!-- Form Container - Now centered -->
      <div class="bg-white rounded-xl p-4 shadow-lg w-full max-w-md">
        <div class="mb-4">
          <h1 class="text-lg font-bold mb-1 text-[#32325d]">Reset Password</h1>
          <p class="text-xs text-gray-600">Enter your email to receive recovery instructions</p>
        </div>

        <form class="space-y-4">
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

          <button 
            type="submit" 
            class="w-full bg-[#605bff] text-white py-3 rounded-xl hover:bg-[#605bff]/90 
                   transition-all duration-300 font-medium text-base flex items-center 
                   justify-center gap-2 shadow-lg shadow-[#605bff]/25 hover:shadow-xl 
                   hover:shadow-[#605bff]/20"
          >
            Send Recovery Link
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>

          <div class="text-center">
            <a href="/account/login" class="text-sm text-[#605bff] hover:text-[#605bff]/80">
              Back to Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  /* Same styles as signup page */
  .form-input {
    @apply w-full h-9 lg:h-10 px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg
           focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]
           placeholder-gray-400 transition-all duration-200 pl-9;
  }

  .input-icon {
    @apply w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2;
  }

  .form-label {
    @apply text-xs font-medium text-gray-700 mb-1;
  }

  .form-group {
    @apply space-y-1;
  }
</style>