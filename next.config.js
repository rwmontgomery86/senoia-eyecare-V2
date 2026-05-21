/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy Wix blog URLs → current pages
      {
        source:
          "/post/your-child-s-vision-the-hidden-key-to-academic-success-every-parent-needs-to-know",
        destination: "/pediatric-family",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
