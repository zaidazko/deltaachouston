import { REASONS } from '../data'

export function WhyUs() {
  return (
    <section className="section section--ruled" id="why-us" aria-labelledby="why-heading">
      <div className="section__inner">
        <header className="section__header">
          <h2 id="why-heading">Why choose DELTA</h2>
          <p>Built for the scale of work Greater Houston actually needs.</p>
        </header>

        <ol className="reason-list">
          {REASONS.map((reason, index) => (
            <li key={reason.title} className="reason-list__item">
              <span className="reason-list__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
