import { EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '../data'

export function FinalCta() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="cta-heading">
      <div className="section__inner final-cta__inner">
        <h2 id="cta-heading">Ready for cooler air?</h2>
        <p>
          Talk with DELTA Air Conditioning about install or repair for your
          home, restaurant, office, or school. Call {PHONE_DISPLAY} during
          Mon–Fri 9AM–7PM.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary btn--lg" href={PHONE_HREF}>
            Call Now
          </a>
          <a className="btn btn--secondary btn--lg" href={EMAIL_HREF}>
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
