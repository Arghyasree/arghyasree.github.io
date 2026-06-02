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
        <section className="research-interests" aria-labelledby="research-themes-heading">
          <h2 className="research-interests__heading" id="research-themes-heading">
            Research Themes
          </h2>
          <p className="research-entry">
            <span className="research-entry__label">Computational Drug Discovery</span> {'\u2014'} Developing AI-driven methods for targeted protein degradation and molecular design, with a focus on PROTACs, molecular representation learning, and molecular property prediction.
          </p>
          <p className="research-entry">
            <span className="research-entry__label">Medical Data Analysis</span> {'\u2014'} Worked
            on deep learning-based analysis of multimodal clinical data,
            including EEG and MRI, for the detection of neurological and
            psychiatric disorders such as schizophrenia, Parkinson&apos;s disease,
            and Alzheimer&apos;s disease.
          </p>
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
