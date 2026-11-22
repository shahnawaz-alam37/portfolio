import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useRole } from '../hooks/useRole'
import { filterProjects, getFeaturedProjects } from '../data/projects'
import Section from './Section'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  const { role } = useRole()
  const projects = role === 'all'
    ? getFeaturedProjects()
    : filterProjects(role).filter((project) => project.featured)

  return (
    <Section id="work">
      <SectionTitle lines={['Selected', 'work.']} italicWord="work" />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
      <Link className="btn-text work-more" to="/work">
        View all projects <ArrowRight size={16} strokeWidth={2} />
      </Link>
    </Section>
  )
}
