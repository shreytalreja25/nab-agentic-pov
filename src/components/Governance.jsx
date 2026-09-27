import { useEffect, useState } from 'react'
import { GATES, DECISIONS, NON_NEGOTIABLES } from '../content'
import { useInView } from '../hooks'

export default function Governance() {
  const [ref, inView] = useInView(0.4)
  const [lit, setLit] = useState(0)

  useEffect(() => {
    if (!inView) return
    setLit(0)
    const timers = GATES.map((_, i) => setTimeout(() => setLit(i + 1), 500 + i * 650))
    return () => timers.forEach(clearTimeout)
  }, [inView])

  const passed = lit === GATES.length

  return (
    <section className="block" id="governance">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">VII · Governance for a regulated bank</div>
          <h2>
            Governance is not a review step. <span className="serif">It is executable.</span>
          </h2>
        </div>

        <p className="standard reveal">
          No production release without <em>domain scenarios</em>, <em>trace-level evidence</em>, and{' '}
          <em>explicit threshold gates</em>.
        </p>

        <div className="gates" ref={ref}>
          {GATES.map((g, i) => (
            <div className={`gate ${i < lit ? 'lit' : ''}`} key={g.name}>
              <span className="gn">GATE {String(i + 1).padStart(2, '0')}</span>
              <b>{g.name}</b>
              <p>{g.body}</p>
              <span className="bar" />
            </div>
          ))}
          <div className={`verdict ${passed ? 'pass' : ''}`}>
            <div>
              <b>{passed ? 'PASSED' : 'EVALUATING…'}</b>
              <small>{passed ? 'evidence pack stored' : `${lit} / ${GATES.length} gates`}</small>
            </div>
          </div>
        </div>

        <div className="gov-row">
          <div className="panel reveal">
            <h4>Every agent action resolves to a decision</h4>
            <p className="gov-copy">
              Identity, tool access, data access, risk, approval and audit operate at the action boundary itself,
              with evidence attached.
            </p>
            <div className="decisions">
              {DECISIONS.map((d) => <span key={d}>{d}</span>)}
            </div>
          </div>
          <div className="panel reveal">
            <h4>BFSI non-negotiables</h4>
            <div className="nn">
              {NON_NEGOTIABLES.map((n) => <div key={n}>{n}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
