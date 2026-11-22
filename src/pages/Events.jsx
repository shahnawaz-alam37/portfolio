import { activity } from '../content'

function Events() {
  return (
    <>
      <header className="page-head wrap">
        <h1 className="page-title">Activity</h1>
        <p className="page-lede">
          Workshops, team leadership, and time-boxed builds that shaped the engineering practice behind the project archive.
        </p>
      </header>

      <div className="wrap">
        {activity.map((item) => (
          <article className="activity-row" key={item.number}>
            <div className="paper-id">{item.number}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </div>
            <div className="role-period">{item.period}</div>
          </article>
        ))}
      </div>
    </>
  )
}

export default Events
