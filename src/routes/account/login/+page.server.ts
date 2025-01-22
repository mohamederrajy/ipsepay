import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies }) => {
    // Check if user is already logged in
    const token = cookies.get('authToken');
    const userStr = cookies.get('user');

    // If there's any session data, redirect to dashboard
    if (token || userStr || locals.user || locals.token) {
        console.log('✅ Session exists - Keeping user in dashboard');
        throw redirect(303, '/dashboard');
    }

    // Only allow access to login if there's no session at all
    return {
        headers: {
            'Cache-Control': 'no-store, must-revalidate',
            'Pragma': 'no-cache'
        }
    };
};
