export function Reviews() {
  return (
    <section className="section section--ruled" id="reviews" aria-labelledby="reviews-heading">
      <div className="section__inner">
        <header className="section__header">
          <h2 id="reviews-heading">Reviews</h2>
          <p>Customer feedback will appear here once the reviews widget is connected.</p>
        </header>

        {/*
          Elfsight Google Reviews embed — reserved mount only.
          Do not add fake quotes or ratings. Wire the Elfsight script later
          and target #elfsight-reviews / [data-elfsight-embed].
        */}
        <div
          id="elfsight-reviews"
          className="elfsight-mount"
          data-elfsight-embed
          aria-label="Reviews widget placeholder"
        />
      </div>
    </section>
  )
}
