<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Service Terms",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['Account Requirements', 'Service Usage', 'Payment Terms', 'User Obligations']
    },
    {
      title: "Legal Framework",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      items: ['Compliance', 'Jurisdiction', 'Dispute Resolution', 'Governing Law']
    }
  ];
</script>

<main class="pt-20">
  <!-- Hero Section with Enhanced Background -->
  <div class="relative overflow-hidden bg-gradient-to-b from-[#605bff]/5 via-white to-white">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
      <!-- Gradient Circles -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl"></div>
    </div>

    <!-- Title Content -->
    <div class="relative container mx-auto px-4 pt-20 pb-32 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Decorative Element -->
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Terms & Conditions</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Our Service Agreement
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Please read these terms carefully before using our payment processing services.
        </p>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#payment-terms" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Payment Terms
          </a>
          <a href="#user-obligations" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
            </svg>
            User Obligations
          </a>
        </div>
      </div>
    </div>

    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-24 fill-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </div>
  </div>

  <!-- Main Content Sections -->
  <div class="container mx-auto px-4 -mt-20 relative z-10">
    <div class="max-w-4xl mx-auto space-y-16">
      
      <!-- Last Updated -->
      <div class="bg-white rounded-2xl shadow-sm p-8">
        <p class="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <!-- Agreement Section -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">1. Agreement to Terms</h2>
        </div>
        <p class="text-gray-600 leading-relaxed">
          By accessing and using Ipsepay's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
        </p>
      </section>

      <!-- Service Usage Section -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">2. Use of Services</h2>
        </div>
        <div class="space-y-6">
          <p class="text-gray-600">Our services are available only to users who can form legally binding contracts under applicable law. By using our services, you represent and warrant that:</p>
          <ul class="grid gap-3">
            {#each ['You are at least 18 years old', 'You have the legal capacity to enter into binding contracts', 'You will comply with these terms and all applicable laws', 'The information you provide is accurate and complete'] as requirement}
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="text-gray-600">{requirement}</span>
              </li>
            {/each}
          </ul>
        </div>
      </section>

      <!-- Payment Processing Terms -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Payment Processing Terms</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Transaction Processing</h3>
            <ul class="space-y-3">
              {#each [
                'Authorization to process payments',
                'Transaction settlement timelines',
                'Currency conversion rates',
                'Processing fees and charges'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Payment Methods</h3>
            <ul class="space-y-3">
              {#each [
                'Credit & Debit Cards',
                'Bank Transfers (ACH/SEPA)',
                'Digital Wallets',
                'Local Payment Methods'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Fees and Charges -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Fees & Charges</h2>
        </div>

        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-xl p-6">
              <h3 class="font-semibold text-gray-900 mb-4">Standard Processing Fees</h3>
              <ul class="space-y-3">
                {#each [
                  'Credit Cards: 2.9% + $0.30',
                  'ACH/Bank Transfer: 0.8%',
                  'International: +1% fee',
                  'Currency Conversion: Market rate + 1%'
                ] as fee}
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span class="text-gray-600">{fee}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <div class="bg-gray-50 rounded-xl p-6">
              <h3 class="font-semibold text-gray-900 mb-4">Additional Charges</h3>
              <ul class="space-y-3">
                {#each [
                  'Chargeback Fee: $15',
                  'Refund Processing: Free',
                  'Account Setup: Free',
                  'Monthly Fee: Based on volume'
                ] as charge}
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span class="text-gray-600">{charge}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Dispute Resolution -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Dispute Resolution</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Chargeback Process</h3>
            <ul class="space-y-3">
              {#each [
                'Notification within 24 hours',
                'Evidence submission window',
                'Resolution timeline',
                'Appeal process'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Refund Policy</h3>
            <ul class="space-y-3">
              {#each [
                'Processing time: 5-7 business days',
                'Original payment method',
                'Partial refunds available',
                'Documentation requirements'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Account Security -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Account Security</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Security Requirements</h3>
            <ul class="space-y-3">
              {#each [
                'Strong password policy',
                'Two-factor authentication',
                'API key management',
                'Session security'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Account Access</h3>
            <ul class="space-y-3">
              {#each [
                'User role management',
                'Access logging',
                'IP restrictions',
                'Security notifications'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="bg-[#605bff]/5 rounded-2xl p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold text-[#0f172a]">Questions about our terms?</h3>
            <p class="text-gray-600">Our legal team is here to help</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:legal@ipsepay.com" class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#4f4cce] font-medium">
            legal@ipsepay.com
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <span class="text-gray-400">|</span>
          <a href="/contact" class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#4f4cce] font-medium">
            Contact Form
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  </div>
</main>

<style>
  :root {
    --primary: #605bff;
  }

  .text-primary {
    color: var(--primary);
  }

  .bg-primary {
    background-color: var(--primary);
  }

  .bg-primary\/5 {
    background-color: rgb(96 91 255 / 0.05);
  }

  .bg-primary\/10 {
    background-color: rgb(96 91 255 / 0.1);
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  :global(.gradient-animate) {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
</style>
