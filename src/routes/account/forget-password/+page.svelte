<script lang="ts">
  import { onMount } from 'svelte';
  
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

<div class="h-screen flex">
  <!-- Left Section with Features -->
  <div class="hidden lg:flex lg:w-1/2 p-8 flex-col justify-between relative overflow-hidden">
    <!-- Background layers -->
    <div class="absolute inset-0 bg-[#F8F9FF]">
      <div class="absolute inset-0" 
           style="background-image: radial-gradient(#D1D5DB 1px, transparent 1px);
                  background-size: 24px 24px;">
      </div>
    </div>
    
    <!-- Content wrapper -->
    <div class="relative space-y-12">
      <!-- Star Rating -->
      <div class="flex text-yellow-400 text-2xl">
        ★★★★<span class="text-yellow-200">★</span>
      </div>

      <!-- Features List -->
      <div class="space-y-12">
        <div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-2">Best in-class support</h3>
          <p class="text-gray-600">Get industry-leading support whenever you need it.</p>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-2">Reduce complexity</h3>
          <p class="text-gray-600">Offer all payment methods through one integration.</p>
          <div class="flex mt-4 space-x-2">
            <img src="/images/brands/pay-payl.png" alt="iDeal" class="h-8" />
            <img src="/images/brands/mscrad.png" alt="Mastercard" class="h-8" />
            <img src="/images/brands/vss.png" alt="Visa" class="h-8" />
            <img src="/images/brands/amex.png" alt="Amex" class="h-8" />
            <img src="/images/brands/G-pay.png" alt="Amex" class="h-8" />
            <img src="/images/brands/A-pay.png" alt="Amex" class="h-8" />
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-[#32325d] mb-2">Prebuilt integrations</h3>
          <p class="text-gray-600">Connect to your ecommerce platform and tech stack with our ready-made plugins.</p>
          <div class="flex mt-4 space-x-2">
            <img src="/images/brands/woocommerce.png" alt="WooCommerce" class="h-8" />
            <img src="/images/brands/Shopy.png" alt="shopify" class="h-8" />
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="-mt-4 overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out" 
             style:transform={`translateX(-${currentIndex * 50}%)`}>
          {#each testimonials as testimonial}
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white rounded-lg p-4 shadow-sm">
                <div class="flex items-center space-x-2 mb-2">
                  <img src={testimonial.avatar} alt={testimonial.name} class="w-8 h-8 rounded-full"/>
                  <div>
                    <h4 class="font-medium text-[#32325d] text-sm">{testimonial.name}</h4>
                    <p class="text-xs text-gray-500">{testimonial.country}</p>
                  </div>
                </div>
                <div class="flex text-yellow-400 text-xs mb-1">
                  {#each Array(testimonial.rating) as _}★{/each}
                </div>
                <p class="text-xs text-gray-500 mb-1">{testimonial.date}</p>
                <h5 class="font-medium text-[#32325d] text-sm mb-1">{testimonial.title}</h5>
                <p class="text-xs text-gray-600 line-clamp-2">{testimonial.text}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Right Section with Forgot Password Form -->
  <div class="w-full lg:w-1/2 p-4 flex items-center justify-center">
    <div class="max-w-md w-full">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <img src="/images/lgopis.png" alt="Mollie" class="h-8" />
        <a href="/account/login" class="text-gray-600 hover:text-[#605bff] text-sm font-medium bg-gray-100 px-4 py-2 rounded-lg">
          Sign in
        </a>
      </div>

      <!-- Form section -->
      <div class="space-y-6">
        <div class="text-center">
          <h1 class="text-2xl font-bold mb-2 text-[#32325d]">Reset Password</h1>
          <p class="text-sm text-gray-500">Enter your email address and we'll send you instructions to reset your password.</p>
        </div>
        
        <form class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input 
              type="email" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" 
              required 
            />
          </div>

          <button 
            type="submit" 
            class="w-full bg-[#605bff] text-white py-3 rounded-lg hover:bg-[#605bff]/90 transition-colors font-medium text-lg flex items-center justify-center gap-2"
          >
            <i class="fas fa-paper-plane"></i>
            Send Reset Link
          </button>

          <div class="text-center">
            <p class="text-gray-500 text-sm">
              Remember your password? 
              <a href="/account/login" class="text-[#605bff] hover:text-[#605bff]/80 font-medium">
                Sign in
              </a>
            </p>
          </div>

          <!-- Footer Links -->
          <div class="text-sm text-gray-500 space-x-4 text-center pt-4">
            <a href="/termsconditions" class="hover:text-[#605bff]">Terms & conditions</a>
            <a href="/privacy" class="hover:text-[#605bff]">Privacy policy</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes pulse {
    0% { opacity: 0.3; }
    50% { opacity: 0.6; }
    100% { opacity: 0.3; }
  }

  :global(.bg-\[#F8F9FF\] div) {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .grayscale {
    filter: grayscale(100%);
  }
</style>
