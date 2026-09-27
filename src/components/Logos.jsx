// Source assets live in public/brand (copied from StatusNeo_Branding).
// NAB and Decision Fabric files carry generous padding, so they are cropped in CSS.

function Cropped({ src, alt, height, box, natural, className }) {
  const s = height / box.h
  return (
    <span className={className} style={{ display: 'inline-block', width: box.w * s, height }} role="img" aria-label={alt}>
      <img
        src={src}
        alt=""
        style={{ width: natural.w * s, height: natural.h * s, left: -box.x * s, top: -box.y * s }}
      />
    </span>
  )
}

export function NabLogo({ height = 28 }) {
  return (
    <Cropped
      className="logo-nab"
      src="/brand/nab.png"
      alt="NAB"
      height={height}
      natural={{ w: 512, h: 512 }}
      box={{ x: 18, y: 145, w: 480, h: 190 }}
    />
  )
}

export function DecisionFabricLogo({ height = 30 }) {
  return (
    <Cropped
      className="df"
      src="/brand/decision-fabric.jpg"
      alt="Decision Fabric by StatusNeo"
      height={height}
      natural={{ w: 5000, h: 1206 }}
      box={{ x: 150, y: 150, w: 4700, h: 860 }}
    />
  )
}

export function StatusNeoLogo({ height = 26 }) {
  return <img className="logo-sn" style={{ height }} src="/brand/statusneo.svg" alt="StatusNeo" />
}

export function AuthenticAILogo({ height = 26, className = 'aai' }) {
  return <img className={className} style={{ height, width: 'auto' }} src="/brand/authentic-ai.svg" alt="Authentic AI" />
}

export function TestKraftLogo({ height = 30 }) {
  return <img style={{ height, width: 'auto' }} src="/brand/testkraft.png" alt="TestKraft" />
}

// No NeoDataTest asset yet — recreated from the playground header.
export function NeoDataTestLogo() {
  return (
    <div className="ndt-brand" aria-label="NeoDataTest">
      <div className="ndt-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round">
          <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
          <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
          <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
        </svg>
      </div>
      <div className="ndt-word">
        <b>NEO<em>DATATEST</em></b>
        <span>Data Transformation Studio</span>
      </div>
    </div>
  )
}
