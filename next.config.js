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
      // Legacy Wix scaffold/blank pages → homepage
      { source: "/blank-1", destination: "/", permanent: true },
      { source: "/blank-2", destination: "/", permanent: true },
      { source: "/blank-5", destination: "/", permanent: true },
      // Legacy Wix category & info pages → current pages
      {
        source: "/blog/categories/contact-lenses",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/signs-symptoms-checker",
        destination: "/eye-exams",
        permanent: true,
      },
      // Legacy Wix team pages → /team
      {
        source: "/team/dr.-taylor-williamson",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/team/vicki-wrege",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
