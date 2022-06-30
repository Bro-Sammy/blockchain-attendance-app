/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me", "images.unsplash.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
