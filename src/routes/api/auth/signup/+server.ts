import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { randomBytes, scryptSync } from 'crypto';
import { db } from '$lib/server/database';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.email || !data.password || !data.firstName || !data.lastName) {
      return json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      return json({ message: 'Email already registered' }, { status: 400 });
    }

    // Hash password using crypto
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(data.password, salt, 64).toString('hex');
    const passwordHash = `${salt}:${hashedPassword}`;

    // Create new user
    const user = await db.user.create({
      data: {
        email: data.email,
        password: passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone || null,
        country: data.country || null,
        address: data.address || null,
        zipCode: data.zipCode || null,
        website: data.website || null,
      }
    });

    return json({ message: 'User created successfully' }, { status: 201 });
    
  } catch (error) {
    console.error('Signup error:', error);
    return json({ message: 'Internal server error' }, { status: 500 });
  }
}; 