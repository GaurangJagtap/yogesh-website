"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { companyInformation } from "../data/team";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Leadership", href: "/team" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E0D8] py-3.5 shadow-[0_4px_20px_-4px_rgba(43,33,30,0.05)]"
            : "bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#EFE8DF] py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo / Identity with Custom Logo Mark */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-sm bg-white border border-[#E8E0D8] overflow-hidden flex items-center justify-center p-0.5 shadow-xs group-hover:border-[#B87333] transition-colors shrink-0">
              <Image
                src="/logo.jpg"
                alt={`${companyInformation.legalName} Logo`}
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-[15px] text-[#1A1412] leading-none group-hover:text-[#B87333] transition-colors">
                {companyInformation.legalName}
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#7A6F6B] font-medium mt-1">
                Accounting &bull; Finance &bull; Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#B87333] font-semibold"
                      : "text-[#3D312E] hover:text-[#B87333]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B87333]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" size="sm" variant="primary" icon>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2B211E] hover:text-[#B87333] focus:outline-none focus:ring-2 focus:ring-[#B87333] rounded"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col pt-24 px-6 pb-8 overflow-y-auto lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6 flex-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A6F6B] pb-2 border-b border-[#E8E0D8]">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-medium tracking-tight flex items-center justify-between py-2 border-b border-[#EFE8DF] ${
                    isActive ? "text-[#B87333] font-semibold" : "text-[#2B211E]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#B87333]" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8E0D8] flex flex-col gap-3">
            <div className="text-xs text-[#7A6F6B]">
              {companyInformation.legalName} • LLPIN: {companyInformation.llpin}
            </div>
            <Button
              href="/contact"
              size="lg"
              variant="cognac"
              className="w-full justify-between"
              icon
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
