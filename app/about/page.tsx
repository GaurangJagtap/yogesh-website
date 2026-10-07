import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import CorporateInfoBlock from "../../components/CorporateInfoBlock";
import { CheckCircle2, Shield, Layers, FileCheck } from "lucide-react";
import { companyInformation } from "../../data/team";

export const metadata: Metadata = {
  title: `About The Firm | ${companyInformation.legalName}`,
  description:
    `${companyInformation.legalName} provides structured accounting and financial operations support across transaction processing, accounting controls, specialist accounting functions, reporting, audit support, and process improvement.`,
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Layers,
      title: "Transaction Disciplines",
      description: "Structured processing of payables, receivables, invoices, and payments to maintain organized ledger records.",
    },
    {
      icon: FileCheck,
      title: "Accounting Controls",
      description: "Systematic bank reconciliations, regular accrual journal entries, and balance-sheet account reviews.",
    },
    {
      icon: Shield,
      title: "Specialist Support",
      description: "Dedicated handling of payroll computations, sales and payroll tax schedules, and external audit request coordination.",
    },
    {
      icon: CheckCircle2,
      title: "Process Improvement",
      description: "Collaborative review of accounting workflows to document SOPs and improve monthly close predictability.",
    },
  ];

  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Editorial Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              About {companyInformation.legalName}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Accounting Operations. Financial Accuracy. Better Business Processes.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            {companyInformation.legalName} provides structured accounting and financial operations support across transaction processing, accounting controls, specialist accounting functions, reporting, audit support, and process improvement.
          </p>
        </div>
      </section>

      {/* Corporate Registration Details */}
      <CorporateInfoBlock />

      {/* Company Introduction Section */}
      <section className="py-20 md:py-28 container-custom border-b border-[#EAEAEA]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#444444] text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] tracking-tight">
              A dedicated focus on operational clarity and reliable accounting records.
            </h2>
            <p>
              {companyInformation.legalName} was incorporated on {companyInformation.incorporationDate} as a Limited Liability Partnership (LLPIN: {companyInformation.llpin}) to provide reliable, organized, and professional accounting operations support.
            </p>
            <p className="text-base text-[#666666]">
              We assist businesses in managing day-to-day transaction workflows, reconciling bank accounts and sub-ledgers, executing structured month-end closes, and maintaining verified financial reporting schedules.
            </p>
            <p className="text-base text-[#666666]">
              Engagements are coordinated through our designated principal contacts—{companyInformation.principalContacts.map(c => c.name).join(" and ")}—ensuring direct communication, clear accountability, and responsive support.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full bg-[#F3F3F0] border border-[#E0E0DC] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
                alt="Professional corporate accounting operations at ENTRABALANCE GLOBAL LLP"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="mt-3 text-xs text-[#777777] flex justify-between">
              <span>{companyInformation.legalName}</span>
              <span>LLPIN: {companyInformation.llpin}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Pillars */}
      <section className="py-20 md:py-28 bg-[#FAF9F7] border-b border-[#EAEAE8]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Core Work Areas"
            title="Operational focus across each financial cycle."
            description="Our service framework addresses core accounting needs from daily entries to period-end reporting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white p-8 border border-[#E8E0D8] flex flex-col justify-between card-sheen">
                  <div>
                    <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E8E0D8] flex items-center justify-center text-[#B87333] mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-[#1A1412] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#3D312E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 container-custom text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] mb-4">
          Discuss your accounting operations requirements.
        </h2>
        <p className="text-sm text-[#555555] leading-relaxed mb-8">
          Connect directly with our principal contacts to review your current transaction volume, period-close schedule, or specialist accounting support needs.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contact" variant="primary" icon>
            Connect With Principal Contacts
          </Button>
          <Button href="/services" variant="outline">
            Review All Services
          </Button>
        </div>
      </section>
    </div>
  );
}
