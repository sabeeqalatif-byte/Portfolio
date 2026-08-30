import React from "react";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold theme-badge">
            <Briefcase className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Work Experience
          </h2>
          <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
            Professional track record of leading QA operations, test automation development, defect management, and mobile engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#58795e]/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[#58795e] dark:border-[#bafdc5] group-hover:bg-[#58795e] dark:group-hover:bg-[#bafdc5] transition-all shadow-sm" />

              {/* Experience Card */}
              <div className="theme-card rounded-2xl p-6 sm:p-7 space-y-4">
                
                {/* Header: Role & Company */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#58795e] dark:text-[#bafdc5] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Period & Location Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg theme-badge font-semibold">
                      <Calendar className="w-3 h-3 text-[#58795e] dark:text-[#bafdc5]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg theme-subtle-box text-[var(--text-muted)] font-semibold">
                      <MapPin className="w-3 h-3 text-[#2c3c2f] dark:text-[#94ca9d]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-body)] pt-2 border-t border-[var(--border-color)]">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-color)]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md theme-badge font-semibold"
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
