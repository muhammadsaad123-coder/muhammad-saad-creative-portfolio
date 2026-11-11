"use client";

import { Briefcase, Calendar, GraduationCap, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { experienceData, educationData } from "@/data/projects";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-borderDark/60">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-mono font-bold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Career &amp; Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight">
              Experience &amp; Education
            </h2>
            <p className="text-secondaryText text-base max-w-xl">
              Authentic professional background in promotional content creation, AI video development, SEO, and web development.
            </p>
          </div>

          <div className="text-xs font-mono text-secondaryText bg-cardDark px-4 py-2.5 rounded-xl border border-borderDark flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Currently Active at Dynamic Solutions</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12">
          
          {/* Left Column: Work Experience (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-accent mb-2">
              <Briefcase className="w-4 h-4 text-accent" />
              <span>Professional Roles</span>
            </div>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.company}
                  className="p-6 sm:p-8 rounded-2xl bg-cardDark border border-borderDark hover:border-accent/50 transition-all duration-300 relative group"
                >
                  {/* Company & Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-borderDark/60">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                        {exp.company}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-primaryText">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-secondaryText">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bgDark border border-borderDark text-xs font-mono font-semibold text-primaryText self-start">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <div className="pt-6 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-secondaryText block">
                      Core Duties &amp; Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm text-secondaryText">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Qualifications (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mb-2">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Academic Education</span>
            </div>

            {educationData.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 sm:p-8 rounded-2xl bg-cardDark border border-borderDark hover:border-sky-500/50 transition-all duration-300 space-y-5"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-500/40 flex items-center justify-center text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                    {edu.institution}
                  </span>
                  <h3 className="text-xl font-bold text-primaryText">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-accent pt-1">
                    {edu.graduation}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-secondaryText leading-relaxed pt-2 border-t border-borderDark/60">
                  {edu.description}
                </p>

                <div className="p-4 rounded-xl bg-bgDark border border-borderDark/80">
                  <div className="text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                    Core Technical Pillars
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cardDark text-primaryText">
                      HCI &amp; UI/UX
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cardDark text-primaryText">
                      Web Technologies
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cardDark text-primaryText">
                      Algorithms
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cardDark text-primaryText">
                      Software Architecture
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Recruiter Note */}
            <div className="p-6 rounded-2xl bg-bgSecondary border border-borderDark space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                Why Hire Muhammad Saad?
              </span>
              <p className="text-xs text-secondaryText leading-relaxed">
                Most content creators lack software understanding, and most software graduates lack creative storytelling chops. Muhammad Saad bridges that exact gap for tech companies and modern brands.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
