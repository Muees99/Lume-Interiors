/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
    unoptimized: true, // ✅ disables Next's image optimizer for static exports
  },
  // output: "export", // ✅ tells Next.js to do a static HTML export
  output: "standalone", 
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
