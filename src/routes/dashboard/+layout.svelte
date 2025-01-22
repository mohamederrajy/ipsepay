<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { fly, slide } from 'svelte/transition';
    
    let user = null;
    let isSidebarOpen = true;
    let isMobile = false;
    let isProfileMenuOpen = false;
  
    // Enhanced navigation items with badges and status
    const navItems = [
      {
        category: 'Overview',
        items: [
          {
            title: 'Dashboard',
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>`,
            href: '/dashboard',
            badge: 'New'
          },
          {
            title: 'Analytics',
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>`,
            href: '/dashboard/analytics'
          }
        ]
      },
      {
        category: 'Payments',
        items: [
          {
            title: 'Transactions',
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>`,
            href: '/dashboard/transactions',
            badge: '12'
          },
          {
            title: 'Payment Links',
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>`,
            href: '/dashboard/payment-links'
          }
        ]
      },
      {
        category: 'Management',
        items: [
          {
            title: 'Customers',
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>`,
            href: '/dashboard/customers'
          },
          {
            title: 'Settings',
            icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>`,
            href: '/dashboard/settings'
          }
        ]
      }
    ];
  
    // Add notification state
    let notifications = [
        {
            id: 1,
            title: 'New Payment Received',
            message: 'You received a payment of $1,234.56',
            time: '5m ago',
            unread: true
        },
        {
            id: 2,
            title: 'System Update',
            message: 'New features are available',
            time: '1h ago',
            unread: false
        }
    ];
  
    let showNotifications = false;
  
    async function handleLogout() {
        try {
            console.log('Starting logout process...');

            // Call server logout endpoint
            const response = await fetch('/api/auth/logout', {
                method: 'POST'
            });

            // Clear all client-side storage
            localStorage.clear();
            sessionStorage.clear();

            // Clear all cookies
            document.cookie.split(";").forEach(function(c) { 
                document.cookie = c.replace(/^ +/, "")
                    .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
            });

            console.log('Session cleared - redirecting to login');
            
            // Force redirect to login
            window.location.replace('/account/login');
        } catch (error) {
            console.error('Logout error:', error);
            // Redirect anyway
            window.location.replace('/account/login');
        }
    }
  
    // Check session on mount
    onMount(() => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');

        if (!token || !user) {
            console.log('No valid session found in dashboard');
            handleLogout();
        }
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    });
  
    function checkIfMobile() {
      isMobile = window.innerWidth < 1024;
      if (isMobile) isSidebarOpen = false;
    }
  
    function toggleSidebarWidth() {
      isSidebarOpen = !isSidebarOpen;
    }

    async function resendVerification() {
        try {
            const response = await fetch('/api/auth/resend-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message (you can use your preferred notification system)
                alert('Verification email has been resent. Please check your inbox.');
            } else {
                throw new Error('Failed to resend verification email');
            }
        } catch (error) {
            console.error('Error resending verification:', error);
            alert('Failed to resend verification email. Please try again later.');
        }
    }

    // Function to get initials from email with enforced white color
    function getInitials(email: string) {
        return email
            .split('@')[0]
            .split(/[-._]/)
            .map(part => part[0]?.toUpperCase())
            .slice(0, 2)
            .join('');
    }

    // Function to get background color based on email (keeping gradients)
    function getAvatarColor(email: string) {
        const colors = [
            'from-[#605bff] to-[#8b7aff]',
            'from-[#3b82f6] to-[#60a5fa]',
            'from-[#10b981] to-[#34d399]',
            'from-[#f59e0b] to-[#fbbf24]',
            'from-[#ec4899] to-[#f472b6]',
            'from-[#6366f1] to-[#818cf8]'
        ];
        
        const index = email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
        return colors[index];
    }
</script>
  
  {#if $page.data.isAuthenticated && $page.data.user}
    <div class="min-h-screen bg-gray-50/50">
      <!-- Enhanced Sidebar -->
      <aside class="fixed inset-y-0 left-0 z-50 {isSidebarOpen ? 'w-72' : 'w-20'} 
                bg-white/80 backdrop-blur-xl border-r border-gray-200/50 
                transform transition-all duration-300 ease-in-out lg:translate-x-0
                shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)]">
        <div class="h-full flex flex-col">
          <!-- Logo and Toggle -->
          <div class="flex items-center h-16 px-6 border-b border-gray-200/50">
            {#if isSidebarOpen}
              <img src="/images/lgopis.png" alt="IpsePay" class="h-8 transition-all duration-300" />
            {:else}
              <img src="/images/iconip.png" alt="IpsePay" class="h-8 w-8 transition-all duration-300" />
            {/if}
            
            <button 
              class="ml-auto p-1.5 rounded-lg hover:bg-gray-100/80 transition-colors"
              on:click={toggleSidebarWidth}
            >
              <svg class="w-5 h-5 transform transition-transform duration-300 {isSidebarOpen ? 'rotate-180' : ''}" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
    
          <!-- Enhanced User Profile -->
          {#if user}
            <div class="{isSidebarOpen ? 'mx-4 px-4 py-4' : 'mx-2 p-2'} mt-4 
                        bg-gradient-to-br from-gray-50 to-white rounded-2xl 
                        border border-gray-200/50 shadow-sm backdrop-blur-xl">
              <div class="flex items-center {isSidebarOpen ? '' : 'justify-center'}">
                <div class="flex-shrink-0 relative group">
                  <div class="relative w-11 h-11">
                    <div class="absolute inset-0 bg-gradient-to-br {getAvatarColor(user?.email || '')} 
                                rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                    </div>
                    <div class="absolute inset-0 rounded-xl flex items-center justify-center 
                                transform group-hover:scale-105 transition-all duration-300 
                                ring-2 ring-white shadow-lg bg-gradient-to-br {getAvatarColor(user?.email || '')}">
                      <span class="avatar-text text-lg font-semibold select-none">
                        {getInitials(user?.email || 'User')}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Verification Badge -->
                  {#if user.isVerified === true}
                    <div class="absolute -top-1 -right-1 w-4.5 h-4.5 bg-blue-500 rounded-full 
                                ring-2 ring-white flex items-center justify-center
                                shadow-lg shadow-blue-500/30">
                      <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                  {:else if user.isVerified === false}
                    <!-- Unverified Badge (Yellow exclamation) -->
                    <div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full 
                                ring-2 ring-white flex items-center justify-center">
                      <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 5v9m0 4v.01" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                  {/if}
                  
                  <!-- Online Status -->
                  <div class="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full 
                              ring-2 ring-white flex items-center justify-center
                              shadow-lg shadow-green-500/30">
                    <div class="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {#if isSidebarOpen}
                  <div class="ml-3 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate group-hover:text-[#605bff] 
                              transition-colors">
                      {user.email}
                    </p>
                    <div class="flex items-center gap-1.5">
                      {#if user.isVerified === true}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs 
                                    font-medium bg-blue-100 text-blue-700">
                          Verified
                        </span>
                      {/if}
                      <span class="inline-flex items-center gap-1 text-xs text-gray-500">
                        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Online
                      </span>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
    
          <!-- Enhanced Navigation -->
          <nav class="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
            {#each navItems as section}
              <div>
                {#if isSidebarOpen}
                  <h3 class="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {section.category}
                  </h3>
                {/if}
                <div class="mt-2 space-y-1">
                  {#each section.items as item}
                    <a 
                      href={item.href}
                      class="group flex items-center {isSidebarOpen ? 'px-3' : 'px-2'} py-2.5 
                             text-sm font-medium rounded-xl transition-all duration-200
                             {$page.url.pathname === item.href ? 
                               'text-[#605bff] bg-[#605bff]/10 shadow-sm border border-[#605bff]/20' : 
                               'text-gray-600 hover:text-[#605bff] hover:bg-gray-50'}"
                    >
                      <div class={isSidebarOpen ? 'relative' : 'mx-auto relative'}>
                        {@html item.icon}
                        {#if $page.url.pathname === item.href}
                          <div class="absolute inset-0 bg-[#605bff] blur-2xl opacity-20 
                                    animate-pulse rounded-full"></div>
                        {/if}
                      </div>
                      {#if isSidebarOpen}
                        <span class="ml-3 transition-transform group-hover:translate-x-0.5">
                          {item.title}
                        </span>
                        {#if $page.url.pathname === item.href}
                          <div class="ml-auto w-1 h-6 rounded-full bg-[#605bff]"></div>
                        {/if}
                      {/if}
                    </a>
                  {/each}
                </div>
              </div>
            {/each}
          </nav>
    
          <!-- Footer Section -->
          {#if isSidebarOpen}
            <div class="p-4 mx-4 mb-4 rounded-xl bg-gradient-to-br from-[#605bff]/5 to-transparent">
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg bg-[#605bff]/10">
                  <svg class="w-5 h-5 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900">Upgrade to Pro</p>
                  <p class="text-xs text-gray-500">Get more features</p>
                </div>
                <button class="p-1.5 rounded-lg hover:bg-[#605bff]/10 transition-colors">
                  <svg class="w-4 h-4 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          {/if}
        </div>
      </aside>
    
      <!-- Main Content Area -->
      <div class="transition-all duration-300 {isSidebarOpen ? 'lg:pl-72' : 'lg:pl-20'}">
        <!-- Enhanced Header -->
        <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
          <div class="flex items-center justify-between h-16 px-4 sm:px-6">
            <!-- Left side with breadcrumbs -->
            <div class="flex items-center space-x-4">
              <button 
                class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                on:click={toggleSidebarWidth}
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <!-- Breadcrumbs -->
              <nav class="flex items-center space-x-2 text-sm">
                <a href="/dashboard" class="text-gray-500 hover:text-gray-900">Dashboard</a>
                {#if $page.url.pathname !== '/dashboard'}
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span class="text-gray-900 font-medium">
                    {$page.url.pathname.split('/').pop()?.charAt(0).toUpperCase() + 
                     $page.url.pathname.split('/').pop()?.slice(1)}
                  </span>
                {/if}
              </nav>
            </div>
    
            <!-- Right side with enhanced notifications -->
            <div class="flex items-center space-x-4">
              <!-- Search -->
              <div class="hidden sm:block">
                <div class="relative">
                  <input 
                    type="text" 
                    placeholder="Search..."
                    class="w-64 h-9 pl-10 pr-4 rounded-lg bg-gray-100 border-0
                           focus:ring-2 focus:ring-[#605bff]/20 focus:bg-white
                           text-sm transition-all duration-200"
                  />
                  <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
    
              <!-- Enhanced Notifications -->
              <div class="relative">
                <button 
                  class="p-2 text-gray-500 hover:text-gray-700 rounded-lg 
                         hover:bg-gray-100 transition-colors relative"
                  on:click={() => showNotifications = !showNotifications}
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {#if notifications.some(n => n.unread)}
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                  {/if}
                </button>
    
                {#if showNotifications}
                  <div 
                    transition:fly={{ y: -10, duration: 200 }}
                    class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg 
                           border border-gray-200/50 py-2 max-h-[400px] overflow-y-auto"
                  >
                    <div class="px-4 py-2 border-b border-gray-100">
                      <h3 class="text-sm font-semibold text-gray-900">Notifications</h3>
                    </div>
                    {#each notifications as notification}
                      <div class="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer
                                  {notification.unread ? 'bg-blue-50/50' : ''}">
                        <div class="flex justify-between items-start">
                          <h4 class="text-sm font-medium text-gray-900">
                            {notification.title}
                          </h4>
                          <span class="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p class="mt-1 text-sm text-gray-600">{notification.message}</p>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
    
              <!-- Enhanced Profile Dropdown -->
              <div class="relative">
                <button 
                  class="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  on:click={() => isProfileMenuOpen = !isProfileMenuOpen}
                >
                  <div class="relative">
                    <div class="w-9 h-9 rounded-xl overflow-hidden ring-2 ring-white shadow-lg 
                                bg-gradient-to-br {getAvatarColor(user?.email || '')} 
                                flex items-center justify-center">
                      <span class="avatar-text text-base font-semibold select-none">
                        {getInitials(user?.email || 'User')}
                      </span>
                    </div>
                    
                    <!-- Verification Badge -->
                    {#if user?.isVerified === true}
                      <div class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full 
                                  ring-2 ring-white flex items-center justify-center">
                        <svg class="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      </div>
                    {:else if user?.isVerified === false}
                      <!-- Unverified Badge (Yellow exclamation) -->
                      <div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full 
                                  ring-2 ring-white flex items-center justify-center">
                        <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5v9m0 4v.01" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </div>
                    {/if}
                  </div>
                  
                  <div class="hidden md:block text-left">
                    <div class="flex items-center gap-1.5">
                      <p class="text-sm font-medium text-gray-700">
                        {user?.email}
                      </p>
                      {#if user?.isVerified === true}
                        <span class="text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                          Verified
                        </span>
                      {:else if user?.isVerified === false}
                        <span class="text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                          Unverified
                        </span>
                      {/if}
                    </div>
                  </div>
                  
                  <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
    
                {#if isProfileMenuOpen}
                  <div 
                    transition:fly={{ y: -10, duration: 200 }}
                    class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200/50 py-1"
                  >
                    <!-- User Status Section with Verification -->
                    <div class="px-4 py-3 border-b border-gray-100">
                      <div class="flex items-center">
                        <div class="relative">
                          <div class="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white shadow-lg 
                                      bg-gradient-to-br {getAvatarColor(user?.email || '')}
                                      flex items-center justify-center">
                            <span class="avatar-text text-lg font-semibold select-none">
                              {getInitials(user?.email || 'User')}
                            </span>
                          </div>
                          
                          <!-- Verification Badge -->
                          {#if user?.isVerified === true}
                            <!-- Verified Badge (Blue checkmark) -->
                            <div class="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full 
                                        ring-2 ring-white flex items-center justify-center">
                              <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                              </svg>
                            </div>
                          {:else if user?.isVerified === false}
                            <!-- Unverified Badge (Yellow exclamation) -->
                            <div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full 
                                        ring-2 ring-white flex items-center justify-center">
                              <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 5v9m0 4v.01" stroke-width="2" stroke-linecap="round"/>
                              </svg>
                            </div>
                          {/if}
                        </div>
                        <div class="ml-3">
                          <div class="flex items-center gap-1.5">
                            <p class="text-sm font-medium text-gray-900">
                              {user?.email}
                            </p>
                            {#if user?.isVerified === true}
                              <span class="text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                                Verified
                              </span>
                            {:else if user?.isVerified === false}
                              <span class="text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                                Unverified
                              </span>
                            {/if}
                          </div>
                        </div>
                      </div>
                      
                      <!-- Verification Warning (only show if unverified) -->
                      {#if user?.isVerified === false}
                        <div class="mt-2 p-2 bg-yellow-50 rounded-lg">
                          <p class="text-xs text-yellow-800">
                            Your account is pending verification. Please verify your account to access all features.
                          </p>
                          <a href="/dashboard/verify" 
                             class="mt-1 text-xs font-medium text-yellow-900 hover:text-yellow-800 
                                    flex items-center gap-1">
                            Verify Now
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M9 5l7 7-7 7"/>
                            </svg>
                          </a>
                        </div>
                      {/if}
                    </div>
    
                    <!-- Menu Items -->
                    <div class="py-1">
                      <a href="/dashboard/profile" 
                         class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <svg class="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your Profile
                      </a>
                      <a href="/dashboard/settings" 
                         class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <svg class="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </a>
                      <button 
                        on:click={handleLogout}
                        class="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <svg class="w-4 h-4 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign out
                      </button>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        </header>
    
        <!-- Enhanced Page Content -->
        <main class="py-6">
          <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <!-- Add this notification banner at the top of the dashboard if account is not verified -->
            {#if user?.isVerified === false}
              <div class="bg-yellow-50 border-b border-yellow-200">
                <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <svg class="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p class="text-sm text-yellow-700">
                        Your account is not verified. Please verify your account to access all features.
                      </p>
                    </div>
                    <div class="flex items-center gap-2">
                      <a href="/dashboard/verify" 
                         class="inline-flex items-center px-3 py-1.5 border border-yellow-600 
                                rounded-md text-sm font-medium text-yellow-700 bg-yellow-50 
                                hover:bg-yellow-100 transition-colors">
                        Verify Now
                        <svg class="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </a>
                      <button class="text-yellow-600 hover:text-yellow-500" 
                              on:click={() => resendVerification()}>
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
            <slot />
          </div>
        </main>
      </div>
    </div>
  {:else}
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4">
                <svg class="animate-spin" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" 
                            stroke="currentColor" stroke-width="4" fill="none" />
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            </div>
            <p class="text-gray-600">Redirecting to login...</p>
        </div>
    </div>
  {/if}
  
  <style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    nav::-webkit-scrollbar {
      display: none;
    }
  
    /* Hide scrollbar for IE, Edge and Firefox */
    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
    .group:hover .group-hover\:opacity-100 {
      opacity: 1;
    }
    
    /* Add smooth scrolling */
    html {
        scroll-behavior: smooth;
    }

    /* Enhanced scrollbar styling */
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #CBD5E1;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #94A3B8;
    }

    /* Add smooth transition for the notification banner */
    .bg-yellow-50 {
        transition: all 0.3s ease-in-out;
    }

    /* Ensure avatar text is always white */
    .avatar-text {
        color: #fff !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  </style> 