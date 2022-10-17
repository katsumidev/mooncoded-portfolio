/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
};

module.exports = nextConfig;
