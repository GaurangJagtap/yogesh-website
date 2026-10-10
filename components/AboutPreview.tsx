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
          {/* Image with Warm Framing */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] w-full bg-[#FFFFFF] overflow-hidden border border-[#E8E0D8] shadow-md group">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Professional accounting and financial operations workplace at ENTRABALANCE GLOBAL LLP"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/75 via-transparent to-transparent pointer-events-none" />

              {/* Clean Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-semibold mb-1">
                  Operating Principle
                </div>
                <div className="text-sm font-medium text-white/95">
                  Orderly sub-ledgers, systematic journal entries &amp; period reconciliation accuracy.
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#7A6F6B] border-t border-[#E8E0D8] pt-3">
              <span className="font-semibold text-[#1A1412]">{companyInformation.legalName}</span>
              <span className="font-mono text-[#B87333]">
                LLPIN: {companyInformation.llpin}
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#3D312E] leading-relaxed">
              <p className="font-serif text-2xl sm:text-3xl text-[#1A1412] leading-snug">
                Delivering reliable accounting operations through disciplined partner oversight.
              </p>
              <p className="text-base text-[#555555]">
                {companyInformation.legalName} works directly with growing enterprises to ensure day-to-day accounting transactions are verified accurately, balance sheets and sub-ledgers are systematically reconciled, and financial processes operate smoothly without periodic surprises.
              </p>
            </div>

            {/* Factual Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E8E0D8]">
              <div>
                <h4 className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                  Principal Partners
                </h4>
                <p className="text-xs text-[#1A1412] font-medium leading-relaxed">
                  {companyInformation.principalContacts.map(c => c.name).join(" & ")}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                  Engagement Model
                </h4>
                <p className="text-xs text-[#1A1412] font-medium leading-relaxed">
                  Direct Principal Oversight
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/team" variant="primary" icon>
                Meet Principal Leadership
              </Button>
              <Button href="/about" variant="outline">
                The Firm Practice Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
