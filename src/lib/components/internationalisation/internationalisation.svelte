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

<section class="py-16 md:py-24 relative overflow-hidden bg-[#f4f4f459]" id="internationalisation">
    <!-- Background dots pattern -->
    <div class="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#605bff"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
    </div>

    <div class="container mx-auto px-4 md:px-6 mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            <span class="text-[#605bff]">Internationalisation</span> and localisation
        </h2>
        <p class="text-center text-gray-600 max-w-3xl mx-auto">
            Our international Checkout solution supports an exhaustive list of <span class="text-[#605bff]">200+ currencies</span>, 
            multi-language interface with support for <span class="text-[#605bff]">25 languages</span> and geolocation adaptability.
        </p>
    </div>

    <!-- Flags Container -->
    <div class="flex flex-col gap-8">
        <!-- Row 1 - Right to Left -->
        <div class="flex animate-scroll-rtl">
            <div class="flex gap-4 animate-infinite-scroll-rtl">
                {#each flagsRow1 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-4 animate-infinite-scroll-rtl" aria-hidden="true">
                {#each flagsRow1 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 2 - Left to Right -->
        <div class="flex animate-scroll-ltr">
            <div class="flex gap-4 animate-infinite-scroll-ltr">
                {#each flagsRow2 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-4 animate-infinite-scroll-ltr" aria-hidden="true">
                {#each flagsRow2 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 3 - Right to Left -->
        <div class="flex animate-scroll-rtl">
            <div class="flex gap-4 animate-infinite-scroll-rtl">
                {#each flagsRow3 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-4 animate-infinite-scroll-rtl" aria-hidden="true">
                {#each flagsRow3 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 4 - Left to Right -->
        <div class="flex animate-scroll-ltr">
            <div class="flex gap-4 animate-infinite-scroll-ltr">
                {#each flagsRow4 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-4 animate-infinite-scroll-ltr" aria-hidden="true">
                {#each flagsRow4 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Row 5 - Right to Left -->
        <div class="flex animate-scroll-rtl">
            <div class="flex gap-4 animate-infinite-scroll-rtl">
                {#each flagsRow5 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="flex gap-4 animate-infinite-scroll-rtl" aria-hidden="true">
                {#each flagsRow5 as {country, flag, currency}}
                    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg min-w-max shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#605bff]">
                        <span class="text-2xl">{flag}</span>
                        <span class="text-gray-900">{country}</span>
                        {#if currency}
                            <span class="bg-[#605bff] text-white px-2 py-1 rounded-md text-sm">{currency}</span>
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
        animation: scroll-rtl 40s linear infinite;
    }

    .animate-scroll-ltr {
        display: flex;
        animation: scroll-ltr 40s linear infinite;
    }

    .animate-scroll-rtl:hover,
    .animate-scroll-ltr:hover {
        animation-play-state: paused;
    }
</style>