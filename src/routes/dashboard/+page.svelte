<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let user = null;
    let token = null;

    onMount(() => {
        if (browser) {
            console.log('\n🔍 Dashboard: Checking session');

            // Get session data
            const userStr = localStorage.getItem('user');
            token = localStorage.getItem('authToken');

            try {
                if (userStr) {
                    user = JSON.parse(userStr);
                    console.log('✅ Session found:', {
                        user: { ...user, password: undefined },
                        hasToken: !!token,
                        tokenLength: token?.length
                    });
                } else {
                    console.log('❌ No user data found');
                    window.location.replace('/account/login');
                }
            } catch (err) {
                console.error('❌ Error parsing user data:', err);
                localStorage.clear();
                window.location.replace('/account/login');
            }
        }
    });
</script>

<!-- Rest of your dashboard template -->
