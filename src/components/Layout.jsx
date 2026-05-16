import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import '../App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="site">
      <ScrollToTop />
      <div className="site-bg" aria-hidden="true" />

      <Navbar />

      <main>
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}
