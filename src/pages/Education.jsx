import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Education() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Education</h1>
          <p className="section-head__desc">
            Degrees and current doctoral training.
          </p>
        </header>
        <ol className="timeline">
          {PROFILE.education.map((ed, i) => (
            <li key={ed.degree} className="timeline__item surface-card">
              <span className="timeline__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="timeline__body">
                <span className="timeline__years">{ed.years}</span>
                <h2 className="timeline__degree">{ed.degree}</h2>
                <p className="timeline__school">{ed.school}</p>
                {ed.detail ? (
                  <p className="timeline__detail">{ed.detail}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  )
}
