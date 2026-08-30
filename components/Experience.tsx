import React from "react";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-200 bg-indigo-950/60 border border-indigo-400/30">
            <Briefcase className="w-3.5 h-3.5 text-indigo-300" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Work Experience
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Professional track record of leading QA operations, test automation development, defect management, and mobile engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-indigo-500/25 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0a0f1d] border-2 border-indigo-400 group-hover:bg-indigo-400 group-hover:shadow-[0_0_15px_#818cf8] transition-all" />

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4">
                
                {/* Header: Role & Company */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-300 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Period & Location Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-400/20 text-indigo-200">
                      <Calendar className="w-3 h-3 text-indigo-300" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-400/20 text-slate-300">
                      <MapPin className="w-3 h-3 text-sky-300" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2 border-t border-indigo-400/15">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-indigo-400/15">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-indigo-950/50 text-indigo-200 border border-indigo-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
