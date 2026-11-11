"use client";

import { useState } from "react";
import { Sparkles, Filter, Layers } from "lucide-react";
import { Project, ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import MediaModal from "./MediaModal";

const CATEGORIES: ProjectCategory[] = [
  "All Projects",
  "AI Video Creation",
  "Promotional Videos",
  "Social Media Content",
  "Graphic Design",
  "Digital Marketing"
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All Projects") return true;
    if (activeCategory === "Digital Marketing") {
      // Matches projects that have Digital Marketing as category or secondaryCategory
      return (
        project.category === "Digital Marketing" ||
        project.secondaryCategory?.includes("Marketing")
      );
    }
    return (
      project.category === activeCategory ||
      project.secondaryCategory?.toLowerCase().includes(activeCategory.toLowerCase())
    );
  });

  return (
    <section id="work" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-borderDark/60">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-mono font-bold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primaryText">
              Real Work. Measurable Impact.
            </h2>
            <p className="text-secondaryText text-base max-w-xl">
              Authentic creative campaigns, promotional video assets, and branding collaterals produced for real business clients.
            </p>
          </div>

          {/* Project Counter */}
          <div className="flex items-center gap-2 text-xs font-mono text-secondaryText bg-cardDark px-4 py-2 rounded-xl border border-borderDark self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Showing {filteredProjects.length} of {projects.length} Projects</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="py-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
                    isActive
                      ? "bg-accent text-bgDark border-accent shadow-accentGlow font-bold"
                      : "bg-cardDark text-secondaryText border-borderDark hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={(p) => setPreviewProject(p)}
            />
          ))}
        </div>

        {/* Empty State Fallback (Defensive) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-cardDark rounded-2xl border border-borderDark">
            <Layers className="w-10 h-10 text-secondaryText mx-auto mb-3" />
            <h3 className="text-lg font-bold text-primaryText">
              No projects found in this category
            </h3>
            <p className="text-sm text-secondaryText mt-1">
              Select another filter or reset to view all projects.
            </p>
            <button
              onClick={() => setActiveCategory("All Projects")}
              className="mt-4 px-4 py-2 rounded-full bg-accent text-bgDark text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Quick Media Preview Modal */}
      <MediaModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
}
