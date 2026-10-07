import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export const WhyChooseUs: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "Structured Transaction Disciplines",
      description:
        "Every vendor bill, payment entry, and invoice is handled with consistent verification and supporting documentation, preventing reconciliation backlogs.",
    },
    {
      number: "02",
      title: "Ledger Control & Account Reconciliations",
      description:
        "We place primary emphasis on periodic bank reconciliations, accrual entries, and balance-sheet review so that your financial records are always verified.",
    },
    {
      number: "03",
      title: "Specialist Support for Critical Cycles",
      description:
        "From timely payroll calculations and tax schedule preparation to organized audit request fulfillment, we provide focused support where precision matters most.",
    },
    {
      number: "04",
      title: "Continuous Process Improvement",
      description:
        "We evaluate accounting routines, standard operating procedures (SOPs), and closing schedules to help businesses streamline daily operations.",
    },
    {
      number: "05",
      title: "Direct Principal Contact Engagement",
      description:
        "Clients interact directly with designated principal contacts who understand their operational requirements and coordinate delivery with care.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Principles"
          title="Disciplined execution across every accounting cycle."
          align="split"
          description="We focus on dependable accounting operations, accurate ledger records, and methodical processes that give business leadership clarity and peace of mind."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Numbered Principles with hover interaction */}
          <div className="lg:col-span-7 divide-y divide-[#E8E0D8] border-y border-[#E8E0D8]">
            {principles.map((p) => (
              <div key={p.number} className="py-8 group transition-all duration-300 hover:pl-3">
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono font-semibold tracking-widest text-[#B87333] pt-1">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-[#1A1412] mb-2 group-hover:text-[#B87333] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#3D312E] leading-relaxed max-w-xl">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: High-end Architectural Editorial Visual */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative aspect-[3/4] w-full bg-[#FFFFFF] overflow-hidden border border-[#E8E0D8] card-sheen">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
                alt="Disciplined accounting workspace representing accuracy and structured processes"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/85 via-transparent to-transparent flex flex-col justify-end p-8 text-[#FAF7F2]">
                <div className="text-xs font-mono uppercase tracking-widest text-[#B87333] mb-1">
                  Accounting Operations
                </div>
                <div className="text-base font-medium">
                  &ldquo;Accounting accuracy requires disciplined routines, verifiable reconciliations, and structured process flow.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
