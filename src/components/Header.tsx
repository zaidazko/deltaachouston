import { EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '../data'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#service-area' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="DELTA Air Conditioning home">
          <img
            src="/delta-logo.png"
            alt="DELTA Air Conditioning"
            className="site-logo"
            width={161}
            height={50}
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="phone-link" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <a className="btn btn--primary" href={PHONE_HREF}>
            Call Now
          </a>
          <a className="btn btn--ghost header-email" href={EMAIL_HREF}>
            Email
          </a>
        </div>
      </div>
    </header>
  )
}
