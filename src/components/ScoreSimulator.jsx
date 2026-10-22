import React, { useState } from 'react';
import { 
  Sliders, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  CreditCard, 
  CheckCircle2, 
  RotateCcw,
  ShieldCheck
} from 'lucide-react';

export default function ScoreSimulator({ onOpenAssessmentWithSimulated }) {
  // Simulator State Controls
  const [gstOnTimeMonths, setGstOnTimeMonths] = useState(24); // out of 24
  const [avgBankBalanceLakhs, setAvgBankBalanceLakhs] = useState(18); // ₹ Lakhs
  const [bureauCmrRank, setBureauCmrRank] = useState(2); // 1 (best) to 6 (worst)
  const [vintageYears, setVintageYears] = useState(7); // Years
  const [buyerConcentration, setBuyerConcentration] = useState(35); // % top 5
  const [hasNoLegalDisputes, setHasNoLegalDisputes] = useState(true);

  // Reset to default
  const handleReset = () => {
    setGstOnTimeMonths(24);
    setAvgBankBalanceLakhs(18);
    setBureauCmrRank(2);
    setVintageYears(7);
    setBuyerConcentration(35);
    setHasNoLegalDisputes(true);
  };

  // Algorithmic calculation of simulated Manalix Score (300 to 900)
  // GST: 25% weight -> up to 150 pts
  const gstPoints = Math.round((gstOnTimeMonths / 24) * 150);

  // Bank Balance: 25% weight -> up to 150 pts
  const bankPoints = Math.round(Math.min(150, (avgBankBalanceLakhs / 40) * 150));

  // Bureau CMR: 20% weight -> up to 120 pts
  // CMR 1: 120, CMR 2: 105, CMR 3: 90, CMR 4: 70, CMR 5: 50, CMR 6: 30
  const cmrPointsMap = { 1: 120, 2: 105, 3: 90, 4: 70, 5: 50, 6: 30 };
  const bureauPoints = cmrPointsMap[bureauCmrRank] || 80;

  // Supply Chain Concentration: 15% weight -> up to 90 pts (lower concentration is better)
  const supplyPoints = Math.round(Math.max(30, 90 - ((buyerConcentration - 20) / 60) * 60));

  // Statutory: 10% weight -> up to 60 pts
  const statutoryPoints = hasNoLegalDisputes ? 60 : 25;

  // Vintage: 5% weight -> up to 30 pts
  const vintagePoints = Math.round(Math.min(30, (vintageYears / 10) * 30));

  // Base score 300 + accumulated points (max 600) -> 300 to 900
  const simulatedScore = Math.min(900, Math.max(300, 300 + gstPoints + bankPoints + bureauPoints + supplyPoints + statutoryPoints + vintagePoints));

  // Derive eligibility
  let simulatedTier = "Tier B (Moderate Risk)";
  let estimatedLoanLakhs = Math.round((simulatedScore - 550) * 0.25);
  let estRoi = "13.50%";

  if (simulatedScore >= 800) {
    simulatedTier = "Tier A+ (Exceptional Prime)";
    estimatedLoanLakhs = Math.max(60, Math.round((simulatedScore - 700) * 0.6) + 50);
    estRoi = "10.25% - 10.75%";
  } else if (simulatedScore >= 750) {
    simulatedTier = "Tier A+ (Prime Credit)";
    estimatedLoanLakhs = Math.max(40, Math.round((simulatedScore - 700) * 0.4) + 30);
    estRoi = "10.75% - 11.50%";
  } else if (simulatedScore >= 700) {
    simulatedTier = "Tier A (Good Credit)";
    estimatedLoanLakhs = Math.max(25, Math.round((simulatedScore - 650) * 0.3) + 15);
    estRoi = "11.75% - 12.50%";
  } else if (simulatedScore >= 650) {
    simulatedTier = "Tier B+ (Satisfactory)";
    estimatedLoanLakhs = Math.max(15, Math.round((simulatedScore - 600) * 0.2) + 10);
    estRoi = "12.75% - 13.50%";
  } else {
    estimatedLoanLakhs = Math.max(5, estimatedLoanLakhs);
    estRoi = "14.50% - 16.00%";
  }

  return (
    <section className="section-container simulator-section" id="simulator-section">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">
            <Sliders size={15} />
            <span>Interactive Model Simulator</span>
          </div>
          <h2 className="section-title">
            MSME Score <span className="text-gradient">Underwriting Simulator</span>
          </h2>
          <p className="section-subtitle">
            Tweak key operational metrics below to observe in real-time how GST filing discipline, 
            cash buffers, and commercial credit conduct influence your borrowing eligibility.
          </p>
        </div>

        {/* Simulator Grid: Sliders on Left, Live Score on Right */}
        <div className="simulator-grid-card">
          {/* Controls Panel */}
          <div className="sim-controls-panel">
            <div className="sim-panel-top">
              <span className="sim-panel-title">Operational Levers</span>
              <button className="btn-sim-reset" onClick={handleReset} title="Reset sliders to benchmark">
                <RotateCcw size={14} /> Reset
              </button>
            </div>

            {/* Slider 1: GST 24M on time */}
            <div className="sim-control-item">
              <div className="sim-label-row">
                <span className="sim-field-label">GSTR-3B Punctual Filings (Last 24 Months)</span>
                <span className="sim-field-value">{gstOnTimeMonths} / 24 Months</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="24" 
                value={gstOnTimeMonths} 
                onChange={(e) => setGstOnTimeMonths(Number(e.target.value))}
                className="sim-slider"
              />
              <div className="sim-slider-ticks">
                <span>10 (Delayed)</span>
                <span>18 (Moderate)</span>
                <span>24 (100% Punctual)</span>
              </div>
            </div>

            {/* Slider 2: Average Monthly Bank Balance (ABB) */}
            <div className="sim-control-item">
              <div className="sim-label-row">
                <span className="sim-field-label">Average Monthly Bank Balance (ABB)</span>
                <span className="sim-field-value">₹{avgBankBalanceLakhs} Lakhs</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="50" 
                step="1"
                value={avgBankBalanceLakhs} 
                onChange={(e) => setAvgBankBalanceLakhs(Number(e.target.value))}
                className="sim-slider"
              />
              <div className="sim-slider-ticks">
                <span>₹2 Lakhs</span>
                <span>₹25 Lakhs</span>
                <span>₹50+ Lakhs</span>
              </div>
            </div>

            {/* Selector: Commercial Bureau CMR Rank */}
            <div className="sim-control-item">
              <div className="sim-label-row">
                <span className="sim-field-label">Commercial Bureau CMR Rank</span>
                <span className="sim-field-value">Rank CMR-{bureauCmrRank}</span>
              </div>
              <div className="cmr-buttons-row">
                {[1, 2, 3, 4, 5, 6].map((rank) => (
                  <button 
                    key={rank}
                    type="button"
                    className={`cmr-btn ${bureauCmrRank === rank ? 'active' : ''}`}
                    onClick={() => setBureauCmrRank(rank)}
                  >
                    CMR-{rank}
                  </button>
                ))}
              </div>
              <span className="sim-field-hint">CMR-1 to CMR-3 denotes Prime commercial repayment track.</span>
            </div>

            {/* Slider 3: Top 5 Buyers Concentration */}
            <div className="sim-control-item">
              <div className="sim-label-row">
                <span className="sim-field-label">Top 5 Buyers Concentration Ratio</span>
                <span className="sim-field-value">{buyerConcentration}% of Sales</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="85" 
                step="5"
                value={buyerConcentration} 
                onChange={(e) => setBuyerConcentration(Number(e.target.value))}
                className="sim-slider"
              />
              <div className="sim-slider-ticks">
                <span>15% (Diversified)</span>
                <span>50% (Standard)</span>
                <span>85% (High Risk)</span>
              </div>
            </div>

            {/* Slider 4: Vintage */}
            <div className="sim-control-item">
              <div className="sim-label-row">
                <span className="sim-field-label">Business Operational Vintage</span>
                <span className="sim-field-value">{vintageYears} Years Active</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="15" 
                value={vintageYears} 
                onChange={(e) => setVintageYears(Number(e.target.value))}
                className="sim-slider"
              />
            </div>

            {/* Checkbox: Legal disputes */}
            <div className="sim-checkbox-item">
              <label className="sim-checkbox-label">
                <input 
                  type="checkbox" 
                  checked={hasNoLegalDisputes}
                  onChange={(e) => setHasNoLegalDisputes(e.target.checked)}
                />
                <span>Clean MCA21 filings & zero active NCLT / recovery litigation</span>
              </label>
            </div>
          </div>

          {/* Results Display Panel */}
          <div className="sim-results-panel">
            <div className="sim-score-card">
              <span className="sim-card-heading">Projected Simulated Score</span>
              
              <div className="sim-score-display">
                <span className="sim-score-huge">{simulatedScore}</span>
                <span className="sim-score-denom">/ 900</span>
              </div>

              <div className="sim-tier-badge">
                <ShieldCheck size={16} />
                <span>{simulatedTier}</span>
              </div>

              <div className="sim-loan-result-box">
                <div className="loan-result-sub">Pre-Approved Working Capital Line:</div>
                <div className="loan-result-amount">₹{estimatedLoanLakhs} Lakhs</div>
                <div className="loan-result-roi">Indicative Interest Rate: <strong>{estRoi}</strong></div>
              </div>

              <div className="sim-breakdown-bars">
                <div className="sim-bar-row">
                  <span>GST Filing Discipline</span>
                  <span>{Math.round((gstPoints / 150) * 100)}%</span>
                </div>
                <div className="sim-bar-row">
                  <span>Bank Cash Flow Velocity</span>
                  <span>{Math.round((bankPoints / 150) * 100)}%</span>
                </div>
                <div className="sim-bar-row">
                  <span>Bureau Tradeline Health</span>
                  <span>{Math.round((bureauPoints / 120) * 100)}%</span>
                </div>
              </div>

              <div className="sim-action-box">
                <button 
                  className="btn-evaluate full-width"
                  onClick={() => {
                    const sample = {
                      id: 'simulated-sample',
                      firmName: 'Simulated Business Model',
                      tradeName: 'Simulated Trade Enterprise',
                      constitution: 'Private Limited',
                      category: estimatedLoanLakhs > 40 ? 'Small Enterprise' : 'Micro Enterprise',
                      industry: 'General Manufacturing & Engineering',
                      hsnSacCodes: ['8481', '7318', '8504'],
                      gstin: '27AABCS1234F1Z9',
                      pan: 'AABCS1234F',
                      cin: 'U74999MH2019PTC345678',
                      udyamNumber: 'UDYAM-MH-01-0098765',
                      dateOfIncorporation: `12 Oct ${2026 - vintageYears}`,
                      vintageYears: vintageYears,
                      registeredOffice: 'Industrial Estate, Andheri East, Mumbai, Maharashtra - 400093',
                      directors: ['Promoter Executive A', 'Promoter Executive B'],
                      manalixScore: simulatedScore,
                      score: simulatedScore,
                      scoreTier: simulatedTier,
                      riskRating: simulatedScore >= 750 ? 'Low Risk' : 'Moderate Risk',
                      percentile: Math.min(99, Math.round((simulatedScore / 900) * 100)),
                      abilityToPay: Math.round((bankPoints / 150) * 100),
                      intentionToPay: Math.round((gstPoints / 150) * 100),
                      preApprovedLoan: {
                        amount: estimatedLoanLakhs * 100000,
                        formattedAmount: `₹${estimatedLoanLakhs} Lakhs`,
                        roi: estRoi,
                        tenureMonths: 36,
                        monthlyEmi: `₹${Math.round(estimatedLoanLakhs * 3280).toLocaleString('en-IN')}`,
                        product: 'Pre-Approved MSME Working Capital'
                      },
                      financialSummary: {
                        annualTurnover: `₹${(estimatedLoanLakhs * 0.35).toFixed(1)} Cr`,
                        yoyGrowth: '+18.5%',
                        ebitdaMargin: '12.8%',
                        patMargin: '6.4%',
                        monthlyAverageBalance: `₹${avgBankBalanceLakhs} Lakhs`,
                        averageMonthlyInflow: `₹${(estimatedLoanLakhs * 0.35 / 12).toFixed(2)} Cr`,
                        totalDebtorDays: 40,
                        creditorDays: 48
                      },
                      factors: {
                        gstDiscipline: {
                          score: Math.round((gstPoints / 150) * 100),
                          weight: '25%',
                          status: gstOnTimeMonths === 24 ? 'Pristine' : 'Acceptable',
                          summary: `${gstOnTimeMonths}/24 monthly GSTR-3B filings completed on time.`,
                          metrics: [
                            { label: 'GSTR-3B Timeliness', value: `${gstOnTimeMonths}/24 on time`, badge: `${Math.round((gstOnTimeMonths/24)*100)}%` },
                            { label: 'ITC Reconciliation', value: '98.2% matched', badge: 'Clean' }
                          ],
                          details: 'Simulated parameters reflect consistent tax compliance and regular turnover movement.'
                        },
                        cashFlowVelocity: {
                          score: Math.round((bankPoints / 150) * 100),
                          weight: '25%',
                          status: avgBankBalanceLakhs >= 15 ? 'Healthy' : 'Moderate',
                          summary: `Average Monthly Balance of ₹${avgBankBalanceLakhs} Lakhs maintained.`,
                          metrics: [
                            { label: 'ABB Balance', value: `₹${avgBankBalanceLakhs} Lakhs`, badge: 'Maintained' },
                            { label: 'Inward Bounce Count', value: '0 in last 12 months', badge: 'Clean' }
                          ],
                          details: 'Adequate liquidity cushion to absorb working capital debtor cycles.'
                        },
                        bureauHealth: {
                          score: Math.round((bureauPoints / 120) * 100),
                          weight: '20%',
                          status: bureauCmrRank <= 3 ? 'Prime' : 'Acceptable',
                          summary: `Commercial CMR-${bureauCmrRank} ranking across active lines.`,
                          metrics: [
                            { label: 'Commercial CMR', value: `CMR-${bureauCmrRank}`, badge: 'Ranked' }
                          ],
                          details: 'Active commercial tradeline amortizing without critical 30+ DPD defaults.'
                        },
                        supplyChainQuality: {
                          score: Math.round((supplyPoints / 90) * 100),
                          weight: '15%',
                          status: buyerConcentration <= 40 ? 'Well Diversified' : 'Concentrated',
                          summary: `Top 5 buyers account for ${buyerConcentration}% of overall turnover.`,
                          metrics: [
                            { label: 'Top 5 Concentration', value: `${buyerConcentration}%`, badge: 'Calculated' }
                          ],
                          details: 'Moderate counterparty risk profile with regular debtor collections.'
                        },
                        statutoryKyc: {
                          score: hasNoLegalDisputes ? 95 : 65,
                          weight: '10%',
                          status: hasNoLegalDisputes ? 'Clean' : 'Notice Flagged',
                          summary: hasNoLegalDisputes ? 'All statutory MCA and CBDT filings clear.' : 'Discrepancy noted in regulatory audit.',
                          metrics: [
                            { label: 'CBDT PAN', value: 'Active', badge: 'Verified' },
                            { label: 'MCA Registry', value: 'Active', badge: 'Valid' }
                          ],
                          details: 'Verification cross-checks confirmed against official Indian government databases.'
                        },
                        vintageStability: {
                          score: Math.round((vintagePoints / 30) * 100),
                          weight: '5%',
                          status: vintageYears >= 5 ? 'Established' : 'Emerging',
                          summary: `${vintageYears} years continuous business operational track record.`,
                          metrics: [
                            { label: 'Operational Age', value: `${vintageYears} Years`, badge: 'Verified' }
                          ],
                          details: 'Sustained presence in local industrial corridor.'
                        }
                      }
                    };
                    onOpenAssessmentWithSimulated(sample);
                  }}
                >
                  <Sparkles size={16} />
                  <span>View Full Simulated Assessment Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
