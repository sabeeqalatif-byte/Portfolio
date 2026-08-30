import React from "react";
import { personalData, navItems } from "@/data/portfolioData";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-nav border-t border-teal-500/15 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-teal-500/15">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="font-bold text-slate-100 text-base">
                {personalData.name}
              </div>
              <div className="text-xs font-mono text-teal-400/80">
                Software Quality Assurance Engineer
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-teal-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="text-teal-400/70">
            Engineered for Production on Netlify
          </div>
        </div>

      </div>
    </footer>
  );
}
