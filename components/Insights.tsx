import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { insightsData } from "../data/insights";

export const Insights: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#EAEAEA]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Thought Leadership & Briefings"
          title="Analysis that anticipates regulatory and fiscal change."
          align="split"
          description="In-depth perspectives from our partners on international tax developments, audit scrutiny, and institutional governance across key commercial jurisdictions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="border border-[#E5E5E2] p-8 bg-white flex flex-col justify-between group hover:border-[#111111] transition-all duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-[#777777] pb-4 border-b border-[#F0F0EE] mb-6">
                  <span className="font-semibold text-[#111111] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium tracking-tight text-[#111111] group-hover:text-[#111111] mb-3 leading-snug">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-[#F0F0EE] mt-8 flex items-center justify-between text-xs">
                <span className="text-[#888888]">{article.date}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-semibold text-[#111111] inline-flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Briefing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#111111] hover:underline"
          >
            <span>Access All Articles, Whitepapers &amp; Regulatory Memoranda</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
