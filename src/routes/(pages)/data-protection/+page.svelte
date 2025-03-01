<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;

  const sections = [
    {
      title: "Data Collection",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      items: ['Personal Information', 'Usage Data', 'Technical Data', 'Cookie Information']
    },
    {
      title: "Data Security",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      items: ['Encryption Methods', 'Access Controls', 'Security Monitoring', 'Incident Response']
    },
    {
      title: "Data Processing",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
      items: ['Processing Purposes', 'Legal Basis', 'Automated Processing', 'Data Analysis']
    }
  ];

  const dataRights = [
    'Right to Access',
    'Right to Rectification',
    'Right to Erasure',
    'Right to Data Portability',
    'Right to Object',
    'Right to Restrict Processing',
    'Right to Withdraw Consent'
  ];
</script>

<main class="pt-20">
  <!-- Hero Section with Ultra-Modern Background -->
  <div class="relative overflow-hidden py-24">
    <!-- Modern Background -->
    <div class="absolute inset-0">
      <!-- Enhanced base gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-[#fff] to-[#f0f4ff]"></div>
      
      <!-- Multi-layered mesh gradient -->
      <div class="absolute inset-0"
           style="background: 
             radial-gradient(circle at 20% 0%, rgba(96, 91, 255, 0.08) 0%, transparent 50%),
             radial-gradient(circle at 80% 0%, rgba(50, 50, 93, 0.05) 0%, transparent 50%),
             radial-gradient(circle at 0% 100%, rgba(96, 91, 255, 0.06) 0%, transparent 40%),
             radial-gradient(circle at 100% 100%, rgba(50, 50, 93, 0.05) 0%, transparent 40%);">
      </div>

      <!-- Enhanced modern grid pattern -->
      <div class="absolute inset-0"
           style="background-image: 
              linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px),
              linear-gradient(rgba(96, 91, 255, 0.005) 2px, transparent 2px),
              linear-gradient(90deg, rgba(96, 91, 255, 0.005) 2px, transparent 2px);
            background-size: 60px 60px, 60px 60px, 15px 15px, 15px 15px;">
      </div>

      <!-- Modern floating elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Primary glass morphism sphere -->
        <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] 
                    bg-gradient-to-br from-[#605bff]/10 via-[#605bff]/5 to-transparent 
                    backdrop-blur-3xl rounded-full animate-float-slow"
             style="animation-duration: 25s;">
        </div>

        <!-- Secondary glass morphism sphere -->
        <div class="absolute -bottom-32 -left-32 w-[600px] h-[600px] 
                    bg-gradient-to-tr from-[#32325d]/10 via-[#605bff]/5 to-transparent 
                    backdrop-blur-2xl rounded-full animate-float-slow"
             style="animation-duration: 30s; animation-delay: -5s;">
        </div>
      </div>

      <!-- Modern light streaks -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-0 w-full h-[1px] 
                    bg-gradient-to-r from-transparent via-[#605bff]/20 to-transparent 
                    rotate-[15deg] blur-md">
        </div>
        <div class="absolute bottom-1/3 right-0 w-full h-[1px] 
                    bg-gradient-to-r from-transparent via-[#605bff]/15 to-transparent 
                    -rotate-[15deg] blur-md">
        </div>
      </div>
    </div>

    <!-- Title Content -->
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Decorative Element -->
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Data Protection</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Protecting Your Data
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Learn how we protect and handle your data with industry-leading security measures and compliance standards.
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
          <a href="#data-security" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Data Security
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

        <!-- Your Data Rights Section -->
        <section class="bg-white rounded-2xl shadow-sm p-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-[#0f172a]">Your Data Rights</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            {#each dataRights as right}
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-1 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                </svg>
                <span class="text-gray-600">{right}</span>
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
