import React from "react";
import Button from "./Button";
import { companyInformation } from "../data/team";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <div className="bg-[#FFFFFF] border border-[#E8E0D8] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_12px_32px_-12px_rgba(43,33,30,0.06)] card-sheen">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#B87333]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B87333]">
                Consultation &amp; Scoping
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1412] leading-[1.12] mb-6">
              Accounting operations support structured around your business needs.
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#3D312E] leading-relaxed mb-10 max-w-2xl">
              Whether you need organized transaction processing for payables and receivables, structured monthly reconciliations, or assistance preparing for an upcoming audit, connect with our principal contacts to discuss an operational scope.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" variant="cognac" icon>
                Connect With Principal Contacts
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Review All 10 Work Areas
              </Button>
            </div>

            {/* Operational footnote */}
            <div className="mt-12 pt-8 border-t border-[#F0EAE3] flex flex-wrap gap-8 text-xs text-[#7A6F6B]">
              <div>
                <span className="text-[#1A1412] font-semibold">Entity:</span> {companyInformation.legalName}
              </div>
              <div className="hidden sm:block text-[#D5C9BE]">&bull;</div>
              <div>
                <span className="text-[#1A1412] font-semibold">Principal Contacts:</span> {companyInformation.principalContacts.map(c => c.name).join(" / ")}
              </div>
              <div className="hidden sm:block text-[#D5C9BE]">&bull;</div>
              <div>
                <span className="text-[#1A1412] font-semibold">LLPIN:</span> {companyInformation.llpin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
