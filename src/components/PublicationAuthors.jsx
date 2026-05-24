import { PROFILE } from '../data/profile'

export default function PublicationAuthors({ authors }) {
  return (
    <p className="pub-entry__authors">
      {authors.map((name, index) => (
        <span key={`${name}-${index}`}>
          {index > 0 && ', '}
          {name === PROFILE.selfCitationName ? <strong>{name}</strong> : name}
        </span>
      ))}
    </p>
  )
}
