import React from "react";
import { Layers, ShieldCheck, Calendar, FileText, CheckCircle } from "lucide-react";
import { companyInformation } from "../data/team";

export const Stats: React.FC = () => {
  const corporateFacts = [
    {
      number: "03",
      label: "Operational Pillars",
      detail: "Transaction Work, Accounting Control, and Specialist Work",
      icon: Layers,
      highlight: "Fully Integrated",
    },
    {
      number: "10",
      label: "Work Areas",
      detail: "Payables, receivables, close, reconciliations, payroll & audit support",
      icon: FileText,
      highlight: "End-to-End Scope",
    },
    {
      number: "2024",
      label: "Incorporation Year",
      detail: `Incorporated on ${companyInformation.incorporationDate}`,
      icon: Calendar,
      highlight: "Active Status",
    },
    {
      number: "LLP",
      label: `LLPIN: ${companyInformation.llpin}`,
      detail: "Registered corporate legal entity with dedicated principal contacts",
      icon: ShieldCheck,
      highlight: "Officially Registered",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-20 border-b border-[#E8E0D8] relative overflow-hidden">
      {/* Visual background subtle grid accent */}
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E8E0D8] p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(43,33,30,0.08)] card-sheen"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B87333] bg-[#FAF7F2] px-2 py-0.5 border border-[#E8E0D8] flex items-center gap-1 font-semibold">
                      <CheckCircle className="w-2.5 h-2.5 text-[#22C55E]" />
                      {fact.highlight}
                    </span>
                    <div className="w-8 h-8 rounded-none bg-[#FAF7F2] border border-[#E8E0D8] group-hover:border-[#B87333] flex items-center justify-center text-[#2B211E] group-hover:text-[#B87333] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1A1412] group-hover:text-[#B87333] transition-colors block mb-1 font-mono">
                    {fact.number}
                  </span>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2B211E] mb-2">
                    {fact.label}
                  </h4>
                </div>
                <p className="text-xs text-[#7A6F6B] leading-relaxed pt-3 border-t border-[#F0EAE3]">
                  {fact.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
