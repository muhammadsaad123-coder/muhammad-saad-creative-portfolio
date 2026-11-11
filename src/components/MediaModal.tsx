"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Play, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/project";

interface MediaModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function MediaModal({ project, onClose }: MediaModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-bgDark/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-cardDark border border-borderDark rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-borderDark bg-bgSecondary/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <span className="text-secondaryText text-xs">•</span>
            <span className="text-xs text-secondaryText font-medium">
              Client: {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-secondaryText hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview Area */}
        <div className="relative w-full bg-black/60 flex items-center justify-center overflow-hidden">
          {project.aspectRatio === "9:16" ? (
            /* Vertical reel preview */
            <div className="relative h-[480px] w-[270px] my-4 rounded-xl overflow-hidden border border-borderDark shadow-2xl">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/90 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-accent uppercase">
                  9:16 Vertical Reel Preview
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.title}
                </span>
              </div>
            </div>
          ) : (
            /* Landscape / Square preview */
            <div className="relative w-full aspect-[16/9] max-h-[460px]">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 bg-cardDark flex flex-col gap-4 overflow-y-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primaryText">
              {project.title}
            </h3>
            <p className="text-sm text-secondaryText mt-1.5 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Tools & Key Deliverables */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-secondaryText font-medium mr-1">
              Tools:
            </span>
            {project.toolsUsed.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-bgDark border border-borderDark text-primaryText"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Modal Action CTA */}
          <div className="pt-3 border-t border-borderDark flex items-center justify-between">
            <div className="text-xs text-secondaryText flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Verified Creative Project</span>
            </div>

            <Link
              href={`/work/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bgDark text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-accentGlow"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
