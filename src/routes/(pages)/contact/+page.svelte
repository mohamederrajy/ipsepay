<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  
  let sending = false;
  let success = false;
  let error = false;
  let errorMessage = '';

  onMount(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    document.body.appendChild(script);

    script.onload = () => {
      emailjs.init("AWnbOka0ZUhEsheWW");
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    sending = true;
    error = false;
    success = false;
    errorMessage = '';

    const form = e.target;
    
    try {
      const result = await emailjs.sendForm(
        'service_bw7se4l',
        'template_3dp5m8f',
        form,
        'AWnbOka0ZUhEsheWW'
      );
      success = true;
      form.reset();
    } catch (err) {
      error = true;
      errorMessage = err.text || err.message || 'Unknown error occurred';
    } finally {
      sending = false;
    }
  };

  // FAQ Toggle
  let activeQuestion = null;
  const toggleQuestion = (index) => {
    activeQuestion = activeQuestion === index ? null : index;
  };

  // FAQ Data
  const faqs = [
    {
      question: "How quickly can I get started with IpsePay?",
      answer: "Getting started with IpsePay is quick and seamless. Our streamlined onboarding process typically takes just 10-15 minutes to complete. Once you've submitted your business details and verification documents, you can start accepting payments within 24 hours. Our team provides dedicated support throughout the setup process to ensure a smooth transition."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support a comprehensive range of payment methods including: Credit Cards (Visa, Mastercard, American Express, Discover), Debit Cards, Digital Wallets (Apple Pay, Google Pay, PayPal), Bank Transfers (ACH, SEPA, Wire), Local Payment Methods, and Cryptocurrencies. Our platform automatically optimizes for the best payment method based on your customer's location."
    },
    {
      question: "How secure are your payment solutions?",
      answer: "Security is our top priority. We maintain the highest level of security through: PCI DSS Level 1 compliance, End-to-end encryption (E2EE), Two-factor authentication (2FA), Advanced fraud detection systems, Regular security audits, 24/7 monitoring, and Secure data centers. We also provide real-time fraud monitoring and automated risk assessment tools to protect your business."
    },
    {
      question: "What are your transaction fees?",
      answer: "Our pricing is transparent and competitive. Standard rates start at 2.9% + $0.30 per transaction for credit cards. We offer volume-based discounts for businesses processing over $50,000 monthly. Custom pricing packages are available for enterprise clients. Contact our sales team for a tailored quote based on your business needs and volume."
    },
    {
      question: "Do you provide international payment support?",
      answer: "Yes, we offer full international payment support. Our platform handles: Multiple currencies (165+ supported), Automatic currency conversion, Local payment methods in different regions, International card processing, Cross-border transactions, and Multi-language checkout experiences. We ensure compliance with regional regulations and optimize for local payment preferences."
    },
    {
      question: "What kind of integration support do you offer?",
      answer: "We provide comprehensive integration support including: Ready-to-use SDKs for major programming languages, Detailed API documentation, Custom integration guidance, Developer support team, Sample code and tutorials, Testing environment, and Integration troubleshooting. Our technical team is available to assist with custom integrations and specific requirements."
    },
    {
      question: "How do refunds and disputes work?",
      answer: "We offer a streamlined process for handling refunds and disputes: Easy-to-use dashboard for processing refunds, Automated dispute resolution tools, Chargeback prevention features, Detailed transaction records, Evidence submission assistance, and Real-time notifications. Our support team helps manage complex cases and provides guidance on dispute prevention."
    },
    {
      question: "What reporting and analytics features are available?",
      answer: "Our platform provides comprehensive reporting tools including: Real-time transaction monitoring, Customizable dashboards, Detailed financial reports, Analytics and insights, Export capabilities (CSV, Excel, API), Revenue forecasting, Customer behavior analysis, and Fraud monitoring reports. All data can be accessed via our dashboard or API."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide 24/7 multi-channel customer support: Live chat support, Phone support, Email assistance, Dedicated account managers for enterprise clients, Technical support team, Knowledge base with detailed guides, and Community forums. Our average response time is under 1 hour, with immediate assistance for critical issues."
    },
    {
      question: "What makes IpsePay different from other payment providers?",
      answer: "IpsePay stands out through: Advanced technology infrastructure, Higher approval rates, Lower transaction costs, Better fraud protection, Faster payouts, More payment methods, Superior customer support, Easier integration process, and Innovative features. We focus on providing a reliable, secure, and cost-effective payment solution tailored to your business needs."
    }
  ];
</script>

<main class="pt-20">
  <!-- Hero Section -->
  <div class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
    <div class="absolute inset-0">
      <!-- Base gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-white to-[#f0f4ff]"></div>
      
      <!-- Mesh gradient -->
      <div class="absolute inset-0"
           style="background: 
               radial-gradient(circle at 0% 0%, rgba(96, 91, 255, 0.03) 0%, transparent 50%),
               radial-gradient(circle at 100% 0%, rgba(50, 50, 93, 0.03) 0%, transparent 50%),
               radial-gradient(circle at 100% 100%, rgba(96, 91, 255, 0.03) 0%, transparent 50%),
               radial-gradient(circle at 0% 100%, rgba(50, 50, 93, 0.03) 0%, transparent 50%);">
      </div>

      <!-- Grid pattern -->
      <div class="absolute inset-0"
           style="background-image: 
              linear-gradient(rgba(96, 91, 255, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 91, 255, 0.01) 1px, transparent 1px);
              background-size: 40px 40px;">
      </div>

      <!-- Floating elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] 
                    bg-gradient-to-br from-[#605bff]/5 via-[#605bff]/3 to-transparent 
                    rounded-full animate-float-slow opacity-70"
             style="animation-duration: 25s;">
        </div>
        <div class="absolute -bottom-32 -left-32 w-[600px] h-[600px] 
                    bg-gradient-to-tr from-[#32325d]/5 via-[#605bff]/3 to-transparent 
                    rounded-full animate-float-slow opacity-70"
             style="animation-duration: 30s; animation-delay: -5s;">
        </div>
      </div>
    </div>

    <!-- Title Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <!-- Decorative Element -->
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
          <span class="text-sm font-medium text-[#605bff]">Need assistance?</span>
          <div class="w-2 h-2 ml-2 rounded-full bg-[#605bff] animate-pulse"></div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-[#32325d] to-[#605bff] inline-block text-transparent bg-clip-text">
            Let's Start a Conversation
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Have questions about our services? We're here to help you find the perfect solution for your business.
        </p>

        <!-- Quick Contact Options -->
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a href="mailto:contact@ipsepay.com" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email Us
          </a>
          <a href="tel:+12345678901" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#605bff] rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </div>

    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-24 fill-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </div>
  </div>

  <!-- Enhanced Content Section -->
  <div class="container mx-auto px-4 -mt-20 sm:px-6 lg:px-8 pb-24 relative z-10">
    <div class="max-w-7xl mx-auto">
      <!-- Support Channels Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-gradient-to-br from-[#605bff]/10 to-white p-8 rounded-2xl">
          <div class="space-y-4">
            <div class="w-14 h-14 bg-[#605bff] rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Live Chat Support</h3>
            <p class="text-gray-600">Get instant help from our team of experts through our live chat system.</p>
            <button class="inline-flex items-center text-[#605bff] hover:text-[#4f4cce] font-medium">
              Start Chat
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#605bff]/10 to-white p-8 rounded-2xl">
          <div class="space-y-4">
            <div class="w-14 h-14 bg-[#605bff] rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Knowledge Base</h3>
            <p class="text-gray-600">Browse our comprehensive documentation and guides for quick answers.</p>
            <button class="inline-flex items-center text-[#605bff] hover:text-[#4f4cce] font-medium">
              View Documentation
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#605bff]/10 to-white p-8 rounded-2xl">
          <div class="space-y-4">
            <div class="w-14 h-14 bg-[#605bff] rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">API Documentation</h3>
            <p class="text-gray-600">Access detailed API documentation for seamless integration.</p>
            <button class="inline-flex items-center text-[#605bff] hover:text-[#4f4cce] font-medium">
              View API Docs
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Information Cards -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Email Card -->
        <div class="lg:col-span-1 space-y-6">
          <div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Email Us</h3>
                <p class="text-gray-600">contact@ipsepay.com</p>
                <a href="mailto:contact@ipsepay.com" class="text-[#605bff] hover:text-[#4f4cce] text-sm mt-1 inline-block">
                  Send an email →
                </a>
              </div>
            </div>
          </div>

          <!-- Phone Card -->
          <div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Call Us</h3>
                <p class="text-gray-600">+1 (234) 567-890</p>
                <p class="text-gray-500 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
              </div>
            </div>
          </div>

          <!-- Office Card -->
          <div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[#605bff]/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Visit Us</h3>
                <p class="text-gray-600">1234 Street Name,</p>
                <p class="text-gray-600">City, Country</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-sm p-8">
            <form class="space-y-6" on:submit={handleSubmit}>
              <div class="grid sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-900" for="from_name">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring focus:ring-[#605bff]/20 transition-shadow duration-200"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-900" for="last_name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring focus:ring-[#605bff]/20 transition-shadow duration-200"
                    required
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-900" for="reply_to">
                  Email Address
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="reply_to"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring focus:ring-[#605bff]/20 transition-shadow duration-200"
                  required
                />
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-900" for="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#605bff] focus:ring focus:ring-[#605bff]/20 transition-shadow duration-200"
                  required
                ></textarea>
              </div>

              {#if success}
                <div class="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2">
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              {/if}

              {#if error}
                <div class="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2">
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  <span>Error: {errorMessage}</span>
                </div>
              {/if}

              <button
                type="submit"
                disabled={sending}
                class="w-full sm:w-auto px-6 py-3 bg-[#605bff] text-white rounded-xl hover:bg-[#4f4cce] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {#if sending}
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Sending...
                {:else}
                  Send Message
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 5l7 7-7 7M5 12h15"/>
                  </svg>
                {/if}
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- FAQ Section with Enhanced Design -->
      <div class="bg-gradient-to-b from-white to-gray-50 py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <!-- FAQ Header -->
            <div class="text-center mb-16">
              <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[#605bff]/10">
                <span class="text-sm font-medium text-[#605bff]">Got Questions?</span>
              </div>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p class="text-lg text-gray-600">
                Everything you need to know about our payment solutions
              </p>
            </div>

            <!-- FAQ List -->
            <div class="space-y-4">
              {#each faqs as faq, index}
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <button
                    class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:bg-gray-50"
                    on:click={() => toggleQuestion(index)}
                  >
                    <span class="font-medium text-gray-900 flex-1 pr-4">{faq.question}</span>
                    <div class="flex-shrink-0 ml-4">
                      <div class={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 
                        ${activeQuestion === index ? 'bg-[#605bff] rotate-180' : 'bg-gray-100'}`}>
                        <svg 
                          class={`w-4 h-4 transition-transform duration-200 
                          ${activeQuestion === index ? 'text-white' : 'text-gray-500'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                  {#if activeQuestion === index}
                    <div 
                      class="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-100 prose prose-sm max-w-none"
                      transition:slide={{ duration: 200 }}
                    >
                      {faq.answer}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Contact CTA -->
            <div class="mt-16 text-center">
              <p class="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="#contact-form" 
                class="inline-flex items-center justify-center px-6 py-3 bg-[#605bff] text-white rounded-xl hover:bg-[#4f4cce] transition-colors duration-200 font-medium"
              >
                Contact Our Support Team
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Global Offices Section -->
      
    </div>
  </div>
</main>


<style>
  /* Add any additional styles here */
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  :global(.gradient-animate) {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
</style>
