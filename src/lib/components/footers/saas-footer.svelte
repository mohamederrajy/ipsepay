<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { fade, fly, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  $: routeTd = $page.url.pathname;
  let email = '';
  let isSubmitting = false;
  let showSuccessMessage = false;

  const socialLinks = [
    { icon: 'linkedin', url: '#', label: 'LinkedIn', color: '#0077B5', followers: '50K+', description: 'Connect with us' },
    { icon: 'twitter', url: '#', label: 'X', color: '#1DA1F2', followers: '35K+', description: 'Latest updates' },
    { icon: 'facebook', url: '#', label: 'Facebook', color: '#4267B2', followers: '45K+', description: 'Join our community' },
    { icon: 'instagram', url: '#', label: 'Instagram', color: '#E4405F', followers: '25K+', description: 'Behind the scenes' }
  ];

  const footerLinks = {
    solutions: [
      { label: 'Online Payments', href: '/payments/online' },
      { label: 'Payment Links', href: '/payments/payments-link' },
      { label: 'Checkout', href: '/payments/checkout' },
      { label: 'Authentication', href: '/enhancements/authentication' },
      { label: 'Risk Management', href: '/enhancements/risk' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Data Protection', href: '/data-protection' },
      { label: 'Security', href: '/security' },
      { label: 'Cookie Settings', href: '/cookies' }
    ],
    industries: [
      { label: 'Digital Businesses', href: '/industries/digital-businesses' },
      { label: 'Mobility', href: '/industries/mobility' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Platforms', href: '/industries/platform-payments' },
      { label: 'SaaS', href: '/industries/saas-platforms' }
    ]
  };

  const paymentMethods = [
    { name: 'Visa', icon: 'vss' },
    { name: 'Mastercard', icon: 'mscrad' },
    { name: 'American Express', icon: 'amex' },
    { name: 'Google Pay', icon: 'G-pay' },
    { name: 'Apple Pay', icon: 'A-pay' },
    { name: 'Maestro', icon: 'maestro' }
  ];

  const stats = [
    { value: '99.99%', label: 'Uptime', icon: 'server' },
    { value: '150+', label: 'Countries', icon: 'globe' },
    { value: '$10B+', label: 'Processed', icon: 'credit-card' },
    { value: '50M+', label: 'Transactions', icon: 'chart-line' }
  ];

  async function handleSubscribe(e) {
    e.preventDefault();
    isSubmitting = true;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    showSuccessMessage = true;
    isSubmitting = false;
    email = '';
    setTimeout(() => showSuccessMessage = false, 3000);
  }

  async function navigateToSection(sectionId) {
    if (window.location.pathname !== '/') {
      await goto('/');
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<footer class="relative overflow-hidden pt-24 pb-12">
  <!-- Enhanced Modern Background -->
  <div class="absolute inset-0">
    <!-- Refined base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa]/80 to-[#f8f8f8]"></div>
    
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0"
         style="background-image: 
            linear-gradient(rgba(96, 91, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 91, 255, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;">
    </div>

    <!-- Enhanced floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary gradient sphere -->
      <div class="absolute -top-1/4 -right-1/4 w-1/2 h-1/2
                  bg-gradient-to-br from-[#605bff]/10 via-[#605bff]/5 to-transparent 
                  blur-3xl animate-float-slow rounded-full"
           style="animation-duration: 20s;">
      </div>
      
      <!-- Secondary gradient sphere -->
      <div class="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2
                  bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/5 to-transparent 
                  blur-3xl animate-float-slow rounded-full"
           style="animation-duration: 25s; animation-delay: -10s;">
      </div>

      <!-- Accent elements -->
      <div class="absolute top-1/3 left-1/4 w-32 h-32
                  bg-gradient-to-r from-[#605bff]/10 to-transparent 
                  blur-2xl animate-pulse rounded-full"
           style="animation-duration: 8s;">
      </div>
      <div class="absolute bottom-1/3 right-1/4 w-24 h-24
                  bg-gradient-to-l from-[#32325d]/10 to-transparent 
                  blur-2xl animate-pulse rounded-full"
           style="animation-duration: 10s; animation-delay: -2s;">
      </div>
    </div>

    <!-- Top border gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r 
                from-transparent via-[#605bff]/20 to-transparent"></div>
  </div>

  <div class="relative container mx-auto px-4">
    <!-- Stats Section -->
    <div class="mb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each stats as { value, label, icon }}
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent rounded-2xl 
                        transform group-hover:scale-105 transition-transform duration-300"></div>
            <div class="relative p-6 text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl 
                          bg-[#605bff]/10 text-[#605bff] group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-{icon} text-xl"></i>
              </div>
              <div class="text-2xl font-bold text-gray-900 mb-1">{value}</div>
              <div class="text-sm text-gray-600">{label}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Top Section with Logo and Social -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 
                bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 border border-gray-100/80">
      <div class="flex items-center gap-8">
        <a href="/" class="block">
          <img src="/images/lgopis.png" alt="Ipsepay" class="h-8 w-auto"/>
        </a>
        <div class="h-8 w-px bg-gradient-to-b from-gray-200 to-transparent hidden lg:block"></div>
        <p class="text-gray-600 text-sm max-w-md">
          Revolutionizing payment solutions with enterprise-grade security and seamless integration.
        </p>
      </div>
      
      <div class="social-links-container">
        {#each socialLinks as { icon, url, label, color, followers, description }}
          <a 
            href={url}
            class="social-link group"
            aria-label={label}
          >
            <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 
                        transition-all duration-300 rounded-xl"
                 style="background: linear-gradient(45deg, {color}20, {color}10)">
            </div>
            <i class="fab fa-{icon} transition-all duration-300 group-hover:scale-110"></i>
            <div class="social-tooltip">
              <div class="flex items-center gap-2 mb-1">
                <i class="fas fa-users text-xs text-[{color}]"></i>
                <span class="font-medium">{followers}</span>
              </div>
              <span class="text-xs opacity-80">{description}</span>
            </div>
          </a>
        {/each}
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
      <!-- Contact Us Section with Enhanced Design -->
      <div class="lg:col-span-5">
        <div class="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 border border-gray-100/80 
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center gap-3 mb-6">
            <span class="flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#605bff] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#605bff]"></span>
            </span>
            <span class="text-sm font-medium text-[#605bff]">Contact Us</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Get in Touch
          </h3>
          <p class="text-gray-600 text-sm mb-4">
            Have questions? We're here to help with your payment solutions.
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-3 group">
              <div class="w-10 h-10 rounded-xl bg-[#605bff]/10 flex items-center justify-center 
                          group-hover:bg-[#605bff] transition-colors duration-200">
                <i class="fas fa-envelope text-[#605bff] group-hover:text-white transition-colors duration-200"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Email Us</p>
                <a href="mailto:support@ipsepay.com" 
                   class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200">
                  support@ipsepay.com
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-3 group">
              <div class="w-10 h-10 rounded-xl bg-[#605bff]/10 flex items-center justify-center 
                          group-hover:bg-[#605bff] transition-colors duration-200">
                <i class="fas fa-phone text-[#605bff] group-hover:text-white transition-colors duration-200"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Call Us</p>
                <a href="tel:+1234567890" 
                   class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-3 group">
              <div class="w-10 h-10 rounded-xl bg-[#605bff]/10 flex items-center justify-center 
                          group-hover:bg-[#605bff] transition-colors duration-200">
                <i class="fas fa-map-marker-alt text-[#605bff] group-hover:text-white transition-colors duration-200"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Visit Us</p>
                <p class="text-sm text-gray-600">
                  123 Payment Street, Financial District
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Links Grid with Enhanced Design -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {#each Object.entries(footerLinks) as [category, links]}
          <div class="space-y-6">
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider 
                       relative inline-block after:content-[''] after:absolute after:-bottom-2 
                       after:left-0 after:w-8 after:h-0.5 after:bg-[#605bff]/30">
              {category}
            </h3>
            <ul class="space-y-3">
              {#each links as { label, href }}
                <li>
                  <a 
                    {href}
                    class="footer-link group"
                    class:active={routeTd === href}
                  >
                    {label}
                    <svg class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom Bar with Enhanced Design -->
    <div class="border-t border-gray-100/80 pt-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
        <p class="text-sm text-gray-600 flex items-center gap-2 order-2 lg:order-1">
          © {new Date().getFullYear()} 
          <img src="/images/lgopis.png" alt="Ipsepay" class="h-5 w-auto"/> 
          All rights reserved.
        </p>

        <!-- Payment Methods with Enhanced Design -->
        <div class="flex flex-wrap justify-center gap-4 order-1 lg:order-2">
          {#each paymentMethods as { name, icon }}
            <div class="payment-method group">
              <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white 
                          opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
              <img 
                src={`/images/brands/${icon}.png`} 
                alt={name}
                class="relative h-6 w-auto transition-all duration-300 group-hover:scale-110"
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .social-link {
    @apply relative flex items-center justify-center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.75rem;
    background: linear-gradient(45deg, #f8fafc, #ffffff);
    box-shadow: 
      0 2px 8px rgba(0, 0, 0, 0.04),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  .social-tooltip {
    @apply absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-xl
           shadow-lg opacity-0 invisible scale-95 flex flex-col items-center min-w-[120px]
           transition-all duration-200;
  }

  .social-link:hover .social-tooltip {
    @apply opacity-100 visible scale-100 -translate-y-2;
  }

  .footer-link {
    @apply flex items-center gap-2 text-sm text-gray-600 hover:text-[#605bff] transition-all duration-200;
  }

  .payment-method {
    @apply bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300
           hover:-translate-y-1;
    transform: perspective(1000px) rotateX(0deg);
  }

  .payment-method:hover {
    transform: perspective(1000px) rotateX(10deg);
  }

  .social-links-container {
    @apply flex items-center gap-4;
  }

  .social-links-container:hover .social-link:not(:hover) {
    @apply opacity-50 scale-95 saturate-50;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float 6s ease-in-out infinite;
    animation-delay: -3s;
  }

  @keyframes float-slow {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg) scale(1); 
    }
    25% { 
      transform: translate(2%, 2%) rotate(1deg) scale(1.01); 
    }
    50% { 
      transform: translate(-1%, 3%) rotate(-1deg) scale(0.99); 
    }
    75% { 
      transform: translate(-2%, -1%) rotate(0.5deg) scale(1.01); 
    }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    .social-links-container {
      @apply flex-wrap justify-center;
    }

    .social-link {
      width: 2.25rem;
      height: 2.25rem;
    }

    .social-tooltip {
      display: none;
    }

    :global(.grid-cols-2) {
      @apply gap-4;
    }

    :global(.mb-16) {
      @apply mb-8;
    }

    :global(.p-6) {
      @apply p-4;
    }

    :global(.gap-8) {
      @apply gap-4;
    }

    :global(.text-2xl) {
      @apply text-xl;
    }

    :global(.w-12.h-12) {
      @apply w-10 h-10;
    }

    :global(.flex.items-center.gap-8) {
      @apply flex-col gap-4 text-center w-full;
    }

    :global(.h-8.w-auto) {
      @apply h-6;
    }

    :global(.text-sm.max-w-md) {
      @apply text-center w-full max-w-xs;
    }

    :global(.h-8.w-px.bg-gradient-to-b) {
      @apply hidden;
    }
  }

  @media (hover: none) {
    .payment-method:hover {
      transform: none;
    }

    .social-links-container:hover .social-link:not(:hover) {
      @apply opacity-100 scale-100 saturate-100;
    }
  }
</style>
