import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 暂时忽略 TypeScript 错误以便调试
  },
  eslint: {
    ignoreDuringBuilds: true, // 暂时忽略 ESLint 错误以便调试
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
