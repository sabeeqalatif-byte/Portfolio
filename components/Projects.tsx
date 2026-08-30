"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, ProjectItem } from "@/data/portfolioData";
import { FolderGit2, Smartphone, CheckCircle, ExternalLink, Apple, Play, ChevronLeft, ChevronRight, Eye } from "lucide-react";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = project.screenshots && project.screenshots.length > 0 ? project.screenshots : (project.image ? [project.image] : []);
  const currentImage = images[activeImageIndex] || project.image;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="theme-card rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
      {/* Project Image / Multi-Screenshot Preview */}
      <div className="relative w-full h-64 sm:h-72 bg-[#1c1426] border-b border-[var(--border-color)] overflow-hidden flex items-center justify-center">
        {currentImage ? (
          <div className="relative w-full h-full p-2 flex items-center justify-center">
            <Image
              src={currentImage}
              alt={`${project.name} screenshot ${activeImageIndex + 1}`}
              fill
              className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#ef98a7] font-mono text-xs">
            Project Visual Preview
          </div>
        )}

        {/* Platform Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#281c36]/90 text-[#fcfcfb] border border-[#ef98a7]/40 backdrop-blur-md shadow-lg">
            <Smartphone className="w-3.5 h-3.5 text-[#f7bea9]" />
            {project.platform}
          </span>
        </div>

        {/* Multi-Screenshot Gallery Arrows & Counter */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[#1c1426]/80 hover:bg-[#ef98a7] text-white border border-[#ef98a7]/40 backdrop-blur-md shadow-md transition-all z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[#1c1426]/80 hover:bg-[#ef98a7] text-white border border-[#ef98a7]/40 backdrop-blur-md shadow-md transition-all z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Thumbnail Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1c1426]/85 border border-[#ef98a7]/30 backdrop-blur-md z-10">
              <Eye className="w-3 h-3 text-[#f7bea9] mr-1" />
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeImageIndex === idx ? "bg-[#ef98a7] w-5" : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`View screenshot ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Category & Title */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-bold text-[#604f71] dark:text-[#f7bea9] uppercase tracking-wider bg-[#f7bea9]/25 dark:bg-[#604f71]/50 px-2 py-0.5 rounded border border-[#ef98a7]/35">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#ef98a7] dark:text-[#f7bea9] font-semibold">
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
                  <CheckCircle className="w-3.5 h-3.5 text-[#ef98a7] flex-shrink-0 mt-0.5" />
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#604f71] hover:bg-[#807094] border border-[#807094]/40 transition-all shadow-sm"
              >
                <Apple className="w-3.5 h-3.5 text-white" />
                <span>App Store</span>
                <ExternalLink className="w-3 h-3 text-[#f7bea9] ml-0.5" />
              </a>
            )}

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#807094] hover:bg-[#604f71] border border-[#ef98a7]/40 transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 text-[#f7bea9] fill-[#f7bea9]" />
                <span>Google Play</span>
                <ExternalLink className="w-3 h-3 text-[#f7bea9] ml-0.5" />
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold theme-badge">
            <FolderGit2 className="w-3.5 h-3.5 text-[#ef98a7]" />
            <span>15+ Live Mobile Applications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-heading)]">
            Verified Store Projects
          </h2>
          <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
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
                    ? "btn-palette-primary scale-105"
                    : "theme-card text-[var(--text-body)] hover:text-[#ef98a7] font-semibold"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
