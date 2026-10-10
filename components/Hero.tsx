"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { companyInformation } from "../data/team";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 bg-[#FAF7F2] overflow-hidden border-b border-[#E8E0D8]">
      {/* Subtle ambient warm lighting glow in the background */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#B87333]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2B211E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline & Position Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-px bg-[#B87333]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87333]">
                {companyInformation.legalName}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium tracking-tight text-[#1A1412] leading-[1.1] mb-6">
              Accounting Operations.
              <br />
              <span className="text-[#3D312E]">Financial Accuracy.</span>
              <br />
              <span className="text-[#B87333]">Better Business Processes.</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#3D312E] leading-relaxed max-w-xl mb-8 font-normal">
              {companyInformation.legalName} supports growing businesses with disciplined accounting operations, transaction processing, period-end financial reconciliations, payroll support, audit coordination, and practical process improvement.
            </p>

            {/* Dual Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button href="/services" size="lg" variant="cognac" icon>
                Explore Services
              </Button>
              <Button href="/about" size="lg" variant="outline">
                About The Firm
              </Button>
            </div>

            {/* Subtle factual credentials indicator */}
            <div className="mt-10 pt-6 border-t border-[#E8E0D8] flex flex-wrap items-center gap-6 text-xs text-[#7A6F6B]">
              <div>
                <span className="font-semibold text-[#1A1412]">Established:</span> {companyInformation.incorporationDate}
              </div>
              <div className="hidden sm:block text-[#D5C9BE]">|</div>
              <div>
                <span className="font-semibold text-[#1A1412]">Experience:</span> {companyInformation.experienceYears}
              </div>
              <div className="hidden sm:block text-[#D5C9BE]">|</div>
              <div>
                <span className="font-semibold text-[#1A1412]">Track Record:</span> {companyInformation.clientsServed}
              </div>
            </div>
          </div>

          {/* Right Column: Natural Corporate Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full bg-[#FAF7F2] overflow-hidden border border-[#E8E0D8] shadow-[0_20px_50px_-12px_rgba(43,33,30,0.14)] rounded-sm group">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=85&w=1200"
                alt={`Accounting and advisory operations at ${companyInformation.legalName}`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
              />

              {/* Elegant subtle gradient scrim at the bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent pointer-events-none" />

              {/* Natural In-Image Bottom Label */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <div className="inline-flex items-center gap-2 bg-[#1A1412]/80 backdrop-blur-md px-3 py-1 border border-white/15 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#B87333]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2] font-semibold">
                    Dedicated Engagement Desk
                  </span>
                </div>
                <div className="text-sm font-medium leading-snug text-white/95 drop-shadow-sm">
                  Direct coordination with principal contacts for accounts, controls, and period-close operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
