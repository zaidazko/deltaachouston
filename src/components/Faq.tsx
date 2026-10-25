import { FAQS } from '../data'

export function Faq() {
  return (
    <section className="section section--ruled" id="faq" aria-labelledby="faq-heading">
      <div className="section__inner">
        <header className="section__header">
          <h2 id="faq-heading">FAQ</h2>
          <p>Straight answers about hours, coverage, and how to get started.</p>
        </header>

        <div className="faq-list">
          {FAQS.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
