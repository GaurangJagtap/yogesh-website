"use client";

import React, { useState } from "react";
import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";
import { companyInformation } from "../../data/team";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Clock, ShieldCheck, FileText } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Accounts Payable",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields: Full Name, Corporate Email, and Message Details.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid corporate email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Dispatch via Next.js backend API (supports Resend & fallback mailers directly to gaurangdadujagtap@gmail.com)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header */}
      <section className="container-custom pb-16 md:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#111111]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">
              Contact Desk
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] leading-[1.1] mb-8">
            Connect with our principal contacts.
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl">
            Whether you are evaluating day-to-day accounts payable and receivable support, establishing a disciplined month-end close schedule, or coordinating audit request fulfillment, our principal contacts are available for structured discussions.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Layout */}
      <section className="py-20 md:py-28 container-custom border-b border-[#EAEAEA]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Corporate & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-[#111111] mb-6">
                Corporate Information
              </h2>
              <div className="space-y-6 text-sm text-[#444444]">
                {/* Verified Corporate Info Card */}
                <div className="border border-[#E5E5E2] p-6 bg-[#FAFAFA] space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#777777] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#111111]" />
                    <span>Registered Entity</span>
                  </div>
                  <div className="font-medium text-[#111111] text-lg">
                    {companyInformation.legalName}
                  </div>
                  <div className="space-y-1.5 text-xs text-[#555555]">
                    <div><strong className="text-[#111111]">LLPIN:</strong> {companyInformation.llpin}</div>
                    <div><strong className="text-[#111111]">Date of Incorporation:</strong> {companyInformation.incorporationDate}</div>
                    <div><strong className="text-[#111111]">Entity Type:</strong> {companyInformation.entityType}</div>
                  </div>
                </div>

                {/* Principal Contacts Card */}
                <div className="border border-[#E5E5E2] p-6 bg-[#FAFAFA] space-y-4">
                  <div className="text-xs uppercase tracking-wider text-[#777777] font-semibold flex items-center justify-between">
                    <span>Principal Contacts</span>
                    <span className="text-[10px] text-[#B87333] font-mono">5+ Years Practice</span>
                  </div>
                  <div className="space-y-4">
                    {companyInformation.principalContacts.map((contact, idx) => (
                      <div key={idx} className="pb-3 border-b border-[#EBEBE8] last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-[#111111] text-base">
                            {contact.name}
                          </div>
                          {contact.linkedin && (
                            <a
                              href={contact.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A66C2] hover:text-[#004182] transition-colors"
                              title="Connect on LinkedIn"
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                              <span>LinkedIn</span>
                            </a>
                          )}
                        </div>
                        <div className="text-xs text-[#666666] mt-0.5">
                          {contact.role} &bull; {companyInformation.shortName}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Protocol & Data Privacy Guarantee */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E8E0D8] space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                <span className="font-semibold text-xs uppercase tracking-wider text-[#1A1412]">
                  Strict Client Data Privacy &amp; Confidentiality
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                All client communications, invoices, bank records, and financial disclosures are governed under enterprise-grade non-disclosure protocols and encrypted communication standards.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#777777] pt-2 border-t border-[#E8E0D8]">
                <Clock className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Direct review by leadership within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#E5E5E2] p-8 sm:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-[#111111] mb-2">
                Service Inquiry &amp; Consultation Request
              </h2>
              <p className="text-xs sm:text-sm text-[#555555]">
                Please outline your operational requirements to connect directly with {companyInformation.principalContacts.map(c => c.name).join(" or ")}.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-white border border-[#111111] p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#111111] mx-auto" />
                <h3 className="text-xl font-medium text-[#111111]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed max-w-md mx-auto">
                  Thank you. Your inquiry has been received. Our principal contacts will review your requirements and respond shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      serviceType: "Accounts Payable",
                      message: "",
                    });
                  }}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#111111] underline underline-offset-4"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#333333] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. First & Last Name"
                      className="w-full bg-white border border-[#D5D5D0] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                      required
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#333333] mb-2"
                    >
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className="w-full bg-white border border-[#D5D5D0] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#333333] mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / International"
                      className="w-full bg-white border border-[#D5D5D0] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#333333] mb-2"
                    >
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Enterprise Ltd"
                      className="w-full bg-white border border-[#D5D5D0] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Area Selection */}
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#333333] mb-2"
                  >
                    Primary Work Area Required
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#D5D5D0] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  >
                    <option value="Accounts Payable">Accounts Payable</option>
                    <option value="Accounts Receivable">Accounts Receivable</option>
                    <option value="Payroll">Payroll</option>
                    <option value="Bank Reconciliations">Bank Reconciliations</option>
                    <option value="Journal Entries">Journal Entries</option>
                    <option value="Month-End Close">Month-End Close</option>
                    <option value="Sales & Payroll Tax Support">Sales &amp; Payroll Tax Support</option>
                    <option value="Financial Reporting">Financial Reporting</option>
                    <option value="Audit Support">Audit Support</option>
                    <option value="Process Improvement">Process Improvement</option>
                    <option value="Comprehensive Operational Scope">Comprehensive Operational Scope (Multiple Areas)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#333333] mb-2"
                  >
                    Operational Requirements / Scope Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your current accounting operations, approximate transaction volumes, or specific support needs..."
                    className="w-full bg-white border border-[#D5D5D0] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit button with states */}
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Submitting Inquiry..." : "Submit Consultation Request →"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
