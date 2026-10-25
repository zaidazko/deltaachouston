export const PHONE_DISPLAY = '(713) 894-5760'
export const PHONE_HREF = 'tel:+17138945760'
export const EMAIL = 'deltaac2000@yahoo.com'
export const EMAIL_HREF = 'mailto:deltaac2000@yahoo.com'
export const HOURS = 'Mon–Fri 9AM–7PM'

export const CITIES = [
  'Houston',
  'Katy',
  'Cypress',
  'Sugar Land',
  'Richmond',
  'Rosenberg',
  'Missouri City',
  'Stafford',
  'Bellaire',
  'Pearland',
  'Friendswood',
  'League City',
  'Pasadena',
  'Baytown',
  'Humble',
  'Kingwood',
  'Atascocita',
  'Spring',
  'Tomball',
  'The Woodlands',
  'Conroe',
  'Magnolia',
] as const

export type ServiceItem = {
  title: string
  description: string
  href: string
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Installation',
    description:
      'New systems for homes, restaurants, offices, and school campuses—sized for Houston heat and long service life.',
    href: PHONE_HREF,
  },
  {
    title: 'Repair',
    description:
      'Fast diagnosis and repair when cooling fails. Residential and commercial units, from single rooms to multi-zone buildings.',
    href: PHONE_HREF,
  },
  {
    title: 'Residential',
    description:
      'Comfort for homeowners across Greater Houston—central AC, replacements, and seasonal tune-ups.',
    href: PHONE_HREF,
  },
  {
    title: 'Commercial',
    description:
      'Service for property managers, businesses, and facilities that cannot afford downtime.',
    href: PHONE_HREF,
  },
  {
    title: 'Schools & campuses',
    description:
      'Install and maintain systems that keep classrooms and administration buildings cool and reliable.',
    href: PHONE_HREF,
  },
  {
    title: 'Maintenance',
    description:
      'Preventive care that extends equipment life and cuts emergency calls before peak summer.',
    href: '#contact',
  },
]

export const REASONS = [
  {
    title: 'Jobs at every scale',
    body: 'From single-family homes to restaurants, office buildings, and school campuses—we work across the sizes that define Houston HVAC.',
  },
  {
    title: 'Residential and commercial',
    body: 'One team for homeowners and facilities managers. Same standards whether it is a house or a multi-unit roof.',
  },
  {
    title: 'Greater Houston coverage',
    body: 'Houston, Katy, Cypress, Sugar Land, The Woodlands, Conroe, and communities across the metro—call and we confirm service for your address.',
  },
  {
    title: 'Straightforward contact',
    body: 'Reach us by phone or email during Mon–Fri 9AM–7PM. Call Now when you need a clear next step.',
  },
] as const

export type FaqItem = {
  question: string
  answer: string
}

export const FAQS: FaqItem[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Houston and serve Greater Houston, including Katy, Cypress, Sugar Land, Richmond, Rosenberg, Missouri City, Stafford, Bellaire, Pearland, Friendswood, League City, Pasadena, Baytown, Humble, Kingwood, Atascocita, Spring, Tomball, The Woodlands, Conroe, and Magnolia.',
  },
  {
    question: 'Do you handle both residential and commercial work?',
    answer:
      'Yes. DELTA Air Conditioning installs and repairs systems for homeowners, property managers, restaurants, office buildings, schools, and other commercial facilities.',
  },
  {
    question: 'What are your hours?',
    answer: `We are available ${HOURS}. Call ${PHONE_DISPLAY} or email ${EMAIL} to request service.`,
  },
  {
    question: 'How do I request service or a quote?',
    answer: `Call ${PHONE_DISPLAY} or email ${EMAIL} with your address, property type, and what you need—install, repair, or maintenance. We will confirm coverage and next steps.`,
  },
  {
    question: 'Can you work on school and restaurant systems?',
    answer:
      'Yes. We regularly support facilities that need dependable cooling for students, staff, guests, and operations—not only single-family homes.',
  },
]
