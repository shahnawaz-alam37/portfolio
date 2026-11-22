import { marqueeItems } from '../data/orbit'

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {marqueeItems.map((item) => (
              <span className="label marquee-item" key={item}>
                {item}
                <span className="marquee-sep">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
