<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import Navbar from "$lib/components/navbars/default-navbar.svelte";
</script>

<PageTitle title="Blog" />

<Navbar isDark />

<section class="pt-36 pb-20">
  <div class="container">
    <div class="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('../images/blog/hero.png')]">
      <div class="relative w-full h-full z-30 bg-black/10"></div>
    </div>

    <div class="relative lg:w-3/5 mx-auto z-30">
      <div class="text-center text-white">
        <h2 class="text-5xl font-semibold mb-8">Blog</h2>
        <p class="text-base/relaxed tracking-wide">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
        <p></p>
      </div>
    </div>
  </div>
</section>

<!-- listing Section -->
<section class="py-24">
  <div class="container">
    <div class="flex items-center gap-2">
      <p>Tags:</p>
      <div class="flex flex-wrap items-center gap-1">
        <a href="" class="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Business</a>
        <a href="" class="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Community</a>
        <a href="" class="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Announcement</a>
        <a href="" class="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Tutorials</a>
        <a href="" class="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Resources</a>
        <a href="" class="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Interview</a>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up" data-aos-duration="300">
      <div class="lg:col-span-2">
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2 col-span-3">
            <img src="/images/blog/post1.jpg" class="w-full h-full rounded-md" alt="" />
          </div>

          <div class="col-span-3">
            <div class="flex flex-col gap-14 justify-between xl:h-full">
              <div>
                <span class="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Announcement</a></span>
                <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">Announcing the free upgrade for the subscribed plans</a></h1>
                <p class="text-sm/relaxed tracking-wider text-gray-500">
                  We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...
                  <a href="" class="text-primary">read more</a>
                </p>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <img src="/images/avatars/img-2.jpg" class="h-10 w-10 rounded-md" />
                  <div>
                    <h6 class="text-sm transition-all hover:text-primary"><a href="">Emily Blunt</a></h6>
                    <p class="text-sm text-gray-500">11 Mar, 2020 · 3 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="border rounded-md p-5 w-full">
          <h1 class="mb-3">Get the latest on product development from Prompt</h1>
          <p class="text-sm/relaxed tracking-wider text-gray-500">We send a weekly newsletter containing latest updates in product development</p>

          <div class="flex flex-col md:flex-row lg:flex-col gap-2 mt-7">
            <input type="email" class="w-full md:w-1/2 lg:w-full text-sm border-gray-300 focus:border-gray-200 focus:ring-0 rounded-md bg-white py-3" id="Email" placeholder="Enter Your Email" />
            <button class="w-full md:w-1/2 lg:w-full bg-primary text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/50 hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/20 px-8 py-3">Subscribe</button>
          </div>
          <p class="text-sm text-gray-500 mt-2">*No spam ever.</p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-16 py-14" data-aos="fade-up">
      <div>
        <img src="/images/blog/blog-1.png" class="rounded-md mb-5" />

        <span class="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Announcement</a></span>
        <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">Introducing new blazzing fast user interface</a></h1>
        <p class="text-sm/relaxed tracking-wider text-gray-500">
          Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...
          <a href="" class="text-primary">read more</a>
        </p>
      </div>

      <div>
        <img src="/images/blog/blog-2.png" class="rounded-md mb-5" />

        <span class="bg-green-500/10 text-green-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Tutorial</a></span>
        <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">What you should know before considering the Prompt</a></h1>
        <p class="text-sm/relaxed tracking-wider text-gray-500">
          We are giving a pretty extensive guideline and context before you make your decision to consider Prompt...
          <a href="" class="text-primary">read more</a>
        </p>
      </div>

      <div>
        <img src="/images/blog/blog-3.png" class="rounded-md mb-5" />

        <span class="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Community</a></span>
        <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">Your Way to a Successful Sales Campaigns</a></h1>
        <p class="text-sm/relaxed tracking-wider text-gray-500">
          Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads ...
          <a href="" class="text-primary">read more</a>
        </p>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up">
      <div class="lg:col-span-2">
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2 col-span-3">
            <img src="/images/blog/post1.jpg" class="w-full h-full rounded-md" />
          </div>

          <div class="col-span-3">
            <div class="flex flex-col gap-14 justify-between xl:h-full">
              <div>
                <span class="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Community</a></span>
                <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">Will Web Design Ever Rule the World?</a></h1>
                <p class="text-sm/relaxed tracking-wider text-gray-500">
                  The web is changed in the current era a lot. Many new trends are being used in the market at the moment...
                  <a href="" class="text-primary">read more</a>
                </p>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <img src="/images/avatars/img-1.jpg" class="h-10 w-10 rounded-md" />
                  <div>
                    <h6 class="text-sm transition-all hover:text-primary"><a href="">Greeva N</a></h6>
                    <p class="text-sm text-gray-500">9 Mar, 2020 · 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="border relative shadow-xl rounded-lg w-full">
          <div class="relative">
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute top-4 right-4 text-sm bg-red-500 text-white rounded py-1 px-3">Resource</div>
            <img src="/images/blog/post-bg.png" class="w-full" />

            <div class="absolute right-5 bottom-3 left-5 text-white">
              <h2 class="text-2xl"><a href="">Top 10 ideas to improve the team productivity</a></h2>
              <div class="flex mt-3">
                <a href="" class="ms-1 -me-3 shadow-lg">
                  <img src="/images/avatars/img-1.jpg" alt="image" class="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                </a>
                <a href="" class="ms-1 -me-3 shadow-lg">
                  <img src="/images/avatars/img-2.jpg" alt="image" class="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                </a>
                <a href="" class="ms-1 -me-3 shadow-lg">
                  <img src="/images/avatars/img-3.jpg" alt="image" class="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6 lg:py-16 py-14" data-aos="fade-up">
      <div>
        <img src="/images/blog/blog-1.png" class="rounded-md mb-5" />

        <span class="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Announcement</a></span>
        <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">Introducing new blazzing fast user interface</a></h1>
        <p class="text-sm/relaxed tracking-wider text-gray-500">
          Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...
          <a href="" class="text-primary">read more</a>
        </p>
      </div>

      <div>
        <img src="/images/blog/blog-2.png" class="rounded-md mb-5" />

        <span class="bg-green-500/10 text-green-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Tutorial</a></span>
        <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">What you should know before considering the Prompt</a></h1>
        <p class="text-sm/relaxed tracking-wider text-gray-500">
          We are giving a pretty extensive guideline and context before you make your decision to consider Prompt...
          <a href="" class="text-primary">read more</a>
        </p>
      </div>

      <div>
        <img src="/images/blog/blog-3.png" class="rounded-md mb-5" />

        <span class="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Community</a></span>
        <h1 class="text-lg my-3 transition-all hover:text-primary"><a href="">Your Way to a Successful Sales Campaigns</a></h1>
        <p class="text-sm/relaxed tracking-wider text-gray-500">
          Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads ...
          <a href="" class="text-primary">read more</a>
        </p>
      </div>
    </div>

    <div class="flex justify-center items-center gap-2">
      <div class="flex items-center">
        <a href="javascript:void(0)" class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"><i class="fa-solid fa-arrow-left me-2"></i> Previous</a>
      </div>

      <div class="flex items-center">
        <a href="javascript:void(0)" class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Next <i class="fa-solid fa-arrow-right ms-2"></i></a>
      </div>
    </div>
  </div>
</section>
