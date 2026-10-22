import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is FivoScore and how is it different from CIBIL?",
      a: "FivoScore is an AI-powered MSME credit assessment tool developed by FinAGG. While CIBIL focuses predominantly on past loan repayment history and often excludes thin-file borrowers, FivoScore calculates a dynamic score (300 to 900) by analyzing real-time GST filing punctuality, banking cash flow velocity, supply chain relationships, and statutory compliance."
    },
    {
      q: "Will checking my business FivoScore affect my commercial credit score?",
      a: "No. Checking your FivoScore is a zero-impact 'soft assessment'. It queries regulatory telemetry and Account Aggregator data under your explicit consent and does NOT post a hard commercial bureau inquiry to CIBIL or Experian."
    },
    {
      q: "What are the 6 core factors used to generate my FivoScore?",
      a: "The score is derived from: 1) GST Discipline & Filing Compliance (25%), 2) Bank Cash Flow Velocity & Liquidity (25%), 3) Commercial Bureau Tradelines (20%), 4) Supply Chain & Counterparty Quality (15%), 5) Statutory Compliance & Legal KYC (10%), and 6) Operational Vintage & Stability (5%)."
    },
    {
      q: "How can an MSME improve their FivoScore if it is below 700?",
      a: "The quickest ways to boost your score are: 1) File all GSTR-3B and GSTR-1 returns on time for at least 6 consecutive months, 2) Avoid NACH or cheque bounces by maintaining an Average Monthly Balance equivalent to 15 days of operating expenses, 3) Settle commercial lines with 0 Days Past Due (DPD), and 4) Clear any pending MCA annual secretarial filings."
    },
    {
      q: "Can I search for any business using GSTIN, PAN, or CIN?",
      a: "Yes. Our search engine allows you to input any registered Firm Name, 15-digit GSTIN, 10-digit PAN, or 21-digit CIN. The system cross-references national registries to generate an explainable, deterministic underwriting evaluation."
    },
    {
      q: "How does the pre-approved credit facility work after FivoScore generation?",
      a: "Once your score is calculated, our underwriting algorithm translates your financial capacity into a pre-approved unsecured credit limit (e.g. ₹45 Lakhs). Through our integrated consortium of regulated partner banks and NBFCs (including FinAGG and Tata Capital), you can initiate instant digital disbursal without physical branch visits."
    },
    {
      q: "Is my business data and banking information secure?",
      a: "Yes. FivoScore is ISO 27001 certified and operates under the Reserve Bank of India (RBI) Account Aggregator regulatory framework. All telemetry is encrypted in transit and at rest using 256-bit bank-grade TLS 1.3 cryptography."
    }
  ];

  return (
    <section className="section-container faq-section" id="faq-section">
      <div className="section-inner max-w-4xl">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <HelpCircle size={15} />
            <span>Knowledge Base</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about FivoScore assessment, factors, and MSME capital access.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={18} color="#1EA7FF" /> : <ChevronDown size={18} color="#002E4B" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
