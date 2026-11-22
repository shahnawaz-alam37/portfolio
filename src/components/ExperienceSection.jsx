import { education, experience } from '../data/experience'
import Section from './Section'
import SectionTitle from './SectionTitle'

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-row" key={item.id}>
          <div className="label timeline-period">{item.period}</div>
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <div className="label timeline-org">{item.org}</div>
            <p className="timeline-description">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <Section id="experience" alt>
      <SectionTitle lines={['The path', 'so far.']} italicWord="path" />
      <div className="timelines">
        <div>
          <div className="label timeline-heading">Experience</div>
          <Timeline items={experience} />
        </div>
        <div>
          <div className="label timeline-heading">Education</div>
          <Timeline items={education} />
        </div>
      </div>
    </Section>
  )
}
