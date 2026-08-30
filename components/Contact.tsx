"use client";

import React, { useState } from "react";
import { contactInfo, personalData } from "@/data/portfolioData";
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(contactInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-teal-300 bg-teal-950/50 border border-teal-500/30">
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing a QA opportunity, mobile testing collaboration, or consulting project? Let's connect.
          </p>
        </div>

        {/* Contact Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Email Card with Copy Feature */}
          <div className="glass-card rounded-xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-11 h-11 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Email
                </div>
                <div className="text-sm font-semibold text-slate-100 truncate">
                  {contactInfo.email.startsWith("[") ? (
                    <span className="editable-placeholder">{contactInfo.email}</span>
                  ) : (
                    contactInfo.email
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-teal-950/60 hover:bg-teal-900/60 border border-teal-500/30 hover:border-teal-400 text-teal-300 transition-all flex-shrink-0"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-teal-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 flex items-center gap-3.5 group transition-all"
          >
            <div className="w-11 h-11 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300 group-hover:border-teal-400 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all flex-shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                LinkedIn
              </div>
              <div className="text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition-colors truncate">
                Connect on LinkedIn
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 flex items-center gap-3.5 group transition-all"
          >
            <div className="w-11 h-11 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300 group-hover:border-teal-400 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all flex-shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                GitHub
              </div>
              <div className="text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition-colors truncate">
                View GitHub Profile
              </div>
            </div>
          </a>

          {/* Location & Availability Card */}
          <div className="glass-card rounded-xl p-5 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Location &amp; Availability
              </div>
              <div className="text-sm font-semibold text-slate-100 truncate">
                {contactInfo.location.startsWith("[") ? (
                  <span className="editable-placeholder">{contactInfo.location}</span>
                ) : (
                  contactInfo.location
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Direct Email Action Button */}
        <div className="mt-8 text-center">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#081216] bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-all shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>
        </div>

      </div>
    </section>
  );
}
