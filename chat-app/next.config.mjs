/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // output: "standalone",
    images: {
        unoptimized: false,
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https", // Hoặc bỏ trống nếu chấp nhận mọi protocol
                hostname: "*",
                pathname: "/**",
            },
        ],
    },
    experimental: {
        serverActions: {
            allowedOrigins: [
                `localhost:${process.env.NEXT_PUBLIC_PORT}`,
                `${process.env.NEXT_PUBLIC_BASE_URL}`,
            ],
        },
    },
    env: {
        HOST: "http://localhost:5000",
    },
};

export default nextConfig;
