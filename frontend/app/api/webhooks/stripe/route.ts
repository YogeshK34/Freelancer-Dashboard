/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
    const body = await req.text()
    const signature = (await headers()).get('Stripe-Signature') as string

    let event: any

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
        console.log('Received webhook event:', event.type);
        console.log('Event data:', event.data.object);
    } catch (err: any) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message)
        return NextResponse.json({ error: err.message }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
            const subscription = event.data.object
            await updateSubscription(subscription)
            break
        default:
            console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
}

async function updateSubscription(subscription: any) {
    const userId = subscription.client_reference_id

    if (!userId) {
        console.error('No user ID found in subscription metadata')
        return
    }

    console.log('Updating subscription for user:', userId);
    console.log('Subscription data:', subscription);

    const { error } = await supabase
        .from('subscriptions')
        .upsert({
            user_id: userId,
            stripe_customer_id: subscription.customer,
            stripe_subscription_id: subscription.id,
            status: subscription.status,
            plan_id: subscription.items.data[0].price.id,
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        })

    if (error) {
        console.error('Error updating subscription in database:', error)
    }
}

