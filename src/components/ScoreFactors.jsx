import React, { useState } from 'react';
import { 
  Receipt, 
  Banknote, 
  ShieldCheck, 
  Network, 
  FileCheck, 
  Building2, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { FIVOSCORE_FACTORS_SPEC } from '../data/msmeData';

export default function ScoreFactors({ onExploreFactor }) {
  const [selectedFactorId, setSelectedFactorId] = useState('gst');

  const activeFactor = FIVOSCORE_FACTORS_SPEC.find(f => f.id === selectedFactorId) || FIVOSCORE_FACTORS_SPEC[0];

  const getIcon = (iconName, color) => {
    switch (iconName) {
      case 'Receipt': return <Receipt size={24} color={color} />;
      case 'Banknote': return <Banknote size={24} color={color} />;
      case 'ShieldCheck': return <ShieldCheck size={24} color={color} />;
      case 'Network': return <Network size={24} color={color} />;
      case 'FileCheck': return <FileCheck size={24} color={color} />;
      case 'Building2': return <Building2 size={24} color={color} />;
      default: return <Receipt size={24} color={color} />;
    }
  };

  return (
    <section className="section-container factors-section" id="factors-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <SlidersHorizontal size={15} />
            <span>Comprehensive Evaluation Matrix</span>
          </div>
          <h2 className="section-title">
            All Factors That Determine Your <span className="text-gradient">Score</span>
          </h2>
          <p className="section-subtitle">
            Unlike legacy credit systems that rely on static historical reports, Manalix dynamically measures 
            6 core operational pillars to evaluate true business creditworthiness.
          </p>
        </div>

        {/* 6 Factors Interactive Grid */}
        <div className="factors-overview-grid">
          {FIVOSCORE_FACTORS_SPEC.map((factor) => {
            const isSelected = factor.id === selectedFactorId;
            return (
              <div 
                key={factor.id}
                className={`factor-card-item ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedFactorId(factor.id)}
                role="button"
                tabIndex={0}
              >
                <div className="factor-card-top">
                  <div className="factor-icon-wrap" style={{ background: factor.bgLight }}>
                    {getIcon(factor.icon, factor.color)}
                  </div>
                  <span className="factor-weight-tag" style={{ color: factor.color, borderColor: factor.color }}>
                    Weight: {factor.weight}%
                  </span>
                </div>

                <h3 className="factor-title">{factor.title}</h3>
                <p className="factor-desc-short">{factor.description}</p>

                <div className="factor-card-footer">
                  <span className="inspect-factor-link" style={{ color: factor.color }}>
                    {isSelected ? 'Viewing Factor Breakdown' : 'Click to Inspect Details'} 
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel for Selected Factor */}
        <div className="factor-deep-dive-panel">
          <div className="deep-dive-header">
            <div className="deep-dive-icon-title">
              <div className="deep-dive-icon" style={{ background: activeFactor.bgLight }}>
                {getIcon(activeFactor.icon, activeFactor.color)}
              </div>
              <div>
                <span className="deep-dive-badge" style={{ color: activeFactor.color }}>
                  Core Pillar • {activeFactor.weight}% Total Weight
                </span>
                <h3 className="deep-dive-title">{activeFactor.title}</h3>
              </div>
            </div>

            <div className="deep-dive-why-box">
              <span className="why-label">Why Institutional Lenders Evaluate This:</span>
              <p className="why-text">{activeFactor.whyItMatters}</p>
            </div>
          </div>

          <div className="deep-dive-body-grid">
            {/* Left: Key Metrics Evaluated */}
            <div className="metrics-column">
              <h4 className="column-title">
                <Info size={16} color="#1EA7FF" /> Key Telemetry Metrics Evaluated
              </h4>
              <ul className="metrics-list-check">
                {activeFactor.keyMetrics.map((metric, i) => (
                  <li key={i} className="metric-check-item">
                    <CheckCircle2 size={16} color="#10B981" className="metric-check-icon" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Positive Signs vs Warning Flags */}
            <div className="insights-column">
              <div className="insight-box positive-box">
                <div className="insight-title text-success">
                  <CheckCircle2 size={16} color="#10B981" /> What Lenders Favor (High Score)
                </div>
                <p className="insight-body">{activeFactor.goodSigns}</p>
              </div>

              <div className="insight-box warning-box">
                <div className="insight-title text-warning">
                  <AlertTriangle size={16} color="#F59E0B" /> Underwriting Warning Flags (Score Penalty)
                </div>
                <p className="insight-body">{activeFactor.badSigns}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
