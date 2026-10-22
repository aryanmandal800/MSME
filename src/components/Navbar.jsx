import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
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
          <a 
            href="#" 
            className="brand-logo" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            title="Manalix Technology Pvt Ltd - Home"
          >
            <img 
              src={logoImg} 
              alt="Manalix Technology Pvt Ltd" 
              className="navbar-brand-logo-img" 
            />
            <span className="logo-badge">100% MSME</span>
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
              How Score is Generated
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
              CIBIL vs Manalix for MSMEs
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
              <span>Check MSME Score Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
