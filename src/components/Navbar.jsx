import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { scrollToHash } from '../lib/scroll'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (event, href) => {
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : ''
    if (window.location.pathname === '/' && hash) {
      event.preventDefault()
      scrollToHash(hash)
      window.history.replaceState(null, '', hash)
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="shell nav-inner">
          <Link className="monogram" to="/" aria-label="Shahnawaz Alam — home">
            SA<span className="monogram-dot">.</span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {site.nav.map((item) => (
              <Link
                key={item.label}
                className="label nav-link"
                to={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="label nav-resume" href={site.resumeUrl} download>
              Download resume
            </a>
            <a className="btn-outline btn-sm" href={`mailto:${site.email}`}>
              Hire me <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
