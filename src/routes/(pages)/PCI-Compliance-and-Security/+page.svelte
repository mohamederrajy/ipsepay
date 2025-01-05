<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Security Standards",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['PCI DSS Level 1', 'ISO 27001', 'GDPR', 'Security Controls']
    }
  ];
</script>

<main class="pt-20">
  <!-- Hero Section with Enhanced Background -->
  <div class="relative overflow-hidden bg-gradient-to-b from-[#605bff]/5 via-white to-white">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-[#605bff]/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl"></div>
    </div>

    <!-- Title Content -->
    <div class="relative container mx-auto px-4 pt-20 pb-32 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Decorative Element -->
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Security First</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            PCI Compliance and Security
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Enterprise-grade security for your payment processing needs
        </p>
      </div>
    </div>
  </div>

  <!-- Content Sections -->
  <div class="container mx-auto px-4 -mt-20 relative z-10">
    <div class="max-w-4xl mx-auto space-y-16">
      
      <!-- PCI DSS Compliance Section -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">PCI DSS Compliance</h2>
        </div>
        <p class="text-gray-600 mb-6">
          Ipsepay maintains the highest level of PCI DSS compliance to ensure the security of your payment data. We are certified as a Level 1 PCI DSS Service Provider, the most stringent level of certification available in the payments industry.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Compliance Features</h3>
            <ul class="space-y-3">
              {#each [
                'Annual on-site audits',
                'Quarterly network scans',
                'Penetration testing',
                'Compliance reporting'
              ] as feature}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{feature}</span>
                </li>
              {/each}
            </ul>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Security Standards</h3>
            <ul class="space-y-3">
              {#each [
                'Data encryption standards',
                'Network security protocols',
                'Access control measures',
                'Continuous monitoring'
              ] as standard}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{standard}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Security Infrastructure -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Security Infrastructure</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Core Security Features</h3>
            <ul class="space-y-3">
              {#each [
                'End-to-end encryption',
                'Multi-layer security',
                '24/7 monitoring',
                'Regular security audits'
              ] as feature}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{feature}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Infrastructure Components</h3>
            <ul class="space-y-3">
              {#each [
                'Secure data centers',
                'Redundant systems',
                'Disaster recovery',
                'Backup solutions'
              ] as component}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{component}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Data Protection Measures -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Data Protection Measures</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Technical Controls</h3>
            <ul class="space-y-3">
              {#each [
                'Tokenization of payment data',
                'Strong access controls',
                'Regular security updates',
                'Secure development practices'
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

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Operational Controls</h3>
            <ul class="space-y-3">
              {#each [
                'Employee security training',
                'Access management',
                'Security awareness',
                'Regular assessments'
              ] as control}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{control}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Fraud Prevention -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Fraud Prevention</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Detection Systems</h3>
            <ul class="space-y-3">
              {#each [
                'Advanced fraud algorithms',
                'Real-time monitoring',
                'Machine learning analysis',
                'Behavioral analytics'
              ] as system}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{system}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Prevention Tools</h3>
            <ul class="space-y-3">
              {#each [
                'IP intelligence',
                'Geolocation verification',
                'Custom fraud rules',
                'Risk scoring'
              ] as tool}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{tool}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Compliance Certifications -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Compliance Certifications</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Security Standards</h3>
            <ul class="space-y-3">
              {#each [
                'ISO 27001 certified',
                'PCI DSS Level 1',
                'GDPR compliant',
                'SOC 2 Type II'
              ] as certification}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{certification}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Industry Compliance</h3>
            <ul class="space-y-3">
              {#each [
                'Local regulations',
                'Industry standards',
                'Banking requirements',
                'Data protection laws'
              ] as compliance}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{compliance}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Incident Response -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Incident Response</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Response Team</h3>
            <ul class="space-y-3">
              {#each [
                '24/7 dedicated team',
                'Rapid response protocols',
                'Automated alerts',
                'Clear communication'
              ] as team}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{team}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Response Process</h3>
            <ul class="space-y-3">
              {#each [
                'Incident assessment',
                'Containment measures',
                'Recovery procedures',
                'Post-incident analysis'
              ] as process}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{process}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Security Best Practices -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Security Best Practices</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Merchant Guidelines</h3>
            <ul class="space-y-3">
              {#each [
                'Strong authentication',
                'Regular updates',
                'Transaction monitoring',
                'Staff training'
              ] as guideline}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{guideline}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Security Resources</h3>
            <ul class="space-y-3">
              {#each [
                'Security documentation',
                'Training materials',
                'Best practice guides',
                'Security updates'
              ] as resource}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{resource}</span>
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
            <h3 class="text-xl font-bold text-[#0f172a]">Security Questions?</h3>
            <p class="text-gray-600">Our security team is here to help</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:security@ipsepay.com" class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#4f4cce] font-medium">
            security@ipsepay.com
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
