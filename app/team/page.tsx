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
                  {/* Portrait or Monogram */}
                  <div className="sm:col-span-5 relative aspect-[4/5] bg-[#FAF7F2] border border-[#E8E0D8] overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at ${companyInformation.legalName}`}
                        fill
                        className="object-cover object-top transition-all duration-300"
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF7F2] to-[#EFE8DF] p-4 text-center">
                        <div className="w-16 h-16 rounded-full border border-[#B87333]/40 bg-[#FAF7F2] flex items-center justify-center font-serif text-xl text-[#B87333] font-semibold mb-2">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="font-serif text-xs text-[#1A1412] font-medium">{member.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Header Meta */}
                  <div className="sm:col-span-7">
                    <span className="text-xs uppercase tracking-wider text-[#B87333] font-semibold block mb-1">
                      {companyInformation.legalName}
                    </span>
                    <h2 className="text-2xl font-serif font-medium text-[#111111] mb-1">
                      {member.name}
                    </h2>
                    <p className="text-xs font-semibold text-[#7A6F6B] mb-3">
                      {member.role}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#B87333] transition-colors"
                      >
                        <span>Direct Contact Inquiry</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#B87333]" />
                      </Link>
                      {member.whatsappUrl && (
                        <a
                          href={member.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:text-[#1EBE5D] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                          </svg>
                          <span>Chat on WhatsApp ({member.phone})</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] hover:text-[#004182] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span>Connect on LinkedIn</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
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
                  <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                  <span>Designated Leadership Partner</span>
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
