import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { papers } from '../data/research'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { EASE } from '../lib/utils'

export default function ResearchSection() {
  const reduce = useReducedMotion()

  return (
    <Section id="research" alt>
      <SectionTitle lines={['Published', 'research.']} italicWord="research" />
      <div className="rows research-rows">
        {papers.map((paper) => (
          <Motion.article
            className="research-row"
            key={paper.id}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="label research-year">{paper.year}</div>
            <div className="research-main">
              <h3 className="research-title">{paper.title}</h3>
              <div className="label research-meta">{paper.venue} · {paper.authors}</div>
              <p className="research-abstract">{paper.abstract}</p>
            </div>
            <div className="research-links">
              {paper.links.map((link) => (
                <a
                  className="label text-link"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <ArrowUpRight size={14} strokeWidth={2} />
                </a>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>
    </Section>
  )
}
