<script lang="ts">
  import PageTitle from "$lib/components/page-title.svelte";
  import StartupHero from "$lib/components/heros/startup-hero.svelte";
  import StartupFooter from "$lib/components/footers/startup-footer.svelte";
</script>

<PageTitle title="Startup Landing Page" />

<StartupHero />

<!-- clients - reviews Section -->
<section class="xl:py-24 py-16">
  <div class="container" data-aos="fade-up" data-aos-duration="1000">
    <div class="text-center">
      <div>
        <p class="text-base font-semibold">Join 10,000+ companies who trust Prompt.</p>
        <div class="flex flex-wrap md:flex-nowrap justify-center gap-10 mt-7">
          <div>
            <img src="/images/brands/amazon.svg" class="w-28" />
          </div>
          <div>
            <img src="/images/brands/google.svg" class="w-28" />
          </div>
          <div>
            <img src="/images/brands/paypal.svg" class="w-28" />
          </div>
          <div>
            <img src="/images/brands/spotify.svg" class="w-28" />
          </div>
          <div>
            <img src="/images/brands/shopify.svg" class="w-28" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- feature Section -->
<section class="xl:py-24 py-16 overflow-x-hidden">
  <div class="container">
    <div>
      <div class="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
        <div class="order-2 lg:order-1">
          <span class="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">Feature</span>
          <h1 class="text-3xl/tight font-medium mt-3 mb-4">Automate everything</h1>
          <p class="text-gray-500">You don't need to manully follow up with your visitors. The Prompt takes care of it and follow up automatically with them to understand their needs</p>
          <button class="mt-12 flex items-center">
            <a href="" class="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4">Learn more <i class="fa-solid fa-arrow-right ms-2"></i></a>
          </button>
        </div>

        <div class="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
          <img src="/images/features/desktop1.gif" />
        </div>
      </div>
    </div>

    <div class="xl:py-24 py-16">
      <div class="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
        <div>
          <img src="/images/hero/desktop.png" data-aos="fade-right" data-aos-duration="1500" />
        </div>

        <div>
          <h1 class="text-3xl/tight font-medium mt-3 mb-4">Auto-tune your marketing campaigns</h1>
          <p class="text-gray-500">The Prompts keeps an eye on your all marketting effort and auto tune the marketing campaigns settings to make them perform better</p>
          <button class="mt-12 flex items-center">
            <a href="" class="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4">Learn more <i class="fa-solid fa-arrow-right ms-2"></i></a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- integrations Section -->
<section class="bg-gray-100 xl:py-24 py-16">
  <div class="container" data-aos="fade-up" data-aos-duration="1500">
    <div class="text-center">
      <span class="text-xs bg-primary/10 text-primary/90 rounded-full px-3 py-1">Integrations</span>
      <h1 class="text-3xl/tight font-medium mt-3 mb-4">Sync your data anywhere</h1>
      <p class="text-gray-500">Sync your campaigns or other marketing data <span class="text-primary">anywhere.</span></p>
    </div>

    <div class="pt-16">
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-7">
        <div>
          <div class="bg-white flex items-center rounded gap-5 p-5">
            <img src="/images/brands/slack.png" class="w-16" />
            <div>
              <h1 class="mb-3">Slack</h1>
              <p class="text-gray-500">Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go</p>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white flex items-center rounded gap-5 p-5">
            <img src="/images/brands/fb.png" class="w-16" />
            <div>
              <h1 class="mb-3">Facebook Lead Ads</h1>
              <p class="text-gray-500">Facebook lead ads make signing up for business information easy for people and more valuable for businesses</p>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white flex items-center rounded gap-5 p-5">
            <img src="/images/brands/salesforce.jpg" class="w-16" />
            <div>
              <h1 class="mb-3">Salesforce</h1>
              <p class="text-gray-500">Salesforce is a leading enterprise customer relationship manager (CRM) application</p>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white flex items-center rounded gap-5 p-5">
            <img src="/images/brands/at.png" class="w-16" />
            <div>
              <h1 class="mb-3">Airtable</h1>
              <p class="text-gray-500">Organize anything with Airtable, a modern database created for everyone</p>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white flex items-center rounded gap-5 p-5">
            <img src="/images/brands/gsheet.png" class="xl:w-32 w-16" />
            <div>
              <h1 class="mb-3">Google Sheets</h1>
              <p class="text-gray-500">Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data</p>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white flex items-center rounded gap-5 p-5">
            <img src="/images/brands/ac.jpeg" class="w-16" />
            <div>
              <h1 class="mb-3">ActiveCampaign</h1>
              <p class="text-gray-500">ActiveCampaign combines all aspects of email marketing into a single and easy-to-use platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section class="xl:py-24 py-16">
  <div class="container" data-aos="fade-up" data-aos-duration="1500">
    <div class="text-center">
      <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Pricing</span>
      <h1 class="text-3xl/tight font-medium mt-3 mb-4">Pricing Plans</h1>
      <p class="text-gray-500">Pricing that <span class="text-primary">works </span> for everyone.</p>
    </div>

    <div class="pt-16 overflow-x-auto">
      <div class="inline-block overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr class="text-center divide-y">
              <th class="px-5 py-4 xl:w-2/5 w-1/2 text-xs text-start border-b-2 border-t"></th>
              <th class="px-5 py-4 xl:w-[15%] w-1/4">
                <h1>Starter</h1>
                <p class="text-gray-500 text-xs">$40/mo</p>
              </th>
              <th class="px-5 py-4 w-1/4 border-s">
                <h1>Professional <span class="inline-flex text-xs bg-red-500 text-white rounded-full py-1 px-3">Popular</span></h1>
                <p class="text-gray-500 text-xs">$60/mo</p>
              </th>
              <th class="px-5 py-4 w-[10%] border-s">
                <h1>Enterprise</h1>
                <p class="text-gray-500 text-xs">$300/mo</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center divide-y-2">
              <td class="p-3 text-start border-b">
                <p>Landing pages</p>
              </td>
              <td class="p-3">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>Drag-and-drop editor</p>
              </td>
              <td class="p-3"></td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>Email marketing</p>
              </td>
              <td class="p-3">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>Ad retargeting</p>
              </td>
              <td class="p-3">
                <span class="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">Add-on Available</span>
              </td>
              <td class="p-3 border-s"></td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>Messenger integration</p>
              </td>
              <td class="p-3"></td>
              <td class="p-3 border-s"></td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>Live chat</p>
              </td>
              <td class="p-3"></td>
              <td class="p-3 border-s">
                <span class="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">Add-on Available</span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>Conversational bots</p>
              </td>
              <td class="p-3"></td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="text-center divide-y">
              <td class="p-3 text-start border-b">
                <p>SEO recommendations & optimizations</p>
              </td>
              <td class="p-3"></td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
              <td class="p-3 border-s">
                <span><i class="fa-solid fa-check text-green-500"></i></span>
              </td>
            </tr>
            <tr class="divide-y">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<StartupFooter />
