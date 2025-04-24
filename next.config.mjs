/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flooding-bucket.s3.ap-northeast-2.amazonaws.com',
        pathname: '/images/*',
      },
    ],
  },
};

export default nextConfig;
