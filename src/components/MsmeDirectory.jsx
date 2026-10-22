import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  CreditCard, 
  ArrowRight, 
  ShieldCheck, 
  Filter, 
  Search,
  Sparkles
} from 'lucide-react';
import { PRELOADED_MSMES } from '../data/msmeData';

export default function MsmeDirectory({ onSelectMSME }) {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');

  const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'auto', label: 'Auto Ancillaries' },
    { id: 'steel', label: 'Steel & Fabrication' },
    { id: 'textiles', label: 'Textiles & Mills' },
    { id: 'it', label: 'IT SaaS & Tech' },
    { id: 'logistics', label: 'Logistics & Cold Chain' },
    { id: 'agro', label: 'Agro & Food Processing' }
  ];

  const filteredList = PRELOADED_MSMES.filter((item) => {
    const matchesIndustry = 
      selectedIndustry === 'all' ||
      (selectedIndustry === 'auto' && item.industry.toLowerCase().includes('auto')) ||
      (selectedIndustry === 'steel' && item.industry.toLowerCase().includes('steel')) ||
      (selectedIndustry === 'textiles' && item.industry.toLowerCase().includes('textile')) ||
      (selectedIndustry === 'it' && item.industry.toLowerCase().includes('saas')) ||
      (selectedIndustry === 'logistics' && item.industry.toLowerCase().includes('logistics')) ||
      (selectedIndustry === 'agro' && item.industry.toLowerCase().includes('agro'));

    const matchesSearch = 
      !searchFilter.trim() ||
      item.firmName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.gstin.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.pan.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.cin.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesIndustry && matchesSearch;
  });

  return (
    <section className="section-container directory-section" id="directory-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <Building2 size={15} />
            <span>Verified Benchmarking Pool</span>
          </div>
          <h2 className="section-title">
            Explore Pre-Evaluated <span className="text-gradient">MSME Portfolios</span>
          </h2>
          <p className="section-subtitle">
            Browse real-world evaluated profiles across manufacturing, services, and trade hubs. 
            Click any company to inspect their full statutory metrics, GST discipline, and pre-approved lines.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="directory-filters-bar">
          <div className="industry-pills-row">
            {industries.map((ind) => (
              <button
                key={ind.id}
                type="button"
                className={`industry-pill-btn ${selectedIndustry === ind.id ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(ind.id)}
              >
                {ind.label}
              </button>
            ))}
          </div>

          <div className="directory-search-input-wrap">
            <Search size={16} color="#002E4B" opacity={0.6} />
            <input 
              type="text" 
              className="directory-search-input"
              placeholder="Filter by Firm, GST, PAN, CIN..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
        </div>

        {/* MSME Cards Grid */}
        <div className="directory-cards-grid">
          {filteredList.map((item) => (
            <div 
              key={item.id} 
              className="msme-portfolio-card"
              onClick={() => onSelectMSME(item)}
              role="button"
              tabIndex={0}
            >
              <div className="portfolio-card-header">
                <div className="card-firm-title-wrap">
                  <span className="card-category-tag">{item.category}</span>
                  <h3 className="card-firm-name">{item.firmName}</h3>
                  <span className="card-trade-name">Trade: {item.tradeName}</span>
                </div>
                <div className="card-score-pill">
                  <span className="pill-num">{item.manalixScore || item.score}</span>
                  <span className="pill-sub">Score</span>
                </div>
              </div>

              <div className="card-meta-list">
                <div className="meta-line">
                  <span className="meta-k">GSTIN:</span>
                  <span className="meta-v mono">{item.gstin}</span>
                </div>
                <div className="meta-line">
                  <span className="meta-k">PAN:</span>
                  <span className="meta-v mono">{item.pan}</span>
                </div>
                <div className="meta-line">
                  <span className="meta-k">CIN:</span>
                  <span className="meta-v mono">{item.cin}</span>
                </div>
                <div className="meta-line">
                  <span className="meta-k">Turnover:</span>
                  <span className="meta-v bold">{item.financialSummary.annualTurnover} ({item.financialSummary.yoyGrowth})</span>
                </div>
              </div>

              <div className="card-loan-offer-row">
                <div className="offer-col">
                  <span className="offer-lbl">Pre-Approved Facility</span>
                  <span className="offer-val text-brand">{item.preApprovedLoan.formattedAmount}</span>
                </div>
                <div className="offer-col text-right">
                  <span className="offer-lbl">Indicative ROI</span>
                  <span className="offer-val">{item.preApprovedLoan.roi}</span>
                </div>
              </div>

              <div className="card-action-footer">
                <span className="card-action-text">Inspect Full Underwriting Report</span>
                <ArrowRight size={15} className="card-action-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
