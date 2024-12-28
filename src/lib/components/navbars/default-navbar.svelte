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
<header id="navbar" class="{isDark ? 'dark' : 'light'} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent  bg-white transition-all py-5">
  <div class="container">
    <nav class="flex items-center">
      <!-- Navbar Brand Logo -->
      <a href="/">
        <img src="/images/lgopis.png" class="h-8 logo-dark" alt="Logo Dark" />
        <img src="/images/lgopis.png" class="h-8 logo-light" alt="Logo Light" />
      </a>

      <!-- Nevigation Menu -->
      <div class="hidden lg:block ms-auto">
        <ul class="navbar-nav flex gap-x-3 items-center justify-center">
          <!-- Home Page Link -->
          <li class="nav-item">
            <a class="nav-link" href="/" class:active={routeTd === "/"}>Home</a>
          </li>
          

        

          <li class="nav-item">
            <button 
              class="nav-link" 
              on:click={() => navigateToSection('risk')}
            >
              High risk merchant
            </button>
          </li>
          <li class="nav-item"> 
            <button 
              class="nav-link" 
              on:click={() => navigateToSection('Onboarding')}
            >
              Onboarding fast
            </button>
          </li>
          


          <li class="nav-item hs-dropdown relative inline-flex [--trigger:hover]">
            <a href="javascript:void(0);" class="nav-link after:absolute hover:after:-bottom-10 after:inset-0 hs-dropdown-toggle" data-fc-type="dropdown">
              Online Payment <i class="fa-solid fa-angle-down ms-2 align-middle"></i>
            </a>

            <div id="innerPageDropdownMenu" class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 transition-[margin,opacity] duration-300 hidden mt-4 hs-dropdown-open:translate-y-0 translate-y-3 origin-center bg-white rounded-lg shadow-lg border p-2 w-48 space-y-1.5">
              <!-- Dropdown item -->
              
           

              <!-- Dropdown item -->
              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('payment-methods')}
                >
                  Payment Methods
                </button>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('advantages')}
                >
                  Advantages
                </button>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('integration')}
                >
                  Easy Integration
                </button>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('Pricing')}
                >
                  Pricing
                </button>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('internationalisation')}
                >
                  Internationalisation
                </button>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('WhatOurClientsSay')}
                >
                Customer Feedback
                </button>
              </div>

            </div>
          </li>

          <li class="nav-item hs-dropdown relative inline-flex [--trigger:hover]">
            <a href="javascript:void(0);" class="nav-link after:absolute hover:after:-bottom-10 after:inset-0 hs-dropdown-toggle" data-fc-type="dropdown">
              Company <i class="fa-solid fa-angle-down ms-2 align-middle"></i>
            </a>

            <div id="innerPageDropdownMenu" class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 transition-[margin,opacity] duration-300 hidden mt-4 hs-dropdown-open:translate-y-0 translate-y-3 origin-center bg-white rounded-lg shadow-lg border p-2 w-48 space-y-1.5">
              <!-- Dropdown item -->
              
           

              <!-- Dropdown item -->
              <div class="nav-item">
                <a class="nav-link" href="/contact" class:active={routeTd === "/contact"}>Contact us</a>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <a class="nav-link" href="/company" class:active={routeTd === "/company"}>About Us</a>
                <hr class="-mx-2 my-2" />
              </div>

              <div class="nav-item">
                <button 
                  class="nav-link" 
                  on:click={() => navigateToSection('faqs')}
                >
                  FAQs
                </button>
              </div>

            </div>
          </li>
          
        </ul>
      </div>

      <!-- Download Button -->
      <div class="hidden lg:flex items-center ms-3">
        <a class="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm" href="/account/signup" class:active={routeTd === "/account/signup"}>Get Started</a>
      </div>
      <div class="hidden lg:flex items-center ms-3">
        <a class=" border border-primary text-primary  text-white px-4 py-2 rounded inline-flex items-center text-sm" href="/account/login" class:active={routeTd === "/account/login"}>Login  </a>
      </div>

      <!-- Moblie Menu Toggle Button (Offcanvas Button) -->
      <div class="lg:hidden flex items-center ms-auto px-2.5">
        <button type="button" data-fc-target="mobileMenu" data-hs-overlay="#mobileMenu">
          <i class="fa-solid fa-bars text-2xl text-gray-500"></i>
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
      <ul class="navbar-nav flex flex-col gap-2" data-fc-type="accordion">
        <!-- Home Page Link -->
         
        <li class="nav-item">
          <a href="/" class="nav-link" class:active={routeTd === "/"}>Home</a>
        </li>

        <li class="nav-item">
          <button 
            class="nav-link" 
            on:click={() => navigateToSection('risk')}
          >
            High risk merchant
          </button>
        </li>
        <li class="nav-item"> 
          <button 
            class="nav-link" 
            on:click={() => navigateToSection('Onboarding')}
          >
            Onboarding fast
          </button>
        </li>
        


        <!-- copmany -->
        <li class="nav-item">
          <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link hs-collapse-toggle" id="hs-basic-collapse-1" data-hs-collapse="#hs-collapse-1">
          Online Payment <i class="fa-solid fa-angle-down ms-auto align-middle transition-all hs-collapse-open:rotate-180"></i>
          </a>

          <ul id="hs-collapse-1" class="hs-collapse hidden overflow-hidden transition-[height] duration-300 space-y-2 w-full" aria-labelledby="hs-basic-collapse-1">
            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('payment-methods')}
              >
                Payment Methods
              </button>
            
            </div>

            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('advantages')}
              >
                Advantages
              </button>
              
            </div>

            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('integration')}
              >
                Easy Integration
              </button>
             
            </div>

            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('Pricing')}
              >
                Pricing
              </button>
              
            </div>

            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('internationalisation')}
              >
                Internationalisation
              </button>
            </div>
            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('WhatOurClientsSay')}
              >
              Customer Feedback
              </button>
            </div>
          </ul>
        </li>

        <li class="nav-item">
          <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link hs-collapse-toggle" id="hs-basic-collapse-2" data-hs-collapse="#hs-collapse-2">
          Company <i class="fa-solid fa-angle-down ms-auto align-middle transition-all hs-collapse-open:rotate-180"></i>
          </a>

          <ul id="hs-collapse-2" class="hs-collapse hidden overflow-hidden transition-[height] duration-300 space-y-2 w-full" aria-labelledby="hs-basic-collapse-2">
            <!-- Dropdown item -->
            <div class="nav-item">
              <a class="nav-link" href="/contact" class:active={routeTd === "/contact"}>Contact us</a>
            </div>

            <div class="nav-item">
              <a class="nav-link" href="/company" class:active={routeTd === "/company"}>About Us</a>
            </div>

            <div class="nav-item">
              <button 
                class="nav-link" 
                on:click={() => navigateToSection('faqs')}
              >
                FAQs
              </button>
            </div>
          </ul>
        </li>

        

        <!-- Portfolio Page -->
        

        <!-- Auth Page -->
        

        <!-- Contact Page Link -->
        
      </ul>
    </div>

    <!-- Mobile Menu Download Button (Footer) -->
    <div class="p-6 flex items-center justify-center">
      <a class="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm" href="/account/signup" class:active={routeTd === "/account/signup"}>Get Started      </a>
    </div>
    <div class="p-6 flex items-center justify-center">
      <a  class=" border border-primary text-primary w-full text-white p-3 rounded flex items-center justify-center text-sm" href="/account/login" class:active={routeTd === "/account/login"}>Login</a>
    </div>
  </div>
</div>
<!-- =========== Mobile Menu End =========== -->
