<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;
</script>

<section class="py-16 md:py-24 relative overflow-hidden bg-[#f4f4f459]">
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
        <div class="flex flex-col lg:flex-row items-center gap-12">
            <!-- Left Image -->
            <div class="w-full lg:w-1/2 flex justify-center items-center">
                <div class="relative w-full max-w-[500px]">
                    <img 
                        src="/images/imgooo.png" 
                        alt="Dashboard Interface" 
                        class="w-full h-auto"
                        style="mix-blend-mode: multiply;"
                    />
                </div>
            </div>

            <!-- Right content -->
            <div class="w-full lg:w-1/2">
                <span class="text-[#3935d2] text-main font-semibold mb-4 block">Smart Dashboard</span>
                
                <h2 class="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#32325d]">
                    Manage your business with our intuitive dashboard
                </h2>
                
                <p class="text-gray-600 mb-8 leading-relaxed">
                    Get a complete overview of your business performance, track payments, and manage customers all in one place. Our dashboard provides real-time insights and analytics to help you make informed decisions for your business growth and success.
                </p>
                
                <div class="flex flex-wrap gap-4 relative z-10">
                    <a 
                       class="inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-semibold rounded-lg hover:bg-[#3935d2]/90 transition-colors pointer-events-auto" href="/account/signup" class:active={routeTd === "/account/signup"}>
                        Start now
                    </a>
                    <a href="#Pricing" 
                       class="inline-flex items-center px-6 py-3 text-[#3935d2] font-semibold hover:bg-gray-50 rounded-lg transition-colors pointer-events-auto">
                        Reference pricing
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .text-white {
        color: #fff; 
    }
    .text-main {
        color: #3935d2; 
    }
    img {
        transition: transform 0.3s ease;
    }
    
    img:hover {
        transform: translateY(-5px);
    }
</style>