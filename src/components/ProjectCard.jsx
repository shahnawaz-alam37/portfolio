import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './Icons'
import { EASE } from '../lib/utils'

function monogram(title) {
  return title
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function ProjectCard({ project }) {
  const reduce = useReducedMotion()

  return (
    <Motion.article
      className="project-card group"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <Link
        className="card-cover"
        to={`/work/${project.slug}`}
        aria-label={`Open ${project.title} case study`}
      >
        {project.cover ? (
          <img
            className="card-image"
            src={project.cover}
            alt={project.coverAlt || `${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <span className="card-monogram">{monogram(project.title)}</span>
        )}
        <span className={project.category === 'ai' ? 'card-category cat-ai label' : 'card-category cat-swe label'}>
          {project.category === 'ai' ? 'AI / ML' : 'Software'}
        </span>
      </Link>

      <div className="card-body">
        <div className="card-title-row">
          <Link to={`/work/${project.slug}`}>
            <h3 className="display card-title">{project.title}</h3>
          </Link>
          <ArrowUpRight className="card-arrow" size={20} strokeWidth={2} aria-hidden="true" />
        </div>

        <p className="card-tagline">{project.tagline}</p>

        <div className="card-tags">
          {project.tech.map((item) => (
            <span className="chip label" key={item}>{item}</span>
          ))}
        </div>

        <p className="card-impact label">{project.impact}</p>

        <div className="card-links">
          {project.links.map((link) => (
            <a
              className="label card-link"
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon width={14} height={14} fill="currentColor" stroke="none" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Motion.article>
  )
}
