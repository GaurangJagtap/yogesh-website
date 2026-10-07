"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { companyInformation } from "../data/team";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 bg-[#FAF7F2] overflow-hidden border-b border-[#E8E0D8]">
      {/* Subtle ambient warm lighting glow in the background */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#B87333]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2B211E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Position Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-[#B87333]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87333]">
                {companyInformation.legalName}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight text-[#1A1412] leading-[1.08] mb-8">
              Accounting Operations.
              <br />
              <span className="text-[#3D312E]">Financial Accuracy.</span>
              <br />
              <span className="text-[#B87333]">Better Business Processes.</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#3D312E] leading-relaxed max-w-xl mb-10 font-normal">
              {companyInformation.legalName} supports growing businesses with disciplined accounting operations, transaction processing, period-end financial reconciliations, payroll support, audit coordination, and practical process improvement.
            </p>

            {/* Dual Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/services" size="lg" variant="cognac" icon>
                Explore Services
              </Button>
              <Button href="/about" size="lg" variant="outline">
                About The Firm
              </Button>
            </div>

            {/* Subtle factual credentials indicator */}
            <div className="mt-14 pt-8 border-t border-[#E8E0D8] flex flex-wrap items-center gap-8 text-xs text-[#7A6F6B]">
              <div>
                <span className="font-semibold text-[#1A1412]">LLPIN:</span> {companyInformation.llpin}
              </div>
              <div className="hidden sm:block text-[#D5C9BE]">|</div>
              <div>
                <span className="font-semibold text-[#1A1412]">Incorporated:</span> {companyInformation.incorporationDate}
              </div>
              <div className="hidden sm:block text-[#D5C9BE]">|</div>
              <div>
                <span className="font-semibold text-[#1A1412]">Principal Contacts:</span> {companyInformation.principalContacts.map(c => c.name).join(" • ")}
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Dashboard & Financial Operations Interactive Preview */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container */}
            <div className="relative">
              {/* Primary Visual Feature Card - Ledger & Operations Center Graphic */}
              <div className="relative aspect-[4/5] w-full bg-[#1A1412] overflow-hidden border border-[#2B211E] shadow-[0_25px_50px_-12px_rgba(43,33,30,0.25)] rounded-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="Financial analytics and operations dashboard at ENTRABALANCE GLOBAL LLP"
                  fill
                  priority
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                />

                {/* Ambient Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/60 to-transparent" />

                {/* Dashboard / Analytics UI Overlay Mockup */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  {/* Top Bar of Dashboard */}
                  <div className="flex items-center justify-between bg-[#2B211E]/85 backdrop-blur-md p-3 border border-white/10 text-white rounded-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                      <span className="text-[11px] font-mono tracking-wider text-[#FAF7F2] font-medium">LEDGER RECONCILIATION ENGINE</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B87333] font-semibold bg-[#B87333]/10 px-2 py-0.5 border border-[#B87333]/30">LIVE OPS</span>
                  </div>

                  {/* Middle Micro-Visual: Reconciled Balance Pill */}
                  <div className="space-y-3">
                    <div className="bg-[#FAF7F2]/95 backdrop-blur-md p-4 border border-[#E8E0D8] shadow-lg rounded-sm text-[#1A1412] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-[11px] font-medium text-[#7A6F6B] uppercase tracking-wider">Month-End Balance Integrity</span>
                        <span className="font-mono text-[#22C55E] font-bold text-xs">100% Balanced</span>
                      </div>
                      <div className="w-full bg-[#E8E0D8] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#B87333] to-[#22C55E] h-full w-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] mt-2 font-mono text-[#3D312E]">
                        <span>General Ledger vs Sub-Ledger</span>
                        <span className="font-semibold text-[#1A1412]">0.00 Variance</span>
                      </div>
                    </div>

                    <div className="bg-[#1A1412]/90 backdrop-blur-md p-3.5 border border-white/15 text-white flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-none bg-[#B87333]/20 border border-[#B87333] flex items-center justify-center text-[#B87333] font-mono text-xs font-bold">
                          AP
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Accounts Payable Batch</div>
                          <div className="text-[10px] text-zinc-400">Verified &amp; Voucher Matched</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 font-medium">Approved</span>
                    </div>
                  </div>

                  {/* Bottom Caption Bar */}
                  <div className="bg-[#2B211E]/90 backdrop-blur-md p-4 border border-white/10 text-[#FAF7F2] rounded-sm">
                    <div className="text-[10px] uppercase tracking-widest text-[#B87333] font-semibold mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
                      <span>{companyInformation.legalName}</span>
                    </div>
                    <div className="text-xs font-medium leading-snug">
                      Structured transaction verification, continuous reconciliations &amp; audit trail preservation.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Corporate Entity & Status (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FFFFFF] p-4 border border-[#E8E0D8] shadow-xl max-w-[240px] items-center gap-3.5 card-sheen z-20">
                <div className="w-10 h-10 bg-[#B87333] text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono shadow-sm">
                  LLP
                </div>
                <div className="text-[11px] leading-tight text-[#3D312E]">
                  <strong className="text-[#1A1412] block font-semibold mb-0.5">Verified Registration</strong>
                  <span className="font-mono text-[10px] text-[#7A6F6B]">{companyInformation.llpin}</span>
                </div>
              </div>

              {/* Floating Badge 2 - Live Operations Pillars (Top Right) */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#FAF7F2] px-4 py-3 border border-[#E8E0D8] shadow-lg items-center gap-2.5 card-sheen z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B87333] animate-pulse shrink-0" />
                <div className="text-[11px] font-medium text-[#1A1412] whitespace-nowrap">
                  <span className="text-[#B87333] font-bold font-mono">10</span> Active Work Areas
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
