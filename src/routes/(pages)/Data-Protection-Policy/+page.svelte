<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Data Protection",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['Security Measures', 'Data Rights', 'Compliance', 'Privacy Controls']
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
          <span class="text-sm font-medium text-[#605bff]">Data Protection</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Data Protection Policy
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Our commitment to protecting your data and privacy
        </p>
      </div>
    </div>

    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-24 fill-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </div>
  </div>

  <!-- Content Sections -->
  <div class="container mx-auto px-4 -mt-20 relative z-10">
    <div class="max-w-4xl mx-auto space-y-16">
      
      <!-- Introduction Section -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Introduction</h2>
        </div>
        <p class="text-gray-600">
          Ipsepay is committed to protecting the rights and freedoms of data subjects and safely and securely processing their data in accordance with all of our legal obligations.
        </p>
      </section>

      <!-- Data Protection Principles -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Data Protection Principles</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Core Principles</h3>
            <ul class="space-y-3">
              {#each [
                'Lawfulness, fairness and transparency',
                'Purpose limitation',
                'Data minimization',
                'Accuracy'
              ] as principle}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{principle}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Additional Principles</h3>
            <ul class="space-y-3">
              {#each [
                'Storage limitation',
                'Integrity and confidentiality',
                'Accountability',
                'Data protection by design'
              ] as principle}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{principle}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Security Measures -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Security Measures</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Technical Measures</h3>
            <ul class="space-y-3">
              {#each [
                'End-to-end encryption (E2EE)',
                'Multi-factor authentication (MFA)',
                'Regular security audits',
                'Intrusion detection systems'
              ] as measure}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{measure}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Organizational Measures</h3>
            <ul class="space-y-3">
              {#each [
                'Staff security training',
                'Access control policies',
                'Incident response plan',
                'Regular compliance reviews'
              ] as measure}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{measure}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Data Subject Rights -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Data Subject Rights</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Your Rights</h3>
            <ul class="space-y-3">
              {#each [
                'Right to access your data',
                'Right to rectification',
                'Right to erasure',
                'Right to data portability'
              ] as right}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{right}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Additional Rights</h3>
            <ul class="space-y-3">
              {#each [
                'Right to restrict processing',
                'Right to object',
                'Rights related to automation',
                'Right to withdraw consent'
              ] as right}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{right}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- International Data Transfers -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">International Transfers</h2>
        </div>

        <div class="space-y-6">
          <p class="text-gray-600">
            When transferring personal data internationally, we ensure appropriate safeguards are in place and comply with relevant data protection regulations including GDPR requirements.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="font-semibold text-gray-900">Transfer Mechanisms</h3>
              <ul class="space-y-3">
                {#each [
                  'Standard Contractual Clauses',
                  'Binding Corporate Rules',
                  'Adequacy Decisions',
                  'Privacy Shield Framework'
                ] as mechanism}
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span class="text-gray-600">{mechanism}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="font-semibold text-gray-900">Data Protection Guarantees</h3>
              <ul class="space-y-3">
                {#each [
                  'Data encryption in transit',
                  'Regular compliance audits',
                  'Transparent processing',
                  'Local data storage options'
                ] as guarantee}
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span class="text-gray-600">{guarantee}</span>
                  </li>
                {/each}
              </ul>
            </div>
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
            <h3 class="text-xl font-bold text-[#0f172a]">Questions about data protection?</h3>
            <p class="text-gray-600">Our Data Protection Officer is here to help</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:dpo@ipsepay.com" class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#4f4cce] font-medium">
            dpo@ipsepay.com
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
