import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Menu, 
  X, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  ExternalLink,
  Coins
} from 'lucide-react';

export default function Navbar({ onEvaluateClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <div className="brand-group">
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="logo-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#002E4B" />
                <path d="M9 7H23V11H13.8V14.5H20.5V18.5H13.8V25H9V7Z" fill="#1EA7FF" />
                <circle cx="23.5" cy="22.5" r="3.5" fill="#00D2B4" />
              </svg>
            </div>
            <div className="logo-text-wrap">
              <span className="logo-title">Fivo<span className="logo-accent">Score</span></span>
              <span className="logo-badge">100% MSME</span>
            </div>
          </a>

          {/* Desktop Nav Links (100% MSME Focused) */}
          <nav className="desktop-nav">
            <button 
              className="nav-link active"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              MSME Assessment
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('factors-section')}
            >
              Score Factors
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('how-it-works-section')}
            >
              How It Works
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('simulator-section')}
            >
              Score Simulator
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('directory-section')}
            >
              MSME Directory
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('msme-benefits-section')}
            >
              MSME Loans & Benefits
            </button>
          </nav>
        </div>

        {/* CTA & Actions */}
        <div className="nav-actions">
          <button 
            className="btn-evaluate"
            onClick={onEvaluateClick}
            id="nav-evaluate-btn"
          >
            <Search size={15} />
            <span>Check MSME Score - It's Free</span>
          </button>

          {/* Mobile menu hamburger toggle */}
          <button 
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} color="#002E4B" /> : <Menu size={24} color="#002E4B" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-items">
            <button 
              className="mobile-nav-link active"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
            >
              MSME Credit Assessment
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('factors-section')}
            >
              All 6 Scoring Factors
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('how-it-works-section')}
            >
              How FivoScore is Generated
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('simulator-section')}
            >
              Interactive Score Simulator
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('directory-section')}
            >
              Verified MSME Directory
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('msme-benefits-section')}
            >
              MSME Loans & CGTMSE Benefits
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('comparison-section')}
            >
              CIBIL vs FivoScore for MSMEs
            </button>
            <button 
              className="mobile-nav-link"
              onClick={() => scrollToSection('faq-section')}
            >
              MSME FAQs
            </button>
            <button 
              className="btn-evaluate full-width mt-4"
              onClick={() => { setMobileMenuOpen(false); onEvaluateClick(); }}
            >
              <Search size={16} />
              <span>Check MSME FivoScore Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
