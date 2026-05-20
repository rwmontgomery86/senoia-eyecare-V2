import EyebrowLabel from "@/components/ui/EyebrowLabel";
import FadeUp from "@/components/ui/FadeUp";
import { site } from "@/data/site";

const linkClass =
  "text-accent underline decoration-rule underline-offset-4 transition-colors duration-200 ease-expo hover:text-accent-deep";

function Section({
  number,
  title,
  children,
  first = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <FadeUp y={16}>
      <section
        className={
          first
            ? ""
            : "border-t border-rule pt-16 md:pt-20"
        }
      >
        <EyebrowLabel>§ {number}</EyebrowLabel>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-tight">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-muted">
          {children}
        </div>
      </section>
    </FadeUp>
  );
}

export default function PrivacyBody() {
  return (
    <section data-nav-mode="on-light" className="bg-paper px-6 pb-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[680px] space-y-16 md:space-y-20">
        <Section number="01" title="What we collect" first>
          <p>
            When you write to us at{" "}
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
            , we receive your name, email address, and whatever you choose to
            share in the message. We use that information to reply to you.
          </p>
          <p>
            When you visit this site, we also collect a small amount of
            information automatically:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-ink">Analytics</span> — Google Analytics 4
              records pageviews, the kind of device you&apos;re using, where you
              arrived from, and an approximate location derived from your IP
              address (city or region, never precise GPS).
            </li>
            <li>
              <span className="text-ink">Advertising</span> — the Meta Pixel
              records that a browser visited our site so we can measure and
              target social-media ads.
            </li>
            <li>
              <span className="text-ink">Server logs</span> — standard web-server
              logs (IP address, browser type, timestamp) retained briefly for
              security and troubleshooting.
            </li>
          </ul>
        </Section>

        <Section number="02" title="How we use it">
          <p>We use the information above to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Reply to questions and appointment requests you send us.</li>
            <li>
              Understand how visitors find and use the site so we can make it
              better.
            </li>
            <li>Run and measure our advertising on Google and Meta.</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </Section>

        <Section number="03" title="Third-party services">
          <p>
            A few outside services help us run the site. When those services are
            in use, their own privacy policies also apply:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-ink">Google Analytics</span> —{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                policies.google.com/privacy
              </a>
            </li>
            <li>
              <span className="text-ink">Meta Pixel</span> —{" "}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                facebook.com/privacy/policy
              </a>
            </li>
          </ul>
          <p>
            When you click <span className="text-ink">Book an exam</span>, you
            leave our website and continue on Eyefinity&apos;s scheduler. From
            that point onward, Eyefinity&apos;s privacy policy governs the
            information you share with them.
          </p>
        </Section>

        <Section number="04" title="Cookies & your choices">
          <p>
            Most of the tracking described above relies on cookies. You can
            block or delete them in your browser&apos;s settings at any time —
            the site will keep working without them.
          </p>
          <p>You can also opt out service-by-service:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Google Analytics opt-out browser add-on —{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                tools.google.com/dlpage/gaoptout
              </a>
            </li>
            <li>
              Meta ad preferences —{" "}
              <a
                href="https://www.facebook.com/adpreferences"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                facebook.com/adpreferences
              </a>
            </li>
          </ul>
        </Section>

        <Section number="05" title="Patient health information (HIPAA)">
          <p>
            This website is a marketing site. It does not collect, store, or
            transmit Protected Health Information (PHI), and it is not the place
            to share medical history, prescriptions, or insurance details.
          </p>
          <p>
            PHI handled in our office is governed by our{" "}
            <span className="text-ink">Notice of Privacy Practices</span>, which
            is available on request and posted in the office. If you have
            questions about how we handle PHI, please ask us in person or by
            phone rather than by email.
          </p>
        </Section>

        <Section number="06" title="Children's privacy">
          <p>
            This site is not directed to children under 13, and we do not
            knowingly collect personal information from children under 13
            through the website. If you believe a child has provided us with
            personal information through the site, please contact us and we
            will delete it.
          </p>
        </Section>

        <Section number="07" title="Changes to this policy">
          <p>
            We may update this policy from time to time. The{" "}
            <span className="text-ink">Last updated</span> date at the top of
            the page reflects the most recent change.
          </p>
        </Section>

        <Section number="08" title="Contact us">
          <p>
            Questions about this policy or how the website handles your
            information? We&apos;d rather hear from you than leave you guessing.
          </p>
          <address className="not-italic space-y-1 text-ink">
            <div>{site.name}</div>
            <div>{site.address.line1}</div>
            <div>{site.address.line2}</div>
            <div>
              <a href={`tel:${site.phone.tel}`} className={linkClass}>
                {site.phone.display}
              </a>
            </div>
            <div>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </div>
          </address>
        </Section>
      </div>
    </section>
  );
}
