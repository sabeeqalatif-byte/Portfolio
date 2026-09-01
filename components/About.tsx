import React from "react";
import { personalData } from "@/data/portfolioData";
import { Smartphone, Bug, Users, Layers, Terminal, Award, ShieldCheck, Languages } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold theme-badge">
            <Layers className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-heading)]">
            About Me
          </h2>
          <p className="text-[var(--text-body)] text-xs sm:text-sm">
            SQA Team Lead with 2+ years of experience leading end-to-end testing across 15+ store mobile applications.
          </p>
        </div>

        {/* Main Content & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Bio Text Card */}
          <div className="lg:col-span-6 theme-card rounded-xl p-5 sm:p-6 space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)]">
                QA Leadership &amp; Engineering
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono theme-badge font-semibold">
                2+ Years Experience
              </span>
            </div>
            
            <p className="text-[var(--text-body)] text-xs sm:text-sm leading-relaxed">
              {personalData.about.summary}
            </p>

            <div className="pt-3 border-t border-[var(--border-color)]">
              <div className="text-[11px] font-mono text-[#58795e] dark:text-[#bafdc5] font-bold uppercase tracking-wider mb-2">
                Core Highlights:
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--text-body)]">
                {personalData.about.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#58795e] dark:text-[#bafdc5] font-bold">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-body)]">
              <div className="flex items-center gap-1.5 text-[#58795e] dark:text-[#bafdc5] font-mono font-semibold">
                <Languages className="w-3.5 h-3.5" />
                <span>Language Proficiency:</span>
              </div>
              <span className="font-bold text-[var(--text-heading)]">English (Proficient)</span>
            </div>
          </div>

          {/* 4 Compact Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            <div className="theme-card rounded-xl p-4 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#58795e]/15 flex items-center justify-center text-[#58795e] dark:text-[#bafdc5]">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[var(--text-heading)]">15+ Store Mobile Apps</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                App Store &amp; Play Store testing covering OCR, STT/TTS audio streams, and IAP monetization.
              </p>
            </div>

            <div className="theme-card rounded-xl p-4 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#bafdc5]/20 flex items-center justify-center text-[#2c3c2f] dark:text-[#bafdc5]">
                <Terminal className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5]" />
              </div>
              <h4 className="text-sm font-bold text-[var(--text-heading)]">Antigravity Automation</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Automated regression test suites cutting execution cycles and preventing regression defects.
              </p>
            </div>

            <div className="theme-card rounded-xl p-4 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#94ca9d]/20 flex items-center justify-center text-[#2c3c2f] dark:text-[#94ca9d]">
                <Bug className="w-4 h-4 text-[#58795e] dark:text-[#94ca9d]" />
              </div>
              <h4 className="text-sm font-bold text-[var(--text-heading)]">Postman &amp; REST APIs</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                JSON schema validations, token auth, response status codes, and error payload handling.
              </p>
            </div>

            <div className="theme-card rounded-xl p-4 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#58795e]/15 flex items-center justify-center text-[#58795e] dark:text-[#bafdc5]">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[var(--text-heading)]">QA Leadership &amp; Sprints</h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Test planning, defect triage in JIRA/GitLab, team mentorship, and sprint release sign-offs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
