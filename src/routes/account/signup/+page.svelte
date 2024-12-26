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

      <!-- Partner Logos -->
      <div class="flex space-x-6 mt-auto">
        
      </div>

      <!-- Add testimonials here, before the final closing div -->
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

  <!-- Right Section with Form -->
  <div class="w-full lg:w-1/2 p-4">
    <div class="max-w-md mx-auto h-full flex flex-col">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <img src="/images/lgopis.png" alt="Mollie" class="h-8" />
        <a href="/account/login" class="text-gray-600 hover:text-[#605bff] text-sm font-medium bg-gray-100 px-4 py-2 rounded-lg">
          Sign in
        </a>
      </div>

      <!-- Form section -->
      <div class="flex-1">
        <h1 class="text-xl font-bold mb-2 text-[#32325d]">Get Started</h1>
        <p class="text-sm text-gray-500 mb-4">Create your account and start processing payments instantly.</p>
        
        <form class="space-y-3">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
            <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <Select
              items={formattedCountries}
              bind:value={selectedCountry}
              class="country-select"
              placeholder="Select your country"
              let:item
            >
              {Item(item)}
            </Select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
              <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input type="url" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" placeholder="https://" />
            </div>
          </div>

          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type={showPassword ? "text" : "password"} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]" required />
            <button type="button" class="absolute right-3 top-[55%] text-gray-400 hover:text-gray-600" on:click={togglePassword}>
              {#if showPassword}
                <i class="fa-regular fa-eye-slash"></i>
              {:else}
                <i class="fa-regular fa-eye"></i>
              {/if}
            </button>
          </div>

          <button type="submit" class="w-full bg-[#605bff] text-white py-3 rounded-lg hover:bg-[#605bff]/90 transition-colors font-medium text-lg flex items-center justify-center gap-2">
            <i class="fas fa-user-plus"></i>
            Sign up
          </button>

          <!-- Footer Links -->
          <div class="text-sm text-gray-500 space-x-4">
            <a href="/termsconditions" class="hover:text-[#605bff]">Terms & conditions</a>
            <a href="/privacy" class="hover:text-[#605bff]">Privacy policy</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  :global(.country-select) {
    --border-radius: 0.5rem;
    --border-color: #e5e7eb;
    --border-hover-color: #605bff;
  }
  :global(.selectContainer) {
    --border-radius: 0.5rem;
    --border: 1px solid #e5e7eb;
    --padding: 0.5rem 0.75rem;
  }
  :global(.selectContainer:hover) {
    --border: 1px solid #605bff;
  }

  @keyframes pulse {
    0% { opacity: 0.3; }
    50% { opacity: 0.6; }
    100% { opacity: 0.3; }
  }

  :global(.bg-\[#F8F9FF\] div) {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
