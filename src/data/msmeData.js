// FivoScore MSME Dataset and Algorithm Engine

export const PRELOADED_MSMES = [
  {
    id: "fs-001",
    firmName: "Madan Enterprises",
    tradeName: "Madan Precision Auto Components",
    constitution: "Private Limited",
    category: "Small Enterprise",
    industry: "Auto Ancillaries & Precision Machining",
    hsnSacCodes: ["8708", "8482", "7318"],
    gstin: "27AABCU9603R1ZM",
    pan: "AABCU9603R",
    cin: "U28112MH2016PTC284912",
    udyamNumber: "UDYAM-MH-19-0012481",
    dateOfIncorporation: "14 Oct 2016",
    vintageYears: 8.5,
    registeredOffice: "Plot No. C-44, MIDC Industrial Area, Chakan, Pune, Maharashtra - 410501",
    directors: ["Madan V. Patil (Managing Director)", "Sunita M. Patil (Director)"],
    fivoScore: 785,
    scoreTier: "Tier A+ (Prime Credit)",
    riskRating: "Low Risk",
    percentile: 92,
    abilityToPay: 88,
    intentionToPay: 94,
    preApprovedLoan: {
      amount: 4500000,
      formattedAmount: "₹45 Lakhs",
      roi: "10.75% - 11.50%",
      tenureMonths: 36,
      monthlyEmi: "₹1,46,800",
      product: "Unsecured MSME Business Line of Credit"
    },
    financialSummary: {
      annualTurnover: "₹14.82 Cr",
      yoyGrowth: "+24.6%",
      ebitdaMargin: "14.2%",
      patMargin: "7.8%",
      monthlyAverageBalance: "₹18.4 Lakhs",
      averageMonthlyInflow: "₹1.24 Cr",
      totalDebtorDays: 42,
      creditorDays: 54
    },
    factors: {
      gstDiscipline: {
        score: 95,
        weight: "25%",
        status: "Excellent",
        summary: "Flawless filing record with zero delays across 24 consecutive months.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: "24/24 on time", badge: "100%" },
          { label: "GSTR-1 Recency", value: "Filed up to current month", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: "98.8% match", badge: "Low Discrepancy" },
          { label: "Annual Declared Turnover", value: "₹14.82 Cr", badge: "+24.6% YoY" },
          { label: "Tax Dispute / Cancellation", value: "Zero Notices", badge: "Clean" }
        ],
        details: "Direct GSTN telemetry indicates reliable monthly turnover consistency, with steady upward trend in intra-state B2B supplies to tier-1 OEM manufacturers."
      },
      cashFlowVelocity: {
        score: 88,
        weight: "25%",
        status: "Strong",
        summary: "Healthy operating buffer with high cash velocity and zero return bounces.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: "₹18.4 Lakhs", badge: "Healthy" },
          { label: "Inflow / Outflow Ratio", value: "1.28x", badge: "Net Positive" },
          { label: "Inward NACH/Cheque Bounce", value: "0 in 12 Months", badge: "Perfect" },
          { label: "Cash Flow Volatility Index", value: "8.2% (Low)", badge: "Stable" },
          { label: "Debt Service Coverage (DSCR)", value: "2.14x", badge: "Strong" }
        ],
        details: "Account Aggregator bank stream verification shows uninterrupted vendor settlement cycles and absence of high-risk overdraft utilization spikes."
      },
      bureauHealth: {
        score: 86,
        weight: "20%",
        status: "Very Good",
        summary: "Clean commercial credit history with perfect 0 DPD repayment track.",
        metrics: [
          { label: "Commercial CIBIL / Experian CMR", value: "CMR-2", badge: "Low Risk" },
          { label: "Active Credit Lines", value: "3 Sanctioned", badge: "₹85L Total" },
          { label: "Total Outstanding Balance", value: "₹32.4 Lakhs", badge: "38% Utilized" },
          { label: "Overdue / 30+ DPD Flags", value: "0 Past Delinquencies", badge: "Clean" },
          { label: "Recent Enquiries (Last 90d)", value: "1 Inbound Soft Query", badge: "Low Appetite" }
        ],
        details: "No history of write-offs, settlements, or restructuring across any NBFC or commercial bank accounts over past 5 years."
      },
      supplyChainQuality: {
        score: 84,
        weight: "15%",
        status: "High Quality",
        summary: "Diversified buyer base with direct procurement contracts with verified Tier-1 OEMs.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: "36.2%", badge: "Diversified" },
          { label: "Anchor Corporate Buyers", value: "Tata AutoComp, Mahindra, Bharat Forge", badge: "Tier-1" },
          { label: "Average Debtor Realization", value: "42 Days", badge: "Industry Lead" },
          { label: "Purchase Concentration", value: "48% from SAIL & JSW", badge: "Reputable" }
        ],
        details: "Supply chain mapping proves low counterparty default risk; trade credit cycle has shortened from 56 days to 42 days over the last fiscal year."
      },
      statutoryKyc: {
        score: 96,
        weight: "10%",
        status: "Fully Compliant",
        summary: "All statutory records, filings, and regulatory memberships are up-to-date.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active & Operative", badge: "Verified" },
          { label: "MCA21 Annual Filings", value: "MGT-7 & AOC-4 Filed", badge: "FY 2025-26" },
          { label: "Litigation & NCLT Scan", value: "0 Legal Cases Found", badge: "Clear" },
          { label: "EPFO / ESIC Compliance", value: "42 Active Contributors", badge: "Compliant" },
          { label: "Udyam MSME Registry", value: "Small Enterprise Validated", badge: "Active" }
        ],
        details: "e-Courts, MCA, and CBDT registries confirm clean promoter background with zero active recovery proceedings or compliance defaults."
      },
      vintageStability: {
        score: 85,
        weight: "5%",
        status: "Established",
        summary: "Over 8 years in continuous operation with owned manufacturing unit.",
        metrics: [
          { label: "Operational Vintage", value: "8 Years 5 Months", badge: "Established" },
          { label: "Premises Ownership", value: "Owned Industrial Shed", badge: "Asset Backed" },
          { label: "Geographical Reach", value: "Domestic + Indirect Export", badge: "Expanding" },
          { label: "Key Personnel Stability", value: "Original Promoters Active", badge: "Stable" }
        ],
        details: "Stable track record through industry cycles with consistent reinvestment of retained earnings into machine tools."
      }
    }
  },
  {
    id: "fs-002",
    firmName: "Apex Steel & Infrastructure Pvt Ltd",
    tradeName: "Apex Steels",
    constitution: "Private Limited",
    category: "Medium Enterprise",
    industry: "Iron & Non-Alloy Steel Structural Fabrication",
    hsnSacCodes: ["7208", "7214", "7308"],
    gstin: "07AAGCB1234F1Z8",
    pan: "AAGCB1234F",
    cin: "U27100DL2014PTC265431",
    udyamNumber: "UDYAM-DL-05-0045192",
    dateOfIncorporation: "02 Mar 2014",
    vintageYears: 10.8,
    registeredOffice: "Apex Tower, 4th Floor, Okhla Industrial Area Phase-III, New Delhi - 110020",
    directors: ["Vikas Aggarwal (Director)", "Harshita Aggarwal (Director)"],
    fivoScore: 820,
    scoreTier: "Tier A+ (Exceptional)",
    riskRating: "Very Low Risk",
    percentile: 97,
    abilityToPay: 94,
    intentionToPay: 96,
    preApprovedLoan: {
      amount: 12000000,
      formattedAmount: "₹1.20 Crore",
      roi: "10.25% - 10.75%",
      tenureMonths: 48,
      monthlyEmi: "₹3,06,200",
      product: "Supply Chain & Working Capital Facility"
    },
    financialSummary: {
      annualTurnover: "₹48.60 Cr",
      yoyGrowth: "+31.2%",
      ebitdaMargin: "16.8%",
      patMargin: "9.2%",
      monthlyAverageBalance: "₹64.5 Lakhs",
      averageMonthlyInflow: "₹4.05 Cr",
      totalDebtorDays: 38,
      creditorDays: 45
    },
    factors: {
      gstDiscipline: {
        score: 98,
        weight: "25%",
        status: "Exceptional",
        summary: "Top tier compliance with zero default, robust turnover growth across North India.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: "24/24 on time", badge: "100%" },
          { label: "GSTR-1 Recency", value: "Filed up to current month", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: "99.4% match", badge: "Benchmark" },
          { label: "Annual Declared Turnover", value: "₹48.60 Cr", badge: "+31.2% YoY" },
          { label: "Tax Dispute / Notice", value: "Nil", badge: "Pristine" }
        ],
        details: "High volume of e-Way bills generated with tight correlation to GSTR-1 outward tax liability."
      },
      cashFlowVelocity: {
        score: 92,
        weight: "25%",
        status: "Superior",
        summary: "Exceptional cash flow conversion cycle with strong debt service capacity.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: "₹64.5 Lakhs", badge: "Very High" },
          { label: "Inflow / Outflow Ratio", value: "1.34x", badge: "Robust" },
          { label: "Inward NACH/Cheque Bounce", value: "0 in 24 Months", badge: "Flawless" },
          { label: "Cash Flow Volatility Index", value: "5.4% (Very Low)", badge: "Predictable" },
          { label: "Debt Service Coverage (DSCR)", value: "2.85x", badge: "Superior" }
        ],
        details: "Consistently retains high end-of-month balances across multiple scheduled commercial bank accounts."
      },
      bureauHealth: {
        score: 91,
        weight: "20%",
        status: "Prime",
        summary: "Institutional grade credit history with active high-value trade facilities.",
        metrics: [
          { label: "Commercial CIBIL CMR", value: "CMR-1", badge: "Lowest Risk" },
          { label: "Active Credit Lines", value: "4 Sanctioned", badge: "₹3.5 Cr Total" },
          { label: "Total Outstanding Balance", value: "₹1.15 Cr", badge: "32% Utilized" },
          { label: "Overdue / 30+ DPD Flags", value: "Zero Defaults", badge: "Perfect" },
          { label: "Recent Enquiries (Last 90d)", value: "None", badge: "Strong" }
        ],
        details: "Letter of Credit (LC) and Bank Guarantee (BG) facilities regularly honored without any devolved payments."
      },
      supplyChainQuality: {
        score: 89,
        weight: "15%",
        status: "Prime Anchors",
        summary: "Supply contracts with major EPC contractors including L&T, Shapoorji, and Afcons.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: "28.4%", badge: "Optimal" },
          { label: "Anchor Corporate Buyers", value: "L&T Construction, Dilip Buildcon, NBCC", badge: "Prime" },
          { label: "Average Debtor Realization", value: "38 Days", badge: "Fast" },
          { label: "Vendor Continuity", value: "Average 6.5 Years", badge: "Trusted" }
        ],
        details: "Strong counterparty credibility cushions against macro steel commodity price fluctuations."
      },
      statutoryKyc: {
        score: 97,
        weight: "10%",
        status: "Full Compliant",
        summary: "Transparent governance, statutory filings complete and audited by big-tier firm.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active Corporate PAN", badge: "Verified" },
          { label: "MCA21 Annual Filings", value: "Up to Date (No Penalties)", badge: "Valid" },
          { label: "Litigation & NCLT Scan", value: "Clean Records", badge: "Clear" },
          { label: "EPFO / ESIC Compliance", value: "115 Active Employees", badge: "Compliant" },
          { label: "Udyam MSME Registry", value: "Medium Enterprise", badge: "Active" }
        ],
        details: "Zero regulatory non-compliances, factory license and pollution control board consents active."
      },
      vintageStability: {
        score: 94,
        weight: "5%",
        status: "Veteran",
        summary: "Decade-long presence with multi-facility manufacturing and warehouse operations.",
        metrics: [
          { label: "Operational Vintage", value: "10 Years 8 Months", badge: "Veteran" },
          { label: "Premises Ownership", value: "Multiple Owned Units", badge: "High Equity" },
          { label: "Geographical Reach", value: "Pan-India Projects", badge: "National" },
          { label: "Key Personnel Stability", value: "Second Generation Leadership", badge: "High" }
        ],
        details: "Established distribution footprint spanning 7 states across Northern and Western India."
      }
    }
  },
  {
    id: "fs-003",
    firmName: "Shree Ganesh Textiles & Handlooms",
    tradeName: "Ganesh TexFab",
    constitution: "Partnership Firm",
    category: "Small Enterprise",
    industry: "Manmade Textiles & Weaving Mill",
    hsnSacCodes: ["5407", "5208", "6006"],
    gstin: "24AAACT8921B1ZU",
    pan: "AAACT8921B",
    cin: "U17111GJ2015PTC082341",
    udyamNumber: "UDYAM-GJ-22-0098314",
    dateOfIncorporation: "18 Aug 2015",
    vintageYears: 9.3,
    registeredOffice: "Surat Textile Market, Ring Road, Surat, Gujarat - 395002",
    directors: ["Ghanshyamdas Agarwal (Partner)", "Manoj Kumar Agarwal (Partner)"],
    fivoScore: 745,
    scoreTier: "Tier A (Good Credit)",
    riskRating: "Low Risk",
    percentile: 84,
    abilityToPay: 82,
    intentionToPay: 88,
    preApprovedLoan: {
      amount: 3200000,
      formattedAmount: "₹32 Lakhs",
      roi: "11.75% - 12.50%",
      tenureMonths: 36,
      monthlyEmi: "₹1,05,900",
      product: "Machinery Modernization & Inventory Credit"
    },
    financialSummary: {
      annualTurnover: "₹9.40 Cr",
      yoyGrowth: "+16.8%",
      ebitdaMargin: "11.4%",
      patMargin: "5.6%",
      monthlyAverageBalance: "₹11.2 Lakhs",
      averageMonthlyInflow: "₹78.3 Lakhs",
      totalDebtorDays: 52,
      creditorDays: 60
    },
    factors: {
      gstDiscipline: {
        score: 88,
        weight: "25%",
        status: "Good",
        summary: "Reliable filing cadence with consistent GST payments across textile cycles.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: "22/24 on time (2 within grace)", badge: "92%" },
          { label: "GSTR-1 Recency", value: "Filed up to current month", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: "96.2% match", badge: "Standard" },
          { label: "Annual Declared Turnover", value: "₹9.40 Cr", badge: "+16.8% YoY" },
          { label: "Tax Dispute / Notice", value: "No active demands", badge: "Clean" }
        ],
        details: "E-invoice generation seamlessly synchronized for inter-state wholesale deliveries."
      },
      cashFlowVelocity: {
        score: 80,
        weight: "25%",
        status: "Moderate-Strong",
        summary: "Seasonal cash inflows matching festival textile demand, well managed overdraft.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: "₹11.2 Lakhs", badge: "Adequate" },
          { label: "Inflow / Outflow Ratio", value: "1.18x", badge: "Positive" },
          { label: "Inward NACH/Cheque Bounce", value: "1 minor (cleared in 24h)", badge: "Tolerable" },
          { label: "Cash Flow Volatility Index", value: "14.2% (Seasonal)", badge: "Cyclical" },
          { label: "Debt Service Coverage (DSCR)", value: "1.78x", badge: "Satisfactory" }
        ],
        details: "Peak inflows witnessed during Q2/Q3 wedding and Diwali season; steady off-season buffers."
      },
      bureauHealth: {
        score: 82,
        weight: "20%",
        status: "Good",
        summary: "Satisfactory commercial loan conduct with steady amortization.",
        metrics: [
          { label: "Commercial CIBIL CMR", value: "CMR-3", badge: "Moderate Risk" },
          { label: "Active Credit Lines", value: "2 Sanctioned", badge: "₹45L Total" },
          { label: "Total Outstanding Balance", value: "₹21.0 Lakhs", badge: "46% Utilized" },
          { label: "Overdue / 30+ DPD Flags", value: "0 DPD Current", badge: "Regular" },
          { label: "Recent Enquiries (Last 90d)", value: "1 Enquiry", badge: "Normal" }
        ],
        details: "Term loan for airjet weaving loom equipment being serviced without delay."
      },
      supplyChainQuality: {
        score: 81,
        weight: "15%",
        status: "Reliable Network",
        summary: "Deep roots across Surat textile market and regional readymade garment brands.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: "41.5%", badge: "Moderate" },
          { label: "Anchor Corporate Buyers", value: "Raymond Retail Dealers, Arvind Mills Agents", badge: "Established" },
          { label: "Average Debtor Realization", value: "52 Days", badge: "Textile Standard" },
          { label: "Supplier Terms", value: "60 Days Credit from Yarn Spinners", badge: "Favorable" }
        ],
        details: "High re-order rate from repeat B2B garment converters across Maharashtra and Karnataka."
      },
      statutoryKyc: {
        score: 92,
        weight: "10%",
        status: "Compliant",
        summary: "Partnership deed registered, PAN verified, clean statutory record.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active Firm PAN", badge: "Verified" },
          { label: "Partnership Registration", value: "Registrar of Firms (ROF) Certified", badge: "Valid" },
          { label: "Litigation & NCLT Scan", value: "No Adverse Entries", badge: "Clear" },
          { label: "EPFO / ESIC Compliance", value: "28 Enrolled Workers", badge: "Compliant" },
          { label: "Udyam MSME Registry", value: "Small Enterprise Category", badge: "Active" }
        ],
        details: "Compliant with state industrial licensing and local textile trade association codes."
      },
      vintageStability: {
        score: 90,
        weight: "5%",
        status: "Stable",
        summary: "9+ years of unblemished local presence with deep supplier trust.",
        metrics: [
          { label: "Operational Vintage", value: "9 Years 3 Months", badge: "Established" },
          { label: "Premises Ownership", value: "Commercial Showroom + Leased Mill", badge: "Standard" },
          { label: "Geographical Reach", value: "Western & Southern India", badge: "Regional" },
          { label: "Key Personnel Stability", value: "Active Promoter Oversight", badge: "Stable" }
        ],
        details: "Longstanding reputation in Surat textile hub with consistent bank goodwill."
      }
    }
  },
  {
    id: "fs-004",
    firmName: "TechNova Cloud Solutions Pvt Ltd",
    tradeName: "TechNova Enterprise",
    constitution: "Private Limited",
    category: "Small Enterprise",
    industry: "Enterprise SaaS & B2B IT Integration",
    hsnSacCodes: ["998313", "998314", "998319"],
    gstin: "29AADCT5544K1ZS",
    pan: "AADCT5544K",
    cin: "U72200KA2019PTC128456",
    udyamNumber: "UDYAM-KR-03-0067421",
    dateOfIncorporation: "11 Jan 2019",
    vintageYears: 6.0,
    registeredOffice: "6th Floor, Cyber Park, Electronic City Phase 1, Bengaluru, Karnataka - 560100",
    directors: ["Aditya N. Kulkarni (Founder & CEO)", "Pooja Hegde (Co-Founder & CTO)"],
    fivoScore: 795,
    scoreTier: "Tier A+ (High Growth)",
    riskRating: "Low Risk",
    percentile: 94,
    abilityToPay: 91,
    intentionToPay: 95,
    preApprovedLoan: {
      amount: 6000000,
      formattedAmount: "₹60 Lakhs",
      roi: "10.50% - 11.25%",
      tenureMonths: 36,
      monthlyEmi: "₹1,95,100",
      product: "SaaS Recurring Revenue & Expansion Credit"
    },
    financialSummary: {
      annualTurnover: "₹18.20 Cr",
      yoyGrowth: "+42.5%",
      ebitdaMargin: "24.5%",
      patMargin: "14.2%",
      monthlyAverageBalance: "₹34.8 Lakhs",
      averageMonthlyInflow: "₹1.52 Cr",
      totalDebtorDays: 28,
      creditorDays: 30
    },
    factors: {
      gstDiscipline: {
        score: 96,
        weight: "25%",
        status: "Excellent",
        summary: "100% digital invoicing, prompt reverse charge compliance and timely GSTR filing.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: "24/24 on time", badge: "100%" },
          { label: "GSTR-1 Recency", value: "Filed up to current month", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: "99.1% match", badge: "High Accuracy" },
          { label: "Annual Declared Turnover", value: "₹18.20 Cr", badge: "+42.5% YoY" },
          { label: "Export of Services (LUT)", value: "Valid LUT with SEZ/Overseas Remittance", badge: "Compliant" }
        ],
        details: "Zero delayed return submissions; high transparency in service tax classification."
      },
      cashFlowVelocity: {
        score: 94,
        weight: "25%",
        status: "Exceptional",
        summary: "High recurring ARR cash inflows from enterprise corporate software contracts.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: "₹34.8 Lakhs", badge: "Strong" },
          { label: "Inflow / Outflow Ratio", value: "1.45x", badge: "Very Positive" },
          { label: "Inward NACH/Cheque Bounce", value: "0 in 24 Months", badge: "Zero" },
          { label: "Cash Flow Volatility Index", value: "4.8% (Very Low)", badge: "Predictable" },
          { label: "Debt Service Coverage (DSCR)", value: "3.20x", badge: "Outstanding" }
        ],
        details: "Monthly retainer billing guarantees highly predictable forward cash flows."
      },
      bureauHealth: {
        score: 88,
        weight: "20%",
        status: "Very Good",
        summary: "Conservative leverage profile, all equipment and venture debt cleanly paid.",
        metrics: [
          { label: "Commercial CIBIL CMR", value: "CMR-2", badge: "Low Risk" },
          { label: "Active Credit Lines", value: "1 Sanctioned", badge: "₹25L Overdraft" },
          { label: "Total Outstanding Balance", value: "₹4.5 Lakhs", badge: "18% Utilized" },
          { label: "Overdue / 30+ DPD Flags", value: "Zero Delinquency", badge: "Pristine" },
          { label: "Recent Enquiries (Last 90d)", value: "None", badge: "Stable" }
        ],
        details: "Minimal reliance on commercial bank debt; self-funding growth via operational surpluses."
      },
      supplyChainQuality: {
        score: 90,
        weight: "15%",
        status: "Tier-1 Bluechip",
        summary: "Clients include listed BFSI enterprises and global logistics multinationals.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: "32.0%", badge: "Low Risk" },
          { label: "Key Clients", value: "HDFC Life, Wipro Vendor Ecosystem, Zerodha Partner API", badge: "Bluechip" },
          { label: "Average Debtor Realization", value: "28 Days", badge: "Fastest" },
          { label: "Client Churn Rate", value: "< 2.5% Annually", badge: "Sticky" }
        ],
        details: "Contractual milestone billing with escrow-backed bank receipts minimize receivable risk."
      },
      statutoryKyc: {
        score: 95,
        weight: "10%",
        status: "Full Compliant",
        summary: "All MCA filings, secretarial audits, and data privacy governance in place.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active Corporate PAN", badge: "Verified" },
          { label: "MCA21 Annual Filings", value: "All ROC Filings Cleared", badge: "Up to Date" },
          { label: "Litigation & NCLT Scan", value: "Clean Legal Record", badge: "Clear" },
          { label: "EPFO / ESIC Compliance", value: "76 Enrolled IT Professionals", badge: "Compliant" },
          { label: "Udyam MSME Registry", value: "Small Enterprise Registered", badge: "Active" }
        ],
        details: "ISO 27001 and SOC2 Type II certified; clean intellectual property ownership."
      },
      vintageStability: {
        score: 80,
        weight: "5%",
        status: "Growth Stage",
        summary: "6 years of high-velocity growth with sustained tech product roadmap.",
        metrics: [
          { label: "Operational Vintage", value: "6 Years", badge: "Established" },
          { label: "Premises Ownership", value: "Long-term Commercial Lease", badge: "Stable" },
          { label: "Geographical Reach", value: "India, UAE, Singapore", badge: "International" },
          { label: "Key Personnel Stability", value: "Founding Tech Team Retained", badge: "High" }
        ],
        details: "Fastest-growing enterprise IT segment with zero key-promoter turnover."
      }
    }
  },
  {
    id: "fs-005",
    firmName: "Bharat Logistics & Cold Chain",
    tradeName: "Bharat ColdChain",
    constitution: "Private Limited",
    category: "Medium Enterprise",
    industry: "Cold Chain Warehousing & Refrigerated Logistics",
    hsnSacCodes: ["9967", "9965", "8418"],
    gstin: "33AABCB7788M1ZN",
    pan: "AABCB7788M",
    cin: "U60200TN2016PTC099123",
    udyamNumber: "UDYAM-TN-02-0033190",
    dateOfIncorporation: "04 May 2016",
    vintageYears: 8.8,
    registeredOffice: "Cold Storage Complex, NH-48 Express Highway, Sriperumbudur, Chennai - 602105",
    directors: ["K. S. Ramanathan (Director)", "R. Balasubramanian (Director)"],
    fivoScore: 710,
    scoreTier: "Tier B+ (Satisfactory)",
    riskRating: "Moderate Risk",
    percentile: 72,
    abilityToPay: 76,
    intentionToPay: 82,
    preApprovedLoan: {
      amount: 2800000,
      formattedAmount: "₹28 Lakhs",
      roi: "12.75% - 13.50%",
      tenureMonths: 36,
      monthlyEmi: "₹94,100",
      product: "Fleet Working Capital & Fuel Credit Line"
    },
    financialSummary: {
      annualTurnover: "₹21.40 Cr",
      yoyGrowth: "+12.1%",
      ebitdaMargin: "10.2%",
      patMargin: "4.1%",
      monthlyAverageBalance: "₹14.6 Lakhs",
      averageMonthlyInflow: "₹1.78 Cr",
      totalDebtorDays: 58,
      creditorDays: 50
    },
    factors: {
      gstDiscipline: {
        score: 82,
        weight: "25%",
        status: "Satisfactory",
        summary: "Regular GST payments, minor delayed filing in 2 festive months.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: "21/24 on time (3 with minor delay)", badge: "87%" },
          { label: "GSTR-1 Recency", value: "Filed up to current month", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: "94.5% match", badge: "Moderate" },
          { label: "Annual Declared Turnover", value: "₹21.40 Cr", badge: "+12.1% YoY" },
          { label: "Tax Dispute / Notice", value: "No active penalties", badge: "Standard" }
        ],
        details: "Substantial diesel input tax credit claims; all e-way transport bills matched."
      },
      cashFlowVelocity: {
        score: 74,
        weight: "25%",
        status: "Moderate",
        summary: "High asset turnaround but tighter working capital margin due to fuel cycles.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: "₹14.6 Lakhs", badge: "Moderate" },
          { label: "Inflow / Outflow Ratio", value: "1.09x", badge: "Tight Margin" },
          { label: "Inward NACH/Cheque Bounce", value: "2 technical bounces (cleared)", badge: "Monitored" },
          { label: "Cash Flow Volatility Index", value: "16.8% (Moderate)", badge: "Variable" },
          { label: "Debt Service Coverage (DSCR)", value: "1.48x", badge: "Adequate" }
        ],
        details: "Capital tied up in refrigerated truck fleet repayments; operating margins intact."
      },
      bureauHealth: {
        score: 78,
        weight: "20%",
        status: "Satisfactory",
        summary: "Commercial vehicle loans actively amortizing without severe delinquency.",
        metrics: [
          { label: "Commercial CIBIL CMR", value: "CMR-4", badge: "Average Risk" },
          { label: "Active Credit Lines", value: "5 Sanctioned (Vehicle + OD)", badge: "₹1.8 Cr Total" },
          { label: "Total Outstanding Balance", value: "₹1.12 Cr", badge: "62% Utilized" },
          { label: "Overdue / 30+ DPD Flags", value: "Zero 30+ DPD", badge: "Acceptable" },
          { label: "Recent Enquiries (Last 90d)", value: "2 Enquiries", badge: "Moderate Appetite" }
        ],
        details: "Heavy commercial vehicle asset finance tracked cleanly across Shriram and HDFC Bank."
      },
      supplyChainQuality: {
        score: 79,
        weight: "15%",
        status: "Good Partnerships",
        summary: "Exclusive cold storage contracts with regional dairy & pharmaceutical brands.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: "48.2%", badge: "Moderate-High" },
          { label: "Anchor Clients", value: "Amul Regional Depot, Sun Pharma Distribution", badge: "Reputable" },
          { label: "Average Debtor Realization", value: "58 Days", badge: "Slightly Long" },
          { label: "Fleet Telematics", value: "100% GPS/Temperature Tracked", badge: "Modern" }
        ],
        details: "Long term 3-year supply contracts protect capacity utilization."
      },
      statutoryKyc: {
        score: 90,
        weight: "10%",
        status: "Compliant",
        summary: "FSSAI cold storage licenses, transport regulatory clearances all active.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active Corporate PAN", badge: "Verified" },
          { label: "MCA21 Annual Filings", value: "Filed on Schedule", badge: "Valid" },
          { label: "Litigation & NCLT Scan", value: "Clear Commercial Records", badge: "Clear" },
          { label: "EPFO / ESIC Compliance", value: "54 Active Drivers & Staff", badge: "Compliant" },
          { label: "FSSAI & Transport Licenses", value: "Active Clean State", badge: "Certified" }
        ],
        details: "Full statutory alignment with Ministry of Road Transport & Highways guidelines."
      },
      vintageStability: {
        score: 86,
        weight: "5%",
        status: "Established",
        summary: "Close to 9 years in refrigerated logistics with multi-warehouse footprint.",
        metrics: [
          { label: "Operational Vintage", value: "8 Years 8 Months", badge: "Established" },
          { label: "Premises Ownership", value: "Owned Land + Cold Warehouse", badge: "Asset Heavy" },
          { label: "Geographical Reach", value: "Tamil Nadu, Andhra, Karnataka", badge: "Corridor" },
          { label: "Key Personnel Stability", value: "Experienced Logistics Veterans", badge: "Stable" }
        ],
        details: "Strong local presence along Chennai-Bengaluru industrial freight highway."
      }
    }
  },
  {
    id: "fs-006",
    firmName: "Kaveri Agro Foods & Spices",
    tradeName: "Kaveri Organics",
    constitution: "Proprietorship",
    category: "Micro Enterprise",
    industry: "Agro Food Processing & Export Grade Spices",
    hsnSacCodes: ["0904", "0910", "1211"],
    gstin: "09AAFFK4433P1Z2",
    pan: "AAFFK4433P",
    cin: "U15400UP2017PTC091122",
    udyamNumber: "UDYAM-UP-70-0081234",
    dateOfIncorporation: "20 Sep 2017",
    vintageYears: 7.4,
    registeredOffice: "Industrial Estate, Ramnagar, Varanasi, Uttar Pradesh - 221008",
    directors: ["Devendra Nath Tiwari (Proprietor)"],
    fivoScore: 660,
    scoreTier: "Tier B (Moderate Risk / Growth)",
    riskRating: "Moderate Risk",
    percentile: 61,
    abilityToPay: 68,
    intentionToPay: 74,
    preApprovedLoan: {
      amount: 1800000,
      formattedAmount: "₹18 Lakhs",
      roi: "13.50% - 14.50%",
      tenureMonths: 24,
      monthlyEmi: "₹85,900",
      product: "Agri-Procurement & Season Advance"
    },
    financialSummary: {
      annualTurnover: "₹4.85 Cr",
      yoyGrowth: "+18.4%",
      ebitdaMargin: "9.8%",
      patMargin: "4.2%",
      monthlyAverageBalance: "₹6.4 Lakhs",
      averageMonthlyInflow: "₹40.4 Lakhs",
      totalDebtorDays: 45,
      creditorDays: 35
    },
    factors: {
      gstDiscipline: {
        score: 75,
        weight: "25%",
        status: "Fair",
        summary: "Active GST filer with seasonal quarterly concentration around spice harvest.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: "20/24 on time (4 delayed < 15 days)", badge: "83%" },
          { label: "GSTR-1 Recency", value: "Filed up to current month", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: "91.8% match", badge: "Moderate" },
          { label: "Annual Declared Turnover", value: "₹4.85 Cr", badge: "+18.4% YoY" },
          { label: "Tax Dispute / Notice", value: "No active notices", badge: "Clean" }
        ],
        details: "Turnover clustered in post-harvest months (March-May and October-November)."
      },
      cashFlowVelocity: {
        score: 68,
        weight: "25%",
        status: "Seasonal Moderate",
        summary: "Adequate buffers during peak trade; cash flow tighter during sowing cycle.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: "₹6.4 Lakhs", badge: "Moderate" },
          { label: "Inflow / Outflow Ratio", value: "1.08x", badge: "Positive" },
          { label: "Inward NACH/Cheque Bounce", value: "1 bounce (re-presented & cleared)", badge: "Resolved" },
          { label: "Cash Flow Volatility Index", value: "22.4% (Seasonal)", badge: "Agricultural" },
          { label: "Debt Service Coverage (DSCR)", value: "1.38x", badge: "Sufficient" }
        ],
        details: "Cash balances fluctuate with direct mandi payments to farmer clusters."
      },
      bureauHealth: {
        score: 70,
        weight: "20%",
        status: "Fair",
        summary: "Track record on Mudra and KCC facilities with clean closure.",
        metrics: [
          { label: "Commercial CIBIL CMR", value: "CMR-5", badge: "Moderate Risk" },
          { label: "Active Credit Lines", value: "2 Mudra / Micro Loans", badge: "₹20L Sanctioned" },
          { label: "Total Outstanding Balance", value: "₹11.2 Lakhs", badge: "56% Utilized" },
          { label: "Overdue / 30+ DPD Flags", value: "0 Active DPD", badge: "Current" },
          { label: "Recent Enquiries (Last 90d)", value: "2 Enquiries", badge: "Seeking Credit" }
        ],
        details: "Graduated from micro-enterprise Mudra scheme to formal private bank line."
      },
      supplyChainQuality: {
        score: 74,
        weight: "15%",
        status: "Fair Counterparties",
        summary: "Direct supply to spice packaging brands in Kanpur, Lucknow, and Delhi.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: "54.0%", badge: "High Concentration" },
          { label: "Anchor Clients", value: "Regional Kirana Wholesale Chains", badge: "Semi-formal" },
          { label: "Average Debtor Realization", value: "45 Days", badge: "Normal" },
          { label: "Procurement Farmer Base", value: "180+ Cultivator Tie-ups", badge: "Direct Sourcing" }
        ],
        details: "Opportunities to expand into institutional modern trade and FMCG aggregators."
      },
      statutoryKyc: {
        score: 88,
        weight: "10%",
        status: "Compliant",
        summary: "FSSAI organic spice processing license valid, clean individual KYC.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active Individual PAN", badge: "Verified" },
          { label: "FSSAI Food License", value: "Valid up to 2028", badge: "Certified" },
          { label: "Litigation & NCLT Scan", value: "Zero Civil / Criminal Cases", badge: "Clear" },
          { label: "EPFO / ESIC Compliance", value: "Exempt (< 10 workers)", badge: "Compliant" },
          { label: "Udyam MSME Registry", value: "Micro Enterprise Registered", badge: "Active" }
        ],
        details: "Clean promoter verification, zero default marks in state civil records."
      },
      vintageStability: {
        score: 82,
        weight: "5%",
        status: "Proven",
        summary: "Over 7 years operating in the Varanasi Ramnagar agro processing cluster.",
        metrics: [
          { label: "Operational Vintage", value: "7 Years 4 Months", badge: "Established" },
          { label: "Premises Ownership", value: "Owned Mandi Shed + Leased Mill", badge: "Local Base" },
          { label: "Geographical Reach", value: "Purvanchal & NCR", badge: "Regional" },
          { label: "Key Personnel Stability", value: "Founder-operated", badge: "Dedicated" }
        ],
        details: "Strong community standing among local spice cultivators and trade brokers."
      }
    }
  }
];

// Deterministic mock generator for ANY arbitrary search input (Firm / GST / PAN / CIN)
export function generateDeterministicMSME(query) {
  const clean = query.trim().toUpperCase();
  
  // Hash function to get stable pseudorandom values from string
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash << 5) - hash + clean.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  // Derive score between 620 and 840
  const score = 620 + (absHash % 220);
  
  let scoreTier = "Tier B (Moderate Risk)";
  let riskRating = "Moderate Risk";
  if (score >= 800) {
    scoreTier = "Tier A+ (Exceptional Prime)";
    riskRating = "Very Low Risk";
  } else if (score >= 750) {
    scoreTier = "Tier A+ (Prime Credit)";
    riskRating = "Low Risk";
  } else if (score >= 700) {
    scoreTier = "Tier A (Good Credit)";
    riskRating = "Low Risk";
  } else if (score >= 650) {
    scoreTier = "Tier B+ (Satisfactory)";
    riskRating = "Moderate Risk";
  }

  // Derive realistic amounts
  const loanLakhs = 15 + (absHash % 85); // 15 to 100 Lakhs
  const turnoverCr = (3.5 + (absHash % 400) / 10).toFixed(2);
  const vintage = (3 + (absHash % 120) / 10).toFixed(1);
  const percentile = Math.min(99, Math.max(50, Math.floor(score / 900 * 100) + 5));

  // Determine input type
  const isGST = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(clean);
  const isPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(clean);
  const isCIN = /^[LU][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/.test(clean);

  const stateCodes = {
    "27": "Maharashtra", "07": "Delhi", "24": "Gujarat", "29": "Karnataka",
    "33": "Tamil Nadu", "09": "Uttar Pradesh", "19": "West Bengal", "08": "Rajasthan"
  };

  const detectedState = isGST ? (stateCodes[clean.substring(0, 2)] || "India") : "India";

  let firmName = clean;
  let gstin = isGST ? clean : `27${clean.slice(0, 5).padEnd(5, "A")}1234F1Z5`;
  let pan = isPAN ? clean : (isGST ? clean.substring(2, 12) : `${clean.slice(0, 5).padEnd(5, "A")}9876C`);
  let cin = isCIN ? clean : `U74999MH2018PTC${(absHash % 900000 + 100000)}`;

  if (isGST || isPAN || isCIN) {
    const prefixes = ["Sunrise", "Navkar", "Pinnacle", "Dynamic", "Shree Ram", "Zenith", "Sterling"];
    const suffixes = ["Enterprises", "Industries", "InfraTech", "Solutions", "Logistics", "Textiles"];
    firmName = `${prefixes[absHash % prefixes.length]} ${suffixes[(absHash >> 2) % suffixes.length]} Pvt Ltd`;
  }

  const gstScore = Math.min(98, Math.max(65, Math.floor(score * 0.12) + (absHash % 10)));
  const cashScore = Math.min(96, Math.max(62, Math.floor(score * 0.11) + (absHash % 12)));
  const bureauScore = Math.min(94, Math.max(60, Math.floor(score * 0.10) + (absHash % 14)));
  const supplyScore = Math.min(92, Math.max(60, Math.floor(score * 0.10) + (absHash % 11)));
  const statutoryScore = Math.min(98, Math.max(75, Math.floor(score * 0.11) + (absHash % 8)));
  const vintageScore = Math.min(95, Math.max(70, Math.floor(vintage * 8) + 20));

  return {
    id: `custom-${absHash % 10000}`,
    firmName: firmName,
    tradeName: `${firmName.split(" ")[0]} Commercial`,
    constitution: "Private Limited",
    category: loanLakhs > 50 ? "Medium Enterprise" : "Small Enterprise",
    industry: "Manufacturing & Wholesale B2B Trade",
    hsnSacCodes: ["8481", "7326", "8504"],
    gstin: gstin,
    pan: pan,
    cin: cin,
    udyamNumber: `UDYAM-MH-01-${(absHash % 9000000 + 1000000)}`,
    dateOfIncorporation: `15 March ${2026 - Math.floor(vintage)}`,
    vintageYears: parseFloat(vintage),
    registeredOffice: `Plot No. ${absHash % 150 + 1}, Industrial Estate, Phase II, ${detectedState} - 400001`,
    directors: ["Promoter Director A", "Promoter Director B"],
    fivoScore: score,
    scoreTier: scoreTier,
    riskRating: riskRating,
    percentile: percentile,
    abilityToPay: Math.min(96, Math.floor(cashScore * 0.5 + gstScore * 0.5)),
    intentionToPay: Math.min(98, Math.floor(bureauScore * 0.5 + statutoryScore * 0.5)),
    preApprovedLoan: {
      amount: loanLakhs * 100000,
      formattedAmount: `₹${loanLakhs} Lakhs`,
      roi: `${(10.5 + (900 - score) / 100).toFixed(2)}% - ${(11.5 + (900 - score) / 100).toFixed(2)}%`,
      tenureMonths: 36,
      monthlyEmi: `₹${Math.floor(loanLakhs * 3260).toLocaleString("en-IN")}`,
      product: "AI-Underwritten Unsecured Business Credit"
    },
    financialSummary: {
      annualTurnover: `₹${turnoverCr} Cr`,
      yoyGrowth: `+${(12 + (absHash % 25)).toFixed(1)}%`,
      ebitdaMargin: `${(11 + (absHash % 8)).toFixed(1)}%`,
      patMargin: `${(5 + (absHash % 5)).toFixed(1)}%`,
      monthlyAverageBalance: `₹${(loanLakhs * 0.45).toFixed(1)} Lakhs`,
      averageMonthlyInflow: `₹${(turnoverCr / 12).toFixed(2)} Cr`,
      totalDebtorDays: 35 + (absHash % 30),
      creditorDays: 45 + (absHash % 25)
    },
    factors: {
      gstDiscipline: {
        score: gstScore,
        weight: "25%",
        status: gstScore > 85 ? "Excellent" : (gstScore > 75 ? "Good" : "Satisfactory"),
        summary: "Verified GSTN filing regularity and matched turnover declaration trajectory.",
        metrics: [
          { label: "GSTR-3B Timeliness", value: `${Math.min(24, 21 + (absHash % 4))}/24 on time`, badge: "96%" },
          { label: "GSTR-1 Recency", value: "Filed up to current cycle", badge: "Active" },
          { label: "2B vs 3B ITC Reconciliation", value: `${(95 + (absHash % 4)).toFixed(1)}% match`, badge: "Verified" },
          { label: "Annual Declared Turnover", value: `₹${turnoverCr} Cr`, badge: "Reported" },
          { label: "Tax Discrepancy Flag", value: "Zero Material Notices", badge: "Clean" }
        ],
        details: "Cross-checked against GSTR-1, 3B, and e-way bill movements; consistent tax liability discharge."
      },
      cashFlowVelocity: {
        score: cashScore,
        weight: "25%",
        status: cashScore > 85 ? "Strong" : (cashScore > 75 ? "Moderate-Strong" : "Fair"),
        summary: "Bank statement telemetry verifies steady monthly credits and liquidity cushion.",
        metrics: [
          { label: "Average Monthly Balance (ABB)", value: `₹${(loanLakhs * 0.45).toFixed(1)} Lakhs`, badge: "Steady" },
          { label: "Inflow / Outflow Ratio", value: `${(1.15 + (absHash % 20) / 100).toFixed(2)}x`, badge: "Positive" },
          { label: "Inward NACH/Cheque Bounce", value: `${absHash % 2} recorded`, badge: "Manageable" },
          { label: "Cash Flow Volatility Index", value: `${(9 + absHash % 8).toFixed(1)}% (Low-Mid)`, badge: "Stable" },
          { label: "Debt Service Coverage (DSCR)", value: `${(1.6 + (absHash % 12) / 10).toFixed(2)}x`, badge: "Healthy" }
        ],
        details: "Analyzed via RBI Account Aggregator protocol; consistent operational inflows without prolonged zero-balance days."
      },
      bureauHealth: {
        score: bureauScore,
        weight: "20%",
        status: bureauScore > 85 ? "Very Good" : (bureauScore > 75 ? "Good" : "Satisfactory"),
        summary: "Commercial tradelines in good standing with low leverage utilization.",
        metrics: [
          { label: "Commercial CIBIL CMR", value: `CMR-${Math.max(1, Math.min(5, Math.floor((900 - score) / 45) + 1))}`, badge: "Ranked" },
          { label: "Active Credit Lines", value: `${(absHash % 3) + 2} Facilities`, badge: "Active" },
          { label: "Total Outstanding Balance", value: `₹${(loanLakhs * 0.6).toFixed(1)} Lakhs`, badge: "Standard" },
          { label: "Overdue / 30+ DPD Flags", value: "Zero Critical Default", badge: "Clean" },
          { label: "Recent Enquiries", value: "1 Inbound Soft Query", badge: "Low Risk" }
        ],
        details: "Commercial bureau query shows adherence to sanctioned limits and timely payment."
      },
      supplyChainQuality: {
        score: supplyScore,
        weight: "15%",
        status: supplyScore > 80 ? "Diversified" : "Standard",
        summary: "Balanced counterparty distribution across regional commercial purchasers.",
        metrics: [
          { label: "Top 5 Buyers Concentration", value: `${35 + (absHash % 15)}%`, badge: "Optimal" },
          { label: "Buyer Quality Rating", value: "Verified Active GST Registered", badge: "Valid" },
          { label: "Average Debtor Realization", value: `${35 + (absHash % 20)} Days`, badge: "Standard" },
          { label: "Vendor Continuity", value: `${Math.max(2, Math.floor(vintage * 0.7))} Years`, badge: "Stable" }
        ],
        details: "Diverse distribution prevents systemic supplier shock or client insolvency spillovers."
      },
      statutoryKyc: {
        score: statutoryScore,
        weight: "10%",
        status: "Fully Compliant",
        summary: "Active corporate records, PAN validated, zero NCLT disputes.",
        metrics: [
          { label: "CBDT PAN Validation", value: "Active & Operative", badge: "Verified" },
          { label: "MCA21 Annual Filings", value: "Filed on Schedule", badge: "Valid" },
          { label: "Litigation & NCLT Scan", value: "Zero Adverse Cases", badge: "Clean" },
          { label: "EPFO / ESIC Compliance", value: `${15 + (absHash % 40)} Enrolled Staff`, badge: "Compliant" },
          { label: "Udyam Registration", value: "Active MSME Status", badge: "Verified" }
        ],
        details: "Promoter and corporate legal checks clear across all statutory MCA and CBDT portals."
      },
      vintageStability: {
        score: vintageScore,
        weight: "5%",
        status: vintage > 5 ? "Established" : "Growing",
        summary: `${vintage} years in continuous trade with local market recognition.`,
        metrics: [
          { label: "Operational Vintage", value: `${vintage} Years`, badge: "Operating" },
          { label: "Premises Ownership", value: "Registered Commercial Premises", badge: "Confirmed" },
          { label: "Geographical Reach", value: `${detectedState} Regional`, badge: "Established" },
          { label: "Key Personnel Stability", value: "Core Promoters Active", badge: "High" }
        ],
        details: "Sustained operational continuity through economic and commodity market cycles."
      }
    }
  };
}

// Search helper function
export function searchMSMEs(query) {
  if (!query || !query.trim()) return [];
  const q = query.trim().toLowerCase();
  
  // First match preloaded list
  const matches = PRELOADED_MSMES.filter(item => 
    item.firmName.toLowerCase().includes(q) ||
    item.tradeName.toLowerCase().includes(q) ||
    item.gstin.toLowerCase().includes(q) ||
    item.pan.toLowerCase().includes(q) ||
    item.cin.toLowerCase().includes(q) ||
    item.industry.toLowerCase().includes(q)
  );

  if (matches.length > 0) {
    return matches;
  }

  // If not in preloaded list but user typed at least 3 characters, return dynamically generated profile
  if (query.trim().length >= 3) {
    return [generateDeterministicMSME(query)];
  }

  return [];
}

// 6 Core Factors Specification Data
export const FIVOSCORE_FACTORS_SPEC = [
  {
    id: "gst",
    title: "GST Discipline & Filing Compliance",
    shortTitle: "GST Discipline",
    weight: 25,
    icon: "Receipt",
    color: "#1EA7FF",
    bgLight: "rgba(30, 167, 255, 0.1)",
    description: "Evaluates how punctually, accurately, and consistently your enterprise files monthly and quarterly returns (GSTR-1, GSTR-3B, GSTR-9).",
    whyItMatters: "Lenders treat GST filing timeliness as the truest measure of business health and transparency. Late filings, return gaps, or turnover drop-offs trigger credit warning flags.",
    keyMetrics: [
      "24-Month GSTR-3B & GSTR-1 Timeliness Ratio",
      "ITC Reconciliation: GSTR-2B vs GSTR-3B claimed tax credits",
      "Declared Sales Turnover trajectory and seasonality",
      "E-Way bill creation frequency and correlation to outward liability",
      "Zero history of GSTIN cancellation, suspension, or show-cause notices"
    ],
    goodSigns: "100% on-time filings, steady or growing turnover, ITC claim variance < 2%.",
    badSigns: "Frequent late fee payments, erratic turnover spikes followed by nil returns, return revisions."
  },
  {
    id: "cashflow",
    title: "Bank Cash Flow Velocity & Liquidity",
    shortTitle: "Cash Flow Velocity",
    weight: 25,
    icon: "Banknote",
    color: "#00D2B4",
    bgLight: "rgba(0, 210, 180, 0.1)",
    description: "Deep analytics on business banking operations using RBI Account Aggregator framework to evaluate daily balances, cash churn, and working capital buffers.",
    whyItMatters: "Unlike collateral-heavy loans, modern cash-flow underwriting assesses your daily debt-service capability and capacity to absorb delayed receivables.",
    keyMetrics: [
      "Average Monthly Balance (ABB) and Minimum Balance maintenance",
      "Monthly Credit Inflows vs Operating Outflows ratio (>1.15x ideal)",
      "Zero NACH mandate, ECS, or outward cheque bounce rate",
      "Absence of circular fund routing or high-interest overdraft max-outs",
      "Debt Service Coverage Ratio (DSCR > 1.5x)"
    ],
    goodSigns: "High cash velocity, positive month-end balances, clean NACH clearing records.",
    badSigns: "Frequent near-zero or negative balances, multiple inward/outward return bounces, sudden cash withdrawals."
  },
  {
    id: "bureau",
    title: "Commercial Bureau Health & Repayment Track",
    shortTitle: "Bureau Health",
    weight: 20,
    icon: "ShieldCheck",
    color: "#6366F1",
    bgLight: "rgba(99, 102, 241, 0.1)",
    description: "Assesses commercial credit histories across CIBIL, Experian, CRIF High Mark, including commercial rank (CMR) and promoter consumer credit.",
    whyItMatters: "Verifies historical repayment integrity. Having active trade loans or working capital lines that are serviced with 0 Days Past Due (DPD) boosts FivoScore.",
    keyMetrics: [
      "Commercial CIBIL Rank (CMR-1 to CMR-3 is Prime)",
      "0 DPD (Days Past Due) track across all active and closed tradelines",
      "Credit line utilization ratio (< 50% of sanctioned limit)",
      "Absence of loan write-offs, restructuring, or settlement remarks",
      "Measured rate of new credit inquiries (< 2 per quarter)"
    ],
    goodSigns: "Clean CMR rank, zero overdue payments, diverse lender exposure with timely repayments.",
    badSigns: "Delinquency flags, write-offs, recent surge in credit desperation inquiries."
  },
  {
    id: "supplychain",
    title: "Supply Chain & Counterparty Quality",
    shortTitle: "Supply Chain Quality",
    weight: 15,
    icon: "Network",
    color: "#F59E0B",
    bgLight: "rgba(245, 158, 11, 0.1)",
    description: "Evaluates who you sell to and who you buy from. Analyzes customer concentration, anchor corporate linkages, and trade debtor turnover cycles.",
    whyItMatters: "If an MSME relies on a single customer for 80% of revenue, the risk of payment delays or dispute is high. Diversified high-grade buyers ensure steady revenue.",
    keyMetrics: [
      "Top 5 Buyers Concentration (% of overall sales turnover)",
      "Anchor corporate buyer credit quality (Tier-1 OEMs, Listed companies)",
      "Debtor Collection Days (DSO - Days Sales Outstanding)",
      "Supplier credit terms (DPO) and repeat order continuity",
      "HSN/SAC product code stability and trade diversification"
    ],
    goodSigns: "No single customer > 30% of sales, bluechip anchor buyers, debtor days < 45.",
    badSigns: "High customer concentration (> 60%), disputed invoices, debtor days exceeding 90+ days."
  },
  {
    id: "compliance",
    title: "Statutory Compliance & Legal KYC",
    shortTitle: "Compliance & KYC",
    weight: 10,
    icon: "FileCheck",
    color: "#10B981",
    bgLight: "rgba(16, 185, 129, 0.1)",
    description: "Real-time verification across MCA21, CBDT PAN, Udyam MSME, EPFO, ESIC, and national e-Courts & NCLT litigation registries.",
    whyItMatters: "Legal disputes, tax liens, or missing MCA annual filings (MGT-7/AOC-4) represent severe existential hazards for lenders.",
    keyMetrics: [
      "Operative CBDT PAN linked with Aadhaar and promoter credentials",
      "Up-to-date MCA annual returns, director disclosures (DIR-3 KYC)",
      "Zero pending commercial recovery litigation in e-Courts or NCLT",
      "Active Udyam registration certificate matching audited turnover",
      "Timely EPFO & ESIC contributions for workforce"
    ],
    goodSigns: "Active corporate status, verified Udyam certificate, clean dispute database search.",
    badSigns: "Director disqualification, strike-off notices, active insolvency / SARFAESI petitions."
  },
  {
    id: "vintage",
    title: "Operational Vintage & Business Stability",
    shortTitle: "Vintage & Stability",
    weight: 5,
    icon: "Building2",
    color: "#EC4899",
    bgLight: "rgba(236, 72, 153, 0.1)",
    description: "Measures operational age, geographic resilience, physical premises ownership, and executive leadership continuity.",
    whyItMatters: "Enterprises that have weathered multiple macroeconomic cycles demonstrate resilient operating grit, customer stickiness, and seasoned promoter governance.",
    keyMetrics: [
      "Years in continuous operation since GST/Incorporation (> 5 years ideal)",
      "Registered industrial/commercial premises ownership vs lease security",
      "Geographical market reach (local, interstate, export)",
      "Promoter experience in the specific sector/domain"
    ],
    goodSigns: "5+ years in business, owned or long-lease premises, consistent promoter involvement.",
    badSigns: "Frequent address changes, high director turnover, operational age < 1 year."
  }
];

// How FivoScore is Generated - Methodology Engine
export const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "Consent-Driven Data Ingestion",
    title: "Multi-Source API Telemetry",
    summary: "Instant, automated ingestion of verified regulatory and cash flow telemetry without physical paperwork.",
    details: "Using open banking protocols and government APIs, FivoScore connects directly with GSTN (GSTR-1, GSTR-3B, GSTR-9), MCA21, CBDT PAN, Account Aggregator (AA) for 12 months of daily banking data, and commercial credit bureaus (CIBIL/Experian).",
    integrations: ["GSTN Network", "RBI Account Aggregator", "MCA21 Registry", "CBDT PAN API", "Commercial Bureaus", "e-Courts / NCLT"]
  },
  {
    step: "02",
    phase: "Cross-Triangulation & Anomaly Detection",
    title: "Reconciliation & Fraud Signal Scrubbing",
    summary: "Algorithms cross-check reported vs actual figures to detect revenue circularity and financial mismatches.",
    details: "The system reconciles declared turnover in GST filings against actual banking deposit inflows and ITR disclosures. Any circular invoice routing, shell company links, or artificial turnover inflation is immediately identified and isolated.",
    integrations: ["Turnover Cross-Check", "ITC Discrepancy Engine", "Circular Trade Scanner", "Shell Entity Screener"]
  },
  {
    step: "03",
    phase: "Dual-Index Algorithmic Scoring",
    title: "Ability to Pay vs Intention to Pay",
    summary: "Two distinct financial vectors are calculated independently to give a balanced, 360-degree risk profile.",
    details: "FivoScore decouples creditworthiness into two mathematical pillars: 'Ability to Pay' (60% weight, gauging cash liquidity, margins, and debt service capacity) and 'Intention to Pay' (40% weight, gauging tax punctuality, supplier repayment tracks, and statutory discipline).",
    integrations: ["Ability to Pay Engine", "Intention to Pay Vector", "Cash Velocity Index", "Repayment Track Matrix"]
  },
  {
    step: "04",
    phase: "Sector-Specific ML Calibration",
    title: "Machine Learning Benchmarking",
    summary: "Scored against 10 Lakh+ peer MSMEs within the same industry vertical, scale, and geographic trade corridor.",
    details: "An auto parts manufacturer in Pune cannot be judged with the same metric as a textile weaver in Surat. Our ensemble models (XGBoost + Explainable AI) benchmark seasonal working capital patterns against extensive historical default datasets.",
    integrations: ["10L+ MSME Benchmarks", "Sectoral Clustering", "Seasonality Normalization", "Explainable AI (SHAP)"]
  },
  {
    step: "05",
    phase: "Instant Underwriting & Capital Routing",
    title: "Credit Rating & Bank Pre-Approval",
    summary: "Translates the 300-900 score into pre-approved credit limits and routes directly to institutional lenders.",
    details: "Your finalized FivoScore generates an instant bankable underwriting summary, assigns a credit tier (A+ to D), determines pre-approved unsecured credit lines, and matches you with partner banks & NBFCs like FinAGG, Tata Capital, and ICICI.",
    integrations: ["Pre-Approved Loan Limits", "Instant Underwriting Memorandum", "NBFC / Bank API Handshake", "Automated Term Sheet"]
  }
];

// Traditional Bureau vs FivoScore Comparison Data
export const COMPARISON_DATA = [
  {
    feature: "Primary Evaluation Core",
    traditional: "Past loan repayments & collateral history",
    fivoscore: "Real-time GST filings & dynamic cash-flow velocity"
  },
  {
    feature: "Suitability for Thin-File MSMEs",
    traditional: "Poor (Often rejects businesses without prior loans)",
    fivoscore: "Built for thin-file borrowers with active business trade"
  },
  {
    feature: "Data Refresh Frequency",
    traditional: "30-45 days delayed bureau reporting",
    fivoscore: "Real-time daily & monthly regulatory telemetry"
  },
  {
    feature: "Turnover & GST Integration",
    traditional: "None (Relies solely on credit tradelines)",
    fivoscore: "Direct GSTR-1, 3B, and e-way bill reconciliation"
  },
  {
    feature: "Banking & Liquidity Assessment",
    traditional: "Static 6-month PDF bank statement sampling",
    fivoscore: "Live digital Account Aggregator flow analysis"
  },
  {
    feature: "Explainability & Improvement Roadmap",
    traditional: "Opaque 3-digit score without granular remedies",
    fivoscore: "Full 6-factor explainable breakdown + actionable tips"
  },
  {
    feature: "Loan Disbursal Acceleration",
    traditional: "14-25 days manual underwriting process",
    fivoscore: "Instant pre-approval in under 3 minutes"
  }
];
