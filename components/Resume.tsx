import React from "react";
import { personalData } from "@/data/portfolioData";
import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="theme-card rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-[var(--border-color)] text-center space-y-6 shadow-xl">
          
          {/* Icon Badge */}
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#58795e]/15 border border-[#94ca9d]/35 flex items-center justify-center text-[#58795e] dark:text-[#bafdc5] shadow-sm">
            <FileText className="w-7 h-7 text-[#58795e] dark:text-[#bafdc5]" />
          </div>

          {/* Header */}
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-heading)]">
              Curriculum Vitae / Resume
            </h2>
            <p className="text-[var(--text-body)] text-sm leading-relaxed">
              Explore my technical proficiencies, mobile QA testing history, and qualifications as a Software Quality Assurance Engineer &amp; Team Lead.
            </p>
          </div>

          {/* Quick Highlight Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2 pb-2 text-left">
            <div className="p-3.5 rounded-xl theme-subtle-box">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#58795e] dark:text-[#bafdc5]">
                <CheckCircle className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                <span>15+ Mobile Apps</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-1">iOS App Store &amp; Google Play</p>
            </div>

            <div className="p-3.5 rounded-xl theme-subtle-box">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#58795e] dark:text-[#bafdc5]">
                <CheckCircle className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                <span>Antigravity &amp; APIs</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-1">Automation &amp; Postman Suites</p>
            </div>

            <div className="p-3.5 rounded-xl theme-subtle-box">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#58795e] dark:text-[#bafdc5]">
                <CheckCircle className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                <span>QA Leadership</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-1">JIRA, GitLab, Sprint SQA Lead</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={personalData.resume.viewPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold btn-palette-primary transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Resume</span>
            </a>

            <a
              href={personalData.resume.downloadPath}
              download={personalData.resume.fileName}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[var(--text-heading)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[#58795e] transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-[#58795e] dark:text-[#bafdc5]" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
