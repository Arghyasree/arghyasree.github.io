import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Publications() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Publications</h1>
          <p className="section-head__desc">
            Peer-reviewed journals and conference publications.
          </p>
        </header>
        <ol className="pub-list">
          {PROFILE.publications.map((pub) => (
            <li key={pub.title} className="pub-item surface-card">
              <a
                href={pub.href}
                className="pub-item__title"
                target="_blank"
                rel="noreferrer"
              >
                {pub.title}
              </a>
              <p className="pub-item__venue">{pub.venue}</p>
              <a
                href={pub.href}
                className="pub-item__link"
                target="_blank"
                rel="noreferrer"
              >
                View article
              </a>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  )
}
