<script>
  
  import DefaultNavbar from '$lib/components/navbars/default-navbar.svelte';
  import SaasFooter from '$lib/components/footers/saas-footer.svelte';
</script>



<!-- Default Navbar -->

<!-- Main Content -->
<main class="pt-20">
  <!-- Title Section - Made responsive -->
  <div class="relative bg-cover bg-center" style="background-image: url('https://coderthemes.com/wb/appoo/images/heros/hero-2-bg.png')">
    <div class="container mx-auto px-4 py-16 sm:py-20"> <!-- Adjusted padding for mobile -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center" style="color: #32325d">Privacy Policy</h1>
    </div>
  </div>

  <!-- Content Section - Made responsive -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
    <div class="prose max-w-none text-gray-600 space-y-4 sm:space-y-6">

      <section class="mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">1. Introduction</h2>
        <p class="text-sm sm:text-base">
          Welcome to Ipsepay. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>
      </section>

      <section class="mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">2. Data We Collect</h2>
        <p class="text-sm sm:text-base">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul class="list-disc pl-4 sm:pl-6 mt-2 text-sm sm:text-base">
          <li>Identity Data</li>
          <li>Contact Data</li>
          <li>Financial Data</li>
          <li>Transaction Data</li>
          <li>Technical Data</li>
          <li>Usage Data</li>
        </ul>
      </section>

      <section class="mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">3. How We Use Your Data</h2>
        <p class="text-sm sm:text-base">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul class="list-disc pl-4 sm:pl-6 mt-2 text-sm sm:text-base">
          <li>To process your payments</li>
          <li>To provide customer support</li>
          <li>To prevent fraud</li>
          <li>To improve our services</li>
        </ul>
      </section>

      <section class="mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">4. Data Security</h2>
        <p class="text-sm sm:text-base">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
        </p>
      </section>

      <section class="mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">5. Your Legal Rights</h2>
        <p class="text-sm sm:text-base">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul class="list-disc pl-4 sm:pl-6 mt-2 text-sm sm:text-base">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
      </section>

      <section class="mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">6. Contact Us</h2>
        <p class="text-sm sm:text-base">
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
        </p>
        <div class="mt-2 text-sm sm:text-base">
          <p>Email: privacy@ipsepay.com</p>
         
        </div>
      </section>
    </div>
  </div>
</main>

<!-- Footer -->

<style>
  /* Add any additional styles here */
  :global(body) {
    background-color: #ffffff;
  }

  .privacy-container {
    margin-bottom: 30px;
    padding: 63px;
    background-image: url('https://coderthemes.com/wb/appoo/images/heros/hero-2-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding: 4rem 1rem; /* Increased padding */
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95); /* Semi-transparent white background */
    padding: 3rem; /* Increased padding */
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-bottom: 2rem; /* Increased margin */
    text-align: center;
  }
</style>
