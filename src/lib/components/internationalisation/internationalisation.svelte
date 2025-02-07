<script lang="ts">
    import { onMount } from 'svelte';
    
    let isVisible = false;
    onMount(() => {
        isVisible = true;
    });

    const flagsRow1 = [
        { country: 'Norway', flag: '🇳🇴' },
        { country: 'United Kingdom', flag: '🇬🇧', currency: 'GBP' },
        { country: 'Portugal', flag: '🇵🇹' },
        { country: 'Australia', flag: '🇦🇺' },
        { country: 'South Korea', flag: '🇰🇷', currency: 'KRW' },
        { country: 'Turkey', flag: '🇹🇷' },
        { country: 'Israel', flag: '🇮🇱' },
        { country: 'Austria', flag: '🇦🇹' }
    ];

    const flagsRow2 = [
        { country: 'Hungary', flag: '🇭🇺' },
        { country: 'Denmark', flag: '🇩🇰' },
        { country: 'UAE', flag: '🇦🇪' },
        { country: 'England', flag: '🇬🇧' },
        { country: 'Hong Kong', flag: '🇭🇰' },
        { country: 'Armenia', flag: '🇦🇲' },
        { country: 'European Union', flag: '🇪🇺', currency: 'EUR' },
        { country: 'Japan', flag: '🇯🇵' }
    ];

    const flagsRow3 = [
        { country: 'China', flag: '🇨🇳' },
        { country: 'Greece', flag: '🇬🇷' },
        { country: 'Sweden', flag: '🇸🇪' },
        { country: 'Luxembourg', flag: '🇱🇺' },
        { country: 'Ukraine', flag: '🇺🇦', currency: 'UAH' },
        { country: 'Bulgaria', flag: '🇧🇬' },
        { country: 'India', flag: '🇮🇳' },
        { country: 'Estonia', flag: '🇪🇪' }
    ];

    const flagsRow4 = [
        { country: 'Italy', flag: '🇮🇹' },
        { country: 'Canada', flag: '🇨🇦' },
        { country: 'Finland', flag: '🇫🇮' },
        { country: 'Argentina', flag: '🇦🇷' },
        { country: 'United States', flag: '🇺🇸', currency: 'USD' },
        { country: 'Belgium', flag: '🇧🇪' },
        { country: 'Croatia', flag: '🇭🇷' },
        { country: 'Georgia', flag: '🇬🇪' }
    ];

    const flagsRow5 = [
        { country: 'France', flag: '🇫🇷' },
        { country: 'Germany', flag: '🇩🇪' },
        { country: 'Spain', flag: '🇪🇸' },
        { country: 'United States', flag: '🇺🇸' },
        { country: 'Japan', flag: '🇯🇵', currency: 'JPY' },
        { country: 'South Korea', flag: '🇰🇷' },
        { country: 'Ireland', flag: '🇮🇪' },
        { country: 'Switzerland', flag: '🇨🇭' }
    ];
</script>

<section class="relative overflow-hidden py-12 sm:py-16 lg:py-20 w-screen -mx-[calc((100vw-100%)/2)]" 
         id="internationalisation">
    <!-- Enhanced Modern Background -->
    <div class="absolute inset-0">
        <!-- Refined base gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa]/80 to-[#f8f8f8]"></div>
        
        <!-- Subtle grid pattern -->
        <div class="absolute inset-0"
             style="background-image: 
                linear-gradient(rgba(96, 91, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(96, 91, 255, 0.02) 1px, transparent 1px);
              background-size: 40px 40px;">
        </div>

        <!-- Enhanced floating elements -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Large gradient sphere -->
            <div class="absolute -top-1/4 -right-1/4 w-1/2 h-1/2
                      bg-gradient-to-br from-[#605bff]/10 via-[#605bff]/5 to-transparent 
                      blur-3xl animate-float-slow rounded-full"
                 style="animation-duration: 20s;">
            </div>
            
            <!-- Complementary sphere -->
            <div class="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2
                      bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/5 to-transparent 
                      blur-3xl animate-float-slow rounded-full"
                 style="animation-duration: 25s; animation-delay: -10s;">
            </div>

            <!-- Subtle accent elements -->
            <div class="absolute top-1/3 left-1/4 w-32 h-32
                      bg-gradient-to-r from-[#605bff]/10 to-transparent 
                      blur-2xl animate-pulse rounded-full"
                 style="animation-duration: 8s;">
            </div>
            <div class="absolute bottom-1/3 right-1/4 w-24 h-24
                      bg-gradient-to-l from-[#32325d]/10 to-transparent 
                      blur-2xl animate-pulse rounded-full"
                 style="animation-duration: 10s; animation-delay: -2s;">
            </div>
        </div>

        <!-- Refined gradient overlays for flag rows -->
        <div class="absolute inset-x-0 top-0 h-32 
                    bg-gradient-to-b from-[#fafafa] to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-32 
                    bg-gradient-to-t from-[#fafafa] to-transparent"></div>
    </div>

    <div class="relative mx-auto transition-all duration-1000 
                {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
        <!-- Responsive Header -->
        <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <div class="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/90 
                        p-1 sm:p-1.5 pr-3 sm:pr-6 backdrop-blur-xl border border-white/20 
                        shadow-xl hover:shadow-2xl transition-all duration-300 
                        mb-6 sm:mb-8 animate-float">
                <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                           px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium 
                           text-white relative overflow-hidden">
                    <span class="relative z-10">Global</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                              to-transparent animate-shimmer"></div>
                </span>
                <span class="text-xs sm:text-sm font-medium text-[#32325d]">Payment Solutions</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-8 
                       text-[#32325d] px-4">
                <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                           text-transparent">
                    Internationalisation
                </span> and Localisation
            </h2>
            
            <p class="text-[#32325d]/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Our international Checkout solution supports an exhaustive list of 
                <span class="text-[#605bff] font-medium">200+ currencies</span>, 
                multi-language interface with support for 
                <span class="text-[#605bff] font-medium">25 languages</span> 
                and geolocation adaptability.
            </p>
        </div>

        <!-- Responsive Flags Container -->
        <div class="flex flex-col gap-2 sm:gap-4">
            <!-- Flag rows - Updated for mobile -->
            {#each [flagsRow1, flagsRow2, flagsRow3, flagsRow4, flagsRow5] as flags, index}
                <div class="flex overflow-hidden group relative">
                    <div class="absolute inset-y-0 left-0 w-12 sm:w-24 
                                bg-gradient-to-r from-[#fafafa] to-transparent z-10"></div>
                    <div class="absolute inset-y-0 right-0 w-12 sm:w-24 
                                bg-gradient-to-l from-[#fafafa] to-transparent z-10"></div>
                    <div class="flex gap-2 sm:gap-4 
                                {index % 2 === 0 ? 'animate-scroll-rtl' : 'animate-scroll-ltr'} 
                                group-hover:[animation-play-state:paused]">
                        {#each [...flags, ...flags] as {country, flag, currency}}
                            <div class="flex items-center gap-1.5 sm:gap-2 bg-white/95 
                                      backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-2.5 
                                      rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl 
                                      transition-all duration-300 border border-white/20 
                                      hover:border-[#605bff]/20 hover:-translate-y-1">
                                <span class="text-xl sm:text-2xl">{flag}</span>
                                <span class="text-[#32325d] font-medium text-xs sm:text-sm 
                                           whitespace-nowrap">{country}</span>
                                {#if currency}
                                    <span class="bg-[#605bff]/10 text-[#605bff] 
                                               px-1.5 sm:px-2 py-0.5 rounded-full 
                                               text-[10px] sm:text-xs font-medium">
                                        {currency}
                                    </span>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes scroll-rtl {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-50% - 0.5rem)); }
    }

    @keyframes scroll-ltr {
        from { transform: translateX(calc(-50% - 0.5rem)); }
        to { transform: translateX(0); }
    }

    @media (min-width: 640px) {
        @keyframes scroll-rtl {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 1rem)); }
        }

        @keyframes scroll-ltr {
            from { transform: translateX(calc(-50% - 1rem)); }
            to { transform: translateX(0); }
        }
    }

    .animate-scroll-rtl {
        animation: scroll-rtl 30s linear infinite;
        will-change: transform;
    }

    .animate-scroll-ltr {
        animation: scroll-ltr 30s linear infinite;
        will-change: transform;
    }

    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .animate-shimmer {
        animation: shimmer 2s infinite;
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float-slow {
        0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1); 
        }
        25% { 
            transform: translate(2%, 2%) rotate(1deg) scale(1.01); 
        }
        50% { 
            transform: translate(-1%, 3%) rotate(-1deg) scale(0.99); 
        }
        75% { 
            transform: translate(-2%, -1%) rotate(0.5deg) scale(1.01); 
        }
    }

    .animate-float-slow {
        animation: float-slow 20s ease-in-out infinite;
    }
</style>