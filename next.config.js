/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  env: {
    NODEMAILER_EMAIL: 'support@mythvortex.com',
    NODEMAILER_PW: 'ajpe kwxa tstd kpvh'
  },
};

module.exports = nextConfig;
