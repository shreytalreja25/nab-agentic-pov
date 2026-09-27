import { SCENARIOS } from '../content'

export default function Scenarios() {
  return (
    <section className="block" id="scenarios">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">IV · Banking scenario library</div>
          <h2>
            Where it earns its keep <span className="serif">in a bank.</span>
          </h2>
          <p>Each scenario names the accelerator that runs it and the gate that proves it.</p>
        </div>
        <div className="cards">
          {SCENARIOS.map((s, i) => (
            <article className="card reveal" key={s.title} style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="pills">
                {s.products.map((p) => <span className="pill" key={p}>{p}</span>)}
                <span className="pill gate">⛨ {s.gate}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
