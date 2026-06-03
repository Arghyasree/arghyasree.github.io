import RevealSection from '../components/RevealSection'
import { PROFILE } from '../data/profile'

export default function Research() {
  return (
    <RevealSection className="section--inner">
      <div className="container">
        <header className="section-head">
          <h1 className="section-head__title">Research</h1>
        </header>
        <section className="research-interests" aria-labelledby="research-interests-heading">
          <h2 className="research-interests__heading" id="research-interests-heading">
            Research Interests
          </h2>
          <p className="research-plain-text">
            Deep Learning, Language Models, Computational Drug Discovery, PROTACs,
            Medical Data Analysis.
          </p>
        </section>
        <section className="research-interests" aria-labelledby="updates-heading">
          <h2 className="research-interests__heading" id="updates-heading">
            Updates
          </h2>
          <p className="research-plain-text">Details will be added soon.</p>
        </section>
        <section className="research-interests" aria-labelledby="mentorship-heading">
          <h2 className="research-interests__heading" id="mentorship-heading">
            Mentorship
          </h2>
          <div className="research-plain-list">
            {PROFILE.mentorship.map((item) => (
              <p className="research-plain-list__item" key={`${item.title}-${item.year}`}>
                {item.title}, {item.year} {'\u2014'} {item.mentees}
              </p>
            ))}
          </div>
        </section>
      </div>
    </RevealSection>
  )
}
