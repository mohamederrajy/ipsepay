<section class="relative overflow-hidden bg-white py-20">
  <!-- Simplified Background Elements -->
  <div class="absolute inset-0">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.1]"></div>
    
    <!-- Simplified, more subtle blobs -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#605bff]/5 rounded-full filter blur-3xl"></div>
    
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white"></div>
  </div>

  <div class="container relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div>
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-[#605bff]/10">
          <span class="text-sm font-medium text-[#605bff]">Digital Business Solutions</span>
          <div class="w-1.5 h-1.5 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>
        
        <!-- Heading -->
        <h1 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Seamless payments for your digital business
        </h1>

        <!-- Subheading -->
        <p class="text-xl text-gray-600 mb-8">
          Increase conversion, manage risk, and expand into new markets faster than ever.
        </p>

        <!-- CTA Button -->
        <a href="/contact" 
           class="group inline-flex items-center px-6 py-3.5 rounded-xl bg-[#605bff] text-white font-medium transition-all hover:bg-[#605bff]/90 hover:shadow-lg hover:shadow-[#605bff]/20">
          Talk to our sales team
          <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <!-- Logos Section -->
        <div class="mt-16">
          <p class="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
          <div class="flex flex-wrap items-center gap-x-12 gap-y-6">
            {#each [
              'woocommerce.png',
              'sheinlogo.png',
              'uber.png',
              'Shopify.png',
              'booking.png',
              'linkden-pay.png'
            ] as logo}
              <img 
                src={`/images/brands/${logo}`} 
                alt="Partner logo" 
                class="h-7 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative">
        <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/images/photos/13.jpg" 
            alt="Digital Business" 
            class="w-full transform transition duration-500 hover:scale-105"
          >
          <!-- Subtle overlay -->
          <div class="absolute inset-0 bg-gradient-to-tr from-[#605bff]/10 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Platform Features Section -->
<section class="py-24 overflow-hidden">
  <div class="container">
    <!-- Header -->
    <div class="max-w-3xl mb-16">
      <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
        One platform that makes it easy for customers to pay
      </h2>
      <p class="text-xl text-gray-600">
        Optimize every stage of the payment journey, from start to finish.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-12 mb-20">
      <!-- Feature cards with hover effects -->
      {#each [
        {
          title: "Maximize checkout conversion",
          description: "Fully customizable checkout. Offer one-click payments and authenticate only when needed."
        },
        {
          title: "Increase authorization rates",
          description: "Cardholder details are automatically updated. Get higher approvals with network tokenization."
        },
        {
          title: "Recover revenue",
          description: "Automatically retry declined transactions at optimal times. Certain declined transactions are retried instantly."
        }
      ] as feature}
        <div class="group p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100/70">
          <h3 class="text-xl font-semibold text-[#32325d] mb-4 group-hover:text-[#605bff]">
            {feature.title}
          </h3>
          <p class="text-gray-600">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>

    <!-- Image Section with enhanced styling -->
    <div class="relative rounded-2xl overflow-hidden">
      <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
      <img 
        src="/images/photos/imgo.png" 
        alt="Payment Platform Features" 
        class="relative rounded-xl w-full object-cover shadow-2xl"
      >
    </div>
  </div>
</section>

<!-- Risk Management Section -->
<section class="py-24 bg-[#f7f7f8]">
  <div class="container">
    <div class="max-w-3xl mb-16">
      <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
        Fine-tune your risk management
      </h2>
      <p class="text-xl text-gray-600">
        Protect your business from fraud without compromising customer experience.
      </p>
    </div>

    <!-- Features Grid with improved cards -->
    <div class="grid md:grid-cols-4 gap-8 mb-20">
      {#each [
        {
          icon: "fa-bolt",
          text: "Reduce operational workload while maintaining control with machine learning & custom risk rules"
        },
        {
          icon: "fa-chart-line",
          text: "ipsepay's rich and unique data set can help distinguish genuine customers from fraudsters"
        },
        {
          icon: "fa-shield",
          text: "Customer-friendly 3D Secure authentication that maximizes conversion while blocking fraud"
        },
        {
          icon: "fa-code",
          text: "Simplify dispute management by automatically defending certain types of chargebacks"
        }
      ] as feature}
        <div class="group p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#605bff]/20">
            <i class="fa-solid {feature.icon} text-[#605bff] text-xl"></i>
          </div>
          <p class="text-gray-600">
            {feature.text}
          </p>
        </div>
      {/each}
    </div>

    <!-- Insights Section with improved layout -->
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Make decisions faster with meaningful insights
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Understand customer behavior quickly with curated dashboards.
        </p>
        
        <!-- Enhanced checklist -->
        <ul class="space-y-4">
          {#each [
            "Monitor 3D Secure conversions and drop-offs",
            "Analyze authorization and refusal rates",
            "Track purchases and refunds at a glance"
          ] as item}
            <li class="flex items-center text-gray-600 group">
              <i class="fa-solid fa-check text-[#605bff] mr-3 group-hover:scale-110 transition-transform"></i>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Dashboard Image with enhanced effects -->
      <div class="relative">
        <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
        <img 
          src="/images/photos/dashbord.png" 
          alt="Analytics Dashboard" 
          class="relative rounded-xl w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        >
      </div>
    </div>
  </div>
</section>

<!-- Global Payments Section -->
<section class="py-24">
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
          Take payments global
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Easily grow into new markets with <a href="#" class="text-[#605bff] hover:text-[#605bff]/80 underline decoration-2 underline-offset-4">ipsepay's local acquiring licenses</a>.
        </p>
        
        <!-- Enhanced checklist -->
        <ul class="space-y-4">
          {#each [
            "One provider to process and settle payments for every market",
            "Offer all popular payment methods worldwide",
            "Settle in the currency you prefer",
            "Receive hands-on support and access local expertise from our team"
          ] as item}
            <li class="flex items-center text-gray-600 group">
              <i class="fa-solid fa-check text-[#605bff] mr-3 group-hover:scale-110 transition-transform"></i>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Image with enhanced effects -->
      <div class="relative">
        <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
        <img 
          src="/images/photos/paydo.jpg" 
          alt="Global Payments" 
          class="relative rounded-xl w-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
        >
      </div>
    </div>
  </div>
</section>

<!-- Partners Section -->
<section class="py-24 bg-[#f7f7f8]">
  <div class="container">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-[2.75rem] font-medium text-[#32325d] leading-[1.2] mb-6">
        Work with your existing partners
      </h2>
      <p class="text-xl text-gray-600">
        Integrate with leading technology solutions to give your customers the best experience.
      </p>
    </div>

    <!-- Enhanced partner logos grid -->
    <div class="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
      {#each [
        'opencart.png',
        'magento.png',
        'woocommerce.png',
        'vss.png',
        'Shopy.png'
      ] as logo}
        <img 
          src={`/images/brands/${logo}`} 
          alt="Partner logo" 
          class="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
      {/each}
    </div>
  </div>
</section>

<style>
  /* Simplified animations */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>