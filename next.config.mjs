/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/gsap-animations",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig