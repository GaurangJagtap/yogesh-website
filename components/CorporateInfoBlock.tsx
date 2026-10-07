import React from "react";
import Link from "next/link";
import { ShieldCheck, Calendar, FileText, Users } from "lucide-react";
import { companyInformation } from "../data/team";

export const CorporateInfoBlock: React.FC = () => {
  return (
    <section className="bg-[#FAF7F2] py-14 border-b border-[#E8E0D8]">
      <div className="container-custom">
        <div className="bg-[#FFFFFF] border border-[#E8E0D8] p-6 sm:p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(43,33,30,0.04)] card-sheen">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#F0EAE3]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#B87333] font-semibold">
                  Verified Corporate Registry Data
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#1A1412] tracking-tight">
                {companyInformation.legalName}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#FAF7F2] border border-[#E8E0D8] px-3.5 py-1.5 flex items-center gap-2 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span className="font-semibold text-[#1A1412]">Status:</span>
                <span className="text-[#22C55E] font-medium font-mono">Active LLP</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            <div className="p-4 bg-[#FAF7F2] border border-[#E8E0D8] space-y-1">
              <div className="flex items-center gap-1.5 text-[#7A6F6B] font-medium uppercase tracking-wider text-[11px]">
                <FileText className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Registration Identifier</span>
              </div>
              <div className="font-mono text-sm font-semibold text-[#1A1412]">
                LLPIN: {companyInformation.llpin}
              </div>
              <p className="text-[#7A6F6B] leading-relaxed text-[11px]">
                Registered Limited Liability Partnership
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E8E0D8] space-y-1">
              <div className="flex items-center gap-1.5 text-[#7A6F6B] font-medium uppercase tracking-wider text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Incorporation</span>
              </div>
              <div className="text-sm font-semibold text-[#1A1412]">
                {companyInformation.incorporationDate}
              </div>
              <p className="text-[#7A6F6B] leading-relaxed text-[11px]">
                Officially incorporated
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E8E0D8] space-y-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-1.5 text-[#7A6F6B] font-medium uppercase tracking-wider text-[11px]">
                <Users className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Principal Contacts</span>
              </div>
              <div className="text-sm font-semibold text-[#1A1412]">
                {companyInformation.principalContacts.map((c) => c.name).join(" • ")}
              </div>
              <p className="text-[#7A6F6B] leading-relaxed text-[11px]">
                Designated principal contacts for client engagements and advisory coordination
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateInfoBlock;
