<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import WidgetCard5 from "$lib/components/widgets/widget-card-5.svelte";
  import {Swiper, SwiperSlide} from "swiper/svelte";
  import {Navigation, Autoplay} from "swiper";

  import {testimonialsData} from "$lib/utility/data";
</script>

<PageTitle title="Portfolio Item" />

<!-- Hero Section -->
<section class="pt-36 pb-24">
  <div class="container">
    <div class="text-center">
      <h2 class="md:text-5xl/tight text-3xl font-semibold mb-6">Awesome Mobile App</h2>
    </div>
    <!-- meta start -->
    <div class="grid md:grid-cols-5 grid-cols-3 gap-6 items-center border-y py-8 mt-14">
      <div>
        <span>Client</span>
        <h4>Scarlet Johnson</h4>
      </div>

      <div>
        <span>Category</span>
        <h4>Mobile App</h4>
      </div>

      <div>
        <span>Crafted Date</span>
        <h4>Oct 12, 2019</h4>
      </div>

      <div>
        <div class="flex items-center justify-center sm:justify-end md:gap-5">
          <div>
            <h4 class="font-medium text-slate-400 uppercase">Share:</h4>
          </div>
          <div>
            <a href="">
              <svg class="w-5 h-5 text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="">
              <svg class="w-5 h-5 text-green-500 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="">
              <svg class="w-5 h-5 text-red-500 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="md:col-span-1 col-span-2">
        <a href="" class="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">Load More</a>
      </div>
    </div>
    <!-- meta End -->
  </div>
</section>

<!-- portfolio content start -->
<section class="pb-20">
  <div class="container">
    <div class="text-center">
      <!-- image -->
      <div>
        <img src="/images/blog/hero-post.png" class="rounded-md" />
      </div>
      <!-- image caption -->
      <p class="text-sm text-slate-400 mt-2">The image caption referencing the above image</p>
    </div>

    <!-- description start -->
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
      <div>
        <h3 class="text-2xl">About Client</h3>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.</p>
      </div>

      <div>
        <h3 class="text-2xl">Project Description</h3>
        <p class="mt-5">Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.</p>
      </div>
    </div>
    <!-- description end -->

    <!-- portfolio item images start -->
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
      <img src="/images/photos/14.jpg" class="rounded-md" />
      <img src="/images/photos/13.jpg" class="rounded-md" />
    </div>
    <!-- portfolio item images end -->

    <!-- work description start -->
    <div class="mt-16">
      <div>
        <h3 class="text-2xl">What We Did?</h3>
        <p class="text-slate-800 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.</p>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-6 my-12">
        <div class="flex items-center gap-5">
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-10 h-10 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                <circle id="Oval-14" fill="currentColor" cx="12" cy="9" r="5"></circle>
              </g>
            </svg>
          </div>
          <div>
            <h5 class="text-base">UI/UX Design</h5>
          </div>
        </div>

        <div class="flex items-center gap-5">
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-10 h-10 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M12.7442084,3.27882877 L19.2473374,6.9949025 C19.7146999,7.26196679 20.003129,7.75898194 20.003129,8.29726722 L20.003129,15.7027328 C20.003129,16.2410181 19.7146999,16.7380332 19.2473374,17.0050975 L12.7442084,20.7211712 C12.2830594,20.9846849 11.7169406,20.9846849 11.2557916,20.7211712 L4.75266256,17.0050975 C4.28530007,16.7380332 3.99687097,16.2410181 3.99687097,15.7027328 L3.99687097,8.29726722 C3.99687097,7.75898194 4.28530007,7.26196679 4.75266256,6.9949025 L11.2557916,3.27882877 C11.7169406,3.01531506 12.2830594,3.01531506 12.7442084,3.27882877 Z M12,14.5 C13.3807119,14.5 14.5,13.3807119 14.5,12 C14.5,10.6192881 13.3807119,9.5 12,9.5 C10.6192881,9.5 9.5,10.6192881 9.5,12 C9.5,13.3807119 10.6192881,14.5 12,14.5 Z" id="Combined-Shape" fill="currentColor"></path>
              </g>
            </svg>
          </div>
          <div>
            <h5 class="text-base">Brand Identity</h5>
          </div>
        </div>

        <div class="flex items-center gap-5">
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-10 h-10 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z" id="Rectangle-25" fill="currentColor"></path>
              </g>
            </svg>
          </div>
          <div>
            <h5 class="text-base">Web Devblopment</h5>
          </div>
        </div>
      </div>

      <p class="text-slate-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.</p>
      <h5 class="text-base mt-10">Technologies Used</h5>
      <p class="flex items-center gap-2 text-slate-700 font-medium mt-3">
        <i class="fa-solid fa-minus"></i>
        Sketch & Illustrator
      </p>
      <p class="flex items-center gap-2 text-slate-700 font-medium mt-3">
        <i class="fa-solid fa-minus"></i>
        Raact JS
      </p>
      <p class="flex items-center gap-2 text-slate-700 font-medium mt-3">
        <i class="fa-solid fa-minus"></i>
        Django - A Web Framework in Python
      </p>
      <p class="flex items-center gap-2 text-slate-700 font-medium mt-3">
        <i class="fa-solid fa-minus"></i>
        PostgreSQL - Relational Database System
      </p>
    </div>
    <!-- work description end -->
  </div>
</section>

<!-- testimonials Section -->
<section class="py-8 overflow-x-hidden">
  <div class="container">
    <h3 class="text-2xl mb-12">Feedback From Client</h3>
    <div>
      <div class="relative">
        <div class="hidden sm:block">
          <div class="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../images/pattern/dot5.svg')]"></div>
          <div class="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../images/pattern/dot2.svg')]"></div>
        </div>
        <div id="swiper_one" class="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            loop={true}
            rewind={true}
          >
            {#each testimonialsData as item, idx (idx)}
              <SwiperSlide>
                <WidgetCard5 testimonial={item.testimonial} user={item.user} />
              </SwiperSlide>
            {/each}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- navigation Section -->
<section class="py-14">
  <div class="container">
    <div class="grid md:grid-cols-3 grid-cols-1 gap-5 items-center py-7 border-y">
      <div>
        <div>
          <div class="flex items-center justify-start">
            <button class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-300 hover:shadow-lg py-2 px-5" data-fc-placement="top" data-fc-type="tooltip"
              ><i class="fa-solid fa-arrow-left me-2"></i>
              Awesome Saas App
            </button>
            <div class="bg-white shadow-lg hidden rounded-md transition-all opacity-0 z-50 p-4 w-72" role="tooltip">
              <div class="flex items-center gap-5">
                <img src="/images/blog/blog-1.png" class="w-16 rounded" />
                <div>
                  <h6 class="text-sm">Introducing new blazzing fast user interface</h6>
                  <p class="text-sm text-gray-500">by Emily Blunt</p>
                </div>
              </div>
              <div class="bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex md:justify-center">
        <a href="" class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-300 hover:shadow-lg py-2 px-5">View All</a>
      </div>
      <div>
        <div class="flex items-center md:justify-end justify-start">
          <button class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-300 hover:shadow-lg py-2 px-5" data-fc-placement="top" data-fc-type="tooltip">
            Desktop App<i class="fa-solid fa-arrow-right ms-2"></i>
          </button>
          <div class="bg-white shadow-lg hidden rounded-md transition-all opacity-0 z-50 p-4 w-72" role="tooltip">
            <div class="flex items-center gap-5">
              <img src="/images/blog/blog-2.png" class="w-16 rounded" />
              <div>
                <h6 class="text-sm">What you should know before...</h6>
                <p class="text-sm text-gray-500">by Emily Blunt</p>
              </div>
            </div>
            <div class="bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
