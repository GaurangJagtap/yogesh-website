import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { companyInformation } from "../data/team";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
