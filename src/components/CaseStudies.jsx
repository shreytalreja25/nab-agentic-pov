import { useEffect, useMemo, useState } from 'react'
import { CASES, THEMES, TECH } from '../cases'
import { useInView } from '../hooks'

const STEP_MS = 3200

function Logo({ k, withName = false }) {
  const t = TECH[k]
  if (!t) return null
  return (
    <span className={`tech ${withName ? 'named' : ''}`} title={t.name}>
      <img src={t.src} alt={t.name} loading="lazy" />
      {withName && <span>{t.name}</span>}
    </span>
  )
}

// Walkthrough steps: problem → each build stage → outcomes → why it matters.
function stepsFor(c) {
  return [
    { kind: 'problem', label: 'Problem' },
    ...c.flow.map((f, i) => ({ kind: 'flow', index: i, label: f.label })),
    { kind: 'outcome', label: 'Outcome' },
    { kind: 'angle', label: 'For NAB QE' },
  ]
}

export default function CaseStudies() {
  const [theme, setTheme] = useState('all')
  const [caseId, setCaseId] = useState(CASES[0].id)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [ref, inView] = useInView(0.25)

  const visible = useMemo(() => (theme === 'all' ? CASES : CASES.filter((c) => c.theme === theme)), [theme])
  const c = CASES.find((x) => x.id === caseId) || visible[0]
  const steps = stepsFor(c)
  const cur = steps[step]

  useEffect(() => {
    if (!playing || !inView) return
    if (step >= steps.length - 1) { setPlaying(false); return }
    const t = setTimeout(() => setStep((s) => s + 1), STEP_MS)
    return () => clearTimeout(t)
  }, [playing, inView, step, steps.length])

  const open = (id) => { setCaseId(id); setStep(0); setPlaying(true) }
  const pickTheme = (k) => {
    setTheme(k)
    const first = k === 'all' ? CASES[0] : CASES.find((x) => x.theme === k)
    if (first && !(k === 'all' || c.theme === k)) { setCaseId(first.id); setStep(0) }
  }
  const go = (i) => { setStep(Math.max(0, Math.min(steps.length - 1, i))); setPlaying(false) }

  // spot = the step being walked through; seen = already covered
  const state = (kind, index) => {
    const pos = steps.findIndex((s) => s.kind === kind && (index === undefined || s.index === index))
    return pos === step ? 'spot' : pos < step ? 'seen' : ''
  }

  const themeName = THEMES.find((t) => t.key === c.theme)?.name

  return (
    <section className="block" id="proof" ref={ref}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">V · Proof — from the case library</div>
          <h2>
            Done before, <span className="serif">in regulated places.</span>
          </h2>
          <p>
            Thirteen engagements chosen for their relevance to quality engineering in a bank. Client names are
            withheld under NDA; problems, stacks and outcomes are as recorded.
          </p>
        </div>

        <div className="scen-picker" role="tablist" aria-label="Filter case studies">
          {THEMES.map((t) => {
            const n = t.key === 'all' ? CASES.length : CASES.filter((x) => x.theme === t.key).length
            return (
              <button key={t.key} role="tab" aria-selected={theme === t.key} className={`chip ${theme === t.key ? 'on' : ''}`} onClick={() => pickTheme(t.key)}>
                {t.name} <span className="count">{n}</span>
              </button>
            )
          })}
        </div>

        <div className="cs-grid">
          <nav className="cs-list" aria-label="Case studies">
            {visible.map((x) => (
              <button key={x.id} className={`cs-item ${x.id === c.id ? 'on' : ''}`} onClick={() => open(x.id)}>
                <span className="cs-client"><Lock /> {x.client}</span>
                <b>{x.title}</b>
                <span className="cs-logos">{x.stack.slice(0, 5).map((k) => <Logo key={k} k={k} />)}</span>
              </button>
            ))}
          </nav>

          <article className="panel cs-player" key={c.id}>
            <header className="cs-head">
              <div className="cs-tags">
                <span className="pill">{c.industry}</span>
                <span className="pill">{themeName}</span>
                <span className="pill nda"><Lock /> Name withheld · NDA</span>
              </div>
              <div className="eyebrow">{c.client}</div>
              <h3>{c.title}</h3>
            </header>

            <ol className="cs-steps" aria-label="Walkthrough steps">
              {steps.map((s, i) => (
                <li key={i}>
                  <button className={i === step ? 'on' : i < step ? 'done' : ''} onClick={() => go(i)} title={s.label}>
                    <span className="sr">{s.label}</span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="cs-now">
              <span className="eyebrow gold">Step {step + 1} of {steps.length}</span>
              <b>{cur.label}</b>
            </div>

            <div className={`cs-block cs-problem ${state('problem')}`}>
              <span className="eyebrow">The problem</span>
              <p>{c.problem}</p>
            </div>

            <div className="cs-flow">
              {c.flow.map((f, i) => (
                <div key={f.label} className={`cs-node ${state('flow', i)}`}>
                  <span className="cs-n">{String(i + 1).padStart(2, '0')}</span>
                  <b>{f.label}</b>
                  <p>{f.sub}</p>
                  {f.tech.length > 0 && <div className="cs-node-logos">{f.tech.map((k) => <Logo key={k} k={k} />)}</div>}
                </div>
              ))}
            </div>

            <div className={`cs-outcomes ${state('outcome')}`}>
              {c.outcomes.map((o) => (
                <div className={`cs-metric ${o.value.length > 8 ? 'long' : ''}`} key={o.label}>
                  <b>{o.value}</b>
                  <span>{o.label}</span>
                </div>
              ))}
            </div>

            <div className={`cs-angle ${state('angle')}`}>
              <span className="eyebrow gold">Why it matters for NAB QE</span>
              <p>{c.angle}</p>
            </div>

            <footer className="cs-foot">
              <div className="cs-stack">
                <span className="eyebrow">Stack</span>
                <div>{c.stack.map((k) => <Logo key={k} k={k} withName />)}</div>
              </div>
              <div className="loop-ctrl">
                <button className="btn small" onClick={() => go(step - 1)} aria-label="Previous step">←</button>
                <button className="btn small" onClick={() => { if (step >= steps.length - 1) setStep(0); setPlaying((p) => !p) }}>
                  {playing ? 'Pause' : step >= steps.length - 1 ? 'Replay' : 'Walk me through'}
                </button>
                <button className="btn small" onClick={() => go(step + 1)} aria-label="Next step">→</button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  )
}

function Lock() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}
