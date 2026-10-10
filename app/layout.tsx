import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { companyInformation } from "../data/team";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${companyInformation.legalName} | Accounting Operations & Financial Control`,
  description:
    "Professional accounting operations, transaction processing, financial reporting, payroll support, reconciliations, and process improvement.",
  keywords: [
    "Accounting Operations",
    "Accounts Payable",
    "Accounts Receivable",
    "Payroll Support",
    "Bank Reconciliations",
    "Month-End Close",
    "Journal Entries",
    "Financial Reporting",
    "Audit Support",
    "Process Improvement",
    "ENTRABALANCE GLOBAL LLP",
  ],
  authors: [{ name: companyInformation.legalName }],
  openGraph: {
    title: `${companyInformation.legalName} | Accounting Operations & Financial Accuracy`,
    description: "Accounting Operations. Financial Accuracy. Better Business Processes.",
    siteName: companyInformation.legalName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1A1412] selection:bg-[#B87333] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
