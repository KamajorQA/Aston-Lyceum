/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cs.sberuniversity.online',
        port: '',
        pathname: '/image/1000/auto/upsize/**',
      },
    ],
  },
};

module.exports = nextConfig;
