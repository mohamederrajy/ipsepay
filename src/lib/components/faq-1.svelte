<script lang="ts">
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

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

  function toggleFaq(index: number) {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
  }
</script>

<section class="relative overflow-hidden py-32">
  <!-- Enhanced Background with Animation -->
  <div class="absolute inset-0 bg-[#fafafa]">
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.3]"></div>
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[1200px] h-[1200px] 
                  bg-gradient-to-br from-[#605bff]/10 via-purple-100/10 to-transparent 
                  rounded-full blur-3xl transform rotate-12 animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-[1000px] h-[1000px] 
                  bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/5 to-transparent 
                  rounded-full blur-3xl transform -rotate-12 animate-pulse"></div>
    </div>
  </div>

  <div class="relative container mx-auto px-4 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Modern Header with Enhanced Animation -->
    <div class="max-w-3xl mx-auto text-center mb-24">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                  transition-all duration-300 mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
          <span class="relative z-10">FAQs</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-sm font-medium text-[#32325d]">Frequently Asked Questions</span>
      </div>

      <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
        Got Questions?
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">We've Got Answers</span>
        </span>
      </h2>
    </div>

    <!-- Enhanced FAQ Items -->
    <div class="max-w-3xl mx-auto space-y-4">
      {#each faqs as faq, i}
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 
                    shadow-xl hover:shadow-2xl transition-all duration-300">
          <button 
            class="w-full text-left px-8 py-6 flex items-center justify-between"
            on:click={() => toggleFaq(i)}
          >
            <span class="font-semibold text-lg text-[#32325d]">{faq.q}</span>
            <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#605bff]/5 to-[#605bff]/10 
                        flex items-center justify-center transition-all duration-300 
                        {faq.isOpen ? 'rotate-180 bg-[#605bff]' : ''}">
              <svg 
                class="w-5 h-5 {faq.isOpen ? 'text-white' : 'text-[#605bff]'}" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </button>
          {#if faq.isOpen}
            <div class="px-8 pb-6" transition:slide={{ duration: 300 }}>
              <p class="text-[#32325d]/70 leading-relaxed">{faq.a}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Enhanced Contact Link -->
    <div class="text-center mt-16">
      <a href="/contact" 
         class="inline-flex items-center gap-3 rounded-full bg-white/90 px-8 py-4 
                backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                transition-all duration-300 group">
        <span class="text-[#32325d]">Still have questions?</span>
        <span class="text-[#605bff] font-medium group-hover:translate-x-1 transition-transform">
          Contact Us →
        </span>
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  button:focus {
    outline: none;
  }
</style>
