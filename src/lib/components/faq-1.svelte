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

<section class="relative overflow-hidden py-16 sm:py-24 lg:py-32">
  <div class="relative container mx-auto px-4 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Responsive Header -->
    <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
      <div class="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/90 
                  p-1 sm:p-1.5 pr-3 sm:pr-6 backdrop-blur-xl border border-white/20 
                  shadow-xl hover:shadow-2xl transition-all duration-300 
                  mb-6 sm:mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium 
                     text-white relative overflow-hidden">
          <span class="relative z-10">FAQs</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-xs sm:text-sm font-medium text-[#32325d]">
          Frequently Asked Questions
        </span>
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight 
                 mb-4 sm:mb-8 text-[#32325d] px-4">
        Got Questions?
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">We've Got Answers</span>
        </span>
      </h2>
    </div>

    <!-- Enhanced FAQ Items with Better Icons -->
    <div class="max-w-3xl mx-auto space-y-4">
      {#each faqs as faq, i}
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm 
                    hover:shadow-md transition-all duration-300">
          <button 
            class="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            on:click={() => toggleFaq(i)}
          >
            <span class="font-medium text-[#32325d] text-lg">{faq.q}</span>
            
            <!-- Enhanced Icon Design -->
            <div class="flex-shrink-0 w-8 h-8 rounded-full 
                        bg-gradient-to-b from-[#605bff]/5 to-[#605bff]/10
                        flex items-center justify-center
                        transition-all duration-300 ease-in-out
                        {faq.isOpen ? 'bg-[#605bff] shadow-lg shadow-[#605bff]/20' : 'hover:bg-[#605bff]/20'}">
              <svg 
                class="w-4 h-4 transition-all duration-300
                       {faq.isOpen ? 'text-white rotate-180' : 'text-[#605bff]'}" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
          
          {#if faq.isOpen}
            <div class="px-6 pb-5" transition:slide={{ duration: 200 }}>
              <div class="pt-3 border-t border-gray-100">
                <p class="text-[#32325d]/70 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Simplified Contact Link -->
    <div class="text-center mt-12">
      <a href="/contact" 
         class="inline-flex items-center gap-2 text-[#605bff] hover:text-[#32325d] 
                transition-colors duration-200 font-medium">
        Still have questions? 
        <span class="group-hover:translate-x-1 transition-transform">
          Contact Us →
        </span>
      </a>
    </div>
  </div>
</section>

<style>
  /* Add smooth rotation animation */
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  /* Keep existing animations */
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 200% auto;
    animation: gradient 4s ease infinite;
  }

  button:focus {
    outline: none;
    ring: 2px solid #605bff;
    ring-offset: 2px;
  }

  /* Add touch target improvements for mobile */
  @media (max-width: 640px) {
    button {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }
  }
</style>
