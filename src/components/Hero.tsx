"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowDown, 
  FileText, 
  MessageCircle, 
  Play, 
  Sparkles, 
  Video, 
  Layers, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { personalInfo } from "@/data/projects";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35] -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Designation & Location Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cardDark border border-borderDark text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-bold text-accent tracking-wider uppercase">
                {personalInfo.title}
              </span>
              <span className="text-borderDark">•</span>
              <span className="text-secondaryText font-medium">
                Taxila, Pakistan
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-primaryText leading-[1.08]">
              Creating Digital{" "}
              <span className="relative inline-block text-white">
                Experiences
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/60 rounded-full" />
              </span>{" "}
              That Make Brands{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
                Stand Out.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-secondaryText max-w-2xl font-normal leading-relaxed">
              I create engaging social media content, AI-powered promotional videos, and digital marketing visuals that help brands communicate their value.
            </p>

            {/* Buttons Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Explore Work */}
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-bgDark font-bold text-sm tracking-wide hover:bg-accent-hover transition-all duration-200 shadow-accentGlow hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Download CV */}
              <a
                href={personalInfo.resumePath}
                download="Muhammad_Saad_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-cardDark text-primaryText border border-borderDark font-semibold text-sm hover:border-accent hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Download CV</span>
              </a>

              {/* Let's Connect */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent text-secondaryText hover:text-white border border-transparent hover:border-borderDark text-sm font-semibold transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Credibility Highlights */}
            <div className="pt-6 border-t border-borderDark/60 grid grid-cols-3 gap-4 w-full max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-primaryText flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-accent" />
                  <span>AI Video</span>
                </div>
                <p className="text-xs text-secondaryText mt-0.5">Google Flow &amp; CapCut</p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-primaryText flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>Branding</span>
                </div>
                <p className="text-xs text-secondaryText mt-0.5">Canva &amp; Visual Design</p>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-primaryText flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>BS SE</span>
                </div>
                <p className="text-xs text-secondaryText mt-0.5">COMSATS Graduate</p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Creative Visual Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Composition Container */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
              
              {/* Back Card: Dynamic Business Suite Promo Preview */}
              <div className="absolute top-0 right-2 w-[85%] rounded-2xl overflow-hidden border border-borderDark bg-cardDark shadow-2xl transition-all duration-500 hover:rotate-0 hover:z-30 rotate-2">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/thumbnails/dynamic-business-suite.svg"
                    alt="Dynamic Business Suite Promotional Video"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 fill-accent" />
                      Dynamic Business Suite • 16:9 Promo
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Floating Card: Dynamic ERP 9:16 Vertical Reel */}
              <div className="absolute bottom-2 left-0 w-[46%] rounded-2xl overflow-hidden border border-borderDark bg-cardDark shadow-2xl transition-all duration-500 hover:scale-105 z-20 -rotate-3">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src="/images/thumbnails/dynamic-erp.svg"
                    alt="Dynamic ERP Next Urdu Reel"
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-bgDark/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-sky-400 border border-sky-400/30">
                    9:16 REEL
                  </div>
                </div>
              </div>

              {/* Small Overlay Card: DirectPay / Graphic Design Card */}
              <div className="absolute bottom-6 right-2 w-[52%] rounded-xl overflow-hidden border border-borderDark bg-cardDark shadow-2xl transition-all duration-500 hover:scale-105 z-25 rotate-1">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/thumbnails/directpay.svg"
                    alt="DirectPay Digital Payment Design"
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                    Fintech Creative
                  </div>
                </div>
              </div>

              {/* Center Anchor: Premium Text-Based Monogram Visual Identity Badge */}
              <div className="relative z-30 flex flex-col items-center justify-center p-5 rounded-2xl bg-cardDark/95 backdrop-blur-xl border border-accent/40 shadow-accentGlow">
                <div className="w-16 h-16 rounded-xl bg-bgDark border-2 border-accent flex items-center justify-center mb-2.5 relative">
                  <span className="text-2xl font-black text-primaryText tracking-wider">
                    MS
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-accent absolute -top-1.5 -right-1.5" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-primaryText">
                    Muhammad Saad
                  </div>
                  <div className="text-[10px] text-accent font-semibold tracking-wider uppercase mt-0.5">
                    Creative &amp; AI Video Creator
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-secondaryText border-t border-borderDark/80 pt-2">
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  <span>100% Real Creative Work</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
