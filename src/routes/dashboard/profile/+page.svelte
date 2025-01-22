<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  
  let user = null;
  let isEditing = false;
  let loading = true;
  let saveLoading = false;
  let message = { type: '', text: '' };
  let activeTab = 'personal';

  // Form data
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    address: '',
    username: '',
    company: '',
    role: '',
    bio: '',
    website: '',
    timezone: '',
    language: '',
    notifications: {
      email: true,
      push: true,
      sms: false
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>` },
    { id: 'security', label: 'Security', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>` },
    { id: 'preferences', label: 'Preferences', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>` },
    {
      id: 'billing',
      label: 'Billing',
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`
    }
  ];

  onMount(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        user = JSON.parse(userData);
        formData = {
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.email || '',
          phoneNumber: user.phoneNumber || '',
          country: user.country || '',
          address: user.address || '',
          username: user.username || '',
          company: user.company || '',
          role: user.role || '',
          bio: user.bio || '',
          website: user.website || '',
          timezone: user.timezone || '',
          language: user.language || '',
          notifications: {
            email: user.notifications?.email || true,
            push: user.notifications?.push || true,
            sms: user.notifications?.sms || false
          }
        };
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      loading = false;
    }
  });

  async function handleSave() {
    saveLoading = true;
    message = { type: '', text: '' };

    try {
      const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        user = { ...user, ...updatedUser };
        localStorage.setItem('user', JSON.stringify(user));
        message = { type: 'success', text: 'Profile updated successfully!' };
        isEditing = false;
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      message = { type: 'error', text: 'Failed to update profile. Please try again.' };
    } finally {
      saveLoading = false;
    }
  }

  function getInitials(name) {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }
</script>

<div class="max-w-7xl mx-auto" in:fly="{{ y: 20, duration: 600 }}">
  <div class="mb-8 bg-gradient-to-br from-[#605bff]/5 via-[#8b7aff]/5 to-[#605bff]/5 rounded-3xl p-10 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/10"></div>
    <div class="relative">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-8">
          <!-- Enhanced Avatar -->
          <div class="relative group">
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#605bff] to-[#8b7aff] 
                        flex items-center justify-center text-4xl text-white font-semibold 
                        shadow-xl shadow-[#605bff]/20 transition-all duration-300 
                        group-hover:shadow-2xl group-hover:shadow-[#605bff]/30 
                        group-hover:scale-105 cursor-pointer">
              {user?.firstName ? getInitials(`${user.firstName} ${user.lastName}`) : user?.email[0].toUpperCase()}
            </div>
            {#if isEditing}
              <button class="absolute -bottom-2 -right-2 p-3 bg-white rounded-xl shadow-lg 
                           border border-gray-100 text-gray-600 hover:text-[#605bff] 
                           transition-all duration-200 hover:scale-110 hover:shadow-xl">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            {/if}
          </div>

          <!-- Enhanced Profile Info -->
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-4xl font-bold text-gray-900 tracking-tight">
                  {user?.firstName ? `${user.firstName} ${user.lastName}` : user?.email}
                </h1>
                <p class="mt-2 text-lg text-gray-600">
                  {user?.role || 'Merchant Account'} {#if user?.company}at {user.company}{/if}
                </p>
              </div>
              <div class="flex items-center gap-4">
                <button
                  class="inline-flex items-center px-6 py-3 text-sm font-medium text-white 
                         bg-[#605bff] rounded-xl hover:bg-[#4b45cc] focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-[#605bff] 
                         transition-all duration-200 shadow-lg shadow-[#605bff]/20
                         hover:shadow-xl hover:shadow-[#605bff]/30"
                  on:click={() => isEditing = !isEditing}
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                </button>
              </div>
            </div>

            <!-- Enhanced Status Section -->
            <div class="mt-6 flex items-center gap-6">
              {#if user?.isVerified}
                <span class="inline-flex items-center px-4 py-2 rounded-xl text-sm 
                           font-medium bg-green-50 text-green-700 border border-green-100">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified Account
                </span>
              {:else}
                <span class="inline-flex items-center px-4 py-2 rounded-xl text-sm 
                           font-medium bg-yellow-50 text-yellow-700 border border-yellow-100">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Pending Verification
                </span>
              {/if}
              
              <!-- Additional Status Indicators -->
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <span class="inline-flex items-center">
                  <span class="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                  Active
                </span>
                <span class="text-gray-300">•</span>
                <span>{user?.timezone || 'UTC+03:00'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Enhanced Tabs -->
  <div class="mb-8 bg-white rounded-2xl shadow-sm border border-gray-200/50 p-1">
    <nav class="flex space-x-2">
      {#each tabs as tab}
        <button
          class="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                 flex items-center justify-center gap-2 {activeTab === tab.id ? 
                 'bg-[#605bff]/10 text-[#605bff]' : 
                 'text-gray-500 hover:bg-gray-50'}"
          on:click={() => activeTab = tab.id}
        >
          {@html tab.icon}
          {tab.label}
        </button>
      {/each}
    </nav>
  </div>

  {#if loading}
    <div class="flex justify-center items-center min-h-[400px]">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#605bff]"></div>
    </div>
  {:else if user}
    <!-- Profile Content -->
    {#if activeTab === 'personal'}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden">
            <!-- ... Rest of your form content ... -->
          </div>
        </div>

        <!-- Side Info -->
        <div class="space-y-8">
          <!-- Account Stats -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Account Overview</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-[#605bff]/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-[#605bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-500">Member Since</p>
                  <p class="text-sm text-gray-900">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <!-- Add more stats as needed -->
            </div>
          </div>

          <!-- Connected Accounts -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Connected Accounts</h3>
            <!-- Add connected accounts section -->
          </div>
        </div>
      </div>
    {:else if activeTab === 'security'}
      <!-- Security Tab Content -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
        <!-- Add security content -->
      </div>
    {:else if activeTab === 'billing'}
      <!-- Billing Tab Content -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
        <!-- Add billing content -->
      </div>
    {:else}
      <!-- Preferences Tab Content -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6">
        <!-- Add preferences content -->
      </div>
    {/if}
  {:else}
    <div class="bg-red-50 p-4 rounded-xl">
      <p class="text-red-600">Failed to load user data. Please try again later.</p>
    </div>
  {/if}
</div>

<style>
  .bg-grid-white\/10 {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 24px 24px;
  }
</style>
