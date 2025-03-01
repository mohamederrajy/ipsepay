<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  // Stats counter logic
  let statsVisible = false;
  let statsRef: HTMLElement;
  let currentValues = [0, 0, 0, 0];
  
  const stats = [
    {
      start: 0,
      end: 100,
      suffix: "+",
      text: "Countries Served",
      subtext: "Global Presence"
    },
    {
      start: 0,
      end: 99.9,
      suffix: "%",
      text: "Uptime",
      subtext: "System Reliability"
    },
    {
      start: 0,
      end: 10,
      suffix: "B+",
      text: "Transactions",
      subtext: "Processed Annually"
    },
    {
      start: 0,
      end: 250,
      suffix: "K+",
      text: "Merchants",
      subtext: "Trust Our Platform"
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to revolutionize digital payments"
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations to 50+ countries"
    },
    {
      year: "2020",
      title: "Innovation Milestone",
      description: "Launched AI-powered fraud detection system"
    },
    {
      year: "2021",
      title: "Market Leadership",
      description: "Became industry leader in payment solutions"
    },
    {
      year: "2022",
      title: "Next Generation",
      description: "Introduced blockchain payment integration"
    }
  ];

  // Team members
  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/images/team/michael.jpg"
    },
    {
      name: "Emma Williams",
      role: "Chief Product Officer",
      image: "/images/team/emma.jpg"
    },
    {
      name: "David Kim",
      role: "Chief Financial Officer",
      image: "/images/team/david.jpg"
    }
  ];

  // Values
  const values = [
    {
      icon: "🎯",
      title: "Innovation First",
      description: "Constantly pushing boundaries in financial technology"
    },
    {
      icon: "🤝",
      title: "Customer Success",
      description: "Dedicated to helping our clients achieve their goals"
    },
    {
      icon: "🛡️",
      title: "Security",
      description: "Unwavering commitment to protecting data and assets"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Making financial services accessible worldwide"
    }
  ];

  function formatNumber(num: number): string {
    if (Number.isInteger(num)) {
      return num.toString();
    }
    return num.toFixed(1);
  }

  function startCounters() {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = (stat.end - stat.start) / steps;
      
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          currentValues[index] = stat.start + (stepValue * i);
          currentValues = [...currentValues];
        }, (i / steps) * duration);
      }
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          statsVisible = true;
          startCounters();
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef) {
      observer.observe(statsRef);
    }

    return () => {
      if (statsRef) {
        observer.unobserve(statsRef);
      }
    };
  });
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-[#f8faff] to-white py-32">
  <div class="absolute inset-0">
    <div class="absolute inset-0"
         style="background: radial-gradient(circle at 50% 50%, rgba(96, 91, 255, 0.03) 0%, transparent 70%);">
    </div>
  </div>
  
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div class="text-center max-w-3xl mx-auto">
      <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full 
                  bg-white shadow-sm border border-gray-100">
        <span class="text-sm font-medium text-[#605bff]">Our Story</span>
        <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
          Revolutionizing Digital Payments
        </span>
      </h1>

      <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
        Building the future of financial technology with innovative solutions and unwavering security.
      </p>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="relative bg-white py-24" bind:this={statsRef}>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each stats as stat, i}
        <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8faff] 
                    shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300">
          <div class="text-4xl font-bold text-[#32325d] mb-2">
            {formatNumber(currentValues[i])}{stat.suffix}
          </div>
          <div class="text-lg font-medium text-[#605bff] mb-1">{stat.text}</div>
          <div class="text-sm text-gray-500">{stat.subtext}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Timeline Section -->
<section class="relative bg-gradient-to-b from-white to-[#f8faff] py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#32325d] mb-4">Our Journey</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        A timeline of innovation and growth in revolutionizing financial technology.
      </p>
    </div>

    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#605bff]/20"></div>

      <div class="space-y-16">
        {#each timeline as item, i}
          <div class="relative flex items-center justify-center">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full 
                        bg-[#605bff] border-4 border-white shadow-lg"></div>
            
            <div class="grid grid-cols-2 gap-8 w-full max-w-4xl">
              <div class={i % 2 === 0 ? 'text-right pr-16' : 'col-start-2 pl-16'}>
                <div class="text-sm font-medium text-[#605bff] mb-2">{item.year}</div>
                <h3 class="text-xl font-bold text-[#32325d] mb-2">{item.title}</h3>
                <p class="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="relative bg-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#32325d] mb-4">Our Values</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        The principles that guide us in building the future of financial technology.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each values as value}
        <div class="p-6 rounded-2xl bg-gradient-to-br from-white to-[#f8faff] 
                    shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300
                    hover:translate-y-[-4px]">
          <div class="text-4xl mb-4">{value.icon}</div>
          <h3 class="text-xl font-bold text-[#32325d] mb-2">{value.title}</h3>
          <p class="text-gray-600">{value.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Replace the Team Section with this new Technology Stack Section -->
<section class="relative bg-gradient-to-b from-[#f8faff] to-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#32325d] mb-4">Our Technology Stack</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Powered by cutting-edge technologies to deliver secure and scalable solutions.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Security Stack -->
      <div class="p-8 rounded-2xl bg-white shadow-lg shadow-gray-100/50 
                  hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
        <div class="w-14 h-14 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[#32325d] mb-4">Security Infrastructure</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            End-to-end encryption
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Fraud detection AI
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Biometric authentication
          </li>
        </ul>
      </div>

      <!-- Cloud Infrastructure -->
      <div class="p-8 rounded-2xl bg-white shadow-lg shadow-gray-100/50 
                  hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
        <div class="w-14 h-14 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[#32325d] mb-4">Cloud Infrastructure</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Multi-region deployment
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Auto-scaling
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            99.99% uptime
          </li>
        </ul>
      </div>

      <!-- Development Stack -->
      <div class="p-8 rounded-2xl bg-white shadow-lg shadow-gray-100/50 
                  hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
        <div class="w-14 h-14 bg-[#605bff]/10 rounded-xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[#32325d] mb-4">Development Stack</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Microservices architecture
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            API-first design
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-[#605bff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            Real-time processing
          </li>
        </ul>
      </div>
    </div>

    <!-- Replace the Technology Partners section with this new Innovation Highlights section -->
    <div class="mt-20 max-w-6xl mx-auto">
      <h3 class="text-2xl font-bold text-[#32325d] text-center mb-12">Innovation Highlights</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- AI & Machine Learning -->
        <div class="p-6 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-white border border-[#605bff]/10
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-[#605bff]/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[#32325d]">AI-Powered Solutions</h4>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Advanced machine learning algorithms for fraud detection and smart transaction routing.
          </p>
        </div>

        <!-- Blockchain -->
        <div class="p-6 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-white border border-[#605bff]/10
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-[#605bff]/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[#32325d]">Blockchain Integration</h4>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Seamless crypto payment processing and smart contract automation.
          </p>
        </div>

        <!-- Real-time Analytics -->
        <div class="p-6 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-white border border-[#605bff]/10
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-[#605bff]/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[#32325d]">Real-time Analytics</h4>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Live transaction monitoring and instant business insights.
          </p>
        </div>

        <!-- Smart Automation -->
        <div class="p-6 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-white border border-[#605bff]/10
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-[#605bff]/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[#32325d]">Smart Automation</h4>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Automated payment reconciliation and intelligent workflow processing.
          </p>
        </div>

        <!-- Global Infrastructure -->
        <div class="p-6 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-white border border-[#605bff]/10
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-[#605bff]/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[#32325d]">Global Infrastructure</h4>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Distributed systems across multiple regions for optimal performance.
          </p>
        </div>

        <!-- Advanced Security -->
        <div class="p-6 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-white border border-[#605bff]/10
                    hover:shadow-lg transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-[#605bff]/10 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-[#32325d]">Advanced Security</h4>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Multi-layer security with biometric authentication and encryption.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="relative bg-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-[#32325d] mb-4">Ready to Transform Your Business?</h2>
      <p class="text-gray-600 mb-8">
        Join thousands of businesses already revolutionizing their payment systems.
      </p>
      <div class="flex justify-center gap-4">
        <a href="/contact" 
           class="inline-flex items-center px-6 py-3 rounded-full bg-[#605bff] text-white 
                  font-medium hover:bg-[#605bff]/90 transition-colors duration-300">
          Contact Sales
        </a>
        <a href="/docs" 
           class="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#605bff] 
                  font-medium border border-[#605bff] hover:bg-[#605bff]/10 transition-colors duration-300">
          View Documentation
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Add any additional styles here */
  @keyframes float-slow {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg) scale(1); 
    }
    25% { 
      transform: translate(2%, 2%) rotate(1deg) scale(1.02); 
    }
    50% { 
      transform: translate(-1%, 3%) rotate(-1deg) scale(0.98); 
    }
    75% { 
      transform: translate(-2%, -1%) rotate(0.5deg) scale(1.01); 
    }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }
</style>
