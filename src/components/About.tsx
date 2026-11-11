"use client";

import Image from "next/image";
import { Sparkles, GraduationCap, Video, Compass, MapPin, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/projects";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-bgSecondary/40 border-y border-borderDark/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Identity & Key Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
            
            {/* Visual Monogram Card */}
            <div className="relative w-full max-w-sm rounded-2xl bg-cardDark border border-borderDark p-8 shadow-card overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-bgDark border-2 border-accent flex items-center justify-center">
                  <span className="text-2xl font-black text-primaryText tracking-wider">
                    {personalInfo.initials}
                  </span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-bgDark" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primaryText">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-accent font-semibold tracking-wide uppercase">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              {/* Quick Profile Points */}
              <div className="space-y-3.5 border-t border-borderDark/80 pt-6 text-xs text-secondaryText">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Based in {personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>BS Software Engineering (COMSATS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Specialized in AI Video &amp; Short-Form Content</span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Promotional Strategy &amp; Urdu Content</span>
                </div>
              </div>

              {/* Quote / Philosophy Pill */}
              <div className="mt-6 p-4 rounded-xl bg-bgDark border border-borderDark/80">
                <p className="text-xs italic text-primaryText leading-relaxed">
                  &ldquo;Transforming complex business logic and software features into visual stories anyone can immediately grasp.&rdquo;
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-mono font-bold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Background &amp; Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primaryText tracking-tight">
              A Little About Me
            </h2>

            {/* Provided Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-secondaryText leading-relaxed">
              {personalInfo.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-primaryText font-medium" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Why This Matters for Recruiters */}
            <div className="pt-6 border-t border-borderDark/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cardDark border border-borderDark flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-primaryText block">
                    Engineering + Creative Hybrid
                  </span>
                  <span className="text-secondaryText mt-0.5 block">
                    Understands both code logic and visual storytelling.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cardDark border border-borderDark flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-primaryText block">
                    Modern AI Pipeline
                  </span>
                  <span className="text-secondaryText mt-0.5 block">
                    Harnesses Google Flow &amp; CapCut for rapid turnarounds.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
