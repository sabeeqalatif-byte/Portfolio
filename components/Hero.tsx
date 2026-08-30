import React from "react";
import { personalData } from "@/data/portfolioData";
import { ArrowRight, Download, CheckCircle2, Smartphone, Terminal, Sparkles, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Soothing Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#bafdc5]/14 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[340px] bg-[#94ca9d]/14 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill - Updated to User's exact request */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold theme-badge shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#58795e] dark:bg-[#bafdc5] animate-ping" />
              <span>Open for New QA Positions &amp; Remote Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-heading)]">
                Hi, I'm <span className="palette-headline">{personalData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#58795e] dark:text-[#bafdc5] font-mono tracking-tight flex items-center gap-2">
                <span>Software Quality Assurance Engineer</span>
              </h2>
            </div>

            {/* Concise Introduction */}
            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Results-driven SQA Team Lead and Quality Assurance Engineer with <strong className="text-[var(--text-heading)] font-bold">2+ years of experience</strong> spearheading end-to-end testing for <strong className="text-[var(--text-heading)] font-bold">15+ live mobile applications</strong> on the Apple App Store &amp; Google Play Store. Skilled in building test automation with <strong className="text-[var(--text-heading)] font-bold">Antigravity</strong>, REST API validation in <strong className="text-[var(--text-heading)] font-bold">Postman</strong>, and managing defect lifecycles in <strong className="text-[var(--text-heading)] font-bold">JIRA &amp; GitLab</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold btn-palette-primary"
              >
                <span>Explore Live Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resume.downloadPath}
                download={personalData.resume.fileName}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[var(--text-heading)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[#58795e] transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Core Domain Badges */}
            <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg theme-badge font-semibold">
                <Smartphone className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                15+ Live Store Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg theme-badge font-semibold">
                <Terminal className="w-3.5 h-3.5 text-[#2c3c2f] dark:text-[#94ca9d]" />
                Antigravity Automation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg theme-badge font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#58795e] dark:text-[#c9efce]" />
                Open to Remote
              </span>
            </div>
          </div>

          {/* Right Column: QA Inspection Console Graphic */}
          <div className="lg:col-span-5">
            <div className="theme-card rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-[var(--border-color)] shadow-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#58795e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#94ca9d] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#bafdc5] inline-block" />
                  <span className="text-xs font-mono text-[var(--text-muted)] ml-2 font-semibold">sqa-release-gate.audit</span>
                </div>
                <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2c3c2f] dark:text-[#bafdc5] bg-[#c9efce]/50 dark:bg-[#2c3c2f]/80 border border-[#94ca9d]/50 rounded-md">
                  VERIFIED: 100%
                </span>
              </div>

              {/* Verified Inspection Checklist (Removed Compliance row as requested) */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5 p-3 rounded-xl theme-subtle-box">
                  <CheckCircle2 className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5] flex-shrink-0 mt-0.5" />
                  <div className="text-[var(--text-body)]">
                    <span className="text-[var(--text-heading)] font-bold">Mobile QA:</span> OCR Vision, Speech STT/TTS &amp; Store Purchases
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl theme-subtle-box">
                  <CheckCircle2 className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5] flex-shrink-0 mt-0.5" />
                  <div className="text-[var(--text-body)]">
                    <span className="text-[var(--text-heading)] font-bold">REST API Checks:</span> Postman Status 200 OK &amp; Schema Integrity
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl theme-subtle-box">
                  <CheckCircle2 className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5] flex-shrink-0 mt-0.5" />
                  <div className="text-[var(--text-body)]">
                    <span className="text-[var(--text-heading)] font-bold">Antigravity:</span> Multilingual Keyboards &amp; Automated Regression
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <div className="flex items-center gap-1.5 text-[#2c3c2f] dark:text-[#bafdc5] font-bold">
                  <Shield className="w-3.5 h-3.5 text-[#58795e]" />
                  <span>SQA Lead &bull; Zeesofttech</span>
                </div>
                <span className="text-[#58795e] dark:text-[#bafdc5] font-bold">2+ Years Exp.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
