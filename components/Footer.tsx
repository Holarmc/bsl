import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-highest w-full border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg max-w-container-max mx-auto px-margin-desktop py-section-padding">
        {/* Brand Section */}
        <div className="space-y-4">
          <span className="font-h3 text-h3 font-extrabold text-primary">BSL</span>
          <p className="text-body-md text-on-surface-variant">
            Engineering Reliable IT. Powering Business Growth. Africa&apos;s leading technology partner.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-bold text-on-background mb-6">Services</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services#managed-services"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Managed Services
              </Link>
            </li>
            <li>
              <Link
                href="/services#it-support"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                IT Support
              </Link>
            </li>
            <li>
              <Link
                href="/services#infrastructure"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Infrastructure
              </Link>
            </li>
            <li>
              <Link
                href="/services#migration"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Migration
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-on-background mb-6">Company</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about-us"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="text-on-surface-variant hover:text-secondary transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-bold text-on-background mb-6">Contact</h4>
          <address className="not-italic text-on-surface-variant space-y-3">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>11 Coachwood Street, Northern Foreshore Estate, Chevron</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">phone</span>
              <a href="tel:+2349058788143" className="hover:text-primary transition-colors">
                +234 905 878 8143
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a href="mailto:info@bsl.com" className="hover:text-primary transition-colors">
                info@bsl.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-outline-variant py-8">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-sm">© {currentYear} BiproSyncLogic. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
              public
            </button>
            <button className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
              group
            </button>
            <button className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
              terminal
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
