import React from "react";
import { personalData, navItems } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-nav border-t border-[var(--border-color)] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          {/* Brand with Custom QA Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d2c22] to-[#121c15] border border-[#94ca9d]/50 flex items-center justify-center shadow-md">
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Q Letter */}
                <circle
                  cx="16"
                  cy="18"
                  r="10"
                  stroke="url(#qa-mint-footer)"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                <path
                  d="M21 23L26 28"
                  stroke="url(#qa-mint-footer)"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                {/* A Letter */}
                <path
                  d="M25 28L31 10L37 28"
                  stroke="#94ca9d"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.5 22.5H34.5"
                  stroke="#bafdc5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="qa-mint-footer" x1="6" y1="8" x2="26" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#bafdc5" />
                    <stop offset="1" stopColor="#58795e" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="font-bold text-[var(--text-heading)] text-base">
                {personalData.name}
              </div>
              <div className="text-xs font-mono text-[#58795e] dark:text-[#94ca9d] font-semibold">
                Software Quality Assurance Engineer | SQA Team Lead
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[var(--text-body)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#58795e] dark:hover:text-[#bafdc5] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Credits (Removed Netlify text as requested) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)] font-mono">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="text-[#58795e] dark:text-[#bafdc5] font-semibold">
            Quality Assurance Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}
