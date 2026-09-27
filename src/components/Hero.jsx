import { HERO_STATS, AUTHENTIC_LOOP, PREPARED_FOR } from '../content'
import { AuthenticAILogo } from './Logos'

const C = 250
const R = 188

function LoopRing() {
  const n = AUTHENTIC_LOOP.length
  const pts = AUTHENTIC_LOOP.map((s, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180)
    return { ...s, x: C + R * Math.cos(a), y: C + R * Math.sin(a) }
  })
  return (
    <div className="ring-wrap" aria-label="The Authentic AI Loop: Product, Design, Engineer, Automate, Govern, Repeat">
      <svg className="ring-svg" viewBox="0 0 500 500">
        <circle cx={C} cy={C} r={R} fill="none" stroke="#c98a1b" strokeOpacity=".45" strokeDasharray="2 7" strokeWidth="2" />
        <circle cx={C} cy={C} r={R - 46} fill="none" stroke="#d9d3c6" strokeWidth="1" />
        <g className="ring-orbit">
          <circle cx={C} cy={C - R} r="7" fill="#c98a1b" />
          <circle cx={C} cy={C - R} r="14" fill="#fac400" fillOpacity=".25" />
        </g>
        {pts.map((p) => (
          <g key={p.key} className="ring-node" transform={`translate(${p.x} ${p.y})`}>
            <title>{`${p.name} — ${p.tag}`}</title>
            <circle r={p.qe ? 40 : 33} fill={p.qe ? '#141414' : '#fbfaf6'} stroke={p.qe ? '#fac400' : '#d9d3c6'} strokeWidth={p.qe ? 3 : 1.5} />
            <text textAnchor="middle" y={p.qe ? -2 : 4} fontSize={p.qe ? 13.5 : 12.5} fontWeight="700" fill={p.qe ? '#fac400' : '#141414'}>
              {p.name}
            </text>
            {p.qe && (
              <text textAnchor="middle" y="15" fontSize="8.5" fill="#d9d3c6" fontFamily="JetBrains Mono, monospace" letterSpacing=".6">
                QE CORE
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="ring-center">
        <div className="inner">
          <AuthenticAILogo height={30} className="" />
          <p>Loop™ · Repeat</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="thesis">
      <div className="wrap">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow gold">NAB Quality Engineering × StatusNeo</div>
            <h1>
              Quality, engineered
              <span className="serif">as a governed loop.</span>
            </h1>
            <p className="lede">
              Not a parallel practice with its own copy of the truth. Quality that reasons over the same
              context as engineering, tests what actually changed, and proves every release with evidence.
            </p>
            <div className="prepared">
              <span className="dot"><i /></span>
              <span>
                <b>Prepared for {PREPARED_FOR.name}</b>
                <span>{PREPARED_FOR.role}</span>
              </span>
            </div>
          </div>
          <LoopRing />
        </div>

        <div className="stats reveal">
          {HERO_STATS.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="stats-note">TestKraft outcomes as published in StatusNeo Accelerators 2026. Works on top of an existing automation baseline.</div>
      </div>
    </section>
  )
}
