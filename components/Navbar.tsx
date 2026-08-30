"use client";

import React, { useState, useEffect } from "react";
import { navItems, personalData } from "@/data/portfolioData";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg shadow-black/30" : "bg-[#081216]/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label={`${personalData.name} - Home`}
        >
          <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-accent-light group-hover:border-teal-400 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all">
            <ShieldCheck className="w-5 h-5 text-accent-light" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 group-hover:text-accent-bright transition-colors text-base sm:text-lg leading-tight">
              {personalData.name}
            </span>
            <span className="text-xs font-mono text-teal-400/80">QA Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 relative ${
                  isActive
                    ? "text-accent-bright font-semibold bg-teal-500/10 border border-teal-500/20"
                    : "text-slate-300 hover:text-accent-light hover:bg-teal-950/40"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent-light rounded-full shadow-[0_0_8px_#2dd4bf]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-bright bg-teal-950/60 hover:bg-teal-900/60 border border-teal-500/30 hover:border-teal-400 rounded-lg transition-all shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:shadow-[0_0_20px_rgba(45,212,191,0.25)]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-accent-light bg-teal-950/50 border border-teal-500/20 hover:border-teal-500/40 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-teal-500/15 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-accent-bright bg-teal-500/15 border border-teal-500/30"
                    : "text-slate-300 hover:text-accent-light hover:bg-teal-950/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-[#081216] bg-gradient-to-r from-teal-400 to-emerald-400 hover:opacity-95 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
