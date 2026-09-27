import { PHASES, TRACKS, LINKS } from '../content'

export default function Together() {
  return (
    <section className="block last" id="together">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">VIII · Working together</div>
          <h2>
            One squad. Six weeks. <span className="serif">Numbers, not narrative.</span>
          </h2>
          <p>Commit from evidence, not optimism: a small, owned, provable first step that compounds.</p>
        </div>

        <div className="phases reveal">
          {PHASES.map((p) => (
            <div className="phase" key={p.name}>
              <span className="wk">{p.week}</span>
              <b>{p.name}</b>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="tracks">
          {TRACKS.map((t, i) => (
            <article className="card reveal" key={t.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="n">{['i', 'ii', 'iii'][i]}</span>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>

        <div className="closing reveal">
          <h3>
            Empowering quality
            <br />
            <span className="serif">across all of engineering.</span>
          </h3>
          <div className="btn-row flush">
            <a className="btn gold" href="#scan">Revisit the scan</a>
            <a className="btn" href={LINKS.playground} target="_blank" rel="noreferrer">Playground 2.0 ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
