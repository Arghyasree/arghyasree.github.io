import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

function EducationDetail({ label, children }) {
  return (
    <p className="edu-timeline__detail">
      <span className="edu-timeline__label">{label}:</span> {children}
    </p>
  )
}

export default function Education() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Education</h1>
        </header>
        <ul className="edu-timeline">
          {PROFILE.education.map((entry) => (
            <li key={entry.degree} className="edu-timeline__entry">
              <span className="edu-timeline__dot" aria-hidden="true" />
              <div className="edu-timeline__content">
                {entry.years ? (
                  <span className="edu-timeline__years">{entry.years}</span>
                ) : null}
                <h2 className="edu-timeline__degree">{entry.degree}</h2>
                <p className="edu-timeline__org">{entry.school}</p>
                {entry.unit ? (
                  <p className="edu-timeline__meta">{entry.unit}</p>
                ) : null}
                {entry.advisor ? (
                  <EducationDetail label="Advisor">
                    <a
                      href={entry.advisor.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.advisor.name}
                    </a>
                  </EducationDetail>
                ) : null}
                {entry.researchArea ? (
                  <EducationDetail label="Research Area">
                    {entry.researchArea}
                  </EducationDetail>
                ) : null}
                {entry.thesisTitle ? (
                  <EducationDetail label="Thesis Title">
                    {entry.thesisTitle}
                  </EducationDetail>
                ) : null}
                {entry.grade ? (
                  <EducationDetail label="Grade">{entry.grade}</EducationDetail>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}
