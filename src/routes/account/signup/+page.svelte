<script>
  import { onMount } from 'svelte';
  import Select from 'svelte-select';
  import countries from 'world-countries';
  import { fade } from 'svelte/transition';
  
  let selectContainer;
  let dropdownOpen = false;
  let showPassword = false;
  let selectedCountry = null;
  let isLoading = false;
  let formStep = 1;
  let activeTestimonial = 0;
  let mouseX = 0;
  let mouseY = 0;
  let password = '';
  let passwordStrength = 0; // 0-4 scale
  let passwordChecks = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  };

  // Add form data and validation
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: null,
    terms: false
  };

  let errors = {};
  let isNotificationVisible = false;  // Changed from showNotification
  let notificationMessage = '';
  let notificationType = 'error';

  // Add phone prefix state
  let selectedPhonePrefix = null;
  
  // Phone prefixes data
  const phonePrefixes = countries.map(country => ({
    value: country.idd.root + (country.idd.suffixes?.[0] || ''),
    label: `${country.flag} ${country.idd.root}${country.idd.suffixes?.[0] || ''}`,
    flag: country.flag
  })).sort((a, b) => a.value.localeCompare(b.value));

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }

  function showError(message) {
    showNotification(message, 'error');
  }

  // Add these functions near your other validation functions
  function formatPhoneNumber(phone) {
    // Remove all non-digits
    let cleaned = phone.replace(/\D/g, '');
    
    // Format the number based on length
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  }

  function isValidPhoneNumber(phone) {
    // Remove all non-digits for validation
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's a valid length (adjust for your needs)
    return cleaned.length >= 10 && cleaned.length <= 15;
  }

  // Update validateStep1 to include better phone validation
  function validateStep1() {
    errors = {};
    let isValid = true;

    if (!formData.firstName?.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }
    if (!formData.lastName?.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    if (!formData.phone?.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    if (!formData.password?.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (passwordStrength < 3) {
      errors.password = 'Password is too weak';
      isValid = false;
    }

    if (!isValid) {
      showError('Please fill in all required fields correctly');
    }

    return isValid;
  }

  function validateStep2() {
    errors = {};
    let isValid = true;

    if (!formData.streetAddress?.trim()) {
      errors.streetAddress = 'Street address is required';
      isValid = false;
    }
    if (!formData.city?.trim()) {
      errors.city = 'City is required';
      isValid = false;
    }
    if (!formData.state?.trim()) {
      errors.state = 'State is required';
      isValid = false;
    }
    if (!formData.zip?.trim()) {
      errors.zip = 'ZIP code is required';
      isValid = false;
    }
    if (!formData.country) {
      errors.country = 'Country is required';
      isValid = false;
    }
    if (!formData.terms) {
      errors.terms = 'You must accept the terms and conditions';
      isValid = false;
    }

    if (!isValid) {
      showError('Please fill in all required fields');
    }

    return isValid;
  }

  async function handleNextStep() {
    if (formStep === 1 && validateStep1()) {
      await sendVerificationCode();
    } else if (formStep === 2 && validateStep2()) {
      formStep = 3;
    }
  }

  function handleSubmit() {
    if (validateStep2()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  }

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

  // Password strength checker
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

    // Length check
    if (pass.length >= 8) {
      strength += 1;
      passwordChecks.length = true;
    }

    // Uppercase check
    if (/[A-Z]/.test(pass)) {
      strength += 1;
      passwordChecks.uppercase = true;
    }

    // Lowercase check
    if (/[a-z]/.test(pass)) {
      strength += 1;
      passwordChecks.lowercase = true;
    }

    // Number check
    if (/[0-9]/.test(pass)) {
      strength += 1;
      passwordChecks.number = true;
    }

    // Special character check
    if (/[^A-Za-z0-9]/.test(pass)) {
      strength += 1;
      passwordChecks.special = true;
    }

    passwordStrength = strength;
  }

  // Get strength label and color
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

  // Update verification states
  let verificationCode = '';
  let sentVerificationCode = '';
  let isVerifying = false;
  let verificationError = '';
  let timeLeft = 0;
  let resendTimer;
  let isSendingCode = false;

  // Function to generate verification code
  function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Function to send verification code
  async function sendVerificationCode() {
    try {
      isSendingCode = true;
      verificationError = '';
      sentVerificationCode = generateVerificationCode();
      
      console.log('Sending verification request for:', formData.email);
      
      const response = await fetch('/api/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          code: sentVerificationCode
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Server response:', data);
        throw new Error(data.details || data.error || 'Failed to send verification code');
      }

      // Set verification UI state
      isVerifying = true;
      timeLeft = 180;
      startResendTimer();
      
      showNotification('Verification code sent to your email', 'success');
    } catch (error) {
      console.error('Verification error:', error);
      showError(`Failed to send verification code: ${error.message}`);
      isVerifying = false;
    } finally {
      isSendingCode = false;
    }
  }

  // Timer for resend cooldown
  function startResendTimer() {
    clearInterval(resendTimer);
    resendTimer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(resendTimer);
      }
    }, 1000);
  }

  // Format remaining time
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Verify code
  async function verifyCode() {
    try {
      // Get all verification inputs and their values
      const inputs = document.querySelectorAll('.verification-input');
      const enteredCode = Array.from(inputs)
        .map(input => input.value)
        .join('');

      console.log('Entered code:', enteredCode);
      console.log('Sent code:', sentVerificationCode);

      if (!enteredCode || enteredCode.length !== 6) {
        throw new Error('Please enter the complete verification code');
      }

      // Compare with the code we sent
      if (enteredCode === sentVerificationCode) {
        // Clear verification UI and proceed
        isVerifying = false;
        clearInterval(resendTimer);
        formStep = 2;
        showNotification('Email verified successfully', 'success');
      } else {
        throw new Error('Invalid verification code');
      }
    } catch (error) {
      verificationError = error.message;
      showError(error.message);
      
      // Clear input fields on error
      document.querySelectorAll('.verification-input').forEach(input => {
        input.value = '';
      });
      // Focus first input
      document.querySelector('.verification-input')?.focus();
    }
  }

  // Update the handleVerificationInput function
  function handleVerificationInput(event, index) {
    const input = event.target;
    const value = input.value;

    // Clear error when user starts typing
    verificationError = '';

    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      input.value = '';
      return;
    }

    // Auto advance to next input
    if (value && index < 5) {
      const nextInput = document.querySelectorAll('.verification-input')[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }

    // Check if all inputs are filled
    const allInputs = document.querySelectorAll('.verification-input');
    const isComplete = Array.from(allInputs).every(input => input.value.length === 1);
    
    if (isComplete) {
      const enteredCode = Array.from(allInputs)
        .map(input => input.value)
        .join('');
      
      if (enteredCode.length === 6) {
        verifyCode();
      }
    }
  }

  // Handle backspace
  function handleVerificationKeydown(event, index) {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
      const prevInput = document.querySelectorAll('.verification-input')[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  onMount(() => {
    const interval = setInterval(() => {
      activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    }, 5000);

    return () => clearInterval(interval);
  });

  // Cleanup on unmount
  onMount(() => {
    return () => clearInterval(resendTimer);
  });

  // Update Continue button to show loading state
  $: isNextButtonDisabled = formStep === 1 && isSendingCode;

  // Add this notification function
  function showNotification(message, type = 'success') {
    notificationMessage = message;
    notificationType = type;
    isNotificationVisible = true;  // Use the new variable name
    setTimeout(() => {
      isNotificationVisible = false;  // Use the new variable name
    }, 5000);
  }

  // Add phone input handler
  function handlePhoneInput(event) {
    let input = event.target;
    let cursorPosition = input.selectionStart;
    let oldValue = input.value;
    let newValue = formatPhoneNumber(input.value);
    
    // Only update if the format actually changed
    if (oldValue !== newValue) {
      formData.phone = newValue;
      
      // Adjust cursor position for formatting characters
      let oldLength = oldValue.length;
      let newLength = newValue.length;
      let offset = newLength - oldLength;
      
      // Wait for the next tick to set cursor position
      setTimeout(() => {
        input.setSelectionRange(cursorPosition + offset, cursorPosition + offset);
      }, 0);
    }
  }
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
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="h-1.5 bg-gray-100">
      <div class="h-full bg-[#605bff] transition-all duration-500 ease-in-out"
           style="width: {(formStep / 2) * 100}%">
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <div class="w-3 h-3 bg-[#605bff] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full lg:w-[70%] p-3 flex items-start justify-center min-h-screen bg-gradient-to-b from-white to-gray-50/50">
    <div class="w-full max-w-[1200px] relative scale-[0.92]">
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

      <!-- Progress Bar -->
      <div class="relative w-full mb-8">
        <!-- Progress bar and steps container -->
        <div class="relative flex items-center justify-between px-10">
          <!-- Background line -->
          <div class="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-1 
                      bg-gray-100 rounded-full overflow-hidden">
            <!-- Animated progress -->
            <div class="h-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] 
                        transition-all duration-700 ease-out relative"
                 style="width: {(formStep / 2) * 100}%">
              <!-- Shimmer effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                          animate-shimmer-primary"></div>
            </div>
          </div>

          <!-- Steps with icons -->
          {#each Array(2) as _, i}
            <div class="relative z-10">
              <!-- Step circle -->
              <div class="relative">
                <!-- Main circle -->
                <div class="w-16 h-16 rounded-full flex items-center justify-center
                            transition-all duration-500 border-[3px]
                            transform hover:scale-105 bg-white
                            {i + 1 <= formStep 
                              ? 'border-[#605bff]' 
                              : 'border-gray-200'}"
                     style="box-shadow: 0 0 0 8px {i + 1 <= formStep ? 'rgb(96 91 255 / 0.08)' : 'rgb(243 244 246)'}">
                  
                  {#if i + 1 < formStep}
                    <!-- Completed state -->
                    <div class="flex items-center justify-center w-full h-full 
                                bg-gradient-to-r from-[#605bff] to-[#8b7aff] rounded-full">
                      <svg class="w-8 h-8 text-white animate-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" 
                              d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  {:else}
                    <!-- Current/Future state -->
                    <svg class="w-7 h-7 {i + 1 === formStep ? 'text-[#605bff]' : 'text-gray-400'}" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {#if i === 0}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      {/if}
                    </svg>
                  {/if}
                </div>

                <!-- Active state effects -->
                {#if i + 1 === formStep}
                  <div class="absolute -inset-4 rounded-full border-2 border-[#605bff]/20
                             animate-pulse-ring"></div>
                  <div class="absolute -inset-6 rounded-full border border-[#605bff]/10
                             animate-pulse-ring-slow delay-150"></div>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Form Card -->
      <div class="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 max-w-3xl mx-auto space-y-6 pt-2">
        <form class="relative">
          {#if formStep === 1}
            <!-- Step 1: Personal Information -->
            <div class="space-y-4">
              <div class="form-section">
                <div class="flex items-center gap-2 mb-4">
                  <div class="p-1.5 bg-[#605bff]/10 rounded-lg">
                    <svg class="w-4 h-4 text-[#605bff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-gray-900">Personal Information</h3>
                    <p class="text-xs text-gray-500">Step 1 of 2</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <!-- First Name -->
                  <div class="form-group">
                    <label class="form-label">First name</label>
                    <div class="input-wrapper">
                      <div class="input-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        class="modern-input {errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="First name"
                        bind:value={formData.firstName}
                        required
                      />
                    </div>
                  </div>

                  <!-- Last Name -->
                  <div class="form-group">
                    <label class="form-label">Last name</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <input
                        type="text"
                        class="modern-input {errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="Last name"
                        bind:value={formData.lastName}
                        required
                      />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="form-group">
                    <label class="form-label">Email address</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <input
                        type="email"
                        class="modern-input {errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="you@example.com"
                        bind:value={formData.email}
                        on:blur={() => {
                          if (formData.email && !isValidEmail(formData.email)) {
                            errors.email = 'Please enter a valid email address';
                          } else {
                            delete errors.email;
                          }
                        }}
                        required
                      />
                    </div>
                    {#if errors.email}
                      <span class="text-xs text-red-500 mt-1">{errors.email}</span>
                    {/if}
                  </div>

                  <!-- Phone -->
                  <div class="form-group">
                    <label class="form-label" for="phone">Phone number</label>
                    <div class="flex gap-2">
                      <!-- Phone Prefix Select -->
                      <div class="w-32">
                        <Select
                          items={phonePrefixes}
                          bind:value={selectedPhonePrefix}
                          class="phone-prefix-select"
                          placeholder="+1"
                          itemComponent={({ item }) => `
                            <div class="flex items-center gap-2 py-1">
                              <span class="text-lg">${item.flag}</span>
                              <span class="font-medium">${item.value}</span>
                            </div>
                          `}
                          selectedComponent={({ item }) => `
                            <div class="flex items-center gap-2">
                              <span class="text-lg">${item.flag}</span>
                              <span class="font-medium">${item.value}</span>
                            </div>
                          `}
                        />
                      </div>

                      <!-- Phone Number Input -->
                      <div class="flex-1 relative">
                        <div class="input-wrapper">
                          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <input
                            type="tel"
                            id="phone"
                            class="modern-input {errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                            placeholder="(123) 456-7890"
                            bind:value={formData.phone}
                            on:input={handlePhoneInput}
                            maxlength="12"
                            required
                          />
                        </div>
                        {#if errors.phone}
                          <span class="text-xs text-red-500 mt-1 absolute -bottom-5">{errors.phone}</span>
                        {/if}
                      </div>
                    </div>
                    
                    <!-- Helper text -->
                    <span class="text-xs text-gray-500 mt-1">
                      Format: XXX-XXX-XXXX
                    </span>
                  </div>

                  <!-- Password -->
                  <div class="col-span-full">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div class="relative w-full">
                      <!-- Lock icon -->
                      <div class="absolute left-5 top-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             class="w-5 h-5 text-[#605bff]/70" 
                             viewBox="0 0 24 24" 
                             fill="none" 
                             stroke="currentColor">
                          <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="1.5" 
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                      
                      <!-- Password input -->
                      <div class="w-full">
                        {#if showPassword}
                          <input 
                            type="text"
                            class="block w-full h-[60px] pl-14 pr-12 bg-white
                                   border border-gray-200 rounded-xl
                                   focus:outline-none focus:ring-2 
                                   focus:ring-[#605bff]/20 focus:border-[#605bff]
                                   text-gray-900 placeholder-gray-400 
                                   transition-all duration-200
                                   hover:border-[#605bff]/40 text-[16px] 
                                   leading-normal tracking-tight
                                   hover:bg-white focus:bg-white font-medium" 
                            placeholder="Create password" 
                            bind:value={formData.password}
                            on:input={() => checkPasswordStrength(formData.password)}
                            required 
                          />
                        {:else}
                          <input 
                            type="password"
                            class="block w-full h-[60px] pl-14 pr-12 bg-white
                                   border border-gray-200 rounded-xl
                                   focus:outline-none focus:ring-2 
                                   focus:ring-[#605bff]/20 focus:border-[#605bff]
                                   text-gray-900 placeholder-gray-400 
                                   transition-all duration-200
                                   hover:border-[#605bff]/40 text-[16px] 
                                   leading-normal tracking-tight
                                   hover:bg-white focus:bg-white font-medium" 
                            placeholder="Create password" 
                            bind:value={formData.password}
                            on:input={() => checkPasswordStrength(formData.password)}
                            required 
                          />
                        {/if}
                      </div>

                      <!-- Password toggle button -->
                      <button
                        type="button"
                        class="absolute right-4 top-1/2 -translate-y-1/2 p-1
                               hover:bg-gray-100 rounded-full transition-colors
                               focus:outline-none focus:ring-2 focus:ring-[#605bff]/20"
                        on:click={() => showPassword = !showPassword}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {#if showPassword}
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               class="h-5 w-5 text-gray-500 hover:text-[#605bff] transition-colors" 
                               fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        {:else}
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               class="h-5 w-5 text-gray-500 hover:text-[#605bff] transition-colors" 
                               fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        {/if}
                      </button>

                      <!-- Password strength indicator -->
                      <div class="absolute -bottom-7 left-0 right-0 space-y-1">
                        <!-- Strength bars -->
                        <div class="w-full flex gap-1">
                          {#each Array(5) as _, i}
                            <div class="h-1 flex-1 rounded-full transition-all duration-300
                                        {i < passwordStrength ? strengthColor : 'bg-gray-200'}" />
                          {/each}
                        </div>
                        <!-- Strength label -->
                        <div class="flex justify-between items-center text-xs">
                          <span class="font-medium" 
                                  class:text-red-500={passwordStrength <= 1}
                                  class:text-orange-500={passwordStrength === 2}
                                  class:text-yellow-500={passwordStrength === 3}
                                  class:text-green-500={passwordStrength >= 4}>
                            {strengthLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Password requirements -->
                    <div class="mt-10 text-xs text-gray-500">
                      <span class="font-medium">Password must contain:</span>
                      <div class="mt-2 grid grid-cols-2 gap-2">
                        {#each [
                          { check: 'length', text: 'At least 8 characters' },
                          { check: 'uppercase', text: 'One uppercase letter' },
                          { check: 'lowercase', text: 'One lowercase letter' },
                          { check: 'number', text: 'One number' },
                          { check: 'special', text: 'One special character' }
                        ] as requirement}
                          <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 transition-colors duration-300
                                        {passwordChecks[requirement.check] ? 'text-green-500' : 'text-gray-400'}" 
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="transition-colors duration-300
                                         {passwordChecks[requirement.check] ? 'text-gray-700' : 'text-gray-400'}">
                              {requirement.text}
                            </span>
                          </div>
                        {/each}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Next Button -->
              <button 
                type="button"
                on:click={handleNextStep}
                disabled={isNextButtonDisabled}
                class="w-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white 
                       px-7 py-3 rounded-xl font-medium flex items-center justify-center gap-2
                       disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {#if isSendingCode}
                  <div class="flex items-center gap-2">
                    <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Code...
                  </div>
                {:else}
                  Continue
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                {/if}
              </button>
            </div>

          {:else if formStep === 2}
            <!-- Step 2: Address Information -->
            <div class="space-y-4">
              <div class="form-section">
                <div class="flex items-center gap-2 mb-4">
                  <div class="p-1.5 bg-[#605bff]/10 rounded-lg">
                    <svg class="w-4 h-4 text-[#605bff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-gray-900">Address Information</h3>
                    <p class="text-xs text-gray-500">Step 2 of 2</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <!-- Street Address -->
                  <div class="form-group col-span-2">
                    <label class="form-label">Street address</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                      </svg>
                      <input
                        type="text"
                        class="modern-input {errors.streetAddress ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="Enter street address"
                        bind:value={formData.streetAddress}
                        required
                      />
                    </div>
                  </div>

                  <!-- City -->
                  <div class="form-group">
                    <label class="form-label">City</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                      <input
                        type="text"
                        class="modern-input {errors.city ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="City"
                        bind:value={formData.city}
                        required
                      />
                    </div>
                  </div>

                  <!-- State -->
                  <div class="form-group">
                    <label class="form-label">State</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <input
                        type="text"
                        class="modern-input {errors.state ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="State"
                        bind:value={formData.state}
                        required
                      />
                    </div>
                  </div>

                  <!-- ZIP -->
                  <div class="form-group">
                    <label class="form-label">ZIP code</label>
                    <div class="input-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <input
                        type="text"
                        class="modern-input {errors.zip ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}"
                        placeholder="ZIP"
                        bind:value={formData.zip}
                        required
                      />
                    </div>
                  </div>

                  <!-- Country -->
                  <div class="form-group">
                    <label class="form-label">Country</label>
                    <div class="input-wrapper select-wrapper">
                      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
                      </svg>
                      <Select
                        items={formattedCountries}
                        bind:value={selectedCountry}
                        class="modern-select"
                        placeholder="Select country"
                        itemComponent={({ item }) => `
                          <div class="flex items-center gap-2 py-1">
                            <span class="text-lg">${item.flag}</span>
                            <span class="font-medium">${item.label}</span>
                          </div>
                        `}
                        selectedComponent={({ item }) => `
                          <div class="flex items-center gap-2">
                            <span class="text-lg">${item.flag}</span>
                            <span class="font-medium">${item.label}</span>
                          </div>
                        `}
                      />
                    </div>
                    {#if errors.country}
                      <span class="text-xs text-red-500 mt-1">{errors.country}</span>
                    {/if}
                  </div>
                </div>
              </div>

              <!-- Terms and Navigation Buttons -->
              <div class="pt-6 border-t border-gray-100">
                <div class="flex items-start gap-3 mb-4">
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

                <div class="flex gap-3">
                  <button 
                    type="button"
                    on:click={() => formStep = 1}
                    class="w-1/3 border border-[#605bff] text-[#605bff] 
                           px-7 py-3 rounded-xl font-medium"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    on:click|preventDefault={handleSubmit}
                    class="w-2/3 bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white 
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
          {/if}
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Modern Notification Component -->
{#if isNotificationVisible}
  <div
    transition:fade={{ duration: 300 }}
    class="fixed top-4 right-4 z-50 flex items-center gap-3 p-4 pr-12
           bg-white border border-gray-100 rounded-2xl shadow-lg shadow-black/5
           backdrop-blur-xl"
  >
    <!-- Icon container -->
    <div class="{notificationType === 'error' 
      ? 'bg-red-50 text-red-500' 
      : 'bg-green-50 text-green-500'} 
      p-2 rounded-xl">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        {#if notificationType === 'error'}
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        {:else}
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        {/if}
      </svg>
    </div>

    <!-- Content -->
    <div class="flex flex-col">
      <span class="font-medium text-gray-900">
        {notificationType === 'error' ? 'Error' : 'Success'}
      </span>
      <span class="text-sm text-gray-500">{notificationMessage}</span>
    </div>

    <!-- Close button -->
    <button
      on:click={() => isNotificationVisible = false}
      class="absolute right-2 top-2 p-1 hover:bg-gray-50 rounded-lg
             transition-colors duration-200"
    >
      <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-full overflow-hidden">
      <div
        class="h-full {notificationType === 'error' ? 'bg-red-500' : 'bg-green-500'} 
               transition-all duration-300 ease-in-out"
        style="animation: notification-progress 5s linear;"
      ></div>
    </div>
  </div>
{/if}

<!-- Add verification UI after email validation -->
{#if isVerifying}
  <div class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl 
                border border-gray-100 space-y-6 relative overflow-hidden">
      <!-- Decorative gradient background -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" 
             style="background: radial-gradient(circle at top right, #605bff, transparent 50%),
                    radial-gradient(circle at bottom left, #8b7aff, transparent 50%);">
        </div>
      </div>

      <div class="relative space-y-6">
        <!-- Header with icon -->
        <div class="text-center space-y-2">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full 
                      bg-[#605bff]/10 mb-4">
            <svg class="w-8 h-8 text-[#605bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">Verify your email</h3>
          <p class="text-gray-600">
            We've sent a verification code to<br>
            <span class="font-medium text-gray-900">{formData.email}</span>
          </p>
        </div>

        <!-- Verification Input -->
        <div class="flex flex-col items-center gap-6">
          <div class="flex gap-3 justify-center">
            {#each Array(6) as _, i}
              <input
                type="text"
                maxlength="1"
                class="verification-input w-12 h-14 text-center text-xl font-bold rounded-xl
                       border-2 border-gray-200 
                       focus:border-[#605bff] focus:ring-4 focus:ring-[#605bff]/20 
                       transition-all duration-200
                       {verificationError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
                       hover:border-[#605bff]/40"
                on:input={(e) => handleVerificationInput(e, i)}
                on:keydown={(e) => handleVerificationKeydown(e, i)}
                inputmode="numeric"
                pattern="\d*"
              />
            {/each}
          </div>

          {#if verificationError}
            <div class="flex items-center gap-2 text-red-500">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span class="text-sm font-medium">{verificationError}</span>
            </div>
          {/if}

          <!-- Timer and Resend -->
          <div class="text-center space-y-3">
            {#if timeLeft > 0}
              <div class="text-sm text-gray-600">
                Resend code in <span class="font-medium text-[#605bff]">{formatTime(timeLeft)}</span>
              </div>
            {:else}
              <button
                on:click={sendVerificationCode}
                disabled={isSendingCode}
                class="text-[#605bff] hover:text-[#605bff]/80 font-medium
                       disabled:opacity-50 disabled:cursor-not-allowed
                       inline-flex items-center gap-2 transition-colors"
              >
                {#if isSendingCode}
                  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                {:else}
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Resend verification code
                {/if}
              </button>
            {/if}
          </div>

          <!-- Verify Button -->
          <button
            on:click={verifyCode}
            class="w-full bg-gradient-to-r from-[#605bff] to-[#8b7aff] text-white
                   px-7 py-4 rounded-xl font-medium flex items-center justify-center gap-2
                   hover:opacity-90 transition-opacity"
          >
            Verify Email
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </button>

          <!-- Change Email -->
          <button
            on:click={() => {
              isVerifying = false;
              clearInterval(resendTimer);
            }}
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors
                   flex items-center gap-2"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Change email address
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  /* Fixed Icon Positioning */
  .input-wrapper {
    @apply relative;
  }

  .input-icon {
    @apply absolute left-5 top-1/2 -translate-y-1/2 
           w-5 h-5 text-[#605bff]/70 stroke-[1.5]
           transition-all duration-200 pointer-events-none;
  }

  /* Input with Proper Icon Space */
  .modern-input {
    @apply w-full h-[60px] pl-14 pr-5 bg-white
           border border-gray-200 rounded-xl
           focus:outline-none focus:ring-2 
           focus:ring-[#605bff]/20 focus:border-[#605bff]
           text-gray-900 placeholder-gray-400 
           transition-all duration-200
           hover:border-[#605bff]/40 text-[16px] 
           leading-normal tracking-tight
           hover:bg-white focus:bg-white font-medium;
  }

  /* Hover and Focus States */
  .input-wrapper:hover .input-icon {
    @apply text-[#605bff];
  }

  .input-wrapper:focus-within .input-icon {
    @apply text-[#605bff];
  }

  /* Select Component Alignment */
  :global(.modern-select) {
    --height: 60px;
    --font-size: 16px;
    --padding: 0.75rem 1rem;
  }

  :global(.modern-select input) {
    padding-left: 3.5rem !important;
  }

  /* Add these new styles for the select */
  .select-wrapper {
    @apply relative;
  }

  .select-wrapper .input-icon {
    @apply z-10;
  }

  :global(.select-wrapper .modern-select) {
    @apply w-full;
  }

  :global(.select-wrapper .modern-select .selectContainer) {
    @apply h-[60px] bg-white border border-gray-200 rounded-xl;
  }

  :global(.select-wrapper .modern-select .selectContainer input) {
    @apply pl-14 h-[60px];
  }

  :global(.select-wrapper:hover .input-icon) {
    @apply text-[#605bff];
  }

  @keyframes pattern-1 {
    0% { background-position: 0 0; }
    100% { background-position: 20px 20px; }
  }

  @keyframes pattern-2 {
    0% { background-position: 0 0; }
    100% { background-position: -20px -20px; }
  }

  @keyframes shimmer-primary {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes shimmer-secondary {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes pulse-ring {
    0% { transform: scale(0.95); opacity: 0.6; }
    50% { transform: scale(1.05); opacity: 0.3; }
    100% { transform: scale(0.95); opacity: 0.6; }
  }

  @keyframes pulse-ring-slow {
    0% { transform: scale(0.98); opacity: 0.4; }
    50% { transform: scale(1.02); opacity: 0.2; }
    100% { transform: scale(0.98); opacity: 0.4; }
  }

  @keyframes check {
    0% { transform: scale(0.8) rotate(-10deg); opacity: 0; }
    50% { transform: scale(1.2) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .animate-pattern-1 {
    animation: pattern-1 3s linear infinite;
  }

  .animate-pattern-2 {
    animation: pattern-2 3s linear infinite;
  }

  .animate-shimmer-primary {
    animation: shimmer-primary 2s infinite;
  }

  .animate-shimmer-secondary {
    animation: shimmer-secondary 2.5s infinite;
  }

  .animate-pulse-ring {
    animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-pulse-ring-slow {
    animation: pulse-ring-slow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-ping-slow {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-ping-slower {
    animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  /* Add these new animations */
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .animate-bounce-slow {
    animation: bounce-slow 1.5s infinite;
  }

  .form-group {
    @apply flex flex-col gap-2;
  }

  .input-wrapper {
    @apply relative flex-1;
  }

  .modern-input {
    @apply h-[60px] pl-14 pr-5 bg-white
           border border-gray-200 rounded-xl
           focus:outline-none focus:ring-2 
           focus:ring-[#605bff]/20 focus:border-[#605bff]
           text-gray-900 placeholder-gray-400 
           transition-all duration-200
           hover:border-[#605bff]/40 text-[16px] 
           leading-normal tracking-tight
           hover:bg-white focus:bg-white font-medium;
  }

  /* Add the notification animation with the other animations */
  @keyframes notification-progress {
    from { width: 100%; }
    to { width: 0%; }
  }

  /* Add styles for phone prefix select */
  :global(.phone-prefix-select) {
    --height: 60px;
    --border-radius: 0.75rem;
    --border-color: #e5e7eb;
    --border-hover-color: rgba(96, 91, 255, 0.4);
    --background: white;
  }

  :global(.phone-prefix-select .selectContainer) {
    @apply border border-gray-200 rounded-xl;
  }

  :global(.phone-prefix-select .selectContainer:hover) {
    @apply border-[#605bff]/40;
  }

  :global(.phone-prefix-select .selectContainer input) {
    @apply h-[60px] px-4;
  }

  /* Enhanced country select styles */
  :global(.modern-select) {
    --height: 60px;
    --border-radius: 0.75rem;
    --border-color: #e5e7eb;
    --border-hover-color: rgba(96, 91, 255, 0.4);
    --background: white;
    --font-size: 16px;
    --padding: 0.75rem 1rem;
  }

  :global(.modern-select .selectContainer) {
    @apply border border-gray-200 rounded-xl transition-all duration-200;
  }

  :global(.modern-select .selectContainer:hover) {
    @apply border-[#605bff]/40;
  }

  :global(.modern-select .selectContainer input) {
    @apply h-[60px] pl-14 pr-4;
  }

  :global(.modern-select .listContainer) {
    @apply rounded-xl border border-gray-100 shadow-lg mt-1;
  }

  :global(.modern-select .listItem) {
    @apply px-4 py-2 hover:bg-[#605bff]/5 transition-colors duration-200;
  }

  :global(.modern-select .selectedItem) {
    @apply pl-14 flex items-center h-[60px];
  }

  :global(.modern-select .clearSelect) {
    @apply p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200;
  }

  :global(.modern-select .listItem.selected) {
    @apply bg-[#605bff]/5 text-[#605bff];
  }

  /* Verification input styles */
  .verification-input {
    @apply w-12 h-12 text-center text-lg font-semibold rounded-xl 
           border border-gray-200 focus:border-[#605bff] 
           focus:ring-2 focus:ring-[#605bff]/20 transition-all;
  }

  .verification-input::-webkit-outer-spin-button,
  .verification-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

