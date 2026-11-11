"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Eye, Sparkles } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const isVertical = project.aspectRatio === "9:16";

  return (
    <article className="group relative flex flex-col rounded-2xl bg-cardDark border border-borderDark hover:border-accent/60 transition-all duration-300 hover:shadow-subtle overflow-hidden">
      
      {/* Thumbnail Container */}
      <div className="relative w-full overflow-hidden bg-bgSecondary aspect-[16/10]">
        <Image
          src={project.thumbnail}
          alt={`${project.title} - ${project.client}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cardDark via-cardDark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-bgDark/85 backdrop-blur-md border border-borderDark text-[11px] font-bold text-accent tracking-wider uppercase">
            {project.category}
          </span>

          {project.videoDuration && (
            <span className="px-2 py-0.5 rounded-md bg-bgDark/85 backdrop-blur-md border border-borderDark text-[10px] font-mono font-semibold text-secondaryText">
              {project.videoDuration}
            </span>
          )}
        </div>

        {/* Quick Preview Hover Trigger */}
        <button
          onClick={() => onPreview(project)}
          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-bgDark/90 border border-accent/80 text-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-accentGlow"
          aria-label={`Quick preview ${project.title}`}
        >
          {project.mediaType === "video" ? (
            <Play className="w-5 h-5 fill-accent translate-x-0.5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Brand Name */}
          <div className="flex items-center justify-between text-xs font-semibold text-secondaryText">
            <span className="uppercase tracking-widest text-accent/90">
              {project.client}
            </span>
            <span className="font-mono text-[11px] text-borderDark group-hover:text-secondaryText transition-colors">
              {project.date}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-primaryText group-hover:text-white transition-colors leading-snug">
            <Link
              href={`/work/${project.slug}`}
              className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
            >
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-secondaryText leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer Area: Tools & View Project Link */}
        <div className="pt-4 border-t border-borderDark/60 flex flex-col gap-3.5">
          {/* Tools Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-bgDark border border-borderDark/80 text-secondaryText"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <div className="flex items-center justify-between pt-1">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primaryText group-hover:text-accent transition-colors"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={() => onPreview(project)}
              className="text-xs text-secondaryText hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          </div>
        </div>

      </div>

    </article>
  );
}
