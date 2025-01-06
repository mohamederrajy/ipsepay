<script>
  import { onMount } from 'svelte';
  import Select from 'svelte-select';
  import countries from 'world-countries';
  
  let selectContainer;
  let dropdownOpen = false;
  let showPassword = false;
  let selectedCountry = null;
  let isLoading = false;
  let formStep = 1;
  let activeTestimonial = 0;
  let mouseX = 0;
  let mouseY = 0;

  function handleDropdownOpen() {
    dropdownOpen = true;
  }

  function handleDropdownClose() {
    dropdownOpen = false;
  }

  // Enhanced country formatting with flags
  const formattedCountries = countries.map(country => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    item: `<div class="flex items-center gap-2">
            <span class="text-lg">${country.flag}</span>
            <span>${country.name.common}</span>
          </div>`
  }));

  // Sort countries alphabetically
  formattedCountries.sort((a, b) => a.label.localeCompare(b.label));

  const testimonials = [
    {
      name: "Olga Malinochka",
      country: "Ukraine",
      title: "Reliable and Fast Service",
      text: "IpsePay has transformed how I handle payments for my high-risk business.",
      avatar: "/images/blog/profile1.jpg",
      rating: 5
    },
    {
      name: "Emma L",
      country: "Australia",
      title: "Exceptional Support",
      text: "The 24/7 support team at IpsePay is always there to help.",
      avatar: "/images/4profi.webp",
      rating: 5
    }
  ];

  const features = [
    { title: 'Lightning Fast', description: 'Process payments instantly' },
    { title: 'Bank-Grade Security', description: 'Enterprise-level protection' },
    { title: 'Global Coverage', description: 'Accept payments worldwide' },
    { title: 'Real-time Analytics', description: 'Track your growth' }
  ];

  const stats = [
    { value: '$2B+', label: 'Processed' },
    { value: '150+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' }
  ];

  function handleMouseMove(event) {
    mouseX = event.clientX / window.innerWidth;
    mouseY = event.clientY / window.innerHeight;
  }

  const benefits = [
    {
      icon: '🚀',
      title: 'Instant Setup',
      description: 'Get started in minutes'
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description: 'PCI DSS Level 1'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: '150+ Countries'
    }
  ];

  onMount(() => {
    const interval = setInterval(() => {
      activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>
<div class="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
  <!-- Left Section - Hide on mobile -->
  <div class="hidden lg:flex lg:w-[60%] relative">
    <!-- Interactive Background - Now only affects left side -->
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

    <!-- Rest of left section content -->
    <div class="w-full p-12 flex flex-col relative z-10">
      <!-- Header -->
      <div class="w-full flex flex-col h-full">
        <nav class="flex justify-between items-center mb-8">
          <img src="/images/lgopis.png" alt="IpsePay" class="h-8" />
          <a href="/account/login" 
             class="group flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md 
                    rounded-xl border border-white/20 hover:border-[#605bff]/20 
                    transition-all duration-300 shadow-lg shadow-[#605bff]/5">
            <span class="text-sm font-medium text-gray-600">Already have an account?</span>
            <span class="text-[#605bff] font-medium relative">
              Sign in
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#605bff] 
                           group-hover:w-full transition-all duration-300"></span>
            </span>
            <!-- Arrow icon -->
            <svg class="w-4 h-4 text-[#605bff] transform group-hover:translate-x-1 transition-transform" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </nav>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col justify-between max-w-xl h-full">
          <!-- Modern Title Section -->
          <div class="mb-6">
            <!-- Modern Animated Badge -->
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#605bff]/5 to-purple-500/5 
                        rounded-full mb-5 border border-[#605bff]/10">
              <div class="flex items-center gap-2">
                <svg class="w-3 h-3 text-[#605bff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path fill="white" d="M11 14.414L7.586 11 6 12.586l5 5 8-8L17.586 8z"/>
                </svg>
                <div class="h-3 w-[1px] bg-[#605bff]/20"></div>
                <span class="text-sm font-medium bg-gradient-to-r from-[#605bff] to-purple-500 
                             bg-clip-text text-transparent">IpsePay Platform</span>
              </div>
            </div>

            <!-- Enhanced Dynamic Title -->
            <div class="space-y-3">
              <div class="relative">
                <h1 class="text-[3.25rem] font-bold tracking-tight leading-[1.1]">
                  <span class="text-gray-900/80">Start Your</span>
                  <br />
                  <div class="relative inline-flex items-center">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#605bff] to-purple-500 
                                 animate-gradient">Payment Journey</span>
                    <div class="absolute -right-12 top-0 flex items-center gap-1">
                      <span class="text-2xl animate-bounce-slow delay-100">✨</span>
                      <span class="text-xl animate-bounce-slow delay-300">✨</span>
                    </div>
                  </div>
                </h1>
              </div>
              
              <!-- Modern Subtitle with Highlight -->
              <p class="text-base text-gray-500 flex items-center gap-2">
                Join 
                <span class="inline-flex items-center px-2 py-1 bg-[#605bff]/5 rounded-md 
                                 text-sm font-medium text-[#605bff]">10,000+</span>
                businesses using our secure platform
              </p>
            </div>
          </div>
          
          <!-- Enhanced Description -->
          <p class="text-lg text-gray-600 mb-12 relative">
            Join our global network of businesses and experience 
            <span class="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              secure
            </span>
            and
            <span class="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              fast
            </span>
            payments.
          </p>

          <!-- Modern Feature Grid -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">Enterprise Security</h3>
                  <p class="text-sm text-gray-600">Bank-grade encryption and compliance</p>
                </div>
              </div>
            </div>

            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">Global Coverage</h3>
                  <p class="text-sm text-gray-600">Accept payments worldwide</p>
                </div>
              </div>
            </div>

            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">Instant Setup</h3>
                  <p class="text-sm text-gray-600">Go live in minutes</p>
                </div>
              </div>
            </div>

            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">24/7 Support</h3>
                  <p class="text-sm text-gray-600">Always here to help</p>
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

  <!-- Right Section - Form Area -->
  <div class="w-full lg:w-[70%] p-3 flex items-start justify-center min-h-screen bg-gradient-to-b from-white to-gray-50/50">
    <div class="w-full max-w-[1100px] relative scale-[0.85]">
      <!-- Secure Registration Badge -->
      <div class="text-center mb-3 pt-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#605bff]/10 to-purple-500/10 
                    rounded-full mb-3 hover:from-[#605bff]/20 hover:to-purple-500/20 transition-all duration-300">
          <div class="flex space-x-1">
            {#each Array(3) as _, i}
              <div class="w-1.5 h-1.5 rounded-full bg-[#605bff] animate-pulse" 
                   style="animation-delay: {i * 200}ms"></div>
            {/each}
          </div>
          <span class="text-sm font-semibold text-[#605bff]">Secure Registration</span>
        </div>
        
        <h2 class="text-3xl font-bold mb-2 text-gray-900 flex items-center justify-center gap-2">
          Create Account 
          <span class="animate-crawl inline-block">👋</span>
        </h2>
        <p class="text-sm text-gray-600">Complete your profile to get started</p>
      </div>

      <!-- Form Card -->
      <div class="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
        <form class="relative">
          <div class="space-y-4">
            <!-- Personal Information Section -->
            <div class="form-section">
              <div class="flex items-center gap-2 mb-4">
                <div class="p-1.5 bg-[#605bff]/10 rounded-lg">
                  <svg class="w-4 h-4 text-[#605bff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900">Personal Information</h3>
                  <p class="text-xs text-gray-500">Please fill in your personal details</p>
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <!-- First Name & Last Name -->
                <div class="form-group">
                  <label class="form-label">First name</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <input type="text" class="modern-input" placeholder="First name" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Last name</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <input type="text" class="modern-input" placeholder="Last name" required />
                  </div>
                </div>

                <!-- Email & Phone -->
                <div class="form-group">
                  <label class="form-label">Email address</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input type="email" class="modern-input" placeholder="you@example.com" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Phone number</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <input type="tel" class="modern-input" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>

                <!-- Password -->
                <div class="form-group col-span-2">
                  <label class="form-label">Password</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <input type={showPassword ? "text" : "password"} class="modern-input" placeholder="Create password" required />
                    <button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#605bff]"
                      on:click={() => showPassword = !showPassword}>
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d={showPassword ? 
                          "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" :
                          "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"} />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Address Section -->
            <div class="form-section mt-4">
              <div class="flex items-center gap-2 mb-4">
                <div class="p-1.5 bg-[#605bff]/10 rounded-lg">
                  <svg class="w-4 h-4 text-[#605bff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900">Address Information</h3>
                  <p class="text-xs text-gray-500">Where can we reach you?</p>
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <!-- Street & Apt -->
                <div class="form-group col-span-2">
                  <label class="form-label">Street address</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    <input type="text" class="modern-input" placeholder="Enter street address" required />
                  </div>
                </div>

                <!-- City & State -->
                <div class="form-group">
                  <label class="form-label">City</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    <input type="text" class="modern-input" placeholder="City" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">State</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <input type="text" class="modern-input" placeholder="State" required />
                  </div>
                </div>

                <!-- ZIP & Country -->
                <div class="form-group">
                  <label class="form-label">ZIP code</label>
                  <div class="input-wrapper">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    <input type="text" class="modern-input" placeholder="ZIP" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Country</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <svg class="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <Select
                      items={formattedCountries}
                      bind:value={selectedCountry}
                      class="modern-select pl-12"
                      placeholder="Select country"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Terms and Submit Button -->
            <div class="pt-6 border-t border-gray-100">
              <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div class="flex items-start gap-3">
                  <input
                    id="terms"
                    type="checkbox"
                    class="mt-1 h-4 w-4 rounded border-gray-300 text-[#605bff] focus:ring-[#605bff]/20"
                    required
                  />
                  <label for="terms" class="text-sm text-gray-600">
                    By signing up, you agree to our 
                    <a href="/terms" class="text-[#605bff] hover:text-[#605bff]/80">Terms</a>
                    {" and "}
                    <a href="/privacy" class="text-[#605bff] hover:text-[#605bff]/80">Privacy Policy</a>
                  </label>
                </div>
                <button 
                  type="submit" 
                  class="w-full lg:w-auto bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white 
                         px-7 py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  Create Account
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  /* Medium-sized input styles with better icon alignment */
  .modern-input {
    @apply w-full h-[45px] px-5 pl-14 bg-white border border-gray-200 rounded-lg
           focus:outline-none focus:ring-2 focus:ring-[#605bff]/20 focus:border-[#605bff]
           text-gray-900 placeholder-gray-400 transition-all duration-200
           hover:border-[#605bff]/40 text-[14.5px] leading-normal tracking-tight
           hover:bg-white focus:bg-white font-medium;
  }

  /* Balanced label size */
  .form-label {
    @apply block text-[14px] font-semibold text-gray-800 mb-2;
  }

  /* Improved icon positioning */
  .input-icon {
    @apply absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-600;
  }

  /* Matching select height with better alignment */
  :global(.modern-select) {
    --height: 45px;
    --font-size: 14.5px;
    --padding: 0.75rem 1rem;
  }

  :global(.modern-select input) {
    padding-left: 3.5rem !important;
  }

  /* Balanced spacing */
  .form-group {
    @apply mb-4;
  }

  .space-y-4 {
    @apply space-y-6;
  }

  /* Adjusted scale and margin */
  .scale-\[0\.85\] {
    transform: scale(0.88);
    margin: -3rem;
  }

  /* Desktop-specific adjustments */
  @media (min-width: 1024px) {
    .modern-input {
      @apply h-[45px] text-[14.5px];
    }

    :global(.modern-select) {
      --height: 45px;
    }

    /* Balanced form container padding */
    .bg-white.shadow-lg {
      padding: 1.25rem;
      max-height: 98vh;
      overflow-y: auto;
    }
  }

  /* Improved submit button styling */
  button[type="submit"] {
    @apply h-[45px] text-[14.5px] px-8;
    margin-bottom: 0.5rem;
  }

  /* Ensure form sections fit on screen */
  .form-section {
    @apply mb-4;
  }

  .form-section:last-child {
    @apply mb-2;
  }

  /* Better form container visibility */
  .w-full.lg\:w-\[70\%\] {
    @apply py-2;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  /* Ensure bottom section is visible */
  .pt-6 {
    padding-top: 1rem;
    margin-top: 0.5rem;
  }

  /* Adjust icon container alignment */
  .input-wrapper {
    @apply relative flex items-center;
  }

  /* Refined Mobile Responsiveness */
  @media (max-width: 1023px) {
    /* Root container */
    .min-h-screen {
      min-height: 100%;
      height: auto;
      padding: 0;
      overflow-x: hidden;
    }

    /* Form wrapper */
    .w-full.lg\:w-\[70\%\] {
      padding: 0.5rem;
      min-height: auto;
      background: white;
      width: 100vw;
      margin: 0;
      position: relative;
    }

    /* Remove all scaling and transforms */
    .scale-\[0\.85\] {
      transform: none !important;
      margin: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    /* Form card */
    .bg-white.shadow-lg {
      padding: 0.5rem;
      margin: 0;
      box-shadow: none;
      border: none;
      border-radius: 0;
      width: 100%;
    }

    /* Header section */
    .text-center.mb-3.pt-4 {
      margin: 0.5rem 0 1rem;
      padding: 0;
    }

    h2.text-3xl {
      font-size: 1.375rem;
      margin-bottom: 0.5rem;
    }

    /* Form layout */
    .grid.grid-cols-1.lg\:grid-cols-2 {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    /* Input fields */
    .modern-input {
      height: 44px;
      font-size: 15px;
      padding: 0 0.75rem 0 2.75rem;
      border-radius: 0.5rem;
    }

    /* Input icons */
    .input-icon {
      width: 1.125rem;
      height: 1.125rem;
      left: 1rem;
    }

    /* Form sections */
    .form-section {
      margin-bottom: 1rem;
      padding: 0;
    }

    /* Section headers */
    .flex.items-center.gap-2.mb-4 {
      margin-bottom: 0.75rem;
      padding: 0 0.25rem;
    }

    h3.text-base {
      font-size: 0.9375rem;
      font-weight: 600;
    }

    p.text-xs {
      font-size: 0.75rem;
      opacity: 0.8;
    }

    /* Form groups */
    .form-group {
      margin-bottom: 0.625rem;
      width: 100%;
    }

    /* Labels */
    .form-label {
      font-size: 0.8125rem;
      margin-bottom: 0.25rem;
      padding-left: 0.25rem;
    }

    /* Select component */
    :global(.modern-select) {
      --height: 44px !important;
      --font-size: 15px !important;
      --padding: 0 0.75rem 0 2.75rem !important;
    }

    :global(.modern-select input) {
      border-radius: 0.5rem !important;
    }

    /* Bottom section */
    .pt-6 {
      padding-top: 1rem;
      margin-top: 0.75rem;
      border-top: 1px solid rgba(0,0,0,0.05);
    }

    /* Terms section */
    .flex.flex-col.lg\:flex-row {
      gap: 1rem;
      padding: 0 0.25rem;
    }

    /* Checkbox area */
    .flex.items-start.gap-3 {
      gap: 0.625rem;
    }

    input[type="checkbox"] {
      width: 1rem;
      height: 1rem;
      margin-top: 0.1875rem;
    }

    /* Terms text */
    label[for="terms"] {
      font-size: 0.8125rem;
      line-height: 1.3;
      color: rgba(0,0,0,0.7);
    }

    /* Submit button */
    button[type="submit"] {
      width: 100%;
      height: 44px;
      font-size: 0.9375rem;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
    }

    /* Fix any overflow */
    .overflow-hidden {
      overflow-x: hidden;
    }
  }

  /* Small mobile devices */
  @media (max-width: 360px) {
    .modern-input {
      height: 42px;
      font-size: 14px;
    }

    .form-label {
      font-size: 0.75rem;
    }

    h2.text-3xl {
      font-size: 1.25rem;
    }

    button[type="submit"] {
      height: 42px;
      font-size: 0.875rem;
    }

    :global(.modern-select) {
      --height: 42px !important;
      --font-size: 14px !important;
    }
  }

  /* Medium-sized mobile devices */
  @media (min-width: 361px) and (max-width: 480px) {
    .modern-input {
      height: 46px;
    }

    button[type="submit"] {
      height: 46px;
    }

    :global(.modern-select) {
      --height: 46px !important;
    }
  }

  /* Prevent zoom on iOS */
  @supports (-webkit-touch-callout: none) {
    .modern-input,
    :global(.modern-select input) {
      font-size: 16px !important;
    }
  }

  /* Enhanced Desktop Adjustments */
  @media (min-width: 1024px) {
    /* Keep form scale */
    .scale-\[0\.85\] {
      transform: scale(0.65);
      margin: -13rem -6rem;
    }

    /* Keep large inputs */
    .modern-input {
      height: 56px !important;
      font-size: 16.5px !important;
      padding: 0 1.75rem 0 4.5rem !important;
      border-radius: 12px !important;
    }

    /* Keep large select */
    :global(.modern-select) {
      --height: 56px !important;
      --font-size: 16.5px !important;
      --padding: 0 1.75rem 0 4.5rem !important;
      --border-radius: 12px !important;
    }

    /* Keep large icons */
    .input-icon {
      width: 26px !important;
      height: 26px !important;
      left: 1.75rem !important;
    }

    /* Keep large submit button */
    button[type="submit"] {
      height: 56px !important;
      font-size: 16.5px !important;
      padding: 0 3rem !important;
      border-radius: 12px !important;
    }

    /* Reduced form spacing */
    .bg-white.shadow-lg {
      max-height: none;
      overflow: visible;
      max-width: 1200px;
      padding: 1.5rem !important;
    }

    /* Reduced section spacing */
    .form-section {
      margin-bottom: 1.25rem !important;
      padding: 0.5rem !important;
    }

    /* Reduced form groups spacing */
    .form-group {
      margin-bottom: 1rem !important;
    }

    /* Reduced grid gap */
    .grid.grid-cols-1.lg\:grid-cols-2 {
      gap: 1rem !important;
    }

    /* Reduced section headers spacing */
    .flex.items-center.gap-2.mb-4 {
      margin-bottom: 1rem !important;
    }

    /* Labels */
    .form-label {
      font-size: 16.5px !important;
      margin-bottom: 0.375rem !important;
      font-weight: 500 !important;
    }

    /* Bottom section spacing */
    .pt-6 {
      padding-top: 1rem !important;
      margin-top: 1rem !important;
    }

    /* Terms section */
    .flex.items-start.gap-3 {
      gap: 0.75rem !important;
    }

    /* Enhanced section headers */
    .form-section {
      margin-bottom: 0.75rem !important;
      padding: 0.375rem !important;
    }

    /* Section header container */
    .flex.items-center.gap-2.mb-4 {
      margin-bottom: 1rem !important;
      padding: 0.75rem 1rem !important;
      background: linear-gradient(to right, rgba(96, 91, 255, 0.03), transparent) !important;
      border-radius: 12px !important;
      border: 1px solid rgba(96, 91, 255, 0.08) !important;
    }

    /* Section icon background */
    .p-1\.5.bg-\[#605bff\]\/10 {
      background: rgba(96, 91, 255, 0.1) !important;
      padding: 0.625rem !important;
      border-radius: 10px !important;
    }

    /* Section icon */
    .p-1\.5.bg-\[#605bff\]\/10 svg {
      width: 20px !important;
      height: 20px !important;
      color: #605bff !important;
    }

    /* Section title */
    h3.text-base {
      font-size: 18px !important;
      font-weight: 600 !important;
      color: #1f2937 !important;
      letter-spacing: -0.01em !important;
      margin: 0 !important;
    }

    /* Section description */
    .flex.items-center.gap-2.mb-4 p.text-xs {
      font-size: 14px !important;
      color: #6b7280 !important;
      margin: 0 !important;
      margin-top: 0.125rem !important;
    }

    /* Add divider after section headers */
    .form-section > div:first-child {
      position: relative !important;
      margin-bottom: 1.25rem !important;
    }

    .form-section > div:first-child::after {
      content: '' !important;
      position: absolute !important;
      bottom: -0.75rem !important;
      left: 0 !important;
      right: 0 !important;
      height: 1px !important;
      background: linear-gradient(to right, rgba(96, 91, 255, 0.08), transparent) !important;
    }
  }

  /* Modern section headers */
  .form-section {
    margin-bottom: 0.75rem !important;
    padding: 0.375rem !important;
    position: relative !important;
  }

  /* Modern header container */
  .flex.items-center.gap-2.mb-4 {
    margin-bottom: 1.5rem !important;
    padding: 1rem 1.25rem !important;
    background: linear-gradient(135deg, rgba(96, 91, 255, 0.03), rgba(96, 91, 255, 0.08)) !important;
    border-radius: 16px !important;
    border: 1px solid rgba(96, 91, 255, 0.12) !important;
    box-shadow: 0 2px 20px rgba(96, 91, 255, 0.03) !important;
    backdrop-filter: blur(20px) !important;
    transition: all 0.3s ease !important;
  }

  /* Hover effect */
  .flex.items-center.gap-2.mb-4:hover {
    background: linear-gradient(135deg, rgba(96, 91, 255, 0.05), rgba(96, 91, 255, 0.1)) !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 24px rgba(96, 91, 255, 0.06) !important;
  }

  /* Modern icon container */
  .p-1\.5.bg-\[#605bff\]\/10 {
    background: linear-gradient(135deg, #605bff, #8b7aff) !important;
    padding: 0.75rem !important;
    border-radius: 12px !important;
    box-shadow: 0 2px 12px rgba(96, 91, 255, 0.2) !important;
    margin-right: 0.5rem !important;
  }

  /* Modern icon */
  .p-1\.5.bg-\[#605bff\]\/10 svg {
    width: 22px !important;
    height: 22px !important;
    color: white !important;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) !important;
  }

  /* Modern section title */
  h3.text-base {
    font-size: 19px !important;
    font-weight: 600 !important;
    background: linear-gradient(to right, #1f2937, #374151) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    letter-spacing: -0.02em !important;
    margin: 0 !important;
  }

  /* Modern section description */
  .flex.items-center.gap-2.mb-4 p.text-xs {
    font-size: 14.5px !important;
    color: #6b7280 !important;
    margin: 0 !important;
    margin-top: 0.25rem !important;
    letter-spacing: -0.01em !important;
  }

  /* Modern divider */
  .form-section > div:first-child::after {
    content: '' !important;
    position: absolute !important;
    bottom: -0.75rem !important;
    left: 0 !important;
    right: 0 !important;
    height: 2px !important;
    background: linear-gradient(to right, 
      rgba(96, 91, 255, 0.2), 
      rgba(139, 122, 255, 0.1),
      transparent
    ) !important;
    border-radius: 1px !important;
  }

  /* Add decorative element */
  .form-section > div:first-child::before {
    content: '' !important;
    position: absolute !important;
    top: 50% !important;
    right: 1rem !important;
    width: 50px !important;
    height: 50px !important;
    background: radial-gradient(circle at center,
      rgba(96, 91, 255, 0.05),
      transparent 70%
    ) !important;
    transform: translateY(-50%) !important;
    border-radius: 50% !important;
    opacity: 0.6 !important;
  }
</style>

