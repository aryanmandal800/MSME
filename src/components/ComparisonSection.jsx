import React from 'react';
import { Check, X, ArrowRight, ShieldCheck, Scale } from 'lucide-react';
import { COMPARISON_DATA } from '../data/msmeData';

export default function ComparisonSection() {
  return (
    <section className="section-container comparison-section" id="comparison-section">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <Scale size={15} />
            <span>The Underwriting Paradigm Shift</span>
          </div>
          <h2 className="section-title">
            Traditional Bureau (CIBIL) vs <span className="text-gradient">Manalix Technology AI Model</span>
          </h2>
          <p className="section-subtitle">
            Why 6.3 Crore Indian MSMEs need dynamic cash-flow underwriting instead of 
            archaic collateral-based credit scoring models.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-feature">Assessment Dimension</th>
                <th className="th-traditional">Traditional Credit Bureaus (CIBIL / Experian)</th>
                <th className="th-fivoscore">
                  <div className="th-fivoscore-badge">
                    <span>Manalix Technology AI Model</span>
                    <span className="recommended-tag">Next-Gen</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                  <td className="td-feature">
                    <strong>{row.feature}</strong>
                  </td>
                  <td className="td-traditional">
                    <div className="td-content-wrap">
                      <span className="cross-bullet">✕</span>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="td-fivoscore">
                    <div className="td-content-wrap">
                      <span className="check-bullet">✓</span>
                      <span>{row.fivoscore}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner */}
        <div className="comparison-bottom-cta">
          <div className="cta-left">
            <ShieldCheck size={28} color="#10B981" />
            <div>
              <h4 className="cta-heading">Does checking my Score impact my credit record?</h4>
              <p className="cta-desc">
                <strong>No.</strong> Manalix Technology performs a zero-impact "soft regulatory query" via GSTN and consent-based Account Aggregator. 
                Your commercial CIBIL score remains completely unaffected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
