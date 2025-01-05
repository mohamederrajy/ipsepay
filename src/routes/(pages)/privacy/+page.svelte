<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Information Collection",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['Personal Information', 'Device Information', 'Usage Data', 'Payment Information']
    },
    {
      title: "Data Storage",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
      items: ['Secure Servers', 'Encryption Methods', 'Data Backup', 'Retention Periods']
    },
    {
      title: "Data Usage",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['Service Improvement', 'Analytics', 'Marketing', 'Legal Compliance']
    }
  ];

  const rights = [
    'Access your personal data',
    'Correct your personal data',
    'Delete your personal data',
    'Port your data',
    'Withdraw consent',
    'Object to processing',
    'Restrict processing'
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
          <span class="text-sm font-medium text-[#605bff]">Privacy Policy</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Protecting Your Privacy
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          We respect your privacy and are committed to protecting your personal data. Learn how we handle your information.
        </p>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#data-collection" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Data Collection
          </a>
          <a href="#your-rights" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            Your Rights
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
      
      <!-- Payment Data Section -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Payment Data Protection</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Payment Information We Process</h3>
            <ul class="space-y-3">
              {#each ['Card numbers (encrypted)', 'Transaction history', 'Billing addresses', 'Payment preferences'] as item}
                <li class="flex items-center gap-2 text-gray-600">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
          
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Security Measures</h3>
            <ul class="space-y-3">
              {#each ['PCI DSS Level 1 Compliance', 'End-to-end encryption', 'Tokenization', 'Fraud detection systems'] as item}
                <li class="flex items-center gap-2 text-gray-600">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Compliance Section -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Regulatory Compliance</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          {#each [
            { title: 'PCI DSS', desc: 'Payment Card Industry Data Security Standard compliance for secure card processing' },
            { title: 'GDPR', desc: 'European Union General Data Protection Regulation compliance for data privacy' },
            { title: 'PSD2', desc: 'Payment Services Directive 2 compliance for secure authentication' }
          ] as compliance}
            <div class="bg-gray-50 rounded-xl p-6">
              <h3 class="font-semibold text-gray-900 mb-2">{compliance.title}</h3>
              <p class="text-gray-600 text-sm">{compliance.desc}</p>
            </div>
          {/each}
        </div>
      </section>

      <!-- International Data Processing -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">International Data Processing</h2>
        </div>

        <div class="space-y-6">
          <p class="text-gray-600">We process payments globally while ensuring data protection across borders:</p>
          
          <div class="grid md:grid-cols-2 gap-6">
            {#each [
              { title: 'Data Transfer Safeguards', items: ['Standard contractual clauses', 'Privacy Shield compliance', 'Regional data centers'] },
              { title: 'Local Compliance', items: ['Region-specific regulations', 'Local data protection laws', 'Currency regulations'] }
            ] as section}
              <div class="space-y-4">
                <h3 class="font-semibold text-gray-900">{section.title}</h3>
                <ul class="space-y-3">
                  {#each section.items as item}
                    <li class="flex items-center gap-2 text-gray-600">
                      <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                      </svg>
                      {item}
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Data Retention -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Data Retention & Deletion</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Retention Periods</h3>
            <ul class="space-y-3">
              {#each [
                'Transaction records: 7 years',
                'Payment details: As long as active',
                'Account information: Until deletion',
                'Usage logs: 12 months'
              ] as period}
                <li class="flex items-center gap-2 text-gray-600">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {period}
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Data Deletion Request</h3>
            <p class="text-gray-600 mb-4">
              You can request deletion of your personal data at any time, subject to legal retention requirements.
            </p>
            <a href="/contact" class="inline-flex items-center text-[#605bff] hover:text-[#4f4cce] font-medium">
              Submit deletion request
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
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

  .from-primary\/5 {
    --tw-gradient-from: rgb(96 91 255 / 0.05);
  }

  .to-primary\/10 {
    --tw-gradient-to: rgb(96 91 255 / 0.1);
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
