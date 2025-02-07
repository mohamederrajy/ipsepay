<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  $: routeTd = $page.route.id;

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const integrations = [
    {
      name: 'API Integration',
      icon: 'code',
      description: 'Direct integration with our RESTful API and comprehensive SDKs',
      stat: '99.9%',
      label: 'Uptime',
      bgColor: 'bg-gradient-to-br from-blue-500/5 to-blue-500/10',
      textColor: 'text-blue-500',
      hoverBg: 'group-hover:bg-gradient-to-br from-blue-500/10 to-blue-500/20',
      features: ['Real-time', 'Webhooks', 'SDKs'],
      additionalIcons: [
        {
          type: 'node',
          icon: `<svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#68A063" d="M12 1.85c-.27 0-.55.07-.78.2L3.6 6.5a1.5 1.5 0 0 0-.76 1.3v8.4c0 .54.3 1.03.76 1.3l7.62 4.45c.23.13.5.2.78.2s.55-.07.78-.2l7.62-4.45c.46-.27.76-.76.76-1.3V7.8c0-.54-.3-1.03-.76-1.3l-7.62-4.45a1.5 1.5 0 0 0-.78-.2Z"/>
          </svg>`,
          bgColor: 'bg-[#68A063]/10'
        },
        {
          type: 'python',
          icon: `<svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#3776AB" d="M12 0C5.37 0 5.37 2.54 5.37 2.54v2.54h6.63v.85H3.39S0 5.93 0 12s3.39 6.07 3.39 6.07h2V13.4C5.39 9.43 8.86 9.43 8.86 9.43h5.88s3.15.04 3.15-3.04V3.04S18.15 0 12 0z"/>
            <path fill="#FFC331" d="M12 24c6.63 0 6.63-2.54 6.63-2.54v-2.54h-6.63v-.85h8.61S24 18.07 24 12s-3.39-6.07-3.39-6.07h-2v4.67c0 3.97-3.47 3.97-3.47 3.97h-5.88s-3.15-.04-3.15 3.04v3.35S5.85 24 12 24z"/>
          </svg>`,
          bgColor: 'bg-[#3776AB]/10'
        },
        {
          type: 'php',
          icon: `<svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#777BB4" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.4 5h2.8v2h-2.8V5zm-.7 3h4.2v2h-4.2V8zm-1.4 3h7v2h-7v-2zm-1.4 3h9.8v2H7.1v-2z"/>
          </svg>`,
          bgColor: 'bg-[#777BB4]/10'
        },
        {
          type: 'java',
          icon: `<svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#007396" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
          </svg>`,
          bgColor: 'bg-[#007396]/10'
        },
        {
          type: 'ruby',
          icon: `<svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#CC342D" d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016c-3.035 0-3.897-2.717-3.89-4.907l.01-.08L.95 3.685h.016c.034-2.25.849-3.665 3.851-3.602L20.156.083zM4.823 14.901l-.106.107h.107v-.107zm2.482 5.578l-.107.108h.107v-.108zm6.505-6.491l-.107.107h.107v-.107zm6.506-5.577l-.106.107h.106v-.107z"/>
          </svg>`,
          bgColor: 'bg-[#CC342D]/10'
        }
      ]
    },
    {
      name: 'Payment Links',
      icon: 'link',
      description: 'No-code solution for quick payment setup and sharing',
      stat: '2min',
      label: 'Setup Time',
      bgColor: 'bg-gradient-to-br from-purple-500/5 to-purple-500/10',
      textColor: 'text-purple-500',
      hoverBg: 'group-hover:bg-gradient-to-br from-purple-500/10 to-purple-500/20',
      features: ['No code', 'Shareable', 'Analytics'],
      additionalIcons: [
        {
          type: 'qr',
          icon: `<svg class="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <path d="M14 14h3v3h-3z"/>
            <path d="M20 14v3h-3"/>
            <path d="M20 20h-3v-3"/>
            <path d="M14 20v-3h3"/>
          </svg>`,
          bgColor: 'bg-purple-500/10'
        },
        {
          type: 'share',
          icon: `<svg class="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>`,
          bgColor: 'bg-indigo-500/10'
        },
        {
          type: 'link',
          icon: `<svg class="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>`,
          bgColor: 'bg-blue-500/10'
        }
      ]
    },
    {
      name: 'E-commerce Plugins',
      icon: 'shop',
      description: 'Pre-built integrations for major e-commerce platforms',
      stat: '10+',
      label: 'Platforms',
      bgColor: 'bg-gradient-to-br from-[#605bff]/5 to-[#605bff]/10',
      textColor: 'text-[#605bff]',
      hoverBg: 'group-hover:bg-gradient-to-br from-[#605bff]/10 to-[#605bff]/20',
      features: ['One-click', 'Auto-sync', '24/7 Support'],
      additionalIcons: [
        '/images/brands/woo.webp',
        '/images/brands/shopyicon.webp',
        '/images/brands/magentoicon.webp',
     
      ],
      isImage: true
    }
  ];
</script>

<section class="relative overflow-hidden py-16 sm:py-24 lg:py-32">
  <!-- Professional Modern Background -->
  <div class="absolute inset-0">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa] to-[#f5f5f5]"></div>
    
    <!-- Animated mesh gradient -->
    <div class="absolute inset-0 opacity-75"
         style="background: linear-gradient(45deg, 
                  rgba(96, 91, 255, 0.03) 0%, 
                  rgba(96, 91, 255, 0.03) 1%, 
                  transparent 1%
                ) center / 3rem 3rem,
                linear-gradient(-45deg, 
                  rgba(96, 91, 255, 0.03) 0%, 
                  rgba(96, 91, 255, 0.03) 1%, 
                  transparent 1%
                ) center / 3rem 3rem;">
    </div>

    <!-- Floating orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary orb -->
      <div class="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-full
                  bg-gradient-to-br from-[#605bff]/10 via-[#605bff]/5 to-transparent 
                  blur-3xl animate-float-slow transform rotate-12"
           style="animation-duration: 15s;">
      </div>
      
      <!-- Secondary orb -->
      <div class="absolute -bottom-[40%] -left-[10%] w-[80%] h-[80%] rounded-full
                  bg-gradient-to-tr from-[#32325d]/8 via-[#605bff]/5 to-transparent 
                  blur-3xl animate-float-slow transform -rotate-12"
           style="animation-duration: 18s; animation-delay: -5s;">
      </div>

      <!-- Accent orbs -->
      <div class="absolute top-[20%] left-[10%] w-[20%] h-[20%] rounded-full
                  bg-gradient-to-r from-purple-500/5 to-transparent 
                  blur-2xl animate-pulse"
           style="animation-duration: 10s;">
      </div>
      <div class="absolute bottom-[30%] right-[20%] w-[15%] h-[15%] rounded-full
                  bg-gradient-to-l from-blue-500/5 to-transparent 
                  blur-2xl animate-pulse"
           style="animation-duration: 12s; animation-delay: -3s;">
      </div>
    </div>

    <!-- Noise texture overlay -->
    <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay"
         style="background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPg0KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPg0KPC9maWx0ZXI+DQo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+DQo8L3N2Zz4=');">
    </div>
  </div>

  <!-- Content Container -->
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
      <div class="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/90 
                  p-1.5 pr-4 sm:pr-6 backdrop-blur-xl border border-white/20 
                  shadow-xl hover:shadow-2xl transition-all duration-300 mb-6 sm:mb-8">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-white 
                     relative overflow-hidden">
          <span class="relative z-10">Developer-First</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-xs sm:text-sm font-medium text-[#32325d]">
          Integration Options
        </span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 
                 text-[#32325d]">
        Integration
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">Simplified</span>
        </span>
      </h2>
      
      <p class="text-lg sm:text-xl text-[#32325d]/70 max-w-2xl mx-auto leading-relaxed">
        Start accepting payments in minutes with our flexible integration options
      </p>
    </div>

    <!-- Integration Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 
                max-w-7xl mx-auto">
      {#each integrations as integration, i}
        <div class="group bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
                    border border-white/20 shadow-xl hover:shadow-2xl transition-all 
                    duration-500 hover:-translate-y-1 relative overflow-hidden 
                    p-6 sm:p-8 animate-fade-up" style="animation-delay: {i * 200}ms">
          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent 
                      to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          </div>
          
          <!-- Content -->
          <div class="relative">
            <!-- Icon Container -->
            <div class="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500
                          {integration.bgColor} {integration.hoverBg}">
                {#if integration.icon === 'code'}
                  <svg class="w-8 sm:w-12 h-8 sm:h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                {:else if integration.icon === 'link'}
                  <svg class="w-8 sm:w-12 h-8 sm:h-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" />
                  </svg>
                {:else if integration.icon === 'shop'}
                  <svg class="w-8 sm:w-12 h-8 sm:h-12 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                    <path d="M6 6h.01" />
                    <path d="M9 6h.01" />
                  </svg>
                {/if}
              </div>

              {#if integration.additionalIcons}
                <div class="flex -space-x-1 sm:-space-x-2 animate-slide-in" 
                     style="animation-delay: {i * 300}ms">
                  {#if integration.name === 'Payment Links'}
                    {#each integration.additionalIcons as icon}
                      <div class="w-10 h-10 rounded-full bg-white backdrop-blur-sm p-1.5 
                                border border-white/20 hover:scale-110 transition-all duration-300 
                                flex items-center justify-center {icon.bgColor}
                                hover:shadow-lg hover:border-white/40">
                        {@html icon.icon}
                      </div>
                    {/each}
                  {:else if integration.isImage}
                    <div class="flex -space-x-2 animate-slide-in" style="animation-delay: {i * 300}ms">
                      {#each integration.additionalIcons as additionalIcon}
                        <img 
                          src={additionalIcon} 
                          alt=""
                          class="w-10 h-10 object-contain rounded-full bg-white 
                                 backdrop-blur-sm p-1.5 border border-white/20
                                 hover:scale-110 hover:shadow-lg hover:border-white/40 
                                 transition-all duration-300"
                          loading="lazy"
                        />
                      {/each}
                    </div>
                  {:else}
                    {#each integration.additionalIcons as icon}
                      <div class="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm p-1.5 
                                border border-white/20 hover:scale-110 transition-transform duration-300 
                                flex items-center justify-center">
                        {#if icon.type === 'node'}
                          <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 1.85c-.27 0-.55.07-.78.2L3.6 6.5a1.5 1.5 0 0 0-.76 1.3v8.4c0 .54.3 1.03.76 1.3l7.62 4.45c.23.13.5.2.78.2s.55-.07.78-.2l7.62-4.45c.46-.27.76-.76.76-1.3V7.8c0-.54-.3-1.03-.76-1.3l-7.62-4.45a1.5 1.5 0 0 0-.78-.2Z"/>
                          </svg>
                        {:else if icon.type === 'python'}
                          <svg class="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#3776AB" d="M12 0C5.37 0 5.37 2.54 5.37 2.54v2.54h6.63v.85H3.39S0 5.93 0 12s3.39 6.07 3.39 6.07h2V13.4C5.39 9.43 8.86 9.43 8.86 9.43h5.88s3.15.04 3.15-3.04V3.04S18.15 0 12 0zm-3.39 1.7c.66 0 1.19.54 1.19 1.19s-.54 1.19-1.19 1.19S7.42 3.54 7.42 2.89s.54-1.19 1.19-1.19z"/>
                            <path fill="#FFC331" d="M12 24c6.63 0 6.63-2.54 6.63-2.54v-2.54h-6.63v-.85h8.61S24 18.07 24 12s-3.39-6.07-3.39-6.07h-2v4.67c0 3.97-3.47 3.97-3.47 3.97h-5.88s-3.15-.04-3.15 3.04v3.35S5.85 24 12 24zm3.39-1.7c-.66 0-1.19-.54-1.19-1.19s.54-1.19 1.19-1.19 1.19.54 1.19 1.19-.54 1.19-1.19 1.19z"/>
                          </svg>
                        {/if}
                      </div>
                    {/each}
                  {/if}
                </div>
              {/if}
            </div>

            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#32325d] 
                       group-hover:{integration.textColor} transition-all duration-300">
              {integration.name}
            </h3>
            <p class="text-sm sm:text-base text-[#32325d]/60 mb-4 sm:mb-6 leading-relaxed">
              {integration.description}
            </p>

            <!-- Features -->
            <div class="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
              {#each integration.features as feature}
                <div class="flex items-center gap-2 text-xs sm:text-sm text-[#32325d]/70">
                  <svg class="w-4 h-4 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  {feature}
                </div>
              {/each}
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-2 sm:gap-3 pt-4 border-t border-gray-100">
              <span class="text-2xl sm:text-3xl font-bold {integration.textColor} transition-all 
                           duration-300 group-hover:scale-110">
                {integration.stat}
              </span>
              <span class="text-xs sm:text-sm text-[#32325d]/50 font-medium">
                {integration.label}
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }

  .animate-fade-up {
    animation: fade-up 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-in {
    animation: slide-in 0.6s ease-out forwards;
  }

  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(1%, 1%) rotate(2deg); }
    50% { transform: translate(-1%, 2%) rotate(-1deg); }
    75% { transform: translate(-2%, -1%) rotate(1deg); }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }
</style>