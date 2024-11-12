/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    async headers() {
      return [
        {
          source: "/(.*)", // Adjust this path as needed
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*", // Or specify "localhost:3000" and the other hostname
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "X-Requested-With, Content-Type",
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,POST,PUT,DELETE,OPTIONS",
            },
          ],
        },
      ];
    },
  experimental: {
		serverActions: {
			allowedForwardedHosts: ['localhost'],
			allowedOrigins: ['http://localhost']
		},
	},
};
  


module.exports = nextConfig;

  