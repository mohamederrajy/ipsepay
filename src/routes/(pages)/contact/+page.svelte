<script>
  import { onMount } from 'svelte';
  
  let sending = false;
  let success = false;
  let error = false;
  let errorMessage = '';

  onMount(() => {
    // Load EmailJS SDK
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
      console.log('Success:', result);
      success = true;
      form.reset();
    } catch (err) {
      console.error('Failed to send email:', err);
      error = true;
      errorMessage = err.text || err.message || 'Unknown error occurred';
    } finally {
      sending = false;
    }
  };
</script>

<main class="pt-20">
  <!-- Title Section -->
  <div class="relative bg-cover bg-center" style="background-image: url('https://coderthemes.com/wb/appoo/images/heros/hero-2-bg.png')">
    <div class="container mx-auto px-4 py-16 sm:py-20">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center" style="color: #32325d">Contact Us</h1>
    </div>
  </div>

  <!-- Content Section -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Contact Form -->
      <div class="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
        
        <form class="space-y-6" on:submit={handleSubmit}>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2" for="from_name">
                First Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2" for="last_name">
                Last Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="reply_to">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2" for="message">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
              required
            ></textarea>
          </div>

          {#if success}
            <div class="p-4 bg-green-50 text-green-700 rounded-md">
              Thank you! Your message has been sent successfully.
            </div>
          {/if}

          {#if error}
            <div class="p-4 bg-red-50 text-red-700 rounded-md">
              Sorry, there was an error sending your message: {errorMessage}
            </div>
          {/if}

          <button
            type="submit"
            disabled={sending}
            class="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 text-sm font-medium flex items-center justify-center disabled:opacity-70"
          >
            {#if sending}
              Sending...
            {:else}
              Send Message
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3,13.5L19,12L3,10.5V3.7732928C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205L21.9867539,11.5440392C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608L3.70518234,20.6826679C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072C3.22385763,20.7267072 3,20.5028496 3,20.2267072V13.5Z" fill="currentColor"/>
              </svg>
            {/if}
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-sm p-6 text-center">
          <div class="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Email</h3>
          <p class="text-gray-600 text-sm">contact@ipsepay.com</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 text-center">
          <div class="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Phone</h3>
          <p class="text-gray-600 text-sm">+1 (234) 567-890</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 text-center">
          <div class="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Location</h3>
          <p class="text-gray-600 text-sm">1234 Street Name, City, Country</p>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  :global(.bg-primary) {
    background-color: #605bff;
  }
  :global(.text-primary) {
    color: #605bff;
  }
  :global(.focus\:ring-primary:focus) {
    --tw-ring-color: #605bff;
    --tw-ring-opacity: 1;
    ring-color: rgb(96 91 255 / var(--tw-ring-opacity));
  }
  :global(.focus\:border-primary:focus) {
    border-color: #605bff;
  }
</style>
