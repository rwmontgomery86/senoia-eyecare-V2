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
      // Legacy Wix category pages → current pages
      {
        source: "/blog/categories/insurance",
        destination: "/insurance",
        permanent: true,
      },
      {
        source: "/blog/categories/eyewear",
        destination: "/frames",
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
      {
        source: "/team/melinda-stevenson",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/team/gracie-mcdaniel",
        destination: "/team",
        permanent: true,
      },
      // Legacy Wix service pages → current pages
      {
        source: "/services/prescription-glasses",
        destination: "/frames",
        permanent: true,
      },
      {
        source: "/services/ocular-conditions",
        destination: "/eye-exams",
        permanent: true,
      },
      {
        source: "/services/contact-lenses",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/contact-lens-exam-senoia-ga",
        destination: "/contacts",
        permanent: true,
      },
      // Legacy Wix blog index & category pages → current pages
      { source: "/blog", destination: "/", permanent: true },
      {
        source: "/blog/categories/eye-health",
        destination: "/eye-exams",
        permanent: true,
      },
      // Legacy Wix posts → closest current page
      {
        source: "/post/childrens-eye-exams",
        destination: "/pediatric-family",
        permanent: true,
      },
      {
        source: "/post/comprehensive-eye-exams",
        destination: "/eye-exams",
        permanent: true,
      },
      {
        source: "/post/complete-eye-exam",
        destination: "/eye-exams",
        permanent: true,
      },
      {
        source: "/post/diabetic-eye-exams",
        destination: "/eye-exams",
        permanent: true,
      },
      {
        source: "/post/meta-ray-bans",
        destination: "/frames",
        permanent: true,
      },
      {
        source: "/post/beginning-of-the-year-benefits",
        destination: "/insurance",
        permanent: true,
      },
      // No /patient-forms route yet → homepage fallback
      { source: "/patient-forms", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
