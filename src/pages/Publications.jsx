import PublicationAuthors from '../components/PublicationAuthors'
import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

function PublicationGroup({ title, items }) {
  if (items.length === 0) return null

  return (
    <section className="pub-section" aria-labelledby={`pub-${title.toLowerCase()}`}>
      <h2 className="pub-section__title" id={`pub-${title.toLowerCase()}`}>
        {title}
      </h2>
      <ol className="pub-list--plain">
        {items.map((pub) => (
          <li key={pub.title} className="pub-entry">
            <a
              href={pub.href}
              className="pub-entry__title"
              target="_blank"
              rel="noreferrer"
            >
              {pub.title}
            </a>
            <PublicationAuthors authors={pub.authors} />
            <p className="pub-entry__venue">
              {pub.venue}, {pub.year}.
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function Publications() {
  const journals = PROFILE.publications.filter((pub) => pub.type === 'journal')
  const conferences = PROFILE.publications.filter(
    (pub) => pub.type === 'conference'
  )

  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Publications</h1>
          <p className="section-head__desc">
            Selected publications will be listed here.
          </p>
        </header>
        <PublicationGroup title="Journals" items={journals} />
        <PublicationGroup title="Conferences" items={conferences} />
      </div>
    </RevealSection>
  )
}
