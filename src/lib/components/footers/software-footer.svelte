<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="pt-10 pb-6">
  <div class="container">
    <div class="text-center">
      <h2 class="text-3xl/tight font-medium my-5">Be the first to know!</h2>
      <p class="text-gray-500">We'll inform you about new updates, features, but no spam, we promise.</p>

      <div class="flex flex-wrap items-center justify-center gap-2 my-10">
        <div class="flex items-center">
          <input type="text" id="email-input" name="email-input" placeholder="Your email" class="w-full text-sm rounded border-gray-200 focus:border-gray-400 focus:ring-0 bg-transparent py-2 px-4" />
        </div>
        <a href="" class="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50">Sign Up</a>
      </div>
    </div>
  </div>

  <div class="border-b"></div>

  <div class="container">
    <div class="text-center mt-10">
      <p class="text-gray-600 mb-7">
        {year} © Prompt. All rights reserved. Crafted by <a href="" class="text-gray-800 hover:text-primary transition-all">Coderthemes</a>
      </p>

      <ul class="flex flex-wrap items-center justify-center gap-10 mb-8">
        <li>
          <a href="">Changelog</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Press kit</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
        <li>
          <a href="" class="hover:text-primary"
            >Careers
            <span class="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">We're hiring</span>
          </a>
        </li>
      </ul>
      <a href="index.html">
        <img src="/images/logo-dark.png" class="h-8 mx-auto" />
      </a>
    </div>
  </div>
</footer>
