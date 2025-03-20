/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        // 警告：仅用于临时绕过错误
        ignoreDuringBuilds: true,
    },
    experimental: {
        ppr: 'incremental',
    }
};

export default nextConfig;
