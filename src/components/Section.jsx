import { cn } from '../lib/utils'

export default function Section({ id, alt, className, children }) {
  return (
    <section id={id} className={cn('section', alt && 'section-alt', className)}>
      <div className="shell section-body">{children}</div>
    </section>
  )
}
