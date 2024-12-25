<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  $: routeTd = $page.url.pathname;

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

<footer class="bg-gray-50">
  <div class="container mx-auto px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- Company Info -->
      <div>
        <h3 class="text-lg font-semibold mb-4">
          <a href="/" class="flex items-center">
            <img 
              src="/images/lgopis.png" 
              alt="Ipsepay" 
              class="h-8 w-auto"
            />
          </a>
        </h3>
        <p class="text-gray-600 mb-4">IpsePay offers secure payment solutions for high-risk businesses. Reliable, fast, and built to support your growth.</p>
        <!-- Social Links -->
        <div class="flex space-x-4">
          <!-- Add your social icons here -->
        </div>
      </div>

      <!-- Products -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Products</h3>
        <ul class="space-y-2">
          <li>
            <button 
              class="text-gray-600 hover:text-[#605bff]"
              on:click={() => navigateToSection('payment-methods')}
            >
              Payment Methods
            </button>
          </li>
          <li>
            <button 
              class="text-gray-600 hover:text-[#605bff]"
              on:click={() => navigateToSection('advantages')}
            >
              Advantages
            </button>
          </li>
          <li>
            <button 
              class="text-gray-600 hover:text-[#605bff]"
              on:click={() => navigateToSection('integration')}
            >
              Easy Integration
            </button>
          </li>
          <li>
            <button 
              class="text-gray-600 hover:text-[#605bff]"
              on:click={() => navigateToSection('pricing')}
            >
              Pricing
            </button>
          </li>
          <li>
            <button 
              class="text-gray-600 hover:text-[#605bff]"
              on:click={() => navigateToSection('internationalisation')}
            >
              Internationalisation
            </button>
          </li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Legal</h3>
        <ul class="space-y-2">
          <li>
            <a 
            class="nav-link text-gray-600 hover:text-[#605bff] block transition-colors" 
            href="/privacy" 
            class:active={routeTd === "/privacy"}
          >
          Privacy Policy
          </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#605bff]"href="/termsconditions" 
            class:active={routeTd === "/termsconditions"}>
              Terms & Conditions
                        </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-[#605bff]"href="/Data-Protection-Policy" 
            class:active={routeTd === "/Data-Protection-Policy"}>
            Data Protection Policy 
                        </a>
          </li>
           
          <li>
            <a href="/PCI-Compliance-and-Security
" class="text-gray-600 hover:text-[#605bff]"  class:active={routeTd === "/PCI-Compliance-and-Security"}>
              
PCI Compliance and Security            </a>
          </li>
         
          <li>
            <a href="/cookiepolicy" class="text-gray-600 hover:text-[#605bff]"  class:active={routeTd === "/cookiepolicy"}>
              
              Cookie Policy
            </a>
          </li>
          

        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Company</h3>
        <ul class="hs-collapse overflow-hidden transition-[height] duration-300 space-y-2 w-full" aria-labelledby="hs-basic-collapse-2">
          <!-- Dropdown item -->
          <div class="nav-item">
            <a 
              class="nav-link text-gray-600 hover:text-[#605bff] block transition-colors" 
              href="/contact" 
              class:active={routeTd === "/contact"}
            >
              Contact us
            </a>
          </div>

          <div class="nav-item">
            <a 
              class="nav-link text-gray-600 hover:text-[#605bff] block transition-colors" 
              href="/company" 
              class:active={routeTd === "/company"}
            >
              About Us
            </a>
          </div>

          <div class="nav-item">
            <button 
              class="nav-link text-gray-600 hover:text-[#605bff] block transition-colors w-full text-left" 
              on:click={() => navigateToSection('faqs')}
            >
              FAQs
            </button>
          </div>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 mt-12 pt-8">
      <!-- Mobile View -->
      <div class="flex flex-col space-y-6 lg:hidden">
        <!-- Payment Icons -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <img src="/images/brands/vss.png" alt="Visa" class="payment-icon" />
          <img src="/images/brands/mscrad.png" alt="Mastercard" class="payment-icon" />
          <img src="/images/brands/pay-payl.png" alt="PayPal" class="payment-icon" />
          <img src="/images/brands/amex.png" alt="American Express" class="payment-icon" />
          <img src="/images/brands/G-pay.png" alt="Google Pay" class="payment-icon" />
          <img src="/images/brands/A-pay.png" alt="Apple Pay" class="payment-icon" />
          <img src="/images/brands/pci.svg" alt="PCI Compliant" class="payment-icon" />
        </div>

        <!-- Links -->
        <div class="flex justify-center space-x-4">
          <a href="/privacy" class="text-gray-600 hover:text-[#605bff] text-sm">Privacy</a>
          <a href="/terms" class="text-gray-600 hover:text-[#605bff] text-sm">Terms</a>
          <a href="/cookies" class="text-gray-600 hover:text-[#605bff] text-sm">Cookies</a>
        </div>

        <!-- Copyright -->
        <p class="text-gray-600 text-sm text-center flex items-center justify-center">
          © {new Date().getFullYear()} 
          <img 
            src="/images/lgopis.png" 
            alt="Ipsepay" 
            class="h-5 w-auto mx-2 grayscale opacity-75"
          /> 
          All rights reserved.
        </p>
      </div>

      <!-- Desktop View -->
      <div class="hidden lg:flex items-center justify-between">
        <!-- Copyright -->
        <p class="text-gray-600 text-sm flex items-center">
          © {new Date().getFullYear()} 
          <img 
            src="/images/lgopis.png" 
            alt="Ipsepay" 
            class="h-5 w-auto mx-2 grayscale opacity-75"
          /> 
          All rights reserved.
        </p>
        
        <!-- Payment Icons -->
        <div class="flex items-center space-x-4">
          <img src="/images/brands/vss.png" alt="Visa" class="payment-icon" />
          <img src="/images/brands/mscrad.png" alt="Mastercard" class="payment-icon" />
          <img src="/images/brands/pay-payl.png" alt="PayPal" class="payment-icon" />
          <img src="/images/brands/amex.png" alt="American Express" class="payment-icon" />
          <img src="/images/brands/G-pay.png" alt="Google Pay" class="payment-icon" />
          <img src="/images/brands/A-pay.png" alt="Apple Pay" class="payment-icon" />
          <img src="/images/brands/pci.svg" alt="PCI Compliant" class="payment-icon" />
        </div>

        <!-- Links -->
        <div class="flex space-x-6">
          <a href="/privacy" class="text-gray-600 hover:text-[#605bff] text-sm">Privacy</a>
          <a href="/terms" class="text-gray-600 hover:text-[#605bff] text-sm">Terms</a>
          <a href="/cookies" class="text-gray-600 hover:text-[#605bff] text-sm">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .payment-icon {
    height: 1.5rem;
    width: auto;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .payment-icon:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: translateY(-2px);
  }

  .grayscale {
    filter: grayscale(100%);
  }

  /* Additional mobile styles */
  @media (max-width: 768px) {
    .mobile-menu-links {
      padding: 1rem;
    }
  }

  .nav-link.active {
    color: #605bff;
  }

  .nav-item {
    padding: 0.25rem 0;
  }
</style>
