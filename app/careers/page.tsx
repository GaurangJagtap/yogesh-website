import type { Metadata } from "next";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import { ArrowUpRight, CheckCircle2, Briefcase, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Culture | ENTRABALANCE GLOBAL LLP",
  description:
    "Build a career in accounting operations, transaction processing, and financial control with ENTRABALANCE GLOBAL LLP.",
};

export default function CareersPage() {
  const values = [
    {
      title: "Direct Partner Mentorship",
      description: "Work in intimate, specialized client pods alongside founding partners rather than being isolated in bureaucratic hierarchies.",
    },
    {
      title: "Cross-Border Technical Rigor",
      description: "Gain multi-jurisdictional exposure spanning Indian statutory reporting, US GAAP consolidation, and OECD transfer pricing frameworks.",
    },
    {
      title: "Intellectual Meritocracy",
      description: "We reward analytical depth, creative problem-solving, and client stewardship over superficial tenure or office politics.",
    },
  ];

  const positions = [
    {
      title: "Senior Executive — Accounts Payable & Transaction Operations",
      location: "Operations Desk",
      experience: "Professional Experience",
      type: "Full-Time",
      description: "Manage vendor bill verifications, payment batch scheduling, sub-ledger integrity, and vendor reconciliations across client accounts.",
    },
    {
      title: "Senior Executive — Accounting Controls & Month-End Close",
      location: "Operations Desk",
      experience: "Professional Experience",
      type: "Full-Time",
      description: "Coordinate balance-sheet reviews, periodic bank reconciliations, accrual entries, and trial balance finalization for client portfolios.",
    },
    {
      title: "Specialist — Payroll, Tax Support & Financial Reporting",
      location: "Specialist Desk",
      experience: "Professional Experience",
      type: "Full-Time",
      description: "Execute recurring payroll computations, prepare sales/payroll tax schedules, and compile structured financial statements and audit workpapers.",
    },
  ];

  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              Careers at ENTRABALANCE GLOBAL LLP
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Build your career with people who value expertise, curiosity and impact.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            We are looking for thoughtful, analytically rigorous professionals who aspire to practice corporate advisory at the highest institutional standard.
          </p>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 md:py-28 bg-[#FAF9F7] border-b border-[#EAEAE8]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Working Environment"
            title="A culture defined by excellence and mutual respect."
            align="split"
            description="We cultivate an environment where rigorous intellect meets collaborative professionalism."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#E8E0D8] card-sheen">
                <span className="text-xs font-mono font-semibold text-[#B87333] block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-medium text-[#111111] mb-3">
                  {v.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 container-custom border-b border-[#EAEAEA]">
        <SectionHeading
          eyebrow="Current Practice Openings"
          title="Active Opportunities"
          description="Explore opportunities to join our specialized practice pods."
        />

        <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA] mt-8">
          {positions.map((pos, pIdx) => (
            <div
              key={pIdx}
              className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAF9F7] -mx-4 px-4 transition-colors"
            >
              <div className="space-y-2 lg:w-7/12">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#777777]">
                  <span className="font-semibold text-[#111111]">{pos.location}</span>
                  <span>&bull;</span>
                  <span>{pos.experience}</span>
                  <span>&bull;</span>
                  <span>{pos.type}</span>
                </div>
                <h3 className="text-xl font-medium text-[#111111]">
                  {pos.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {pos.description}
                </p>
              </div>

              <div className="lg:w-4/12 flex items-center justify-start lg:justify-end">
                <Button href="/contact" variant="outline" size="sm" icon>
                  Apply for Position
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Enquiries */}
      <section className="py-20 bg-[#F9F9F8]">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-[#111111] mb-3">
            Do not see your exact practice specialization?
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            We are consistently interested in conversing with exceptional Chartered Accountants, legal scholars, and corporate finance analysts. Send your curriculum vitae directly to our talent team.
          </p>
          <div className="text-xs font-mono text-[#555555]">
            Direct Recruitment Enquiries: <span className="text-[#111111] font-semibold">careers@[companydomain].com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
