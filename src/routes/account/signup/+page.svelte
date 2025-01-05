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

<div class="min-h-screen flex relative overflow-hidden">
  <!-- Left Section -->
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
        <div class="flex-1 flex flex-col justify-center max-w-xl">
          <!-- Title -->
          <h1 class="text-6xl font-bold tracking-tight leading-tight mb-6">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#605bff] to-purple-500">
              Next-Gen Payment
            </span>
            <br />
            Platform for the
            <div class="inline-flex flex-col h-[1.25em] overflow-hidden">
              <ul class="animate-slide-words text-[#605bff]">
                {#each ['Future', 'Digital Age', 'Web3', 'Modern Era'] as word}
                  <li>{word}</li>
                {/each}
              </ul>
            </div>
          </h1>
          
          <!-- Description -->
          <p class="text-lg text-gray-600 mb-8">
            Experience lightning-fast payments, bank-grade security, and seamless integration.
          </p>

          <!-- Trust Indicators Section -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-sm font-medium text-gray-900">Verified Security</h3>
              <p class="text-xs text-gray-500 mt-1">PCI DSS Level 1</p>
            </div>

            <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-sm font-medium text-gray-900">Instant Setup</h3>
              <p class="text-xs text-gray-500 mt-1">Go live in minutes</p>
            </div>

            <div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 class="text-sm font-medium text-gray-900">24/7 Support</h3>
              <p class="text-xs text-gray-500 mt-1">Always here to help</p>
            </div>
          </div>

          <!-- Features Grid - Simplified -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            {#each benefits.slice(0, 3) as { icon, title }}
              <div class="p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/20">
                <span class="text-2xl mb-2 block">{icon}</span>
                <span class="text-sm font-medium text-gray-900">{title}</span>
              </div>
            {/each}
          </div>

          <!-- Code Preview -->
          <div class="bg-gray-900 rounded-xl p-4 text-sm font-mono text-gray-300 mb-8">
            <code>{`const payment = await ipsepay.pay({
  amount: 100,
  currency: 'USD'
});`}</code>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8">
            {#each stats as { value, label }}
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">{value}</div>
                <div class="text-sm text-gray-600">{label}</div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Section - Without background -->
  <div class="w-full lg:w-[40%] p-4 overflow-y-auto">
    <div class="max-w-md mx-auto">
      <!-- Form Header -->
      <div class="mb-8">
        <!-- Modern Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#605bff]/10 to-purple-500/10 rounded-full mb-4">
          <div class="flex space-x-1">
            {#each Array(3) as _, i}
              <div class="w-1 h-1 rounded-full bg-[#605bff] animate-pulse" 
                   style="animation-delay: {i * 200}ms"></div>
            {/each}
          </div>
          <span class="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#605bff] to-purple-500">
            Secure Registration
          </span>
        </div>
        
        <h2 class="text-2xl font-bold mb-2">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#605bff] to-purple-500">
            Create your account
          </span>
        </h2>
        <p class="text-sm text-gray-500">Join thousands of businesses using our platform</p>
      </div>

      <!-- Form -->
      <form class="space-y-4">
        <!-- Personal Info Card -->
        <div class="p-4 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl shadow-black/5">
          <div class="space-y-3">
            <!-- Name Fields -->
            <div class="grid grid-cols-2 gap-3">
              <div class="form-group">
                <label class="form-label">First name</label>
                <div class="relative">
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input type="text" class="form-input" placeholder="John" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Last name</label>
                <div class="relative">
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input type="text" class="form-input" placeholder="Doe" required />
                </div>
              </div>
            </div>
            <!-- Contact Fields -->
            <div class="space-y-3">
              <div class="form-group">
                <label class="form-label">Email address</label>
                <div class="relative">
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input type="email" class="form-input" placeholder="you@example.com" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Phone number</label>
                <div class="relative">
                  <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <input type="tel" class="form-input" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Country Selection -->
        <div class="p-3 bg-white/40 backdrop-blur-xl rounded-xl border border-white/20">
          <div class="form-group">
            <label class="form-label">Country</label>
            <div class="relative">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="country-select-wrapper" bind:this={selectContainer}>
                <Select
                  items={formattedCountries}
                  bind:value={selectedCountry}
                  class="country-select"
                  placeholder="Select your country"
                  on:open={handleDropdownOpen}
                  on:close={handleDropdownClose}
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Password -->
        <div class="p-3 bg-white/40 backdrop-blur-xl rounded-xl border border-white/20">
          <div class="form-group">
            <label class="form-label">Password</label>
            <div class="relative">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input 
                type={showPassword ? "text" : "password"} 
                class="form-input" 
                placeholder="Create a secure password" 
                required 
              />
              <button 
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                on:click={() => showPassword = !showPassword}
              >
                {#if showPassword}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                {:else}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        </div>

        <!-- Terms and Submit -->
        <div class="space-y-4 mt-6">
          <div class="flex items-start space-x-3">
            <input
              id="terms"
              type="checkbox"
              class="mt-0.5 h-4 w-4 rounded-md border-gray-200 text-[#605bff]"
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
            class="w-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white py-3 rounded-xl
                   hover:opacity-90 transition-all duration-300 font-medium flex items-center 
                   justify-center gap-2 shadow-lg shadow-[#605bff]/25"
          >
            Create Account
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .form-input {
    @apply w-full h-12 pl-11 pr-4 bg-white/5 border border-gray-200/50 rounded-xl
           focus:outline-none focus:ring-0 focus:border-[#605bff]/50 focus:bg-white/10
           placeholder-gray-400/70 transition-all duration-300 backdrop-blur-sm
           hover:border-gray-300/50 hover:bg-white/10 text-gray-600;
  }

  .input-icon {
    @apply w-[18px] h-[18px] absolute left-4 top-1/2 -translate-y-1/2 text-gray-400/60 stroke-[2]
           transition-colors duration-200 group-focus-within:text-[#605bff]/60;
  }

  .form-label {
    @apply text-[13px] font-medium text-gray-500/90 inline-block mb-2 ml-0.5
           transition-colors duration-200 group-focus-within:text-[#605bff]/80 tracking-wide;
  }

  .form-group {
    @apply space-y-0 relative;
  }

  .country-select-wrapper {
    position: relative !important;
    z-index: 100000 !important;
  }

  :global(.country-select) {
    --height: 3rem;
    --border-radius: 0.75rem;
    --border-color: rgba(229, 231, 235, 0.5);
    --border-width: 1px;
    --border-hover-color: rgba(96, 91, 255, 0.5);
    --background: rgba(255, 255, 255, 0.05);
    --padding: 0.75rem 1rem 0.75rem 2.75rem;
    --item-padding: 0.75rem 1rem;
    --item-hover-bg: rgba(96, 91, 255, 0.05);
    --item-selected-bg: rgba(96, 91, 255, 0.1);
    --font-size: 0.9375rem;
    --placeholder-color: rgba(156, 163, 175, 0.7);
  }

  :global(.svelte-select-list) {
    position: fixed !important;
    z-index: 999999 !important;
    background: rgba(255, 255, 255, 0.98) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 0.75rem !important;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1) !important;
    max-height: 240px !important;
    overflow-y: auto !important;
    margin-bottom: 8px !important;
  }

  :global(.svelte-select-item) {
    padding: 8px 12px !important;
    border-radius: 0.5rem !important;
    margin: 2px 4px !important;
  }

  :global(.svelte-select-item:hover) {
    background: rgba(96, 91, 255, 0.05) !important;
  }

  :global(.svelte-select-item.active) {
    background: rgba(96, 91, 255, 0.1) !important;
    color: #605bff !important;
  }

  .country-select-wrapper {
    position: relative !important;
    z-index: 100000 !important;
  }

  /* Card styles */
  .form-card {
    @apply p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent 
           backdrop-blur-xl rounded-2xl border border-white/20 
           transition-all duration-300 hover:shadow-lg hover:shadow-[#605bff]/5
           hover:border-white/30;
  }

  /* Form section spacing */
  .form-section {
    @apply space-y-5;
  }

  /* Input group wrapper */
  .input-wrapper {
    @apply relative transition-all duration-200;
  }

  /* Enhanced focus states */
  :global(.group:focus-within) .input-wrapper {
    @apply transform scale-[1.02] transition-transform duration-200;
  }

  /* Animated placeholder */
  .form-input:focus::placeholder {
    @apply opacity-60 transition-opacity duration-200;
  }

  /* Submit button enhancement */
  .submit-button {
    @apply bg-gradient-to-r from-[#605bff] via-[#7b6fff] to-[#8f7fff]
           hover:from-[#6c68ff] hover:via-[#8579ff] hover:to-[#9a89ff]
           transition-all duration-300 transform hover:scale-[1.02];
  }

  @keyframes slide-words {
    0% { transform: translateY(0%); }
    25% { transform: translateY(-100%); }
    50% { transform: translateY(-200%); }
    75% { transform: translateY(-300%); }
    100% { transform: translateY(0%); }
  }

  .animate-slide-words {
    animation: slide-words 8s infinite;
  }

  @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-20px, 20px); }
    100% { transform: translate(0, 0); }
  }

  .animate-float {
    animation: float 8s infinite ease-in-out;
  }

  .animate-fade-slide-in {
    animation: fade-slide-in 0.5s ease-out;
  }

  @keyframes fade-slide-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes particle-float {
    0%, 100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      transform: translate(var(--tx), var(--ty));
      opacity: 1;
    }
  }

  .animate-particle-float {
    --tx: random(-20px, 20px);
    --ty: random(-20px, 20px);
    animation: particle-float 2s ease-in-out infinite;
    left: random(0%, 100%);
    top: random(0%, 100%);
  }
</style>

<!-- Custom item component for countries -->
<script context="module">
  const CountryItem = (item) => `
    <div class="flex items-center gap-2 py-1">
      <span class="text-lg">${item.flag}</span>
      <span class="text-sm">${item.label}</span>
    </div>
  `;
</script>
