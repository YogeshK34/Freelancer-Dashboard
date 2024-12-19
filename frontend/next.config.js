/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['wallpaperaccess.com', 'cdn.vox-cdn.com', 'static.learnk8s.io', 'images.unsplash.com', 'th.bing.com', 'wallpapercave.com', 'images.hdqwalls.com'],
    },
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
}

module.exports = nextConfig

