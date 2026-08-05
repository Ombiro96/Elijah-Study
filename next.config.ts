import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/week/3",
        destination: "/week/2",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
