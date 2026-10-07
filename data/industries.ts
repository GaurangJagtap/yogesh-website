export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  challenges: string[];
  capabilities: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "tech",
    number: "01",
    title: "Technology & SaaS",
    description: "Supporting high-growth digital businesses with cross-border tax structures, revenue recognition (ASC 606), ESOP modeling, and IP management.",
    challenges: [
      "Complex multi-currency recurring revenue recognition",
      "Transfer pricing for remote global engineering pods",
      "US flipping and overseas holding company governance"
    ],
    capabilities: [
      "ASC 606 & IFRS 15 subscription accounting architecture",
      "Delaware flip & reverse flip advisory",
      "Global transfer pricing defense for tech IP"
    ]
  },
  {
    id: "financial-services",
    number: "02",
    title: "Financial Services & Asset Management",
    description: "Guiding investment managers, family offices, and alternative investment funds through strict fiduciary, regulatory, and portfolio compliance.",
    challenges: [
      "Rigorous statutory reporting across layered fund vehicles",
      "NAV calculation auditing and custodian reconciliations",
      "Cross-jurisdictional withholding tax on dividend & capital gains"
    ],
    capabilities: [
      "AIF & fund governance reporting frameworks",
      "FDI and portfolio investment certification under FEMA",
      "Independent valuation of illiquid portfolio assets"
    ]
  },
  {
    id: "healthcare",
    number: "03",
    title: "Healthcare & Life Sciences",
    description: "Providing capital, governance, and compliance assurance to medical technology, diagnostic centers, and pharmaceutical ventures navigating strict oversight.",
    challenges: [
      "Strict regulatory reporting across clinical trials and supply chains",
      "Capital-intensive equipment financing and asset depreciation",
      "Complex VAT/GST and indirect tax exemptions on medical supplies"
    ],
    capabilities: [
      "Specialized healthcare entity structuring and joint ventures",
      "Fixed asset reconciliation and depreciation audits",
      "International licensing royalty review and transfer pricing"
    ]
  },
  {
    id: "manufacturing",
    number: "04",
    title: "Manufacturing & Supply Chain",
    description: "Advising domestic and export-oriented industrial corporations on inventory valuation, customs optimization, and operational internal controls.",
    challenges: [
      "Multi-echelon inventory valuation (AS 2 / IAS 2)",
      "Duty drawback and international trade tariff compliance",
      "Working capital optimization across lengthy supply cycles"
    ],
    capabilities: [
      "Cost accounting records certification and variance diagnostics",
      "Cross-border supply chain indirect tax optimization",
      "Plant & equipment fixed asset audit and impairment tests"
    ]
  },
  {
    id: "real-estate",
    number: "05",
    title: "Real Estate & Infrastructure",
    description: "Structuring capital stacks, project financing models, SPV compliance, and REIT advisory for commercial and residential developments.",
    challenges: [
      "Project completion vs percentage of completion accounting",
      "Complex joint development agreements (JDA) tax exposure",
      "Multi-tiered SPV debt covenant monitoring"
    ],
    capabilities: [
      "SPV consolidation and escrow account audit protocols",
      "Capital gains optimization on real estate land conversions",
      "Project feasibility financial modeling and lender compliance"
    ]
  },
  {
    id: "retail",
    number: "06",
    title: "Retail & Consumer Brands",
    description: "Powering omnichannel direct-to-consumer and retail enterprises with multi-channel reconciliation, inventory controls, and cross-border distribution.",
    challenges: [
      "High-volume transaction reconciliation across merchant gateways",
      "Multi-state sales tax / GST compliance and return matching",
      "Reverse logistics and return reserve provisions"
    ],
    capabilities: [
      "Automated marketplace reconciliation frameworks",
      "Omnichannel ERP accounting integration",
      "Working capital and supplier credit line advisory"
    ]
  },
  {
    id: "professional-services",
    number: "07",
    title: "Professional Services & Consulting",
    description: "Helping law firms, architecture practices, and specialized consulting firms structure partnership equity, billing systems, and cross-border engagements.",
    challenges: [
      "Partner compensation modeling and equity waterfall calculations",
      "Work-in-progress (WIP) time billing valuation and write-offs",
      "Cross-border service withholding tax and equalisation levies"
    ],
    capabilities: [
      "LLP and partnership agreement governance and tax structuring",
      "Practice management billing and revenue recognition",
      "Export of services certification and zero-rated tax filings"
    ]
  },
  {
    id: "international-business",
    number: "08",
    title: "International Trade & Conglomerates",
    description: "Delivering unified financial controllership, treasury governance, and strategic advisory for conglomerates with diverse multi-industry interests.",
    challenges: [
      "Consolidated multi-subsidiary global financial close",
      "Foreign exchange hedging and treasury exposure",
      "Divergent local statutory governance across overseas subsidiaries"
    ],
    capabilities: [
      "Global consolidated financial statement preparation",
      "Comprehensive intercompany balance settlement protocols",
      "Board governance reviews and transnational audit coordination"
    ]
  }
];
