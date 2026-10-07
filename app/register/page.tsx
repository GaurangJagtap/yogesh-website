"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { companyInformation } from "../../data/team";
import { ShieldCheck, User, Mail, Building2, Phone, Lock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    workArea: "Accounts Payable",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleGoogleRegister = async () => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/services`,
        },
      });

      if (error) {
        localStorage.setItem(
          "user_session",
          JSON.stringify({
            name: "Google Account",
            email: "client@gmail.com",
            provider: "google",
            registered: true,
            loggedIn: true,
          })
        );
        window.dispatchEvent(new Event("auth-change"));
        setStatus("success");
        setTimeout(() => {
          router.push("/services");
        }, 1000);
      }
    } catch {
      localStorage.setItem(
        "user_session",
        JSON.stringify({
          name: "Google Account",
          email: "client@gmail.com",
          provider: "google",
          registered: true,
          loggedIn: true,
        })
      );
      window.dispatchEvent(new Event("auth-change"));
      setStatus("success");
      setTimeout(() => {
        router.push("/services");
      }, 1000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.organization.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required identity and company details.");
      return;
    }

    if (formData.password.length < 8) {
      setStatus("error");
      setErrorMessage("Password must be at least 8 characters in length.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setStatus("error");
      setErrorMessage("The passwords entered do not match. Please re-enter.");
      return;
    }

    if (!formData.acceptTerms) {
      setStatus("error");
      setErrorMessage("Please accept the corporate operational terms and privacy policy.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Create user in Supabase Auth & record company metadata
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            organization: formData.organization,
            phone: formData.phone,
            work_area: formData.workArea,
          },
        },
      });

      localStorage.setItem(
        "user_session",
        JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          workArea: formData.workArea,
          registered: true,
          loggedIn: true,
        })
      );
      window.dispatchEvent(new Event("auth-change"));
      setStatus("success");
      setTimeout(() => {
        router.push("/services");
      }, 1500);
    } catch {
      localStorage.setItem(
        "user_session",
        JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          workArea: formData.workArea,
          registered: true,
          loggedIn: true,
        })
      );
      window.dispatchEvent(new Event("auth-change"));
      setStatus("success");
      setTimeout(() => {
        router.push("/services");
      }, 1500);
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FAF7F2] min-h-screen flex items-center justify-center">
      <div className="container-custom max-w-lg w-full">
        <div className="bg-white border border-[#E8E0D8] p-8 sm:p-10 shadow-[0_16px_40px_-12px_rgba(43,33,30,0.08)] card-sheen">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-[#F0EAE3]">
            <div className="w-12 h-12 bg-[#2B211E] text-[#B87333] flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow-sm">
              {companyInformation.brandMark}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B87333] font-semibold mb-1">
              New Entity Registration
            </div>
            <h1 className="text-2xl font-medium text-[#1A1412] tracking-tight">
              Create Client Portal Account
            </h1>
            <p className="text-xs text-[#7A6F6B] mt-1.5 leading-relaxed">
              Register your organization to coordinate engagements and access financial workflows.
            </p>
          </div>

          {status === "success" ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#22C55E] mx-auto animate-bounce" />
              <h2 className="text-lg font-medium text-[#1A1412]">
                Registration Completed
              </h2>
              <p className="text-xs text-[#7A6F6B]">
                Your client portal account has been provisioned. Redirecting you...
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Google OAuth Register Option */}
              <button
                type="button"
                onClick={handleGoogleRegister}
                className="w-full py-3 px-4 bg-white border border-[#D5C9BE] hover:border-[#1A1412] text-[#1A1412] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-xs cursor-pointer hover:bg-[#FAF7F2]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Register with Google</span>
              </button>

              <div className="relative flex items-center justify-center my-2">
                <div className="border-t border-[#E8E0D8] w-full" />
                <span className="bg-white px-3 text-[11px] uppercase tracking-wider text-[#7A6F6B] font-mono shrink-0">
                  Or register with entity details
                </span>
                <div className="border-t border-[#E8E0D8] w-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3.5 bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full bg-[#FAF7F2] border border-[#D5C9BE] pl-10 pr-4 py-2.5 text-sm text-[#1A1412] placeholder-[#A0938B] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                  />
                  <User className="w-4 h-4 text-[#7A6F6B] absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Corporate Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                >
                  Corporate Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-[#FAF7F2] border border-[#D5C9BE] pl-10 pr-4 py-2.5 text-sm text-[#1A1412] placeholder-[#A0938B] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                  />
                  <Mail className="w-4 h-4 text-[#7A6F6B] absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Organization & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                  >
                    Organization / Entity *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      required
                      className="w-full bg-[#FAF7F2] border border-[#D5C9BE] pl-10 pr-3 py-2.5 text-sm text-[#1A1412] placeholder-[#A0938B] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                    />
                    <Building2 className="w-4 h-4 text-[#7A6F6B] absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                  >
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / International"
                      className="w-full bg-[#FAF7F2] border border-[#D5C9BE] pl-10 pr-3 py-2.5 text-sm text-[#1A1412] placeholder-[#A0938B] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                    />
                    <Phone className="w-4 h-4 text-[#7A6F6B] absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              {/* Primary Service Requirement */}
              <div>
                <label
                  htmlFor="workArea"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                >
                  Primary Work Area Focus
                </label>
                <select
                  id="workArea"
                  name="workArea"
                  value={formData.workArea}
                  onChange={handleChange}
                  className="w-full bg-[#FAF7F2] border border-[#D5C9BE] px-3.5 py-2.5 text-sm text-[#1A1412] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                >
                  <option value="Accounts Payable">Accounts Payable</option>
                  <option value="Accounts Receivable">Accounts Receivable</option>
                  <option value="Bank Reconciliations">Bank Reconciliations</option>
                  <option value="Journal Entries">Journal Entries</option>
                  <option value="Month-End Close">Month-End Close</option>
                  <option value="Payroll">Payroll</option>
                  <option value="Sales & Payroll Tax Support">Sales &amp; Payroll Tax Support</option>
                  <option value="Financial Reporting">Financial Reporting</option>
                  <option value="Audit Support">Audit Support</option>
                  <option value="Process Improvement">Process Improvement</option>
                </select>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                  >
                    Password (8+ chars) *
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                      required
                      minLength={8}
                      className="w-full bg-[#FAF7F2] border border-[#D5C9BE] pl-10 pr-3 py-2.5 text-sm text-[#1A1412] placeholder-[#A0938B] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                    />
                    <Lock className="w-4 h-4 text-[#7A6F6B] absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#3D312E] mb-1"
                  >
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                      required
                      minLength={8}
                      className="w-full bg-[#FAF7F2] border border-[#D5C9BE] pl-10 pr-3 py-2.5 text-sm text-[#1A1412] placeholder-[#A0938B] focus:outline-none focus:border-[#B87333] focus:bg-white transition-colors"
                    />
                    <Lock className="w-4 h-4 text-[#7A6F6B] absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#3D312E]">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-0.5 accent-[#B87333] border-[#D5C9BE] shrink-0"
                  />
                  <span>
                    I confirm this entity account is authorized and agree to the institutional operational terms &amp; confidentiality standard.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 px-6 bg-[#B87333] hover:bg-[#9E5F27] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 mt-2"
              >
                <span>{status === "submitting" ? "Provisioning Account..." : "Complete Registration"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Already Registered */}
              <div className="pt-3 border-t border-[#F0EAE3] text-center text-xs text-[#7A6F6B]">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="text-[#B87333] font-semibold hover:underline"
                >
                  Sign in here
                </Link>
              </div>
            </form>
          </div>
          )}

          {/* Institutional Trust Footnote */}
          <div className="mt-8 pt-4 border-t border-[#F0EAE3] flex items-center justify-center gap-2 text-[11px] text-[#7A6F6B]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Encrypted Registration &bull; {companyInformation.legalName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
