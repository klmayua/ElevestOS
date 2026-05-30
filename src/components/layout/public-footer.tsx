import Link from "next/link";

const footerLinks = {
  platform: {
    label: "Platform",
    links: [
      { label: "Grant Discovery", href: "/platform#discovery" },
      { label: "Application Workspace", href: "/platform#workspace" },
      { label: "Project Execution", href: "/platform#execution" },
      { label: "Reporting", href: "/platform#reporting" },
      { label: "Compliance", href: "/platform#compliance" },
      { label: "Training", href: "/platform#training" },
    ],
  },
  resources: {
    label: "Resources",
    links: [
      { label: "Knowledge Hub", href: "/resources" },
      { label: "Guides", href: "/resources/guides" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
  company: {
    label: "Company",
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {Object.values(footerLinks).map((section) => (
            <div key={section.label}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
                {section.label}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Contact
            </h4>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-[5px] bg-brand-trust flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-white font-heading">E</span>
              </div>
              <span className="text-sm font-heading font-bold text-gray-100 tracking-tight">
                ElevestOS
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">by Elevest Labs</p>
            <a
              href="mailto:hello@elevestos.com"
              className="text-sm text-gray-500 hover:text-gray-100 transition-colors"
            >
              hello@elevestos.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Elevest Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
