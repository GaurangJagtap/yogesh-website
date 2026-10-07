import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { servicesData } from "../data/services";

export const Services: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="All Work Areas"
          title="Practical services delivering accuracy and accounting control."
          align="split"
          description="Each service provides systematic financial handling and clear documentation, supporting smooth operations from initial transaction entry to periodic reporting."
        />

        {/* 10 Individual Service Rows with rich visual badges and icons */}
        <div className="divide-y divide-[#E8E0D8] border-y border-[#E8E0D8]">
          {servicesData.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group py-7 sm:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:bg-[#FFFFFF] hover:px-8 hover:shadow-[0_10px_30px_-10px_rgba(43,33,30,0.08)] -mx-0 lg:-mx-8 rounded-none cursor-pointer"
            >
              {/* Left Column: Number, Title & Visual Category Pill */}
              <div className="flex items-start sm:items-center gap-5 lg:w-5/12">
                <span className="text-xs font-semibold tracking-widest text-[#B87333] font-mono shrink-0 w-8">
                  {service.number}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FAF7F2] text-[#B87333] px-2 py-0.5 border border-[#E8E0D8] group-hover:border-[#B87333] transition-colors">
                      {service.category}
                    </span>
                    <span className="text-[10px] text-[#7A6F6B] font-mono">
                      Cycle 0{((idx % 4) + 1)}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#1A1412] group-hover:text-[#B87333] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Middle Column: Short Description */}
              <div className="lg:w-5/12 lg:pl-2">
                <p className="text-xs sm:text-sm text-[#3D312E] leading-relaxed group-hover:text-[#1A1412] transition-colors">
                  {service.shortDescription}
                </p>
              </div>

              {/* Right Column: Interaction Indicator */}
              <div className="lg:w-2/12 flex items-center justify-end gap-3">
                <span className="text-[11px] font-medium text-[#7A6F6B] group-hover:text-[#1A1412] hidden xl:inline-block transition-colors">
                  View Scope
                </span>
                <div className="w-9 h-9 rounded-none bg-[#FAF7F2] border border-[#D5C9BE] flex items-center justify-center text-[#2B211E] transition-all duration-300 group-hover:border-[#B87333] group-hover:bg-[#B87333] group-hover:text-white">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 text-xs text-[#7A6F6B]">
          <span>Services can be engaged individually or structured as an integrated financial operations workflow.</span>
          <Link
            href="/services"
            className="text-[#B87333] font-semibold uppercase tracking-wider hover:underline"
          >
            Review Detailed Capabilities &amp; Workflows &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
