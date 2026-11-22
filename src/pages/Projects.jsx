import { Link } from 'react-router-dom'
import { projects } from '../content'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import TechMark from '../components/TechMark'

function ProjectLink({ href, children, signal = false }) {
  return (
    <a
      className={`btn${signal ? ' btn--signal' : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight />
    </a>
  )
}

function StackList({ stack }) {
  return (
    <div className="project-stack stack-list">
      {stack.split(' · ').map((item) => (
        <span className="skill-item" key={item}>
          <TechMark name={item.trim()} />
          {item.trim()}
        </span>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <>
      <header className="page-head wrap">
        <h1 className="page-title">Selected work</h1>
        <p className="page-lede">
          Six project plates covering production ML pipelines, agent systems, fine-tuned models, and full-stack platforms.
          Each record lists the stack, the work done, and the measured result where one exists.
        </p>
      </header>

      <div className="wrap">
        {projects.map((project) => (
          <article className="project" key={project.number} id={`project-${project.number}`}>
            <div>
              <div className="project-number">Plate {project.number}</div>
              <h2 className="project-title">{project.title}</h2>
              <StackList stack={project.stack} />
              <p className="project-summary">{project.summary}</p>
              <ul className="annotated-list">
                {project.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="fact-strip">
                {project.facts.map((fact) => <span className="fact" key={fact}>{fact}</span>)}
              </div>
              <div className="project-links">
                {project.githubUrl && <ProjectLink href={project.githubUrl}>Source</ProjectLink>}
                {project.externalLink && (
                  <ProjectLink href={project.externalLink} signal>{project.externalLabel}</ProjectLink>
                )}
              </div>
            </div>

            <div className="project-media">
              {project.images && (
                <div className="shot-stack">
                  {project.images.map((image, index) => (
                    <div className="shot" key={image}>
                      <img src={image} alt={`${project.imageAlt} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
              {project.image && (
                <div className="shot">
                  <img src={project.image} alt={project.imageAlt} />
                </div>
              )}
              <div className="media-caption">System path</div>
              <div className="pipeline">
                {project.pipeline.map((step, index) => (
                  <div className="pipeline-step" key={step}>
                    {String(index + 1).padStart(2, '0')} / {step}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="section" aria-labelledby="work-research-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="work-research-title" className="section-title">From work to research</h2>
            <p className="section-note">Two of these systems have a published research counterpart: edge pruning on leaf disease and drift handling in forecasting.</p>
          </div>
          <div className="actions">
            <Link className="btn" to="/research">Read the papers <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
