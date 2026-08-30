import React from "react";
import { personalData, navItems } from "@/data/portfolioData";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-nav border-t border-indigo-400/15 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-indigo-400/15">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <ShieldCheck className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <div className="font-bold text-slate-100 text-base">
                {personalData.name}
              </div>
              <div className="text-xs font-mono text-indigo-300/80">
                Software Quality Assurance Engineer | SQA Team Lead
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-indigo-300 transition-colors"
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
          <div className="text-indigo-300/70">
            Engineered for Production on Netlify
          </div>
        </div>

      </div>
    </footer>
  );
}
