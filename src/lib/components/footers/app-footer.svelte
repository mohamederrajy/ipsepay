<script lang="ts">
  const year = new Date().getFullYear();
</script>

<section class="py-10">
  <div class="container">
    <div class="text-center">
      <div>
        <h2 class="md:text-3xl text-xl font-semibold my-5">Start offering your users a better experience</h2>
        <p class="text-slate-500">Start working with <span class="text-primary">Prompt</span> to showcase your app to thousands of people.</p>
        <div class="flex flex-wrap items-center justify-center gap-4 my-10">
          <a href="">
            <img src="/images/buttons/google.png" class="w-48" />
          </a>
          <a href="">
            <img src="/images/buttons/store.png" class="w-48" />
          </a>
        </div>
      </div>

      <div>
        <ul class="flex flex-wrap items-center justify-center gap-5">
          <li class="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="" class="hover:text-primary me-4">About</a>
          </li>
          <li class="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="" class="hover:text-primary me-4">Privacy</a>
          </li>
          <li class="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="" class="hover:text-primary me-4">Terms</a>
          </li>
          <li class="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="" class="hover:text-primary me-4">Developers</a>
          </li>
          <li class="after:content-['-'] after:text-slate-500 after:font-extrabold">
            <a href="" class="hover:text-primary me-4">Support</a>
          </li>
          <li>
            <a href="" class="hover:text-primary"
              >Careers
              <span class="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">We're hiring</span>
            </a>
          </li>
        </ul>

        <p class="my-5">
          {year} © Prompt. All rights reserved. Crafted by
        </p>
        <a href="index.html">
          <img src="/images/logo-dark.png" class="h-8 mx-auto" />
        </a>
      </div>
    </div>
  </div>
</section>
