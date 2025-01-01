<section class="py-20  bg-[#f7f7f8]">
    <div class="container px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
              <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor"/>
            </svg>
            <span class="text-gray-600">IpsePay for High-Volume Merchants</span>
          </div>
  
          <h1 class="text-[2rem] lg:text-[2rem] font-medium text-[#32325d]leading-tight mb-6">
            Embed payments into your platform or marketplace
          </h1>
          
          <p class="text-lg lg:text-l text-gray-600 mb-8">
            Let your users sign up, sell, and get paid all through one solution.
          </p>
  
          <div class="flex items-center gap-6">
            <a 
              href="/contact" 
              class="bg-[#605bff] text-white px-6 py-3 rounded-lg inline-flex items-center text-sm font-medium hover:bg-[#605bff]/90 transition-colors"
            >
            Get start now             </a>
            <a 
              href="/account/signup" 
              class="text-[#605bff] hover:text-[#605bff]/90 inline-flex items-center font-medium"
            >
login               <svg class="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
            
          </div>
        </div>
  
        <!-- Right Image with Overlays -->
<div class="relative">
    
    <!-- Payment Received Notification -->
    <div class="absolute top-20 left-4 z-10 bg-white rounded-xl shadow-lg p-4 animate-bounce-in">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 bg-[#605bff] rounded-lg flex items-center justify-center animate-pulse">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <div>
            <div class="text-sm text-gray-500">Payment Successful</div>
            <div class="font-medium">$180.00</div>
          </div>
        </div>
        <div class="h-1 w-full bg-gray-100 rounded">
          <div class="h-1 bg-[#605bff] rounded animate-progress"></div>
        </div>
      </div>
    
      <!-- Credit Card Overlay -->
      <div class="absolute bottom-4 right-4 z-10">
        <div class="w-64 h-40 bg-[#605bff] rounded-xl p-4 text-white shadow-lg">
          <div class="flex justify-between items-start mb-8">
            <div class="space-y-1">
              <div class="text-sm opacity-80">Card holder</div>
              <div class="font-medium">Iris Qualley</div>
            </div>
            <div class="flex gap-1">
              <div class="w-6 h-6 bg-white/30 rounded-full"></div>
              <div class="w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
          </div>
          <div class="space-y-1">
            <div class="font-mono">•••• •••• •••• 1234</div>
            <div class="text-sm opacity-80">09/25</div>
          </div>
        </div>
      </div>
    
      <!-- Main Image -->
      <img 
        src="/images/photos/paydo.jpg" 
        alt="Baker with finished cake" 
        class="relative rounded-2xl w-full h-[600px] object-cover"
      >
    </div>
    
    <style>
      @keyframes slide-in {
        from {
          transform: translateX(-100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    
      @keyframes bounce-in {
        0% {
          transform: scale(0.3);
          opacity: 0;
        }
        50% {
          transform: scale(1.05);
        }
        70% { 
          transform: scale(0.9); 
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    
      @keyframes progress {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }
    
      .animate-slide-in {
        animation: slide-in 0.5s ease-out;
      }
    
      .animate-bounce-in {
        animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    
      .animate-progress {
        animation: progress 3s linear infinite;
      }
    
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: .5;
        }
      }
    </style>
   
    
  
    
  
      </div>
    </div>
  </section>

  <!-- Partners and Benefits Section -->
<section class="py-20">
    <div class="container px-4 sm:px-6">
      <!-- Partner Logos -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-20">
        <img 
          src="/images/brands/EBay_logo.png" 
          alt="eBay" 
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
        >
        <img 
          src="/images/brands/Shopy.png" 
          alt="Vinted" 
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
        >
        <img 
          src="/images/brands/magento.png" 
          alt="Oracle" 
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
        >
        <img 
          src="/images/brands/woocommerce.png" 
          alt="Lightspeed" 
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
        >
        <img 
          src="/images/brands/mscrad.png" 
          alt="Revel" 
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
        >
        <img 
          src="/images/brands/A-pay.png" 
          alt="Wix" 
          class="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
        >
      </div>
  
      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-3 gap-8 pb-20 border-b border-gray-200">
        <!-- Benefit 1 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Unlock new revenue streams
          </h3>
          <p class="text-gray-600">
            Offer payments without third-party referrals and make money on every transaction you process.
          </p>
        </div>
  
        <!-- Benefit 2 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Increase customer lifetime value
          </h3>
          <p class="text-gray-600">
            Attract and retain users by integrating payments into your core product offering.
          </p>
        </div>
  
        <!-- Benefit 3 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Accelerate your global expansion
          </h3>
          <p class="text-gray-600">
            Grow into new markets and be fully certified from day one with compliance managed by Ipsepay.
          </p>
        </div>
      </div>
    </div>
  </section>