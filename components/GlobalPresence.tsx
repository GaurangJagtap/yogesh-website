import React from "react";
import SectionHeading from "./SectionHeading";
import { Globe, MapPin, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

export const GlobalPresence: React.FC = () => {
  const corridors = [
    {
      region: "India Domestic Chambers",
      offices: [
        {
          city: "New Delhi (Headquarters)",
          address: "[Office Suite 402, Barakhamba Road, Connaught Place]",
          desc: "Lead executive advisory, corporate law secretarial, statutory audit oversight.",
        },
        {
          city: "Mumbai Financial Centre",
          address: "[Platina Tower, Bandra Kurla Complex (BKC)]",
          desc: "Capital markets, private equity transaction support, institutional valuations.",
        },
      ],
    },
    {
      region: "North American & Transnational Desk",
      offices: [
        {
          city: "New York / Delaware Liaison",
          address: "[Cross-Border Corporate Desk - Liaison Office]",
          desc: "Advising US parent corporations with Indian technology centers and vice versa.",
        },
        {
          city: "Global Treaty Network",
          address: "[EMEA & Southeast Asia Affiliates]",
          desc: "Coordinating multi-tier holding company audits and international transfer pricing.",
        },
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#EAEAEA]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Global Reach & Corridors"
          title="Bridging Indian regulatory depth with international business standards."
          align="split"
          description="Because our clients operate across continents, our advisory footprint harmonizes local Indian compliance (FEMA, ROC, GST) with US GAAP, SEC, and global treaty frameworks."
        />

        {/* Sophisticated Minimal Schematic Visualization */}
        <div className="bg-[#111111] text-white p-8 md:p-14 lg:p-16 mb-16 relative overflow-hidden">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>Transnational Advisory Hubs</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6">
              A synchronized corridor for cross-border enterprise governance.
            </h3>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mb-10">
              We eliminate friction for North American enterprises managing offshore delivery centres in Bangalore, Delhi NCR, and Mumbai, while shielding Indian founders expanding corporate entities into Delaware, California, and the UK.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/15">
              <div>
                <div className="text-2xl font-light tracking-tight text-white mb-1">
                  100%
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400">
                  FEMA &amp; RBI Compliance
                </div>
              </div>
              <div>
                <div className="text-2xl font-light tracking-tight text-white mb-1">
                  Dual
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400">
                  US GAAP &amp; Ind AS Harmonization
                </div>
              </div>
              <div>
                <div className="text-2xl font-light tracking-tight text-white mb-1">
                  Single
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400">
                  Unified Partner Governance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {corridors.map((corridor, i) => (
            <div key={i} className="border border-[#E5E5E2] p-8 md:p-10 bg-[#FAFAFA]">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#EAEAE6]">
                <Building className="w-4 h-4 text-[#111111]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#111111]">
                  {corridor.region}
                </h4>
              </div>

              <div className="space-y-8">
                {corridor.offices.map((off, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                      <span className="font-medium text-[#111111] text-base">
                        {off.city}
                      </span>
                    </div>
                    <div className="text-xs text-[#555555] font-mono pl-5">
                      {off.address}
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed pl-5">
                      {off.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
