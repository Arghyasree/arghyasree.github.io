import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Achievements() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Achievements</h1>
          <p className="section-head__desc">
            Honors, awards, and competitive distinctions.
          </p>
        </header>
        <ul className="achieve-grid">
          {PROFILE.achievements.map((a) => (
            <li key={a.title} className="achieve-card surface-card">
              <span className="achieve-card__year">{a.year}</span>
              <p className="achieve-card__title">{a.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}
