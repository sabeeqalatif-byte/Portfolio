"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, ProjectItem } from "@/data/portfolioData";
import { FolderGit2, Smartphone, CheckCircle, ExternalLink, Apple, Play, Layers } from "lucide-react";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const screenshots = project.screenshots && project.screenshots.length > 0 ? project.screenshots : (project.image ? [project.image] : []);

  // For 3-device collage
  const hasCollage = screenshots.length >= 3;

  return (
    <div className="theme-card rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
      {/* Project Visual Showcase */}
      <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-[#1d2c22] to-[#121c15] border-b border-[var(--border-color)] overflow-hidden flex items-center justify-center p-4">
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#bafdc5]/15 to-transparent pointer-events-none" />

        {hasCollage ? (
          /* Multi-Device 3D Perspective Collage */
          <div className="relative w-full h-full flex items-center justify-center pt-2">
            
            {/* Left Screen (Tilted) */}
            <button
              type="button"
              onClick={() => setSelectedImageIdx(1)}
              className="absolute left-4 sm:left-8 w-28 sm:w-32 h-52 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border border-[#94ca9d]/40 -rotate-6 -translate-y-1 scale-90 hover:scale-95 hover:z-30 hover:-rotate-3 transition-all duration-300 group-hover:-translate-x-2 focus:outline-none"
              title="Click to view this screen"
            >
              <Image
                src={screenshots[1] || screenshots[0]}
                alt={`${project.name} left screen`}
                fill
                className="object-cover object-top"
              />
            </button>

            {/* Right Screen (Tilted) */}
            <button
              type="button"
              onClick={() => setSelectedImageIdx(2)}
              className="absolute right-4 sm:right-8 w-28 sm:w-32 h-52 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border border-[#94ca9d]/40 rotate-6 -translate-y-1 scale-90 hover:scale-95 hover:z-30 hover:rotate-3 transition-all duration-300 group-hover:translate-x-2 focus:outline-none"
              title="Click to view this screen"
            >
              <Image
                src={screenshots[2] || screenshots[0]}
                alt={`${project.name} right screen`}
                fill
                className="object-cover object-top"
              />
            </button>

            {/* Center Hero Screen (Elevated Focus) */}
            <button
              type="button"
              onClick={() => setSelectedImageIdx(0)}
              className="relative z-20 w-32 sm:w-36 h-60 sm:h-64 rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] border-2 border-[#bafdc5] ring-4 ring-[#bafdc5]/25 scale-100 hover:scale-105 transition-all duration-300 focus:outline-none"
              title="Click to focus primary screen"
            >
              <Image
                src={screenshots[selectedImageIdx]}
                alt={`${project.name} center hero screen`}
                fill
                className="object-cover object-top"
              />
            </button>

            {/* Collage Badge Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#152018]/90 border border-[#94ca9d]/40 text-[#bafdc5] text-[11px] font-mono font-bold backdrop-blur-md shadow-md">
              <Layers className="w-3.5 h-3.5 text-[#bafdc5]" />
              <span>Interactive 3-Screen Showcase</span>
            </div>

          </div>
        ) : (
          /* Single Image / SVG Illustration */
          <div className="relative w-full h-full flex items-center justify-center p-2">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="text-[#58795e] font-mono text-xs">Project Preview</div>
            )}
          </div>
        )}

        {/* Platform Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-30">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#1d2c22]/90 text-[#f4faf5] border border-[#94ca9d]/40 backdrop-blur-md shadow-lg">
            <Smartphone className="w-3.5 h-3.5 text-[#bafdc5]" />
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
              <span className="text-[11px] font-mono font-bold text-[#2c3c2f] dark:text-[#bafdc5] uppercase tracking-wider bg-[#c9efce]/40 dark:bg-[#2c3c2f]/70 px-2 py-0.5 rounded border border-[#94ca9d]/40">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#58795e] dark:text-[#94ca9d] font-semibold">
                {project.role}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-heading)] mt-1">
              {project.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
            {project.description}
          </p>

          {/* Testing Focus Highlights */}
          <div className="p-3.5 rounded-xl theme-subtle-box space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-heading)]">
              QA Responsibilities &amp; Testing Focus:
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--text-body)]">
              {project.testingFocus.map((focus, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools & Live Store Links */}
        <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
          {/* Tool Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 text-[11px] font-mono rounded-md theme-badge font-semibold"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#2c3c2f] hover:bg-[#58795e] border border-[#58795e]/50 transition-all shadow-sm"
              >
                <Apple className="w-3.5 h-3.5 text-white" />
                <span>App Store</span>
                <ExternalLink className="w-3 h-3 text-[#bafdc5] ml-0.5" />
              </a>
            )}

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#58795e] hover:bg-[#2c3c2f] border border-[#94ca9d]/50 transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 text-[#bafdc5] fill-[#bafdc5]" />
                <span>Google Play</span>
                <ExternalLink className="w-3 h-3 text-[#bafdc5] ml-0.5" />
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

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
    <section id="projects" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold theme-badge">
            <FolderGit2 className="w-3.5 h-3.5 text-[#58795e] dark:text-[#bafdc5]" />
            <span>15+ Live Mobile Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Verified Store Projects
          </h2>
          <p className="text-[var(--text-body)] text-xs sm:text-sm">
            Live mobile apps tested and verified on the Apple App Store &amp; Google Play Store.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {filterOptions.map((opt) => {
            const isSelected = selectedFilter === opt.label || (selectedFilter === "All" && opt.label === "All Apps");
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => setSelectedFilter(opt.label)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "btn-palette-primary scale-105"
                    : "theme-card text-[var(--text-body)] hover:text-[#58795e] dark:hover:text-[#bafdc5] font-semibold"
                }`}
              >
                <span>{opt.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? "bg-white/30 text-white" : "theme-badge"}`}>
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
