import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({
        name: process.env.NEXT_PUBLIC_APP_NAME || 'FreelancePro',
        url: process.env.NEXT_PUBLIC_APP_URL,
    })
}

