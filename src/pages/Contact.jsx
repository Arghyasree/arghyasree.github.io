import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Contact() {
  return (
    <RevealSection className="section--inner section--contact">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Contact</h1>
          <p className="section-head__desc">
            For research-related correspondence, please use the email below.
          </p>
        </header>
        <div className="contact-panel surface-card surface-card--pad-lg">
          <div className="contact-panel__row">
            <span className="contact-panel__label">Email</span>
            <a
              className="contact-panel__value"
              href={`mailto:${PROFILE.email}`}
            >
              {PROFILE.email}
            </a>
          </div>
          {/*<div className="contact-panel__row">
            <span className="contact-panel__label">Location</span>
            <span className="contact-panel__value">{PROFILE.location}</span>
          </div>*/}
          <div className="contact-panel__social">
            {PROFILE.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="contact-chip"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
