import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      { source: '/uploads/:path*', destination: 'http://localhost:4200/uploads/:path*' },
    ];
  },
};

export default nextConfig;
