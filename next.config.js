/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "media.graphassets.com"],
  },
};

module.exports = nextConfig;
