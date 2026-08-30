import React from "react";
import { expertiseAreas } from "@/data/portfolioData";
import { CheckSquare, Smartphone, Globe, Terminal, ShieldCheck } from "lucide-react";

export default function Expertise() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-5 h-5 text-teal-400" />;
      case 1:
        return <Globe className="w-5 h-5 text-teal-400" />;
      case 2:
        return <Terminal className="w-5 h-5 text-teal-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-teal-300 bg-teal-950/50 border border-teal-500/30">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Core Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            QA Testing Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Specialized QA domains covering end-to-end verification, platform compatibility, API health, and testing lifecycle management.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, idx) => (
            <div
              key={area.title}
              className="glass-card rounded-xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Icon & Title */}
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
                
                <h3 className="text-lg font-bold text-slate-100">
                  {area.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Items List */}
              <div className="pt-3 border-t border-teal-500/15">
                <ul className="space-y-2 text-xs text-slate-300">
                  {area.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold mt-0.5">✓</span>
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
