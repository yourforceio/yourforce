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

      // There is no /services index page; the engineering page is the closest match.
      {
        source: "/services",
        destination: "/services/commerce",
        permanent: false,
      },

      // The portfolio presented the founder's previous-employer projects as YourForce case studies. Until those
      // pages are rewritten as "founder experience", send visitors to the honestly labelled section on the homepage.
      // Temporary (307) so it can be undone without browsers caching it.
      {
        source: "/portfolio",
        destination: "/#founder",
        permanent: false,
      },
      {
        source: "/portfolio/:slug",
        destination: "/#founder",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;