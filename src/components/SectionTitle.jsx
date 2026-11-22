import { motion as Motion, useReducedMotion } from 'framer-motion'
import { cn, EASE } from '../lib/utils'

function renderItalic(line, word) {
  if (!word) return line
  const index = line.toLowerCase().indexOf(word.toLowerCase())
  if (index === -1) return line
  return (
    <>
      {line.slice(0, index)}
      <em className="em">{line.slice(index, index + word.length)}</em>
      {line.slice(index + word.length)}
    </>
  )
}

export default function SectionTitle({ lines, italicWord, align, className }) {
  const reduce = useReducedMotion()

  return (
    <h2 className={cn('display section-title', align === 'center' && 'text-center', className)}>
      {lines.map((line, index) => (
        <Motion.span
          className="title-line"
          key={line}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
        >
          <Motion.span
            className="title-line-inner"
            variants={{ hidden: { y: '110%' }, visible: { y: 0 } }}
            transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
          >
            {renderItalic(line, italicWord)}
          </Motion.span>
        </Motion.span>
      ))}
    </h2>
  )
}
