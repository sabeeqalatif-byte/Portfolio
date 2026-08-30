import React from "react";
import Image from "next/image";
import { projects } from "@/data/portfolioData";
import { FolderGit2, Smartphone, Globe, ExternalLink, Github, CheckCircle } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-teal-300 bg-teal-950/50 border border-teal-500/30">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Featured QA Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Quality assurance case studies across Android mobile utilities and enterprise web platforms.
          </p>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Image Preview / Visual Placeholder */}
              <div className="relative w-full h-48 sm:h-56 bg-slate-950/70 border-b border-teal-500/15 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-teal-400/60 font-mono text-xs">
                    [Project Visual Preview]
                  </div>
                )}

                {/* Platform Badge Overlay */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#081216]/90 text-teal-300 border border-teal-500/30 backdrop-blur-md shadow-lg">
                    {project.platform === "Web" ? (
                      <Globe className="w-3.5 h-3.5 text-teal-400" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5 text-teal-400" />
                    )}
                    {project.platform}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Role Tag & Title */}
                  <div>
                    <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider">
                      {project.role}
                    </span>
                    <h3 className="text-xl font-bold text-slate-100 mt-1">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Testing Focus Highlights */}
                  <div className="p-3.5 rounded-xl bg-teal-950/30 border border-teal-500/15 space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-300">
                      QA Testing Focus:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.testingFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tools & Links */}
                <div className="space-y-4 pt-4 border-t border-teal-500/15">
                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-teal-950/50 text-slate-300 border border-teal-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links / Placeholders */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.projectLink && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-300 bg-teal-950/40 px-3 py-1.5 rounded-lg border border-teal-500/20 hover:border-teal-400 hover:text-teal-200 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.projectLink}</span>
                      </span>
                    )}

                    {project.githubLink && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-teal-950/40 px-3 py-1.5 rounded-lg border border-teal-500/20 hover:border-teal-400 transition-colors">
                        <Github className="w-3.5 h-3.5" />
                        <span>{project.githubLink}</span>
                      </span>
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
