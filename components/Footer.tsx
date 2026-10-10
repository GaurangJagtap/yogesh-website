import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "../data/services";
import { companyInformation } from "../data/team";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1412] text-[#FAF7F2] pt-20 pb-12 border-t border-[#2B211E]">
      <div className="container-custom">
        {/* Top Tier: Brand Statement & Contact Prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2B211E]">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-9 h-9 rounded-sm bg-white overflow-hidden flex items-center justify-center p-0.5 shadow-sm shrink-0">
                <Image
                  src="/logo.jpg"
                  alt={`${companyInformation.legalName} Logo`}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                {companyInformation.legalName}
              </span>
            </div>
            <p className="text-sm text-[#BDB2A9] max-w-md leading-relaxed pt-2">
              Accounting Operations. Financial Accuracy. Better Business Processes. Supporting businesses with transaction processing, accounting controls, reporting, and process improvement.
            </p>
            <div className="pt-2 text-xs text-[#9E9086] space-y-1">
              <div><strong className="text-white">LLPIN:</strong> {companyInformation.llpin}</div>
              <div><strong className="text-white">Incorporated:</strong> {companyInformation.incorporationDate}</div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-[#251D1A] p-6 sm:p-8 border border-[#382B27]">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B87333] font-medium">
                Accounting &amp; Operations Support
              </div>
              <div className="text-xl font-medium text-white mt-1">
                Consult With Our Principal Contacts
              </div>
              <div className="text-xs text-[#9E9086] mt-1">
                Direct WhatsApp Line: {companyInformation.whatsappNumber}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={companyInformation.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#1EBE5D] transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#B87333] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#9E5F27] transition-all shadow-sm"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Tier: Structured Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 text-sm border-b border-[#2B211E]">
          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase tracking-wider text-[#B87333] font-semibold">
              Work Areas
            </h4>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#BDB2A9] hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs text-[#B87333] hover:text-white underline underline-offset-4"
                >
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Categories Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase tracking-wider text-[#B87333] font-semibold">
              Core Pillars
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Transaction Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Accounting Control
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Specialist Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Process Improvement
                </Link>
              </li>
            </ul>
          </div>

          {/* Firm Column */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase tracking-wider text-[#B87333] font-semibold">
              The Firm
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-[#BDB2A9] hover:text-white transition-colors">
                  About The Firm
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Principal Contacts
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Knowledge &amp; Briefings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#BDB2A9] hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Details Column */}
          <div className="space-y-4 col-span-2 lg:col-span-2">
            <h4 className="text-[12px] uppercase tracking-wider text-[#B87333] font-semibold">
              Corporate Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#BDB2A9]">
              <div className="space-y-1">
                <div className="text-white font-medium">Entity Registration</div>
                <div>{companyInformation.legalName}</div>
                <div>LLPIN: {companyInformation.llpin}</div>
                <div className="text-[#9E9086] pt-1">Inc. Date: {companyInformation.incorporationDate}</div>
              </div>
              <div className="space-y-1">
                <div className="text-white font-medium">Principal Contacts</div>
                {companyInformation.principalContacts.map((contact, i) => (
                  <div key={i}>{contact.name} ({contact.role})</div>
                ))}
                <div className="text-[#9E9086] pt-1">Direct inquiries via contact desk</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E9086]">
          <div>
            &copy; {new Date().getFullYear()} {companyInformation.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <span className="text-[#382B27]">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#382B27]">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Corporate Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
