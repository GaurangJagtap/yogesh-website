import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import { industriesData } from "../../data/industries";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Focus | ENTRABALANCE GLOBAL LLP",
  description:
    "Accounting operations, transaction processing, and financial control tailored across key industry sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              Industry Specialization
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Sector-focused intelligence for nuanced commercial realities.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            Each market vertical presents unique accounting taxonomies, statutory liabilities, and regulatory frameworks. We bring deep sector-specific insight to ensure total compliance and strategic advantage.
          </p>
        </div>
      </section>

      {/* Industries Detailed List */}
      <section className="py-20 md:py-28 container-custom">
        <div className="space-y-16">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="border border-[#E8E0D8] p-8 sm:p-12 bg-[#FFFFFF] card-sheen"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Description */}
                <div className="lg:col-span-5">
                  <span className="text-xs font-mono font-semibold text-[#888888] block mb-2">
                    SECTOR {ind.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] mb-4">
                    {ind.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6">
                    {ind.description}
                  </p>
                  <Button href="/contact" variant="outline" size="sm" icon>
                    Consult Sector Lead
                  </Button>
                </div>

                {/* Right Challenges & Capabilities */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-8 border border-[#E8E8E4]">
                  {/* Common Pressures */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888888] mb-4 pb-2 border-b border-[#F0F0EE]">
                      Sector Regulatory Pressures
                    </h3>
                    <ul className="space-y-3">
                      {ind.challenges.map((ch, idx) => (
                        <li key={idx} className="text-xs text-[#555555] leading-relaxed flex items-start gap-2">
                          <span className="text-[#999999] font-mono text-[10px] mt-0.5">&bull;</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Firm Capabilities */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888888] mb-4 pb-2 border-b border-[#F0F0EE]">
                      Firm Advisory Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {ind.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="text-xs text-[#333333] font-medium leading-relaxed flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sector CTA */}
      <section className="py-20 bg-[#F9F9F8] border-t border-[#EAEAEA]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-medium text-[#111111] mb-4">
            Operating in a specialized niche sector?
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-8">
            Our advisory partners routinely structure solutions for defense contractors, digital asset ecosystems, educational trusts, and cross-border maritime operators.
          </p>
          <Button href="/contact" variant="primary" icon>
            Request Industry Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
