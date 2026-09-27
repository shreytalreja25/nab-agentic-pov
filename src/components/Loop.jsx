import { useEffect, useState } from 'react'
import { LOOP_STAGES, LOOP_SCENARIOS } from '../content'
import { useInView } from '../hooks'

const STEP_MS = 3600

export default function Loop() {
  const [scen, setScen] = useState(0)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [ref, inView] = useInView(0.35)

  useEffect(() => {
    if (!playing || !inView) return
    const t = setTimeout(() => setStep((s) => (s + 1) % LOOP_STAGES.length), STEP_MS)
    return () => clearTimeout(t)
  }, [step, playing, inView])

  const scenario = LOOP_SCENARIOS[scen]
  const stage = LOOP_STAGES[step]
  const detail = scenario.stages[stage.key]
  const fill = (step / (LOOP_STAGES.length - 1)) * 92

  const pick = (i) => { setScen(i); setStep(0); setPlaying(true) }
  const go = (i) => { setStep(i); setPlaying(false) }

  return (
    <section className="block" id="loop" ref={ref}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">III · The Quality Loop</div>
          <h2>
            One change, <span className="serif">followed all the way through.</span>
          </h2>
          <p>
            QA consumes the same Enterprise Brain the dev agents reason over — so “map a business change to
            impacted scenarios” becomes a graph query, not a workshop. Pick a change and watch it travel the loop.
          </p>
        </div>

        <div className="scen-picker" role="tablist" aria-label="Example change">
          {LOOP_SCENARIOS.map((s, i) => (
            <button key={s.key} role="tab" aria-selected={i === scen} className={`chip ${i === scen ? 'on' : ''}`} onClick={() => pick(i)}>
              {s.label}
            </button>
          ))}
        </div>

        <div className="panel reveal">
          <div className="pipeline">
            <div className="pipe-fill" style={{ width: `${fill}%` }} />
            {LOOP_STAGES.map((s, i) => (
              <button key={s.key} className={`stage ${i === step ? 'on' : i < step ? 'done' : ''}`} onClick={() => go(i)}>
                <div className="node">{String(i + 1).padStart(2, '0')}</div>
                <b>{s.name}</b>
                <small>{s.owner || s.verb}</small>
              </button>
            ))}
          </div>

          <div className="stage-detail" key={`${scen}-${step}`} style={{ animation: 'fadeUp .45s ease' }}>
            <div>
              <div className="eyebrow">
                {String(step + 1).padStart(2, '0')} · {stage.verb} {stage.owner ? `· ${stage.owner}` : ''}
              </div>
              <h3 className={detail.refused ? 'refused' : ''}>{detail.headline}</h3>
              <ul>
                {detail.lines.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
            <div className="loop-ctrl">
              <button className="btn small" onClick={() => go(Math.max(0, step - 1))} aria-label="Previous stage">←</button>
              <button className="btn small" onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
              <button className="btn small" onClick={() => go((step + 1) % LOOP_STAGES.length)} aria-label="Next stage">→</button>
            </div>
          </div>
          <div className="illus">Illustrative walkthrough — story IDs, counts and defects are examples, not NAB data.</div>
        </div>
      </div>
    </section>
  )
}
