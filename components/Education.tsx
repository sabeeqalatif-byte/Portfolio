import React from "react";
import { educationData } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold theme-badge">
            <GraduationCap className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Education
          </h2>
          <p className="text-[var(--text-body)] text-xs sm:text-sm">
            Formal qualifications in software engineering and quality assurance principles.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="space-y-4">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="theme-card rounded-xl p-5 sm:p-6 transition-all hover:border-[#94ca9d]/60 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-color)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#58795e]/15 text-[#58795e] dark:text-[#bafdc5]">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)]">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-[#58795e] dark:text-[#bafdc5] pl-8">
                    Major: {edu.major}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono pl-8 sm:pl-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md theme-badge font-semibold">
                    <Calendar className="w-3 h-3 text-[#58795e] dark:text-[#bafdc5]" />
                    Graduation Year: {edu.graduationYear}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md theme-subtle-box text-[var(--text-muted)] font-semibold">
                    <MapPin className="w-3 h-3 text-[#2c3c2f] dark:text-[#94ca9d]" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Institution Details & Key Focus Badges */}
              <div className="pt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[var(--text-body)]">
                  <BookOpen className="w-3.5 h-3.5 text-[#58795e] dark:text-[#94ca9d]" />
                  <span className="font-semibold">{edu.institution}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono theme-badge font-semibold">
                    Software QA &amp; Testing
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono theme-badge font-semibold">
                    Mobile Engineering
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono theme-badge font-semibold">
                    SDLC &amp; STLC
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
