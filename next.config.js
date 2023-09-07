/** @type {import('next').NextConfig} */
const nextConfig = {
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
