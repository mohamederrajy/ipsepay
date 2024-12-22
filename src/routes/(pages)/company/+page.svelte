<script lang="ts">
  import {jarallax} from "jarallax";
  import PageTitle from "$lib/components/page-title.svelte";
  import CompanyHero from "$lib/components/heros/company-hero.svelte";
  import {onMount} from "svelte";

  onMount(() => {
    jarallax(document.querySelector(".jarallax"));
  });

  const counterData = [
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
    },
  ];

  const avatar1 = "/images/avatars/img-1.jpg";
  const avatar2 = "/images/avatars/img-2.jpg";
  const avatar3 = "/images/avatars/img-3.jpg";
  const avatar4 = "/images/avatars/img-4.jpg";
  const avatar5 = "/images/avatars/img-5.jpg";
  const avatar6 = "/images/avatars/img-6.jpg";
  const avatar7 = "/images/avatars/img-7.jpg";
  const avatar8 = "/images/avatars/img-8.jpg";

  const teamData = [
    {
      image: avatar1,
      name: "Ana Russo",
      role: "CEO",
    },
    {
      image: avatar2,
      name: "Danette Payne",
      role: "CTO",
    },
    {
      image: avatar3,
      name: "Tammy Ward",
      role: "VP, Product Development",
    },
    {
      image: avatar4,
      name: "Paul Moore",
      role: "Back-End Developer",
    },
    {
      image: avatar5,
      name: "Harry Burris",
      role: "PHP Developer",
    },
    {
      image: avatar6,
      name: "Patricia Ferraro",
      role: "Web Designer",
    },
    {
      image: avatar7,
      name: "Robert Smith",
      role: "Graphic Designer",
    },
    {
      image: avatar8,
      name: "Lindsay Clark",
      role: "Web Designer",
    },
    {
      image: avatar1,
      name: "Lindsay Clark",
      role: "Front-End Developer",
    },
    {
      image: avatar2,
      name: "Ernest Griffith",
      role: "PHP Developer",
    },
    {
      image: avatar3,
      name: "Cecelia Poole",
      role: "Back-End Developer",
    },
    {
      image: avatar4,
      name: "Morris Hall",
      role: "Graphic Designer",
    },
  ];
</script>

<PageTitle title="About Company" />

<CompanyHero />

<section class="lg:py-24 py-16">
  <div class="container" data-aos="fade-up">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
      <div class="flex flex-col items-center lg:items-start">
        <div class="border-t-2 border-gray-300 w-1/5 mb-7"></div>
        <h1 class="text-3xl">About Us</h1>
      </div>

      <div>
        <p class="text-sm/relaxed tracking-wider text-gray-600">Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus reiciendis.</p>
      </div>

      <div>
        <p class="text-sm/relaxed tracking-wider text-gray-600">Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus reiciendis.</p>
      </div>
    </div>

    <div class="lg:mt-5">
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div></div>

        <div class="lg:col-span-2">
          <p class="text-sm/relaxed tracking-wider text-gray-600">Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus reiciendis.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="lg:py-24 py-16">
  <div class="container" data-aos="fade-up">
    <div class="grid lg:grid-cols-2 gap-14">
      <div class="order-2 lg:order-1">
        <h1 class="text-3xl mb-7">Build amazing things together</h1>
        <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam beatae vitae dicta sunt explicabo.</p>
        <p class="text-sm/relaxed tracking-wider text-gray-600 mb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam beatae vitae dicta sunt explicabo.</p>

        <div class="flex items-center">
          <a href="" class="text-primary">Learn more <i class="fa-solid fa-arrow-right ms-2"></i></a>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <img src="/images/photos/14.jpg" alt="photo-3" />
      </div>
    </div>
  </div>
</section>

<!-- Counter Section -->
<section class="bg-gradient-to-r from-gray-200/50 to-gray-100/50 relative lg:py-24 py-16">
  <div class="absolute top-0 inset-x-0 hidden sm:block">
    <img src="/images/shapes/white-wave.svg" alt="white-wave-svg" class="w-full -scale-x-100" />
  </div>

  <div class="py-10">
    <div class="container" data-aos="fade-up">
      <div class="text-center">
        <span class="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">Stats</span>
        <h1 class="text-3xl/tight font-medium mt-3">Prompt In Numbers</h1>
      </div>

      <div class="mt-14">
        <div class="grid xl:grid-cols-4 sm:grid-cols-2 text-center gap-10 lg:gap-6">
          {#each counterData as item, idx (idx)}
            <div>
              <span class="text-3xl">{item.count}</span>
              <h1 class="mt-3 mb-1">{item.text}</h1>
              <p class="text-gray-500">{item.subTxt}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Our team Section -->
<section class="lg:py-24 py-16">
  <div class="container">
    <div class="text-center">
      <span class="text-sm bg-primary/10 text-primary/40 rounded-full px-3 py-1">Our Team</span>
      <h1 class="text-3xl/tight font-medium mt-3 mb-4">Meet Our Team</h1>
      <p class="text-gray-500">Start working with<span class="text-primary"> Prompt </span>to manage your workforce better.</p>
    </div>

    <div class="mt-14">
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12" data-aos="fade-up">
        {#each teamData as member, idx (idx)}
          <div>
            <div class="flex gap-4 items-center">
              <img src={member.image} alt="avatar" class="h-16 w-16 rounded-md" />
              <div>
                <h6 class="font-medium">{member.name}</h6>
                <p class="text-gray-500">{member.role}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Clients logo Section -->
<section class="lg:pb-20 py-16">
  <div class="container">
    <div class="text-center">
      <span class="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">Investor</span>
      <h1 class="text-3xl/tight font-medium mt-3 mb-4">We are backed by</h1>
      <p class="text-gray-500">100+ clients trust<span class="text-primary"> Prompt </span>to drive perfomance & engagement.</p>
    </div>

    <div class="mt-14">
      <div class="grid md:grid-cols-4 grid-cols-2 gap-5 items-center" data-aos="fade-up">
        <div>
          <img src="/images/brands/amazon.svg" alt="brand-logo" class="w-32 mx-auto" />
        </div>
        <div>
          <img src="/images/brands/google.svg" alt="brand-logo" class="w-32 mx-auto" />
        </div>
        <div>
          <img src="/images/brands/paypal.svg" alt="brand-logo" class="w-32 mx-auto" />
        </div>
        <div>
          <img src="/images/brands/shopify.svg" alt="brand-logo" class="w-32 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</section>
