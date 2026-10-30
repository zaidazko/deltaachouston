import { HOURS, PHONE_DISPLAY, PHONE_HREF, QUOTE_EMAIL_HREF } from '../data'

export function Quote() {
  return (
    <section className="quote" id="quote" aria-labelledby="quote-heading">
      <div className="section__inner quote__inner">
        <div className="quote__copy">
          <h2 id="quote-heading">Get a quote</h2>
          <p>
            Call {PHONE_DISPLAY} or email your address, property type, and
            whether you need install, repair, or maintenance. We confirm
            coverage and next steps during {HOURS}.
          </p>
        </div>
        <div className="hero__ctas">
          <a className="btn btn--primary btn--lg" href={PHONE_HREF}>
            Call for a quote
          </a>
          <a className="btn btn--ghost btn--lg" href={QUOTE_EMAIL_HREF}>
            Email a quote request
          </a>
        </div>
      </div>
    </section>
  )
}
