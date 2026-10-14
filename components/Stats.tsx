"use client";

import React, { useEffect, useRef, useState } from "react";
import { Layers, ShieldCheck, Calendar, FileText, Quote, CheckCircle2 } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  startTrigger: boolean;
}

const RollingCounter: React.FC<CounterProps> = ({
  target,
  suffix = "",
  duration = 2000,
  startTrigger,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth Ease-out expo curve
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration, startTrigger]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const corporateFacts = [
    {
      numericValue: 7,
      suffix: "+",
      label: "Years Practice Experience",
      detail: "Delivering trusted accounting, taxation & financial operations across US, UK & India",
      icon: Calendar,
    },
    {
      numericValue: 3270,
      suffix: "+",
      label: "Satisfied Corporate Clients",
      detail: "Proven track record supporting multi-jurisdiction business processes",
      icon: FileText,
    },
    {
      numericValue: 3,
      suffix: "+",
      label: "Global Jurisdictions",
      detail: "Active financial & accounting operations across US, UK & India",
      icon: Layers,
    },
    {
      numericValue: 100,
      suffix: "%",
      label: "Client Satisfaction Rate",
      detail: "Strict partner oversight, zero-variance reconciliations & compliance discipline",
      icon: ShieldCheck,
    },
  ];

  // Client partners and customers featuring verified testimonial portfolio
  const clientShowcase = [
    {
      name: "WaterWorld Training",
      category: "Aquatic Safety & Academy",
      quote: "Exceptional business support and strategic guidance",
      initials: "WT",
      accent: "#B87333",
    },
    {
      name: "Afrin Shaikh",
      category: "6-Year Enterprise Client",
      quote: "Attentive, trustworthy and prompt consultation",
      initials: "AS",
      accent: "#1A1412",
    },
    {
      name: "Aditya Jaiswar",
      category: "Corporate Documentation",
      quote: "Great knowledge and high proficiency in official execution",
      initials: "AJ",
      accent: "#2B211E",
    },
    {
      name: "Suraj Golam",
      category: "Taxation & Accounting Retainer",
      quote: "Helpful problem-solving for all direct & indirect tax matters",
      initials: "SG",
      accent: "#B87333",
    },
    {
      name: "Sarvorks Business Network",
      category: "Pan-Maharashtra Corporate Entity",
      quote: "End-to-end regulatory filings & balance sheet tie-outs",
      initials: "SB",
      accent: "#1A1412",
    },
    {
      name: "Kharadi Logistics & Infra",
      category: "Regional Trade & Logistics",
      quote: "Disciplined compliance oversight & books consolidation",
      initials: "KL",
      accent: "#2B211E",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF] border-b border-[#E8E0D8] relative overflow-hidden">
      {/* Auto-Scrolling Client Showcase Above Numbers */}
      <div className="pt-16 pb-12 bg-gradient-to-b from-[#FAF7F2]/90 via-[#FFFFFF] to-[#FFFFFF] border-b border-[#F0EAE3]">
        <div className="container-custom mb-8 text-center sm:text-left sm:flex sm:items-end sm:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] border border-[#E8E0D8] rounded-full text-[11px] font-mono uppercase tracking-wider text-[#B87333] mb-2.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
              <span>Verified Client Relationships</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1412] font-semibold tracking-tight">
              Trusted by 3,270+ Businesses &amp; Retained Clients
            </h3>
            <p className="text-xs sm:text-sm text-[#7A6F6B] mt-1.5 max-w-2xl">
              From multi-year operational partnerships to specialized corporate tax and licensing clients across US, UK &amp; India.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-[#9E9086] font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
            Continuous Client Operations
          </div>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Gradient fade masks on left and right for seamless luxury look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6">
            {/* Duplicated list for infinite seamless loop */}
            {[...clientShowcase, ...clientShowcase].map((client, idx) => (
              <div
                key={idx}
                className="w-72 sm:w-80 shrink-0 bg-[#FAF7F2] border border-[#E8E0D8] hover:border-[#B87333] transition-all p-4 rounded-sm shadow-2xs hover:shadow-sm group flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="w-10 h-10 rounded-sm text-white flex items-center justify-center font-serif text-sm font-bold tracking-wider shrink-0 border border-[#B87333]/40 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: client.accent }}
                  >
                    {client.initials}
                  </div>
                  <div className="overflow-hidden">
                    <h5 className="text-xs font-semibold text-[#1A1412] truncate group-hover:text-[#B87333] transition-colors">
                      {client.name}
                    </h5>
                    <span className="text-[10px] text-[#7A6F6B] block truncate font-mono">
                      {client.category}
                    </span>
                  </div>
                </div>
                <div className="relative pt-2 border-t border-[#EFE8E1] text-[11px] text-[#555555] italic leading-snug flex items-start gap-1.5">
                  <Quote className="w-3 h-3 text-[#B87333]/60 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">&ldquo;{client.quote}&rdquo;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rolling Animated Numbers Section */}
      <div className="py-14 sm:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateFacts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-[#B87333]/30 hover:border-[#B87333] transition-colors group flex flex-col justify-between py-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl sm:text-4xl font-serif text-[#1A1412] font-semibold tracking-tight tabular-nums">
                        <RollingCounter
                          target={fact.numericValue}
                          suffix={fact.suffix}
                          duration={2200}
                          startTrigger={hasStarted}
                        />
                      </span>
                      <Icon className="w-4 h-4 text-[#B87333]/70 group-hover:text-[#B87333] transition-colors" />
                    </div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1A1412] mb-1.5 font-sans">
                      {fact.label}
                    </h4>
                  </div>
                  <p className="text-xs text-[#7A6F6B] leading-relaxed pt-2 border-t border-[#F0EAE3]">
                    {fact.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

