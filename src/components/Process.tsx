"use client";

import { Sparkles, Search, PenTool, Film, Scissors, Send } from "lucide-react";
import { creativeProcessSteps } from "@/data/projects";

const ICONS = [Search, PenTool, Film, Scissors, Send];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-mono font-bold text-accent uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Workflow &amp; Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight">
            How I Bring Ideas to Life
          </h2>

          <p className="text-secondaryText text-base sm:text-lg">
            A disciplined five-stage creative framework ensuring every piece of content aligns with business objectives and commands viewer attention.
          </p>
        </div>

        {/* 5-Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          
          {creativeProcessSteps.map((step, index) => {
            const Icon = ICONS[index] || Sparkles;
            return (
              <div
                key={step.number}
                className="group relative p-6 rounded-2xl bg-cardDark border border-borderDark hover:border-accent/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-subtle"
              >
                {/* Step Top Bar: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-accent/80 group-hover:text-accent transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-bgDark border border-borderDark group-hover:border-accent/40 flex items-center justify-center text-secondaryText group-hover:text-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Phase Title */}
                  <h3 className="text-xl font-bold text-primaryText group-hover:text-white transition-colors mb-2">
                    {step.phase}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm font-semibold text-primaryText/90 leading-snug mb-3">
                    {step.summary}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-xs text-secondaryText leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Bottom Status Dot */}
                <div className="pt-6 mt-6 border-t border-borderDark/60 flex items-center gap-2 text-[11px] font-mono text-secondaryText">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Stage {index + 1} of 5</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
