import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Layers, FileCheck, ShieldAlert, Cpu } from "lucide-react";

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Transaction Processing",
      scope: "Bills, Invoices, Payments, Data Entry & Sub-Ledgers",
      description:
        "Accurate receipt, verification, and recording of day-to-day business transactions across accounts payable, accounts receivable, and cash movements.",
      icon: Layers
    },
    {
      step: "02",
      title: "Accounting Controls",
      scope: "Reconciliations, Journal Entries, Month-End Close",
      description:
        "Rigorous verification of bank accounts, recording of supported journal adjustments, balance-sheet account reviews, and periodic cut-off management.",
      icon: FileCheck
    },
    {
      step: "03",
      title: "Specialist Support",
      scope: "Payroll Calculations, Tax Schedules, Audit Collation",
      description:
        "Dedicated handling of complex workstreams including payroll calculations, sales and payroll tax schedules, and structured audit request fulfillment.",
      icon: ShieldAlert
    },
    {
      step: "04",
      title: "Reporting & Review",
      scope: "Financial Statements, Variance Schedules, Workflow Refinement",
      description:
        "Compilation of verified financial reporting packages, operational management visibility, and continuous accounting process improvement.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F4EFEA] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="How We Work"
          title="A structured workflow from daily entry to final reporting."
          align="split"
          description="We align our work into four progressive stages to ensure accuracy, thorough ledger control, and dependable financial visibility."
        />

        {/* Visual Pipeline Bar */}
        <div className="hidden lg:flex items-center justify-between mb-12 bg-[#FFFFFF] p-6 border border-[#E8E0D8] shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#B87333] animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1A1412]">
              Standardized Accounting Pipeline
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#7A6F6B]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" /> Intake &amp; Match
            </span>
            <span className="text-[#D5C9BE]">&rarr;</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B87333]" /> Ledger Controls
            </span>
            <span className="text-[#D5C9BE]">&rarr;</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3D312E]" /> Specialist Review
            </span>
            <span className="text-[#D5C9BE]">&rarr;</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1A1412]" /> Reporting Sign-Off
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const flowImages = [
              "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400", // Transaction processing
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400", // Accounting control
              "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400", // Specialist support
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400"  // Reporting & review
            ];

            return (
              <div
                key={item.step}
                className="relative bg-[#FFFFFF] border border-[#E8E0D8] overflow-hidden flex flex-col justify-between group card-sheen"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-28 w-full bg-[#1A1412] overflow-hidden">
                  <Image
                    src={flowImages[idx]}
                    alt={`${item.title} stage`}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] font-semibold tracking-widest bg-[#1A1412]/85 text-[#FAF7F2] px-2 py-0.5 border border-white/20">
                      STAGE {item.step}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-[#FFFFFF]/90 backdrop-blur-md flex items-center justify-center text-[#1A1412] group-hover:bg-[#B87333] group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1412] group-hover:text-[#B87333] transition-colors mb-2">
                      {item.title}
                    </h3>

                    <div className="text-[11px] uppercase tracking-wider text-[#B87333] font-semibold mb-3 pb-2 border-b border-[#F0EAE3]">
                      {item.scope}
                    </div>

                    <p className="text-xs text-[#3D312E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#F0EAE3] flex items-center justify-between text-xs text-[#7A6F6B]">
                    <span className="font-mono text-[11px]">Phase {idx + 1} of 4</span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#B87333] hidden lg:block transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
