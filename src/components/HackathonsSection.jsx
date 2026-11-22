import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { hackathons } from '../data/hackathons'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { cn, EASE } from '../lib/utils'

const resultClass = {
  Winner: 'badge-winner',
  Finalist: 'badge-finalist',
  'Top 10': 'badge-top',
  Participant: 'badge-participant',
}

export default function HackathonsSection() {
  const reduce = useReducedMotion()

  return (
    <Section id="hackathons">
      <SectionTitle lines={['Built under', 'pressure.']} italicWord="pressure" />
      <div className="rows hackathon-rows">
        {hackathons.map((item) => (
          <Motion.article
            className="hackathon-row"
            key={item.id}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="label hackathon-year">{item.year}</div>
            <div className="hackathon-main">
              <div className="label hackathon-event">{item.event}</div>
              <h3 className="hackathon-title">{item.project}</h3>
              <p className="hackathon-note">{item.note}</p>
            </div>
            <div className="hackathon-result">
              <span className={cn('badge label', resultClass[item.result])}>{item.result}</span>
              {item.href && (
                <a className="label text-link" href={item.href} target="_blank" rel="noreferrer">
                  Link <ArrowUpRight size={14} strokeWidth={2} />
                </a>
              )}
            </div>
          </Motion.article>
        ))}
      </div>
    </Section>
  )
}
