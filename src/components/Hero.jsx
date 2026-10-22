import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Sparkles, 
  Building, 
  CreditCard, 
  FileCheck2, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Coins
} from 'lucide-react';
import { PRELOADED_MSMES, searchMSMEs } from '../data/msmeData';

export default function Hero({ onSelectMSME, searchInputRef }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // all, firm, gst, pan, cin
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update suggestions when search query or tab changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const results = searchMSMEs(searchQuery);
    setSuggestions(results);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const results = searchMSMEs(searchQuery);
    if (results.length > 0) {
      onSelectMSME(results[0]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (msme) => {
    setSearchQuery(msme.firmName);
    setShowDropdown(false);
    onSelectMSME(msme);
  };

  const sampleChips = [
    { label: "Madan Enterprises", hint: "Auto Components • GST: 27AABCU...", id: "fs-001" },
    { label: "Apex Steel & Infra", hint: "Steel & Fabrication • ₹1.2 Cr Line", id: "fs-002" },
    { label: "Shree Ganesh Textiles", hint: "Textile Mill • Surat", id: "fs-003" },
    { label: "TechNova Solutions", hint: "IT SaaS • Bengaluru", id: "fs-004" },
    { label: "Bharat Logistics", hint: "Cold Chain • Chennai", id: "fs-005" },
    { label: "Kaveri Agro Foods", hint: "Food Processing • Varanasi", id: "fs-006" }
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Top Clean AI Badge */}
        <div className="hero-badge-container">
          <div className="hero-badge">
            <Sparkles size={15} className="badge-sparkle-icon" />
            <span>#1 AI Powered Business Assessment tool for MSMEs 🚀</span>
          </div>
        </div>

        {/* Main Hero Heading */}
        <h1 className="hero-headline">
          AI-Powered Business Assessment<br />
          tool for <span className="headline-accent">MSMEs</span>
        </h1>

        {/* Subtitle Description */}
        <p className="hero-subtitle">
          Manalix Technology provides instant, AI-powered insights on your business’s financial health, compliance, 
          and pre-approved credit lines from ₹10 Lakhs to ₹5 Crores.
        </p>

        {/* Clean & Elevated Search Engine */}
        <div className="hero-search-wrapper" ref={dropdownRef}>
          {/* Subtle Identifier Selector */}
          <div className="search-tab-bar">
            <button 
              type="button"
              className={`search-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Identifiers
            </button>
            <button 
              type="button"
              className={`search-tab ${activeTab === 'firm' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('firm');
                if (!searchQuery) setSearchQuery('Madan Enterprises');
              }}
            >
              Firm Name
            </button>
            <button 
              type="button"
              className={`search-tab ${activeTab === 'gst' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('gst');
                setSearchQuery('27AABCU9603R1ZM');
              }}
            >
              GSTIN
            </button>
            <button 
              type="button"
              className={`search-tab ${activeTab === 'pan' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('pan');
                setSearchQuery('AABCU9603R');
              }}
            >
              PAN
            </button>
            <button 
              type="button"
              className={`search-tab ${activeTab === 'cin' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('cin');
                setSearchQuery('U28112MH2016PTC284912');
              }}
            >
              CIN
            </button>
          </div>

          {/* Elevated Search Bar */}
          <form onSubmit={handleSearchSubmit} className="search-form-card">
            <div className="input-prefix-icon">
              <Building size={18} color="#002E4B" opacity={0.6} />
            </div>
            <input 
              ref={searchInputRef}
              type="text"
              id="searchBox"
              className="main-search-input"
              placeholder="Enter your Firm Name / GSTN / PAN / CIN Number"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              autoComplete="off"
            />
            <button 
              type="submit" 
              className="search-submit-btn" 
              aria-label="Search Score"
              id="hero-search-submit"
            >
              <Search size={18} color="#FFFFFF" />
            </button>
          </form>

          {/* Autocomplete Suggestions Menu */}
          {showDropdown && suggestions.length > 0 && (
            <div className="search-dropdown-menu">
              <div className="dropdown-header">
                <span>Matching Verified MSME Entities ({suggestions.length})</span>
                <span>Click to view credit report</span>
              </div>
              <div className="dropdown-list">
                {suggestions.map((item) => (
                  <div 
                    key={item.id} 
                    className="dropdown-item"
                    onClick={() => handleSelect(item)}
                  >
                    <div className="dropdown-item-left">
                      <div className="dropdown-item-title">
                        <span className="item-name">{item.firmName}</span>
                        <span className="item-badge">{item.category}</span>
                      </div>
                      <div className="dropdown-item-meta">
                        <span>GSTIN: <strong>{item.gstin}</strong></span>
                        <span>•</span>
                        <span>PAN: {item.pan}</span>
                        <span>•</span>
                        <span>{item.industry}</span>
                      </div>
                    </div>
                    <div className="dropdown-item-right">
                      <div className="item-score-pill">
                        <span className="score-num">{item.fivoScore}</span>
                        <span className="score-lbl">Score</span>
                      </div>
                      <ArrowRight size={16} className="item-arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Terms & Conditions Acceptance Notice */}
          <div className="tnc-notice">
            By searching, you accept our <a href="#terms" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions.</a>
          </div>

          {/* Clean Quick Sample Pills */}
          <div className="quick-chips-wrapper">
            <span className="chips-title">Instant sample MSME lookups:</span>
            <div className="chips-flex">
              {sampleChips.map((chip) => (
                <button 
                  key={chip.id}
                  type="button"
                  className="quick-chip-btn"
                  onClick={() => {
                    const found = PRELOADED_MSMES.find(m => m.id === chip.id);
                    if (found) handleSelect(found);
                  }}
                  title={chip.hint}
                >
                  <span className="chip-bullet" />
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clean, Unified Hero Metric Deck */}
        <div className="hero-metrics-deck">
          {/* Card 1: 10 Lakhs+ MSMEs Evaluated */}
          <div className="hero-stat-card">
            <div className="stat-icon-wrap bg-green-tint">
              <TrendingUp size={22} />
            </div>
            <div>
              <div className="stat-headline">10 Lakhs+</div>
              <div className="stat-sub">MSMEs Evaluated</div>
            </div>
          </div>

          {/* Card 2: 5 Lakhs+ Completed Assessment */}
          <div className="hero-stat-card">
            <div className="stat-icon-wrap bg-purple-tint">
              <FileCheck2 size={22} />
            </div>
            <div>
              <div className="stat-headline">5 Lakhs+</div>
              <div className="stat-sub">Assessments Completed</div>
            </div>
          </div>

          {/* Card 3: Loans Disbursed */}
          <div className="hero-stat-card">
            <div className="stat-icon-wrap bg-orange-tint">
              <Coins size={22} />
            </div>
            <div>
              <div className="stat-headline">1.3 Lakhs+</div>
              <div className="stat-sub">MSME Loans Funded</div>
            </div>
          </div>

          {/* Card 4: Live Sample Preview Widget */}
          <div 
            className="sample-fivo-card"
            onClick={() => {
              const madan = PRELOADED_MSMES[0];
              onSelectMSME(madan);
            }}
            role="button"
            tabIndex={0}
            title="Click to view full assessment report"
          >
            <div className="sample-card-header">
              <div>
                <span className="sample-firm-name">Madan Enterprises</span>
                <span className="sample-industry-tag">Auto Ancillaries • Pune</span>
              </div>
              <div className="sample-score-badge">
                <span className="sample-score-val">785</span>
                <span className="sample-score-sub"> / 900</span>
              </div>
            </div>

            <div>
              <div className="factors-heading">Factors affecting Score:</div>
              <div className="factors-tags-cloud">
                <span className="factor-tag">
                  <CheckCircle2 size={11} color="#1EA7FF" /> Bureau Info
                </span>
                <span className="factor-tag">
                  <CheckCircle2 size={11} color="#10B981" /> Compliance
                </span>
                <span className="factor-tag">
                  <CheckCircle2 size={11} color="#6366F1" /> Filing Status
                </span>
                <span className="factor-tag">
                  <CheckCircle2 size={11} color="#F59E0B" /> Sales Turnover
                </span>
              </div>
            </div>

            <div className="sample-card-footer">
              <span className="sample-footer-text">Pre-approved: <strong>₹45 Lakhs Line</strong></span>
              <span className="sample-inspect-cta">Inspect <ArrowRight size={13} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
