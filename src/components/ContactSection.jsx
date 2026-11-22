import { ArrowUpRight, Mail } from 'lucide-react'
import { site, socialLinks } from '../data/site'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function ContactSection() {
  return (
    <Section id="contact" alt>
      <SectionTitle
        className="contact-title"
        lines={["Let's build", 'something.']}
        italicWord="something"
      />
      <a className="btn-solid contact-email" href={`mailto:${site.email}`}>
        <Mail size={16} strokeWidth={2} />
        {site.email}
      </a>

      <div className="social-grid">
        {socialLinks.map((link) => (
          <a
            className="social-link"
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">{link.label}</span>
            <ArrowUpRight className="social-arrow" size={18} strokeWidth={2} />
          </a>
        ))}
      </div>
    </Section>
  )
}
