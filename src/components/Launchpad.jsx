import { useState } from 'react'
import { TESTKRAFT_TABS, NEODATATEST_CAPS, LINKS } from '../content'
import { TestKraftLogo, NeoDataTestLogo } from './Logos'

export default function Launchpad({ onCopy }) {
  const [tab, setTab] = useState(2)
  const [cap, setCap] = useState(1)
  const t = TESTKRAFT_TABS[tab]
  const c = NEODATATEST_CAPS[cap]

  return (
    <section className="block" id="launchpad">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow gold">V · Launchpad — live accelerators</div>
          <h2>
            Ready to see it, <span className="serif">not hear about it?</span>
          </h2>
          <p>Copy a NAB-flavoured prompt, open the live studio, paste, run. Real code, real data, real outcomes.</p>
        </div>

        <div className="pads">
          <div className="pad reveal">
            <div className="pad-head">
              <TestKraftLogo height={30} />
              <span className="eyebrow">Agentic test system</span>
            </div>
            <h3>
              Describe a test. <span className="muted">Get a tested pull request.</span>
            </h3>
            <p className="desc">
              Plans, writes and runs the test, diagnoses its own failures, and opens a pull request only an
              auditor has approved. Selenium executes. TestKraft decides.
            </p>
            <div className="tabs" role="tablist">
              {TESTKRAFT_TABS.map((x, i) => (
                <button key={x.key} role="tab" aria-selected={i === tab} className={i === tab ? 'on' : ''} onClick={() => setTab(i)}>
                  {x.name}
                </button>
              ))}
            </div>
            <div className="prompt-box">
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>You write</div>
                <div className="you">{t.prompt}</div>
              </div>
              <div>
                <div className="eyebrow">TestKraft returns</div>
                <ul className="returns">
                  {t.returns.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            </div>
            <div className="btn-row">
              <button className="btn" onClick={() => onCopy(t.prompt, 'Prompt copied — paste into TestKraft')}>Copy prompt</button>
              <a className="btn gold" href={LINKS.testkraft} target="_blank" rel="noreferrer">Open TestKraft →</a>
            </div>
          </div>

          <div className="pad reveal">
            <div className="pad-head">
              <NeoDataTestLogo />
            </div>
            <h3>
              Trust your <span style={{ color: '#e0a800' }}>data pipelines.</span>
            </h3>
            <p className="desc">
              Validate every transformation, reconcile source-to-target, and catch data-quality defects before
              they ever reach production.
            </p>
            <div className="ndt-caps">
              {NEODATATEST_CAPS.map((x, i) => (
                <button key={x.key} className={`ndt-cap ${i === cap ? 'on' : ''}`} onClick={() => setCap(i)}>
                  <b>{x.name}</b>
                  <p>{x.body}</p>
                  <div className="ex">e.g. {x.example}</div>
                </button>
              ))}
            </div>
            <div className="mini-pipe" aria-hidden="true">
              <span className="box">Source</span><i /><span className="box t">Transform</span><i /><span className="box">Target</span>
            </div>
            <div className="btn-row">
              <button className="btn" onClick={() => onCopy(c.example, 'Scenario copied — paste into NeoDataTest')}>Copy scenario</button>
              <a className="btn gold" href={LINKS.neodatatest} target="_blank" rel="noreferrer">Enter Studio →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
