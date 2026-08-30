import React from "react";
import { personalData } from "@/data/portfolioData";
import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden border border-teal-500/30 text-center space-y-6">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            <FileText className="w-7 h-7 text-teal-300" />
          </div>

          {/* Header */}
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Curriculum Vitae / Resume
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore my technical proficiencies, testing history, and detailed qualifications as a Software Quality Assurance Engineer.
            </p>
          </div>

          {/* Quick Highlight Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2 pb-2 text-left">
            <div className="p-3 rounded-lg bg-teal-950/40 border border-teal-500/20">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mobile &amp; Web QA</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Android, iOS, Cross-browser</p>
            </div>

            <div className="p-3 rounded-lg bg-teal-950/40 border border-teal-500/20">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>API &amp; Postman</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Schema &amp; Payload Verification</p>
            </div>

            <div className="p-3 rounded-lg bg-teal-950/40 border border-teal-500/20">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Agile Tracking</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">JIRA, GitLab, Defect Triage</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={personalData.resume.viewPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-[#081216] bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-all shadow-[0_0_20px_rgba(45,212,191,0.25)] transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Resume</span>
            </a>

            <a
              href={personalData.resume.downloadPath}
              download={personalData.resume.fileName}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-teal-300 bg-teal-950/60 hover:bg-teal-900/60 border border-teal-500/30 hover:border-teal-400 transition-all backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
