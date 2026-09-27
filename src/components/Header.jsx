import { SECTIONS, LINKS } from '../content'
import { useActiveSection } from '../hooks'
import { NabLogo, StatusNeoLogo } from './Logos'

const IDS = SECTIONS.map((s) => s.id)

export default function Header() {
  const active = useActiveSection(IDS)
  return (
    <header className="topbar">
      <div className="wrap topbar-row">
        <a href="#top" className="lockup" aria-label="NAB × StatusNeo">
          <NabLogo height={26} />
          <span className="x">×</span>
          <StatusNeoLogo height={24} />
        </a>
        <a className="topbar-cta" href={LINKS.playground} target="_blank" rel="noreferrer">
          Playground 2.0 ↗
        </a>
      </div>
      <nav className="secnav" aria-label="Sections">
        <div className="wrap secnav-row">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''}>
              <span className="num">{s.num}</span>
              <span>
                <span className="t">{s.title}</span>
                <span className="s">{s.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
