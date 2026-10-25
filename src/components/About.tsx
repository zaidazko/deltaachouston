export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="section__inner about">
        <div className="about__copy">
          <header className="section__header">
            <h2 id="about-heading">About DELTA</h2>
            <p>
              DELTA Air Conditioning is a Houston HVAC company focused on
              install and repair for real buildings—homes, restaurants, offices,
              and schools across the metro.
            </p>
          </header>
          <p className="about__story">
            We show up for the work that keeps people comfortable: a family
            living room in Katy, a kitchen line in Sugar Land, a classroom in
            Spring, a roof pack on an office in downtown Houston. Call during
            weekday hours and talk with a team that covers residential and
            commercial side by side.
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
