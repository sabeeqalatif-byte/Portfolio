"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolioData";
import { FolderGit2, Smartphone, CheckCircle, ExternalLink, Apple, Play } from "lucide-react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = [
    { label: "All Apps", count: projects.length },
    { label: "AI & Vision", count: projects.filter((p) => p.category === "AI & Vision").length },
    { label: "Language & Translation", count: projects.filter((p) => p.category === "Language & Translation").length },
    { label: "Voice & Input", count: projects.filter((p) => p.category === "Voice & Input").length },
    { label: "Health & Utilities", count: projects.filter((p) => p.category === "Health & Utilities").length },
    { label: "iOS App Store", count: projects.filter((p) => p.platform.includes("iOS") || p.appStoreUrl).length },
    { label: "Google Play Store", count: projects.filter((p) => p.platform.includes("Android") || p.playStoreUrl).length },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All" || selectedFilter === "All Apps") return true;
    if (selectedFilter === "iOS App Store") return !!project.appStoreUrl || project.platform.includes("iOS");
    if (selectedFilter === "Google Play Store") return !!project.playStoreUrl || project.platform.includes("Android");
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-200 bg-indigo-950/60 border border-indigo-400/30">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-300" />
            <span>15+ Live Mobile Applications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Verified Store Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real-world mobile apps tested and verified on the Apple App Store &amp; Google Play Store, covering AI OCR vision, STT/TTS voice synthesis, Antigravity automation, and iOS compliance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => {
            const isSelected = selectedFilter === opt.label || (selectedFilter === "All" && opt.label === "All Apps");
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => setSelectedFilter(opt.label)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 text-white font-bold shadow-[0_0_18px_rgba(99,102,241,0.35)] scale-105"
                    : "bg-indigo-950/50 text-slate-300 border border-indigo-400/20 hover:border-indigo-400/40 hover:text-indigo-200"
                }`}
              >
                <span>{opt.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? "bg-white/20 text-white" : "bg-indigo-900/50 text-indigo-300"}`}>
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Image Preview / Visual Illustration */}
              <div className="relative w-full h-48 sm:h-56 bg-slate-950/70 border-b border-indigo-400/15 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-indigo-400/60 font-mono text-xs">
                    Project Visual Preview
                  </div>
                )}

                {/* Platform Badge Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#0a0f1d]/90 text-indigo-200 border border-indigo-400/30 backdrop-blur-md shadow-lg">
                    <Smartphone className="w-3.5 h-3.5 text-indigo-300" />
                    {project.platform}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Category & Title */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-semibold text-sky-300 uppercase tracking-wider bg-sky-950/60 px-2 py-0.5 rounded border border-sky-400/20">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-indigo-300/80">
                        {project.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mt-1">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Testing Focus Highlights */}
                  <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-400/15 space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-200">
                      QA Responsibilities &amp; Testing Focus:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.testingFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tools & Live Store Links */}
                <div className="space-y-4 pt-4 border-t border-indigo-400/15">
                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-indigo-950/50 text-slate-300 border border-indigo-400/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Live Store Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-indigo-400/30 hover:border-indigo-300 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(129,140,248,0.25)]"
                      >
                        <Apple className="w-3.5 h-3.5 text-white" />
                        <span>App Store</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
                      </a>
                    )}

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-emerald-400/30 hover:border-emerald-300 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(52,211,153,0.25)]"
                      >
                        <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                        <span>Google Play</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
