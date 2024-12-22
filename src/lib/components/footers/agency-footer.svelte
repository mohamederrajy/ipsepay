<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="bg-gray-100 pt-14 pb-5">
  <div class="container">
    <div class="grid grid-cols-4 gap-14">
      <div class="xl:col-span-1 col-span-4">
        <a href="index.html">
          <img src="/images/logo-dark.png" class="h-8" />
        </a>
        <p class="text-gray-500/80 mt-5">300 Park Avenue, 12th Floor New York, NY 10022</p>
        <p class="text-gray-500/80 mt-5">1499 Burwell Heights Road Port Arthur Meadow Nashville, TX 77642</p>
      </div>
      <div class="xl:col-span-3 col-span-4 xl:mx-20">
        <div class="flex flex-col sm:flex-row gap-14 flex-wrap justify-between">
          <div>
            <div class="flex flex-col gap-3">
              <h5 class="mb-3">About</h5>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Home</a></div>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Portfolio</a></div>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Resources</a></div>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Blog</a></div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-3">
              <h5 class="mb-3">Company</h5>
              <div class="text-gray-500/80"><a href="javascript:void(0);">About</a></div>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Career</a></div>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Clients</a></div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-3">
              <h5 class="mb-3">Get in touch</h5>
              <div class="text-gray-500/80"><a href="javascript:void(0);">hello@Prompt.com</a></div>
              <div class="flex sm:justify-center gap-7">
                <div>
                  <a href="">
                    <svg class="w-5 h-5 text-slate-400 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="">
                    <svg class="w-5 h-5 text-slate-400 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="">
                    <svg class="w-5 h-5 text-slate-400 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="">
                    <svg class="w-5 h-5 text-slate-400 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-3">
              <h5 class="mb-3">Languages</h5>
              <div class="text-gray-500/80"><a href="javascript:void(0);">Francais</a></div>
              <div class="text-gray-500/80"><a href="javascript:void(0);">English</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b my-5"></div>
    <div class="text-center">
      <p class="text-gray-500/80 text-sm">
        {year} © Prompt. All rights reserved. Crafted by <a href="" class="text-gray-800 hover:text-primary transition-all">Coderthemes</a>
      </p>
    </div>
  </div>
</footer>
