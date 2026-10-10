import React from "react";
import { Layers, ShieldCheck, Calendar, FileText } from "lucide-react";
import { companyInformation } from "../data/team";

export const Stats: React.FC = () => {
  const corporateFacts = [
    {
      number: "5+",
      label: "Years Practice Experience",
      detail: "Delivering trusted accounting, taxation & financial operations across US, UK & India",
      icon: Calendar,
    },
    {
      number: "100+",
      label: "Satisfied Corporate Clients",
      detail: "Proven track record supporting multi-jurisdiction business processes",
      icon: FileText,
    },
    {
      number: "2019",
      label: "Heritage Founded",
      detail: "Established institutional experience in accounting & transaction control",
      icon: Layers,
    },
    {
      number: "100%",
      label: "Client Satisfaction Rate",
      detail: "Strict partner oversight, zero-variance reconciliations & compliance discipline",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-12 md:py-16 border-b border-[#E8E0D8] relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {corporateFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-[#B87333]/30 hover:border-[#B87333] transition-colors group flex flex-col justify-between py-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl sm:text-4xl font-serif text-[#1A1412] font-semibold tracking-tight">
                      {fact.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#B87333]/70 group-hover:text-[#B87333] transition-colors" />
                  </div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] mb-1.5 font-sans">
                    {fact.label}
                  </h4>
                </div>
                <p className="text-xs text-[#7A6F6B] leading-relaxed pt-2 border-t border-[#F0EAE3]">
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
