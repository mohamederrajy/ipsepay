<script lang="ts">
  import WidgetCard6 from "$lib/components/widgets/widget-card-6.svelte";
  import {Swiper, SwiperSlide} from "swiper/svelte";
  import {Navigation} from "swiper";

  import {testimonialsData} from "$lib/utility/data";
</script>

<section class="py-20" data-aos="fade-up">
  <div class="container">
    <div class="relative z-20">
      <div class="flex items-center justify-between pb-14">
        <div>
          <h2 class="md:text-3xl text-xl my-5">See what our members are saying</h2>
        </div>
        <div class="flex items-center gap-5">
          <div class="button-prev"><i class="fa-solid fa-arrow-left text-primary"></i></div>
          <div class="button-next"><i class="fa-solid fa-arrow-right text-primary"></i></div>
        </div>
      </div>

      <div>
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
                <WidgetCard6 testimonial={item.testimonial} user={item.user} />
              </SwiperSlide>
            {/each}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>
