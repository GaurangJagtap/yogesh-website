import type { Metadata } from "next";
import Link from "next/link";
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
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              Services &amp; Work Areas
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Accounting operations, accounting controls, and specialist support.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            {companyInformation.legalName} delivers structured financial support across three core categories: day-to-day Transaction Work, period-end Accounting Control, and Specialist Work.
          </p>
        </div>
      </section>

      {/* 3 Broad Operational Categories */}
      <section className="py-20 md:py-24 bg-[#F8F8F7] border-b border-[#EAEAE8]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Service Structure"
            title="Three core operational areas."
            description="Our service framework is organized into three distinct practice groups based on operational focus."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategoryGroups.map((group, idx) => (
              <div
                key={group.id}
                id={group.id}
                className="bg-white border border-[#E8E0D8] p-8 flex flex-col justify-between card-sheen scroll-mt-28"
              >
                <div>
                  <div className="text-xs font-mono font-semibold tracking-wider text-[#B87333] mb-3">
                    PILLAR 0{idx + 1}
                  </div>
                  <h2 className="text-2xl font-medium text-[#1A1412] mb-2">
                    {group.title}
                  </h2>
                  <p className="text-xs font-semibold text-[#7A6F6B] mb-4">
                    {group.tagline}
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed mb-6">
                    {group.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#F0F0EE]">
                    <span className="text-[11px] uppercase tracking-wider text-[#888888] font-semibold block mb-2">
                      Key Functions:
                    </span>
                    {group.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#333333]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
