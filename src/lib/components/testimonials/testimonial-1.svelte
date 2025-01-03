<script>
  import { onMount } from 'svelte';

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      date: "15 Feb, 2024",
      title: "Exceptional High-Risk Processing",
      text: "IpsePay has revolutionized how we handle high-risk transactions. Their robust security measures and quick approval process have made our operations seamless.",
      rating: 5,
      avatar: "🇺🇸"
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      date: "22 Jan, 2024",
      title: "Perfect for Global Business",
      text: "As a global business, we needed a processor that could handle international transactions efficiently. IpsePay delivered beyond expectations with worldwide coverage.",
      rating: 5,
      avatar: "🇸🇬"
    },
    {
      name: "Elena Petrova",
      country: "Russia",
      date: "3 Mar, 2024",
      title: "Reliable Payment Solutions",
      text: "Finding a processor for our high-risk industry was challenging until we discovered IpsePay. Their support team is exceptional and available 24/7.",
      rating: 5,
      avatar: "🇷🇺"
    },
    {
      name: "David Williams",
      country: "United Kingdom",
      date: "18 Apr, 2024",
      title: "Outstanding Fraud Protection",
      text: "The advanced fraud detection systems at IpsePay have saved us countless times. Their security measures are top-notch while maintaining smooth flows.",
      rating: 5,
      avatar: "🇬🇧"
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      date: "5 May, 2024",
      title: "Seamless Integration",
      text: "The integration process was straightforward and well-documented. IpsePay's technical team provided excellent support throughout implementation.",
      rating: 5,
      avatar: "🇪🇸"
    },
    {
      name: "Hans Weber",
      country: "Germany",
      date: "12 Mar, 2024",
      title: "Competitive High-Risk Rates",
      text: "Despite being in a high-risk industry, IpsePay offered us competitive rates and transparent pricing. Their service has been invaluable to our growth.",
      rating: 5,
      avatar: "🇩🇪"
    },
    {
      name: "Sophie Laurent",
      country: "France",
      date: "8 Apr, 2024",
      title: "Excellent Chargeback Protection",
      text: "IpsePay's chargeback prevention tools have significantly reduced our risks. Their proactive approach to fraud prevention is outstanding.",
      rating: 5,
      avatar: "🇫🇷"
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      date: "25 Mar, 2024",
      title: "Superior Customer Support",
      text: "The level of customer service is exceptional. Any issues are resolved quickly, and their team is always ready to help optimize our payment processes.",
      rating: 5,
      avatar: "🇮🇹"
    },
    {
      name: "Anna Kowalski",
      country: "Poland",
      date: "15 May, 2024",
      title: "Fast Payouts & Great Service",
      text: "The quick payout system and reliable platform have made IpsePay our trusted payment partner. Their service exceeds expectations.",
      rating: 5,
      avatar: "🇵🇱"
    },
    {
      name: "Alex Thompson",
      country: "Canada",
      date: "30 Apr, 2024",
      title: "Innovative Payment Solutions",
      text: "IpsePay stays ahead with innovative features and security updates. They understand high-risk business needs and deliver accordingly.",
      rating: 5,
      avatar: "🇨🇦"
    }
  ];

  let scrollContainer;
  
  onMount(() => {
    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    };

    const scrollInterval = setInterval(scroll, 30);

    return () => clearInterval(scrollInterval);
  });
</script>

<section class="py-16 md:py-24 relative overflow-hidden pb-20 border-b border-gray-200 w-full">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#605bff]/5 to-transparent"></div>

  <div class="container-fluid px-4 md:px-6 relative">
    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 bg-[#605bff]/10 rounded-full px-3 py-1 mb-6">
        <svg class="w-5 h-5 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="text-sm font-medium text-[#605bff]">Testimonials</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-[#32325d] mb-4">What Our Clients Say</h2>
      <p class="text-gray-600">Trusted by businesses worldwide</p>
    </div>

    <!-- Testimonials Slider -->
    <div class="relative w-full overflow-hidden -mx-4">
      <div class="flex gap-6 animate-scroll px-4">
        {#each [...testimonials, ...testimonials] as testimonial}
          <div class="flex-none w-[280px] sm:w-[320px] md:w-[340px] lg:w-[380px]">
            <div class="bg-white rounded-2xl p-6 h-full transition-all duration-300
                        shadow-sm hover:shadow-xl border border-gray-100
                        transform hover:-translate-y-1">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-[#605bff]/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 class="font-semibold text-[#32325d]">{testimonial.name}</h3>
                  <p class="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
              
              <!-- Rating -->
              <div class="flex text-[#605bff] mb-3">
                {#each Array(testimonial.rating) as _}
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                {/each}
              </div>
              
              <!-- Content -->
              <h4 class="font-semibold text-[#32325d] mb-2">{testimonial.title}</h4>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">{testimonial.text}</p>
              
              <!-- Footer -->
              <div class="pt-4 border-t border-gray-100">
                <p class="text-sm text-[#605bff]">{testimonial.date}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .container-fluid {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .animate-scroll {
    animation: scroll 60s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 1.5rem));
    }
  }

  /* Smooth transitions */
  .transition-all {
    transition: all 0.3s ease-in-out;
  }

  /* Hide scrollbar but keep functionality */
  .flex::-webkit-scrollbar {
    display: none;
  }

  .flex {
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Ensure cards are visible on all screen sizes */
  @media (min-width: 1536px) {
    .animate-scroll {
      animation-duration: 80s;
    }
  }

  @media (max-width: 640px) {
    .animate-scroll {
      animation-duration: 40s;
    }
  }
</style>
