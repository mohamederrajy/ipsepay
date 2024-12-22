<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import PortfolioHero from "$lib/components/heros/portfolio-hero.svelte";
  import Testimonial5 from "$lib/components/testimonials/testimonial-5.svelte";
  import Cta from "$lib/components/cta.svelte";
  import PortfolioFooter from "$lib/components/footers/portfolio-footer.svelte";
</script>

<PageTitle title="Portfolio Landing Page" />

<PortfolioHero />

<!-- services Section -->
<section class="py-20">
  <div class="container">
    <div>
      <h2 class="md:text-3xl text-xl font-semibold my-5">What I Do</h2>
      <p class="text-slate-400 font-medium">Connecting brands and companies with their customers through <span class="text-red-500">good design</span>.</p>
    </div>

    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
      <div class="group" data-aos="fade-up" data-aos-duration="600">
        <div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
          <div class="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
            <svg class="w-8 h-8 text-red-500" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" id="Combined-Shape" fill="currentcolor" opacity="0.3"></path>
                <circle id="Oval-14" fill="currentcolor" cx="12" cy="9" r="5"></circle>
              </g>
            </svg>
          </div>
          <h4 class="text-lg mt-6">UI/UX Design</h4>
          <p class="text-base text-slate-400 leading-7 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
      </div>

      <div class="group" data-aos="fade-up" data-aos-duration="900">
        <div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
          <div class="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
            <svg class="w-8 h-8 text-red-500" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z" id="Combined-Shape" fill="currentcolor"></path>
                <path d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z" id="Rectangle-19-Copy-3" fill="currentcolor" opacity="0.3"></path>
              </g>
            </svg>
          </div>
          <h4 class="text-lg mt-6">Product Design</h4>
          <p class="text-base text-slate-400 leading-7 mt-2">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making.</p>
        </div>
      </div>

      <div class="group" data-aos="fade-up" data-aos-duration="1200">
        <div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
          <div class="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
            <svg class="w-8 h-8 text-red-500" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z" id="Rectangle-25" fill="currentcolor"></path>
              </g>
            </svg>
          </div>
          <h4 class="text-lg mt-6">Frontend Development</h4>
          <p class="text-base text-slate-400 leading-7 mt-2">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- portfolio Section -->
<section class="py-20">
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-5">
      <div>
        <h1 class="text-3xl font-medium my-3">Latest Projects</h1>
      </div>

      <div class="flex flex-wrap items-center gap-8">
        <p><a href="javascript:void(0);" class="font-medium text-blue-600">UI/UX Design</a></p>
        <p><a href="javascript:void(0);" class="font-medium hover:text-blue-600">Branding</a></p>
        <p><a href="javascript:void(0);" class="font-medium hover:text-blue-600">Marketing</a></p>
        <p><a href="javascript:void(0);" class="font-medium hover:text-blue-600">Web Development</a></p>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-duration="600">
      <div class="group relative mt-12 hover:opacity-80">
        <div class="pt-12 ps-12 bg-slate-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
          <div>
            <div class="flex items-center justify-between mb-7">
              <h3 class="text-xl">Project</h3>
              <p class="font-medium text-slate-500 pe-8">Branding, Interaction, Web Design</p>
            </div>
            <div>
              <img src="/images/features/agency1.jpg" class="rounded-md" />
            </div>
            <div class="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
              <a href="" class="inline-block">
                <div class="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                  <p class="text-sm font-semibold text-white">View Project</p>
                  <i class="fa-solid fa-arrow-right text-white"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300"></div>
      </div>

      <div class="group relative mt-12 hover:opacity-80">
        <div class="pt-12 ps-12 bg-slate-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
          <div>
            <div class="flex items-center justify-between mb-7">
              <h3 class="text-xl">Project 2</h3>
              <p class="font-medium text-slate-500 pe-8">Branding, Web Design & Development</p>
            </div>
            <div>
              <img src="/images/features/agency2.jpg" class="rounded-md" />
            </div>
            <div class="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
              <a href="" class="inline-block">
                <div class="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                  <p class="text-sm font-semibold text-white">View Project</p>
                  <i class="fa-solid fa-arrow-right text-white"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300"></div>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-duration="600">
      <div class="group relative mt-12 hover:opacity-80">
        <div class="pt-12 ps-12 bg-slate-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
          <div>
            <div class="flex items-center justify-between mb-7">
              <h3 class="text-xl">Project 3</h3>
              <p class="font-medium text-slate-500 pe-8">Branding, Interaction, Web Design</p>
            </div>
            <div>
              <img src="/images/features/agency2.jpg" class="rounded-md" />
            </div>
            <div class="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
              <a href="" class="inline-block">
                <div class="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                  <p class="text-sm font-semibold text-white">View Project</p>
                  <i class="fa-solid fa-arrow-right text-white"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300"></div>
      </div>

      <div class="group relative mt-12 hover:opacity-80">
        <div class="pt-12 ps-12 bg-slate-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
          <div>
            <div class="flex items-center justify-between mb-7">
              <h3 class="text-xl">Project 4</h3>
              <p class="font-medium text-slate-500 pe-8">Branding, Web Design & Development</p>
            </div>
            <div>
              <img src="/images/features/agency1.jpg" class="rounded-md" />
            </div>
            <div class="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
              <a href="" class="inline-block">
                <div class="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                  <p class="text-sm font-semibold text-white">View Project</p>
                  <i class="fa-solid fa-arrow-right text-white"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300"></div>
      </div>
    </div>
  </div>
</section>

<Testimonial5 />

<Cta />

<PortfolioFooter />
