// FIX: I changed .mjs to .js 
// More info: https://github.com/shadcn-ui/taxonomy/issues/100#issuecomment-1605867844

const { createContentlayerPlugin } = require("next-contentlayer");

import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'splitify-one.vercel.app',
        'miniature-rotary-phone-wrr6j9666vrw2g5gr-3000.app.github.dev',
      ],
    },
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(withPWA(nextConfig));
