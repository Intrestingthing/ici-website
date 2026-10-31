/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Photos uploaded in the ICI Portal live in its public Supabase storage.
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co", pathname: "/storage/v1/object/public/**" },
    ],
  },
};

export default nextConfig;
