/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: {
        allowedOrigins: [
          'localhost:3000', // localhost
          'https://super-duper-telegram-wq56gw4rrp4cgqp-3000.app.github.dev/', // Codespaces
        ],
      }
    },
 
};
  


module.exports = nextConfig;

  