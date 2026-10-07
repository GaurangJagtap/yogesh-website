import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, ServiceItem } from "../../../data/services";
import { companyInformation } from "../../../data/team";
import SectionHeading from "../../../components/SectionHeading";
import Button from "../../../components/Button";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ${companyInformation.legalName}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Editorial Practice Hero */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/services"
              className="text-xs uppercase tracking-wider text-[#777777] hover:text-[#111111]"
            >
              &larr; All Work Areas
            </Link>
            <span className="text-[#CCCCCC]">•</span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111111]">
              SERVICE {service.number}
            </span>
            <span className="text-[#CCCCCC]">•</span>
            <span className="text-xs font-mono uppercase text-[#777777]">
              {service.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.08] mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#555555] font-light leading-relaxed max-w-3xl mb-8">
            {service.heroHeadline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" variant="primary" icon>
              Consult On This Service
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Review Other Services
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Key Offerings */}
      <section className="py-20 md:py-28 container-custom border-b border-[#EAEAEA]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111]">
              Overview &amp; Scope
            </h2>
            <p className="text-base text-[#444444] leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-6 border-t border-[#EAEAEA] space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                Key Deliverables &amp; Value
              </h3>
              <ul className="space-y-2">
                {service.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#555555]">
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888888] mb-6">
              Scope of Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.offerings.map((off, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAFAFA] border border-[#E5E5E2] flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-medium text-[#111111] mb-2">
                      {off.title}
                    </h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {off.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Workflow Steps */}
      <section className="py-20 md:py-28 bg-[#FAF9F7] border-b border-[#EAEAE8]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Workflow Structure"
            title="How this service is executed."
            description="Our structured methodology ensures transparency, thorough ledger control, and systematic documentation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.methodology.map((step) => (
              <div
                key={step.step}
                className="bg-white p-8 border border-[#E5E5E0] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#888888] block mb-4">
                    PHASE {step.step}
                  </span>
                  <h4 className="text-base font-medium text-[#111111] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Profiles & FAQs */}
      <section className="py-20 md:py-28 container-custom border-b border-[#EAEAEA]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888888]">
              Typical Client Profiles
            </h3>
            <ul className="space-y-3">
              {service.clientProfiles.map((cp, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-[#F8F8F7] border border-[#EBEBE8] text-xs text-[#444444] font-medium"
                >
                  {cp}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#EAEAEA]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#888888] mb-2">
                Operational Category
              </h4>
              <p className="text-sm font-medium text-[#111111]">
                {service.category} &bull; {companyInformation.legalName}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#888888]">
              Frequently Addressed Inquiries
            </h3>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="border border-[#E5E5E2] p-6 bg-white">
                  <h4 className="text-sm font-medium text-[#111111] mb-2 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#777777] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Direct Principal Contact Engagement CTA */}
      <section className="py-20 bg-[#F9F9F8]">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#111111] mb-4">
            Discuss {service.title} requirements.
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-8">
            Connect directly with {companyInformation.principalContacts.map(c => c.name).join(" or ")} to review your workflow and scope this service for your business.
          </p>
          <Button href="/contact" variant="primary" icon>
            Initiate Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
