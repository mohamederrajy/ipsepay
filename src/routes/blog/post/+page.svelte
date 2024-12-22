<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import Navbar from "$lib/components/navbars/default-navbar.svelte";
</script>

<PageTitle title="Blog Post" />

<Navbar />

<section class="pt-20">
  <div class="container">
    <div class="py-14">
      <div class="flex flex-wrap items-center gap-2 bg-gray-100 py-2 px-3">
        <a href="" class="transition-all hover:text-primary">Home</a> /
        <a href="" class="transition-all hover:text-primary">Blog</a> /
        <p class="text-gray-500">Announcing-the-free-upgrade</p>
      </div>
    </div>

    <div class="lg:w-4/5">
      <span class="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="">Announcement</a></span>
      <h1 class="lg:text-5xl/snug text-3xl/snug mt-3">Announcing the free upgrae for the subscribed plans</h1>
    </div>

    <div class="mb-8">
      <div class="flex flex-wrap items-center justify-between gap-6">
        <div class="flex items-center gap-3 mt-7">
          <img src="/images/avatars/img-1.jpg" alt="avatar" class="h-11 w-11 rounded-full" />

          <div>
            <h6 class="text-sm transition-all hover:text-primary"><a href="">Emily Blunt</a></h6>
            <p class="text-sm text-gray-500">11 Mar, 2020 · 3 min read</p>
          </div>
        </div>

        <div class="flex gap-2">
          <p class="text-sm text-gray-500">SHARE:</p>
          <div class="flex gap-3">
            <span>
              <a href="">
                <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </span>

            <span>
              <a href="">
                <svg class="w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </span>

            <span>
              <a href="">
                <svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- post Section -->
<section>
  <div class="container">
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.</p>
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-6">Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.</p>

    <div>
      <img src="/images/blog/hero-post.png" class="rounded-md" />
      <p class="text-xs text-gray-500 mt-2 text-center">The image caption referencing the above image</p>
    </div>

    <h1 class="text-xl mb-3 mt-10">Itaque earum rerum hic tenetur sapiente delectu</h1>
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-6">Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.</p>

    <div class="bg-gray-100 p-8 mb-6">
      <h5 class="text-base sm:text-lg font-normal text-gray-600 mb-3">Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beataevitae dicta sunt explicabo tempore cum soluta.</h5>
      <p class="text-gray-500 font-light text-sm"><i class="fa-solid fa-minus me-2"></i> Christian Hall</p>
    </div>

    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et fuga.</p>
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias consequ perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatisquasi architecto beatae vitae dicta sunt explicabo.</p>
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate lit esse quam nihil molestiae consequatur eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est vel illum qui dolorem eum fugiat quo voluptas aperiam, eaque ipsa quae ab illo inventore.</p>

    <div>
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-8 my-10">
        <div>
          <img src="/images/photos/3.jpg" class="rounded" />
        </div>
        <div>
          <img src="/images/photos/4.jpg" class="rounded" />
        </div>
        <div>
          <img src="/images/photos/5.jpg" class="rounded" />
        </div>
        <div>
          <img src="/images/photos/6.jpg" class="rounded" />
        </div>
      </div>
    </div>

    <h6 class="text-sm/relaxed tracking-wider mb-3">Conclusion</h6>
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat qui dolorem ipsum quia dolor sit amet consectetur velitsedquia non numquam eius modi tempora incidunt.</p>
    <p class="text-sm/relaxed tracking-wider text-gray-600 mb-5">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

    <div class="flex flex-col gap-3">
      <p class="text-sm tracking-wider text-gray-600"><i class="fa-solid fa-minus me-3"></i>Dream places</p>
      <p class="text-sm tracking-wider text-gray-600"><i class="fa-solid fa-minus me-3"></i>Walking/Hiking tours</p>
      <p class="text-sm tracking-wider text-gray-600"><i class="fa-solid fa-minus me-3"></i>Tennis lessons with expert coaches</p>
      <p class="text-sm tracking-wider text-gray-600"><i class="fa-solid fa-minus me-3"></i>Sailing adventures</p>
    </div>

    <div class="flex flex-wrap sm:gap-2 gap-5 mt-10">
      <div>
        <a href="" class="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4">Startup</a>
      </div>
      <div>
        <a href="" class="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4">Website Design</a>
      </div>
      <div>
        <a href="" class="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4">Website Development</a>
      </div>
      <div>
        <a href="" class="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4">Tailwind</a>
      </div>
    </div>

    <div class="flex gap-2 mt-8 mb-14">
      <p class="text-sm text-gray-500">SHARE:</p>
      <div class="flex gap-3">
        <span>
          <a href="">
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </span>
        <span>
          <a href="">
            <svg class="w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </span>
        <span>
          <a href="">
            <svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- post navigation -->
<section>
  <div class="container">
    <div class="border-t mb-5"></div>

    <div class="grid md:grid-cols-4 grid-cols-1 items-center">
      <div>
        <div>
          <div class="flex items-center justify-start">
            <button class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5" data-fc-placement="top" data-fc-type="tooltip"
              ><i class="fa-solid fa-arrow-left me-2"></i>
              Prev Post
            </button>
            <div class="bg-white shadow-lg hidden rounded-md transition-all opacity-0 z-50 p-4 w-72" role="tooltip">
              <div class="flex items-center gap-5">
                <img src="/images/blog/blog-3.png" class="w-16 rounded" />
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

      <div class="col-span-2">
        <div class="my-5 md:my-0">
          <div class="flex md:justify-center justify-start items-center gap-4">
            <img src="/images/avatars/img-2.jpg" class="h-12 w-12 rounded-full" />
            <div>
              <h6 class="text-sm transition-all hover:text-primary"><a href="">Emily Blunt</a></h6>
              <p class="text-sm text-gray-500">I write about the latest trend in web design and development.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center md:justify-end justify-start">
        <button class="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5" data-fc-placement="top" data-fc-type="tooltip">
          Next Post <i class="fa-solid fa-arrow-right ms-2"></i>
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

    <div class="border-b mt-5"></div>
  </div>
</section>

<!-- post comments -->
<section class="lg:py-24 py-14">
  <div class="container">
    <div class="flex items-center gap-2">
      <h1 class="tracking-wider">Comments</h1>
      <span class="bg-gray-200 px-2 rounded-md">3</span>
    </div>

    <div>
      <div class="flex gap-3 my-6">
        <img src="/images/avatars/img-4.jpg" class="h-11 w-11 rounded-md" />
        <div>
          <h6 class="text-sm mb-1">Sansa Stark</h6>
          <p class="text-sm text-gray-500">2 days ago</p>
          <p class="text-sm/relaxed tracking-wider text-gray-600 mt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
          <a href="javascript: void(0);" class="text-primary text-sm"><i class="fa-regular fa-comment me-1"></i> Reply</a>

          <div class="flex gap-3 my-6">
            <img src="/images/avatars/img-1.jpg" class="h-11 w-11 rounded-md" />
            <div>
              <h6 class="text-sm mb-1">Cersei Lannister</h6>
              <p class="text-sm text-gray-500">1 days ago</p>
              <p class="text-sm/relaxed tracking-wider text-gray-600 mt-2">Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis</p>
              <a href="javascript: void(0);" class="text-primary text-sm"><i class="fa-regular fa-comment me-1"></i> Reply</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b"></div>

      <div class="flex gap-3 my-6">
        <img src="/images/avatars/img-2.jpg" class="h-11 w-11 rounded-md" />
        <div>
          <h6 class="text-sm mb-1">Sansa Stark</h6>
          <p class="text-sm text-gray-500">2 days ago</p>
          <p class="text-sm/relaxed tracking-wider text-gray-600 mt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
          <a href="javascript: void(0);" class="text-primary text-sm"><i class="fa-regular fa-comment me-1"></i> Reply</a>
        </div>
      </div>
    </div>

    <div class="mt-14">
      <div class="border bg-white rounded p-6">
        <h1>Post a comment</h1>

        <div class="flex flex-col gap-5 mt-5">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <input class="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm" type="text" id="fname" name="fname" placeholder="Name" />
            </div>
            <div>
              <input class="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm" type="email" id="email" name="email" placeholder="Email" />
            </div>
          </div>

          <div>
            <input class="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm" type="text" id="Subject" name="Subject" placeholder="Subject" />
          </div>

          <div>
            <textarea class="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm" id="message" name="message" rows="5" placeholder="Message"></textarea>
          </div>

          <button class="flex">
            <a href="" class="bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-5 py-3">Submit</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
