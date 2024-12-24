<script>
  import { writable } from 'svelte/store';

  // Create a store for the current locale
  export const locale = writable('en');

  // Translation dictionary
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.services': 'Services',
      'nav.products': 'Products',
      'button.demo': 'Request a Demo',
      'button.contact': 'Contact Sales',
      // Add more translations as needed
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'حول',
      'nav.contact': 'اتصل بنا',
      'nav.services': 'خدمات',
      'nav.products': 'منتجات',
      'button.demo': 'طلب عرض توضيحي',
      'button.contact': 'اتصل بالمبيعات',
      // Add more translations as needed
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'nav.services': 'Services',
      'nav.products': 'Produits',
      'button.demo': 'Demander une démo',
      'button.contact': 'Contacter les ventes',
      // Add more translations as needed
    }
  };

  let isLanguageOpen = false;

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  // Initialize current language from localStorage or default to English
  let currentLang = languages.find(lang => 
    lang.code === (localStorage.getItem('locale') || 'en')
  ) || languages[0];

  // Translation function
  export const t = (key) => {
    const currentLocale = localStorage.getItem('locale') || 'en';
    return translations[currentLocale]?.[key] || translations.en[key] || key;
  };

  function switchLanguage(lang) {
    currentLang = lang;
    isLanguageOpen = false;
    
    // Update locale in localStorage and store
    localStorage.setItem('locale', lang.code);
    locale.set(lang.code);

    // Handle RTL for Arabic
    if (lang.code === 'ar') {
      document.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.dir = 'ltr';
      document.documentElement.lang = lang.code;
    }

    // Trigger page refresh to update all translations
    window.location.reload();
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (isLanguageOpen && !event.target.closest('.language-switcher')) {
      isLanguageOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="language-switcher relative">
  <button 
    type="button"
    class="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
    on:click={() => isLanguageOpen = !isLanguageOpen}
  >
    <span>{currentLang.flag}</span>
    <span class="hidden sm:block">{currentLang.name}</span>
    <svg 
      class="w-4 h-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {#if isLanguageOpen}
    <div 
      class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
      role="menu"
    >
      <div class="py-1" role="none">
        {#each languages as lang}
          <button
            class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            on:click={() => switchLanguage(lang)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div> 