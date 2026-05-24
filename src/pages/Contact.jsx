import RevealSection from '../components/RevealSection'
import { LINKS, PROFILE } from '../data/profile'

const ACADEMIC_PROFILES = [
  { label: 'Google Scholar', href: LINKS.googleScholar },
  { label: 'GitHub', href: LINKS.github },
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'ORCID', href: LINKS.orcid },
]

export default function Contact() {
  return (
    <RevealSection className="section--inner section--contact">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Contact</h1>
          <p className="section-head__desc">
            For academic and research-related correspondence, please contact me
            at the email addresses below.
          </p>
        </header>
        <div className="contact-panel contact-panel--plain">
          <div className="contact-panel__block">
            <h2 className="contact-panel__heading">Email</h2>
            <p className="contact-panel__line">
              <a href={`mailto:${LINKS.emailPersonal}`}>
                {LINKS.emailPersonal}
              </a>
            </p>
            <p className="contact-panel__line">
              <a href={`mailto:${LINKS.emailInstitutional}`}>
                {LINKS.emailInstitutional}
              </a>
            </p>
          </div>

          <div className="contact-panel__block">
            <h2 className="contact-panel__heading">Academic Profiles</h2>
            <p className="contact-panel__inline-links">
              {ACADEMIC_PROFILES.map(({ label, href }, index) => (
                <span key={label}>
                  {index > 0 && (
                    <span className="contact-panel__sep" aria-hidden="true">
                      {' '}
                      |{' '}
                    </span>
                  )}
                  <a href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </span>
              ))}
            </p>
          </div>

          <div className="contact-panel__block">
            <h2 className="contact-panel__heading">Affiliation</h2>
            {PROFILE.affiliation.lines.map((line) => (
              <p key={line} className="contact-panel__line">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
