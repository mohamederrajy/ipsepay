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
</script>

<!-- =========== Navbar Start =========== -->
<header id="navbar" class="{isDark ? 'dark' : 'light'} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
  <div class="container">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0 mr-8">
        <img src="/images/lgopis.png" class="h-8 logo-dark" alt="Logo Dark" />
        <img src="/images/lgopis.png" class="h-8 logo-light" alt="Logo Light" />
      </a>

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

                    <a href="/payments/in-person" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v4m-6-4v4m0-11v-4m6 4v-4m-6 4h6m-6 6h6"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">In-person payments</span>
                        <span class="text-sm text-gray-600">Accept payments with terminals and devices</span>
                      </div>
                    </a>

                    <a href="/payments/cross-channel" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Cross channel</span>
                        <span class="text-sm text-gray-600">Build journeys across sales channels</span>
                      </div>
                    </a>

                    <a href="/payments/platforms" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Adyen for Platforms</span>
                        <span class="text-sm text-gray-600">Embed payments into your platform or marketplace</span>
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

                    <a href="/financial/capital" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Capital</span>
                        <span class="text-sm text-gray-600">Enable fast business financing for your users</span>
                      </div>
                    </a>

                    <a href="/financial/issuing" class="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg class="w-5 h-5 text-[#605bff] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                      <div>
                        <span class="text-[#605bff] font-medium block group-hover:text-[#605bff]/80">Issuing</span>
                        <span class="text-sm text-gray-600">Create physical and virtual cards</span>
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

          <!-- Onboarding fast -->
          <li class="nav-item">
            <button class="nav-link hover:text-[#605bff] transition-colors flex items-center gap-1.5"
                    on:click={() => navigateToSection('Onboarding')}>
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="whitespace-nowrap">Onboarding fast</span>
            </button>
          </li>

          <!-- Online Payment -->
          <li class="nav-item hs-dropdown relative [--trigger:hover]">
            <a href="javascript:void(0);" 
               class="nav-link after:absolute hover:after:-bottom-10 after:inset-0 hs-dropdown-toggle group" 
               data-fc-type="dropdown">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span class="whitespace-nowrap">Online Payment</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </a>

            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 transition-[margin,opacity] duration-300 hidden mt-4 hs-dropdown-open:translate-y-0 translate-y-3 origin-left bg-white rounded-lg shadow-lg border p-4 w-56">
              <!-- Keep existing dropdown items with enhanced styling -->
              {#each ['Payment Methods', 'Advantages', 'Easy Integration', 'Pricing', 'Internationalisation', 'Customer Feedback'] as item}
                <div class="nav-item">
                  <button class="nav-link w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                          on:click={() => navigateToSection(item.toLowerCase().replace(' ', '-'))}>
                    {item}
                  </button>
                  {#if item !== 'Customer Feedback'}
                    <hr class="my-2 border-gray-100" />
                  {/if}
                </div>
              {/each}
            </div>
          </li>

          <!-- Company -->
          <li class="nav-item hs-dropdown relative [--trigger:hover]">
            <a href="javascript:void(0);" 
               class="nav-link after:absolute hover:after:-bottom-10 after:inset-0 hs-dropdown-toggle group" 
               data-fc-type="dropdown">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span class="whitespace-nowrap">Company</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </a>

            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 transition-[margin,opacity] duration-300 hidden mt-4 hs-dropdown-open:translate-y-0 translate-y-3 origin-left bg-white rounded-lg shadow-lg border p-4 w-56">
              <div class="nav-item">
                <a class="nav-link block px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors" 
                   href="/contact" 
                   class:active={routeTd === "/contact"}>
                  Contact us
                </a>
                <hr class="-mx-2 my-2" />
              </div>
              <!-- ... other company menu items ... -->
            </div>
          </li>

       
        </ul>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden lg:flex items-center gap-4 ml-6">
        <!-- Login Button -->
        <a href="/account/login" 
           class="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-[#605bff] hover:text-white border-2 border-[#605bff] rounded-lg hover:bg-[#605bff] transition-all duration-200 ease-in-out group"
           class:active={routeTd === "/account/login"}>
          <svg class="w-4 h-4 mr-2 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
          </svg>
          Login
        </a>

        <!-- Get Started Button -->
        <a href="/account/signup" 
           class="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-[#605bff] rounded-lg shadow-sm hover:bg-[#605bff]/90 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
           class:active={routeTd === "/account/signup"}>
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Get Started
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="lg:hidden">
        <button type="button" 
                class="p-2 text-gray-500 hover:text-gray-600"
                data-fc-target="mobileMenu" 
                data-hs-overlay="#mobileMenu">
          <i class="fa-solid fa-bars text-2xl"></i>
        </button>
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

                  <a href="/payments/in-person" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v4m-6-4v4m0-11v-4m6 4v-4m-6 4h6m-6 6h6"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">In-person payments</span>
                      <span class="text-xs text-gray-600">Accept payments with terminals</span>
                    </div>
                  </a>

                  <a href="/payments/cross-channel" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Cross channel</span>
                      <span class="text-xs text-gray-600">Build journeys across channels</span>
                    </div>
                  </a>

                  <a href="/payments/platforms" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Adyen for Platforms</span>
                      <span class="text-xs text-gray-600">Embed payments into your platform</span>
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

                  <a href="/financial/capital" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Capital</span>
                      <span class="text-xs text-gray-600">Business financing</span>
                    </div>
                  </a>

                  <a href="/financial/issuing" class="flex items-start p-2 rounded-lg hover:bg-white transition-colors">
                    <svg class="w-4 h-4 text-[#605bff] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                    <div>
                      <span class="text-[#605bff] font-medium block">Issuing</span>
                      <span class="text-xs text-gray-600">Create cards</span>
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

        <!-- Onboarding fast -->
        <li class="nav-item">
          <button class="nav-link w-full flex items-center gap-1.5 p-2 rounded-lg hover:bg-gray-50"
                  on:click={() => navigateToSection('Onboarding')}>
            <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="whitespace-nowrap">Onboarding fast</span>
          </button>
        </li>

        <!-- Online Payment Dropdown -->
        <li class="nav-item">
          <a href="javascript:void(0)" 
             data-fc-type="collapse" 
             class="nav-link flex items-center justify-between p-2 rounded-lg hover:bg-gray-50" 
             id="mobile-payments" 
             data-hs-collapse="#mobile-payments-menu">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="whitespace-nowrap">Online Payment</span>
            </span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 hs-collapse-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>

          <div id="mobile-payments-menu" class="hs-collapse hidden overflow-hidden transition-[height] duration-300">
            <div class="p-4 bg-gray-50 rounded-lg mt-2 space-y-3">
              {#each ['Payment Methods', 'Advantages', 'Easy Integration', 'Pricing', 'Internationalisation', 'Customer Feedback'] as item}
                <button class="w-full text-left p-2 rounded-lg hover:bg-white transition-colors text-[#605bff]"
                        on:click={() => navigateToSection(item.toLowerCase().replace(' ', '-'))}>
                  {item}
                </button>
              {/each}
            </div>
          </div>
        </li>

        <!-- Company Dropdown -->
        <li class="nav-item">
          <a href="javascript:void(0)" 
             data-fc-type="collapse" 
             class="nav-link flex items-center justify-between p-2 rounded-lg hover:bg-gray-50" 
             id="mobile-company" 
             data-hs-collapse="#mobile-company-menu">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span class="whitespace-nowrap">Company</span>
            </span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 hs-collapse-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>

          <div id="mobile-company-menu" class="hs-collapse hidden overflow-hidden transition-[height] duration-300">
            <div class="p-4 bg-gray-50 rounded-lg mt-2 space-y-3">
              <a href="/contact" class="block p-2 rounded-lg hover:bg-white transition-colors text-[#605bff]">
                Contact us
              </a>
              <a href="/company" class="block p-2 rounded-lg hover:bg-white transition-colors text-[#605bff]">
                About Us
              </a>
              <button class="w-full text-left p-2 rounded-lg hover:bg-white transition-colors text-[#605bff]"
                      on:click={() => navigateToSection('faqs')}>
                FAQs
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu Footer Buttons -->
    <div class="p-6 space-y-4">
      <!-- Get Started Button -->
      <a href="/account/signup" 
         class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#605bff] rounded-lg shadow-sm hover:bg-[#605bff]/90 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
         class:active={routeTd === "/account/signup"}>
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        Get Started
      </a>

      <!-- Login Button -->
      <a href="/account/login" 
         class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-[#605bff] border-2 border-[#605bff] rounded-lg hover:text-white hover:bg-[#605bff] transition-all duration-200 ease-in-out group"
         class:active={routeTd === "/account/login"}>
        <svg class="w-4 h-4 mr-2 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
        </svg>
        Login
      </a>
    </div>
  </div>
</div>
<!-- =========== Mobile Menu End =========== -->

<style>
  /* Enhanced styling */
  .nav-sticky {
    @apply bg-white shadow-sm;
  }

  .nav-link {
    @apply relative px-3 py-2 text-gray-600 hover:text-[#605bff] transition-colors;
  }

  .nav-link.active {
    @apply text-[#605bff];
  }

  /* Dropdown animations */
  .hs-dropdown-menu {
    @apply transform opacity-0 transition-all duration-200;
  }

  .hs-dropdown:hover .hs-dropdown-menu {
    @apply opacity-100 translate-y-0;
  }
</style>
