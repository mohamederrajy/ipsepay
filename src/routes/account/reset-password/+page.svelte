<script>
  import { onMount } from 'svelte';
  
  let password = '';
  let confirmPassword = '';
  let showPassword = false;
  let showConfirmPassword = false;
  let passwordStrength = 0;
  let passwordsMatch = true;
  let errors = {};
  let isLoading = false;

  let passwordChecks = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  };

  function checkPasswordStrength(pass) {
    let strength = 0;
    
    // Reset checks
    passwordChecks = {
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false
    };

    if (pass.length >= 8) {
      strength += 1;
      passwordChecks.length = true;
    }
    if (/[A-Z]/.test(pass)) {
      strength += 1;
      passwordChecks.uppercase = true;
    }
    if (/[a-z]/.test(pass)) {
      strength += 1;
      passwordChecks.lowercase = true;
    }
    if (/[0-9]/.test(pass)) {
      strength += 1;
      passwordChecks.number = true;
    }
    if (/[^A-Za-z0-9]/.test(pass)) {
      strength += 1;
      passwordChecks.special = true;
    }

    passwordStrength = strength;
  }

  $: strengthLabel = {
    0: 'Very Weak',
    1: 'Weak',
    2: 'Fair',
    3: 'Good',
    4: 'Strong',
    5: 'Very Strong'
  }[passwordStrength];

  $: strengthColor = {
    0: 'bg-gray-200',
    1: 'bg-red-400',
    2: 'bg-orange-400',
    3: 'bg-yellow-400',
    4: 'bg-green-400',
    5: 'bg-green-500'
  }[passwordStrength];

  function handlePasswordInput(event) {
    password = event.target.value;
    checkPasswordStrength(password);
  }

  // Function to check if passwords match
  function checkPasswordMatch() {
    if (confirmPassword && password !== confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
      passwordsMatch = false;
    } else {
      delete errors.confirmPassword;
      passwordsMatch = true;
    }
  }

  // Watch for changes in either password field
  $: if (password || confirmPassword) {
    checkPasswordMatch();
  }

  async function handleSubmit() {
    errors = {};
    let isValid = true;

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (passwordStrength < 3) {
      errors.password = 'Password is too weak';
      isValid = false;
    }

    if (isValid) {
      try {
        isLoading = true;
        // Add your API call here
        // await resetPassword(password);
      } catch (error) {
        console.error('Reset password error:', error);
      } finally {
        isLoading = false;
      }
    }
  }

  let currentIndex = 0;
  
  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 2) % testimonials.length;
    }, 4000);

    return () => clearInterval(interval);
  });

  const testimonials = [
    {
      name: "David Chen",
      country: "Singapore",
      date: "12 Mar, 2024",
      title: "Quick Password Recovery",
      text: "The password reset process was incredibly smooth. I regained access to my account within minutes. The security measures gave me peace of mind.",
      avatar: "/images/blog/profile1.jpg",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      country: "United States",
      date: "18 Feb, 2024",
      title: "Secure and Efficient",
      text: "I was worried about resetting my password, but IpsePay's process was straightforward and highly secure. Excellent experience!",
      avatar: "/images/4profi.webp",
      rating: 5
    },
    {
      name: "James Wilson",
      country: "United Kingdom",
      date: "5 Mar, 2024",
      title: "Outstanding Support",
      text: "When I needed to reset my password, the support team was incredibly helpful. The process was secure and well-explained.",
      avatar: "/images/prifilee.jpeg",
      rating: 5
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      date: "22 Feb, 2024",
      title: "Simple Yet Secure",
      text: "The password reset system is both user-friendly and secure. I appreciated the clear instructions and quick verification process.",
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
                             bg-clip-text text-transparent">Secure Reset</span>
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

          <!-- After the title section, add this description -->
          <p class="text-lg text-gray-600 mt-6 mb-12">
            Securely reset your password with our advanced verification system. We ensure your account's safety through a multi-step process designed to protect your data.
          </p>

          <!-- Security Features Grid -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <!-- Email Verification -->
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

            <!-- Quick Recovery -->
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

            <!-- Two-Factor Authentication -->
            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 mb-1">Enhanced Security</h3>
                  <p class="text-sm text-gray-600">Multi-layer protection</p>
                </div>
              </div>
            </div>

            <!-- 24/7 Support -->
            <div class="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#605bff]/20 transition-all duration-300 group">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-full bg-[#605bff]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
              Trusted by <span class="font-semibold text-gray-900">10,000+</span> users worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Section -->
  <div class="w-full lg:w-[40%] p-3 flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50/50">
    <div class="w-full max-w-[500px] pt-3 px-6">
      <!-- Header -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-2 text-gray-900">Reset Password</h2>
        <p class="text-sm text-gray-600">Enter your new password below</p>
      </div>

      <!-- Form -->
      <form on:submit|preventDefault={handleSubmit} class="bg-white shadow-lg rounded-2xl border border-gray-100 p-8 space-y-6">
        <!-- Password Input -->
        <div class="form-group">
          <label class="text-gray-900 text-sm font-semibold mb-2 block">New Password</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            {#if showPassword}
              <input
                type="text"
                value={password}
                on:input={(e) => {
                  password = e.target.value;
                  checkPasswordStrength(password);
                }}
                class="modern-input"
                placeholder="Enter new password"
                required
              />
            {:else}
              <input
                type="password"
                value={password}
                on:input={(e) => {
                  password = e.target.value;
                  checkPasswordStrength(password);
                }}
                class="modern-input"
                placeholder="Enter new password"
                required
              />
            {/if}
            <button
              type="button"
              class="absolute inset-y-0 right-0 pr-4 flex items-center"
              on:click={() => showPassword = !showPassword}
            >
              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {#if showPassword}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                {:else}
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                {/if}
              </svg>
            </button>
          </div>
          {#if errors.password}
            <p class="text-red-500 text-sm mt-1">{errors.password}</p>
          {/if}
          
          <!-- Password Strength Indicator -->
          <div class="mt-2">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm text-gray-600">Password strength:</span>
              <span class="text-sm font-medium" class:text-red-500={passwordStrength < 3} 
                    class:text-yellow-500={passwordStrength === 3}
                    class:text-green-500={passwordStrength > 3}>
                {strengthLabel}
              </span>
            </div>
            <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full transition-all duration-300 {strengthColor}"
                   style="width: {(passwordStrength / 5) * 100}%">
              </div>
            </div>
          </div>
        </div>

        <!-- Confirm Password Input -->
        <div class="form-group">
          <label class="text-gray-900 text-sm font-semibold mb-2 block">Confirm Password</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="relative">
              {#if showConfirmPassword}
                <input
                  type="text"
                  value={confirmPassword}
                  on:input={(e) => {
                    confirmPassword = e.target.value;
                    checkPasswordMatch();
                  }}
                  class="modern-input {!passwordsMatch && confirmPassword ? 'border-red-500' : ''}"
                  placeholder="Confirm new password"
                  required
                />
              {:else}
                <input
                  type="password"
                  value={confirmPassword}
                  on:input={(e) => {
                    confirmPassword = e.target.value;
                    checkPasswordMatch();
                  }}
                  class="modern-input {!passwordsMatch && confirmPassword ? 'border-red-500' : ''}"
                  placeholder="Confirm new password"
                  required
                />
              {/if}
              <button
                type="button"
                class="absolute inset-y-0 right-0 pr-4 flex items-center"
                on:click={() => showConfirmPassword = !showConfirmPassword}
              >
                <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {#if showConfirmPassword}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  {/if}
                </svg>
              </button>
            </div>
          </div>
          {#if errors.confirmPassword}
            <p class="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          {:else if passwordsMatch && confirmPassword}
            <p class="text-green-500 text-sm mt-1 flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Passwords match
            </p>
          {/if}
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white px-7 py-3 rounded-xl
                 font-medium flex items-center justify-center gap-2 shadow-lg shadow-[#605bff]/25
                 hover:shadow-xl hover:shadow-[#605bff]/30 transform hover:-translate-y-0.5
                 transition-all duration-300 group text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!passwordsMatch || !password || !confirmPassword || isLoading}
        >
          {#if isLoading}
            <div class="flex items-center gap-2">
              <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Resetting Password...
            </div>
          {:else}
            Reset Password
          {/if}
        </button>

        <!-- Back to Login Link -->
        <div class="mt-6 pt-6 text-center border-t border-gray-100">
          <a href="/account/login" class="text-[#605bff] font-medium">
            Back to Sign In
          </a>
        </div>
      </form>
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
</style>
