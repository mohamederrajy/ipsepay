<script lang="ts">
  import {page} from "$app/stores";
  $: routeTd = $page.route.id;
</script>

<section class="py-16 md:py-24 relative overflow-hidden bg-[#f4f4f459]" id="payment-methods">
    <!-- Background dots pattern -->
    <div class="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#605bff"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
    </div>

    <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12">
            <!-- Left content -->
            <div class="w-full lg:w-1/2">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#32325d]">
                    Accept All Payment Methods
                    <span class="text-[#605bff]">To Grow Your Business Globally</span>
                </h2>
                
                <p class="text-gray-600 mb-8 leading-relaxed">
                    Ipsepay enables your business to accept payments from customers worldwide through multiple payment methods including credit cards, digital wallets, and cryptocurrencies. Our platform supports all major payment providers to ensure you never miss a sale.
                </p>
                
                <p class="text-gray-600 mb-8 leading-relaxed">
                    From traditional payment methods to the latest digital solutions, we've got you covered. Integrate once and access a comprehensive suite of payment options that cater to your customers' preferences, wherever they are.
                </p>

                <div class="flex flex-wrap gap-4">
                    <a class=" text-white inline-flex items-center px-6 py-3 bg-[#605bff] text-white font-semibold rounded-lg hover:bg-[#605bff]/90 transition-colors" href="/account/signup" class:active={routeTd === "/account/signup"}>
                        Start Accepting Payments →
                    </a>
                    <a class=" text- inline-flex items-center px-6 py-3 text-[#605bff] font-semibold rounded-lg hover:bg-[#605bff]/5 transition-colors" href="/contact" class:active={routeTd === "/contact"}>
                        Contact Us →
                    </a>
                </div>
            </div>

            <!-- Right side - Scattered partner logos -->
            <div class="w-full lg:w-1/2 relative h-[600px] hidden lg:block">
                <!-- A-pay -->
                <div class="absolute left-0 top-0">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/A-pay.png" alt="Apple Pay" class="h-8 w-auto"/>
                    </div>
                </div>
                
                <!-- Maestro -->
                <div class="absolute right-20 top-10">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/maestro.png" alt="Maestro" class="h-8 w-auto"/>
                    </div>
                </div>

                <!-- G-pay -->
                <div class="absolute left-20 top-32">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/G-pay.png" alt="Google Pay" class="h-8 w-auto"/>
                    </div>
                </div>

                <!-- Mastercard -->
                <div class="absolute right-10 top-40">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/mscrad.png" alt="Mastercard" class="h-8 w-auto"/>
                    </div>
                </div>

                <!-- Visa -->
                <div class="absolute left-10 top-64">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/vss.png" alt="Visa" class="h-8 w-auto"/>
                    </div>
                </div>

                <!-- PayPal -->
                <div class="absolute right-20 top-72">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/pay-payl.png" alt="PayPal" class="h-8 w-auto"/>
                    </div>
                </div>

                <!-- USDT -->
                <div class="absolute left-0 bottom-20">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/usdt.png" alt="USDT" class="h-8 w-auto"/>
                    </div>
                </div>

                <!-- Amex -->
                <div class="absolute right-32 bottom-10">
                    <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <img src="/images/brands/amex.png" alt="American Express" class="h-8 w-auto"/>
                    </div>
                </div>
            </div>

            <!-- Mobile view grid -->
            <div class="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/A-pay.png" alt="Apple Pay" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/maestro.png" alt="Maestro" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/G-pay.png" alt="Google Pay" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/mscrad.png" alt="Mastercard" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/vss.png" alt="Visa" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/pay-payl.png" alt="PayPal" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/usdt.png" alt="USDT" class="h-8 w-auto"/>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/brands/amex.png" alt="American Express" class="h-8 w-auto"/>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .text-white{
        color: #fff;
    }
    img {
        transition: transform 0.3s ease;
    }
    
    img:hover {
        transform: translateY(-5px);
    }
</style>