import { PHONE_HREF, SERVICES } from '../data'

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section__inner">
        <header className="section__header">
          <h2 id="services-heading">Services</h2>
          <p>
            Install, repair, and maintain systems for the places Houston works
            and lives.
          </p>
        </header>

        <ul className="service-list">
          {SERVICES.map((service) => (
            <li key={service.title} className="service-list__item">
              <div className="service-list__copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <a className="text-link" href={service.href}>
                {service.href === PHONE_HREF ? 'Call for this service' : 'Ask about scheduling'}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
