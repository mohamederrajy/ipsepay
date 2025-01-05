<script lang="ts">
  import { page } from '$app/stores';
  
  const currentYear = new Date().getFullYear();
  
  const categories = [
    'Payment Gateways',
    'Online Payments',
    'Payment Security',
    'Payment Methods',
    'Cross-border Payments',
    'Payment Integration'
  ];

  const quickLinks = [
    { label: 'Payment Solutions', href: '/payment-solutions' },
    { label: 'Integration Guide', href: '/integration' },
    { label: 'API Documentation', href: '/docs' },
    { label: 'Success Stories', href: '/case-studies' },
    { label: 'Support Center', href: '/support' }
  ];

  const paymentFeatures = [
    { label: 'Global Coverage', description: '150+ countries' },
    { label: 'Payment Methods', description: '50+ options' },
    { label: 'Success Rate', description: '99.99%' },
    { label: 'Processing Time', description: '< 1 second' }
  ];

  const socialLinks = [
    { icon: 'linkedin', url: '#', label: 'LinkedIn', description: 'Payment Industry Updates' },
    { icon: 'twitter', url: '#', label: 'Twitter', description: 'Latest Features' },
    { icon: 'facebook', url: '#', label: 'Facebook', description: 'Community Insights' },
    { icon: 'github', url: '#', label: 'GitHub', description: 'Integration Code' }
  ];
</script>

<footer class="relative bg-white border-t border-gray-100">
  <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
  
  <div class="relative container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- About Section -->
      <div class="md:col-span-4">
        <a href="/" class="inline-block mb-6">
          <img src="/images/lgopis.png" alt="Ipsepay" class="h-8 w-auto"/>
        </a>
        <p class="text-gray-600 text-sm leading-relaxed mb-6">
          Explore the future of payments with our comprehensive insights on payment gateways, 
          integration solutions, and global payment processing. Stay updated with the latest 
          in payment technology and industry trends.
        </p>
        <div class="flex items-center gap-4">
          {#each socialLinks as { icon, url, label, description }}
            <a 
              href={url}
              class="group relative w-10 h-10 flex items-center justify-center rounded-lg
                     bg-gray-50 hover:bg-[#605bff] hover:text-white
                     text-gray-600 transition-all duration-200"
              aria-label={label}
            >
              <i class="fab fa-{icon}"></i>
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32
                          bg-gray-900 text-white text-xs rounded-md py-1 px-2
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          pointer-events-none text-center">
                {description}
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full
                            border-4 border-transparent border-t-gray-900"></div>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <!-- Payment Features -->
      <div class="md:col-span-3 md:col-start-6">
        <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          Payment Features
        </h3>
        <ul class="space-y-3">
          {#each paymentFeatures as { label, description }}
            <li class="flex items-center justify-between">
              <span class="text-sm text-gray-600">{label}</span>
              <span class="text-sm font-medium text-[#605bff]">{description}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Categories -->
      <div class="md:col-span-2">
        <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          Categories
        </h3>
        <ul class="space-y-2">
          {#each categories as category}
            <li>
              <a 
                href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200
                       flex items-center gap-2 group"
              >
                <span class="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#605bff] 
                           transition-colors duration-200"></span>
                {category}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Quick Links -->
      <div class="md:col-span-3">
        <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          Resources
        </h3>
        <ul class="space-y-2">
          {#each quickLinks as { label, href }}
            <li>
              <a 
                {href}
                class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200
                       flex items-center gap-2 group"
                class:active={$page.url.pathname === href}
              >
                <span class="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#605bff] 
                           transition-colors duration-200"></span>
                {label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-gray-100">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-600">
          © {currentYear} Ipsepay Payment Solutions. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="/privacy" class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms" class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200">
            Terms of Service
          </a>
          <a href="/security" class="text-sm text-gray-600 hover:text-[#605bff] transition-colors duration-200">
            Security
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  :global(.active) {
    @apply text-[#605bff];
  }
  
  @media (max-width: 768px) {
    .grid {
      gap: 2rem;
    }
  }
</style> 