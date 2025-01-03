<script lang="ts">
  import { slide } from 'svelte/transition';
  
  // Create an array of FAQ items with isOpen state
  let faqs = [
    {
      q: "What is IpsePay?",
      a: "IpsePay is a secure and reliable payment gateway that specializes in processing payments for high-risk businesses",
      isOpen: false
    },
    {
      q: "Which industries does IpsePay support?",
      a: "IpsePay supports various industries, including e-commerce, travel, gaming, subscription services, and other high-risk businesses",
      isOpen: false
    },
    {
      q: "How does IpsePay ensure payment security?",
      a: "We use advanced encryption, tokenization, and are fully PCI DSS compliant to safeguard all transactions and sensitive data",
      isOpen: false
    },
    {
      q: "Does IpsePay support refunds and chargebacks?",
      a: "Yes, our intuitive dashboard allows you to process refunds and manage chargebacks efficiently",
      isOpen: false
    },
    {
      q: "How do I sign up for IpsePay?",
      a: "Simply fill out our online application form, provide the required documentation, and we'll guide you through the onboarding process",
      isOpen: false
    },
    {
      q: "What is the payout time for transactions?",
      a: "IpsePay ensures fast payouts, with funds typically settled in just 48 hours",
      isOpen: false
    }
  ];

  // Toggle function
  function toggleFaq(index: number) {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
  }
</script>

<section class="py-16 md:py-24 relative overflow-hidden pb-20 border-b border-gray-200">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent"></div>

  <div class="container mx-auto px-4 md:px-6 relative">
    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-3 py-1 mb-6">
        <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-sm font-medium text-[#605bff]">FAQs</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-[#32325d] mb-4">Frequently Asked Questions</h2>
      <p class="text-gray-600">Here are some of the basic types of questions for our customers</p>
    </div>

    <!-- FAQ Items -->
    <div class="max-w-3xl mx-auto space-y-4">
      {#each faqs as faq, i}
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 transition-all hover:shadow-md">
          <button 
            class="w-full text-left px-6 py-4 flex items-center justify-between"
            on:click={() => toggleFaq(i)}
          >
            <span class="font-medium text-gray-900">{faq.q}</span>
            <svg 
              class="w-5 h-5 text-[#605bff] transition-transform duration-200 {faq.isOpen ? 'rotate-180' : ''}" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
            </svg>
          </button>
          {#if faq.isOpen}
            <div class="px-6 pb-4 text-gray-600" transition:slide={{ duration: 200 }}>
              {faq.a}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Contact Link -->
    <div class="text-center mt-12">
      <div class="inline-flex items-center gap-2 bg-[#605bff]/5 rounded-full px-6 py-3">
        <span class="text-gray-600">Still have questions?</span>
        <a href="/contact" class="text-[#605bff] font-medium hover:text-[#605bff]/80 transition-colors">
          Contact Us →
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 1280px;
  }

  button:focus {
    outline: none;
  }
</style>
