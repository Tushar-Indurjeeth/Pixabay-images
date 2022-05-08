/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/all',
        permanent: true,
      },
    ];
  },

  images: {
    domains: ['pixabay.com', 'cdn.freebiesupply.com'],
  },
};

module.exports = nextConfig;
