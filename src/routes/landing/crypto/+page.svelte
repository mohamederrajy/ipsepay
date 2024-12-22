<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import CryptoHero from "$lib/components/heros/crypto-hero.svelte";
  import CryptoFooter from "$lib/components/footers/saas-footer.svelte";

  const statData = [
    {
      number: "$50M+",
      text: "Value transacted",
      subTxt: "in overall sell/buy transactions",
    },
    {
      number: "2.1M+",
      text: "Transactions Processed",
      subTxt: "across 10+ countries",
    },
    {
      number: "2M+",
      text: "Satisfied Processed",
      subTxt: "across 100+ locations",
    },
    {
      number: "4.5",
      text: "Star App Rating",
      subTxt: "on google play & apple store",
    },
  ];
</script>

<PageTitle title="Crypto Landing Page" />

<CryptoHero />

<!-- Coins Section -->
<section class="py-20" data-aos="fade-up">
  <div class="container">
    <div class="text-center">
      <h1 class="text-3xl font-medium">Supported coins</h1>
      <p class="font-medium text-slate-500 mt-5 mb-4">
        Fastest way to buy or sell
        <span class="text-slate-900">popular</span> crypto coins.
      </p>
    </div>

    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14 mt-16">
      <div class="flex items-center gap-5">
        <i class="fa-brands fa-bitcoin text-orange-400 text-5xl"></i>
        <h4 class="text-base">Bitcoin</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
          <i class="fa-brands fa-ethereum text-white text-3xl"></i>
        </div>
        <h4 class="text-base">Ethereum</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-emerald-700 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-t text-white text-2xl"></i>
        </div>
        <h4 class="text-base">Tether</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-lock text-white text-2xl"></i>
        </div>
        <h4 class="text-base">Chainlink</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-diamond text-white text-2xl"></i>
        </div>
        <h4 class="text-base">Basic Attention Token</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center">
          <i class="fa-brands fa-dochub text-white text-2xl"></i>
        </div>
        <h4 class="text-base">Dash</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-amber-300 rounded-full flex items-center justify-center">
          <i class="fa-brands fa-dropbox text-white text-2xl"></i>
        </div>
        <h4 class="text-base">Binance Coin</h4>
      </div>

      <div class="flex items-center gap-5">
        <div class="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
          <i class="fa-brands fa-tiktok text-white text-2xl"></i>
        </div>
        <h4 class="text-base">Tezos</h4>
      </div>
    </div>

    <div class="text-center mt-16">
      <a href="" class="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">View complete list <i class="fa-solid fa-arrow-right ms-2"></i></a>
    </div>
  </div>
</section>

<!-- features Section -->
<section class="py-24 bg-slate-500/10 relative" data-aos="fade-up">
  <div class="absolute top-0 inset-x-0 hidden sm:block">
    <img src="/images/shapes/white-wave.svg" alt="svg" class="w-full -scale-x-100" />
  </div>
  <div class="container relative">
    <div class="text-center">
      <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Why Choose Us</span>
      <h1 class="text-3xl font-medium my-3">The most trusted way to buy or sell crypto currency</h1>
      <p class="text-slate-400 mt-5 mb-4">Here are the few reasons why you should choose us</p>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
      <div class="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
        <div>
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" id="Path-50" fill="currentcolor" opacity="0.3"></path>
                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" id="check-path" fill="currentcolor"></path>
              </g>
            </svg>
          </div>
        </div>
        <div>
          <h5 class="text-base font-semibold">Secure & Encrypted Transactions</h5>
          <p class="text-slate-600 mt-2">Advanced payment and processing technologies, fine-tuned from more than 3 years development</p>
        </div>
      </div>

      <div class="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
        <div>
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <rect id="Combined-Shape" fill="currentcolor" opacity="0.3" x="2" y="5" width="20" height="14" rx="2"></rect>
                <rect id="Rectangle-59" fill="currentcolor" x="2" y="8" width="20" height="3"></rect>
                <rect id="Rectangle-59-Copy" fill="currentcolor" opacity="0.3" x="16" y="14" width="4" height="2" rx="1"></rect>
              </g>
            </svg>
          </div>
        </div>
        <div>
          <h5 class="text-base font-semibold">Transparent Fees</h5>
          <p class="text-slate-600 mt-2">Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle.</p>
        </div>
      </div>

      <div class="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
        <div>
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <rect id="Combined-Shape" fill="currentcolor" opacity="0.3" x="2" y="2" width="20" height="20" rx="10"></rect>
                <path d="M6.16794971,14.5547002 C5.86159725,14.0951715 5.98577112,13.4743022 6.4452998,13.1679497 C6.90482849,12.8615972 7.52569784,12.9857711 7.83205029,13.4452998 C8.9890854,15.1808525 10.3543313,16 12,16 C13.6456687,16 15.0109146,15.1808525 16.1679497,13.4452998 C16.4743022,12.9857711 17.0951715,12.8615972 17.5547002,13.1679497 C18.0142289,13.4743022 18.1384028,14.0951715 17.8320503,14.5547002 C16.3224187,16.8191475 14.3543313,18 12,18 C9.64566871,18 7.67758127,16.8191475 6.16794971,14.5547002 Z" id="Path-56" fill="currentcolor"></path>
              </g>
            </svg>
          </div>
        </div>
        <div>
          <h5 class="text-base font-semibold">Easy to Use</h5>
          <p class="text-slate-600 mt-2">Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!</p>
        </div>
      </div>

      <div class="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
        <div>
          <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
            <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z" id="Path-76" fill="currentcolor"></path>
                <path d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z" id="Combined-Shape" fill="currentcolor" opacity="0.3"></path>
              </g>
            </svg>
          </div>
        </div>
        <div>
          <h5 class="text-base font-semibold">Easy to Use</h5>
          <p class="text-slate-600 mt-2">Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Integration Section -->
<section class="py-24" data-aos="fade-up">
  <div class="container">
    <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
      <div class="lg:me-20">
        <div class="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
          <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect id="bound" x="0" y="0" width="24" height="24"></rect>
              <path d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z" id="Combined-Shape" fill="currentcolor"></path>
              <rect id="Rectangle-28" fill="currentcolor" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) " x="11" y="4" width="2" height="16" rx="1"></rect>
            </g>
          </svg>
        </div>
        <h1 class="sm:text-3xl text-xl font-medium my-3">Easy to Integrate - SDK</h1>
        <p class="text-slate-500 mt-5 mb-4">Maecenas blandit aliquam sem, auctor accumsan mauris finibus pellentesque. In vestibulum ac nunc ut rutrum. Donec mollis viverra magna vel tincidunt.</p>
        <p class="text-slate-500 mt-5 mb-4">Ut faucibus libero non tortor commodo, ac faucibus lectus fermentum. Sed sit amet ornare turpis, ac lobortis urna.</p>
        <div class="flex flex-wrap items-center gap-5 mt-12">
          <a href="" class="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">Explore the SDK</a>
          <a href="" class="py-3 px-6 rounded border-primary/5 text-primary bg-primary/5 hover:border-primary hover:bg-primary/10 hover:shadow hover:shadow-primary transition-all duration-500">Documentation</a>
        </div>
      </div>

      <div>
        <img src="/images/other/code.jpg" class="lg:mx-auto" />
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="py-24 bg-slate-500/10 relative" data-aos="fade-up">
  <div class="absolute top-0 inset-x-0 hidden sm:block">
    <img src="/images/shapes/white-wave.svg" alt="svg" class="w-full -scale-x-100" />
  </div>
  <div class="container relative">
    <div class="text-center">
      <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Stats</span>
      <h1 class="text-3xl font-medium my-3">Prompt In Numbers</h1>
    </div>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
      {#each statData as item, idx (idx)}
        <div class="text-center">
          <span class="text-3xl">{item.number}</span>
          <p class="font-semibold mt-3">{item.text}</p>
          <p class="text-slate-800 mt-1">{item.subTxt}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Blog Section -->
<section class="py-20">
  <div class="container">
    <div class="text-center">
      <h1 class="text-3xl font-medium my-3">Useful Reading</h1>
      <p class="text-slate-500 mt-5 mb-4">Few articles to read to know more about cryptocurrency</p>
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
      <div>
        <div class="relative" data-aos="fade-up" data-aos-duration="300">
          <span class="absolute top-3 bg-orange-500 p-1 pe-6 text-sm font-semibold text-white" style="clip-path: polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%);">Announcement</span>
          <img src="/images/blog/blog-1.png" class="rounded-md" />
        </div>
        <p class="text-slate-500 mt-5">May 19 2020 . 5 min read</p>
        <h4 class="mt-1 text-lg">
          <a href="">Introducing blazzing fast new user interface</a>
        </h4>
      </div>

      <div>
        <div class="relative" data-aos="fade-up" data-aos-duration="600">
          <span class="absolute top-3 bg-red-500 p-1 pe-6 text-sm font-semibold text-white" style="clip-path: polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%);">Bitcoin</span>
          <img src="/images/blog/blog-3.png" class="rounded-md" />
        </div>
        <p class="text-slate-500 mt-5">May 18 2020 . 8 min read</p>
        <h4 class="mt-1 text-lg">
          <a href="">What you should know before buying bitcoin</a>
        </h4>
      </div>

      <div>
        <div class="relative" data-aos="fade-up" data-aos-duration="900">
          <span class="absolute top-3 bg-blue-500 p-1 pe-6 text-sm font-semibold text-white" style="clip-path: polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%);">Event</span>
          <img src="/images/blog/blog-2.png" class="rounded-md" />
        </div>
        <p class="text-slate-500 mt-5">May 13 2020 . 2 min read</p>
        <h4 class="mt-1 text-lg">
          <a href="">A biggest crypto event to attend this month</a>
        </h4>
      </div>
    </div>
  </div>
</section>

<CryptoFooter />
