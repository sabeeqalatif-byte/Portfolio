"use client";

import React, { useState } from "react";
import { contactInfo } from "@/data/portfolioData";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check, Send, Globe } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(contactInfo.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(contactInfo.phone);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-200 bg-indigo-950/60 border border-indigo-400/30">
            <Send className="w-3.5 h-3.5 text-indigo-300" />
            <span>Connect</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Get in Touch
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing an SQA Team Lead or Senior QA Engineer opportunity? Let's connect directly.
          </p>
        </div>

        {/* Contact Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Email Card with Copy Feature */}
          <div className="glass-card rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Email
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-semibold text-slate-100 hover:text-indigo-300 transition-colors truncate block"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-indigo-950/60 hover:bg-indigo-900/70 border border-indigo-400/30 hover:border-indigo-300 text-indigo-200 transition-all flex-shrink-0"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card with Copy Feature */}
          <div className="glass-card rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-sky-300 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Phone
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm font-semibold text-slate-100 hover:text-sky-300 transition-colors truncate block font-mono"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-indigo-950/60 hover:bg-indigo-900/70 border border-indigo-400/30 hover:border-indigo-300 text-sky-200 transition-all flex-shrink-0"
              aria-label="Copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sky-300" />
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
            className="glass-card rounded-2xl p-5 flex items-center gap-3.5 group transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-indigo-300 group-hover:border-indigo-300 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all flex-shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                LinkedIn
              </div>
              <div className="text-sm font-semibold text-slate-100 group-hover:text-indigo-200 transition-colors truncate">
                linkedin.com/in/sabika-latif
              </div>
            </div>
          </a>

          {/* Location & Remote Availability Card */}
          <div className="glass-card rounded-2xl p-5 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-purple-300 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>Location</span>
                <span className="text-emerald-400 font-semibold">• Open to Remote</span>
              </div>
              <div className="text-sm font-semibold text-slate-100 truncate">
                {contactInfo.location}
              </div>
            </div>
          </div>

        </div>

        {/* Direct Email Action Button */}
        <div className="mt-8 text-center">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-indigo-300 via-sky-200 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>
        </div>

      </div>
    </section>
  );
}
