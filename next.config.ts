import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',                 // Giao thức HTTPS
                hostname: 'images.unsplash.com',   // Tên miền Unsplash
                port: '',                          // Không cần cổng
                pathname: '/photo-**',             // Đường dẫn bắt đầu với /photo- (chấp nhận các hình ảnh như /photo-123456789.jpg)
            },
        ],
    },
};

export default nextConfig;
