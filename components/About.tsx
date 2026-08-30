import React from "react";
import { personalData } from "@/data/portfolioData";
import { Smartphone, Globe, Bug, Users, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-teal-300 bg-teal-950/50 border border-teal-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Software Quality Assurance Engineer with hands-on experience across mobile and web platforms, dedicated to product reliability and defect prevention.
          </p>
        </div>

        {/* Main Content & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Text Card */}
          <div className="lg:col-span-6 glass-card rounded-xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-teal-300">
              Quality-First Engineering Approach
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalData.about.summary}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My testing methodology goes beyond surface-level UI checks—I analyze requirements, design edge-case scenarios, probe API responses, and ensure smooth UX across Android and iOS device ecosystems.
            </p>

            <div className="pt-4 border-t border-teal-500/15">
              <div className="text-xs font-mono text-teal-400/90 font-semibold uppercase tracking-wider mb-2">
                Core QA Focus:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {personalData.about.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold mt-0.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4 Feature Glass Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-card rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Android &amp; iOS Testing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Thorough testing of mobile applications on physical devices, verifying UI responsiveness, touch interactions, hardware permissions, and OS variations.
              </p>
            </div>

            <div className="glass-card rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Web &amp; Cross-Browser</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Validating web platforms across Chrome, Safari, Firefox, and Edge to ensure functional consistency, form integrity, and responsive layout fidelity.
              </p>
            </div>

            <div className="glass-card rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Bug className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Defect Identification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Systematic defect logging with reproducible steps, device logs, and severity triage, reducing regression cycles and preventing critical production leaks.
              </p>
            </div>

            <div className="glass-card rounded-xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Agile Collaboration</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Partnering closely with developers, product owners, and sprint teams in JIRA &amp; GitLab to review user stories and retest bug fixes quickly.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
