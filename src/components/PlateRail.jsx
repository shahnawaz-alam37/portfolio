import { NavLink, useLocation } from 'react-router-dom'

const plates = [
  { number: '01', label: 'Identity', to: '/' },
  { number: '02', label: 'Work', to: '/projects' },
  { number: '03', label: 'Research', to: '/research' },
  { number: '04', label: 'Activity', to: '/events' },
  { number: '05', label: 'Contact', to: '/contact' },
]

function activePath(pathname) {
  if (pathname === '/projects') return '/projects'
  if (pathname === '/research') return '/research'
  if (pathname === '/events') return '/events'
  if (pathname === '/contact') return '/contact'
  return '/'
}

function PlateRail() {
  const { pathname } = useLocation()
  const active = activePath(pathname)

  return (
    <>
      <aside className="plate-rail" aria-label="Plate index">
        <div className="rail-heading">Index</div>
        {plates.map((plate) => (
          <NavLink
            key={plate.number}
            to={plate.to}
            className={`rail-item${active === plate.to ? ' is-active' : ''}`}
            aria-current={active === plate.to ? 'page' : undefined}
          >
            <span className="rail-index">{plate.number}</span>
            <span className="rail-label">{plate.label}</span>
          </NavLink>
        ))}
        <div className="rail-foot">2026</div>
      </aside>
      <nav className="mobile-rail" aria-label="Plate index">
        {plates.map((plate) => (
          <NavLink
            key={plate.number}
            to={plate.to}
            className={active === plate.to ? 'is-active' : undefined}
          >
            {plate.number} / {plate.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}

export default PlateRail
