<script lang="ts">
    const partners = [
      {
        name: 'WooCommerce',
        logo: '/images/brands/woocommerce.png'
      },
      {
        name: 'Shopify',
        logo: '/images/brands/Shopy.png'
      },
      {
        name: 'Magento',
        logo: '/images/brands/magento.png'
      },
      {
        name: 'OpenCart',
        logo: '/images/brands/opencart.png'
      },
      {
        name: 'Wise',
        logo: '/images/brands/wise.svg'
      },
      {
        name: 'payonner',
        logo: '/images/brands/payonner.png'
      }
    ];
  </script>
  
  <section class="py-12 relative overflow-hidden">
    <div class="absolute inset-0 bg-[#F6F9FC]">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-[#F6F9FC] to-gray-100/80"></div>
    </div>
  
    <!-- Infinite Scroll Container -->
    <div class="relative">
      <!-- First Row -->
      <div class="flex space-x-12 animate-scroll">
        {#each [...partners, ...partners] as partner}
          <div class="flex items-center justify-center min-w-[160px] h-16 bg-white/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-sm px-6 hover:shadow-md transition-shadow">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              class="h-9 w-auto object-contain filter hover:brightness-110 transition-all duration-300 transform hover:scale-105"
              style="image-rendering: -webkit-optimize-contrast;"
            />
          </div>
        {/each}
      </div>
  
      <!-- Second Row (Reverse Direction) -->
      <div class="flex space-x-12 animate-scroll-reverse mt-6">
        {#each [...partners, ...partners] as partner}
          <div class="flex items-center justify-center min-w-[160px] h-16 bg-white/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-sm px-6 hover:shadow-md transition-shadow">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              class="h-9 w-auto object-contain filter hover:brightness-110 transition-all duration-300 transform hover:scale-105"
              style="image-rendering: -webkit-optimize-contrast;"
            />
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  
    @keyframes scroll-reverse {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }
  
    .animate-scroll {
      animation: scroll 30s linear infinite;
    }
  
    .animate-scroll-reverse {
      animation: scroll-reverse 30s linear infinite;
    }
  
    .animate-scroll:hover,
    .animate-scroll-reverse:hover {
      animation-play-state: paused;
    }
  
    img {
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
    }
  </style>