<script>
  import { onMount } from 'svelte';
  
  export let phoneNumber = "1234567890";
  export let message = "Hello! I have a question about IpsePay.";
  
  let showTooltip = true;
  
  $: whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  function hideTooltip() {
    showTooltip = false;
  }
</script>

<div class="fixed bottom-[112px] sm:bottom-[113px] right-7 sm:right-7.5 z-50 animate-fade-in">
  <div class="flex items-center">
    {#if showTooltip}
      <div class="mr-3 animate-fade-in relative">
        <div class="bg-white rounded-xl shadow-xl border border-gray-100 p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-1.5 
                    backdrop-blur-sm relative">
          <button 
            class="absolute -top-2 -left-2 w-5 h-5 bg-gray-100 hover:bg-gray-200 
                   rounded-full flex items-center justify-center transition-colors
                   text-gray-500 hover:text-gray-700"
            on:click={hideTooltip}
            aria-label="Close tooltip"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <span class="text-xs sm:text-sm font-medium text-gray-900 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span>👋 Need assistance?</span>
          </span>
          <span class="text-[11px] sm:text-xs text-gray-600 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span>💬 Chat with us on WhatsApp</span>
            <span class="animate-bounce-slow">✨</span>
          </span>
          
          <div class="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 
                      rotate-45 w-2.5 h-2.5 bg-white border-r border-b border-gray-100">
          </div>
        </div>
      </div>
    {/if}

    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#22c35e] 
             rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 
             transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        class="w-7 h-7 sm:w-7 sm:h-7 text-white" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
</div>

<style>
  @keyframes fade-in {
    from { 
      opacity: 0; 
      transform: translateY(10px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }

  @media (max-width: 640px) {
    .mr-3 {
      max-width: calc(100vw - 100px);
    }
  }
</style> 