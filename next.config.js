/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["dtcfvefadhqymooinhrs.supabase.co"],
  },
};

module.exports = nextConfig;
