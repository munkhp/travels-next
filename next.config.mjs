/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      // Bundled JSON fallback still points at Cloudinary until the Sanity
      // migration has been run.
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dmyps1mg3/**",
      },
    ],
  },
};

export default nextConfig;
