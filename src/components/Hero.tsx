import { PHONE_HREF } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/hero-hvac.jpg"
          alt=""
          className="hero__image"
          width={1471}
          height={974}
        />
      </div>
      <div className="hero__content">
        <div className="hero__panel">
          <p className="hero__brand">DELTA</p>
          <p className="hero__brand-sub">Air Conditioning</p>
          <h1 id="hero-heading" className="hero__headline">
            HVAC for Houston residential and commercial properties
          </h1>
          <p className="hero__support">
            Install and repair across Greater Houston for residential and
            commercial customers.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary btn--lg" href={PHONE_HREF}>
              Call Now
            </a>
            <a className="btn btn--secondary btn--lg" href="#contact">
              Request service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
