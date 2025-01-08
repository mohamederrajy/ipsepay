<script lang="ts">
  import {onMount} from "svelte";
  import {onNavigate} from "$app/navigation";
  import {page} from "$app/stores";
  import { goto } from '$app/navigation';

  $: routeTd = $page.route.id;

  export let isDark = false;

  // Topbar Sticky
  function initStickyNav() {
    // Sticky Navbar
    function windowScroll() {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    }

    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      windowScroll();
    });
  }

  // Topnav Active Menu
  function initTopnav() {
    // Menu Active
    const pageUrl = window.location.href.split(/[?#]/)[0];
    const navbarLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("#navbar .navbar-nav a"));

    navbarLinks.forEach((link) => {
      if (link.href === pageUrl) {
        link.classList.add("active");

        const parentMenu = link.parentElement?.parentElement?.parentElement;
        if (parentMenu?.classList.contains("nav-item")) {
          const dropdownElement = parentMenu.querySelector('[data-fc-type="dropdown"]');
          dropdownElement?.classList.add("active");
        }

        const parentParentMenu = link.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
        if (parentParentMenu?.classList.contains("nav-item")) {
          const dropdownElement = parentParentMenu.querySelector('[data-fc-type="dropdown"]');
          dropdownElement?.classList.add("active");
        }
      }
    });
  }

  // Mobile Menu Active
  function initMobileNav() {
    const pageUrl = window.location.href.split(/[?#]/)[0];
    const navbarLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("#mobileMenu .navbar-nav a"));

    navbarLinks.forEach((link) => {
      if (link.href === pageUrl) {
        link.classList.add("active");
        const parentMenu = link.parentElement?.parentElement?.parentElement;
        const parentCollapse = link.parentElement?.parentElement;
        if (parentMenu?.classList.contains("nav-item")) {
          const collapseElement = parentMenu.querySelector('[data-fc-type="collapse"]');
          collapseElement?.classList.add("active");
        }
      }
    });
  }

  async function navigateToSection(sectionId) {
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
      await goto('/');
    }
    // Then scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if it's open
      isOpen = false;
    }
  }

  let isOpen = false;

  onMount(() => {
    initStickyNav();
    initTopnav();
    initMobileNav();
  });

  onNavigate(() => {
    const backdrop = document.querySelector(".hs-overlay-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  });

  // Add to your existing script
  let isSticky = false;
  
  onMount(() => {
    const handleScroll = () => {
      isSticky = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- =========== Navbar Start =========== -->
<header id="navbar" class="{isDark ? 'dark' : 'light'} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
  <div class="container mx-auto px-6">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0">
        <img src="/images/lgopis.png" class="h-8 logo-dark" alt="Logo Dark" />
        <img src="/images/lgopis.png" class="h-8 logo-light" alt="Logo Light" />
      </a>

      <!-- Mobile Menu Toggle -->
      <button 
        type="button"
        class="lg:hidden p-2 -mr-2"
        aria-label="Toggle menu"
        data-fc-target="mobileMenu" 
        data-hs-overlay="#mobileMenu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden lg:block">
        <ul class="navbar-nav flex gap-x-4 items-center">
          <!-- Products Dropdown -->
          <li class="nav-item hs-dropdown relative [--trigger:hover]">
            <a href="javascript:void(0);" 
               class="nav-link after:absolute hover:after:-bottom-10 after:inset-0 hs-dropdown-toggle group" 
               data-fc-type="dropdown">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
                <span class="whitespace-nowrap">Products</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </a>

            <!-- Products Mega Menu -->
            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 transition-all duration-300 hidden mt-2
                        hs-dropdown-open:translate-y-0 translate-y-3 origin-left bg-white rounded-xl shadow-xl border p-12">
              <div class="grid grid-cols-4 gap-16">
                <!-- Left Column - Products Intro -->
                <div class="bg-gradient-to-br from-[#605bff]/10 to-transparent p-6 rounded-lg">
                  <h2 class="text-[1.9rem] leading-tight mb-4 text-[#32325d] font-bold">
                    Products
                  </h2>
                  <p class="text-l text-gray-600">A single platform to accept payments, protect revenue, and control your finances.</p>
                </div>

                <!-- Payments Column -->
                <div>
                  <h2 class="text-xl font-semibold mb-6 text-[#32325d] flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Payments
                  </h2>
                  <div class="space-y-6">
                    <a href="/payments/online" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Online</span>
                        <span class="text-sm text-gray-600">Accept payments on your website and in-app</span>
                      </div>
                    </a>

                    

                    <a href="/payments/payments-link" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Payments Links</span>
                        <span class="text-sm text-gray-600">Accept payments on any channel</span>
                      </div>
                    </a>

                    <a href="/payments/checkout" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Checkout</span>
                        <span class="text-sm text-gray-600">Streamline checkout with integrated payments</span>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Enhancements Column -->
                <div>
                  <h2 class="text-xl font-semibold mb-6 text-[#32325d] flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Enhancements
                  </h2>
                  <div class="space-y-6">
                    <a href="/enhancements/authentication" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Authentication</span>
                        <span class="text-sm text-gray-600">Improve the paying experience with smart authentication</span>
                      </div>
                    </a>

                    <a href="/enhancements/risk" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Risk management</span>
                        <span class="text-sm text-gray-600">Detect, prevent, and respond to fraud</span>
                      </div>
                    </a>

                    <a href="/enhancements/revenue" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Revenue optimization</span>
                        <span class="text-sm text-gray-600">Grow your revenue with the highest authorization rates</span>
                      </div>
                    </a>

                    <a href="/enhancements/insights" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Insights</span>
                        <span class="text-sm text-gray-600">Understand customer behavior to drive growth</span>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Financial products Column -->
                <div>
                  <h2 class="text-xl font-semibold mb-6 text-[#32325d] flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Financial products
                  </h2>
                  <div class="space-y-6">
                    <a href="/financial/accounts" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Accounts</span>
                        <span class="text-sm text-gray-600">Offer business accounts to users on your platform</span>
                      </div>
                    </a>

                    

                    <a href="/financial/payouts" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Payouts</span>
                        <span class="text-sm text-gray-600">Send global payouts in real time</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- Businesses we serve Dropdown -->
          <li class="nav-item hs-dropdown relative [--trigger:hover]">
            <a href="javascript:void(0);" 
               class="nav-link after:absolute hover:after:-bottom-10 after:inset-0 hs-dropdown-toggle group" 
               data-fc-type="dropdown">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span class="whitespace-nowrap">Businesses we serve</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </a>

            <!-- Existing Businesses we serve mega menu content -->
            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 transition-all duration-300 hidden mt-2
                        hs-dropdown-open:translate-y-0 translate-y-3 origin-left bg-white rounded-xl shadow-xl border p-12">
              <div class="grid grid-cols-4 gap-16">
                <!-- Left Column -->
                <div class="bg-gradient-to-br from-[#605bff]/10 to-transparent p-6 rounded-lg">
                  <h2 class="text-[1.9rem] leading-tight mb-4 text-[#32325d] font-bold">
                    Businesses we serve
                  </h2>
                  <p class="text-l text-gray-600">Explore how our platform can unlock growth for your business type.</p>
                </div>

                <!-- Middle Column -->
                <div>
                  <h2 class="text-xl font-semibold mb-6 text-[#32325d] flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    </svg>
                    Types
                  </h2>
                  <div class="space-y-6">
                    <!-- Digital Businesses -->
                    <a href="/industries/digital-businesses" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Digital businesses
                        </span>
                        <span class="text-sm text-gray-600">Software, social, gaming, digital media</span>
                      </div>
                    </a>

                    <!-- Mobility -->
                    <a href="/industries/mobility" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Mobility
                        </span>
                        <span class="text-sm text-gray-600">Transportation of goods and people</span>
                      </div>
                    </a>

                    <!-- Retail -->
                    <a href="/industries/retail" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Retail
                        </span>
                        <span class="text-sm text-gray-600">Jewelry, apparel, arts, cosmetics, electronics</span>
                      </div>
                    </a>

                    <!-- Platforms -->
                    <a href="/industries/platform-payments" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Platforms & Marketplaces
                        </span>
                        <span class="text-sm text-gray-600">Connecting buyers and sellers online</span>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Middle-Right Column -->
                <div class="mt-[52px]">
                  <div class="space-y-6">
                    <!-- Food & Beverage -->
                    <a href="/industries/food-beverage" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.9A3.5 3.5 0 0018.5 14h-13A3.5 3.5 0 002 15.9m18 0l-1 3.8a2 2 0 01-2 1.2H7a2 2 0 01-2-1.2l-1-3.8m18 0v-2a2 2 0 00-2-2h-3.5M2 15.9v-2a2 2 0 012-2h3.5"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Food & beverage
                        </span>
                        <span class="text-sm text-gray-600">Quick service restaurants, restaurant chains, bars</span>
                      </div>
                    </a>

                    <!-- Hospitality -->
                    <a href="/industries/hospitality" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Hospitality
                        </span>
                        <span class="text-sm text-gray-600">Hotels, spas, venues, leisure parks, fitness</span>
                      </div>
                    </a>

                    <!-- Subscription -->
                    <a href="/industries/subscription" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          Subscription
                        </span>
                        <span class="text-sm text-gray-600">Streaming, subscription boxes, memberships</span>
                      </div>
                    </a>

                    <!-- SaaS Platforms -->
                    <a href="/industries/saas-platforms" 
                       class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                          SaaS Platforms
                        </span>
                        <span class="text-sm text-gray-600">Cloud-based software services</span>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Right Column (Customers) -->
                <div class="bg-gray-50 -m-12 p-12 rounded-r-xl">
                  <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Customers
                  </h2>
                  <div class="space-y-6">
                    <a href="/industries/customers" 
                       class="group flex items-start p-3 rounded-lg hover:bg-white transition-colors">
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">
                          Brands we work with
                        </span>
                        <span class="text-sm text-gray-600">
                          See which leading brands are using our products
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- About Us -->
          <li class="nav-item">
            <a href="/about" class="nav-link flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="whitespace-nowrap">About Us</span>
            </a>
          </li>

          <!-- Contact Us -->
          <li class="nav-item">
            <a href="/contact" class="nav-link flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="whitespace-nowrap">Contact Us</span>
            </a>
          </li>

          <!-- Pricing -->
          <li class="nav-item">
            <a href="/pricing" class="nav-link flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="whitespace-nowrap">Pricing</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Desktop CTA Buttons -->
      <div class="hidden lg:flex items-center gap-4">
        <!-- Login Button -->
        <a href="/account/login" 
           class="inline-flex items-center justify-center gap-2 
                  px-6 py-2.5 text-sm font-medium
                  text-[#605bff] hover:text-white
                  border border-[#605bff] hover:border-transparent
                  rounded-xl 
                  shadow-[0_4px_12px_-6px_rgba(96,91,255,0.2)]
                  hover:shadow-[0_12px_20px_-4px_rgba(96,91,255,0.3)]
                  transform hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-300 ease-out
                  relative overflow-hidden group">
          <span class="relative z-10 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
            Login
          </span>
          <div class="absolute inset-0 bg-[#605bff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
        </a>

        <!-- Get Started Button -->
        <a href="/account/signup" 
           class="inline-flex items-center justify-center gap-2
                  px-6 py-2.5 text-sm font-medium text-white
                  bg-gradient-to-r from-[#605bff] to-[#4f4cce] 
                  hover:from-[#4f4cce] hover:to-[#605bff]
                  rounded-xl
                  shadow-[0_8px_16px_-6px_rgba(96,91,255,0.3)]
                  hover:shadow-[0_20px_40px_-8px_rgba(96,91,255,0.5)]
                  transform hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-300 ease-out
                  group">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM9 19c-4.3 0-6 1.8-6 2.5V22h12v-.5c0-.7-1.7-2.5-6-2.5zm6-11V5h4m0 0l-2-2m2 2l-2 2"/>
            </svg>
            Get Started
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>
    </nav>
  </div>
</header>
<!-- =========== Navbar End =========== -->

<!-- =========== Mobile Menu Start (Offcanvas) =========== -->
<div id="mobileMenu" class="hs-overlay hs-overlay-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-[60] bg-white border-s hidden right-0">
  <div class="flex flex-col h-full divide-y-2 divide-gray-200">
    <!-- Mobile Menu Topbar Logo (Header) -->
    <div class="p-6 flex items-center justify-between">
      <a href="/">
        <img src="/images/lgopis.png" class="h-8" alt="Logo" />
      </a>

      <button data-hs-overlay="#mobileMenu" class="flex items-center px-2">
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>
    </div>

    <!-- Mobile Menu Link List -->
    <div class="p-6 overflow-scroll h-full">
      <ul class="navbar-nav flex flex-col gap-4" data-fc-type="accordion">
        <!-- Products Dropdown -->
        <li class="nav-item">
          <a href="javascript:void(0)" 
             data-fc-type="collapse" 
             class="nav-link flex items-center justify-between p-2 rounded-lg hover:bg-gray-50" 
             id="mobile-products" 
             data-hs-collapse="#mobile-products-menu">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
              <span class="whitespace-nowrap">Products</span>
            </span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 hs-collapse-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>

          <div id="mobile-products-menu" class="hs-collapse hidden overflow-hidden transition-[height] duration-300">
            <div class="p-4 bg-gray-50 rounded-lg mt-2 space-y-6">
              <!-- Products Intro -->
              <div class="bg-gradient-to-br from-[#605bff]/10 to-transparent p-4 rounded-lg">
                <h2 class="text-lg font-bold text-[#32325d] mb-2">Products</h2>
                <p class="text-sm text-gray-600">A single platform to accept payments, protect revenue, and control your finances.</p>
              </div>

              <!-- Payments Section -->
              <div>
                <h3 class="text-sm font-semibold text-[#32325d] mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  Payments
                </h3>
                <div class="space-y-3">
                  <a href="/payments/online" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Online</span>
                      <span class="text-xs text-gray-600">Accept payments on your website</span>
                    </div>
                  </a>

                 

                  <a href="/payments/cross-channel" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Payments Links</span>
                      <span class="text-xs text-gray-600">Accept payments on any channel</span>
                    </div>
                  </a>

                  <a href="/payments/platforms" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Checkout</span>
                      <span class="text-xs text-gray-600">Streamline checkout with integrated payments</span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Enhancements Section -->
              <div>
                <h3 class="text-sm font-semibold text-[#32325d] mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  Enhancements
                </h3>
                <div class="space-y-3">
                  <a href="/enhancements/authentication" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Authentication</span>
                      <span class="text-xs text-gray-600">Smart authentication</span>
                    </div>
                  </a>

                  <a href="/enhancements/risk" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Risk management</span>
                      <span class="text-xs text-gray-600">Detect and prevent fraud</span>
                    </div>
                  </a>

                  <a href="/enhancements/revenue" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Revenue optimization</span>
                      <span class="text-xs text-gray-600">Grow your revenue</span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Financial Products Section -->
              <div>
                <h3 class="text-sm font-semibold text-[#32325d] mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Financial Products
                </h3>
                <div class="space-y-3">
                  <a href="/financial/accounts" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Accounts</span>
                      <span class="text-xs text-gray-600">Business accounts</span>
                    </div>
                  </a>

                 

                 

                  <a href="/financial/payouts" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Payouts</span>
                      <span class="text-xs text-gray-600">Send global payouts in real time</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Businesses we serve Dropdown -->
        <li class="nav-item">
          <a href="javascript:void(0)" 
             data-fc-type="collapse" 
             class="nav-link flex items-center justify-between p-2 rounded-lg hover:bg-gray-50" 
             id="mobile-businesses" 
             data-hs-collapse="#mobile-businesses-menu">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span class="whitespace-nowrap">Businesses we serve</span>
            </span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 hs-collapse-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>

          <div id="mobile-businesses-menu" class="hs-collapse hidden overflow-hidden transition-[height] duration-300">
            <div class="p-4 bg-gray-50 rounded-lg mt-2 space-y-6">
              <!-- Intro Section -->
              <div class="bg-gradient-to-br from-[#605bff]/10 to-transparent p-4 rounded-lg">
                <h2 class="text-lg font-bold text-[#32325d] mb-2">Businesses we serve</h2>
                <p class="text-sm text-gray-600">Explore how our platform can unlock growth for your business type.</p>
              </div>

              <!-- Business Types -->
              <div>
                <h3 class="text-sm font-semibold text-[#32325d] mb-3">Types</h3>
                <div class="space-y-3">
                  <!-- Digital Businesses -->
                  <a href="/industries/digital-businesses" 
                     class="group flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                        Digital businesses
                      </span>
                      <span class="text-xs text-gray-600">Software, social, gaming, digital media</span>
                    </div>
                  </a>

                  <!-- Mobility -->
                  <a href="/industries/mobility" 
                     class="group flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                        Mobility
                      </span>
                      <span class="text-xs text-gray-600">Transportation of goods and people</span>
                    </div>
                  </a>

                  <!-- Retail -->
                  <a href="/industries/retail" 
                     class="group flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                        Retail
                      </span>
                      <span class="text-xs text-gray-600">Jewelry, apparel, arts, cosmetics</span>
                    </div>
                  </a>

                  <!-- Platforms -->
                  <a href="/industries/platform-payments" 
                     class="group flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                        Platforms & Marketplaces
                      </span>
                      <span class="text-xs text-gray-600">Connecting buyers and sellers</span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Additional Types -->
              <div class="space-y-3">
                <a href="/industries/food-beverage" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                  <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.9A3.5 3.5 0 0018.5 14h-13A3.5 3.5 0 002 15.9m18 0l-1 3.8a2 2 0 01-2 1.2H7a2 2 0 01-2-1.2l-1-3.8m18 0v-2a2 2 0 00-2-2h-3.5M2 15.9v-2a2 2 0 012-2h3.5"/>
                  </svg>
                  <div>
                    <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                      Food & beverage
                    </span>
                    <span class="text-xs text-gray-600">Restaurants, bars, delivery</span>
                  </div>
                </a>

                <a href="/industries/hospitality" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                  <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <div>
                    <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                      Hospitality
                    </span>
                    <span class="text-xs text-gray-600">Hotels, spas, venues, leisure</span>
                  </div>
                </a>

                <a href="/industries/subscription" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                  <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <div>
                    <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                      Subscription
                    </span>
                    <span class="text-xs text-gray-600">Streaming, subscription boxes, memberships</span>
                  </div>
                </a>

                <a href="/industries/saas" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                  <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                  <div>
                    <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80 transition-colors">
                      SaaS Platforms
                    </span>
                    <span class="text-xs text-gray-600">Cloud-based software services</span>
                  </div>
                </a>
              </div>

              <!-- Customers Section -->
              <div class="bg-white p-4 rounded-lg">
                <h3 class="text-sm font-semibold text-[#32325d] mb-3 flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  Customers
                </h3>
                <a href="/industries/customers" class="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">
                      Brands we work with
                    </span>
                    <span class="text-xs text-gray-600">
                      See leading brands using our products
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </li>

        <!-- About Us -->
        <li class="nav-item">
          <a href="/about" class="nav-link flex items-center gap-1.5 p-2 rounded-lg hover:bg-gray-50">
            <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="whitespace-nowrap">About Us</span>
          </a>
        </li>

        <!-- Contact Us -->
        <li class="nav-item">
          <a href="/contact" class="nav-link flex items-center gap-1.5 p-2 rounded-lg hover:bg-gray-50">
            <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="whitespace-nowrap">Contact Us</span>
          </a>
        </li>

        <!-- Pricing -->
        <li class="nav-item">
          <a href="/pricing" class="nav-link flex items-center gap-1.5 p-2 rounded-lg hover:bg-gray-50">
            <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="whitespace-nowrap">Pricing</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu Footer Buttons -->
    <div class="p-6 space-y-4">
      <!-- Get Started Button -->
      <a href="/account/signup" 
         class="w-full inline-flex items-center justify-center gap-2
                px-6 py-3 text-sm font-medium text-white
                bg-gradient-to-r from-[#605bff] to-[#4f4cce] 
                hover:from-[#4f4cce] hover:to-[#605bff]
                rounded-xl
                shadow-[0_8px_16px_-6px_rgba(96,91,255,0.3)]
                hover:shadow-[0_20px_40px_-8px_rgba(96,91,255,0.5)]
                transform hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-300 ease-out
                group">
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM9 19c-4.3 0-6 1.8-6 2.5V22h12v-.5c0-.7-1.7-2.5-6-2.5zm6-11V5h4m0 0l-2-2m2 2l-2 2"/>
          </svg>
          Get Started
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </a>

      <!-- Login Button -->
      <a href="/account/login" 
         class="w-full inline-flex items-center justify-center gap-2
                px-6 py-3 text-sm font-medium
                text-[#605bff] hover:text-white
                border border-[#605bff] hover:border-transparent
                rounded-xl
                shadow-[0_4px_12px_-6px_rgba(96,91,255,0.2)]
                hover:shadow-[0_12px_20px_-4px_rgba(96,91,255,0.3)]
                transform hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-300 ease-out
                relative overflow-hidden group">
        <span class="relative z-10 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
          </svg>
          Login
        </span>
        <div class="absolute inset-0 bg-[#605bff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      </a>
    </div>
  </div>
</div>
<!-- =========== Mobile Menu End =========== -->

<style>
  /* Modern Navbar Styling */
  .nav-container {
    @apply fixed top-0 inset-x-0 z-40 transition-all duration-300;
  }

  .nav-sticky {
    @apply backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 shadow-lg;
    animation: slideDown 0.4s ease-out;
  }

  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Modern Nav Items */
  .nav-item {
    @apply relative;
  }

  .nav-link {
    @apply flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300
           hover:text-[#605bff] dark:hover:text-[#605bff] transition-all duration-200
           relative before:absolute before:inset-0 before:bg-[#605bff]/5 
           before:rounded-lg before:scale-90 before:opacity-0 hover:before:scale-100 
           hover:before:opacity-100 before:transition-all before:duration-200;
  }

  .nav-link.active {
    @apply text-[#605bff] before:opacity-100 before:scale-100;
  }

  /* Modern Dropdowns */
  .dropdown-menu {
    @apply absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white/95 dark:bg-gray-800/95
           shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] backdrop-blur-xl
           transform opacity-0 -translate-y-2 pointer-events-none scale-95
           transition-all duration-200 ease-out;
  }

  .nav-item:hover .dropdown-menu {
    @apply opacity-100 translate-y-0 pointer-events-auto scale-100;
  }

  .dropdown-item {
    @apply flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300
           hover:bg-[#605bff]/5 hover:text-[#605bff] rounded-lg mx-2 my-1
           transition-all duration-200 relative overflow-hidden;
  }

  /* Modern Mega Menu */
  .mega-menu {
    @apply absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl
           bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)]
           backdrop-blur-xl transform opacity-0 -translate-y-2 pointer-events-none scale-95
           transition-all duration-200 ease-out p-8;
  }

  .nav-item:hover .mega-menu {
    @apply opacity-100 translate-y-0 pointer-events-auto scale-100;
  }

  /* Modern Buttons */
  .btn-primary {
    @apply inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white
           bg-gradient-to-r from-[#605bff] to-[#4f4cce] hover:from-[#4f4cce] hover:to-[#605bff]
           rounded-xl shadow-[0_8px_16px_-6px_rgba(96,91,255,0.2)]
           hover:shadow-[0_12px_20px_-4px_rgba(96,91,255,0.3)]
           transform hover:-translate-y-0.5 active:translate-y-0
           transition-all duration-200;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium
           text-[#605bff] hover:text-white
           bg-[#605bff]/5 hover:bg-[#605bff]
           rounded-xl shadow-[0_4px_12px_-6px_rgba(96,91,255,0.2)]
           hover:shadow-[0_12px_20px_-4px_rgba(96,91,255,0.3)]
           transform hover:-translate-y-0.5 active:translate-y-0
           transition-all duration-200;
  }

  /* Mobile Menu */
  .mobile-menu {
    @apply fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 dark:bg-gray-900/95
           shadow-2xl backdrop-blur-xl transform translate-x-full 
           transition-transform duration-300 ease-out;
  }

  .mobile-menu.open {
    @apply translate-x-0;
  }

  .mobile-nav-item {
    @apply flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300
           hover:bg-[#605bff]/5 hover:text-[#605bff] transition-all duration-200
           relative overflow-hidden rounded-lg mx-2;
  }

  /* Modern Icons Animation */
  .icon-wrapper {
    @apply relative overflow-hidden rounded-lg p-2 transition-colors duration-200
           bg-[#605bff]/5 text-[#605bff] group-hover:bg-[#605bff] group-hover:text-white;
  }

  /* Hover Effects */
  .hover-lift {
    @apply transition-all duration-200 ease-out
           hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0;
  }

  .hover-glow {
    @apply transition-all duration-200
           hover:shadow-[0_0_20px_rgba(96,91,255,0.3)];
  }
</style>
