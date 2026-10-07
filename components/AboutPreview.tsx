import React from "react";
import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { companyInformation } from "../data/team";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About The Firm"
          title="Structured accounting operations and financial control."
          align="split"
          description={`${companyInformation.legalName} provides structured accounting and financial operations support across transaction processing, accounting controls, specialist accounting functions, reporting, audit support, and process improvement.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image with Layered Sheen Frame and Floating Overlays */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Primary Image */}
              <div className="relative aspect-[16/11] w-full bg-[#FFFFFF] overflow-hidden border border-[#E8E0D8] shadow-lg card-sheen group">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional accounting and financial operations workplace at ENTRABALANCE GLOBAL LLP"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent opacity-80" />

                {/* In-image caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-semibold">
                    Core Operating Mandate
                  </div>
                  <div className="text-sm font-medium">
                    Orderly sub-ledgers, systematic journal entries &amp; period reconciliation accuracy.
                  </div>
                </div>
              </div>

              {/* Floating Stat Chip on Image */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#FFFFFF] p-4 border border-[#E8E0D8] shadow-xl items-center gap-3.5 z-10 card-sheen">
                <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E8E0D8] flex items-center justify-center text-[#B87333] font-bold text-sm font-mono">
                  100%
                </div>
                <div className="text-[11px] leading-tight text-[#3D312E]">
                  <strong className="text-[#1A1412] block font-semibold mb-0.5">Verification Integrity</strong>
                  <span>Every voucher backed by audit trail</span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between text-xs text-[#7A6F6B] border-t border-[#E8E0D8] pt-3">
              <span className="font-medium text-[#1A1412]">{companyInformation.legalName}</span>
              <span className="font-mono text-[#B87333] bg-[#FAF7F2] px-2 py-0.5 border border-[#E8E0D8]">
                LLPIN: {companyInformation.llpin}
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#3D312E] leading-relaxed">
              <p>
                {companyInformation.legalName} works with businesses to ensure day-to-day accounting transactions are recorded accurately, balance sheets and sub-ledgers are systematically reconciled, and financial processes operate smoothly.
              </p>
              <p className="text-base text-[#7A6F6B]">
                Our work spans transaction processing, routine accounting control, periodic close procedures, and specialized support for payroll, tax-related schedules, and external audit requests.
              </p>
            </div>

            {/* Factual Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E8E0D8]">
              <div>
                <h4 className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                  Incorporated
                </h4>
                <p className="text-xs text-[#3D312E] font-medium leading-relaxed">
                  {companyInformation.incorporationDate}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                  Principal Contacts
                </h4>
                <p className="text-xs text-[#3D312E] font-medium leading-relaxed">
                  {companyInformation.principalContacts.map(c => c.name).join(" / ")}
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="primary" icon>
                About The Firm &amp; Profile
              </Button>
              <Button href="/services" variant="outline">
                Review Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
