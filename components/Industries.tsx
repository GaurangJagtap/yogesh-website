import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { industriesData } from "../data/industries";

export const Industries: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F7] border-b border-[#EAEAE8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Industry Expertise"
          title="Sector-specific intelligence engineered for nuanced challenges."
          align="split"
          description="Every sector faces distinct accounting frameworks, statutory disclosures, and tax implications. Our practice groups tailor compliance models to your industry dynamics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="bg-white p-8 border border-[#E5E5E0] flex flex-col justify-between group hover:border-[#111111] transition-all duration-300 min-h-[300px]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F0F0EE]">
                  <span className="text-xs font-mono font-semibold text-[#888888]">
                    {ind.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#E2E2DF] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-[#111111] mt-6 mb-3 group-hover:text-[#111111]">
                  {ind.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0F0EE] mt-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#777777] group-hover:text-[#111111] transition-colors">
                  Key Focus: {ind.capabilities[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:underline"
          >
            <span>View Full Sector Breakdown &amp; Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;
