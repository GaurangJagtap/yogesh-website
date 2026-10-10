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
              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-[#F0EAE3] flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A6F6B]">
                <div className="flex items-center gap-3">
                  {member.whatsappUrl && (
                    <a
                      href={member.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#1EBE5D] inline-flex items-center gap-1.5 font-medium transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:text-[#004182] inline-flex items-center gap-1.5 font-medium transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {!member.linkedin && !member.whatsappUrl && (
                    <span className="font-mono text-[11px] truncate">
                      {member.role}
                    </span>
                  )}
                </div>
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
