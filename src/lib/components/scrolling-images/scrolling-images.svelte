<!-- feature Section -->
<section class="xl:py-12 py-8">
    <div class="container" data-aos-duration="1000">
      <div class="text-center">
        <div>
          <div class="relative overflow-hidden mt-2 w-[100vw] left-[50%] right-[50%] -mx-[50vw] h-16">
            <style>
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }

              .logo-image {
                width: 90px;
                height: 30px;
                object-fit: contain;
                display: block;
                margin: 0 auto;
                transition: all 0.3s ease;
              }

              .logo-image:hover {
                transform: translateY(-3px);
                filter: brightness(1.1);
              }

              .scroll-container {
                animation: scroll 25s linear infinite;
                display: flex;
                gap: 3rem;
                align-items: center;
              }

              .scroll-container:hover {
                animation-play-state: paused;
              }

              @media (min-width: 768px) {
                .logo-image {
                  width: 100px;
                  height: 35px;
                }
              }
            </style>

            <div class="flex overflow-hidden">
              <!-- First set of logos -->
              <div class="scroll-container flex-shrink-0">
                <img src="/images/brands/woocommerce.png" class="logo-image" alt="woocommerce" />
                <img src="/images/brands/Shopy.png" class="logo-image" alt="Shopify" />
                <img src="/images/brands/pay-payl.png" class="logo-image" alt="PayPal" />
                <img src="/images/brands/vss.png" class="logo-image" alt="visa" />
                <img src="/images/brands/mscrad.png" class="logo-image" alt="MasterCard" />
                <img src="/images/brands/usdt.png" class="logo-image" alt="usdt" />
                <img src="/images/brands/G-pay.png" class="logo-image" alt="google pay" />
                <img src="/images/brands/A-pay.png" class="logo-image" alt="apple pay" />
              </div>

              <!-- Duplicate set for seamless loop -->
              <div class="scroll-container flex-shrink-0">
                <img src="/images/brands/woocommerce.png" class="logo-image" alt="woocommerce" />
                <img src="/images/brands/Shopy.png" class="logo-image" alt="Shopify" />
                <img src="/images/brands/pay-payl.png" class="logo-image" alt="PayPal" />
                <img src="/images/brands/vss.png" class="logo-image" alt="visa" />
                <img src="/images/brands/mscrad.png" class="logo-image" alt="MasterCard" />
                <img src="/images/brands/usdt.png" class="logo-image" alt="usdt" />
                <img src="/images/brands/G-pay.png" class="logo-image" alt="google pay" />
                <img src="/images/brands/A-pay.png" class="logo-image" alt="apple pay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>