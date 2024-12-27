<style>
    /* Force white color for 100K plan text */
    .text-white {
        color: #fff !important;
    }
    
    :global(.bg-\[\#605bff\]) h4,
    :global(.bg-\[\#605bff\]) span {
        color: #fff !important;
    }

    a:hover {
        transform: translateY(-1px);
    }

    .important-button {
        color: #605bff !important;
    }
    
    .important-button svg {
        color: #605bff !important;
    }

    .white-button span,
    .white-button svg {
        color: #605bff !important;
    }

    /* Add custom shadow for cards */
    div[class*="bg-white"], div[class*="bg-[#605bff]"] {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06), 
                    0 1px 2px -1px rgba(0, 0, 0, 0.04);
    }

    /* Enhanced hover effect */
    div[class*="bg-white"]:hover, div[class*="bg-[#605bff]"]:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 
                    0 2px 4px -1px rgba(0, 0, 0, 0.04);
        transform: translateY(-4px);
    }
</style>

<section class="py-16 md:py-24 relative overflow-hidden bg-[#f4f4f459]" id="Pricing">
    <!-- Background dots pattern -->
    <div class="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#3935d2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
    </div>

    <div class="container mx-auto px-4 md:px-6">
        <!-- Header -->
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold text-[#32325d] mb-4">Simple, transparent pricing</h2>
            <p class="text-gray-600">Choose the plan that's right for your business</p>
        </div>

        <!-- Pricing Cards Container -->
        <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-6 mx-auto overflow-x-auto mb-16">
            <!-- 10K Plan -->
            <div class="bg-white rounded-2xl p-8 shadow-md border border-gray-200 
                        hover:shadow-lg hover:-translate-y-1 
                        transition-all duration-200 ease-in-out 
                        w-full md:w-[340px] mb-8 md:mb-0">
                <h3 class="text-[#605bff] text-2xl font-bold mb-4">10k \199$</h3>
                <div class="border-t border-gray-100 my-4"></div>
                
                <div class="space-y-6">
                    <div>
                        <h4 class="font-semibold mb-3">Features</h4>
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>Up to 10,000 transactions</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3">Transaction fees</h4>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$1 for transactions below $30</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$2 for transactions up to $60</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$3 for transactions up to $100</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3">Withdrawal fees</h4>
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>3% on each withdrawal</span>
                        </div>
                    </div>
                </div>

                <a 
                  href="/account/signup" 
                  class:active={routeId === "/account/signup"}
                  class="inline-flex items-center justify-center w-full mt-8 bg-[#605bff] text-white font-semibold rounded-lg py-3.5 px-6 hover:bg-[#605bff]/90 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Signup now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
            </div>

            <!-- 25K Plan -->
            <div class="bg-white rounded-2xl p-8 shadow-md border border-gray-200 
                        hover:shadow-lg hover:-translate-y-1 
                        transition-all duration-200 ease-in-out 
                        w-full md:w-[340px] mb-8 md:mb-0">
                <h3 class="text-[#605bff] text-2xl font-bold mb-4">25K \299$</h3>
                <div class="border-t border-gray-100 my-4"></div>
                
                <div class="space-y-6">
                    <div>
                        <h4 class="font-semibold mb-3">Features</h4>
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>Up to 25,000 transactions</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3">Transaction fees</h4>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$1 for transactions below $30</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$2 for transactions up to $60</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$3 for transactions up to $100</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3">Withdrawal fees</h4>
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>3% on each withdrawal</span>
                        </div>
                    </div>
                </div>

                <a 
                  href="/account/signup" 
                  class:active={routeId === "/account/signup"}
                  class="inline-flex items-center justify-center w-full mt-8 bg-[#605bff] text-white font-semibold rounded-lg py-3.5 px-6 hover:bg-[#605bff]/90 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Signup now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
            </div>

            <!-- 50K Plan -->
            <div class="bg-white rounded-2xl p-8 shadow-md border border-gray-200 
                        hover:shadow-lg hover:-translate-y-1 
                        transition-all duration-200 ease-in-out 
                        w-full md:w-[340px] mb-8 md:mb-0">
                <h3 class="text-[#605bff] text-2xl font-bold mb-4">50k \399$</h3>
                <div class="border-t border-gray-100 my-4"></div>
                
                <div class="space-y-6">
                    <div>
                        <h4 class="font-semibold mb-3">Features</h4>
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>Up to 50,000 transactions</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3">Transaction fees</h4>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$1 for transactions below $30</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$2 for transactions up to $60</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$3 for transactions up to $100</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3">Withdrawal fees</h4>
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-[#605bff]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>3% on each withdrawal</span>
                        </div>
                    </div>
                </div>

                <div class="relative z-10">
                    <a 
                      href="/account/signup" 
                      class:active={routeId === "/account/signup"}
                      class="inline-flex items-center justify-center w-full mt-8 bg-[#605bff] text-white font-semibold rounded-lg py-3.5 px-6 hover:bg-[#605bff]/90 transition-all duration-300 shadow-sm hover:shadow-md relative z-10"
                    >
                      <span>Signup now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                </div>
            </div>

            <!-- 100K Plan -->
            <div class="bg-[#605bff] rounded-2xl p-8 shadow-md border border-white/10 
                        hover:shadow-lg hover:-translate-y-1 
                        transition-all duration-200 ease-in-out 
                        w-[340px] mb-8 md:mb-0">
                <h3 class="text-white text-2xl font-bold mb-4">100k \499$</h3>
                <div class="border-t border-white/20 my-4"></div>
                
                <div class="space-y-6">
                    <div>
                        <h4 class=" text-white font-semibold mb-3 text-[#fff] ">Features</h4>
                        <div class="flex items-center gap-2 text-[#fff]">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>Up to 100,000 transactions</span>
                        </div>
                    </div>

                    <div>
                        <h4 class=" text-white font-semibold mb-3 text-[#fff]">Transaction fees</h4>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 text-[#fff]">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$1 for transactions below $30</span>
                            </div>
                            <div class="flex items-center gap-2 text-[#fff]">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$2 for transactions up to $60</span>
                            </div>
                            <div class="flex items-center gap-2 text-[#fff]">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                                <span>$3 for transactions up to $100</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-white font-semibold mb-3 text-[#fff]">Withdrawal fees</h4>
                        <div class="flex items-center gap-2 text-[#fff]">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                            <span>3% on each withdrawal</span>
                        </div>
                    </div>
                </div>

                <div class="relative z-10">
                    <a 
                      href="/account/signup" 
                      class:active={routeId === "/account/signup"}
                      class="white-button inline-flex items-center justify-center w-full mt-8 bg-white rounded-lg py-3.5 px-6 hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md relative z-10"
                    >
                      <span class="text-[#605bff] font-semibold">Signup now</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-[#605bff]" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
  import { page } from '$app/stores';
  $: routeId = $page.url.pathname;
</script>