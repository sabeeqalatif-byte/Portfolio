import React from "react";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, TrendingUp } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold theme-badge">
            <Briefcase className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Work Experience
          </h2>
          <p className="text-[var(--text-body)] text-xs sm:text-sm">
            Proven trajectory of QA leadership, mobile test automation, and cross-platform engineering.
          </p>
        </div>

        {/* Company-Grouped Timeline */}
        <div className="relative border-l-2 border-[#58795e]/40 ml-3 sm:ml-5 pl-5 sm:pl-7 space-y-8">
          {experiences.map((companyExp) => (
            <div key={companyExp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-2 w-3.5 h-3.5 rounded-full bg-[var(--bg-primary)] border-2 border-[#58795e] dark:border-[#bafdc5] group-hover:bg-[#58795e] dark:group-hover:bg-[#bafdc5] transition-all shadow-sm" />

              {/* Company Container Card */}
              <div className="theme-card rounded-xl p-5 sm:p-6 space-y-5 shadow-sm">
                
                {/* Company Office Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#58795e]/15 dark:bg-[#58795e]/25 flex items-center justify-center text-[#58795e] dark:text-[#bafdc5] shadow-xs">
                      <Building2 className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--text-heading)]">
                        {companyExp.company}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium mt-0.5">
                        <MapPin className="w-3 h-3 text-[#58795e] dark:text-[#94ca9d]" />
                        <span>{companyExp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Tenure Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg theme-badge font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                    <span>{companyExp.period}</span>
                  </div>
                </div>

                {/* Roles / Progression Under This Company */}
                <div className="space-y-4">
                  {companyExp.roles.map((role, rIdx) => {
                    const isPromotion = role.type === "Promotion";
                    const isInternship = role.type === "Internship";

                    return (
                      <div
                        key={rIdx}
                        className={`rounded-lg p-4 transition-all ${
                          isPromotion
                            ? "theme-subtle-box border border-[#58795e]/30 dark:border-[#bafdc5]/25"
                            : "bg-[var(--bg-primary)]/50 border border-[var(--border-color)]"
                        }`}
                      >
                        {/* Role Header */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2.5">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-[var(--text-heading)]">
                                {role.title}
                              </h4>

                              {/* Role Type Badge */}
                              {isPromotion && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-bold bg-[#58795e]/20 text-[#2c3c2f] dark:text-[#bafdc5] border border-[#58795e]/30">
                                  <TrendingUp className="w-3 h-3 text-[#58795e] dark:text-[#bafdc5]" />
                                  Promoted to Lead
                                </span>
                              )}
                              {isInternship && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-semibold bg-gray-500/15 text-[var(--text-muted)] border border-[var(--border-color)]">
                                  Internship
                                </span>
                              )}
                              {!isPromotion && !isInternship && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-mono font-semibold theme-badge">
                                  {role.type}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Role Period */}
                          <div className="inline-flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] font-semibold">
                            <Calendar className="w-3 h-3 text-[#58795e] dark:text-[#bafdc5]" />
                            <span>{role.period}</span>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-body)] pt-1.5 border-t border-[var(--border-color)]">
                          {role.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5] flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        {role.skills && role.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2.5 mt-2.5 border-t border-[var(--border-color)]">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 text-[10.5px] font-mono rounded-md theme-badge font-semibold"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
