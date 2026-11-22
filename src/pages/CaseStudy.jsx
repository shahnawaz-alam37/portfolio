import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '../components/Icons'
import { getProjectBySlug } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="shell case-missing">
        <p className="label">404 — Not in the archive</p>
        <h1 className="display page-display">Nothing here.</h1>
        <Link className="btn-text" to="/work">
          <ArrowLeft size={16} strokeWidth={2} /> Back to all work
        </Link>
      </div>
    )
  }

  return (
    <article className="case-page">
      <div className="shell page-meta">
        <Link className="label text-link" to="/#work">
          <ArrowLeft size={14} strokeWidth={2} /> All projects
        </Link>
        <span className="label">
          {project.category === 'ai' ? 'AI / ML' : 'Software'} — {project.year}
        </span>
      </div>

      <header className="shell case-intro">
        <h1 className="display page-display">{project.title}</h1>
        <p className="case-tagline">{project.tagline}</p>
        <div className="case-links">
          {project.links.map((link) => (
            <a
              className="btn-outline btn-sm"
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon width={14} height={14} fill="currentColor" stroke="none" />
              {link.label}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          ))}
        </div>
      </header>

      <div className="case-metrics">
        <div className="shell case-metrics-grid">
          {project.metrics.map((metric) => (
            <div className="case-metric" key={metric.label}>
              <div className="display case-metric-value">{metric.value}</div>
              <div className="label case-metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="shell case-body">
        <div className="case-col">
          <section className="case-block">
            <h2 className="label case-label">Problem</h2>
            <p>{project.caseStudy.problem}</p>
          </section>
          <section className="case-block">
            <h2 className="label case-label">Approach</h2>
            <p>{project.caseStudy.approach}</p>
          </section>
        </div>
        <div className="case-col">
          <section className="case-block">
            <h2 className="label case-label">Stack</h2>
            <div className="card-tags">
              {project.caseStudy.stack.map((item) => (
                <span className="chip label" key={item}>{item}</span>
              ))}
            </div>
          </section>
          <section className="case-block">
            <h2 className="label case-label">Architecture</h2>
            <div className="case-placeholder label">Architecture diagram placeholder</div>
          </section>
        </div>
      </div>

      <section className="shell case-results">
        <h2 className="label case-label">Results</h2>
        <ul>
          {project.caseStudy.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </section>

      <div className="shell case-bottom">
        <Link className="btn-text" to="/#work">
          <ArrowLeft size={16} strokeWidth={2} /> Back to all work
        </Link>
      </div>
    </article>
  )
}
