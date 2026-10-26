import { CITIES, PHONE_HREF } from '../data'

export function ServiceArea() {
  return (
    <section className="section" id="service-area" aria-labelledby="area-heading">
      <div className="section__inner">
        <header className="section__header">
          <h2 id="area-heading">Service area</h2>
          <p>Based in Houston, TX. Serving communities across Greater Houston.</p>
        </header>

        <ul className="city-list">
          {CITIES.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>

        <p className="section__note">
          Not sure if we cover your address?{' '}
          <a className="text-link" href={PHONE_HREF}>
            Call and ask
          </a>
          .
        </p>
      </div>
    </section>
  )
}
