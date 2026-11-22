import { identity } from '../content'
import { MailIcon } from '../components/Icons'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const subject = encodeURIComponent(form.get('subject'))
    const message = encodeURIComponent(form.get('message'))
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${message}`
  }

  return (
    <>
      <header className="page-head wrap">
        <h1 className="page-title">Contact</h1>
        <p className="page-lede">
          For engineering roles, research collaboration, or a conversation about applied ML systems, use the addresses below.
        </p>
      </header>

      <div className="wrap contact-grid">
        <section aria-labelledby="contact-direct-title">
          <h2 className="section-title" id="contact-direct-title">Direct lines</h2>
          <a className="contact-email" href={`mailto:${identity.email}`}>{identity.email}</a>
          <div className="contact-list">
            <div className="contact-line"><span>Email</span><a href={`mailto:${identity.email}`}>Open client</a></div>
            <div className="contact-line"><span>Phone</span><a href={`tel:${identity.phone.replace(/\s/g, '')}`}>{identity.phone}</a></div>
            <div className="contact-line"><span>GitHub</span><a href={identity.github} target="_blank" rel="noreferrer">shahnawaz-alam37</a></div>
            <div className="contact-line"><span>LinkedIn</span><a href={identity.linkedin} target="_blank" rel="noreferrer">shahnawaz-alam37</a></div>
            {identity.researchGate && (
              <div className="contact-line"><span>ResearchGate</span><a href={identity.researchGate} target="_blank" rel="noreferrer">Profile</a></div>
            )}
          </div>
        </section>

        <section aria-labelledby="contact-message-title">
          <h2 className="section-title" id="contact-message-title">Send a note</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Role, project, or research topic" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="A short note is enough." />
            </div>
            <button className="btn" type="submit">
              Open email draft <MailIcon />
            </button>
            <p className="form-note">Uses your email client; no message is stored by this site.</p>
          </form>
        </section>
      </div>
    </>
  )
}

export default Contact
