import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const { priceId, userId } = await req.json()

            // Fetch the user's email from Supabase
            const { data: userData, error: userError } = await supabase
                .from('profiles')
                .select('email')
                .eq('id', userId)
                .single()

            if (userError || !userData) {
                throw new Error('User not found')
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: priceId,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
                customer_email: userData.email,
                client_reference_id: userId,
            })

            return NextResponse.json({ url: session.url })
        } catch (error) {
            console.error('Error:', error)
            return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 })
        }
    } else {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
    }
}


