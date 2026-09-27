import Header from './components/Header'
import Hero from './components/Hero'
import Scan from './components/Scan'
import Loop from './components/Loop'
import Scenarios from './components/Scenarios'
import Launchpad from './components/Launchpad'
import Governance from './components/Governance'
import Together from './components/Together'
import Footer from './components/Footer'
import { useCopy, useReveal } from './hooks'

export default function App() {
  const [copy, toast] = useCopy()
  useReveal()

  return (
    <>
      <div className="dust" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <Scan onCopy={copy} />
        <Loop />
        <Scenarios />
        <Launchpad onCopy={copy} />
        <Governance />
        <Together />
      </main>
      <Footer />
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  )
}
