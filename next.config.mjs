/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "hips.hearstapps.com" },
      { protocol: "https", hostname: "design-milk.com" },
      { protocol: "https", hostname:"s3-blog.homelane.com"},
      { protocol: "https", hostname: "cdn.home-designing.com" },
      { protocol: "https", hostname: "cdn.mos.cms.futurecdn.net" },
    ],

    unoptimized: true, // ✅ disables Next's image optimizer for static exports
  },
  // output: "export", // ✅ tells Next.js to do a static HTML export
  // output: "standalone", 
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
