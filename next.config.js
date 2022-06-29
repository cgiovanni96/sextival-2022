/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["dtcfvefadhqymooinhrs.supabase.co"],
  },
};

module.exports = nextConfig;
