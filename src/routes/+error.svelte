<script>
  import { page } from '$app/stores';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
  <div class="max-w-lg w-full px-6 text-center">
    <!-- 404 Text with Animation -->
    <div class="relative mb-8">
      <h1 class="text-[180px] font-bold text-[#605bff]/10 leading-none">
        404
      </h1>
      <div class="absolute inset-0 flex items-center justify-center">
        <img 
          src="/images/lgopisiiiii.png" 
          alt="404 Illustration" 
          class="w-48 h-48 object-contain"
        />
      </div>
    </div>

    <!-- Error Message -->
    <h2 class="text-2xl font-bold text-gray-900 mb-4">
      Oops! Page not found
    </h2>
    <p class="text-gray-600 mb-8">
      The page you're looking for doesn't exist or has been moved.
    </p>

    <!-- Quick Links Grid -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <!-- Contact Us -->
      <a 
        href="/contact" 
        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
      >
        <div class="text-[#605bff] mb-2">
          <i class="fas fa-envelope text-2xl"></i>
        </div>
        <h3 class="font-semibold text-gray-900 group-hover:text-[#605bff]">
          Contact Us
        </h3>
        <p class="text-sm text-gray-500 mt-1">
          Get in touch with our team
        </p>
      </a>

      <!-- About -->
      <a 
        href="/company" 
        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
      >
        <div class="text-[#605bff] mb-2">
          <i class="fas fa-building text-2xl"></i>
        </div>
        <h3 class="font-semibold text-gray-900 group-hover:text-[#605bff]">
          About Our Company
        </h3>
        <p class="text-sm text-gray-500 mt-1">
          Learn more about us
        </p>
      </a>

      <!-- Pricing Section -->
      <a 
        href="/#pricing" 
        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
      >
        <div class="text-[#605bff] mb-2">
          <i class="fas fa-tag text-2xl"></i>
        </div>
        <h3 class="font-semibold text-gray-900 group-hover:text-[#605bff]">
          Pricing
        </h3>
        <p class="text-sm text-gray-500 mt-1">
          View our pricing plans
        </p>
      </a>

      <!-- Advantages Section -->
      <a 
        href="/#advantages" 
        class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
      >
        <div class="text-[#605bff] mb-2">
          <i class="fas fa-star text-2xl"></i>
        </div>
        <h3 class="font-semibold text-gray-900 group-hover:text-[#605bff]">
          Advantages
        </h3>
        <p class="text-sm text-gray-500 mt-1">
          See why choose us
        </p>
      </a>
    </div>

    <!-- Home Button -->
    <a 
      href="/" 
      class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#605bff] text-white hover:bg-[#605bff]/90 transition-colors"
    >
      <i class="fas fa-home"></i>
      Back to Home
    </a>
  </div>
</div>

<style>
  h1 {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
</style> 