export default function Footer() {
  const links = [
    { href: "#listings", label: "Listings" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <h3 className="text-lg font-bold text-white">Hearthside Realty</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Hearthside Realty is a locally owned brokerage helping families buy
              and sell homes since 2005. We believe finding the right home should
              feel exciting, not exhausting.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p>412 Lakeview Avenue, Suite 200, Madison, WI 53703</p>
              <p>
                <a
                  href="tel:+16085550147"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  (608) 555-0147
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@hearthsiderealty.com"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  hello@hearthsiderealty.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-400">
          © 2026 Hearthside Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
