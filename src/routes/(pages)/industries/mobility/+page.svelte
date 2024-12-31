<!-- Hero Section -->

    <script>
  import Hero from "$lib/components/heros/mobility-hero.svelte";
    


    </script>
<!-- Features Section -->

    <Hero/>

<section class="py-12 lg:py-20 overflow-hidden">
    <div class="container px-4 sm:px-6">
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 lg:mb-16">
        <h2 class="text-[1.75rem] lg:text-[2rem] font-medium text-[#32325d] leading-tight mb-4">
          Streamline your mobility payments
        </h2>
        <p class="text-lg lg:text-xl text-gray-600">
          One platform for all your transportation payment needs.
        </p>
      </div>
  
      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Feature 1: Customer Service -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-6">
            <i class="fa-solid fa-headset text-[#605bff] text-xl"></i>
          </div>
          <h3 class="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
            Better customer service
          </h3>
          <p class="text-gray-600">
            In the mobility industry, riders and drivers are equally important. Make payments convenient in-app, and payout for drivers seamless.
          </p>
        </div>
  
        <!-- Feature 2: Industry Solutions -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-6">
            <i class="fa-solid fa-car-side text-[#605bff] text-xl"></i>
          </div>
          <h3 class="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
            Suitable for the entire industry
          </h3>
          <p class="text-gray-600">
            Mobility can apply to all kinds of transportation. Bikes, buses, trains, planes and everything in between. We offer consolidation of payments across sales channels, and faster payouts.
          </p>
        </div>
  
        <!-- Feature 3: Platform -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-6">
            <i class="fa-solid fa-layer-group text-[#605bff] text-xl"></i>
          </div>
          <h3 class="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
            One platform
          </h3>
          <p class="text-gray-600">
            Cut down on fees, contracts, and partners. Focus on both scalability and your customers with one payment solution.
          </p>
        </div>
  
        <!-- Feature 4: Data Analytics -->
        <div>
          <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-6">
            <i class="fa-solid fa-chart-column text-[#605bff] text-xl"></i>
          </div>
          <h3 class="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
            Data you can use
          </h3>
          <p class="text-gray-600">
            Understand customers and learn where your business is popular, to choose where to add stops or vehicles.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Tailored Section -->
<section class="py-12 lg:py-20 overflow-hidden  bg-[#f7f7f8]">
    <div class="container px-4 sm:px-6">
      <!-- Section Title -->
      <h2 class="text-[2rem] lg:text-[2rem] font-medium text-[#32325d] leading-tight text-center mb-16">
        Tailored to the mobility industry
      </h2>
  
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <!-- Left Content -->
        <div>
          <h3 class="text-[1.5rem] lg:text-[1.7rem] font-medium text-gray-900 leading-tight mb-6">
            The road is long and far-reaching
          </h3>
          <p class="text-lg lg:text-xl text-gray-600 mb-8">
            When you launch in new cities, integrate with us and worry less about managing multiple providers and local acquirers.
          </p>
          
          <!-- Feature List -->
          <ul class="space-y-4">
            <li class="flex items-center text-gray-600">
              <i class="fa-solid fa-check text-[#605bff] mr-3"></i>
              Expand to new markets with local payment methods
            </li>
            <li class="flex items-center text-gray-600">
              <i class="fa-solid fa-check text-[#605bff] mr-3"></i>
              Manage all your payments from a single platform
            </li>
            <li class="flex items-center text-gray-600">
              <i class="fa-solid fa-check text-[#605bff] mr-3"></i>
              Get insights into customer behavior across regions
            </li>
          </ul>
        </div>
  
        <!-- Right Image -->
        <div class="relative mt-8 lg:mt-0">
          <div class="absolute -inset-4 bg-[#605bff]/5 rounded-3xl"></div>
          <img 
            src="/images/photos/driver.jpg" 
            alt="Driver in car" 
            class="relative rounded-2xl w-full object-cover"
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Payment Journey Section -->
<section class="py-12 lg:py-20 overflow-hidden">
    <div class="container px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <!-- Left Image -->
        <div class="relative mt-8 lg:mt-0 order-2 lg:order-1">
          <div class="absolute -inset-4 "></div>
          <div class="relative flex items-center justify-center">
            <!-- Mobile App Mockup -->
            <div class="max-w-[320px]">
              <img 
                src="/images/photos/mobilepay.png" 
                alt="Mobile Payment Journey" 
                class="relative rounded-2xl w-full shadow-lg"
              >
            </div>
            <!-- Overlay Card -->
            <div class="absolute -right-8 top-1/2 bg-[#605bff] p-4 rounded-lg shadow-md max-w-[200px]">
              <p class="text-[#fff] font-medium">Your car is reserved</p>
              <button class="mt-2 w-full bg-[#1a1f36] text-white text-sm py-2 px-4 rounded">
                Manage reservation
              </button>
            </div>
          </div>
        </div>
  
        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-[1.75rem] lg:text-[2rem] font-medium text-[#32325d] leading-tight mb-6">
            A consistent payment journey, regardless of the channel
          </h2>
          <p class="text-lg lg:text-xl text-gray-600 mb-8">
            Let riders pay en route and their preferred way, across all methods of transport.
          </p>
          
          <!-- Feature List -->
          <ul class="space-y-4">
            <li class="flex items-center text-gray-600">
              <i class="fa-solid fa-check text-[#605bff] mr-3"></i>
              Accept payments in-app, online, and in person
            </li>
            <li class="flex items-center text-gray-600">
              <i class="fa-solid fa-check text-[#605bff] mr-3"></i>
              Support all major payment methods
            </li>
            <li class="flex items-center text-gray-600">
              <i class="fa-solid fa-check text-[#605bff] mr-3"></i>
              Provide a seamless booking experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- In-app Payments Section -->
<section class="w-full bg-[#f7f7f8] py-20">
    <div class="w-full max-w-[90%] mx-auto bg-white rounded-2xl py-16 px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-[1.75rem] lg:text-[2rem] font-medium text-[#32325d] leading-tight mb-6">
          In-app payments for uninterrupted travel
        </h2>
        <p class="text-lg lg:text-l text-gray-600 mb-8">
          A checkout flow to suit your mobility business. Accept mobile wallets, like Apple Pay and Google Pay™, for an effortless passenger or rider experience.
        </p>
        <a 
          href="/account/signup" 
          class="inline-flex items-center text-[#605bff] hover:text-[#605bff]/80 font-medium"
        >
Get Start now          <i class="fa-solid fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- Features and Solutions Section -->
<section class="w-full bg-[#fff] py-20">
  <div class="w-full max-w-[90%] mx-auto bg-white rounded-2xl py-16 px-8">
    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      <!-- Feature 1 -->
      <div class="text-center">
        <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <i class="fa-solid fa-shield-halved text-[#605bff] text-xl"></i>
        </div>
        <p class="text-gray-600">
          Sensitive card information never gets lost or expires with tokenization.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="text-center">
        <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <i class="fa-solid fa-arrows-rotate text-[#605bff] text-xl"></i>
        </div>
        <p class="text-gray-600">
          Smooth reconciliation of local and QR payment methods.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="text-center">
        <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <i class="fa-solid fa-language text-[#605bff] text-xl"></i>
        </div>
        <p class="text-gray-600">
          Detect customer language, and let them choose their preferred currency.
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="text-center">
        <div class="w-12 h-12 bg-[#605bff]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <i class="fa-solid fa-id-card text-[#605bff] text-xl"></i>
        </div>
        <p class="text-gray-600">
          Set-up is easy with automated KYC checks for new locations.
        </p>
      </div>
    </div>

    <!-- Solutions Section -->
    <div>
      <h2 class="text-[1.75rem] lg:text-[2rem] font-medium text-gray-900 leading-tight mb-12 text-center">
        A solution built for
      </h2>

      <!-- Image -->
      <div class="max-w-4xl mx-auto mb-16">
        <img 
          src="/images/photos/carpy.png" 
          alt="Mobile Payment in Car" 
          class="w-full rounded-2xl"
        >
      </div>

      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Solution 1 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Trains and buses</h3>
          <p class="text-gray-600">
            Payments to keep up with your speed. Offer payment methods from wherever you choose to expand.
          </p>
        </div>

        <!-- Solution 2 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Taxi apps</h3>
          <p class="text-gray-600">
            For drivers it's about receiving a fair and guaranteed rate. Our third party payout solution allows drivers to receive tips individually in an automated way.
          </p>
        </div>

        <!-- Solution 3 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Bikes and scooters</h3>
          <p class="text-gray-600">
            Let first-time users input their payment information quickly, so for future rides it's one tap, not an ordeal.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>