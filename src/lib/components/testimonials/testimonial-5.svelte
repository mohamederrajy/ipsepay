<script lang="ts">
  import WidgetCard8 from "$lib/components/widgets/widget-card-8.svelte";
  import {Swiper, SwiperSlide} from "swiper/svelte";
  import {Navigation} from "swiper";

  import {testimonialsData} from "$lib/utility/data";
</script>

<section class="py-20 relative overflow-x-hidden bg-gradient-to-b from-red-500/5 to-amber-500/5" data-aos="fade-up" data-aos-duration="600">
  <div class="absolute top-0 inset-x-0 hidden sm:block">
    <img src="/images/shapes/white-wave.svg" alt="svg" class="w-full -scale-x-100" />
  </div>
  <div class="container relative">
    <div class="relative z-20">
      <div class="flex items-center justify-between pb-14">
        <div>
          <h2 class="md:text-3xl text-xl font-semibold my-5">Kind words from excellent clients</h2>
        </div>
        <div class="flex items-center gap-5">
          <div class="button-prev"><i class="fa-solid fa-arrow-left"></i></div>
          <div class="button-next"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>

      <div class="relative">
        <div class="hidden sm:block">
          <div class="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('../images/pattern/dot3.svg')]"></div>
          <div class="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('../images/pattern/dot3.svg')]"></div>
        </div>

        <!-- Swiper -->
        <div id="swiper_two" class="swiper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            autoHeight={true}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            breakpoints={{
              576: {slidesPerView: 1},
              768: {slidesPerView: 2},
            }}
            loop={true}
          >
            {#each testimonialsData as item, idx (idx)}
              <SwiperSlide>
                <WidgetCard8 testimonial={item.testimonial} user={item.user} />
              </SwiperSlide>
            {/each}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>
