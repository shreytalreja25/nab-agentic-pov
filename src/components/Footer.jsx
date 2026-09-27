import { PREPARED_BY } from '../content'
import { StatusNeoLogo, AuthenticAILogo, DecisionFabricLogo, NabLogo } from './Logos'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot foot-top">
          <div className="foot-logos">
            <StatusNeoLogo height={24} />
            <AuthenticAILogo height={24} />
            <DecisionFabricLogo height={34} />
          </div>
          <div className="foot-for">
            <small>Prepared for</small>
            <NabLogo height={22} />
          </div>
        </div>
        <div className="foot foot-bottom">
          <small>
            Prepared by {PREPARED_BY.name} · {PREPARED_BY.role} · The AuthenticAI™ Company
          </small>
          <small>Confidential · discussion draft</small>
        </div>
      </div>
    </footer>
  )
}
