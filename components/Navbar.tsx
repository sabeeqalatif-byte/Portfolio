"use client";

import React, { useState, useEffect } from "react";
import { navItems, personalData } from "@/data/portfolioData";
import { Menu, X, ShieldCheck, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("sabika-portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }

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

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("sabika-portfolio-theme", nextTheme);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "theme-nav shadow-md" : "bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-color)]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label={`${personalData.name} - Home`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#58795e]/20 border border-[#94ca9d]/40 flex items-center justify-center text-[#2c3c2f] dark:text-[#bafdc5] group-hover:scale-105 transition-all">
            <ShieldCheck className="w-5 h-5 text-[#2c3c2f] dark:text-[#bafdc5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[var(--text-heading)] group-hover:text-[#58795e] dark:group-hover:text-[#bafdc5] transition-colors text-base sm:text-lg leading-tight">
              {personalData.name}
            </span>
            <span className="text-xs font-mono text-[#58795e] dark:text-[#94ca9d] font-semibold">SQA Team Lead</span>
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
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 relative ${
                  isActive
                    ? "text-[#2c3c2f] dark:text-[#bafdc5] bg-[#c9efce]/40 dark:bg-[#2c3c2f]/70 border border-[#94ca9d]/40 shadow-sm"
                    : "text-[var(--text-body)] hover:text-[#58795e] dark:hover:text-[#bafdc5] hover:bg-[#c9efce]/20"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#58795e] dark:bg-[#bafdc5] rounded-full shadow-sm" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-[var(--text-heading)] hover:text-[#58795e] dark:hover:text-[#bafdc5] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#94ca9d] transition-all shadow-sm focus:outline-none"
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#bafdc5] hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-[#2c3c2f] hover:-rotate-12 transition-transform" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider btn-palette-primary rounded-xl"
          >
            Get in Touch
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-[var(--text-heading)] hover:text-[#58795e] dark:hover:text-[#bafdc5] bg-[var(--bg-card)] border border-[var(--border-color)] focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden theme-nav border-t border-[var(--border-color)] px-4 pt-3 pb-5 space-y-1 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? "text-[#2c3c2f] dark:text-[#bafdc5] bg-[#c9efce]/40 dark:bg-[#2c3c2f]/70 border border-[#94ca9d]/40"
                    : "text-[var(--text-body)] hover:text-[#58795e] dark:hover:text-[#bafdc5] hover:bg-[#c9efce]/20"
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
              className="block text-center w-full py-2.5 px-4 rounded-xl text-sm font-bold btn-palette-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
