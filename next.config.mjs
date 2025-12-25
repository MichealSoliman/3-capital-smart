import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: true, // بدل 'as-needed'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Redirect إجباري للعربي
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ar',
        permanent: false
      }
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    serverActions: {
      enabled: true,
    },
  },

  output: 'standalone',
};

export default withNextIntlConfig(nextConfig);
