<script lang="ts">
  import WidgetCard5 from "$lib/components/widgets/widget-card-5.svelte";
  import {Swiper, SwiperSlide} from "swiper/svelte";
  import {Navigation, Autoplay} from "swiper";

  import {testimonialsData} from "$lib/utility/data";
</script>

<section class="py-16 sm:py-24 overflow-x-hidden">
  <div class="container" data-aos="fade-up" data-aos-duration="600">
    <div class="grid xl:grid-cols-4 grid-cols-3 gap-6">
      <div class="col-span-3 lg:col-span-1">
        <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Feedback</span>
        <h1 class="text-3xl/tight font-medium mt-3 mb-4">What people say</h1>
        <p class="text-gray-500">Few valuables words from our customers</p>

        <div class="flex gap-4 mt-10">
          <div class="button-prev text-xl transition-all duration-300 hover:text-primary"><i class="fa-solid fa-arrow-left"></i></div>
          <div class="button-next text-xl transition-all duration-300 hover:text-primary"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-2 xl:col-span-3">
        <div class="relative">
          <div class="hidden sm:block">
            <div class="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../images/pattern/dot5.svg')]"></div>
            <div class="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../images/pattern/dot2.svg')]"></div>
          </div>

          <div id="swiper_one" class="swiper relative">
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
  </div>
</section>
