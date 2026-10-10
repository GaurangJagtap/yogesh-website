import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import { servicesData, serviceCategoryGroups } from "../../data/services";
import { companyInformation } from "../../data/team";

export const metadata: Metadata = {
  title: `Services & Work Areas | ${companyInformation.legalName}`,
  description:
    "Explore the 10 work areas and 3 core operational categories provided by ENTRABALANCE GLOBAL LLP: Transaction Work, Accounting Control, and Specialist Work.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#FFFFFF]">
      {/* Services Catalog Hero with Distinct Functional Layout */}
      <section className="container-custom pb-14 md:pb-20 border-b border-[#E8E0D8]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] border border-[#E8E0D8] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#B87333]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#B87333] font-semibold">
              Operational Scope &amp; Catalog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#1A1412] leading-[1.1] mb-6">
            10 Structured Work Areas. 3 Core Disciplines.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-3xl mb-8">
            Explore our specialized practice disciplines designed to manage high-volume transactions, execute rigorous month-end balances, and assist leadership with audit-ready financial schedules.
          </p>

          {/* Direct Category Jump Navigation Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[#1A1412] uppercase tracking-wider mr-2">
              Practice Groups:
            </span>
            <a
              href="#transaction-work"
              className="px-4 py-2 text-xs font-medium text-[#2B211E] bg-[#FAF7F2] hover:bg-[#B87333] hover:text-white border border-[#E8E0D8] transition-all flex items-center gap-1.5"
            >
              <span>01. Transaction Work</span>
              <span className="text-[10px] opacity-70">↓</span>
            </a>
            <a
              href="#accounting-control"
              className="px-4 py-2 text-xs font-medium text-[#2B211E] bg-[#FAF7F2] hover:bg-[#B87333] hover:text-white border border-[#E8E0D8] transition-all flex items-center gap-1.5"
            >
              <span>02. Accounting Control</span>
              <span className="text-[10px] opacity-70">↓</span>
            </a>
            <a
              href="#specialist-work"
              className="px-4 py-2 text-xs font-medium text-[#2B211E] bg-[#FAF7F2] hover:bg-[#B87333] hover:text-white border border-[#E8E0D8] transition-all flex items-center gap-1.5"
            >
              <span>03. Specialist Support</span>
              <span className="text-[10px] opacity-70">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Detailed Operational Capability Dossiers */}
      <section className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E8E0D8]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Practice Disciplines"
            title="Three core operational areas detailed."
            description="Our service framework is organized into three distinct practice groups based on operational focus, frequency, and financial risk profiles."
          />

          <div className="space-y-12 mt-12">
            {serviceCategoryGroups.map((group, idx) => {
              const pillarImages = [
                "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000"
              ];
              const pillarStats = [
                { cadence: "Continuous / Daily", focus: "Payables, Receivables & Bank Feeds", risk: "Cash Leakage & Late Invoicing" },
                { cadence: "Weekly & Monthly Close", focus: "General Ledger, Accruals & Balance Tie-outs", risk: "Unidentified Variances & Imbalances" },
                { cadence: "Monthly, Quarterly & Annual", focus: "Management Reports, Payroll & Audit Fulfillment", risk: "Compliance Penalties & Reporting Lags" }
              ];
              const stats = pillarStats[idx] || pillarStats[0];

              return (
                <div
                  key={group.id}
                  id={group.id}
                  className="bg-white border border-[#E8E0D8] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left Details Column */}
                    <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-mono font-semibold tracking-wider text-[#B87333] bg-[#FAF7F2] px-2.5 py-1 border border-[#E8E0D8]">
                            PRACTICE PILLAR 0{idx + 1}
                          </span>
                          <span className="text-xs font-medium text-[#7A6F6B]">
                            Cadence: {stats.cadence}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1412] mb-2">
                          {group.title}
                        </h2>
                        <p className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-4">
                          {group.tagline}
                        </p>
                        <p className="text-sm text-[#444444] leading-relaxed mb-6 font-normal">
                          {group.description}
                        </p>

                        {/* Core Deliverables Matrix */}
                        <div className="space-y-2.5 pt-6 border-t border-[#F0EAE3]">
                          <span className="text-[11px] uppercase tracking-wider text-[#7A6F6B] font-semibold block mb-2 font-mono">
                            Structured Operational Deliverables:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {group.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-[#2B211E]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                                <span className="font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Operational Metrics Bar */}
                      <div className="mt-8 pt-6 border-t border-[#F0EAE3] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#7A6F6B] font-mono block">Primary Objective</span>
                          <span className="font-medium text-[#1A1412]">{stats.focus}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#7A6F6B] font-mono block">Mitigated Risk</span>
                          <span className="font-medium text-[#1A1412]">{stats.risk}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Visual Column */}
                    <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#FAF7F2] border-t lg:border-t-0 lg:border-l border-[#E8E0D8]">
                      <Image
                        src={pillarImages[idx] || pillarImages[0]}
                        alt={`${group.title} operational discipline`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 450px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/75 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-semibold block mb-1">
                          Practice Focus 0{idx + 1}
                        </span>
                        <span className="text-sm font-medium drop-shadow-sm">
                          Direct partner accountability on {group.title.toLowerCase()} workflows.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 Detailed Work Areas */}
      <section className="py-20 md:py-28 container-custom">
        <SectionHeading
          eyebrow="Detailed Work Areas"
          title="Ten specific service areas delivered with precision."
          description="Each service provides structured handling, clear documentation, and dependable support."
        />

        <div className="space-y-16 mt-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="border border-[#E8E0D8] p-8 sm:p-12 lg:p-16 bg-[#FFFFFF] card-sheen"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Header */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono font-semibold tracking-widest text-[#888888]">
                        SERVICE {service.number}
                      </span>
                      <span className="text-xs font-mono uppercase bg-white border border-[#E0E0DC] px-2 py-0.5 text-[#555555]">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-base text-[#555555] leading-relaxed mb-8">
                      {service.overview}
                    </p>
                  </div>

                  <div>
                    <Button
                      href={`/services/${service.slug}`}
                      variant="primary"
                      size="md"
                      icon
                    >
                      View Service Details &amp; Workflow
                    </Button>
                  </div>
                </div>

                {/* Right Offerings Grid */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#E5E5E0]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888888] mb-6 pb-2 border-b border-[#F0F0EE]">
                    Service Components
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.offerings.map((off, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                          <h4 className="text-sm font-semibold text-[#111111]">
                            {off.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#666666] leading-relaxed pl-6">
                          {off.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#F0F0EE] flex flex-wrap gap-2 text-[11px] text-[#777777]">
                    <span className="font-semibold text-[#111111]">Typical Client Profiles:</span>
                    {service.clientProfiles.slice(0, 2).map((cp, cIdx) => (
                      <span key={cIdx} className="bg-[#F5F5F3] px-2 py-0.5 rounded-none">
                        {cp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Scoping CTA */}
      <section className="py-20 bg-[#F9F9F8] border-t border-[#EAEAEA]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-medium text-[#111111] mb-4">
            Discuss a tailored service scope.
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-8">
            Whether you require assistance with day-to-day accounts payable and receivable, periodic reconciliations, or audit preparation, our principal contacts are ready to structure an operational scope.
          </p>
          <Button href="/contact" variant="primary" icon>
            Connect With Principal Contacts
          </Button>
        </div>
      </section>
    </div>
  );
}
