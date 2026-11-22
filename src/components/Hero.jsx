import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { site } from '../data/site'
import { useRole } from '../hooks/useRole'
import RoleToggle from './RoleToggle'
import OrbitHero from './OrbitHero'
import { scrollToHash } from '../lib/scroll'
import { cn, EASE } from '../lib/utils'

const lines = ['Engineer.', 'Researcher.', 'Builder.']

export default function Hero() {
  const reduce = useReducedMotion()
  const { role } = useRole()

  const fade = (delay) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: EASE, delay },
        }

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <Motion.p className="label hero-eyebrow" {...fade(0.1)}>
            {site.name} — {site.location}
          </Motion.p>

          <h1 id="hero-title" className="display hero-title">
            {lines.map((line, index) => (
              <span className="title-line" key={line}>
                <Motion.span
                  className={cn('title-line-inner', index === 1 && 'em')}
                  initial={reduce ? false : { y: '110%' }}
                  animate={reduce ? undefined : { y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.2 + index * 0.12 }}
                >
                  {line}
                </Motion.span>
              </span>
            ))}
          </h1>

          <Motion.p className="hero-intro" {...fade(0.6)}>
            I build AI/ML and full-stack systems — from research papers to production.
            PyTorch, LLMs, FastAPI, React. I like turning ideas into things that actually run.
          </Motion.p>

          <Motion.div className="label hero-meta" {...fade(0.75)}>
            <span>Based: {site.location}</span>
            <span className="dot-sep">·</span>
            <span>Focus: AI/ML &amp; SWE</span>
            <span className="dot-sep">·</span>
            <span>Open to: AI/ML &amp; SWE roles</span>
          </Motion.div>

          <Motion.div className="hero-actions" {...fade(0.85)}>
            <button type="button" className="btn-solid" onClick={() => scrollToHash('#work')}>
              See the work <ArrowDown size={16} strokeWidth={2} />
            </button>
            <a className="btn-outline" href={site.resumeUrl} download>
              Download resume <Download size={16} strokeWidth={2} />
            </a>
          </Motion.div>

          <Motion.div className="hero-role" {...fade(1)}>
            <span className="label">View portfolio as</span>
            <RoleToggle />
          </Motion.div>
        </div>

        <Motion.div
          className="hero-orbit"
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
        >
          <OrbitHero role={role} />
        </Motion.div>
      </div>
    </section>
  )
}
