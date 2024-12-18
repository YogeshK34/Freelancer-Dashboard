import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY is not set in the environment variables');
    throw new Error('STRIPE_SECRET_KEY is not set in the environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia', // Use the latest stable version
});

console.log('Stripe initialized successfully');

export const STRIPE_PRICE_IDS = {
    BASIC: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || 'price_1234567890',
    PRO: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || 'price_0987654321',
    ENTERPRISE: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || 'price_1357924680',
};

