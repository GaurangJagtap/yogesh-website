"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  FileSpreadsheet,
  ShieldCheck,
  Zap,
  ReceiptText,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { serviceCategoryGroups } from "../data/services";

export const ServiceCategories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "transaction-work":
        return FileSpreadsheet;
      case "accounting-control":
        return ShieldCheck;
      case "specialist-work":
        return Zap;
      case "taxation-compliance":
        return ReceiptText;
      case "financial-audit":
        return TrendingUp;
      default:
        return SlidersHorizontal;
    }
  };

  const pillarImages = [
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800", // Transaction & books
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Accounting control & calculation
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Specialist Work & Analytics
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800", // Taxation & Compliance
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"  // Financial Advisory & Audit
  ];

  // Auto-slide effect every 5 seconds if not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceCategoryGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Smooth scroll sync when activeIndex updates
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.children[activeIndex] as HTMLElement;
    if (card) {
      const scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + serviceCategoryGroups.length) % serviceCategoryGroups.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % serviceCategoryGroups.length);
  };

  return (
    <section
      className="py-24 md:py-32 bg-[#F4EFEA] border-b border-[#E8E0D8] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Core Service Categories"
            title="Structured across five core operational pillars."
            align="split"
            description="We organize our engagements across five disciplined operational pillars: daily transaction processing, periodic accounting controls, specialist workflows, direct & indirect taxation, and strategic financial advisory & audit support."
          />

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous operational pillar"
              className="w-11 h-11 border border-[#E8E0D8] bg-white hover:bg-[#B87333] text-[#1A1412] hover:text-white transition-all flex items-center justify-center shadow-sm hover:shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next operational pillar"
              className="w-11 h-11 border border-[#E8E0D8] bg-white hover:bg-[#B87333] text-[#1A1412] hover:text-white transition-all flex items-center justify-center shadow-sm hover:shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {serviceCategoryGroups.map((cat, idx) => {
            const Icon = getIcon(cat.id);
            const isCurrent = activeIndex === idx;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveIndex(idx)}
                className={`snap-center shrink-0 w-[88vw] sm:w-[420px] lg:w-[400px] border transition-all duration-500 bg-[#FFFFFF] flex flex-col justify-between group card-sheen overflow-hidden cursor-pointer ${
                  isCurrent
                    ? "border-[#B87333] shadow-xl ring-1 ring-[#B87333]/30 scale-[1.01]"
                    : "border-[#E8E0D8] opacity-85 hover:opacity-100 hover:border-[#B87333]/50"
                }`}
              >
                {/* Visual Header Image Banner */}
                <div className="relative h-48 w-full bg-[#1A1412] overflow-hidden">
                  <Image
                    src={pillarImages[idx] || pillarImages[0]}
                    alt={`${cat.title} visual illustration`}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 420px"
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

                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs text-[#B87333] font-semibold mb-3 line-clamp-1">
                      {cat.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-[#3D312E] leading-relaxed mb-6 min-h-[4rem]">
                      {cat.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#F0EAE3]">
                      <span className="text-[11px] uppercase tracking-wider text-[#7A6F6B] font-semibold block mb-3 font-mono">
                        Included Workflow Deliverables:
                      </span>
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#2B211E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                          <span className="line-clamp-1">{item}</span>
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

        {/* Carousel Dots & Indicator Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-[#E8E0D8]/60">
          <div className="flex items-center gap-2">
            {serviceCategoryGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeIndex === i
                    ? "w-8 bg-[#B87333]"
                    : "w-2.5 bg-[#D8CFBF] hover:bg-[#B87333]/60"
                }`}
              />
            ))}
          </div>

          <div className="font-mono text-xs text-[#7A6F6B] tracking-wider">
            Showing Pillar <span className="font-bold text-[#1A1412]">0{activeIndex + 1}</span> of 0{serviceCategoryGroups.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;

