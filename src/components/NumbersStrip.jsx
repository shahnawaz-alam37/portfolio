import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { stats } from '../data/orbit'

function CountUp({ value, suffix, run, reduce }) {
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!run || reduce) return undefined
    let frame
    const start = performance.now()
    const tick = (time) => {
      const progress = Math.min(1, (time - start) / 1200)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, run, reduce])

  return <>{Math.round(display)}{suffix}</>
}

export default function NumbersStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <section className="stats-strip" aria-label="By the numbers">
      <div className="shell stats-grid" ref={ref}>
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="display stat-figure">
              <CountUp value={stat.value} suffix={stat.suffix} run={inView} reduce={reduce} />
            </div>
            <div className="label stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
