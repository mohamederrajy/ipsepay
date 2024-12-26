<script lang="ts">
  const teamData = [
    {
      image: "/images/avatars/img-1.jpg",
      name: "Ana Russo",
      role: "CEO",
    },
    {
      image: "/images/avatars/img-2.jpg",
      name: "Danette Payne",
      role: "CTO",
    },
    {
      image: "/images/avatars/img-3.jpg",
      name: "Tammy Ward",
      role: "VP, Product Development",
    },
    {
      image: "/images/avatars/img-4.jpg",
      name: "Paul Moore",
      role: "Back-End Developer",
    },
    {
      image: "/images/avatars/img-5.jpg",
      name: "Harry Burris",
      role: "PHP Developer",
    },
    {
      image: "/images/avatars/img-6.jpg",
      name: "Patricia Ferraro",
      role: "Web Designer",
    }
  ];

  const stats = [
    {
      count: "100+",
      text: "Products Built",
      subTxt: "helped clients across the globe",
    },
    {
      count: "$21M+",
      text: "Revenue Generated",
      subTxt: "across 10+ countries",
    },
    {
      count: "100+",
      text: "Satisfied Clients",
      subTxt: "across 100+ locations",
    },
    {
      count: "10+",
      text: "Awards Won",
      subTxt: "on Awwwards, CSS Design Awards",
    }
  ];
</script>

<main class="pt-20">
  <!-- Title Section -->
  <div class="relative bg-cover bg-center" style="background-image: url('https://coderthemes.com/wb/appoo/images/heros/hero-2-bg.png')">
    <div class="container mx-auto px-4 py-16 sm:py-20">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center" style="color: #32325d">About Our Company</h1>
    </div>
  </div>

  <!-- Content Section -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
    <!-- About Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Who We Are</h2>
      <p class="text-gray-600 mb-8">
        IpsePay is a leading payment solutions provider specializing in high-risk merchant services. 
        With years of experience in the industry, we've built a reputation for reliability, security, 
        and exceptional customer service.
      </p>
      <p class="text-gray-600">
        Our mission is to provide businesses with seamless payment processing solutions while ensuring 
        the highest levels of security and compliance with international standards.
      </p>
    </div>

    <!-- Stats Section -->
    <div class="bg-gray-50 rounded-lg p-8 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each stats as stat}
          <div class="text-center">
            <h3 class="text-3xl font-bold text-primary mb-2">{stat.count}</h3>
            <p class="text-gray-900 font-medium mb-1">{stat.text}</p>
            <p class="text-gray-500 text-sm">{stat.subTxt}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Team Section -->
    <div class="mb-16">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each teamData as member}
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center gap-4">
              <img src={member.image} alt={member.name} class="w-16 h-16 rounded-lg object-cover"/>
              <div>
                <h3 class="font-medium text-gray-900">{member.name}</h3>
                <p class="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Partners Section -->
    <div>
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">Trusted By Leading Brands</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <img src="/images/brands/amex.png" alt="Amazon" class="h-8 w-auto mx-auto"/>
        <img src="/images/brands/mscrad.png" alt="Google" class="h-8 w-auto mx-auto"/>
        <img src="/images/brands/woocommerce.png" alt="PayPal" class="h-8 w-auto mx-auto"/>
        <img src="/images/brands/Shopy.png" alt="Shopify" class="h-8 w-auto mx-auto"/>
      </div>
    </div>
  </div>
</main>

<style>
  :global(.bg-primary) {
    background-color: #605bff;
  }
  :global(.text-primary) {
    color: #605bff;
  }
  :global(.hover\:bg-primary:hover) {
    background-color: #605bff;
  }
</style>
