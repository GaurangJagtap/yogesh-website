import React from "react";
import { ShieldCheck, Lock, EyeOff, Server, FileCheck, CheckCircle2 } from "lucide-react";

export const DataPrivacySection: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: "Bank-Grade Encryption Standards",
      desc: "All financial statements, journal entries, and transactional records are encrypted in transit using TLS 1.3 and at rest with AES-256 protocols.",
    },
    {
      icon: EyeOff,
      title: "Rigorous Non-Disclosure Compliance",
      desc: "Every mandate operates under legally binding Non-Disclosure Agreements (NDAs). Your corporate books, vendor details, and payroll data remain strictly confidential.",
    },
    {
      icon: Server,
      title: "Isolated Client Tenancy & Access Controls",
      desc: "Role-based access controls (RBAC) ensure only designated, vetted engagement accountants and lead partners have authorization to view your records.",
    },
    {
      icon: FileCheck,
      title: "Comprehensive Audit Trail & Logs",
      desc: "Every ledger posting, bank reconciliation adjustment, and approval event creates an immutable time-stamped log for full regulatory defensibility.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E8E0D8] relative overflow-hidden">
      {/* Background ambient security shield subtle motif */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#B87333]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E8E0D8] rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-[#B87333]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B87333] font-semibold">
              Enterprise Trust &amp; Confidentiality Guarantee
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1412] font-medium tracking-tight mb-6">
            Institutional Data Privacy &amp; Confidentiality Standards
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto">
            Accounting and financial data is the lifeblood of your enterprise. We protect your corporate intelligence with strict regulatory compliance, segregated access controls, and legally binding non-disclosure mandates.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E8E0D8] p-8 flex flex-col justify-between group hover:border-[#B87333] transition-all duration-300 card-sheen"
              >
                <div>
                  <div className="w-12 h-12 bg-white border border-[#E8E0D8] flex items-center justify-center text-[#B87333] mb-6 group-hover:bg-[#B87333] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1412] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E0D8] flex items-center gap-2 text-[11px] font-mono text-[#B87333] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Enforced Across All Accounts</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance Assurance Bar */}
        <div className="mt-12 p-6 bg-[#FAF7F2] border border-[#E8E0D8] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="font-medium text-[#1A1412]">
              Cross-Jurisdiction Standards: Compliant with US, UK &amp; Indian corporate data protection guidelines.
            </span>
          </div>
          <div className="text-[#7A6F6B] font-mono text-[11px]">
            100% Confidential Mandates &bull; Strict NDA Signed Before Ingestion
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection;
