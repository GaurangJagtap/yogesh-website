"use client";

import React, { useState } from "react";
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
  Pause,
  Play,
  SlidersHorizontal
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { serviceCategoryGroups } from "../data/services";

export const ServiceCategories: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

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

  const pillarImages: Record<string, string> = {
    "transaction-work": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    "accounting-control": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "specialist-work": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "taxation-compliance": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
    "financial-audit": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  };

  // Duplicate items twice to ensure endless seamless smooth infinite sliding loop
  const duplicatedPillars = [...serviceCategoryGroups, ...serviceCategoryGroups];

  return (
    <section className="py-24 md:py-32 bg-[#F4EFEA] border-b border-[#E8E0D8] overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Core Service Categories"
            title="Structured across five core operational pillars."
            align="split"
            description="Our service delivery model is divided into five specialized pillars—ranging from daily transactional throughput to rigorous accounting controls, specialist operations, direct taxation, and strategic financial advisory."
          />

          {/* Live Animation Status Badge & Pause/Play toggle */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2 bg-white/90 border border-[#E8E0D8] px-3.5 py-2 backdrop-blur-sm text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B87333] opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B87333]" />
              </span>
              <span className="text-[#1A1412] font-semibold tracking-wider uppercase text-[11px]">
                {isPlaying ? "Live Auto-Sliding" : "Paused"}
              </span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause auto slide" : "Resume auto slide"}
              className="w-10 h-10 border border-[#E8E0D8] bg-white hover:bg-[#B87333] text-[#1A1412] hover:text-white transition-all flex items-center justify-center shadow-sm"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Live Auto-Sliding Track Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge blur gradient masks for modern magazine look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#F4EFEA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#F4EFEA] to-transparent" />

        <div
          className="animate-pillar-slide flex gap-6 px-4"
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        >
          {duplicatedPillars.map((cat, idx) => {
            const originalIndex = idx % serviceCategoryGroups.length;
            const Icon = getIcon(cat.id);
            const imageSrc = pillarImages[cat.id] || pillarImages["transaction-work"];

            return (
              <div
                key={`${cat.id}-${idx}`}
                className="w-[340px] sm:w-[410px] shrink-0 border border-[#E8E0D8] bg-[#FFFFFF] flex flex-col justify-between group card-sheen overflow-hidden hover:border-[#B87333] hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Header Image Banner */}
                <div className="relative h-48 w-full bg-[#1A1412] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={`${cat.title} visual`}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
                    sizes="420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/45 to-transparent" />

                  {/* Top Badge & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-[#FFFFFF] bg-[#1A1412]/80 backdrop-blur-md px-2.5 py-1 border border-white/20">
                      PILLAR 0{originalIndex + 1}
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

                {/* Content body */}
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
      </div>

      {/* Sub-footer guidance note */}
      <div className="container-custom mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6F6B] font-mono gap-2 pt-4 border-t border-[#E8E0D8]/60">
          <div className="flex items-center gap-2">
            <span>Hover over any pillar card to pause and inspect deliverables</span>
          </div>
          <div>5 Core Operational Streams • Infinite Live Feed</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;


