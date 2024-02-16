/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
