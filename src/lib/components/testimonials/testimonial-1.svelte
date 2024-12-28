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

<section class="w-full bg-white py-16 overflow-hidden" id="WhatOurClientsSay">
  <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#32325d] px-4">What Our Clients Say</h2>
  
  <div class="relative w-full overflow-hidden">
    <div class="flex gap-4 sm:gap-6 px-4 animate-scroll">
      {#each [...testimonials, ...testimonials] as testimonial}
        <div class="flex-none w-[85%] sm:w-[50%] md:w-[40%] lg:w-[calc(20%-1rem)]">
          <div class="bg-white rounded-xl p-4 sm:p-6 h-full transition-all duration-300 ease-in-out
                      ring-1 ring-black/5
                      hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                      transform hover:-translate-y-1">
            <div class="flex items-center gap-3 sm:gap-4 mb-4">
              <div class="text-3xl sm:text-4xl">{testimonial.avatar}</div>
              <div>
                <h3 class="font-semibold text-base sm:text-lg text-[#32325d]">{testimonial.name}</h3>
                <p class="text-gray-500 text-xs sm:text-sm">{testimonial.country}</p>
              </div>
            </div>
            
            <div class="flex text-yellow-400 mb-2 sm:mb-3">
              {#each Array(testimonial.rating) as _}
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              {/each}
            </div>
            
            <h4 class="font-semibold text-[#32325d] mb-2 text-sm sm:text-base">{testimonial.title}</h4>
            <p class="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">{testimonial.text}</p>
            
            <p class="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">{testimonial.date}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .animate-scroll {
    animation: scroll 50s linear infinite;
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

  /* Hide scrollbar */
  .flex::-webkit-scrollbar {
    display: none;
  }

  /* Ensure smooth animation */
  .flex {
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    will-change: transform;
  }

  /* Smooth transition for hover states */
  .flex > div > div {
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
</style>
