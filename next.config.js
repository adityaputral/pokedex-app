/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
};

module.exports = nextConfig;
