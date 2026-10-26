export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="section__inner about">
        <div className="about__copy">
          <header className="section__header">
            <h2 id="about-heading">About DELTA</h2>
            <p>
              DELTA Air Conditioning is a Houston HVAC company focused on
              install and repair for residential and commercial properties
              across the metro.
            </p>
          </header>
          <p className="about__story">
            We handle residential and commercial HVAC install and repair. Call
            during weekday hours and we will help you get the work scheduled.
          </p>
        </div>
        <figure className="about__figure">
          <img
            src="/about-hvac.jpg"
            alt="HVAC technician servicing outdoor equipment"
            width={1400}
            height={934}
          />
          {/* Photo placeholder — replace with DELTA crew / job site photography when available */}
        </figure>
      </div>
    </section>
  )
}
