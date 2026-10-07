import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import { insightsData } from "../../data/insights";

export const metadata: Metadata = {
  title: "Knowledge & Briefings | ENTRABALANCE GLOBAL LLP",
  description:
    "Briefings, operational analysis, and perspectives on accounting operations, financial controls, and process improvement.",
};

export default function InsightsPage() {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              Knowledge &amp; Briefings
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Perspectives that anticipate regulatory and fiscal developments.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            Our partners publish rigorous examinations of cross-border tax treaties, statutory compliance changes, M&amp;A valuation dynamics, and board-level risk management.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="border border-[#E8E0D8] bg-white p-8 flex flex-col justify-between card-sheen"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#777777] pb-4 border-b border-[#F0F0EE] mb-6">
                  <span className="font-semibold text-[#111111] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-medium tracking-tight text-[#111111] mb-4 leading-snug">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#555555] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0F0EE] flex items-center justify-between text-xs">
                <span className="text-[#888888]">{article.date}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-semibold text-[#111111] inline-flex items-center gap-1 hover:underline"
                >
                  <span>Read Briefing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advisory Memo Notice */}
      <section className="py-20 bg-[#FAF9F7] border-t border-[#EAEAEA]">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-[#111111] mb-3">
            Institutional Regulatory Bulletins
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-8">
            We issue confidential advisory memorandums to general counsel and CFOs upon major regulatory circulars from the RBI, MCA, CBDT, and IRS.
          </p>
          <Button href="/contact" variant="outline" icon>
            Request Regulatory Bulletins
          </Button>
        </div>
      </section>
    </div>
  );
}
