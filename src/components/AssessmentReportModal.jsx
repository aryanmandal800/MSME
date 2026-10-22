import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  Share2, 
  Building2, 
  Receipt, 
  Banknote, 
  ShieldCheck, 
  Network, 
  FileCheck, 
  Clock, 
  TrendingUp, 
  CreditCard, 
  ExternalLink,
  ChevronRight,
  Info,
  Sparkles,
  Printer
} from 'lucide-react';

export default function AssessmentReportModal({ msme, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, gst, cashflow, bureau, supplychain, statutory
  const [copiedLink, setCopiedLink] = useState(false);
  const [isApplyingLoan, setIsApplyingLoan] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  if (!msme) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLoanApply = () => {
    setIsApplyingLoan(true);
    setTimeout(() => {
      setIsApplyingLoan(false);
      setApplicationSuccess(true);
    }, 1200);
  };

  const scoreVal = msme.manalixScore || msme.score || 750;
  const normalizedScore = Math.max(0, Math.min(600, scoreVal - 300));
  const scorePercent = normalizedScore / 600;
  const strokeDashoffset = 440 - (440 * scorePercent * 0.75); // 270 degree arc

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card print-report-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Navigation Bar */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="verified-badge-row">
              <span className="badge-verified">
                <CheckCircle2 size={13} color="#10B981" /> Verified MSME Entity
              </span>
              <span className="badge-udyam">{msme.udyamNumber}</span>
              <span className="badge-category">{msme.category}</span>
            </div>
            <h2 className="modal-firm-name">{msme.firmName}</h2>
            <div className="modal-sub-meta">
              <span>Trade Name: <strong>{msme.tradeName}</strong></span>
              <span>•</span>
              <span>CIN: {msme.cin}</span>
              <span>•</span>
              <span>{msme.industry}</span>
            </div>
          </div>

          <div className="modal-header-actions">
            <button 
              className="btn-modal-action" 
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={16} />
              <span className="desktop-only">Print / PDF</span>
            </button>
            <button 
              className="btn-modal-action" 
              onClick={handleCopyLink}
              title="Share Assessment"
            >
              <Share2 size={16} />
              <span className="desktop-only">{copiedLink ? 'Copied Link!' : 'Share'}</span>
            </button>
            <button 
              className="btn-modal-close" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Identity & Legal Identifiers Banner */}
          <div className="identifiers-grid">
            <div className="id-cell">
              <span className="id-label">GSTIN</span>
              <span className="id-value mono">{msme.gstin}</span>
              <span className="id-sub text-success">Active & Verified (GSTN)</span>
            </div>
            <div className="id-cell">
              <span className="id-label">PAN</span>
              <span className="id-value mono">{msme.pan}</span>
              <span className="id-sub text-success">CBDT Linked & Operative</span>
            </div>
            <div className="id-cell">
              <span className="id-label">Corporate CIN</span>
              <span className="id-value mono">{msme.cin}</span>
              <span className="id-sub text-success">MCA21 Active Registry</span>
            </div>
            <div className="id-cell">
              <span className="id-label">Incorporation & Vintage</span>
              <span className="id-value">{msme.dateOfIncorporation}</span>
              <span className="id-sub">{msme.vintageYears} Years Operational</span>
            </div>
            <div className="id-cell col-span-full">
              <span className="id-label">Registered Office Address</span>
              <span className="id-value address-val">{msme.registeredOffice}</span>
            </div>
          </div>

          {/* Hero Assessment Showcase: Score Gauge + Pre-Approved Facility */}
          <div className="assessment-hero-row">
            {/* Left: Animated Score Gauge */}
            <div className="score-gauge-card">
              <div className="gauge-header">
                <span className="gauge-title">Credit Score</span>
                <span className="gauge-tagline">AI Multi-Factor Assessment</span>
              </div>

              <div className="gauge-visual-wrap">
                <svg className="gauge-svg" width="200" height="150" viewBox="0 0 200 150">
                  <path 
                    d="M 25 130 A 75 75 0 1 1 175 130" 
                    fill="none" 
                    stroke="#E2E8F0" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 25 130 A 75 75 0 1 1 175 130" 
                    fill="none" 
                    stroke="url(#scoreGradient)" 
                    strokeWidth="14" 
                    strokeLinecap="round"
                    strokeDasharray="353"
                    strokeDashoffset={353 - (353 * scorePercent * 0.75)}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1EA7FF" />
                      <stop offset="50%" stopColor="#00D2B4" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="gauge-center-text">
                  <span className="gauge-score-number">{scoreVal}</span>
                  <span className="gauge-score-max">/ 900</span>
                  <span className="gauge-tier-pill">{msme.scoreTier}</span>
                </div>
              </div>

              <div className="gauge-footer-meta">
                <div className="meta-col">
                  <span className="meta-label">Risk Profile</span>
                  <span className="meta-val text-success">● {msme.riskRating}</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-col">
                  <span className="meta-label">Industry Standing</span>
                  <span className="meta-val">Top {100 - msme.percentile}% in Sector</span>
                </div>
              </div>
            </div>

            {/* Right: Pre-Approved Loan Underwriting Offer Card */}
            <div className="preapproved-loan-card">
              <div className="loan-card-top">
                <div className="loan-tag">
                  <Sparkles size={14} color="#1EA7FF" />
                  <span>Instant Partner Underwriting Term Sheet</span>
                </div>
                <div className="loan-amount-headline">
                  {msme.preApprovedLoan.formattedAmount}
                </div>
                <div className="loan-product-type">
                  {msme.preApprovedLoan.product}
                </div>
              </div>

              <div className="loan-specs-grid">
                <div className="spec-item">
                  <span className="spec-lbl">Indicative ROI</span>
                  <span className="spec-val text-brand">{msme.preApprovedLoan.roi}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-lbl">Sanction Tenure</span>
                  <span className="spec-val">{msme.preApprovedLoan.tenureMonths} Months</span>
                </div>
                <div className="spec-item">
                  <span className="spec-lbl">Monthly EMI Estimate</span>
                  <span className="spec-val">{msme.preApprovedLoan.monthlyEmi}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-lbl">Disbursal Window</span>
                  <span className="spec-val text-success">Same-Day Digital</span>
                </div>
              </div>

              {applicationSuccess ? (
                <div className="loan-success-banner">
                  <CheckCircle2 size={18} color="#10B981" />
                  <div>
                    <strong>Application Initiated Successfully!</strong>
                    <p>Manalix & Partner Bank underwriting desk has generated your reference: <strong>MANALIX-DISB-{msme.id.toUpperCase()}</strong></p>
                  </div>
                </div>
              ) : (
                <button 
                  className="btn-apply-loan" 
                  onClick={handleLoanApply}
                  disabled={isApplyingLoan}
                >
                  <CreditCard size={18} />
                  <span>{isApplyingLoan ? 'Generating Sanction Memo...' : 'Claim Pre-Approved Credit Facility'}</span>
                </button>
              )}

              <div className="lender-consortium-row">
                <span className="lender-lbl">Underwritten via Consortium:</span>
                <span className="lender-badges">FinAGG • Tata Capital • ICICI Bank • SIDBI</span>
              </div>
            </div>
          </div>

          {/* Dual-Index Vector Bar: Ability to Pay vs Intention to Pay */}
          <div className="dual-index-card">
            <div className="dual-index-header">
              <div className="dual-title-group">
                <span className="dual-title">Dual-Vector Scoring Decomposition</span>
                <span className="dual-desc">Manalix independently evaluates liquidity capacity and repayment integrity</span>
              </div>
              <span className="dual-calibrated-badge">Calibrated Against 10L+ MSMEs</span>
            </div>

            <div className="dual-bars-grid">
              <div className="vector-box">
                <div className="vector-meta">
                  <span className="vector-name">Ability to Pay (Cash Flow Capacity)</span>
                  <span className="vector-score">{msme.abilityToPay} / 100</span>
                </div>
                <div className="vector-track">
                  <div className="vector-fill bg-teal" style={{ width: `${msme.abilityToPay}%` }} />
                </div>
                <span className="vector-note">Gauges operating margins, DSCR buffer, and monthly cash flow velocity.</span>
              </div>

              <div className="vector-box">
                <div className="vector-meta">
                  <span className="vector-name">Intention to Pay (Repayment & Compliance Discipline)</span>
                  <span className="vector-score">{msme.intentionToPay} / 100</span>
                </div>
                <div className="vector-track">
                  <div className="vector-fill bg-blue" style={{ width: `${msme.intentionToPay}%` }} />
                </div>
                <span className="vector-note">Gauges GST filing punctuality, bureau CMR track, and zero litigation flags.</span>
              </div>
            </div>
          </div>

          {/* Factor Navigation Tabs (100% Screen Responsive Segmented Bar) */}
          <div className="factor-tabs-nav">
            <button 
              className={`factor-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <TrendingUp size={15} />
              <span>Overview</span>
            </button>
            <button 
              className={`factor-nav-btn ${activeTab === 'gst' ? 'active' : ''}`}
              onClick={() => setActiveTab('gst')}
            >
              <Receipt size={15} />
              <span>GST Discipline</span>
              <span className="tab-score-chip">{msme.factors.gstDiscipline.score}</span>
            </button>
            <button 
              className={`factor-nav-btn ${activeTab === 'cashflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('cashflow')}
            >
              <Banknote size={15} />
              <span>Cash Flow</span>
              <span className="tab-score-chip">{msme.factors.cashFlowVelocity.score}</span>
            </button>
            <button 
              className={`factor-nav-btn ${activeTab === 'bureau' ? 'active' : ''}`}
              onClick={() => setActiveTab('bureau')}
            >
              <ShieldCheck size={15} />
              <span>Bureau Health</span>
              <span className="tab-score-chip">{msme.factors.bureauHealth.score}</span>
            </button>
            <button 
              className={`factor-nav-btn ${activeTab === 'supplychain' ? 'active' : ''}`}
              onClick={() => setActiveTab('supplychain')}
            >
              <Network size={15} />
              <span>Supply Chain</span>
              <span className="tab-score-chip">{msme.factors.supplyChainQuality.score}</span>
            </button>
            <button 
              className={`factor-nav-btn ${activeTab === 'statutory' ? 'active' : ''}`}
              onClick={() => setActiveTab('statutory')}
            >
              <FileCheck size={15} />
              <span>Compliance &amp; KYC</span>
              <span className="tab-score-chip">{msme.factors.statutoryKyc.score}</span>
            </button>
          </div>

          {/* Factor Tab Detail Panes */}
          <div className="tab-detail-pane">
            {/* 1. Overview Tab */}
            {activeTab === 'overview' && (
              <div className="overview-pane">
                <div className="financials-strip">
                  <div className="fin-metric-card">
                    <span className="fin-lbl">Annual Turnover</span>
                    <span className="fin-val">{msme.financialSummary.annualTurnover}</span>
                    <span className="fin-badge positive">{msme.financialSummary.yoyGrowth} YoY</span>
                  </div>
                  <div className="fin-metric-card">
                    <span className="fin-lbl">EBITDA Margin</span>
                    <span className="fin-val">{msme.financialSummary.ebitdaMargin}</span>
                    <span className="fin-badge">Operating Health</span>
                  </div>
                  <div className="fin-metric-card">
                    <span className="fin-lbl">PAT Margin</span>
                    <span className="fin-val">{msme.financialSummary.patMargin}</span>
                    <span className="fin-badge">Net Return</span>
                  </div>
                  <div className="fin-metric-card">
                    <span className="fin-lbl">Average Monthly Inflow</span>
                    <span className="fin-val">{msme.financialSummary.averageMonthlyInflow}</span>
                    <span className="fin-badge">Bank Verified</span>
                  </div>
                  <div className="fin-metric-card">
                    <span className="fin-lbl">Debtor Collection Days</span>
                    <span className="fin-val">{msme.financialSummary.totalDebtorDays} Days</span>
                    <span className="fin-badge positive">Fast Realization</span>
                  </div>
                  <div className="fin-metric-card">
                    <span className="fin-lbl">HSN / SAC Trade Codes</span>
                    <span className="fin-val mono">{msme.hsnSacCodes.join(", ")}</span>
                    <span className="fin-badge">Validated Classification</span>
                  </div>
                </div>

                <div className="overview-summary-box">
                  <div className="summary-title-row">
                    <Info size={18} color="#1EA7FF" />
                    <h4>AI Underwriting Executive Summary</h4>
                  </div>
                  <p>
                    <strong>{msme.firmName}</strong> demonstrates top-tier creditworthiness within the <strong>{msme.industry}</strong> sector. 
                    Reconciled telemetry from GSTN and digital Account Aggregator shows high revenue visibility with strong cash flow retention 
                    (Average Monthly Balance: {msme.financialSummary.monthlyAverageBalance}). Commercial bureau tradelines are cleanly serviced 
                    with zero historical delinquencies, conferring a {msme.scoreTier} rating.
                  </p>
                </div>
              </div>
            )}

            {/* 2. GST Discipline Tab */}
            {activeTab === 'gst' && (
              <div className="factor-detail-pane">
                <div className="factor-pane-header">
                  <div>
                    <h3 className="factor-pane-title">{msme.factors.gstDiscipline.status} GST Filing Record</h3>
                    <p className="factor-pane-desc">{msme.factors.gstDiscipline.summary}</p>
                  </div>
                  <div className="factor-weight-pill">Weight in Score: 25%</div>
                </div>

                <div className="metrics-cards-grid">
                  {msme.factors.gstDiscipline.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="m-label">{m.label}</span>
                      <span className="m-value">{m.value}</span>
                      <span className="m-badge">{m.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="factor-detail-narrative">
                  <strong>Telemetry Verification Details:</strong> {msme.factors.gstDiscipline.details}
                </div>
              </div>
            )}

            {/* 3. Cash Flow Velocity Tab */}
            {activeTab === 'cashflow' && (
              <div className="factor-detail-pane">
                <div className="factor-pane-header">
                  <div>
                    <h3 className="factor-pane-title">{msme.factors.cashFlowVelocity.status} Banking Liquidity</h3>
                    <p className="factor-pane-desc">{msme.factors.cashFlowVelocity.summary}</p>
                  </div>
                  <div className="factor-weight-pill">Weight in Score: 25%</div>
                </div>

                <div className="metrics-cards-grid">
                  {msme.factors.cashFlowVelocity.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="m-label">{m.label}</span>
                      <span className="m-value">{m.value}</span>
                      <span className="m-badge">{m.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="factor-detail-narrative">
                  <strong>Account Aggregator Analysis:</strong> {msme.factors.cashFlowVelocity.details}
                </div>
              </div>
            )}

            {/* 4. Bureau Health Tab */}
            {activeTab === 'bureau' && (
              <div className="factor-detail-pane">
                <div className="factor-pane-header">
                  <div>
                    <h3 className="factor-pane-title">{msme.factors.bureauHealth.status} Commercial Credit Track</h3>
                    <p className="factor-pane-desc">{msme.factors.bureauHealth.summary}</p>
                  </div>
                  <div className="factor-weight-pill">Weight in Score: 20%</div>
                </div>

                <div className="metrics-cards-grid">
                  {msme.factors.bureauHealth.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="m-label">{m.label}</span>
                      <span className="m-value">{m.value}</span>
                      <span className="m-badge">{m.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="factor-detail-narrative">
                  <strong>Bureau Tradeline Scrubbing:</strong> {msme.factors.bureauHealth.details}
                </div>
              </div>
            )}

            {/* 5. Supply Chain Quality Tab */}
            {activeTab === 'supplychain' && (
              <div className="factor-detail-pane">
                <div className="factor-pane-header">
                  <div>
                    <h3 className="factor-pane-title">{msme.factors.supplyChainQuality.status} Counterparties</h3>
                    <p className="factor-pane-desc">{msme.factors.supplyChainQuality.summary}</p>
                  </div>
                  <div className="factor-weight-pill">Weight in Score: 15%</div>
                </div>

                <div className="metrics-cards-grid">
                  {msme.factors.supplyChainQuality.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="m-label">{m.label}</span>
                      <span className="m-value">{m.value}</span>
                      <span className="m-badge">{m.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="factor-detail-narrative">
                  <strong>Supply Chain Exposure Matrix:</strong> {msme.factors.supplyChainQuality.details}
                </div>
              </div>
            )}

            {/* 6. Statutory KYC Tab */}
            {activeTab === 'statutory' && (
              <div className="factor-detail-pane">
                <div className="factor-pane-header">
                  <div>
                    <h3 className="factor-pane-title">{msme.factors.statutoryKyc.status} Statutory Compliance</h3>
                    <p className="factor-pane-desc">{msme.factors.statutoryKyc.summary}</p>
                  </div>
                  <div className="factor-weight-pill">Weight in Score: 10%</div>
                </div>

                <div className="metrics-cards-grid">
                  {msme.factors.statutoryKyc.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="m-label">{m.label}</span>
                      <span className="m-value">{m.value}</span>
                      <span className="m-badge">{m.badge}</span>
                    </div>
                  ))}
                </div>

                <div className="factor-detail-narrative">
                  <strong>Regulatory Registries Scan:</strong> {msme.factors.statutoryKyc.details}
                </div>
              </div>
            )}
          </div>

          {/* Actionable AI Recommendations to Boost Score */}
          <div className="recommendations-card">
            <div className="rec-header">
              <Sparkles size={18} color="#1EA7FF" />
              <h3>AI Recommendations to Enhance Your Score to 820+</h3>
            </div>
            <div className="rec-list">
              <div className="rec-item">
                <div className="rec-num">1</div>
                <div className="rec-content">
                  <strong>Accelerate Debtor Cycle Below 35 Days:</strong>
                  <span> Enroll in TReDS (Trade Receivables Electronic Discounting System) to discount corporate invoices immediately upon delivery.</span>
                </div>
              </div>
              <div className="rec-item">
                <div className="rec-num">2</div>
                <div className="rec-content">
                  <strong>Maintain Working Capital Buffer (ABB):</strong>
                  <span> Maintain an Average Monthly Balance equivalent to at least 15 days of operating overheads to insulate against sudden raw material price surges.</span>
                </div>
              </div>
              <div className="rec-item">
                <div className="rec-num">3</div>
                <div className="rec-content">
                  <strong>Reconcile 2B vs 3B Prior to Monthly Filing:</strong>
                  <span> Prevent ITC mismatch notices by setting up automated supplier compliance reminders 5 days before GSTR-1 cutoff.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky Footer */}
        <div className="modal-footer">
          <div className="footer-left">
            <span className="footer-secured-badge">
              <ShieldCheck size={16} color="#10B981" /> 256-Bit Bank Grade Secured Telemetry • ISO 27001 Certified
            </span>
          </div>
          <div className="footer-right">
            <button className="btn-secondary" onClick={onClose}>
              Close Preview
            </button>
            <button className="btn-primary" onClick={handleLoanApply}>
              Proceed with Pre-Approved Loan <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
