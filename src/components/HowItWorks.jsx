import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  GitMerge, 
  Layers, 
  CheckCircle2, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Lock,
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/msmeData';

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section className="section-container how-it-works-section" id="how-it-works-section">
      <div className="section-inner">
        {/* Section Heading */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <Cpu size={15} />
            <span>Underwriting Architecture</span>
          </div>
          <h2 className="section-title">
            How We Generate <span className="text-gradient">The Score</span>
          </h2>
          <p className="section-subtitle">
            An explainable, multi-source AI underwriting framework built specifically for Indian MSMEs — 
            replacing slow, collateral-heavy assessments with real-time cash flow and statutory telemetry.
          </p>
        </div>

        {/* 5-Step Process Pipeline Stepper */}
        <div className="pipeline-stepper-wrapper">
          <div className="stepper-nav-bar">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <button
                key={step.step}
                className={`stepper-nav-item ${selectedStep === idx ? 'active' : ''}`}
                onClick={() => setSelectedStep(idx)}
              >
                <span className="step-num-pill">{step.step}</span>
                <span className="step-title-text">{step.phase}</span>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="active-step-card">
            <div className="step-card-left">
              <div className="step-phase-tag">
                <span>Phase {METHODOLOGY_STEPS[selectedStep].step}</span>
                <span>•</span>
                <span>{METHODOLOGY_STEPS[selectedStep].phase}</span>
              </div>
              <h3 className="step-main-title">{METHODOLOGY_STEPS[selectedStep].title}</h3>
              <p className="step-summary-text">{METHODOLOGY_STEPS[selectedStep].summary}</p>
              <p className="step-details-text">{METHODOLOGY_STEPS[selectedStep].details}</p>

              <div className="step-integrations-box">
                <span className="integrations-label">Key Telemetry Data Points & Connectors:</span>
                <div className="integrations-tags-wrap">
                  {METHODOLOGY_STEPS[selectedStep].integrations.map((item, i) => (
                    <span key={i} className="integration-chip">
                      <CheckCircle2 size={13} color="#10B981" /> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="step-card-right">
              <div className="diagram-visual-box">
                <div className="visual-header">
                  <Lock size={15} color="#1EA7FF" />
                  <span>Real-Time Engine Execution</span>
                </div>

                {selectedStep === 0 && (
                  <div className="diagram-content">
                    <div className="flow-bubble api">GSTN Telemetry (GSTR-1, 3B, 9)</div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-bubble api">RBI Account Aggregator (12M Bank Data)</div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-bubble api">MCA21 & CBDT PAN Data Feeds</div>
                    <div className="flow-badge">Zero Manual Paperwork Uploaded</div>
                  </div>
                )}

                {selectedStep === 1 && (
                  <div className="diagram-content">
                    <div className="flow-split-row">
                      <div className="flow-box-mini">GST Turnover</div>
                      <div className="vs-tag">VS</div>
                      <div className="flow-box-mini">Bank Inflows</div>
                    </div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-bubble secure">
                      <ShieldCheck size={16} color="#10B981" /> Circular Trade Scanner Passed
                    </div>
                    <div className="flow-badge">100% Tax Invoicing Reconciled</div>
                  </div>
                )}

                {selectedStep === 2 && (
                  <div className="diagram-content">
                    <div className="flow-dual-box">
                      <div className="dual-side">
                        <span className="side-title">Ability to Pay (60%)</span>
                        <span className="side-metric">Cash Flow Velocity</span>
                        <span className="side-metric">DSCR Buffer</span>
                      </div>
                      <div className="dual-side">
                        <span className="side-title">Intention to Pay (40%)</span>
                        <span className="side-metric">Filing Punctuality</span>
                        <span className="side-metric">0 DPD Tradelines</span>
                      </div>
                    </div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-bubble composite">Composite Score Vector (300 - 900)</div>
                  </div>
                )}

                {selectedStep === 3 && (
                  <div className="diagram-content">
                    <div className="flow-bubble benchmark">
                      Clustered across 10,00,000+ MSME Repayment Records
                    </div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-bubble benchmark">
                      Sectoral Weight Adjustment (Manufacturing vs Trading vs IT)
                    </div>
                    <div className="flow-badge">SHAP-based Explainable AI Validation</div>
                  </div>
                )}

                {selectedStep === 4 && (
                  <div className="diagram-content">
                    <div className="flow-bubble result">Instant Credit Decision Tier (A+ to D)</div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-bubble result">
                      Pre-Approved Credit Limit Computed (e.g. ₹45L)
                    </div>
                    <div className="flow-badge success">Direct Handshake with FinAGG & NBFCs</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Architecture Value Pillars */}
        <div className="architecture-pillars-grid">
          <div className="arch-pillar-card">
            <div className="pillar-icon bg-blue-glow">
              <Zap size={22} color="#1EA7FF" />
            </div>
            <h4 className="pillar-title">Cash-Flow First Underwriting</h4>
            <p className="pillar-desc">
              Traditional banks require immovable property collateral. Manalix Technology evaluates business vitality through 
              real-time bank deposits, invoice realization velocity, and working capital churn.
            </p>
          </div>

          <div className="arch-pillar-card">
            <div className="pillar-icon bg-teal-glow">
              <GitMerge size={22} color="#00D2B4" />
            </div>
            <h4 className="pillar-title">Cross-Triangulated GST Telemetry</h4>
            <p className="pillar-desc">
              Direct integration with GSTN verifies turnover consistency and ITC claims across 24 consecutive months, 
              weeding out ghost invoices and synthetic tax claims before lending decisions.
            </p>
          </div>

          <div className="arch-pillar-card">
            <div className="pillar-icon bg-purple-glow">
              <ShieldCheck size={22} color="#8B5CF6" />
            </div>
            <h4 className="pillar-title">100% Explainable & Transparent</h4>
            <p className="pillar-desc">
              Every point in your 300-900 score is broken down into clear actionable drivers. If your score drops, 
              Manalix Technology shows you exactly which metric caused it and provides a step-by-step roadmap to repair it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
