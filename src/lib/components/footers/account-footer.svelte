<script lang="ts">
  const year = new Date().getFullYear();
</script>

<section class="bg-white py-6 relative">
  <div class="container">
    <div class="flex items-center flex-wrap">
      <div class="grow">
        <div class="flex items-center gap-3">
          <div class="inline-flex items-center"><a href="">About <i class="fa-solid fa-minus text-sm"></i></a></div>
          <div class="inline-flex items-center"><a href="">Privacy <i class="fa-solid fa-minus text-sm"></i></a></div>
          <div class="inline-flex items-center"><a href="">Terms <i class="fa-solid fa-minus text-sm"></i></a></div>
          <div class="inline-flex items-center"><a href="">Developers <i class="fa-solid fa-minus text-sm"></i></a></div>
          <div class="inline-flex items-center"><a href="">Support <i class="fa-solid fa-minus text-sm"></i></a></div>
          <div class="inline-flex items-center"><a href="">Careers<span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-semibold bg-green-500/10 text-green-500">We're hiring</span></a></div>
        </div>
      </div>
      <div class="shrink md:text-end mt-4 lg:mt-0">
        <p class="text-sm mb-0">{year} © Prompt. All rights reserved. Crafted by <a href="https://coderthemes.com/">Coderthemes</a></p>
      </div>
    </div>
  </div>
</section>
