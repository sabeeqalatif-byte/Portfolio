import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { Cpu, CheckCircle, Database, Terminal, Wrench } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckCircle className="w-4 h-4 text-teal-400" />;
      case 1:
        return <Database className="w-4 h-4 text-teal-400" />;
      case 2:
        return <Terminal className="w-4 h-4 text-teal-400" />;
      default:
        return <Wrench className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-teal-300 bg-teal-950/50 border border-teal-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Skills &amp; Toolset
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies across software testing methodologies, API verification, mobile automation, and defect tracking tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-teal-500/15">
                <div className="w-8 h-8 rounded-lg bg-teal-950/70 border border-teal-500/30 flex items-center justify-center">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-teal-950/40 border border-teal-500/20 hover:border-teal-400/50 hover:text-teal-300 hover:bg-teal-900/40 transition-all duration-150 shadow-sm"
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
