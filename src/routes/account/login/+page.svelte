<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { PUBLIC_API_URL } from '$env/static/public';
  import Select from 'svelte-select';
  import countries from 'world-countries';
  import { browser } from '$app/environment';
  
  let selectContainer;
  let dropdownOpen = false;
  let showPassword = false;
  let selectedCountry = null;
  let isLoading = true;
  let formStep = 1;
  let activeTestimonial = 0;
  let mouseX = 0;
  let mouseY = 0;
  let email = '';
  let password = '';
  let rememberMe = false;
  let errorMessage = '';
  let token = '';
  let user = null;
  let redirectAttempted = false;

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

  // Clear localStorage on page load to prevent loops
  if (browser) {
    localStorage.clear();
  }

  // Aggressive session check and redirect
  async function checkAndRedirect() {
    if (!browser) {
        console.log('⏭️ Skipping redirect check - not in browser');
        return;
    }
    
    console.log('🔍 Checking for existing session...');
    try {
        const token = localStorage.getItem('authToken');
        const userStr = localStorage.getItem('user');
        
        console.log('📊 Found in localStorage:', {
            hasToken: !!token,
            hasUser: !!userStr
        });
        
        if (token && userStr) {
            const user = JSON.parse(userStr);
            console.log('👤 Found user data:', user);
            if (user?.email) {
                console.log('✅ Valid session found - Redirecting');
                window.location.replace('/dashboard');
                return true;
            }
        }
        return false;
    } catch (err) {
        console.error('❌ Session check error:', err);
        localStorage.clear();
        return false;
    } finally {
        isLoading = false;
    }
  }

  onMount(() => {
    console.log('🔄 Component mounted');
    checkAndRedirect();

    console.log('\n🔍 Checking client-side session');
    
    const token = localStorage.getItem('authToken');
    const userStr = localStorage.getItem('user');

    console.log('📊 Local Storage Data:', {
        hasToken: !!token,
        hasUser: !!userStr
    });

    // IMMEDIATE REDIRECT if we have any session data
    if (token && userStr) {
        console.log('✅ Session found - Forcing dashboard redirect');
        window.location.replace('/dashboard');
        return;
    }

    console.log('❌ No client-side session found');

    const interval = setInterval(() => {
      activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    }, 5000);

    return () => clearInterval(interval);
  });

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    
    try {
      isLoading = true;
      errorMessage = '';

      const response = await fetch(`${PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }

      if (result.accessToken && result.user) {
        // 1. Set cookies with domain to allow access from dashboard subdomain
        document.cookie = `authToken=${result.accessToken}; path=/; domain=.ipsepay.com; secure; samesite=strict`;
        document.cookie = `userData=${JSON.stringify(result.user)}; path=/; domain=.ipsepay.com; secure; samesite=strict`;

        // 2. Store in localStorage (backup)
        localStorage.setItem('authToken', result.accessToken);
        localStorage.setItem('userData', JSON.stringify(result.user));

        // 3. Create session data object
        const sessionData = {
          token: result.accessToken,
          user: result.user,
          timestamp: new Date().toISOString()
        };

        // 4. Encode session data for URL
        const encodedSession = btoa(JSON.stringify(sessionData));

        // 5. Redirect to dashboard with session data
        const dashboardUrl = new URL('https://dashboard.ipsepay.com');
        dashboardUrl.searchParams.append('session', encodedSession);
        
        console.log('Redirecting with session data:', sessionData);
        window.location.href = dashboardUrl.toString();
      }

    } catch (err) {
      console.error('Login error:', err);
      errorMessage = err instanceof Error ? err.message : 'Login failed';
      isLoading = false;
    }
  }
</script>

{#if isLoading}
    <div class="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div class="flex flex-col items-center gap-3">
            <svg class="animate-spin h-8 w-8 text-[#605bff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-gray-600">Processing...</p>
        </div>
    </div>
{:else}
    <div class="min-h-screen flex flex-col lg:flex-row relative overflow-hidden" on:mousemove={handleMouseMove}>
      <!-- Mobile Header (visible only on mobile) -->
      <div class="lg:hidden w-full px-4 py-6 bg-white border-b border-gray-100">
        <div class="flex justify-between items-center">
          <a href="/" class="transition-transform hover:scale-[1.02] active:scale-[0.98] duration-200">
            <img src="/images/lgopis.png" alt="IpsePay" class="h-6" />
          </a>
          <a href="/account/signup" 
             class="group flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-md 
                    rounded-xl border border-gray-200 hover:border-[#605bff]/20 
                    text-sm transition-all duration-300">
            <span class="text-gray-600">New to IpsePay?</span>
            <span class="text-[#605bff] font-medium">Sign up</span>
          </a>
        </div>
      </div>

      <!-- Left Section (hidden on mobile) -->
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
              <a href="/" class="transition-transform hover:scale-[1.02] active:scale-[0.98] duration-200">
                <img src="/images/lgopis.png" alt="IpsePay" class="h-8" />
              </a>
              <a href="/account/signup" 
                 class="group flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md 
                        rounded-xl border border-white/20 hover:border-[#605bff]/20 
                        transition-all duration-300 shadow-lg shadow-[#605bff]/5">
                <span class="text-sm font-medium text-gray-600">New to IpsePay?</span>
                <span class="text-[#605bff] font-medium relative">
                  Sign up
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
                                 bg-clip-text text-transparent">Welcome Back</span>
                  </div>
                </div>

                <!-- Title -->
                <div class="space-y-3">
                  <div class="relative">
                    <h1 class="text-[3.25rem] font-bold tracking-tight leading-[1.1]">
                      <span class="text-gray-900/80">Sign in to</span>
                      <br />
                      <div class="relative inline-flex items-center">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#605bff] to-purple-500 
                                     animate-gradient">Your Account</span>
                        <div class="absolute -right-12 top-0 flex items-center gap-1">
                          <span class="text-2xl animate-bounce-slow delay-100">✨</span>
                          <span class="text-xl animate-bounce-slow delay-300">✨</span>
                        </div>
                      </div>
                    </h1>
                  </div>
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

      <!-- Right Section -->
      <div class="w-full lg:w-[40%] flex flex-col items-center min-h-[calc(100vh-76px)] lg:min-h-screen bg-gradient-to-b from-white to-gray-50/50">
        <!-- Form Container -->
        <div class="w-full max-w-[500px] px-3 sm:px-4 lg:p-3 flex-shrink-0 flex flex-col items-center justify-center flex-1 mt-4 sm:mt-6 lg:mt-0">
          <!-- Mobile Welcome Text -->
          <div class="lg:hidden text-center mb-8 sm:mb-10 mt-4 sm:mt-6">
            <h1 class="text-[20px] sm:text-[26px] font-bold mb-1.5 text-gray-900 flex items-center justify-center gap-2">
              Welcome Back 
              <span class="animate-wave inline-block">👋</span>
            </h1>
            <p class="text-[12px] sm:text-[15px] text-gray-600">Sign in to your account</p>
          </div>

          <!-- Desktop Header (keep unchanged with secure login badge) -->
          <div class="hidden lg:block text-center mb-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#605bff]/10 to-purple-500/10 
                        rounded-full mb-3 hover:from-[#605bff]/20 hover:to-purple-500/20 transition-all duration-300">
              <div class="flex space-x-1">
                {#each Array(3) as _, i}
                  <div class="w-1.5 h-1.5 rounded-full bg-[#605bff] animate-pulse" 
                       style="animation-delay: {i * 200}ms"></div>
                {/each}
              </div>
              <span class="text-sm font-semibold text-[#605bff]">Secure Login</span>
            </div>
            
            <h2 class="text-3xl font-bold mb-2 text-gray-900 flex items-center justify-center gap-2">
              Welcome Back 
              <span class="animate-wave inline-block">👋</span>
            </h2>
            <p class="text-sm text-gray-600">Sign in to your account</p>
          </div>

          <!-- Form Card -->
          <div class="w-full bg-white shadow-lg rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 lg:p-8">
            <form class="space-y-4 sm:space-y-6" on:submit={handleSubmit}>
              <!-- Email Input -->
              <div class="form-group">
                <label class="text-gray-900 text-[13px] sm:text-[15px] font-semibold mb-1.5 sm:mb-2 block">Email address</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none">
                    <svg class="h-[18px] w-[18px] sm:h-5 sm:w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <input type="email" 
                         class="modern-input pl-11 sm:pl-12 {errorMessage && !email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}" 
                         placeholder="you@example.com" 
                         required 
                         bind:value={email} />
                </div>
                {#if errorMessage && !email}
                  <p class="mt-1.5 text-sm text-red-600">Please enter your email address</p>
                {/if}
              </div>

              <!-- Password Input -->
              <div class="form-group">
                <label for="password" class="text-gray-900 text-[13px] sm:text-[15px] font-semibold mb-1.5 sm:mb-2 block">
                  Password
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none">
                    <svg class="h-[18px] w-[18px] sm:h-5 sm:w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  
                  {#if showPassword}
                    <input 
                      id="password"
                      type="text"
                      bind:value={password}
                      required 
                      class="modern-input pl-11 sm:pl-12 {errorMessage && !password ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}"
                      placeholder="Enter your password" 
                    />
                  {:else}
                    <input 
                      id="password"
                      type="password"
                      bind:value={password}
                      required 
                      class="modern-input pl-11 sm:pl-12 {errorMessage && !password ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''}"
                      placeholder="Enter your password" 
                    />
                  {/if}
                  {#if errorMessage && !password}
                    <p class="mt-1.5 text-sm text-red-600">Please enter your password</p>
                  {/if}

                  <button 
                    type="button"
                    class="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 p-1 
                           text-gray-500 hover:text-[#605bff] 
                           transition-colors duration-300"
                    on:click={() => showPassword = !showPassword}
                  >
                    {#if showPassword}
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    {:else}
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    {/if}
                  </button>
                </div>
              </div>

              <!-- Remember Me & Forgot Password -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    class="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded border-gray-300 text-[#605bff] focus:ring-[#605bff]/20"
                    bind:checked={rememberMe}
                  />
                  <label for="remember" class="ml-2 block text-[12px] sm:text-[14px] text-gray-700 font-medium">
                    Remember me
                  </label>
                </div>
                <a href="/account/forgot-password" class="text-[12px] sm:text-[14px] font-medium text-[#605bff] hover:text-[#605bff]/80">
                  Forgot password?
                </a>
              </div>

              <!-- Add this before the submit button for general errors -->
              {#if errorMessage && email && password}
                <div class="p-4 rounded-xl bg-red-50 border border-red-200">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <h3 class="text-sm font-medium text-red-800">
                        {errorMessage}
                      </h3>
                    </div>
                  </div>
                </div>
              {/if}

              <!-- Login Button -->
              <button 
                type="submit" 
                disabled={isLoading}
                class="w-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white 
                       px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl
                       font-medium flex items-center justify-center gap-2 
                       shadow-lg shadow-[#605bff]/25
                       hover:shadow-xl hover:shadow-[#605bff]/30 
                       transform hover:-translate-y-0.5
                       transition-all duration-300 group 
                       text-[13px] sm:text-sm
                       disabled:opacity-70 disabled:cursor-not-allowed
                       disabled:hover:transform-none">
                {#if isLoading}
                  <div class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </div>
                {:else}
                  <span>Sign in</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                       viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                {/if}
              </button>
            </form>
            <!-- Add this section after the form but still inside the white card -->
            <div class="mt-6 pt-6 text-center border-t border-gray-100">
              <p class="text-sm text-gray-600">
                Don't have an account?
                <a 
                  href="/account/signup" 
                  class="text-[#605bff] font-medium hover:text-[#605bff]/80 relative inline-flex items-center group ml-1"
                >
                  Create an account
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#605bff] 
                             group-hover:w-full transition-all duration-300"></span>
                  <svg 
                    class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Features (below form) -->
        <div class="lg:hidden w-full px-3 sm:px-4 pb-6 sm:pb-8 mt-6 sm:mt-8 bg-gray-50/50">
          <div class="max-w-[500px] mx-auto">
            <div class="grid grid-cols-2 gap-2.5 sm:gap-4">
              <div class="p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-[#605bff]/20 transition-all duration-300 group">
                <div class="flex items-start space-x-2.5 sm:space-x-3">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-[13px] sm:text-[15px] font-semibold text-gray-900 mb-0.5">Enterprise Security</h3>
                    <p class="text-[11px] sm:text-[13px] text-gray-600">Bank-grade encryption</p>
                  </div>
                </div>
              </div>

              <div class="p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-[#605bff]/20 transition-all duration-300 group">
                <div class="flex items-start space-x-2.5 sm:space-x-3">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-[13px] sm:text-[15px] font-semibold text-gray-900 mb-0.5">Global Coverage</h3>
                    <p class="text-[11px] sm:text-[13px] text-gray-600">150+ Countries</p>
                  </div>
                </div>
              </div>

              <div class="p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-[#605bff]/20 transition-all duration-300 group">
                <div class="flex items-start space-x-2.5 sm:space-x-3">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-[13px] sm:text-[15px] font-semibold text-gray-900 mb-0.5">Instant Setup</h3>
                    <p class="text-[11px] sm:text-[13px] text-gray-600">Go live in minutes</p>
                  </div>
                </div>
              </div>

              <div class="p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-[#605bff]/20 transition-all duration-300 group">
                <div class="flex items-start space-x-2.5 sm:space-x-3">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-[13px] sm:text-[15px] font-semibold text-gray-900 mb-0.5">24/7 Support</h3>
                    <p class="text-[11px] sm:text-[13px] text-gray-600">Always here to help</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-4 sm:mt-6 flex items-center gap-2">
              <div class="flex -space-x-1.5 sm:-space-x-2">
                {#each Array(4) as _, i}
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[#605bff] to-purple-500 border-[1.5px] sm:border-2 border-white flex items-center justify-center text-white text-[9px] sm:text-[11px]">
                    ✓
                  </div>
                {/each}
              </div>
              <p class="text-[11px] sm:text-[13px] text-gray-600">
                Trusted by <span class="font-semibold text-gray-900">10,000+</span> businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
{/if}

<style>
  /* Update input styles for better mobile responsiveness */
  .modern-input {
    @apply w-full h-[42px] sm:h-[48px] bg-white
           border border-gray-200 rounded-xl
           focus:outline-none focus:ring-2 
           focus:ring-[#605bff]/20 focus:border-[#605bff]
           text-gray-900 placeholder-gray-400 
           transition-all duration-200
           hover:border-[#605bff]/40 text-[13px] sm:text-[15px]
           leading-normal tracking-tight pr-10 sm:pr-11
           hover:bg-white focus:bg-white font-medium;
  }

  .modern-input::placeholder {
    @apply text-gray-400 text-[12px] sm:text-[14px] font-normal;
  }

  /* ... (rest of the styles from signup page) ... */

  @keyframes wave {
    0%, 100% { 
      transform: rotate(0deg); 
    }
    25% { 
      transform: rotate(-20deg); 
    }
    75% { 
      transform: rotate(20deg); 
    }
  }

  .animate-wave {
    animation: wave 1.5s ease-in-out infinite;
    transform-origin: 70% 70%;
  }
</style>