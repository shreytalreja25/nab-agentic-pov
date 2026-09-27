// All copy and demo data lives here so the page can be edited without touching components.
// Numbers attributed to StatusNeo come from the 2026 Accelerators / BFSI decks.
// Loop walkthrough figures are ILLUSTRATIVE and labelled as such on the page.

export const LINKS = {
  playground: 'https://playground.statusneo.com',
  // TODO: confirm the TestKraft entry URL before the meeting
  testkraft: 'https://playground.statusneo.com',
  neodatatest: 'https://playground.statusneo.com/data-testing',
}

export const PREPARED_FOR = {
  name: 'Mithun Kanchi',
  role: 'Head of Quality Engineering, NAB',
}

export const PREPARED_BY = {
  name: 'Shrey Talreja',
  role: 'AI Transformation, StatusNeo ANZ',
}

export const SECTIONS = [
  { id: 'thesis', num: 'I', title: 'The Thesis', sub: 'Why a loop' },
  { id: 'scan', num: 'II', title: 'Maturity Scan', sub: 'Where NAB QE sits' },
  { id: 'loop', num: 'III', title: 'The Quality Loop', sub: 'How it works' },
  { id: 'scenarios', num: 'IV', title: 'Scenarios', sub: 'Banking use cases' },
  { id: 'launchpad', num: 'V', title: 'Launchpad', sub: 'See it run' },
  { id: 'governance', num: 'VI', title: 'Governance', sub: 'Evidence by default' },
  { id: 'together', num: 'VII', title: 'Together', sub: 'First 6 weeks' },
]

export const HERO_STATS = [
  { value: '90%+', label: 'predictable coverage' },
  { value: '20–30%', label: 'faster release velocity' },
  { value: '25–30%', label: 'fewer escaped defects' },
  { value: '0', label: 'rewrites of existing test packs' },
]

export const AUTHENTIC_LOOP = [
  { key: 'product', name: 'Product', tag: 'The Value Anchor' },
  { key: 'design', name: 'Design', tag: 'The Meaning Layer' },
  { key: 'engineer', name: 'Engineer', tag: 'The Truth Layer' },
  { key: 'automate', name: 'Automate', tag: 'The Velocity Engine', qe: true },
  { key: 'govern', name: 'Govern', tag: 'The Trust Framework', qe: true },
]

// ---------- II. Maturity Scan (Decision Fabric levels applied to QE) ----------
export const LEVELS = ['Ad Hoc', 'Awareness', 'Defined', 'Managed', 'Optimised']

export const DIMENSIONS = [
  {
    key: 'automation',
    short: 'AUTOMATION',
    name: 'Test automation',
    hint: 'How much of regression runs without a human pressing go?',
    fix: 'TestKraft layers AI generation and self-healing on top of the existing Selenium / Playwright estate — no rewrite.',
    product: 'TestKraft',
  },
  {
    key: 'selection',
    short: 'SELECTION',
    name: 'Regression selection',
    hint: 'Do you run what changed, or run everything and hope?',
    fix: 'Enterprise Brain computes the blast radius of each change so regression follows impact, not a static suite.',
    product: 'Enterprise Brain',
  },
  {
    key: 'testdata',
    short: 'TEST DATA',
    name: 'Test data',
    hint: 'Can a squad get safe, realistic data on demand?',
    fix: 'Synthetic data creation, drift / integrity checks and PII-safe transforms as part of every run.',
    product: 'TestKraft · Data',
  },
  {
    key: 'dataquality',
    short: 'DATA QUALITY',
    name: 'Data & pipeline quality',
    hint: 'Are transformations and reconciliations tested like code?',
    fix: 'NeoDataTest validates every transformation and reconciles source-to-target before data reaches production.',
    product: 'NeoDataTest',
  },
  {
    key: 'gates',
    short: 'GATES',
    name: 'Release gates & evidence',
    hint: 'Could you hand an auditor the evidence for last Friday’s release?',
    fix: 'Four-gate Eval Harness with trace-level evidence and explicit thresholds on every release.',
    product: 'Eval Harness',
  },
  {
    key: 'enablement',
    short: 'ENABLEMENT',
    name: 'QE enablement',
    hint: 'Are testers growing into AI-assisted quality engineers?',
    fix: 'A QE enablement track run through the Community of Practice — tools plus the craft to govern them.',
    product: 'QE Academy',
  },
]

// ---------- III. The Quality Loop ----------
export const LOOP_STAGES = [
  { key: 'change', name: 'Business change', verb: 'Ingest' },
  { key: 'brain', name: 'Blast radius', verb: 'Reason', owner: 'Enterprise Brain' },
  { key: 'generate', name: 'Test generation', verb: 'Generate', owner: 'TestKraft' },
  { key: 'ci', name: 'Agent CI/CD', verb: 'Execute', owner: 'Every PR' },
  { key: 'gate', name: 'Eval Harness gate', verb: 'Prove', owner: 'Threshold Gate' },
  { key: 'evolve', name: 'Self-evolution', verb: 'Improve', owner: 'Canary → Promote' },
]

export const LOOP_SCENARIOS = [
  {
    key: 'payid',
    label: 'PayID daily limit change',
    stages: {
      change: {
        headline: 'Raise the PayID / Osko daily limit for verified customers',
        lines: ['Story PAY-2148 · Payments squad', 'Touches limit rules, fraud thresholds and customer comms', 'Target release: next sprint'],
      },
      brain: {
        headline: '14 services · 3 journeys · 37 of 212 tests impacted',
        lines: ['Mobile transfer, internet banking, fraud-rule engine', 'Limit service is a shared dependency of 2 other journeys', 'Regression selected by impact, not by suite'],
      },
      generate: {
        headline: '18 new scenarios generated',
        lines: ['Boundary: limit − $0.01, limit, limit + $0.01', 'Negative: unverified customer, joint account, time-zone rollover', 'Synthetic, PII-safe customer data for each case'],
      },
      ci: {
        headline: '55 tests on PR #421 · 2 self-healed · 1 real defect',
        lines: ['Two locators self-healed after a UI tweak — no human needed', 'Defect: limit not reset at AEST midnight', 'Diagnosis attached to the PR, not a spreadsheet'],
      },
      gate: {
        headline: 'Gate: REFUSED — threshold not met',
        lines: ['Golden dataset ✓ · DeepEval metrics ✓ · Traces ✓', 'Threshold gate ✗ — 1 critical-path failure', 'Release blocked with evidence until fixed'],
        refused: true,
      },
      evolve: {
        headline: 'New rule learned: always test midnight rollovers',
        lines: ['Stored → analysed → new check created', 'Sandbox + canary on 2 squads, then promoted', 'Every improvement has a reason and a rollback path'],
      },
    },
  },
  {
    key: 'offset',
    label: 'Home loan offset calculation',
    stages: {
      change: {
        headline: 'Change how offset balances reduce daily interest',
        lines: ['Story LEND-0913 · Home Lending squad', 'Calculation logic + statement output', 'Regulated customer-facing number'],
      },
      brain: {
        headline: '9 services · 2 journeys · 24 of 160 tests impacted',
        lines: ['Interest engine, statements, banker app', 'Downstream: data warehouse interest facts', 'Data pipeline flagged for NeoDataTest'],
      },
      generate: {
        headline: '26 scenarios + 1 reconciliation suite',
        lines: ['Split loans, multiple offsets, zero-balance edge cases', 'Expected values derived from the calculation spec', 'Source-to-target reconciliation for interest facts'],
      },
      ci: {
        headline: '50 tests on PR #388 · all green · 1 data drift',
        lines: ['Functional suite passes', 'NeoDataTest: rounding drift in warehouse transform', 'Drift traced to a single column mapping'],
      },
      gate: {
        headline: 'Gate: PASSED after fix',
        lines: ['Drift fixed and re-reconciled', 'All four gates green with trace evidence', 'Evidence pack stored for audit'],
      },
      evolve: {
        headline: 'Rounding check added to every lending transform',
        lines: ['Pattern promoted across lending pipelines', 'Canary on 1 squad before wider rollout', 'Measurable reason recorded'],
      },
    },
  },
  {
    key: 'cdr',
    label: 'CDR / Open Banking API version bump',
    stages: {
      change: {
        headline: 'Adopt the next Consumer Data Right API standard version',
        lines: ['Story OB-2201 · Open Banking squad', 'Schema changes on accounts and transactions endpoints', 'External data recipients depend on it'],
      },
      brain: {
        headline: '6 APIs · 41 endpoints · contract tests impacted',
        lines: ['Accounts, balances, transactions, products', 'Consent service is a shared dependency', 'Every endpoint in the spec in scope'],
      },
      generate: {
        headline: '112 contract + negative tests from the spec',
        lines: ['“Every endpoint in the spec” as a single instruction', 'Pagination, versioning headers, error payloads', 'Consent-expired and revoked-consent cases'],
      },
      ci: {
        headline: '112 tests on PR #512 · 3 schema mismatches',
        lines: ['Mismatches on optional fields in transactions', 'Each failure diagnosed against the spec clause', 'Fix suggestions attached to the PR'],
      },
      gate: {
        headline: 'Gate: PASSED — auditor-approved PR opened',
        lines: ['TestKraft opens a PR only an auditor has approved', 'Spec clause ↔ test ↔ trace linked', 'Conformance evidence exported'],
      },
      evolve: {
        headline: 'Spec diffing becomes automatic',
        lines: ['Next standard version generates its own delta tests', 'Promoted after canary on the Open Banking squad', 'Reversible by design'],
      },
    },
  },
]

// ---------- IV. Scenario library ----------
export const SCENARIOS = [
  {
    title: 'KYC & digital onboarding',
    body: 'End-to-end onboarding journeys across web and mobile, including document and identity checks.',
    products: ['TestKraft · Web', 'TestKraft · Mobile'],
    gate: 'Golden Dataset',
  },
  {
    title: 'Payments regression',
    body: 'NPP / PayID, BPAY and card flows regressed by blast radius on every change.',
    products: ['TestKraft · API', 'Enterprise Brain'],
    gate: 'Threshold Gate',
  },
  {
    title: 'Home lending journeys',
    body: 'Application to settlement, with calculation checks derived from the spec — not from screenshots.',
    products: ['TestKraft · Web', 'TestKraft · Unit'],
    gate: 'DeepEval Metrics',
  },
  {
    title: 'CDR / Open Banking APIs',
    body: 'Every endpoint in the spec: contract, negative and consent-lifecycle tests generated from one instruction.',
    products: ['TestKraft · API'],
    gate: 'Trace Dashboard',
  },
  {
    title: 'Core → warehouse reconciliation',
    body: 'Source-to-target reconciliation on every transformation, before a report ever reads it.',
    products: ['NeoDataTest · Reconciliation'],
    gate: 'Threshold Gate',
  },
  {
    title: 'Regulatory reporting data quality',
    body: 'Data-quality rules on the pipelines that feed regulatory and risk reporting, with drift alerts.',
    products: ['NeoDataTest · Data Quality'],
    gate: 'Golden Dataset',
  },
  {
    title: 'AML & fraud rule changes',
    body: 'Threshold and rule changes tested with synthetic, PII-safe transaction data and audit-ready trails.',
    products: ['TestKraft · Data', 'NeoDataTest · Transformation'],
    gate: 'Trace Dashboard',
  },
  {
    title: 'Legacy test pack uplift',
    body: 'Keep the existing automation baseline; add AI generation, self-healing and CI-aware prioritisation on top.',
    products: ['TestKraft'],
    gate: 'DeepEval Metrics',
  },
]

// ---------- V. Launchpad ----------
export const TESTKRAFT_TABS = [
  {
    key: 'web',
    name: 'Web UI',
    prompt: 'Cover the internet banking “Pay someone” journey end to end, including a new payee, a scheduled payment and a payment above the daily limit.',
    returns: ['Page objects + Playwright specs', 'Boundary and negative cases', 'Self-healing locators'],
  },
  {
    key: 'mobile',
    name: 'Mobile App',
    prompt: 'Regression-test card lock / unlock and the virtual card flow on iOS and Android, including biometric re-authentication.',
    returns: ['Device matrix plan', 'Appium specs per platform', 'Flake diagnosis on failure'],
  },
  {
    key: 'api',
    name: 'API',
    prompt: 'Every endpoint in the Consumer Data Right banking spec: contract, pagination, error payloads and revoked-consent cases.',
    returns: ['Contract tests from the spec', 'Negative + consent lifecycle', 'Auditor-approved PR'],
  },
  {
    key: 'data',
    name: 'Data Quality',
    prompt: 'Validate the daily transactions feed: no duplicate transaction IDs, balances reconcile to the ledger, and no raw PII in the output.',
    returns: ['Data-quality rules', 'Synthetic PII-safe fixtures', 'Drift checks on schedule'],
  },
  {
    key: 'unit',
    name: 'Unit',
    prompt: 'Write unit tests for the interest-offset calculation service, covering split loans, multiple offsets and zero balances.',
    returns: ['Unit tests beside the code', 'Coverage delta on the PR', 'Explained assertions'],
  },
]

export const NEODATATEST_CAPS = [
  {
    key: 'transformation',
    name: 'Transformation',
    body: 'Validate every transformation rule against its mapping spec.',
    example: 'Customer master → CRM: name standardisation, address parsing, segment derivation.',
  },
  {
    key: 'reconciliation',
    name: 'Reconciliation',
    body: 'Reconcile source-to-target on counts, sums and keys.',
    example: 'Core banking ledger → data warehouse: daily balances and transaction totals.',
  },
  {
    key: 'quality',
    name: 'Data Quality',
    body: 'Catch defects before they ever reach production.',
    example: 'Regulatory reporting feed: completeness, validity, uniqueness and drift.',
  },
]

// ---------- VI. Governance ----------
export const GATES = [
  { name: 'Golden Dataset', body: 'Domain scenarios curated with NAB SMEs — the definition of “right”.' },
  { name: 'DeepEval Metrics', body: 'Quality measured, not asserted: correctness, coverage, faithfulness.' },
  { name: 'Trace Dashboard', body: 'Every agent step traced, so any result can be explained and replayed.' },
  { name: 'Threshold Gate', body: 'Explicit thresholds that refuse a release — they cannot be bypassed by delivery pressure.' },
]

export const DECISIONS = ['allow', 'deny', 'approve', 'redact', 'rewrite', 'escalate']

export const NON_NEGOTIABLES = [
  'Human-in-the-loop for GenAI',
  'Policy-as-Code via OPA gates',
  'Evidence, audit & attestation automation',
  'Data lineage end to end',
  'Zero-trust, fine-grained access',
  'Model risk management & explainability',
]

// ---------- VII. Together ----------
export const PHASES = [
  { week: 'Wk 0–1', name: 'Frame', body: 'Maturity Scan with QE leads; pick one squad and one measurable outcome.' },
  { week: 'Wk 1–2', name: 'Wire', body: 'Connect TestKraft and NeoDataTest to the squad’s repos, pipelines and a data sample.' },
  { week: 'Wk 2–4', name: 'Prove', body: 'Run the loop on live changes in shadow mode, beside the current process.' },
  { week: 'Wk 4–5', name: 'Gate', body: 'Agree golden datasets and thresholds with QE and risk; turn on the Eval Harness.' },
  { week: 'Wk 6', name: 'Decide', body: 'Before / after on coverage, cycle time and escaped defects. Scale, adjust or stop.' },
]

export const TRACKS = [
  {
    title: 'Forward Deployed pod',
    body: 'A compact pod of StatusNeo engineers embedded with the squad until it works in production — not a slide team.',
  },
  {
    title: 'QE enablement track',
    body: 'Run through the QE Community of Practice: AI-assisted test design, prompt-to-test craft and how to govern agents.',
  },
  {
    title: 'Decision Fabric layer',
    body: 'Baseline first, then before / after on the numbers QE leadership already reports on.',
  },
]
