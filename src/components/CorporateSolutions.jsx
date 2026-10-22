import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  Network, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  LineChart, 
  Zap,
  Lock,
  Code2
} from 'lucide-react';

export default function CorporateSolutions({ onOpenEvaluate }) {
  return (
    <section className="section-container corporate-section" id="corporate-section">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <Building size={15} />
            <span>Enterprise & Anchor Solutions</span>
          </div>
          <h2 className="section-title">
            Manalix for <span className="text-gradient">Corporates, Anchors & Lenders</span>
          </h2>
          <p className="section-subtitle">
            Powering automated vendor due diligence, supply chain invoice discounting, 
            and dealer network risk monitoring for India's leading conglomerates and financial institutions.
          </p>
        </div>

        {/* 3 Core Enterprise Solutions */}
        <div className="corporate-cards-grid">
          {/* Card 1: Vendor Due Diligence */}
          <div className="corp-card">
            <div className="corp-icon-box bg-blue-tint">
              <ShieldCheck size={24} color="#1EA7FF" />
            </div>
            <h3 className="corp-card-title">Vendor & Supplier Onboarding Due Diligence</h3>
            <p className="corp-card-desc">
              Validate potential suppliers in seconds before awarding procurement tenders. Eliminate 
              shell vendors, verify 24-month GST discipline, and ensure zero pending NCLT insolvency proceedings.
            </p>
            <ul className="corp-feature-list">
              <li><CheckCircle2 size={15} color="#10B981" /> Automated CBDT PAN & MCA21 Director Verification</li>
              <li><CheckCircle2 size={15} color="#10B981" /> 2B vs 3B ITC Reconciliation Risk Flagging</li>
              <li><CheckCircle2 size={15} color="#10B981" /> Real-time GSTIN cancellation & suspension telemetry</li>
            </ul>
          </div>

          {/* Card 2: Dealer & Distributor Financing */}
          <div className="corp-card">
            <div className="corp-icon-box bg-teal-tint">
              <Network size={24} color="#00D2B4" />
            </div>
            <h3 className="corp-card-title">Dealer Network & Supply Chain Financing (SCF)</h3>
            <p className="corp-card-desc">
              Empower your dealership network with instantaneous working capital limits. Lenders extend 
              unsecured credit directly to your verified dealers based on Manalix trade velocity.
            </p>
            <ul className="corp-feature-list">
              <li><CheckCircle2 size={15} color="#10B981" /> Pre-approved inventory & invoice discounting limits</li>
              <li><CheckCircle2 size={15} color="#10B981" /> Real-time Account Aggregator cash velocity monitoring</li>
              <li><CheckCircle2 size={15} color="#10B981" /> Automated tripartite escrow and repayment settlements</li>
            </ul>
          </div>

          {/* Card 3: Early Warning System (EWS) */}
          <div className="corp-card">
            <div className="corp-icon-box bg-purple-tint">
              <LineChart size={24} color="#8B5CF6" />
            </div>
            <h3 className="corp-card-title">Portfolio Early Warning System (EWS)</h3>
            <p className="corp-card-desc">
              Continuous 24/7 telemetry monitoring across active borrower and vendor portfolios. Get 
              instant alerts upon missed GSTR-3B filings, unusual outward cheque bounces, or litigation notices.
            </p>
            <ul className="corp-feature-list">
              <li><CheckCircle2 size={15} color="#10B981" /> Monthly delinquency & default risk prediction</li>
              <li><CheckCircle2 size={15} color="#10B981" /> Webhook notifications for material regulatory events</li>
              <li><CheckCircle2 size={15} color="#10B981" /> Automated credit limit recalibration on deteriorating telemetry</li>
            </ul>
          </div>
        </div>

        {/* Enterprise API Integration Banner */}
        <div className="enterprise-api-banner">
          <div className="api-banner-left">
            <div className="api-badge">
              <Code2 size={15} color="#1EA7FF" />
              <span>Developer-Ready Underwriting REST API</span>
            </div>
            <h3 className="api-headline">Integrate Manalix Directly Into Your LOS / LMS</h3>
            <p className="api-desc">
              Plug Manalix's AI decisioning engine into your existing loan origination system or ERP 
              with our secured REST APIs, webhooks, and SDKs. Process over 50,000 corporate assessments per hour.
            </p>
            <div className="api-cta-row">
              <button className="btn-primary" onClick={onOpenEvaluate}>
                Request Enterprise API Sandbox Access <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="api-banner-right">
            <div className="code-snippet-box">
              <div className="code-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="code-filename">POST /v2/underwrite/manalix</span>
              </div>
              <pre className="code-content">
{`// Sample Enterprise Underwriting Payload
{
  "entity_id": "27AABCU9603R1ZM",
  "identifier_type": "GSTIN",
  "consent_token": "usr_aa_token_88912",
  "include_factors": true,
  "generate_sanction_memo": true
}

// Response (HTTP 200 OK)
{
  "score": 785,
  "tier": "A+ Prime",
  "preapproved_limit": 4500000,
  "ability_to_pay": 88,
  "intention_to_pay": 94,
  "status": "APPROVED"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
