import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import CorporateInfoBlock from "../../components/CorporateInfoBlock";
import { leadershipData, companyInformation } from "../../data/team";
import { ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Principal Contacts & Leadership | ${companyInformation.legalName}`,
  description:
    `Principal contacts and designated leadership of ${companyInformation.legalName}: Yogeshwar Kale and Shubham Agarwal.`,
};

export default function TeamPage() {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              Designated Leadership
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Principal contacts for client engagements.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            {companyInformation.legalName} is stewarded by dedicated principal contacts who coordinate client engagements across accounting operations, financial controls, and specialist workflows.
          </p>
        </div>
      </section>

      {/* Corporate Registration Details */}
      <CorporateInfoBlock />

      {/* Principal Contacts Profiles */}
      <section className="py-20 md:py-28 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {leadershipData.map((member) => (
            <div
              key={member.id}
              className="border border-[#E8E0D8] bg-white p-8 sm:p-10 flex flex-col justify-between card-sheen"
            >
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8 pb-6 border-b border-[#F0F0EE]">
                  {/* Portrait */}
                  <div className="sm:col-span-5 relative aspect-[4/5] bg-[#EAEAEA] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role} at ${companyInformation.legalName}`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </div>

                  {/* Header Meta */}
                  <div className="sm:col-span-7">
                    <span className="text-xs uppercase tracking-wider text-[#777777] font-semibold block mb-1">
                      {companyInformation.legalName}
                    </span>
                    <h2 className="text-2xl font-medium text-[#111111] mb-1">
                      {member.name}
                    </h2>
                    <p className="text-xs font-semibold text-[#444444] mb-3">
                      {member.role}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:underline"
                    >
                      <span>Direct Contact Inquiry</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Profile Overview */}
                <p className="text-sm text-[#555555] leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Verified Detail */}
              <div className="pt-6 border-t border-[#F0F0EE] flex items-center justify-between text-xs text-[#666666]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#111111]" />
                  <span>Designated Principal Contact</span>
                </div>
                <span className="font-mono text-[11px] text-[#888888]">
                  LLPIN: {companyInformation.llpin}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Philosophy */}
      <section className="py-20 bg-[#FAF9F7] border-t border-[#EAEAEA]">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] mb-4">
            Direct access to principal contacts.
          </h2>
          <p className="text-base text-[#555555] leading-relaxed mb-8">
            When you engage {companyInformation.legalName}, your inquiries are directly coordinated by our principal contacts, ensuring clear communication, timely updates, and disciplined delivery.
          </p>
          <Button href="/contact" variant="primary" icon>
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
