import React from "react";
import { personalData, educationData } from "@/data/portfolioData";
import { Smartphone, Bug, Users, Layers, GraduationCap, Languages, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold theme-badge">
            <Layers className="w-3.5 h-3.5 text-[#ef98a7]" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-heading)]">
            About Me
          </h2>
          <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
            SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading QA operations across Android, iOS, and Web.
          </p>
        </div>

        {/* Main Content & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Text Card & Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="theme-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-heading)]">
                Quality Assurance &amp; Leadership
              </h3>
              
              <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
                {personalData.about.summary}
              </p>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <div className="text-xs font-mono text-[#ef98a7] dark:text-[#f7bea9] font-bold uppercase tracking-wider mb-2">
                  Key Strengths &amp; Highlights:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-body)]">
                  {personalData.about.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ef98a7] font-bold mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education & Language Card */}
            <div className="theme-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-[#ef98a7] dark:text-[#f7bea9] font-bold text-base">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </div>
              {educationData.map((edu) => (
                <div key={edu.degree} className="space-y-1">
                  <div className="text-sm sm:text-base font-bold text-[var(--text-heading)]">
                    {edu.degree}
                  </div>
                  <div className="text-xs sm:text-sm text-[#807094] dark:text-[#f7bea9] font-semibold">
                    {edu.institution} &bull; {edu.location}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    {edu.period}
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-body)]">
                <div className="flex items-center gap-1.5 text-[#ef98a7] dark:text-[#f7bea9] font-mono font-semibold">
                  <Languages className="w-4 h-4" />
                  <span>Language Proficiency:</span>
                </div>
                <span className="font-bold text-[var(--text-heading)]">English (Proficient)</span>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="theme-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#ef98a7]/15 border border-[#ef98a7]/30 flex items-center justify-center text-[#ef98a7]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[var(--text-heading)]">15+ Store Mobile Apps</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Extensive testing on iOS App Store &amp; Google Play Store apps, validating camera OCR, speech recognition STT/TTS, and in-app monetization.
              </p>
            </div>

            <div className="theme-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#f7bea9]/20 border border-[#f7bea9]/35 flex items-center justify-center text-[#f7bea9] dark:text-[#f7bea9]">
                <Terminal className="w-5 h-5 text-[#ef98a7] dark:text-[#f7bea9]" />
              </div>
              <h4 className="text-base font-bold text-[var(--text-heading)]">Antigravity Automation</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Building automated test suites using the Antigravity framework to streamline UI workflows and significantly reduce manual regression time.
              </p>
            </div>

            <div className="theme-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#807094]/15 border border-[#807094]/30 flex items-center justify-center text-[#807094] dark:text-[#ef98a7]">
                <Bug className="w-5 h-5 text-[#807094] dark:text-[#f7bea9]" />
              </div>
              <h4 className="text-base font-bold text-[var(--text-heading)]">Defect Lifecycle</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Structured test planning, defect tracking in JIRA and GitLab, analyzing quality metrics, and rigorous retesting of bug fixes.
              </p>
            </div>

            <div className="theme-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#604f71]/15 border border-[#604f71]/30 flex items-center justify-center text-[#604f71] dark:text-[#f7bea9]">
                <Users className="w-5 h-5 text-[#604f71] dark:text-[#f7bea9]" />
              </div>
              <h4 className="text-base font-bold text-[var(--text-heading)]">QA Team Leadership</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Spearheading QA initiatives, mentoring QA engineers, and collaborating across engineering, design, and product to ensure release stability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
