"use client";

import { Sparkles, Video, Bot, TrendingUp, Code2, CheckCircle2 } from "lucide-react";
import { skillCategories } from "@/data/projects";

const CATEGORY_ICONS = {
  "Content Creation": Video,
  "AI & Creative Tools": Bot,
  "Digital Marketing": TrendingUp,
  "Technical Skills": Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-bgSecondary/30 border-t border-borderDark/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-borderDark/60">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-mono font-bold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Core Capabilities &amp; Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight">
              Skills &amp; Creative Tools
            </h2>
            <p className="text-secondaryText text-base max-w-xl">
              Practical expertise across video production, generative AI tools, digital marketing, and web technologies.
            </p>
          </div>

          <div className="text-xs font-mono text-secondaryText bg-cardDark px-4 py-2.5 rounded-xl border border-borderDark flex items-center gap-2 self-start md:self-auto">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>Demonstrated Across Real Campaigns</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {skillCategories.map((catGroup) => {
            const Icon = CATEGORY_ICONS[catGroup.category as keyof typeof CATEGORY_ICONS] || Sparkles;

            return (
              <div
                key={catGroup.category}
                className="group p-6 rounded-2xl bg-cardDark border border-borderDark hover:border-accent/60 transition-all duration-300 flex flex-col justify-between hover:shadow-subtle"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-bgDark border border-borderDark group-hover:border-accent/50 flex items-center justify-center text-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-secondaryText font-semibold">
                      {catGroup.skills.length} Skills
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primaryText mb-4 tracking-tight">
                    {catGroup.category}
                  </h3>

                  {/* Badges List (NO fake percentage bars!) */}
                  <div className="flex flex-wrap gap-2">
                    {catGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-bgDark border border-borderDark/80 text-primaryText group-hover:border-zinc-700 hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-badge indicator */}
                <div className="pt-6 mt-6 border-t border-borderDark/60 flex items-center gap-1.5 text-[11px] text-secondaryText font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creative Edge Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cardDark via-bgSecondary to-cardDark border border-borderDark flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-primaryText">
                The AI + Engineering Advantage
              </h4>
              <p className="text-xs text-secondaryText mt-0.5 max-w-2xl leading-relaxed">
                As a Software Engineering graduate who crafts AI promotional videos, I understand both technical architecture and audience psychology — saving brands countless rounds of script revisions.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-accent text-bgDark text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shrink-0 shadow-accentGlow"
          >
            Work Together
          </a>
        </div>

      </div>
    </section>
  );
}
