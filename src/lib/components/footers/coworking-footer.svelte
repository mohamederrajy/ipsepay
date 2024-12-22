<script lang="ts">
  const year = new Date().getFullYear();
</script>

<section class="py-20 bg-primary/10">
  <div class="container">
    <div class="grid grid-cols-4 gap-6">
      <div class="col-span-4 sm:col-span-4 lg:col-span-1">
        <a href="index.html">
          <img src="/images/logo-dark.png" class="w-32" />
        </a>
        <div class="mt-5">
          <p class="text-base">At vero eos et accusamus et iusto dignissimos ducimus odio.</p>
          <p class="text-sm lg:mt-16 mt-7">
            Prompt
            {year}
            . All rights reserved.
          </p>
        </div>
      </div>

      <div class="col-span-4 md:col-span-1 lg:col-span-1 md:mx-auto">
        <h5 class="text-sm font-semibold uppercase mb-3">nevigation</h5>
        <ul>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Home</a></li>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Locations</a></li>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Plans</a></li>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Events</a></li>
        </ul>
      </div>

      <div class="col-span-4 md:col-span-1 lg:col-span-1">
        <h5 class="text-sm font-semibold uppercase mb-3">Contact</h5>
        <ul>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Support</a></li>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Developers</a></li>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Customer Service</a></li>
          <li class="py-1.5"><a href="javascript:void(0);" class="text-sm hover:text-slate-700">Get Started Guide</a></li>
        </ul>
      </div>

      <div class="col-span-4 md:col-span-2 lg:col-span-1">
        <h5 class="text-sm font-semibold uppercase">Subscribe To Newsletters</h5>
        <ul class="mt-4">
          <li class="py-1.5">
            <div class="lg:flex items-center gap-5 border rounded-md bg-white">
              <div class="flex items-center w-full justify-between">
                <div class="flex items-center">
                  <input type="text" id="email-input" name="email-input" placeholder="Your email" class="border-0 w-full text-sm focus:ring-0 bg-white ps-3" />
                </div>

                <a href="" class="text-white rounded-r-md text-sm py-[10px] px-4 duration-300 uppercase bg-primary hover:bg-primary/90">
                  <i class="fa-regular fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
