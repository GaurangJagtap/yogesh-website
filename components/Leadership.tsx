import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { leadershipData, companyInformation } from "../data/team";

export const Leadership: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F4EFEA] border-b border-[#E8E0D8]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Leadership & Contacts"
          title="Principal contacts for client engagements."
          align="split"
          description={`Direct communication with the principal contacts of ${companyInformation.legalName} to discuss accounting operations, period-end requirements, and service scoping.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadershipData.map((member) => (
            <div
              key={member.id}
              className="group bg-[#FFFFFF] border border-[#E8E0D8] overflow-hidden flex flex-col justify-between card-sheen"
            >
              <div>
                {/* Portrait or Elegant Placeholder */}
                <div className="relative aspect-[4/5] w-full bg-[#FAF7F2] overflow-hidden flex items-center justify-center">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role} at ${companyInformation.legalName}`}
                      fill
                      className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF7F2] to-[#EFE8DF] border-b border-[#E8E0D8] text-center p-6">
                      <div className="w-20 h-20 rounded-full border border-[#B87333]/40 bg-[#FAF7F2] flex items-center justify-center font-serif text-2xl text-[#B87333] font-semibold mb-3">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="font-serif text-base text-[#1A1412] font-medium">{member.name}</span>
                      <span className="text-[11px] font-mono text-[#7A6F6B] mt-0.5 uppercase tracking-wider">{member.role}</span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-[#FAF7F2]/95 backdrop-blur-sm px-2.5 py-1 text-[#1A1412] border border-[#E8E0D8]">
                      Leadership
                    </span>
                  </div>
                </div>

                {/* Profile Meta */}
                <div className="p-6 sm:p-8">
                  <div className="text-xs uppercase tracking-wider text-[#B87333] font-semibold mb-1">
                    {companyInformation.legalName}
                  </div>
                  <h3 className="text-xl font-medium text-[#1A1412] group-hover:text-[#B87333] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#7A6F6B] mt-0.5 mb-3">
                    {member.role}
                  </div>

                  <p className="text-xs text-[#3D312E] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-[#F0EAE3] flex items-center justify-between text-xs text-[#7A6F6B]">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:text-[#004182] inline-flex items-center gap-1.5 font-medium transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] truncate">
                    {member.role}
                  </span>
                )}
                <Link
                  href="/contact"
                  className="text-[#2B211E] hover:text-[#B87333] inline-flex items-center gap-1 font-medium transition-colors ml-auto"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B87333]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#2B211E] hover:text-[#B87333] hover:underline transition-colors"
          >
            <span>View Full Leadership &amp; Principal Contact Directory</span>
            <ArrowUpRight className="w-4 h-4 text-[#B87333]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
