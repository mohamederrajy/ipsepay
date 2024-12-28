<script>
  let routeTd = window.location.pathname;
</script>

<!-- Rest of your component code -->
<section class="bg-gradient-to-t from-slate-500/10 relative" 
         style="background-image: url('/images/hero/hero-s-bg.png'); 
                background-size: cover; 
                background-position: center; 
                background-repeat: no-repeat;">
  <div class="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
  <section class="relative pt-44 pb-36">
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
        <div class="order-2 lg:order-1">
          <div class="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
            <h1 class="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
              Empowering High-Risk Businesses with Smart               <span class="relative z-0 after:bg-[#b2b0fb] -200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">Payment Solution</span>
            </h1>
            <p class="text-gray-500">Experience seamless transactions with IpsePay, the ultimate payment gateway designed for businesses of all sizes. Secure, reliable, and lightning-fast, IpsePay simplifies payments so you can focus on what matters most—growing your business.</p>
            <div class="flex gap-4 mt-7">
              <button class="flex items-center">
                <a class="bg-primary text-white rounded-md hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4" href="/account/signup" class:active={routeTd === "/account/signup"}>Get Started</a>
              </button>
              <button class="flex items-center">
                <a class="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4" href="/account/login" class:active={routeTd === "/account/login"}>Login </a>
              </button>
              
            </div>
            <!-- Payment Method Icons -->
<div class="flex items-center gap-4 mt-4">
  <!-- Common styles for all payment icons -->
  <style>
    .payment-icon {
      width: 42px;
      height: 30px;
    }
  </style>

  <!-- Visa -->
  <div class="bg-white p-2 rounded-md shadow-sm payment-icon flex items-center justify-center">
    <svg class="w-12" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M293.2 348.7L316.6 145.6H352.9L329.5 348.7H293.2Z" fill="#00579F"/>
      <path d="M479.4 152.4C471.8 149.9 459.5 147.1 444.3 147.1C391.3 147.1 353.9 174.6 353.7 213.2C353.4 241.9 380.8 257.7 401.6 267.1C422.9 276.7 429.5 282.8 429.5 291.2C429.4 304.1 412.6 310 396.9 310C375.4 310 363.8 306.6 345.9 299.3L339.2 296.4L332 337.5C341.1 341.4 358.5 344.9 376.7 345.1C432.9 345.1 469.7 317.9 470 277.3C470.1 254.8 455.6 237.7 422.7 223.5C402.2 214.2 389.8 208 389.9 197.9C389.9 188.8 400.6 182.7 422.6 182.7C440.9 182.5 454.2 186 464.4 189.7L469 191.7L476.2 151.8L479.4 152.4Z" fill="#00579F"/>
      <path d="M615.3 145.6H589.8C577.4 145.6 568.2 148.6 562.8 161.8L477.2 348.7H524.3C524.3 348.7 534.1 321.9 536.2 316.5C542.3 316.5 587.4 316.6 595.1 316.6C596.7 323.4 602 348.7 602 348.7H644L615.3 145.6ZM550.6 283.3C555 272 571.8 228.7 571.8 228.7C571.5 229.2 576.1 217.5 578.6 210.5L582.1 227.2C582.1 227.2 592.4 275.8 594.6 283.3H550.6Z" fill="#00579F"/>
      <path d="M243.5 145.6L199.2 280.4L194.7 260.2C186.1 231.4 156.3 200.4 123.3 184.7L164.1 348.5H211.4L289.6 145.6H243.5Z" fill="#00579F"/>
      <path d="M131.2 145.6H58.5L57.9 148.8C111.9 163.4 147.4 199.4 162.6 241.3L146.1 161.9C143.8 149.3 138.1 146 131.2 145.6Z" fill="#FAA61A"/>
    </svg>
  </div>

  <!-- Mastercard -->
  <div class="bg-white p-2 rounded-md shadow-sm payment-icon flex items-center justify-center">
    <svg class="w-12" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M490 250C490 337.32 419.32 408 332 408C244.68 408 174 337.32 174 250C174 162.68 244.68 92 332 92C419.32 92 490 162.68 490 250Z" fill="#F79E1B"/>
      <path d="M606 250C606 337.32 535.32 408 448 408C360.68 408 290 337.32 290 250C290 162.68 360.68 92 448 92C535.32 92 606 162.68 606 250Z" fill="#EB001B"/>
      <path d="M448 92C535.32 92 606 162.68 606 250C606 337.32 535.32 408 448 408C360.68 408 290 337.32 290 250C290 162.68 360.68 92 448 92ZM448 112C371.726 112 310 173.726 310 250C310 326.274 371.726 388 448 388C524.274 388 586 326.274 586 250C586 173.726 524.274 112 448 112Z" fill="#FF5F00"/>
    </svg>
  </div>

  <!-- American Express -->
  <div class="bg-white p-2 rounded-md shadow-sm payment-icon flex items-center justify-center">
    <svg class="w-12" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M740 500H40C17.909 500 0 482.091 0 460V40C0 17.909 17.909 0 40 0H740C762.091 0 780 17.909 780 40V460C780 482.091 762.091 500 740 500Z" fill="#006FCF"/>
      <path d="M621.199 249.975L651.334 297.475H583.533L621.199 249.975ZM650.667 203.575H583.533L621.199 155.975L650.667 203.575ZM583.533 203.575H516.399L583.533 107.975V203.575ZM516.399 203.575H449.266L516.399 107.975V203.575ZM449.266 203.575H382.133L449.266 107.975V203.575ZM382.133 203.575H315L382.133 107.975V203.575Z" fill="white"/>
      <path d="M315 203.575H247.867L315 107.975V203.575ZM247.867 203.575H180.733L247.867 107.975V203.575ZM180.733 203.575H128.666L180.733 137.975V203.575Z" fill="white"/>
      <path d="M128.666 297.475H180.733V363.075L128.666 297.475ZM180.733 297.475H247.867V393.075L180.733 297.475ZM247.867 297.475H315V393.075L247.867 297.475ZM315 297.475H382.133V393.075L315 297.475ZM382.133 297.475H449.266V393.075L382.133 297.475ZM449.266 297.475H516.399V393.075L449.266 297.475ZM516.399 297.475H583.533V393.075L516.399 297.475Z" fill="white"/>
    </svg>
  </div>

  <!-- PayPal -->
  <div class="bg-white p-2 rounded-md shadow-sm payment-icon flex items-center justify-center">
    <svg class="w-12" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M527.202 157.456C527.202 205.159 488.157 244.204 440.454 244.204H347.546C299.843 244.204 260.798 205.159 260.798 157.456C260.798 109.753 299.843 70.708 347.546 70.708H440.454C488.157 70.708 527.202 109.753 527.202 157.456Z" fill="#003087"/>
      <path d="M527.202 342.544C527.202 390.247 488.157 429.292 440.454 429.292H347.546C299.843 429.292 260.798 390.247 260.798 342.544C260.798 294.841 299.843 255.796 347.546 255.796H440.454C488.157 255.796 527.202 294.841 527.202 342.544Z" fill="#009CDE"/>
    </svg>
  </div>
</div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="relative">
            <div class="hidden sm:block">
             
            </div>

            <div id="swiper_one" class="swiper 2xl:w-[140%]" data-aos="fade-left" data-aos-duration="1000">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="absolute inset-0 flex items-center justify-center">
                    
                  </div>
                  <img src="/images/hero/py-ima.png" alt="saas1" class="w-full h-full rounded-md" />
                </div>

                <div class="swiper-slide">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <a href="" class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg class="h-5 w-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                      </svg>
                    </a>
                  </div>
                  <img src="/images/hero/saas2.png" alt="saas2" class="w-full h-full rounded-md" />
                </div>

                <div class="swiper-slide">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <a href="" class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg class="h-5 w-5 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                      </svg>
                    </a>
                  </div>
                  <img src="/images/hero/saas3.png" alt="saas3" class="w-full h-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="absolute bottom-0 inset-x-0 hidden sm:block">
    <img src="/images/shapes/white-wave.svg" alt="white-wave-svg" class="w-full -scale-x-100 -scale-y-100" />
  </div>
</section>

<style>
  /* Optional: Add any additional styling for the background */
  section {
    position: relative;
    isolation: isolate;
  }
</style>
