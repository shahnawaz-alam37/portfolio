import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import WorkSection from '../components/WorkSection'
import NumbersStrip from '../components/NumbersStrip'
import ResearchSection from '../components/ResearchSection'
import HackathonsSection from '../components/HackathonsSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkSection />
      <NumbersStrip />
      <ResearchSection />
      <HackathonsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
