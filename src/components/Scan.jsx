import { useMemo, useState } from 'react'
import { DIMENSIONS, LEVELS } from '../content'

const SIZE = 320
const MID = SIZE / 2
const RAD = 112

function point(i, v, n) {
  const a = (-90 + (360 / n) * i) * (Math.PI / 180)
  const r = (RAD * v) / LEVELS.length
  return [MID + r * Math.cos(a), MID + r * Math.sin(a)]
}

function Radar({ values }) {
  const n = DIMENSIONS.length
  const poly = values.map((v, i) => point(i, v + 1, n).join(',')).join(' ')
  return (
    <svg className="radar" viewBox={`-40 -10 ${SIZE + 80} ${SIZE + 20}`} role="img" aria-label="QE maturity radar">
      {LEVELS.map((_, l) => (
        <polygon
          key={l}
          points={DIMENSIONS.map((_, i) => point(i, l + 1, n).join(',')).join(' ')}
          fill={l === 3 ? 'rgba(250,196,0,.08)' : 'none'}
          stroke="#d9d3c6"
          strokeDasharray={l === 3 ? '0' : '2 4'}
        />
      ))}
      {DIMENSIONS.map((d, i) => {
        const [x, y] = point(i, LEVELS.length, n)
        const [lx, ly] = point(i, LEVELS.length + 1.05, n)
        return (
          <g key={d.key}>
            <line x1={MID} y1={MID} x2={x} y2={y} stroke="#d9d3c6" />
            <text x={lx} y={ly} textAnchor={lx < MID - 5 ? 'end' : lx > MID + 5 ? 'start' : 'middle'} dominantBaseline="middle">
              {d.short}
            </text>
          </g>
        )
      })}
      <polygon points={poly} fill="rgba(250,196,0,.38)" stroke="#c98a1b" strokeWidth="2" style={{ transition: 'all .4s ease' }} />
      {values.map((v, i) => {
        const [x, y] = point(i, v + 1, n)
        return <circle key={i} cx={x} cy={y} r="4.5" fill="#141414" stroke="#fac400" strokeWidth="2" />
      })}
    </svg>
  )
}

export default function Scan({ onCopy }) {
  const [values, setValues] = useState(() => DIMENSIONS.map(() => 2))

  const { overall, recs } = useMemo(() => {
    const avg = values.reduce((a, b) => a + b, 0) / values.length
    const recs = DIMENSIONS.map((d, i) => ({ ...d, v: values[i] }))
      .sort((a, b) => a.v - b.v)
      .slice(0, 3)
    return { overall: avg, recs }
  }, [values])

  const set = (i, v) => setValues((prev) => prev.map((x, j) => (j === i ? v : x)))

  const summary = () => {
    const lines = [
      'NAB Quality Engineering — Maturity Scan',
      '',
      ...DIMENSIONS.map((d, i) => `- ${d.name}: L${values[i] + 1} ${LEVELS[values[i]]}`),
      '',
      `Overall: L${(overall + 1).toFixed(1)} (${LEVELS[Math.round(overall)]})`,
      '',
      'Suggested starting points:',
      ...recs.map((r) => `- ${r.name} → ${r.product}: ${r.fix}`),
    ]
    return lines.join('\n')
  }

  return (
    <section className="block" id="scan">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">II · Maturity Scan — Decision Fabric™ for QE</div>
          <h2>
            Where does NAB QE <span className="serif">sit today?</span>
          </h2>
          <p>
            Five levels, six dimensions. Move each one to where it really is — the radar and the starting
            points update as we talk. Most mature enterprises sit at <b>Defined</b>; the crossing that matters is to{' '}
            <b>Managed</b>, where signals get thresholds, owners and pre-agreed responses.
          </p>
        </div>

        <div className="scan-grid">
          <div className="reveal">
            {DIMENSIONS.map((d, i) => (
              <div className="dim" key={d.key}>
                <div className="dim-head">
                  <b>{d.name}</b>
                  <span className="lvl">L{values[i] + 1} · {LEVELS[values[i]]}</span>
                </div>
                <p>{d.hint}</p>
                <div className="seg" role="radiogroup" aria-label={d.name}>
                  {LEVELS.map((l, v) => (
                    <button
                      key={l}
                      role="radio"
                      aria-checked={values[i] === v}
                      className={values[i] === v ? 'on' : v < values[i] ? 'below' : ''}
                      onClick={() => set(i, v)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="scan-side reveal">
            <div className="panel">
              <Radar values={values} />
              <div className="overall">
                <span className="eyebrow">Overall</span>
                <b>
                  L{(overall + 1).toFixed(1)} <span className="serif">{LEVELS[Math.round(overall)]}</span>
                </b>
              </div>
              <div className="recs">
                <h4>Fastest wins</h4>
                {recs.map((r) => (
                  <div className="rec" key={r.key}>
                    <b>{r.name}</b>
                    <span>{r.fix}</span>
                    <div><span className="tag">{r.product}</span></div>
                  </div>
                ))}
              </div>
              <div className="btn-row">
                <button className="btn small" onClick={() => onCopy(summary(), 'Scan summary copied — paste into the follow-up')}>
                  Copy summary
                </button>
                <button className="btn small" onClick={() => setValues(DIMENSIONS.map(() => 2))}>Reset</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
