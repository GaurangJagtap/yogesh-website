import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import ServiceCategories from "../components/ServiceCategories";
import Services from "../components/Services";
import InteractiveOperationsVisual from "../components/InteractiveOperationsVisual";
import ProcessFlow from "../components/ProcessFlow";
import WhyChooseUs from "../components/WhyChooseUs";
import DataPrivacySection from "../components/DataPrivacySection";
import Leadership from "../components/Leadership";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      {/* SECTION 01 — HERO */}
      <Hero />

      {/* SECTION 02 — TRUST / CREDENTIALS STATS */}
      <Stats />

      {/* SECTION 04 — ABOUT / COMPANY INTRODUCTION */}
      <AboutPreview />

      {/* SECTION 05 — 3 CORE SERVICE CATEGORIES (Transaction, Control, Specialist) */}
      <ServiceCategories />

      {/* SECTION 06 — 10 INDIVIDUAL WORK AREAS */}
      <Services />

      {/* SECTION 07 — INTERACTIVE OPERATIONS VISUAL ENGINE */}
      <InteractiveOperationsVisual />

      {/* SECTION 08 — PROCESS / HOW WE WORK (4-Stage Workflow) */}
      <ProcessFlow />

      {/* SECTION 08 — OUR PRINCIPLES */}
      <WhyChooseUs />

      {/* SECTION 09 — HIGHLIGHTED DATA PRIVACY & CONFIDENTIALITY */}
      <DataPrivacySection />

      {/* SECTION 10 — PRINCIPAL CONTACTS / LEADERSHIP */}
      <Leadership />

      {/* SECTION 11 — ENGAGEMENT CTA */}
      <CTA />
    </>
  );
}
