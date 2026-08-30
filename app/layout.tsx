import type { Metadata } from "next";
import "./globals.css";
import { personalData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${personalData.name} | Software Quality Assurance Engineer & SQA Team Lead`,
  description:
    "Production portfolio of Sabika Latif, SQA Team Lead & Quality Assurance Engineer with 2+ years of experience testing 15+ live mobile applications on the Apple App Store and Google Play Store.",
  keywords: [
    "Sabika Latif",
    "SQA Team Lead",
    "Software Quality Assurance Engineer",
    "QA Engineer",
    "Mobile QA",
    "Android Testing",
    "iOS Testing",
    "Antigravity Framework",
    "API Testing",
    "Postman",
    "JIRA",
    "GitLab",
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  openGraph: {
    title: `${personalData.name} | SQA Team Lead Portfolio`,
    description:
      "Specializing in manual & automated mobile testing, API validation, and defect lifecycles across 15+ live App Store & Play Store apps.",
    type: "website",
    locale: "en_US",
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | SQA Team Lead Portfolio`,
    description:
      "Specializing in manual & automated mobile testing, API validation, and defect lifecycles across 15+ live App Store & Play Store apps.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
