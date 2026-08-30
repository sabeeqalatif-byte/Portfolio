import React from "react";
import { personalData, educationData } from "@/data/portfolioData";
import { Smartphone, Bug, Users, Layers, GraduationCap, Languages, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-200 bg-indigo-950/60 border border-indigo-400/30">
            <Layers className="w-3.5 h-3.5 text-indigo-300" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            About Me
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading QA operations across Android, iOS, and Web.
          </p>
        </div>

        {/* Main Content & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Text Card & Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-300">
                Quality Assurance &amp; Leadership
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.about.summary}
              </p>

              <div className="pt-4 border-t border-indigo-400/15">
                <div className="text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider mb-2">
                  Key Strengths &amp; Highlights:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {personalData.about.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education & Language Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-indigo-300 font-bold text-base">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </div>
              {educationData.map((edu) => (
                <div key={edu.degree} className="space-y-1">
                  <div className="text-sm sm:text-base font-semibold text-slate-100">
                    {edu.degree}
                  </div>
                  <div className="text-xs sm:text-sm text-indigo-300">
                    {edu.institution} &bull; {edu.location}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t border-indigo-400/15 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-indigo-300 font-mono">
                  <Languages className="w-4 h-4" />
                  <span>Language Proficiency:</span>
                </div>
                <span className="font-semibold text-slate-200">English (Proficient)</span>
              </div>
            </div>
          </div>

          {/* 4 Feature Glass Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">15+ Store Mobile Apps</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extensive testing on iOS App Store &amp; Google Play Store apps, validating camera OCR, speech recognition STT/TTS, and in-app monetization.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-sky-300">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Antigravity Automation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Building automated test suites using the Antigravity framework to streamline UI workflows and significantly reduce manual regression time.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-purple-300">
                <Bug className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Defect Lifecycle</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured test planning, defect tracking in JIRA and GitLab, analyzing quality metrics, and rigorous retesting of bug fixes.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-emerald-300">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">QA Team Leadership</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Spearheading QA initiatives, mentoring QA engineers, and collaborating across engineering, design, and product to ensure release stability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
