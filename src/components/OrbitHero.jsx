import { useEffect, useRef } from 'react'
import { orderedOrbitSkills } from '../data/orbit'
import { cn } from '../lib/utils'

const RADII = { 1: 90, 2: 160, 3: 230 }
const SIZE = 520

export default function OrbitHero({ role }) {
  const fieldRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const field = fieldRef.current
    if (!field) return undefined

    const onMove = (event) => {
      const rect = field.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / rect.width - 0.5
      const ny = (event.clientY - rect.top) / rect.height - 0.5
      target.current = { x: nx * 24, y: ny * 24 }
    }
    const onLeave = () => {
      target.current = { x: 0, y: 0 }
    }

    field.addEventListener('pointermove', onMove)
    field.addEventListener('pointerleave', onLeave)

    let frame
    const tick = () => {
      const c = current.current
      const t = target.current
      c.x += (t.x - c.x) * 0.08
      c.y += (t.y - c.y) * 0.08
      field.style.setProperty('--px', `${c.x.toFixed(2)}px`)
      field.style.setProperty('--py', `${c.y.toFixed(2)}px`)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      field.removeEventListener('pointermove', onMove)
      field.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const skills = orderedOrbitSkills(role)

  return (
    <div className="orbit" role="img" aria-label="Diagram of core skills by discipline">
      <div className="orbit-field" ref={fieldRef}>
        {[1, 2, 3].map((ring) => {
          const size = `${((RADII[ring] * 2) / SIZE) * 100}%`
          return <span className="orbit-ring" key={ring} style={{ width: size, height: size }} />
        })}

        <div className="orbit-center">
          <span className="orbit-center-dot" />
          <span className="label orbit-center-label">Me</span>
        </div>

        {skills.map((skill) => {
          const radius = RADII[skill.ring]
          const angle = (skill.angle * Math.PI) / 180
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const dimmed = role !== 'all' && !(
            (role === 'ai' && skill.category === 'ai') ||
            (role === 'swe' && skill.category === 'swe')
          )

          return (
            <span
              key={skill.label}
              className={cn('orbit-dot', `orbit-dot-${skill.category}`, dimmed && 'is-dimmed')}
              style={{
                left: `${50 + (x / SIZE) * 100}%`,
                top: `${50 + (y / SIZE) * 100}%`,
              }}
              title={skill.label}
            >
              <span className="label orbit-dot-label">{skill.label}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
