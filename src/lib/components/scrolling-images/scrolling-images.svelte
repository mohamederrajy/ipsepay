<!-- feature Section -->
<section class="xl:py-24 py-16">
    <div class="container"  data-aos-duration="1000">
      <div class="text-center">
        <div>
          
          <!-- Infinite scroll container -->
          <div class="relative overflow-hidden mt-7 w-[100vw] left-[50%] right-[50%] -mx-[50vw] h-16 md:h-20">
            <style>
              @keyframes slideLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }

              @keyframes slideRight {
                0% { transform: translateX(100%); }
                100% { transform: translateX(0); }
              }

              .logo-slide-left {
                animation: slideLeft 15s linear infinite;
              }

              .logo-slide-right {
                animation: slideRight 15s linear infinite;
              }

              .logo-container:hover .logo-slide-left,
              .logo-container:hover .logo-slide-right {
                animation-play-state: paused;
              }

              .logo-image {
                width: 80px;
                height: 32px;
                object-fit: contain;
              }

              @media (min-width: 768px) {
                .logo-image {
                  width: 120px;
                  height: 48px;
                }
              }
            </style>

            <div class="logo-container">
              <!-- First set sliding left -->
              <div class="absolute inset-0 flex gap-12 md:gap-16 mx-8 md:mx-16 logo-slide-left items-center">
                <div class="flex-shrink-0">
                  <img src="/images/brands/woocommerce.png" class="logo-image" alt="woocommerce" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/Shopy.png" class="logo-image" alt="Shopify" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/pay-payl.png" class="logo-image" alt="PayPal" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/vss.png" class="logo-image" alt="visa" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/mscrad.png" class="logo-image" alt="MasterCard" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/usdt.png" class="logo-image" alt="usdt" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/G-pay.png" class="logo-image" alt="google pay" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/A-pay.png" class="logo-image" alt="apple pay" />
                </div>
              </div>

              <!-- Second set sliding from right -->
              <div class="absolute inset-0 flex gap-12 md:gap-16 mx-8 md:mx-16 logo-slide-right items-center">
                <div class="flex-shrink-0">
                  <img src="/images/brands/woocommerce.png" class="logo-image" alt="woocommerce" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/Shopy.png" class="logo-image" alt="Shopify" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/pay-payl.png" class="logo-image" alt="PayPal" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/vss.png" class="logo-image" alt="visa" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/mscrad.png" class="logo-image" alt="MasterCard" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/usdt.png" class="logo-image" alt="usdt" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/G-pay.png" class="logo-image" alt="google pay" />
                </div>
                <div class="flex-shrink-0">
                  <img src="/images/brands/A-pay.png" class="logo-image" alt="apple pay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>