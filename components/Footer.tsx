import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, ExternalLink } from "lucide-react";
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
              <div className="relative w-16 h-12 rounded-sm bg-[#FAF7F2] overflow-hidden flex items-center justify-center shrink-0 p-0.5">
                <Image
                  src="/logo.png"
                  alt={`${companyInformation.legalName} Logo`}
                  fill
                  className="object-contain"
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
              <div><strong className="text-white">Entity:</strong> {companyInformation.entityType}</div>
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
                Direct WhatsApp Consultation Desk
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
                <div className="text-[#9E9086] pt-1">{companyInformation.entityType}</div>
              </div>
              <div className="space-y-1">
                <div className="text-white font-medium">Principal Contacts</div>
                {companyInformation.principalContacts.map((contact, i) => (
                  <div key={i}>{contact.name} ({contact.role})</div>
                ))}
                <div className="pt-1.5">
                  <a
                    href={`mailto:${companyInformation.contactEmail}`}
                    className="text-[#B87333] hover:text-[#d38b47] transition-colors font-mono text-[11px]"
                  >
                    {companyInformation.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations / Clickable Map Section */}
        <div className="py-12 border-b border-[#2B211E]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#B87333] font-semibold font-mono">
                Global Practice Presence
              </span>
              <h4 className="text-lg font-medium text-white mt-0.5">
                Office Locations
              </h4>
            </div>
            <p className="text-xs text-[#9E9086]">
              Click on any location map to open direct navigation in Google Maps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Location 1 — Pune Office (Active with Map & Link) */}
            <div className="bg-[#221A17] border border-[#382B27] rounded-sm overflow-hidden flex flex-col group hover:border-[#B87333]/60 transition-all">
              <div className="p-4 bg-[#281F1B] border-b border-[#382B27] flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#B87333] block">
                      India Operations Office
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white leading-snug">
                      Supreme Arcade, Office no:04, 1st floor, Rakshak Nagar, Kharadi, Pune – 411014
                    </span>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/PZtu7woR8PTP8BbcA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#B87333] hover:bg-[#9E5F27] text-white text-[11px] font-semibold tracking-wider uppercase rounded-xs transition-colors shrink-0"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive / Clickable Map Container */}
              <div className="relative w-full h-56 sm:h-64 bg-[#1A1412]">
                <iframe
                  title="Entrabalance Pune Office Location Map"
                  src="https://maps.google.com/maps?q=18.5486085,73.9200326&z=15&output=embed"
                  className="w-full h-full border-0 filter contrast-[0.95] opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.app.goo.gl/PZtu7woR8PTP8BbcA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 bg-[#1A1412]/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 border border-[#382B27] hover:border-[#B87333] hover:text-[#B87333] transition-all flex items-center gap-1.5 rounded-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B87333]" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location 2 — Blank Placeholder Reserved for Second Location */}
            <div className="bg-[#221A17]/60 border border-dashed border-[#382B27] hover:border-[#B87333]/40 rounded-sm overflow-hidden flex flex-col justify-center items-center p-8 text-center transition-all min-h-[280px]">
              <div className="w-12 h-12 rounded-full bg-[#281F1B] border border-[#382B27] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#B87333]/50" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B87333]/80 font-semibold mb-1">
                Secondary Jurisdiction / Office
              </span>
              <h5 className="text-sm font-medium text-[#FAF7F2]/80 mb-2">
                Location To Be Announced
              </h5>
              <p className="text-xs text-[#9E9086] max-w-xs leading-relaxed">
                Space reserved for international operations office. Location details and interactive map will be configured here soon.
              </p>
              <div className="mt-4 px-3.5 py-1.5 border border-[#382B27] rounded-xs bg-[#1A1412]/50 text-[11px] font-mono text-[#7A6F6B]">
                Coordinates &bull; Pending Configuration
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
