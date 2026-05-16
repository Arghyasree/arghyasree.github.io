import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}

export default function RevealSection({ id, className = '', children }) {
  const sectionRef = useReveal()
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section reveal ${className}`.trim()}
    >
      {children}
    </section>
  )
}
