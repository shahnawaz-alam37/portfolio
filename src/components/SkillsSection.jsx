import { useRole } from '../hooks/useRole'
import { orderedSkillGroups } from '../data/skills'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function SkillsSection() {
  const { role } = useRole()
  const groups = orderedSkillGroups(role)

  return (
    <Section id="skills">
      <SectionTitle lines={['The tools behind', 'the work.']} italicWord="work" />
      <div className="skills-grid">
        {groups.map((group) => (
          <div className="skill-group" key={group.label}>
            <div className="label skill-group-head">{group.label}</div>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-line" key={item.name}>
                  <span>{item.name}</span>
                  <span className="label skill-level">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
