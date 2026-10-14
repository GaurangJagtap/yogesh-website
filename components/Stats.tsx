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
      category: "Aquatic Safety & Academy • India",
      quote: "Exceptional business support and strategic guidance",
      initials: "WT",
      accent: "#B87333",
      // Real finance / audit document review image
      bgImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Alistair Finch & Co.",
      category: "Financial Advisory • London, UK",
      quote: "Flawless cross-border compliance and tax treaty advisory",
      initials: "AF",
      accent: "#1A1412",
      // Modern corporate audit / finance office London
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Aditya Jaiswar",
      category: "Corporate Documentation • Mumbai",
      quote: "Great knowledge and high proficiency in official execution",
      initials: "AJ",
      accent: "#2B211E",
      // Finance charts & audit ledger execution
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Vanguard Global Capital",
      category: "Wealth & Investment Mgt • New York, US",
      quote: "Pivotal in structuring our regulatory filings and multi-currency books",
      initials: "VG",
      accent: "#B87333",
      // Wall Street / US Financial district boardroom
      bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Suraj Golam",
      category: "Taxation & Accounting Retainer • India",
      quote: "Helpful problem-solving for all direct & indirect tax matters",
      initials: "SG",
      accent: "#B87333",
      // Tax audit calculation & balance sheet
      bgImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Crestview Partners LLC",
      category: "Management Consultancy • Delaware, US",
      quote: "Invaluable statutory advisory and due-diligence precision",
      initials: "CP",
      accent: "#1A1412",
      // Corporate strategy consultancy meeting
      bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sarvorks Business Network",
      category: "Pan-Maharashtra Corporate Entity",
      quote: "End-to-end regulatory filings & balance sheet tie-outs",
      initials: "SB",
      accent: "#1A1412",
      // Corporate contract audit and legal documentation
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kensington Global Advisory",
      category: "Corporate Restructuring • Manchester, UK",
      quote: "World-class consultation on international tax and corporate audit",
      initials: "KG",
      accent: "#2B211E",
      // UK corporate boardroom consultancy
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kharadi Logistics & Infra",
      category: "Regional Trade & Logistics • India",
      quote: "Disciplined compliance oversight & books consolidation",
      initials: "KL",
      accent: "#2B211E",
      // Logistics finance and trade compliance
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Afrin Shaikh",
      category: "6-Year Enterprise Client • Corporate Audit",
      quote: "Attentive, trustworthy and prompt consultation",
      initials: "AS",
      accent: "#1A1412",
      // Business audit & corporate accounting review
      bgImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=600&q=80",
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
                className="relative w-72 sm:w-80 shrink-0 bg-[#FAF7F2] border border-[#E8E0D8] hover:border-[#B87333] transition-all p-4 rounded-sm shadow-2xs hover:shadow-md group flex flex-col justify-between overflow-hidden"
              >
                {/* Real finance / audit / consultancy background image with soft luxury overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.09] group-hover:opacity-[0.16] transition-opacity duration-300 pointer-events-none filter saturate-50"
                  style={{ backgroundImage: `url(${client.bgImage})` }}
                />
                {/* Subtle gradient overlay to preserve optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F2]/95 via-[#FAF7F2]/85 to-[#FFFFFF]/90 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-3 mb-2.5">
                  <div
                    className="w-10 h-10 rounded-sm text-white flex items-center justify-center font-serif text-sm font-bold tracking-wider shrink-0 border border-[#B87333]/40 group-hover:scale-105 transition-transform shadow-xs"
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
                <div className="relative z-10 pt-2 border-t border-[#EFE8E1] text-[11px] text-[#4A423E] italic leading-snug flex items-start gap-1.5 font-sans">
                  <Quote className="w-3 h-3 text-[#B87333] shrink-0 mt-0.5" />
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

