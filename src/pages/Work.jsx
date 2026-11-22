import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { filterProjects, getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { cn } from '../lib/utils'

const options = [
  { value: 'all', label: 'All' },
  { value: 'ai', label: 'AI · ML' },
  { value: 'swe', label: 'Software' },
]

export default function Work() {
  const [filter, setFilter] = useState('all')
  const projects = filter === 'all' ? getFeaturedProjects() : filterProjects(filter)

  return (
    <div className="work-page">
      <div className="shell page-meta">
        <span className="label">Index — Work</span>
        <Link className="label text-link" to="/#work">
          <ArrowLeft size={14} strokeWidth={2} /> Back to portfolio
        </Link>
      </div>

      <div className="shell page-intro">
        <SectionTitle className="page-display" lines={['All', 'work.']} italicWord="work" />
        <p className="page-lede">
          Shipped systems, research prototypes, and production services — filtered by the kind
          of engineering behind them.
        </p>
      </div>

      <div className="shell page-filter">
        <div className="role-toggle" role="tablist" aria-label="Filter projects">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              role="tab"
              aria-selected={filter === option.value}
              className={cn('role-pill label', filter === option.value && 'is-active')}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <span className="label">{projects.length} projects</span>
      </div>

      <div className="shell project-grid project-grid-page">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </div>
  )
}
