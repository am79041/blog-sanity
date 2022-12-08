/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      "cdn.sanity.io",
      "avatars.dicebear.com",
      "lh3.googleusercontent.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
