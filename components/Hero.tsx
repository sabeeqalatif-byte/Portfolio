import React from "react";
import { personalData } from "@/data/portfolioData";
import { ArrowRight, Download, CheckCircle2, Smartphone, Terminal, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Soothing Aurora Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-indigo-500/12 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[320px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-indigo-200 bg-indigo-950/60 border border-indigo-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.18)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Available for SQA Team Lead &amp; Remote Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-purple-300">{personalData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-300 font-mono tracking-tight flex items-center gap-2">
                <span>Software Quality Assurance Engineer | SQA Team Lead</span>
              </h2>
            </div>

            {/* Concise Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Results-driven SQA Team Lead and QA Engineer with <strong className="text-indigo-200 font-semibold">2+ years of experience</strong> spearheading end-to-end testing for <strong className="text-indigo-200 font-semibold">15+ live mobile applications</strong> on the Apple App Store &amp; Google Play Store. Skilled in building test automation with <strong className="text-indigo-200 font-semibold">Antigravity</strong>, REST API validation in <strong className="text-indigo-200 font-semibold">Postman</strong>, and managing defect lifecycles in <strong className="text-indigo-200 font-semibold">JIRA &amp; GitLab</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-indigo-300 via-sky-200 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5"
              >
                <span>Explore Live Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resume.downloadPath}
                download={personalData.resume.fileName}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-indigo-200 bg-indigo-950/60 hover:bg-indigo-900/70 border border-indigo-400/30 hover:border-indigo-300 transition-all backdrop-blur-md transform hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-4 border-t border-indigo-400/15 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-950/50 border border-indigo-400/20 text-indigo-200">
                <Smartphone className="w-3.5 h-3.5 text-indigo-300" />
                15+ Live Store Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-950/50 border border-indigo-400/20 text-indigo-200">
                <Terminal className="w-3.5 h-3.5 text-sky-300" />
                Antigravity Automation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-950/50 border border-indigo-400/20 text-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                Open to Remote
              </span>
            </div>
          </div>

          {/* Right Column: QA Glass Inspection Console Graphic */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-indigo-400/25 shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-indigo-400/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">sqa-release-gate.audit</span>
                </div>
                <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-400/30 rounded-md">
                  VERIFIED: 100%
                </span>
              </div>

              {/* Verified Inspection Checklist */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-400/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-indigo-200 font-semibold">Mobile QA:</span> OCR Vision, Speech STT/TTS &amp; IAP
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-400/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-indigo-200 font-semibold">REST API Checks:</span> Postman Status 200 OK &amp; Schema
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-400/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-indigo-200 font-semibold">Antigravity Automation:</span> Multilingual Keyboards &amp; UI
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-400/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="text-indigo-200 font-semibold">Compliance:</span> iOS ATT, GDPR Consent &amp; Privacy
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="mt-4 pt-3 border-t border-indigo-400/15 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 text-indigo-300">
                  <Shield className="w-3.5 h-3.5" />
                  <span>SQA Lead &bull; Zeesofttech</span>
                </div>
                <span className="text-emerald-400 font-semibold">2+ Years Exp.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
