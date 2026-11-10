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

      // The US operations desks used to be static sites on their own subdomains. Once those hosts point at this
      // Vercel project, send every old address to the page that replaced it (see data/operations.ts).
      { source: "/:path*", has: [{ type: "host", value: "trucking.yourforce.io" }], destination: "https://www.yourforce.io/operations/trucking", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "billing.yourforce.io" }], destination: "https://www.yourforce.io/operations/billing", permanent: true },
      { source: "/data-entry/:rest*", has: [{ type: "host", value: "backoffice.yourforce.io" }], destination: "https://www.yourforce.io/operations/data-entry", permanent: true },
      { source: "/insurance-documents/:rest*", has: [{ type: "host", value: "backoffice.yourforce.io" }], destination: "https://www.yourforce.io/operations/insurance-documents", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "backoffice.yourforce.io" }], destination: "https://www.yourforce.io/operations", permanent: true },

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