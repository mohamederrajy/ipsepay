<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from 'svelte';
  
  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      country: "United States",
      date: "15 Feb, 2024",
      title: "Exceptional High-Risk Processing",
      text: "IpsePay has revolutionized how we handle high-risk transactions. Their robust security measures and quick approval process have made our operations seamless.",
      rating: 5,
      avatar: "🇺🇸",
      bgColor: "bg-gradient-to-br from-[#1434CB]/5 to-[#1434CB]/10",
      textColor: "text-[#1434CB]"
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

  <!-- Content Container with Fade-In Animation -->
  <div class="relative container mx-auto px-4 transition-all duration-1000 
              {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
    <!-- Modern Header with Enhanced Animation -->
    <div class="max-w-3xl mx-auto text-center mb-24">
      <div class="inline-flex items-center gap-3 rounded-full bg-white/90 p-1.5 pr-6 
                  backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl 
                  transition-all duration-300 mb-8 animate-float">
        <span class="rounded-full bg-gradient-to-r from-[#605bff] to-[#605bff]/90 
                     px-4 py-1.5 text-sm font-medium text-white relative overflow-hidden">
          <span class="relative z-10">Testimonials</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                      to-transparent animate-shimmer"></div>
        </span>
        <span class="text-sm font-medium text-[#32325d] flex items-center gap-2">
          Client Success Stories
          <div class="relative flex">
            <span class="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full 
                         bg-[#605bff] opacity-75"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#605bff]"></span>
          </div>
        </span>
      </div>

      <h2 class="text-5xl font-bold leading-tight mb-8 text-[#32325d]">
        Trusted by Businesses
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-[#605bff] to-[#32325d] bg-clip-text 
                       text-transparent animate-gradient">Worldwide</span>
        </span>
      </h2>
    </div>

    <!-- Enhanced Testimonials Slider -->
    <div class="relative w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden group">
      <div class="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">
        {#each [...testimonials, ...testimonials] as testimonial}
          <div class="flex-none w-[calc(25vw-24px)] min-w-[280px]">
            <div class="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 
                        shadow-xl hover:shadow-2xl transition-all duration-500 
                        hover:-translate-y-1 hover:bg-white/100 p-8 h-full">
              <!-- Testimonial Header -->
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-2xl {testimonial.bgColor || 'bg-gradient-to-br from-[#605bff]/5 to-[#605bff]/10'} 
                            transition-all duration-500 hover:scale-110">
                  <span class="text-3xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <h3 class="font-bold text-[#32325d] text-lg">{testimonial.name}</h3>
                  <p class="text-sm text-gray-500 flex items-center gap-2">
                    {testimonial.role || testimonial.country}
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span class="text-[#605bff]">{testimonial.date}</span>
                  </p>
                </div>
              </div>

              <!-- Testimonial Content -->
              <div class="space-y-4">
                <div class="flex text-[#605bff]">
                  {#each Array(testimonial.rating) as _}
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  {/each}
                </div>

                <h4 class="font-semibold text-[#32325d] text-lg leading-tight">{testimonial.title}</h4>
                <p class="text-[#32325d]/70 leading-relaxed">{testimonial.text}</p>

                <div class="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between">
                  <p class="text-sm {testimonial.textColor || 'text-[#605bff]'}">{testimonial.date}</p>
                  <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#605bff]/5 to-[#605bff]/10 
                              flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* Include all your existing animations plus new ones */
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

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-25vw * 10 - 1.5rem * 10)); }
  }

  .animate-scroll {
    animation: scroll 60s linear infinite;
    /* Optional: Add these for smoother animation */
    will-change: transform;
    backface-visibility: hidden;
  }

  /* Optional: Add gradient masks for smoother edges */
  .w-screen::before,
  .w-screen::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    z-index: 2;
    pointer-events: none;
  }

  .w-screen::before {
    left: 0;
    background: linear-gradient(to right, #fafafa, transparent);
  }

  .w-screen::after {
    right: 0;
    background: linear-gradient(to left, #fafafa, transparent);
  }

  /* ... rest of your existing styles ... */
</style>
