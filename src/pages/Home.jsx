import { useState } from 'react'
import { PROFILE } from '../data/profile'

export default function Home() {
  const { tagline } = PROFILE
  const [photoSrc, setPhotoSrc] = useState(PROFILE.photo)

  return (
    <section className="hero section">
      <div className="container hero__layout">
        <div className="hero__portrait">
          <img
            src={photoSrc}
            alt={`Portrait of ${PROFILE.name}`}
            className="hero__photo"
            width={200}
            height={200}
            onError={() => {
              if (photoSrc !== PROFILE.photoPlaceholder) {
                setPhotoSrc(PROFILE.photoPlaceholder)
              }
            }}
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">{PROFILE.name}</h1>
          <p className="hero__role">{PROFILE.role}</p>
          <div className="hero__prose">
            <p className="hero__tagline">
              {tagline.beforeAdvisor}
              <a href={tagline.advisor.href} target="_blank" rel="noreferrer">
                {tagline.advisor.name}
              </a>
              {tagline.afterAdvisor}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
