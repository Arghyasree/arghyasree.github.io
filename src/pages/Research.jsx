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
          <div className="research-interests__grid">
            {PROFILE.researchInterests.map((interest) => (
              <article className="research-interest" key={interest.title}>
                <h3 className="research-interest__title">{interest.title}</h3>
                <p className="research-interest__description">
                  {interest.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </RevealSection>
  )
}
