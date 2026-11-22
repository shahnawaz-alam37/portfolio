import { identity, papers } from '../content'
import { ArrowUpRight } from '../components/Icons'

function Research() {
  return (
    <>
      <header className="page-head wrap">
        <h1 className="page-title">Research</h1>
        <p className="page-lede">
          Published work in edge-efficient plant pathology and production ML reliability.
          Each entry records the method, the result, and a link to the preprint.
        </p>
        {identity.researchGate && (
          <div className="actions">
            <a className="btn btn--signal" href={identity.researchGate} target="_blank" rel="noreferrer">
              ResearchGate profile <ArrowUpRight />
            </a>
          </div>
        )}
      </header>

      <div className="wrap">
        {papers.map((paper) => (
          <article className="paper" key={paper.identifier}>
            <div className="paper-id">{paper.number}</div>
            <div>
              <h2 className="paper-title">{paper.title}</h2>
              <p className="paper-meta">{paper.identifier} · {paper.year} · arXiv preprint</p>
              <p className="paper-summary">{paper.summary}</p>
              <div className="paper-columns">
                <div>
                  <h4>Method</h4>
                  <ul className="annotated-list">
                    {paper.approach.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>Result</h4>
                  <ul className="annotated-list">
                    {paper.results.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
              <div className="paper-actions">
                <a className="btn" href={paper.url} target="_blank" rel="noreferrer">
                  Read on arXiv <ArrowUpRight />
                </a>
              </div>
            </div>
          </article>
        ))}

        <div className="note-plate">
          <h2>Ongoing work</h2>
          <p>
            M.Tech research and collaborative papers are in progress. This page will be extended with new preprints,
            methods, and results as they are published.
          </p>
        </div>
      </div>
    </>
  )
}

export default Research
