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

  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(event) {
    mouseX = event.clientX / window.innerWidth;
    mouseY = event.clientY / window.innerHeight;
  }
</script>

<div class="min-h-screen flex relative overflow-hidden" on:mousemove={handleMouseMove}>
  <!-- Left Section -->
  <div class="hidden lg:flex lg:w-[60%] relative">
    <!-- Interactive Background -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute inset-0 opacity-50"
           style="background: radial-gradient(circle at {mouseX * 100}% {mouseY * 100}%, 
                  rgba(96, 91, 255, 0.1), 
                  transparent 40%),
                  radial-gradient(circle at {100 - mouseX * 100}% {100 - mouseY * 100}%, 
                  rgba(111, 76, 255, 0.1), 
                  transparent 40%);">
      </div>
      
      <!-- Animated Grid -->
      <div class="absolute inset-0 opacity-[0.07]"
           style="background-image: linear-gradient(#605bff 1px, transparent 1px),
                  linear-gradient(to right, #605bff 1px, transparent 1px);
                  background-size: 40px 40px;
                  transform: perspective(1000px) rotateX({mouseY * 5}deg) rotateY({mouseX * 5}deg);
                  transition: transform 0.1s ease-out;">
      </div>
    </div>

    <!-- Content -->
    <div class="w-full p-12 flex flex-col relative z-10">
      <div class="w-full flex flex-col h-full">
        <!-- Header -->
        <nav class="flex justify-between items-center mb-8">
          <img src="/images/lgopis.png" alt="IpsePay" class="h-8" />
          <a href="/account/login" 
             class="group flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md 
                    rounded-xl border border-white/20 hover:border-[#605bff]/20 
                    transition-all duration-300 shadow-lg shadow-[#605bff]/5">
            <span class="text-sm font-medium text-gray-600">Back to</span>
            <span class="text-[#605bff] font-medium relative">
              Sign in
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#605bff] 
                           group-hover:w-full transition-all duration-300"></span>
            </span>
            <svg class="w-4 h-4 text-[#605bff] transform group-hover:translate-x-1 transition-transform" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </nav>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col justify-between max-w-xl h-full">
          <!-- Title Section -->
          <div class="mb-6">
            <!-- Animated Badge -->
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#605bff]/5 to-purple-500/5 
                        rounded-full mb-5 border border-[#605bff]/10">
              <div class="flex items-center gap-2">
                <svg class="w-3 h-3 text-[#605bff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path fill="white" d="M11 14.414L7.586 11 6 12.586l5 5 8-8L17.586 8z"/>
                </svg>
                <div class="h-3 w-[1px] bg-[#605bff]/20"></div>
                <span class="text-sm font-medium bg-gradient-to-r from-[#605bff] to-purple-500 
                             bg-clip-text text-transparent">Account Recovery</span>
              </div>
            </div>

            <!-- Title -->
            <div class="space-y-3">
              <div class="relative">
                <h1 class="text-[3.25rem] font-bold tracking-tight leading-[1.1]">
                  <span class="text-gray-900/80">Reset Your</span>
                  <br />
                  <div class="relative inline-flex items-center">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#605bff] to-purple-500">Password</span>
                    <div class="absolute -right-12 top-0 flex items-center gap-1">
                      <span class="text-2xl animate-bounce-slow delay-100">🔐</span>
                      <span class="text-xl animate-bounce-slow delay-300">✨</span>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>

          <!-- Enhanced Description -->
          <p class="text-lg text-gray-600 mb-12 relative">
            We'll help you recover your account with our
            <span class="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              secure
            </span>
            recovery process.
          </p>

          <!-- Security Features Grid -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <!-- Security feature cards (same structure as login page) -->
            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">Email Verification</h3>
                  <p class="text-sm text-gray-600">Secure link sent to your inbox</p>
                </div>
              </div>
            </div>

            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">Quick Recovery</h3>
                  <p class="text-sm text-gray-600">Reset within minutes</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trust Badge -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex -space-x-2">
              {#each Array(4) as _, i}
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-[#605bff] to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              {/each}
            </div>
            <p class="text-sm text-gray-600">
              Trusted by <span class="font-semibold text-gray-900">10,000+</span> businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Section - Password Recovery Form -->
  <div class="w-full lg:w-[40%] p-3 flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50/50">
    <div class="w-full max-w-[500px] pt-3 px-6 relative">
      <!-- Enhanced Header -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#605bff]/10 to-purple-500/10 
                    rounded-full mb-3 hover:from-[#605bff]/20 hover:to-purple-500/20 transition-all duration-300">
          <div class="flex space-x-1">
            {#each Array(3) as _, i}
              <div class="w-1.5 h-1.5 rounded-full bg-[#605bff] animate-pulse" 
                   style="animation-delay: {i * 200}ms"></div>
            {/each}
          </div>
          <span class="text-sm font-semibold text-[#605bff]">Password Recovery</span>
        </div>
        
        <h2 class="text-3xl font-bold mb-2 text-gray-900">Reset Password</h2>
        <p class="text-sm text-gray-600">Enter your email to receive recovery instructions</p>
      </div>

      <!-- Form Card -->
      <div class="bg-white shadow-lg rounded-2xl border border-gray-100 p-8">
        <form class="space-y-6">
          <!-- Email Input -->
          <div class="form-group">
            <label class="text-gray-900 text-sm font-semibold mb-2 block">Email address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <input type="email" class="modern-input" placeholder="you@example.com" required />
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white px-7 py-3 rounded-xl
                   font-medium flex items-center justify-center gap-2 shadow-lg shadow-[#605bff]/25
                   hover:shadow-xl hover:shadow-[#605bff]/30 transform hover:-translate-y-0.5
                   transition-all duration-300 group text-sm"
          >
            Send Recovery Link
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <!-- Back to Login Link -->
          <div class="mt-6 pt-6 text-center border-t border-gray-100">
            <a 
              href="/account/login" 
              class="text-[#605bff] font-medium hover:text-[#605bff]/80 relative inline-flex items-center group"
            >
              Back to Sign In
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#605bff] 
                         group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  .modern-input {
    @apply w-full h-11 px-4 pl-12 bg-white border border-gray-200 rounded-lg
           focus:outline-none focus:ring-1 focus:ring-[#605bff]/10 focus:border-[#605bff]
           text-gray-800 placeholder-gray-500 transition-all duration-200
           hover:border-[#605bff]/40 text-[14px] leading-normal tracking-tight
           hover:bg-white focus:bg-white font-medium;
  }

  .modern-input::placeholder {
    @apply text-gray-400 text-[14px] font-normal;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .animate-pulse {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>