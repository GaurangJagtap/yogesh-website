"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check, X } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and locked
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    // Check if user already made a cookie choice
    const savedConsent = localStorage.getItem("cookie_consent_status");
    if (!savedConsent) {
      // Show consent banner shortly after page mount
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent_status", "accepted_all");
    localStorage.setItem(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics: true, functional: true })
    );
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookie_consent_status", "essential_only");
    localStorage.setItem(
      "cookie_preferences",
      JSON.stringify({ necessary: true, analytics: false, functional: false })
    );
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem("cookie_consent_status", "custom");
    localStorage.setItem("cookie_preferences", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent banner"
      aria-modal="true"
      className="fixed bottom-0 sm:bottom-6 sm:left-6 sm:right-auto z-50 max-w-full sm:max-w-lg w-full p-4 sm:p-0 animate-in fade-in slide-in-from-bottom-8 duration-500"
    >
      <div className="bg-[#FFFFFF] border-2 border-[#1A1412] shadow-[0_20px_50px_rgba(26,20,18,0.25)] p-6 sm:p-7 text-[#1A1412]">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#2B211E] text-[#B87333] flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1A1412]">
                Cookie &amp; Privacy Notice
              </h2>
              <span className="text-[11px] text-[#7A6F6B] font-mono block">
                Statutory Regulatory Standard
              </span>
            </div>
          </div>
          <button
            onClick={handleAcceptEssential}
            className="text-[#7A6F6B] hover:text-[#1A1412] p-1 transition-colors"
            aria-label="Dismiss banner with essential cookies"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-[#3D312E] leading-relaxed mb-4">
          We use cookies to guarantee secure authentication, preserve your financial portal session integrity, and deliver optimized accounting operational insights. You can tailor your choices or accept standard settings.
        </p>

        {/* Expandable Preferences Modal / Accordion */}
        {showPreferences ? (
          <div className="border-t border-[#E8E0D8] pt-3.5 mb-5 space-y-3">
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#F0EAE3]">
              <div>
                <span className="font-semibold text-[#1A1412] block">Strictly Necessary</span>
                <span className="text-[11px] text-[#7A6F6B]">Required for core security &amp; login sessions</span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-[#2B211E] text-white px-2 py-0.5 font-bold">
                Always Active
              </span>
            </div>

            <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#F0EAE3]">
              <div>
                <span className="font-semibold text-[#1A1412] block">Operational Analytics</span>
                <span className="text-[11px] text-[#7A6F6B]">Aggregated metrics to optimize workflows</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-[#D5C9BE] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#B87333]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between text-xs py-1.5">
              <div>
                <span className="font-semibold text-[#1A1412] block">Functional Personalization</span>
                <span className="text-[11px] text-[#7A6F6B]">Remembers view filters &amp; portal settings</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences({ ...preferences, functional: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-[#D5C9BE] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#B87333]"></div>
              </label>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 bg-[#1A1412] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3D312E] transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        ) : null}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-4 bg-[#B87333] hover:bg-[#9E5F27] text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
          >
            Accept All Cookies
          </button>
          <button
            onClick={handleAcceptEssential}
            className="py-2.5 px-4 bg-[#FAF7F2] hover:bg-[#EFE8DF] border border-[#D5C9BE] text-[#1A1412] text-xs font-semibold uppercase tracking-wider transition-colors text-center"
          >
            Essential Only
          </button>
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="py-2.5 px-3 text-[#7A6F6B] hover:text-[#1A1412] text-xs font-semibold underline underline-offset-4 transition-colors text-center"
          >
            {showPreferences ? "Close Settings" : "Preferences"}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;
