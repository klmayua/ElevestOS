import Link from "next/link";

const footerLinks = {
  platform: {
    label: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
    ],
  },
  governance: {
    label: "Governance",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
};

export function PublicFooter() {
  return (
    <footer className="bg-primary-container border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-margin-desktop py-3xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-xl">
          <div className="col-span-2 md:col-span-1">
            <span className="font-headline-md text-headline-md font-bold text-on-primary mb-md block">
              ElevestOS
            </span>
            <p className="font-body-md text-body-md text-on-primary-container max-w-sm">
              Infrastructure-grade technology for global NGOs and development funders. Institutional stability by design.
            </p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.label}>
              <h4 className="font-label-md text-label-md text-on-primary mb-xl uppercase tracking-widest">
                {section.label}
              </h4>
              <ul className="space-y-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body-md text-body-md text-on-primary-container hover:text-on-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3xl pt-xl border-t border-outline-variant/20">
          <p className="font-label-md text-label-md text-on-primary-container">
            &copy; {new Date().getFullYear()} ElevestOS Institutional Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
