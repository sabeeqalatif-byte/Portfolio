import React from "react";
import { expertiseAreas } from "@/data/portfolioData";
import { CheckSquare, Smartphone, Globe, Terminal, ShieldCheck } from "lucide-react";

export default function Expertise() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-5 h-5 text-[#58795e] dark:text-[#bafdc5]" />;
      case 1:
        return <Globe className="w-5 h-5 text-[#58795e] dark:text-[#94ca9d]" />;
      case 2:
        return <Terminal className="w-5 h-5 text-[#2c3c2f] dark:text-[#bafdc5]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#58795e] dark:text-[#c9efce]" />;
    }
  };

  return (
    <section id="expertise" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold theme-badge">
            <CheckSquare className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Core Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-heading)]">
            QA Testing Expertise
          </h2>
          <p className="text-[var(--text-body)] text-xs sm:text-sm">
            Specialized QA domains covering platform compatibility, API health, and automated quality gates.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertiseAreas.map((area, idx) => (
            <div
              key={area.title}
              className="theme-card rounded-xl p-4 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3">
                {/* Icon & Title */}
                <div className="w-10 h-10 rounded-xl bg-[#58795e]/15 border border-[#94ca9d]/30 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
                
                <h3 className="text-lg font-bold text-[var(--text-heading)]">
                  {area.title}
                </h3>

                <p className="text-xs text-[var(--text-body)] leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Items List */}
              <div className="pt-3 border-t border-[var(--border-color)]">
                <ul className="space-y-2 text-xs text-[var(--text-body)]">
                  {area.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-[#58795e] dark:text-[#bafdc5] font-bold mt-0.5">✓</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
