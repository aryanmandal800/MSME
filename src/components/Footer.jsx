import React from 'react';
import { ShieldCheck, Lock, Building2, CheckCircle2 } from 'lucide-react';

export default function Footer({ onEvaluateClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      {/* Pre-Footer CTA Bar */}
      <div className="footer-pre-banner">
        <div className="pre-banner-inner">
          <div className="pre-banner-text">
            <h3>Ready to Discover Your MSME’s Borrowing Capacity?</h3>
            <p>Get your instant AI assessment, explainable factors, and bankable credit lines in under 2 minutes.</p>
          </div>
          <button className="btn-pre-cta" onClick={onEvaluateClick}>
            Check MSME FivoScore Free
          </button>
        </div>
      </div>

      <div className="footer-main-inner">
        <div className="footer-cols-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="brand-logo footer-logo">
              <div className="logo-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#FFFFFF" />
                  <path d="M9 7H23V11H13.8V14.5H20.5V18.5H13.8V25H9V7Z" fill="#1EA7FF" />
                  <circle cx="23.5" cy="22.5" r="3.5" fill="#00D2B4" />
                </svg>
              </div>
              <span className="logo-title text-white">Fivo<span className="logo-accent">Score</span></span>
            </div>
            <p className="footer-brand-desc">
              FivoScore Private Limited (FinAGG Technologies). India's premier AI-driven MSME credit assessment 
              and cash-flow underwriting platform, bridging the working capital gap for over 6.3 Crore micro, small, 
              and medium enterprises.
            </p>
            <div className="security-badges-row">
              <span className="sec-badge">
                <ShieldCheck size={14} color="#10B981" /> ISO 27001 Certified
              </span>
              <span className="sec-badge">
                <Lock size={14} color="#10B981" /> 256-Bit Bank Encryption
              </span>
              <span className="sec-badge">
                <ShieldCheck size={14} color="#10B981" /> RBI AA Compliant
              </span>
            </div>
          </div>

          {/* Col 2: MSME Credit & Government Schemes */}
          <div className="footer-col">
            <h4 className="footer-col-title">MSME Credit Schemes</h4>
            <ul className="footer-links-list">
              <li><a href="#msme-benefits-section" onClick={() => scrollTo('msme-benefits-section')}>CGTMSE Collateral-Free Loans</a></li>
              <li><a href="#msme-benefits-section" onClick={() => scrollTo('msme-benefits-section')}>Section 43B(h) Payment Protection</a></li>
              <li><a href="#msme-benefits-section" onClick={() => scrollTo('msme-benefits-section')}>TReDS Invoice Discounting</a></li>
              <li><a href="#msme-benefits-section" onClick={() => scrollTo('msme-benefits-section')}>Udyam MSME Classification</a></li>
              <li><a href="#msme-benefits-section" onClick={() => scrollTo('msme-benefits-section')}>Priority Sector Lending (PSL)</a></li>
            </ul>
          </div>

          {/* Col 3: Scoring & Platform */}
          <div className="footer-col">
            <h4 className="footer-col-title">MSME Assessment</h4>
            <ul className="footer-links-list">
              <li><a href="#factors-section" onClick={() => scrollTo('factors-section')}>All 6 Score Factors</a></li>
              <li><a href="#how-it-works-section" onClick={() => scrollTo('how-it-works-section')}>How MSME Score is Calculated</a></li>
              <li><a href="#simulator-section" onClick={() => scrollTo('simulator-section')}>Interactive Score Simulator</a></li>
              <li><a href="#directory-section" onClick={() => scrollTo('directory-section')}>Peer Benchmarking Directory</a></li>
              <li><a href="#comparison-section" onClick={() => scrollTo('comparison-section')}>Why FivoScore beats CIBIL for MSMEs</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div className="footer-col">
            <h4 className="footer-col-title">Corporate Headquarters</h4>
            <p className="footer-contact-item">
              <strong>FivoScore Private Limited</strong><br />
              FinAGG Towers, Plot 14, Sector 44,<br />
              Gurugram, NCR, Haryana - 122003
            </p>
            <p className="footer-contact-item mt-2">
              <strong>Regional MSME Hubs:</strong><br />
              BKC, Mumbai • Surat Textile Hub • Electronic City, Bengaluru
            </p>
            <p className="footer-contact-item mt-2">
              MSME Helpdesk: <strong>support@fivoscore.in</strong>
            </p>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} FivoScore Private Limited. Exclusively built for Indian Micro, Small &amp; Medium Enterprises.
          </div>
          <div className="footer-legal-links">
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <span>•</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>•</span>
            <a href="#security" onClick={(e) => e.preventDefault()}>Data Encryption &amp; ISO 27001</a>
            <span>•</span>
            <a href="#grievance" onClick={(e) => e.preventDefault()}>MSME Grievance Redressal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
