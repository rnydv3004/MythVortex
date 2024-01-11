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
    NODEMAILER_EMAIL: 'taryan3087@gmail.com',
    NODEMAILER_PW: 'eosn rqfg gavc ormn'
  },
};

module.exports = nextConfig;
