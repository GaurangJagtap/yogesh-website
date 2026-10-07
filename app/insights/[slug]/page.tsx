import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightsData } from "../../../data/insights";
import Button from "../../../components/Button";
import { ArrowLeft, Clock, Calendar, BookmarkCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | ENTRABALANCE GLOBAL LLP`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <article className="container-custom max-w-4xl pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#777777] hover:text-[#111111]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Briefings</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#777777] mb-6">
          <span className="font-semibold uppercase tracking-wider text-[#111111] bg-[#F4F4F0] px-2.5 py-1">
            {article.category}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111] leading-[1.14] mb-8">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#555555] font-light leading-relaxed border-l-2 border-[#111111] pl-6 my-8 italic">
          {article.excerpt}
        </p>

        {/* Executive Takeaways Box */}
        <div className="my-12 p-8 bg-[#FAF9F7] border border-[#E5E5E0]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] mb-4">
            <BookmarkCheck className="w-4 h-4" />
            <span>Executive Summary &amp; Key Takeaways</span>
          </div>
          <ul className="space-y-3">
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx} className="text-sm text-[#444444] leading-relaxed flex items-start gap-2.5">
                <span className="text-[#111111] font-mono text-xs mt-1">&mdash;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Narrative Article Content */}
        <div className="space-y-6 text-base sm:text-lg text-[#333333] leading-relaxed pt-6">
          {article.content.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-[#EAEAEA] text-xs text-[#777777] leading-relaxed">
          <strong className="text-[#111111]">Statutory Disclaimer:</strong> This briefing is prepared for informational and educational purposes only and does not constitute formal legal, financial, or tax advice. Application to specific factual scenarios requires individualized professional engagement and review.
        </div>
      </article>

      {/* Post CTA */}
      <section className="py-20 bg-[#FAF9F7]">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl font-medium text-[#111111] mb-3">
            Discuss the implications for your enterprise.
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-6">
            Our practice leaders frequently review corporate structures against newly gazetted regulations and treaty amendments.
          </p>
          <Button href="/contact" variant="primary" icon>
            Request Confidential Review
          </Button>
        </div>
      </section>
    </div>
  );
}
