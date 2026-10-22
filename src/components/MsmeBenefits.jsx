import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Coins, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  BadgeCheck
} from 'lucide-react';

export default function MsmeBenefits({ onEvaluateClick }) {
  const benefits = [
    {
      title: "Collateral-Free Loans (CGTMSE)",
      desc: "Unlock ₹10 Lakhs up to ₹5 Crores in unsecured credit lines without pledging land, machinery, or residential collateral.",
      stat: "Up to ₹5 Cr",
      statLabel: "Zero Collateral",
      badge: "Govt Backed",
      icon: ShieldCheck,
      color: "#1EA7FF",
      bgLight: "rgba(30, 167, 255, 0.1)"
    },
    {
      title: "Lower Interest Rates (PSL)",
      desc: "High FivoScores qualify under RBI Priority Sector Lending (PSL), slashing interest rates by 1.5% to 3.0% across leading banks.",
      stat: "10.25% p.a.",
      statLabel: "Starting ROI",
      badge: "Interest Subsidy",
      icon: Coins,
      color: "#10B981",
      bgLight: "rgba(16, 185, 129, 0.1)"
    },
    {
      title: "Section 43B(h) Payment Protection",
      desc: "Verify your Micro/Small Udyam status so your corporate buyers are legally mandated to clear your invoices within 45 days.",
      stat: "45 Days",
      statLabel: "Mandated Settlement",
      badge: "Income Tax Law",
      icon: Clock,
      color: "#F59E0B",
      bgLight: "rgba(245, 158, 11, 0.1)"
    },
    {
      title: "TReDS & GeM Invoice Discounting",
      desc: "Discount unpaid receivables from central PSUs and corporate anchors within 24 hours via integrated TReDS exchanges.",
      stat: "24 Hours",
      statLabel: "Cash Conversion",
      badge: "Instant Liquidity",
      icon: Zap,
      color: "#6366F1",
      bgLight: "rgba(99, 102, 241, 0.1)"
    }
  ];

  return (
    <section className="section-container msme-benefits-section" id="msme-benefits-section">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <Building2 size={15} />
            <span>Dedicated MSME Growth Suite</span>
          </div>
          <h2 className="section-title">
            How FivoScore Empowers <span className="text-gradient">Every Indian MSME</span>
          </h2>
          <p className="section-subtitle">
            Designed exclusively for Micro, Small, and Medium Enterprises. Turn your regular GST filings 
            and bank deposits into pre-approved, collateral-free credit from India's premier banking consortium.
          </p>
        </div>

        {/* 4 Core MSME Advantage Cards */}
        <div className="msme-benefits-grid">
          {benefits.map((b, i) => {
            const IconComponent = b.icon;
            return (
              <div key={i} className="msme-benefit-card">
                <div className="benefit-card-top">
                  <div className="benefit-icon-box" style={{ background: b.bgLight }}>
                    <IconComponent size={24} color={b.color} />
                  </div>
                  <span className="benefit-badge" style={{ color: b.color, borderColor: b.color }}>
                    {b.badge}
                  </span>
                </div>

                <div className="benefit-stat-box">
                  <span className="benefit-stat-num">{b.stat}</span>
                  <span className="benefit-stat-lbl">{b.statLabel}</span>
                </div>

                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-desc">{b.desc}</p>

                <div className="benefit-card-footer">
                  <button className="btn-benefit-action" onClick={onEvaluateClick}>
                    Check Your MSME Eligibility <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* MSME Udyam Categories Guide Banner */}
        <div className="msme-categories-banner">
          <div className="categories-banner-header">
            <div className="cat-header-left">
              <BadgeCheck size={24} color="#1EA7FF" />
              <div>
                <h3 className="cat-title">Official MSME Classification Benchmarks (Government of India)</h3>
                <p className="cat-sub">FivoScore automatically maps your GST and tax filings to your statutory Udyam bracket:</p>
              </div>
            </div>
            <button className="btn-primary" onClick={onEvaluateClick}>
              Assess Your MSME Category
            </button>
          </div>

          <div className="categories-cards-row">
            <div className="cat-card">
              <div className="cat-name">Micro Enterprise</div>
              <div className="cat-criteria">
                <span>Investment in Plant: <strong>≤ ₹1 Crore</strong></span>
                <span>Annual Turnover: <strong>≤ ₹5 Crores</strong></span>
              </div>
              <div className="cat-benefit-tag">Priority CGTMSE 85% Guarantee</div>
            </div>

            <div className="cat-card highlighted">
              <div className="cat-badge-popular">Most Evaluated</div>
              <div className="cat-name">Small Enterprise</div>
              <div className="cat-criteria">
                <span>Investment in Plant: <strong>≤ ₹10 Crores</strong></span>
                <span>Annual Turnover: <strong>≤ ₹50 Crores</strong></span>
              </div>
              <div className="cat-benefit-tag">Pre-Approved Lines up to ₹1.5 Cr</div>
            </div>

            <div className="cat-card">
              <div className="cat-name">Medium Enterprise</div>
              <div className="cat-criteria">
                <span>Investment in Plant: <strong>≤ ₹50 Crores</strong></span>
                <span>Annual Turnover: <strong>≤ ₹250 Crores</strong></span>
              </div>
              <div className="cat-benefit-tag">Structured Working Capital & TReDS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
