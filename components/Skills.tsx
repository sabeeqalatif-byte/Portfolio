import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { Cpu, CheckCircle, Database, Terminal, Wrench } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckCircle className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#58795e] dark:text-[#94ca9d]" />;
      case 2:
        return <Terminal className="w-4 h-4 text-[#2c3c2f] dark:text-[#bafdc5]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#58795e] dark:text-[#c9efce]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold theme-badge">
            <Cpu className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Skills &amp; Toolset
          </h2>
          <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
            Proficiencies across software testing methodologies, API verification, mobile automation, and defect tracking tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="theme-card rounded-2xl p-6 sm:p-7 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--border-color)]">
                <div className="w-9 h-9 rounded-xl bg-[#58795e]/15 border border-[#94ca9d]/30 flex items-center justify-center">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)]">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold theme-badge hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
