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
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full bg-[#FAF7F2] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at ${companyInformation.legalName}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-[#FAF7F2]/95 backdrop-blur-sm px-2.5 py-1 text-[#1A1412] border border-[#E8E0D8]">
                      Principal Contact
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
                <span className="font-mono text-[11px] truncate mr-2">
                  {member.role}
                </span>
                <Link
                  href="/contact"
                  className="text-[#2B211E] hover:text-[#B87333] inline-flex items-center gap-1 font-medium transition-colors"
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
