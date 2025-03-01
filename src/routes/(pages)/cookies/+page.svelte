<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Essential Cookies",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      items: ['Authentication', 'Security', 'Load Balancing', 'User Preferences']
    },
    {
      title: "Functional Cookies",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      items: ['Language Settings', 'Theme Preferences', 'Form Auto-fill', 'Session Management']
    },
    {
      title: "Analytics Cookies",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      items: ['Usage Statistics', 'Performance Metrics', 'User Behavior', 'Site Improvements']
    }
  ];

  const cookieControls = [
    'Accept All Cookies',
    'Reject Non-Essential',
    'Customize Settings',
    'Clear All Cookies',
    'Update Preferences',
    'Export Settings',
    'View Cookie Policy'
  ];
</script>

<main class="pt-20">
  <!-- Hero Section with Enhanced Ultra-Modern Background -->
  <div class="relative overflow-hidden py-24">
    <!-- Modern Background -->
    <div class="absolute inset-0">
      <!-- Enhanced base gradient with more vibrant colors -->
      <div class="absolute inset-0 bg-gradient-to-br 
                  from-[#f0f4ff] via-[#fafbff] to-[#f8f9ff]
                  dark:from-[#1a1b3f] dark:via-[#2a2a5a] dark:to-[#1f1f45]">
      </div>
      
      <!-- Enhanced multi-layered mesh gradient -->
      <div class="absolute inset-0"
           style="background: 
             radial-gradient(circle at 0% 0%, rgba(96, 91, 255, 0.12) 0%, transparent 50%),
             radial-gradient(circle at 100% 0%, rgba(50, 50, 93, 0.12) 0%, transparent 50%),
             radial-gradient(circle at 100% 100%, rgba(96, 91, 255, 0.08) 0%, transparent 50%),
             radial-gradient(circle at 0% 100%, rgba(50, 50, 93, 0.12) 0%, transparent 50%);">
      </div>

      <!-- Enhanced modern grid pattern -->
      <div class="absolute inset-0"
           style="background-image: 
              linear-gradient(rgba(96, 91, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 91, 255, 0.02) 1px, transparent 1px),
              linear-gradient(rgba(96, 91, 255, 0.01) 2px, transparent 2px),
              linear-gradient(90deg, rgba(96, 91, 255, 0.01) 2px, transparent 2px);
            background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
            background-position: center center;">
      </div>

      <!-- Enhanced floating elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Primary glass morphism sphere -->
        <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] 
                    bg-gradient-to-br from-[#605bff]/15 via-[#605bff]/10 to-transparent 
                    backdrop-blur-3xl rounded-full animate-float-slow"
             style="animation-duration: 25s;">
        </div>

        <!-- Secondary glass morphism sphere -->
        <div class="absolute -bottom-32 -left-32 w-[700px] h-[700px] 
                    bg-gradient-to-tr from-[#32325d]/15 via-[#605bff]/10 to-transparent 
                    backdrop-blur-2xl rounded-full animate-float-slow"
             style="animation-duration: 30s; animation-delay: -5s;">
        </div>

        <!-- Additional decorative elements -->
        <div class="absolute top-1/3 left-1/4 w-32 h-32
                    bg-gradient-to-r from-[#605bff]/30 to-[#32325d]/20 
                    blur-3xl rounded-full animate-pulse"
             style="animation-duration: 8s;">
        </div>
      </div>

      <!-- Enhanced light streaks -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-[#605bff]/30 to-transparent 
                    rotate-[15deg] blur-xl">
        </div>
        <div class="absolute bottom-1/3 right-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-[#605bff]/25 to-transparent 
                    -rotate-[15deg] blur-xl">
        </div>
      </div>
    </div>

    <!-- Title Content -->
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Decorative Element -->
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Cookie Policy</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Cookie Management
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Understand how we use cookies to enhance your browsing experience and protect your privacy.
        </p>

        <!-- Quick Links -->
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#essential" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            Essential Cookies
          </a>
          <a href="#preferences" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Preferences
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content Sections -->
  <div class="relative overflow-hidden pb-24">
    <!-- Modern Background -->
    <div class="absolute inset-0">
      <!-- Enhanced base gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f0f4ff]"></div>
      
      <!-- Multi-layered mesh gradient -->
      <div class="absolute inset-0"
           style="background: 
             radial-gradient(ellipse at top right, rgba(96, 91, 255, 0.05) 0%, transparent 50%),
             radial-gradient(ellipse at bottom left, rgba(50, 50, 93, 0.05) 0%, transparent 50%),
             radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 100%);">
      </div>

      <!-- Enhanced subtle grid -->
      <div class="absolute inset-0"
           style="background-image: 
              linear-gradient(rgba(96, 91, 255, 0.008) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 91, 255, 0.008) 1px, transparent 1px);
            background-size: 50px 50px;">
      </div>
    </div>

    <!-- Content Container -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto space-y-12">
        {#each sections as section}
          <section class="bg-white rounded-2xl shadow-sm p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={section.icon}/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-[#0f172a]">{section.title}</h2>
            </div>

            <ul class="space-y-4">
              {#each section.items as item}
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 mt-1 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  <span class="text-gray-600">{item}</span>
                </li>
              {/each}
            </ul>
          </section>
        {/each}

        <!-- Cookie Controls Section -->
        <section class="bg-white rounded-2xl shadow-sm p-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-[#0f172a]">Cookie Controls</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            {#each cookieControls as control}
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-1 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="text-gray-600">{control}</span>
              </div>
            {/each}
          </div>
        </section>
      </div>
    </div>
  </div>
</main>

<style>
  @keyframes float-slow {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg) scale(1); 
    }
    25% { 
      transform: translate(2%, 2%) rotate(1deg) scale(1.02); 
    }
    50% { 
      transform: translate(-1%, 3%) rotate(-1deg) scale(0.98); 
    }
    75% { 
      transform: translate(-2%, -1%) rotate(0.5deg) scale(1.01); 
    }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }
</style>
