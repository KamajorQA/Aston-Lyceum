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
      {
        protocol: 'https',
        hostname: 'cs.sberuniversity.online',
        port: '',
        pathname: '/image/full/**',
      },
      {
        protocol: 'https',
        hostname: 'timeweb.com',
        port: '',
        pathname: '/media/articles/**',
      },
    ],
  },
};

module.exports = nextConfig;
