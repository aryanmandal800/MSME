import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssessmentReportModal from './components/AssessmentReportModal';
import HowItWorks from './components/HowItWorks';
import ScoreFactors from './components/ScoreFactors';
import ScoreSimulator from './components/ScoreSimulator';
import MsmeDirectory from './components/MsmeDirectory';
import MsmeBenefits from './components/MsmeBenefits';
import ComparisonSection from './components/ComparisonSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { PRELOADED_MSMES } from './data/msmeData';

export default function App() {
  const [selectedMSME, setSelectedMSME] = useState(null);
  const searchInputRef = useRef(null);

  const handleEvaluateClick = () => {
    // Focus search box or open Madan Enterprises as default showcase
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      setSelectedMSME(PRELOADED_MSMES[0]);
    }
  };

  const handleSelectMSME = (msme) => {
    setSelectedMSME(msme);
  };

  return (
    <div className="app-main-wrapper">
      {/* Top MSME Navigation */}
      <Navbar 
        onEvaluateClick={handleEvaluateClick}
        onSelectEnterprise={handleSelectMSME}
      />

      {/* Main Content Sections (100% MSME Dedicated) */}
      <main>
        {/* Hero Section with Live Search by Firm / GST / PAN / CIN */}
        <Hero 
          onSelectMSME={handleSelectMSME}
          searchInputRef={searchInputRef}
        />

        {/* MSME Benefits, CGTMSE Guarantee & Udyam Classification */}
        <MsmeBenefits 
          onEvaluateClick={handleEvaluateClick}
        />

        {/* Core Pillars: All Factors That Determine MSME Score */}
        <ScoreFactors 
          onExploreFactor={(factorId) => {}}
        />

        {/* How MSME Score is Generated (Algorithmic Methodology) */}
        <HowItWorks />

        {/* Interactive MSME Score Simulator */}
        <ScoreSimulator 
          onOpenAssessmentWithSimulated={handleSelectMSME}
        />

        {/* Verified MSME Directory & Peer Benchmark Browser */}
        <MsmeDirectory 
          onSelectMSME={handleSelectMSME}
        />

        {/* CIBIL vs Score Comparison Table for MSMEs */}
        <ComparisonSection />

        {/* Frequently Asked Questions by MSME Owners */}
        <FaqSection />
      </main>

      {/* Enterprise MSME Footer */}
      <Footer onEvaluateClick={handleEvaluateClick} />

      {/* Full MSME Assessment Report Modal / Drawer */}
      {selectedMSME && (
        <AssessmentReportModal 
          msme={selectedMSME}
          onClose={() => setSelectedMSME(null)}
        />
      )}
    </div>
  );
}
