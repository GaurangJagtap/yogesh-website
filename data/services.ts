export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: "Transaction Work" | "Accounting Control" | "Specialist Work";
  shortDescription: string;
  heroHeadline: string;
  overview: string;
  offerings: { title: string; description: string }[];
  methodology: { step: string; title: string; description: string }[];
  clientProfiles: string[];
  keyBenefits: string[];
  relatedIndustries: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategoryGroup {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  services: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    slug: "accounts-payable",
    title: "Accounts Payable",
    category: "Transaction Work",
    shortDescription: "Structured vendor bill verification, approval coordination, payment scheduling, and ledger maintenance.",
    heroHeadline: "Accurate, orderly, and systematic handling of vendor obligations and payment schedules.",
    overview: "Our Accounts Payable service provides disciplined processing of vendor bills, payment validation, and disbursements. We assist businesses in keeping liabilities organized, invoices verified against supporting documentation, and vendor balances systematically tracked in the general ledger.",
    offerings: [
      {
        title: "Vendor Invoice Verification",
        description: "Checking supplier bills against purchase orders, delivery receipts, and internal approval terms."
      },
      {
        title: "Payment Processing & Scheduling",
        description: "Preparing scheduled disbursement batches, electronic payment files, and payment release tracking."
      },
      {
        title: "Vendor Statement Reconciliations",
        description: "Routine matching of supplier account statements with internal ledger balances to promptly resolve discrepancies."
      },
      {
        title: "Payables Ledger Maintenance",
        description: "Accurate recording of payables aging, discount capture where applicable, and credit note adjustments."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Document Ingestion & Verification",
        description: "Receipt and validation of vendor invoices against purchase records and authorization thresholds."
      },
      {
        step: "02",
        title: "Ledger Entry & Categorization",
        description: "Accurate expense coding and entry into the accounting system with appropriate cost allocations."
      },
      {
        step: "03",
        title: "Payment Schedule Preparation",
        description: "Compilation of due payments for client review, approval, and scheduled disbursement."
      },
      {
        step: "04",
        title: "Disbursement Reconciliation",
        description: "Verification of released payments against bank debits and supplier ledger clearing."
      }
    ],
    clientProfiles: [
      "Growing commercial businesses managing high vendor invoice volumes",
      "Operating entities requiring disciplined disbursement approval schedules",
      "Professional service firms and service providers",
      "Retail, distribution, and commercial trade businesses"
    ],
    keyBenefits: [
      "Orderly vendor ledger records reflecting current financial obligations",
      "Minimization of duplicate payments and unverified supplier billings",
      "Clear payment schedules supporting working capital management",
      "Clean transaction documentation ready for period-end reconciliation"
    ],
    relatedIndustries: ["Commercial Trade", "Professional Services", "Technology & Services", "Manufacturing & Supply"],
    faqs: [
      {
        question: "How are payment approvals handled within your accounts payable process?",
        answer: "We organize, verify, and schedule payment batches according to your designated internal approval matrix. Client management retains final approval and release authority on all disbursements."
      },
      {
        question: "How do you handle supplier discrepancies or disputed invoices?",
        answer: "Disputed line items are flagged, isolated from payment batches, and reconciled directly against supporting purchase documents until resolved."
      }
    ]
  },
  {
    id: "02",
    number: "02",
    slug: "accounts-receivable",
    title: "Accounts Receivable",
    category: "Transaction Work",
    shortDescription: "Timely customer invoicing, billing data entry, receipt allocations, and receivables aging tracking.",
    heroHeadline: "Clear customer billing records and systematic tracking of incoming receivables.",
    overview: "Our Accounts Receivable service helps businesses maintain organized customer invoicing and cash inflow tracking. From timely generation of sales invoices to allocating incoming customer remittances and reviewing aging schedules, we support steady transaction recording across your sales cycle.",
    offerings: [
      {
        title: "Customer Invoicing & Billing",
        description: "Accurate creation and delivery of sales invoices based on approved client billings, contracts, and timesheets."
      },
      {
        title: "Cash Application & Receipt Matching",
        description: "Prompt matching and allocation of incoming bank deposits, wire transfers, and receipts to outstanding invoices."
      },
      {
        title: "Aging Schedule Maintenance",
        description: "Generation and review of receivables aging reports to monitor open balances and outstanding periods."
      },
      {
        title: "Credit Note & Adjustment Recording",
        description: "Systematic recording of authorized discounts, returns, credit memos, and balance write-offs."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Billing Verification",
        description: "Review of underlying sales orders, contract terms, or deliverables prior to invoice generation."
      },
      {
        step: "02",
        title: "Invoice Generation & Dispatch",
        description: "Timely entry and issuance of customer invoices with clear payment details and terms."
      },
      {
        step: "03",
        title: "Remittance Matching",
        description: "Daily or weekly matching of customer payment receipts against corresponding open invoice balances."
      },
      {
        step: "04",
        title: "Receivables Aging Review",
        description: "Periodic review of aging balances to highlight overdue accounts for management attention."
      }
    ],
    clientProfiles: [
      "B2B service providers and recurring-subscription businesses",
      "Trading and distribution firms issuing volume customer billing",
      "Consulting, IT services, and agency practices",
      "Commercial entities seeking organized debtor records"
    ],
    keyBenefits: [
      "Consistent, timely invoice issuance reflecting agreed customer terms",
      "Accurate allocation of customer receipts with minimal unapplied cash",
      "Clear visibility into outstanding receivables and customer aging trends",
      "Seamless integration with general ledger sales accounts"
    ],
    relatedIndustries: ["Technology & Services", "Commercial Trade", "Healthcare & Clinics", "Consulting & Agencies"],
    faqs: [
      {
        question: "Can you manage customer billing across different invoicing cycles?",
        answer: "Yes. We support milestone-based, periodic recurring, hourly, and standard delivery invoicing structures based on client agreements."
      },
      {
        question: "How do you reconcile partial or combined customer payments?",
        answer: "Incoming payments are matched using remittance advice, invoice numbers, and client confirmations to ensure correct ledger allocation."
      }
    ]
  },
  {
    id: "03",
    number: "03",
    slug: "payroll",
    title: "Payroll",
    category: "Specialist Work",
    shortDescription: "Structured payroll processing, compensation calculations, deduction management, and salary disbursements support.",
    heroHeadline: "Reliable, confidential, and structured payroll calculations and disbursement records.",
    overview: "Our Payroll service assists organizations in managing accurate and organized compensation cycles. We process recurring employee compensation, verify additions and deductions, maintain employee payroll records, and prepare disbursement summaries in compliance with client schedules.",
    offerings: [
      {
        title: "Periodic Payroll Computations",
        description: "Accurate calculation of gross compensation, applicable withholdings, benefit deductions, and net salary."
      },
      {
        title: "Payroll Summary & Pay Slip Preparation",
        description: "Generation of detailed payroll registers, department summaries, and confidential pay statements."
      },
      {
        title: "Deductions & Benefit Tracking",
        description: "Systematic record-keeping of statutory deductions, retirement contributions, reimbursements, and advances."
      },
      {
        title: "Disbursement Batch Files",
        description: "Preparation of structured bank payout files and documentation for client authorization and release."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Payroll Input Collation",
        description: "Collection of attendance, hours, new hires, exits, variable compensation, and approved adjustments."
      },
      {
        step: "02",
        title: "Computation & Verification",
        description: "Execution of payroll calculations with standard checks for deductions and compensation structure accuracy."
      },
      {
        step: "03",
        title: "Client Approval Review",
        description: "Presentation of payroll registers and net payout summaries for authorized management review."
      },
      {
        step: "04",
        title: "Disbursement & Record Archival",
        description: "Coordination of disbursement files and systematic archival of payroll records for period close."
      }
    ],
    clientProfiles: [
      "Small to mid-sized operating companies with regular employee payrolls",
      "Businesses managing salaried, hourly, and contract workforce compositions",
      "Expanding organizations seeking structured payroll administration",
      "Enterprises requiring organized payroll records for financial reporting"
    ],
    keyBenefits: [
      "Consistent and timely payroll computations aligned with client schedules",
      "Organized documentation of employee deductions and withholdings",
      "Confidential and disciplined handling of compensation data",
      "Accurate payroll expense and liability entries in the accounting system"
    ],
    relatedIndustries: ["Technology & Services", "Commercial Trade", "Professional Services", "Industrial & Logistics"],
    faqs: [
      {
        question: "How is employee payroll confidentiality safeguarded?",
        answer: "Payroll data is managed under strict confidentiality protocols, restricted access, and transmitted through secure communication channels."
      },
      {
        question: "Can adjustments for leaves, overtime, or incentives be integrated?",
        answer: "Yes. Each pay cycle incorporates verified adjustment inputs approved by authorized client management prior to final calculation."
      }
    ]
  },
  {
    id: "04",
    number: "04",
    slug: "bank-reconciliations",
    title: "Bank Reconciliations",
    category: "Accounting Control",
    shortDescription: "Systematic reconciliation of bank transactions with accounting records to maintain accurate financial information.",
    heroHeadline: "Systematic reconciliation of bank and financial accounts with general ledger records.",
    overview: "Our Bank Reconciliation service delivers structured matching of bank statements, credit card accounts, and merchant clearing accounts against internal books of account. We identify unrecorded entries, timing differences, and outstanding checks to ensure your ledger mirrors verified cash balances.",
    offerings: [
      {
        title: "Operating Bank Account Reconciliations",
        description: "Systematic comparison of bank statement activity with cash ledger transactions to verify balance accuracy."
      },
      {
        title: "Credit Card & Merchant Clearing",
        description: "Reconciliation of payment gateways, credit card statements, and merchant account settlements."
      },
      {
        title: "Outstanding Item Identification",
        description: "Pinpointing uncleared deposits, outstanding checks, bank service fees, and interest transactions."
      },
      {
        title: "Discrepancy Investigation & Corrections",
        description: "Investigating variance items and preparing necessary adjusting journal entries for client review."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Statement Extraction & Intake",
        description: "Obtaining authorized bank statements, settlement summaries, and transaction feeds."
      },
      {
        step: "02",
        title: "Transaction Matching",
        description: "Correlating debit and credit statement lines with corresponding accounting ledger entries."
      },
      {
        step: "03",
        title: "Variance Identification",
        description: "Documenting timing differences, unrecorded bank charges, direct deposits, and discrepancies."
      },
      {
        step: "04",
        title: "Reconciliation Reporting",
        description: "Producing period-end bank reconciliation statements with verified adjusted ledger balances."
      }
    ],
    clientProfiles: [
      "Businesses managing multiple operating, payroll, and merchant bank accounts",
      "Companies with active daily transaction throughput across bank and card accounts",
      "Enterprises preparing for month-end close or financial review",
      "Firms requiring reliable cash position visibility"
    ],
    keyBenefits: [
      "Accurate and up-to-date cash and bank balances in the accounting system",
      "Prompt detection of unrecognized bank charges, processing fees, or duplicate entries",
      "Essential foundation for dependable balance-sheet review and month-end close",
      "Defensible audit-ready reconciliation statements"
    ],
    relatedIndustries: ["Commercial Trade", "Technology & Services", "Financial Services", "Retail & Commerce"],
    faqs: [
      {
        question: "How frequently are bank reconciliations performed?",
        answer: "Reconciliations can be structured on a daily, weekly, or monthly schedule depending on transaction volume and client operational requirements."
      },
      {
        question: "How are recurring bank fees and automatic deductions handled?",
        answer: "Unrecorded bank fees, interest, and pre-authorized debits are identified during reconciliation and entered into the ledger under appropriate expense accounts."
      }
    ]
  },
  {
    id: "05",
    number: "05",
    slug: "journal-entries",
    title: "Journal Entries",
    category: "Accounting Control",
    shortDescription: "Preparation, recording, and documentation of general journal entries, accruals, and adjustments.",
    heroHeadline: "Precise general ledger adjustments, accruals, and supported accounting entries.",
    overview: "Our Journal Entries service ensures that adjustments, recurring allocations, accruals, and corrections are recorded in the general ledger with appropriate documentation. We support businesses in maintaining well-documented, balanced, and orderly accounting records throughout the financial cycle.",
    offerings: [
      {
        title: "Accrual & Prepayment Entries",
        description: "Calculating and posting recurring expense accruals, revenue deferrals, and prepaid asset amortizations."
      },
      {
        title: "Depreciation & Amortization Schedules",
        description: "Posting regular fixed asset depreciation and intangible asset amortization based on client schedules."
      },
      {
        title: "Correcting & Reclassification Entries",
        description: "Investigating account misclassifications and recording approved reclassification journals."
      },
      {
        title: "Documentation & Supporting Workpapers",
        description: "Maintaining clear backup documentation, rationale, and approvals for every journal transaction."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Transaction Review & Scoping",
        description: "Evaluating balance movements, period requirements, and necessary accounting adjustments."
      },
      {
        step: "02",
        title: "Computation & Preparation",
        description: "Calculating adjustment amounts, determining debit/credit allocations, and preparing journal lines."
      },
      {
        step: "03",
        title: "Supporting Backup Compilation",
        description: "Attaching supporting schedules, invoices, or calculation worksheets to substantiate the entry."
      },
      {
        step: "04",
        title: "Ledger Posting & Verification",
        description: "Posting approved journal entries and verifying general ledger balance integrity."
      }
    ],
    clientProfiles: [
      "Businesses maintaining accrual-basis accounting records",
      "Companies with prepaid contracts, asset schedules, or recurring accruals",
      "Organizations preparing for periodic accounting reviews and closures",
      "Firms requiring organized audit trails for ledger adjustments"
    ],
    keyBenefits: [
      "General ledger balances that accurately reflect period revenues and expenses",
      "Clearly documented audit trail with supporting schedules for every adjustment",
      "Consistent application of accrual accounting principles",
      "Smooth transition into month-end close procedures"
    ],
    relatedIndustries: ["Technology & Services", "Manufacturing & Supply", "Professional Services", "Commercial Trade"],
    faqs: [
      {
        question: "How do you ensure proper support for recorded journal entries?",
        answer: "Every journal entry includes an explicit explanatory description and is backed by working papers, source documents, or calculations."
      },
      {
        question: "Can recurring monthly journal entries be scheduled consistently?",
        answer: "Yes. Standard recurring entries like amortizations, rent allocations, and routine accruals are scheduled and verified each period."
      }
    ]
  },
  {
    id: "06",
    number: "06",
    slug: "month-end-close",
    title: "Month-End Close",
    category: "Accounting Control",
    shortDescription: "Structured cut-off procedures, ledger reconciliations, balance-sheet review, and trial balance finalization.",
    heroHeadline: "Structured period-end procedures to finalize books and prepare reliable trial balances.",
    overview: "Our Month-End Close service provides a methodical checklist-driven process to close monthly accounting periods. We coordinate transaction cut-offs, complete reconciliations, post required adjustments, and review balance-sheet accounts to deliver finalized trial balances and reliable financial records.",
    offerings: [
      {
        title: "Period-End Cut-Off Management",
        description: "Ensuring revenue and expense transactions are recorded in the correct accounting period without overlap."
      },
      {
        title: "Balance-Sheet Account Review",
        description: "Detailed review of asset, liability, and equity balances against supporting sub-ledgers and reconciliations."
      },
      {
        title: "Trial Balance Finalization",
        description: "Verifying ledger debit-credit equality and examining account variances prior to closing the books."
      },
      {
        title: "Close Checklist & Status Tracking",
        description: "Executing a structured closing schedule to maintain timely and predictable reporting timetables."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Cut-Off & Transaction Closure",
        description: "Finalizing payables, receivables, and cash transactions for the closed calendar month."
      },
      {
        step: "02",
        title: "Sub-Ledger Reconciliations",
        description: "Matching bank, sub-ledger, and subsidiary schedules to general ledger control accounts."
      },
      {
        step: "03",
        title: "Adjustments & Accruals",
        description: "Posting verified closing journals, accruals, depreciation, and deferral amortizations."
      },
      {
        step: "04",
        title: "Trial Balance Sign-Off",
        description: "Reviewing the final trial balance to confirm period readiness for reporting."
      }
    ],
    clientProfiles: [
      "Operating companies seeking dependable and timely monthly reporting schedules",
      "Businesses needing structured accounting control to support management reviews",
      "Enterprises preparing financial records for external accountants or auditors",
      "Firms transitioning from ad-hoc bookkeeping to disciplined monthly closes"
    ],
    keyBenefits: [
      "Predictable closing timetables providing timely visibility into monthly results",
      "Reduction in post-close corrections and backdated transaction errors",
      "Verified balance sheet balances supporting reliable management reporting",
      "Clear, traceable workpapers supporting period-over-period reviews"
    ],
    relatedIndustries: ["Commercial Trade", "Technology & Services", "Healthcare & Clinics", "Manufacturing & Supply"],
    faqs: [
      {
        question: "How long does a typical month-end close cycle take?",
        answer: "Closing timelines depend on transaction complexity and document availability; we work with clients to establish a realistic, consistent closing calendar (e.g. 5–10 business days post period end)."
      },
      {
        question: "What output does the client receive at the end of the close?",
        answer: "Clients receive a finalized trial balance, updated reconciliation summaries, and confirmed period-end general ledger reports."
      }
    ]
  },
  {
    id: "07",
    number: "07",
    slug: "sales-payroll-tax-support",
    title: "Sales & Payroll Tax Support",
    category: "Specialist Work",
    shortDescription: "Preparation of sales tax summaries, payroll tax withholding calculations, and filing support.",
    heroHeadline: "Accurate tax liability tracking, withholding computations, and filing support schedules.",
    overview: "Our Sales and Payroll Tax Support service helps organizations organize tax-related financial data and maintain accurate liability accounts. We compile transaction summaries for sales tax obligations, compute payroll tax withholdings, and prepare reconciliation schedules to support client tax compliance and filing timelines.",
    offerings: [
      {
        title: "Sales Tax Summary Preparation",
        description: "Compiling taxable sales, exempt transactions, and collected tax figures across relevant jurisdictions."
      },
      {
        title: "Payroll Tax Withholding Calculations",
        description: "Tracking payroll tax withholdings, employer contribution liabilities, and periodic remittance amounts."
      },
      {
        title: "Tax Liability Ledger Reconciliations",
        description: "Matching recorded tax obligations with actual remittances to verify liability account balances."
      },
      {
        title: "Filing Support Workpapers",
        description: "Preparing clean, organized schedules and workpapers for client tax preparers or designated filers."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Transaction Data Collation",
        description: "Extracting sales invoice and payroll registers for the applicable tax reporting period."
      },
      {
        step: "02",
        title: "Liability Computation & Review",
        description: "Verifying tax amounts against transaction summaries and statutory rate parameters."
      },
      {
        step: "03",
        title: "Ledger Reconciliation",
        description: "Reconciling tax payable general ledger accounts against prepared reporting summaries."
      },
      {
        step: "04",
        title: "Filing Package Delivery",
        description: "Packaging reconciled schedules and workpapers for client submission or filing coordinators."
      }
    ],
    clientProfiles: [
      "Businesses operating across single or multiple sales tax jurisdictions",
      "Employers managing periodic payroll withholding and reporting responsibilities",
      "Enterprises requiring organized tax liability records for accounting close",
      "Firms coordinating with external tax accountants for formal filings"
    ],
    keyBenefits: [
      "Accurately maintained tax liability accounts without unverified balance buildups",
      "Organized transaction summaries that simplify the filing preparation process",
      "Clear separation of collected taxes from general business operating revenues",
      "Traceable workpapers ready for internal review or regulatory scrutiny"
    ],
    relatedIndustries: ["Commercial Trade", "Retail & Commerce", "Technology & Services", "Professional Services"],
    faqs: [
      {
        question: "Do you provide tax filing support schedules or formal legal tax opinions?",
        answer: "We provide structured accounting and operational tax support, including calculating liabilities, organizing summaries, and reconciling tax accounts. Formal legal opinions or advocacy remain with licensed attorneys or registered tax representatives."
      },
      {
        question: "How do you reconcile differences between collected tax and tax paid?",
        answer: "We reconcile sales tax payable and payroll tax accounts against actual bank remittances to maintain clear ledger clearing."
      }
    ]
  },
  {
    id: "08",
    number: "08",
    slug: "financial-reporting",
    title: "Financial Reporting",
    category: "Specialist Work",
    shortDescription: "Preparation of balance sheets, income statements, cash flow statements, and management reports.",
    heroHeadline: "Clear, reliable financial statements and management reports based on verified ledgers.",
    overview: "Our Financial Reporting service produces structured periodic financial statements and management accounts derived from reconciled general ledger data. We compile balance sheets, income statements, cash flow summaries, and key variance schedules to provide business leadership with clear visibility into financial performance.",
    offerings: [
      {
        title: "Balance Sheet & Income Statement",
        description: "Preparation of core periodic financial statements reflecting verified assets, liabilities, revenue, and expenses."
      },
      {
        title: "Cash Flow Statement Preparation",
        description: "Compiling operating, investing, and financing cash flow summaries based on ledger movements."
      },
      {
        title: "Budget vs. Actual Variance Reports",
        description: "Structured comparison schedules highlighting variations between planned budgets and actual figures."
      },
      {
        title: "Management Reporting Packs",
        description: "Compiling concise, readable reporting summaries tailored to internal management review meetings."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Trial Balance Validation",
        description: "Confirming that all period-end reconciliations, adjustments, and close procedures are finalized."
      },
      {
        step: "02",
        title: "Statement Compilation",
        description: "Mapping general ledger accounts into structured balance sheet, P&L, and cash flow presentations."
      },
      {
        step: "03",
        title: "Analytical Review",
        description: "Performing sanity checks, period-over-period variance reviews, and margin consistency checks."
      },
      {
        step: "04",
        title: "Report Package Delivery",
        description: "Delivering polished, structured financial reporting packages to client decision-makers."
      }
    ],
    clientProfiles: [
      "Growing companies requiring organized monthly or quarterly financial statements",
      "Business owners and executives seeking clear operational performance visibility",
      "Enterprises providing periodic financial updates to lenders or board members",
      "Firms requiring reliable reports for strategic planning and cash management"
    ],
    keyBenefits: [
      "Consistent, structured financial statements reflecting closed and reconciled books",
      "Clear visibility into revenue trends, expense categories, and balance-sheet changes",
      "Reliable information foundation for leadership decision-making",
      "Standardized reporting packages suitable for stakeholders and banking partners"
    ],
    relatedIndustries: ["Commercial Trade", "Technology & Services", "Financial Services", "Healthcare & Clinics"],
    faqs: [
      {
        question: "Can financial reports be customized to match our management reporting format?",
        answer: "Yes. Statements can be structured to align with your internal departmental classifications, cost centers, or management reporting templates."
      },
      {
        question: "Are these financial reports based on reconciled records?",
        answer: "Yes. Reports are compiled directly from verified general ledger balances following completion of reconciliations and close procedures."
      }
    ]
  },
  {
    id: "09",
    number: "09",
    slug: "audit-support",
    title: "Audit Support",
    category: "Specialist Work",
    shortDescription: "Preparation of audit schedules, PBC request fulfillment, workpaper organization, and auditor liaison.",
    heroHeadline: "Organized workpapers, schedule preparation, and systematic support for external audits.",
    overview: "Our Audit Support service assists businesses in preparing for internal and external audits. We organize requested workpapers, compile Prepared-by-Client (PBC) schedules, reconcile sub-ledgers with trial balance accounts, and facilitate orderly coordination with external auditors to streamline the audit process.",
    offerings: [
      {
        title: "PBC Request List Coordination",
        description: "Tracking, organizing, and assembling requested documents, lead schedules, and supporting files."
      },
      {
        title: "Lead Schedule & Workpaper Preparation",
        description: "Compiling detailed account lead sheets tied directly to the final trial balance and source records."
      },
      {
        title: "Sample Selection Documentation",
        description: "Gathering supporting invoices, bank records, and contracts for audit testing samples."
      },
      {
        title: "Auditor Query Liaison Support",
        description: "Assisting internal teams in addressing auditor inquiries and providing clear documentation."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "PBC Scoping & Milestone Planning",
        description: "Reviewing auditor requirement lists and establishing an orderly document collation timeline."
      },
      {
        step: "02",
        title: "Schedule Preparation & Tie-Out",
        description: "Preparing supporting lead schedules that tie directly to the general ledger trial balance."
      },
      {
        step: "03",
        title: "Sample Documentation Assembly",
        description: "Organizing requested transaction vouchers, vendor bills, agreements, and bank confirmations."
      },
      {
        step: "04",
        title: "Audit Coordination & Follow-Up",
        description: "Responding systematically to auditor requests and tracking open inquiry items through completion."
      }
    ],
    clientProfiles: [
      "Companies undergoing statutory, financial, or special-purpose audits",
      "Enterprises receiving external auditor request lists and tight review schedules",
      "Businesses seeking to minimize internal operational disruption during audit cycles",
      "Organizations aiming for well-organized, defensible audit files"
    ],
    keyBenefits: [
      "Well-organized audit files that tie directly to finalized financial statements",
      "Reduced time spent by internal operational staff managing auditor document requests",
      "Prompt response to auditor sample selections with complete documentation",
      "A structured, orderly audit process with clear tracking of pending deliverables"
    ],
    relatedIndustries: ["Financial Services", "Technology & Services", "Manufacturing & Supply", "Commercial Trade"],
    faqs: [
      {
        question: "Does ENTRABALANCE GLOBAL LLP conduct the statutory audit or support the audit process?",
        answer: "We provide comprehensive audit support services—preparing schedules, assembling documentation, and coordinating PBC items—to assist clients in successfully completing audits conducted by their appointed external auditors."
      },
      {
        question: "Can you assist if our accounting records need cleanup prior to audit fieldwork?",
        answer: "Yes. We support pre-audit reconciliations and balance-sheet reviews to ensure records are reconciled and supported before audit fieldwork begins."
      }
    ]
  },
  {
    id: "10",
    number: "10",
    slug: "process-improvement",
    title: "Process Improvement",
    category: "Specialist Work",
    shortDescription: "Review of accounting workflows, documentation of financial controls, and standardization of procedures.",
    heroHeadline: "Streamlining accounting workflows and reinforcing operational financial controls.",
    overview: "Our Process Improvement service evaluates day-to-day accounting routines to eliminate bottlenecks, standardize workflows, and improve financial control. We work with clients to document standard operating procedures, improve closing cycle times, and introduce structured transaction processing practices.",
    offerings: [
      {
        title: "Accounting Workflow Review",
        description: "Mapping existing payables, receivables, and close routines to identify delays and procedural gaps."
      },
      {
        title: "Standard Operating Procedures (SOPs)",
        description: "Documenting clear, step-by-step guidelines for routine accounting operations and approvals."
      },
      {
        title: "Period-Close Acceleration",
        description: "Restructuring closing tasks and checklist dependencies to achieve more timely period-end completion."
      },
      {
        title: "Internal Control Standardization",
        description: "Clarifying segregation of duties, document approval thresholds, and reconciliation cadence."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Current-State Assessment",
        description: "Reviewing existing accounting workflows, communication channels, and procedural pain points."
      },
      {
        step: "02",
        title: "Bottleneck & Control Analysis",
        description: "Identifying repetitive manual steps, missing reconciliations, or approval friction points."
      },
      {
        step: "03",
        title: "Workflow Design & SOP Development",
        description: "Formulating standardized procedures, practical checklists, and role responsibilities."
      },
      {
        step: "04",
        title: "Implementation & Review",
        description: "Supporting adoption of improved workflows and reviewing operational performance gains."
      }
    ],
    clientProfiles: [
      "Companies experiencing growing transaction volumes or operational bottlenecks",
      "Organizations seeking to transition from informal routines to documented SOPs",
      "Enterprises looking to shorten their month-end closing cycle",
      "Firms aiming to strengthen internal accounting controls and transaction accuracy"
    ],
    keyBenefits: [
      "Documented standard procedures that support operational consistency and continuity",
      "Clear accountability across transaction entry, review, and approval stages",
      "More efficient closing cycles with fewer last-minute corrections",
      "Stronger accounting control framework supporting organizational growth"
    ],
    relatedIndustries: ["Technology & Services", "Commercial Trade", "Manufacturing & Supply", "Professional Services"],
    faqs: [
      {
        question: "How do you approach accounting process improvement without disrupting operations?",
        answer: "We assess current workflows collaboratively, identify practical adjustments, and introduce standardized checklists and SOPs incrementally to preserve day-to-day continuity."
      },
      {
        question: "What types of accounting processes can be improved?",
        answer: "Common areas include accounts payable approvals, customer invoicing workflows, bank reconciliation frequency, and month-end closing checklists."
      }
    ]
  }
];

export const serviceCategoryGroups: ServiceCategoryGroup[] = [
  {
    id: "transaction-work",
    title: "Transaction Work",
    tagline: "Day-to-day financial transaction processing and maintenance",
    description: "Accurate, structured, and organized handling of daily commercial transactions—ensuring bills, invoices, payments, and data entry are recorded with precision.",
    items: [
      "Accounts Payable",
      "Accounts Receivable",
      "Bills & Invoice Processing",
      "Payment Processing",
      "Accounting Data Entry"
    ],
    services: servicesData.filter((s) => s.category === "Transaction Work")
  },
  {
    id: "accounting-control",
    title: "Accounting Control",
    tagline: "Ledger accuracy, period-end procedures, and balance-sheet review",
    description: "Systematic controls to maintain accounting accuracy, reconcile financial records, record supported journal adjustments, and execute timely period-end closures.",
    items: [
      "Bank Reconciliations",
      "Journal Entries",
      "Month-End Close",
      "Balance-Sheet Review"
    ],
    services: servicesData.filter((s) => s.category === "Accounting Control")
  },
  {
    id: "specialist-work",
    title: "Specialist Work",
    tagline: "Reporting, payroll, tax support, audit requests, and process enhancement",
    description: "Focused specialist capabilities supporting payroll calculations, sales and payroll tax schedules, financial reporting packages, audit request coordination, and workflow improvements.",
    items: [
      "Payroll",
      "Sales & Payroll Tax Support",
      "Financial Reporting",
      "Audit Support / Requests",
      "Process Improvement"
    ],
    services: servicesData.filter((s) => s.category === "Specialist Work")
  }
];
