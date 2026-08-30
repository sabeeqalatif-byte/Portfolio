import React from "react";
import { personalData, navItems } from "@/data/portfolioData";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-nav border-t border-[var(--border-color)] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ef98a7]/15 border border-[#ef98a7]/30 flex items-center justify-center text-[#ef98a7]">
              <ShieldCheck className="w-5 h-5 text-[#ef98a7]" />
            </div>
            <div>
              <div className="font-bold text-[var(--text-heading)] text-base">
                {personalData.name}
              </div>
              <div className="text-xs font-mono text-[#ef98a7] dark:text-[#f7bea9] font-semibold">
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
                className="hover:text-[#ef98a7] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)] font-mono">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="text-[#ef98a7] dark:text-[#f7bea9] font-semibold">
            Engineered for Production on Netlify
          </div>
        </div>

      </div>
    </footer>
  );
}
