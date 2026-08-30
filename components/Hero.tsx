import React from "react";
import { personalData } from "@/data/portfolioData";
import { ArrowRight, Download, CheckCircle2, Smartphone, Globe, Terminal, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-teal-300 bg-teal-950/60 border border-teal-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Available for QA &amp; SDET Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400">{personalData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 font-mono tracking-tight">
                Software Quality Assurance Engineer
              </h2>
            </div>

            {/* Concise Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Dedicated to ensuring software reliability and seamless user experiences. Specializing in{" "}
              <strong className="text-teal-200 font-semibold">Manual Testing</strong>,{" "}
              <strong className="text-teal-200 font-semibold">Mobile App Testing (Android &amp; iOS)</strong>,{" "}
              <strong className="text-teal-200 font-semibold">Web Testing</strong>,{" "}
              <strong className="text-teal-200 font-semibold">API Validation</strong>, and developing{" "}
              <strong className="text-teal-200 font-semibold">Test Automation</strong> with Python &amp; Appium.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-[#081216] bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resume.downloadPath}
                download={personalData.resume.fileName}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-teal-300 bg-teal-950/60 hover:bg-teal-900/60 border border-teal-500/30 hover:border-teal-400 transition-all backdrop-blur-md transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-4 border-t border-teal-500/15 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-950/40 border border-teal-500/20 text-teal-300">
                <Smartphone className="w-3.5 h-3.5 text-teal-400" />
                Android &amp; iOS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-950/40 border border-teal-500/20 text-teal-300">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                Web &amp; Cross-Browser
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-950/40 border border-teal-500/20 text-teal-300">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                API &amp; Postman
              </span>
            </div>
          </div>

          {/* Right Column: QA Glass Inspection Console Graphic */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-teal-500/25 shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-teal-500/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">qa-verification.suite</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded">
                  PASS: 100%
                </span>
              </div>

              {/* Verified Inspection Checklist */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-teal-950/30 border border-teal-500/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-teal-300 font-semibold">Mobile UI Validation:</span> OCR, Touch, IME &amp; Orientation
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-teal-950/30 border border-teal-500/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-teal-300 font-semibold">REST API Checks:</span> 200 OK &bull; Payload Schemas Verified
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-teal-950/30 border border-teal-500/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-teal-300 font-semibold">Functional Regression:</span> Zero Critical Defect Leakage
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-teal-950/30 border border-teal-500/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-teal-300 font-semibold">Agile Collaboration:</span> JIRA &bull; GitLab &bull; Defect Retesting
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="mt-4 pt-3 border-t border-teal-500/15 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1 text-teal-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Quality Assurance</span>
                </div>
                <span className="text-emerald-400 font-semibold">Ready for Deployment</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
