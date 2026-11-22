import profileImage from '../assets/photos/profile.png'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="about-grid">
        <div className="about-portrait">
          <img src={profileImage} alt="Shahnawaz Alam" />
        </div>
        <div className="about-copy">
          <SectionTitle
            className="about-title"
            lines={['I turn research into', 'running systems.']}
          />
          <div className="about-paragraphs">
            <p>
              I'm a software engineer focused on AI/ML and full-stack development. I've worked
              on projects involving PyTorch, FastAPI, React, LangGraph, and LLM applications —
              including model fine-tuning, pruning, and tool calling. I also have experience in
              AI/ML research and deploying models in resource-constrained environments.
            </p>
            <p>
              I enjoy understanding problems deeply, experimenting with different approaches,
              and building solutions that are practical and actually usable — not just demos
              that work on a slide.
            </p>
          </div>
          <div className="about-note">
            <div className="label">Currently exploring</div>
            <p>
              Agentic LLM systems, on-device model optimization, and the line between research
              and production ML.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
