"use client";

import React, { useState } from "react";
import { contactInfo } from "@/data/portfolioData";
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Send } from "lucide-react";

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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold theme-badge">
            <Send className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>Connect</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Get in Touch
          </h2>
          <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
            Interested in discussing an SQA Team Lead or Senior QA Engineer opportunity? Let's connect directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Email Card with Copy Feature */}
          <div className="theme-card rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-11 h-11 rounded-xl bg-[#58795e]/15 border border-[#94ca9d]/30 flex items-center justify-center text-[#58795e] dark:text-[#bafdc5] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-bold">
                  Email
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-bold text-[var(--text-heading)] hover:text-[#58795e] dark:hover:text-[#bafdc5] transition-colors truncate block"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold theme-badge hover:scale-105 transition-transform flex-shrink-0"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                  <span className="text-[#58795e] dark:text-[#bafdc5]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card with Copy Feature */}
          <div className="theme-card rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="w-11 h-11 rounded-xl bg-[#bafdc5]/20 border border-[#94ca9d]/35 flex items-center justify-center text-[#2c3c2f] dark:text-[#bafdc5] flex-shrink-0">
                <Phone className="w-5 h-5 text-[#58795e] dark:text-[#bafdc5]" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-bold">
                  Phone
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm font-bold text-[var(--text-heading)] hover:text-[#58795e] dark:hover:text-[#bafdc5] transition-colors truncate block font-mono"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold theme-badge hover:scale-105 transition-transform flex-shrink-0"
              aria-label="Copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
                  <span className="text-[#58795e] dark:text-[#bafdc5]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
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
            className="theme-card rounded-2xl p-5 flex items-center gap-3.5 group transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-[#94ca9d]/20 border border-[#94ca9d]/35 flex items-center justify-center text-[#2c3c2f] dark:text-[#bafdc5] group-hover:scale-105 transition-all flex-shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-bold">
                LinkedIn
              </div>
              <div className="text-sm font-bold text-[var(--text-heading)] group-hover:text-[#58795e] dark:group-hover:text-[#bafdc5] transition-colors truncate">
                linkedin.com/in/sabika-latif
              </div>
            </div>
          </a>

          {/* Location & Remote Availability Card */}
          <div className="theme-card rounded-2xl p-5 flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#2c3c2f]/15 border border-[#94ca9d]/30 flex items-center justify-center text-[#2c3c2f] dark:text-[#bafdc5] flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-bold flex items-center gap-1.5">
                <span>Location</span>
                <span className="text-[#58795e] dark:text-[#bafdc5] font-bold">• Open to Remote</span>
              </div>
              <div className="text-sm font-bold text-[var(--text-heading)] truncate">
                {contactInfo.location}
              </div>
            </div>
          </div>

        </div>

        {/* Direct Email Action Button */}
        <div className="mt-8 text-center">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold btn-palette-primary transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>
        </div>

      </div>
    </section>
  );
}
