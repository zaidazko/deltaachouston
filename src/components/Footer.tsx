import {
  EMAIL,
  EMAIL_HREF,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../data'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            src="/delta-logo.png"
            alt="DELTA Air Conditioning"
            className="site-logo site-logo--footer"
            width={161}
            height={50}
          />
          <p>DELTA Air Conditioning — Houston HVAC install and repair.</p>
        </div>

        <div className="site-footer__col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={EMAIL_HREF}>{EMAIL}</a>
            </li>
            <li>Hours: {HOURS}</li>
            <li>Houston, TX</li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Company</h3>
          <ul>
            {/* Placeholder — replace with actual TACLA / license number when confirmed */}
            <li>License: #XXXXXX (placeholder)</li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© 2026 DELTA Air Conditioning. All rights reserved.</p>
      </div>
    </footer>
  )
}
