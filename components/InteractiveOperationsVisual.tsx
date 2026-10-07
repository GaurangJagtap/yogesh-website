"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, BarChart3, CheckCircle, ShieldCheck, Database, RefreshCw, Zap } from "lucide-react";

export const InteractiveOperationsVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"payable" | "reconciliation" | "reporting">("reconciliation");

  const views = {
    payable: {
      title: "Accounts Payable Processing Stream",
      description: "Three-way invoice verification, automated voucher matching, approval routing, and scheduled vendor disbursements.",
      badge: "Transaction Cycle",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=900",
      steps: [
        { label: "Vendor Invoice Received", status: "Verified", time: "Day 1" },
        { label: "PO & Delivery Tie-out", status: "3-Way Match", time: "Day 2" },
        { label: "Management Approval", status: "Authorized", time: "Day 3" },
        { label: "Scheduled Disbursement", status: "Released", time: "Scheduled" },
      ],
      metrics: [
        { label: "Voucher Match Rate", value: "99.8%" },
        { label: "Disbursement Accuracy", value: "100%" },
        { label: "Ledger Timeliness", value: "< 24 Hrs" },
      ]
    },
    reconciliation: {
      title: "Ledger & Bank Reconciliation Engine",
      description: "Rigorous daily and periodic matching of bank statements, payment processors, and sub-ledgers against the general ledger.",
      badge: "Accounting Control",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
      steps: [
        { label: "Bank Feed Ingestion", status: "Extracted", time: "Live" },
        { label: "Sub-Ledger Correlation", status: "Matched", time: "Daily" },
        { label: "Variance Investigation", status: "0.00 Diff", time: "Daily" },
        { label: "Adjusting Journal Post", status: "Balanced", time: "Period-End" },
      ],
      metrics: [
        { label: "Unmatched Entries", value: "0 Items" },
        { label: "Reconciliation Cadence", value: "Daily/Monthly" },
        { label: "Audit-Ready Trail", value: "Complete" },
      ]
    },
    reporting: {
      title: "Month-End Financial Reporting Package",
      description: "Compilation of reconciled balance sheets, profit & loss statements, cash flow schedules, and management variance reports.",
      badge: "Specialist Delivery",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
      steps: [
        { label: "Trial Balance Finalization", status: "Verified", time: "Cycle Close" },
        { label: "Balance-Sheet Lead Sheets", status: "Tied-Out", time: "Close +2" },
        { label: "Variance Analytical Review", status: "Completed", time: "Close +3" },
        { label: "Executive Reporting Pack", status: "Dispatched", time: "Close +5" },
      ],
      metrics: [
        { label: "Close Timetable", value: "Consistent" },
        { label: "Variance Visibility", value: "Immediate" },
        { label: "Stakeholder Ready", value: "Certified" },
      ]
    }
  };

  const current = views[activeTab];

  return (
    <section className="py-24 md:py-32 bg-[#F4EFEA] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Interactive Operations Visual"
          title="See how our accounting operations flow in real time."
          align="split"
          description="Explore interactive visual workflows across daily transaction processing, periodic reconciliations, and month-end financial reporting."
        />

        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("reconciliation")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === "reconciliation"
                ? "bg-[#2B211E] text-[#FAF7F2] shadow-md border border-[#2B211E]"
                : "bg-[#FFFFFF] text-[#3D312E] border border-[#E8E0D8] hover:border-[#B87333]"
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>01. Bank &amp; Ledger Reconciliations</span>
          </button>

          <button
            onClick={() => setActiveTab("payable")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === "payable"
                ? "bg-[#2B211E] text-[#FAF7F2] shadow-md border border-[#2B211E]"
                : "bg-[#FFFFFF] text-[#3D312E] border border-[#E8E0D8] hover:border-[#B87333]"
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>02. Accounts Payable Stream</span>
          </button>

          <button
            onClick={() => setActiveTab("reporting")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === "reporting"
                ? "bg-[#2B211E] text-[#FAF7F2] shadow-md border border-[#2B211E]"
                : "bg-[#FFFFFF] text-[#3D312E] border border-[#E8E0D8] hover:border-[#B87333]"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>03. Financial Reporting Packs</span>
          </button>
        </div>

        {/* Visual Interactive Dashboard Card */}
        <div className="bg-[#FFFFFF] border border-[#E8E0D8] p-8 md:p-12 shadow-[0_20px_45px_-15px_rgba(43,33,30,0.08)] card-sheen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Graphic with Simulated Live Data */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] w-full bg-[#1A1412] overflow-hidden border border-[#2B211E] group shadow-inner">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/50 to-transparent" />

                {/* Live Process Flow Nodes in Graphic */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-[#B87333] text-white px-2.5 py-1 font-semibold">
                      {current.badge}
                    </span>
                    <div className="flex items-center gap-2 text-white text-xs font-mono bg-[#1A1412]/80 backdrop-blur-md px-3 py-1 border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                      <span>System Reconciled</span>
                    </div>
                  </div>

                  {/* Flow Stages Overlay */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-8">
                    {current.steps.map((st, i) => (
                      <div
                        key={i}
                        className="bg-[#FAF7F2]/95 backdrop-blur-md p-3 border border-[#E8E0D8] text-[#1A1412] shadow-sm rounded-none"
                      >
                        <div className="text-[9px] font-mono uppercase text-[#7A6F6B] mb-0.5">{st.time}</div>
                        <div className="text-xs font-semibold leading-tight mb-1 truncate">{st.label}</div>
                        <div className="text-[10px] font-mono text-[#22C55E] font-medium flex items-center gap-1">
                          <CheckCircle className="w-2.5 h-2.5" />
                          <span>{st.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-white/90 text-xs pt-3 border-t border-white/10">
                    <span className="font-mono text-[11px] text-[#D5C9BE]">ENTRABALANCE GLOBAL LLP &bull; Operations Workflow</span>
                    <span className="font-mono text-[11px] text-[#B87333]">Audit-Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Metrics Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold tracking-widest text-[#B87333] uppercase block mb-2">
                  Workflow Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1412] mb-4">
                  {current.title}
                </h3>
                <p className="text-sm text-[#3D312E] leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 p-5 bg-[#FAF7F2] border border-[#E8E0D8] mb-8">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-[10px] font-mono uppercase text-[#7A6F6B]">{m.label}</div>
                      <div className="text-base sm:text-lg font-semibold text-[#1A1412] font-mono">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F0EAE3] flex items-center justify-between">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1412] hover:text-[#B87333] transition-colors"
                >
                  <span>Explore Associated Work Areas</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B87333]" />
                </Link>
                <span className="text-xs font-mono text-[#7A6F6B]">Pillar Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveOperationsVisual;
