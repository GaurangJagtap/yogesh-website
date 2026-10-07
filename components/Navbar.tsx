"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight, User, LogOut, ChevronDown } from "lucide-react";
import Button from "./Button";
import { companyInformation } from "../data/team";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name?: string } | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Load and sync user auth session
  useEffect(() => {
    const syncAuth = () => {
      try {
        const sessionStr = localStorage.getItem("user_session");
        if (sessionStr) {
          const session = JSON.parse(sessionStr);
          if (session?.loggedIn) {
            setCurrentUser(session);
            return;
          }
        }
        setCurrentUser(null);
      } catch {
        setCurrentUser(null);
      }
    };

    syncAuth();

    // Listen to custom auth events and storage changes
    window.addEventListener("auth-change", syncAuth);
    window.addEventListener("storage", syncAuth);
    return () => {
      window.removeEventListener("auth-change", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user_session");
    window.dispatchEvent(new Event("auth-change"));
    setCurrentUser(null);
    setProfileDropdownOpen(false);
    router.push("/");
  };

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
          {/* Logo / Identity with Cognac Brand Mark */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-[#2B211E] group-hover:bg-[#B87333] text-[#FAF7F2] flex items-center justify-center font-bold text-xs tracking-wider transition-colors shadow-sm">
              {companyInformation.brandMark}
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
            {currentUser ? (
              <div className="relative">
                {/* Clean Initial Avatar Button */}
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="w-9 h-9 rounded-full bg-[#B87333] hover:bg-[#9E5F27] text-white flex items-center justify-center font-bold text-sm tracking-wide transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B87333]/40 cursor-pointer"
                  aria-label="User Account Menu"
                  title={currentUser.name || currentUser.email}
                >
                  {(currentUser.name || currentUser.email).charAt(0).toUpperCase()}
                </button>

                {/* Dropdown Menu on Click */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2.5 w-56 bg-white border border-[#E8E0D8] shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2.5 border-b border-[#F0EAE3]">
                      <div className="text-xs font-semibold text-[#1A1412] truncate">
                        {currentUser.name || "Client Account"}
                      </div>
                      <div className="text-[11px] text-[#7A6F6B] truncate font-mono mt-0.5">
                        {currentUser.email}
                      </div>
                    </div>

                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2.5 text-xs text-[#1A1412] hover:bg-[#FAF7F2] hover:text-[#B87333] flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5 text-[#7A6F6B]" />
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-[13px] font-medium tracking-wide uppercase text-[#3D312E] hover:text-[#B87333] transition-colors py-1"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-[13px] font-semibold tracking-wide uppercase px-3.5 py-1.5 border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white transition-all shadow-xs"
                >
                  Register
                </Link>
              </>
            )}

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
            {currentUser ? (
              <div className="space-y-3 mb-1">
                <div className="p-3.5 bg-white border border-[#E8E0D8] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#B87333] text-white flex items-center justify-center font-bold text-sm">
                      {(currentUser.name || currentUser.email).charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1A1412]">
                        {currentUser.name || "Client Account"}
                      </div>
                      <div className="text-[11px] text-[#7A6F6B] font-mono">
                        {currentUser.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="px-3 py-1.5 text-xs font-medium text-[#1A1412] hover:text-[#B87333] border border-[#E8E0D8] bg-[#FAF7F2] transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-1">
                <Link
                  href="/login"
                  className="py-2.5 text-center text-xs font-semibold uppercase tracking-wider border border-[#D5C9BE] text-[#1A1412] hover:bg-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="py-2.5 text-center text-xs font-semibold uppercase tracking-wider bg-[#B87333] text-white hover:bg-[#9E5F27] transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
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
