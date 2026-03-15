import { navLinks } from "@/lib/sample-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/30 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-zerot-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">Z</span>
              </div>
              <span className="text-lg font-bold text-slate-900">
                Zero<span className="text-zerot-600">T</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              AI-powered cybersecurity readiness for small and medium businesses.
              Understand risk in plain language and act with confidence.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Data */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Data & Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://opendata.az/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  opendata.az ↗
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#assistant"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Ask ZeroT
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} ZeroT. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-400 text-center md:text-right max-w-md">
            Public data referenced from{" "}
            <a
              href="https://opendata.az/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zerot-500 hover:text-zerot-600"
            >
              opendata.az
            </a>{" "}
            is used for contextual benchmarking. All cybersecurity incidents displayed are synthetic sample data for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
