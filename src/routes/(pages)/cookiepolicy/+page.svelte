<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Cookie Management",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['Essential Cookies', 'Performance Cookies', 'Analytics', 'Privacy Controls']
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
          <span class="text-sm font-medium text-[#605bff]">Privacy First</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Cookie Policy
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Understanding how we use cookies to improve your experience
        </p>
      </div>
    </div>
  </div>

  <!-- Content Sections -->
  <div class="container mx-auto px-4 -mt-20 relative z-10">
    <div class="max-w-4xl mx-auto space-y-16">
      
      <!-- What Are Cookies -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">What Are Cookies</h2>
        </div>
        <p class="text-gray-600 mb-6">
          Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.
        </p>
      </section>

      <!-- How We Use Cookies -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">How We Use Cookies</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Essential Cookies</h3>
            <ul class="space-y-3">
              {#each [
                'Website functionality',
                'Security features',
                'User authentication',
                'Session management'
              ] as purpose}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{purpose}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Optional Cookies</h3>
            <ul class="space-y-3">
              {#each [
                'Analytics tracking',
                'Performance monitoring',
                'User preferences',
                'Marketing purposes'
              ] as purpose}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{purpose}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Types of Cookies -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Types of Cookies We Use</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Duration-Based</h3>
            <ul class="space-y-3">
              {#each [
                ['Session Cookies', 'Temporary, expire when browser closes'],
                ['Persistent Cookies', 'Remain until deleted or expiration'],
              ] as [type, description]}
                <li class="space-y-1">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span class="font-medium text-gray-900">{type}</span>
                  </div>
                  <p class="text-sm text-gray-600 pl-8">{description}</p>
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Source-Based</h3>
            <ul class="space-y-3">
              {#each [
                ['First-Party Cookies', 'Set directly by our website'],
                ['Third-Party Cookies', 'Set by trusted partners'],
              ] as [type, description]}
                <li class="space-y-1">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span class="font-medium text-gray-900">{type}</span>
                  </div>
                  <p class="text-sm text-gray-600 pl-8">{description}</p>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Cookie Management -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Cookie Management</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Control Options</h3>
            <ul class="space-y-3">
              {#each [
                'Browser cookie settings',
                'Private browsing mode',
                'Cookie consent preferences',
                'Third-party tools'
              ] as option}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{option}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900">Management Steps</h3>
            <ul class="space-y-3">
              {#each [
                'Access browser settings',
                'Choose cookie preferences',
                'Clear existing cookies',
                'Set up cookie blocking'
              ] as step}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{step}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Impact of Disabling Cookies -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Impact of Disabling Cookies</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Potential Effects</h3>
            <ul class="space-y-3">
              {#each [
                'Limited website functionality',
                'Preferences not saved',
                'Reduced personalization',
                'Login issues'
              ] as effect}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{effect}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Available Alternatives</h3>
            <ul class="space-y-3">
              {#each [
                'Selective cookie enabling',
                'Privacy-focused browsers',
                'Cookie management tools',
                'Session-only browsing'
              ] as alternative}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-[#605bff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{alternative}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <!-- Updates to Policy -->
      <section class="bg-white rounded-2xl shadow-sm p-8">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#0f172a]">Updates to This Policy</h2>
        </div>

        <p class="text-gray-600 mb-6">
          We may update this Cookie Policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you by email or when you next visit our website.
        </p>

        <div class="bg-gray-50 rounded-xl p-6">
          <h3 class="font-semibold text-gray-900 mb-4">Update Process</h3>
          <ul class="space-y-3">
            {#each [
              'Regular policy reviews',
              'Change notifications',
              'Version tracking',
              'User communications'
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
            <h3 class="text-xl font-bold text-[#0f172a]">Questions about cookies?</h3>
            <p class="text-gray-600">We're here to help</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:privacy@ipsepay.com" class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#4f4cce] font-medium">
            privacy@ipsepay.com
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
