import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, FileSpreadsheet, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { serviceCategoryGroups } from "../data/services";

export const ServiceCategories: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "transaction-work":
        return FileSpreadsheet;
      case "accounting-control":
        return ShieldCheck;
      case "specialist-work":
        return Zap;
      default:
        return FileSpreadsheet;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#F4EFEA] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Core Service Categories"
          title="Structured across three core operational pillars."
          align="split"
          description="We organize our work into three clear areas: day-to-day transaction processing, periodic accounting controls, and specialized reporting and advisory support."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategoryGroups.map((cat, idx) => {
            const Icon = getIcon(cat.id);
            const pillarImages = [
              "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600", // Transaction & books
              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600", // Accounting control & calculation
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"  // Analytics & Specialist
            ];

            return (
              <div
                key={cat.id}
                className="border border-[#E8E0D8] bg-[#FFFFFF] flex flex-col justify-between group card-sheen overflow-hidden"
              >
                {/* Visual Header Image Banner */}
                <div className="relative h-44 w-full bg-[#1A1412] overflow-hidden">
                  <Image
                    src={pillarImages[idx] || pillarImages[0]}
                    alt={`${cat.title} visual illustration`}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/40 to-transparent" />

                  {/* Top Badge & Icon Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-[#FFFFFF] bg-[#1A1412]/80 backdrop-blur-md px-2.5 py-1 border border-white/20">
                      PILLAR 0{idx + 1}
                    </span>
                    <div className="w-9 h-9 bg-[#FFFFFF]/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#1A1412] group-hover:bg-[#B87333] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title overlay in image header */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#B87333]">
                      Operational Stream
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-[#FAF7F2]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs text-[#B87333] font-semibold mb-3">
                      {cat.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-[#3D312E] leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#F0EAE3]">
                      <span className="text-[11px] uppercase tracking-wider text-[#7A6F6B] font-semibold block mb-3">
                        Included Workflow Deliverables:
                      </span>
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#2B211E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#F0EAE3]">
                    <Link
                      href={`/services#${cat.id}`}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#2B211E] group-hover:text-[#B87333] transition-colors"
                    >
                      <span>Explore {cat.title} Capabilities</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#B87333]" />
                    </Link>
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

export default ServiceCategories;
