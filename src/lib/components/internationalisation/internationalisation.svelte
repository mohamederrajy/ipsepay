<script>
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

<section class="py-16 md:py-24 relative overflow-hidden bg-gray-50" id="internationalisation">
    <!-- Modern gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent">
        <div class="absolute inset-0 opacity-10" 
             style="background-image: radial-gradient(#605bff 1px, transparent 1px);
                    background-size: 24px 24px;">
        </div>
    </div>

    <div class="container mx-auto px-4 md:px-6 mb-12 relative">
        <!-- Trust Badge -->
        <div class="flex justify-center mb-6">
            <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-3 py-1">
                <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-medium text-[#605bff]">Global Payment Solutions</span>
            </div>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-[#32325d]">
            <span class="text-[#605bff]">Internationalisation</span> and localisation
        </h2>
        <p class="text-center text-gray-600 max-w-3xl mx-auto">
            Our international Checkout solution supports an exhaustive list of <span class="text-[#605bff] font-medium">200+ currencies</span>, 
            multi-language interface with support for <span class="text-[#605bff] font-medium">25 languages</span> and geolocation adaptability.
        </p>
    </div>

    <!-- Flags Container -->
    <div class="flex flex-col gap-6">
        <!-- Row 1 - Right to Left -->
        <div class="flex animate-scroll-rtl">
            <div class="flex gap-3 animate-infinite-scroll-rtl">
                {#each flagsRow1 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-3 animate-infinite-scroll-rtl" aria-hidden="true">
                {#each flagsRow1 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 2 - Left to Right -->
        <div class="flex animate-scroll-ltr">
            <div class="flex gap-3 animate-infinite-scroll-ltr">
                {#each flagsRow2 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-3 animate-infinite-scroll-ltr" aria-hidden="true">
                {#each flagsRow2 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 3 - Right to Left -->
        <div class="flex animate-scroll-rtl">
            <div class="flex gap-3 animate-infinite-scroll-rtl">
                {#each flagsRow3 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-3 animate-infinite-scroll-rtl" aria-hidden="true">
                {#each flagsRow3 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 4 - Left to Right -->
        <div class="flex animate-scroll-ltr">
            <div class="flex gap-3 animate-infinite-scroll-ltr">
                {#each flagsRow4 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-3 animate-infinite-scroll-ltr" aria-hidden="true">
                {#each flagsRow4 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 5 - Right to Left -->
        <div class="flex animate-scroll-rtl">
            <div class="flex gap-3 animate-infinite-scroll-rtl">
                {#each flagsRow5 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-3 animate-infinite-scroll-rtl" aria-hidden="true">
                {#each flagsRow5 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl 
                                min-w-max shadow-lg hover:shadow-xl transition-all duration-300
                                border border-gray-100 hover:border-[#605bff]/20">
                        <span class="text-xl">{flag}</span>
                        <span class="text-[#32325d] font-medium">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff]/10 text-[#605bff] px-2 py-0.5 rounded-md text-sm font-medium">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes scroll-rtl {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }

    @keyframes scroll-ltr {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
    }

    .animate-scroll-rtl {
        display: flex;
        animation: scroll-rtl 60s linear infinite;
    }

    .animate-scroll-ltr {
        display: flex;
        animation: scroll-ltr 60s linear infinite;
    }

    .animate-scroll-rtl:hover,
    .animate-scroll-ltr:hover {
        animation-play-state: paused;
    }

    /* Add smooth transition for hover effects */
    .animate-scroll-rtl > div,
    .animate-scroll-ltr > div {
        transition: all 0.3s ease;
    }

    /* Add hover effect for cards */
    .animate-scroll-rtl > div > div:hover,
    .animate-scroll-ltr > div > div:hover {
        transform: translateY(-2px);
    }
</style>