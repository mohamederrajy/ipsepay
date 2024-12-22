<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="bg-gray-100">
  <div class="container">
    <div class="py-14 pb-10">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-5 pt-14">
        <div>
          <a href="/">
            <img src="/images/logo-dark.png" class="w-32 mb-3" alt="" />
          </a>
          <p class="text-sm/relaxed tracking-wider text-gray-500">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
        </div>

        <div>
          <div class="flex justify-start sm:justify-end lg:gap-32 gap-14">
            <div>
              <div class="flex flex-col gap-4 text-sm">
                <h5 class="mb-3">Resources</h5>
                <div class="text-gray-500/80"><a href="javascript:void(0);">Blog</a></div>
                <div class="text-gray-500/80"><a href="javascript:void(0);">FAQ</a></div>
                <div class="text-gray-500/80"><a href="javascript:void(0);">Team of service</a></div>
                <div class="text-gray-500/80"><a href="javascript:void(0);">Privacy policy</a></div>
              </div>
            </div>

            <div>
              <div class="flex flex-col gap-4 text-sm">
                <h5 class="mb-3">Company</h5>
                <div class="text-gray-500/80"><a href="javascript:void(0);">About</a></div>
                <div class="text-gray-500/80"><a href="javascript:void(0);">Contact Us</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b"></div>

    <div class="py-5">
      <div class="grid sm:grid-cols-2 text-center sm:text-start gap-6">
        <div>
          <p class="text-gray-500/80 text-sm">
            {year} © Prompt. All rights reserved. Crafted by <a href="" class="text-gray-800 hover:text-primary transition-all">Coderthemes</a>
          </p>
        </div>

        <div class="flex justify-center sm:justify-end gap-7">
          <div>
            <a href="">
              <svg class="w-5 h-5 text-gray-600 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="">
              <svg class="w-5 h-5 text-gray-600 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a href="">
              <svg class="w-5 h-5 text-gray-600 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
