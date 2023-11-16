/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cs.sberuniversity.online',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'timeweb.com',
        port: '',
        pathname: '/media/articles/**',
      },
      {
        protocol: 'https',
        hostname: 'nodejsdev.ru',
        port: '',
        pathname: '/guides/**',
      },
      {
        protocol: 'https',
        hostname: 'losst.pro',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};

module.exports = nextConfig;
