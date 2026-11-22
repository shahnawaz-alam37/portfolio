import { ArrowUp } from 'lucide-react'
import { site } from '../data/site'
import { scrollToHash } from '../lib/scroll'

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <div className="display footer-name">{site.name}</div>
          <div className="label footer-location">{site.location}</div>
        </div>
        <div className="footer-right">
          <button
            type="button"
            className="label footer-top"
            onClick={() => scrollToHash('#top')}
          >
            Back to top <ArrowUp size={14} strokeWidth={2} />
          </button>
          <div className="label">© {new Date().getFullYear()} {site.name}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
