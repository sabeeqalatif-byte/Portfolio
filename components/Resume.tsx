import React from "react";
import { personalData } from "@/data/portfolioData";
import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-indigo-400/30 text-center space-y-6">
          
          {/* Ambient Lighting */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-indigo-500/18 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-950/80 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            <FileText className="w-7 h-7 text-indigo-300" />
          </div>

          {/* Header */}
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Curriculum Vitae / Resume
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore my technical proficiencies, mobile QA testing history, and qualifications as a Software Quality Assurance Engineer &amp; Team Lead.
            </p>
          </div>

          {/* Quick Highlight Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2 pb-2 text-left">
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-400/20">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>15+ Mobile Apps</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">iOS App Store &amp; Google Play</p>
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-400/20">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Antigravity &amp; APIs</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Automation &amp; Postman Suites</p>
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-400/20">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>QA Leadership</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">JIRA, GitLab, Sprint SQA Lead</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={personalData.resume.viewPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-indigo-300 via-sky-200 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all shadow-[0_0_25px_rgba(99,102,241,0.3)] transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Resume</span>
            </a>

            <a
              href={personalData.resume.downloadPath}
              download={personalData.resume.fileName}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-indigo-200 bg-indigo-950/60 hover:bg-indigo-900/70 border border-indigo-400/30 hover:border-indigo-300 transition-all backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-indigo-300" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
