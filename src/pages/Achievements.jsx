import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Achievements() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head section-head--compact">
          <h1 className="section-head__title">Achievements</h1>
        </header>
        <ul className="honors-list">
          {PROFILE.achievements.map((item) => (
            <li key={item.title} className="honors-list__item">
              <p className="honors-list__title">
                {item.title}, {item.year}
              </p>
              {item.detail ? (
                <p className="honors-list__detail">{item.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}
