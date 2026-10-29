import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The school page moved from Services to Products.
      {
        source: "/services/schools",
        destination: "/products/schools",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;