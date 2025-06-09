/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

const nextConfig = {
  i18n,
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: isProduction ? `${process.env.NEXT_PUBLIC_CDN_URL}` : undefined,
  sassOptions: {
    prependData: `
       $cdnUrl: '/static';
    `,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withBundleAnalyzer(withSentryConfig(nextConfig, sentryWebpackPluginOptions));
