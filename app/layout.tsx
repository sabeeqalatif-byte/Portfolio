import type { Metadata } from "next";
import "./globals.css";
import { personalData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${personalData.name} | Software Quality Assurance (QA) Engineer`,
  description:
    "Production portfolio of Sabika Latif, Software Quality Assurance Engineer specializing in Manual Testing, Mobile Testing (Android & iOS), Web QA, API Verification, and Test Automation.",
  keywords: [
    "Sabika Latif",
    "Software Quality Assurance Engineer",
    "QA Engineer",
    "Manual Testing",
    "Mobile Testing",
    "Android QA",
    "iOS QA",
    "API Testing",
    "Postman",
    "Appium",
    "Python",
    "JIRA",
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  openGraph: {
    title: `${personalData.name} | QA Engineer Portfolio`,
    description:
      "Specializing in manual testing, mobile app testing (Android & iOS), web testing, API validation, and test automation.",
    type: "website",
    locale: "en_US",
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | QA Engineer Portfolio`,
    description:
      "Specializing in manual testing, mobile app testing (Android & iOS), web testing, API validation, and test automation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-slate-100 min-h-screen flex flex-col selection:bg-teal-500/25 selection:text-teal-300">
        {children}
      </body>
    </html>
  );
}
