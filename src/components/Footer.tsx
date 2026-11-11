"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Sparkles, Mail, Linkedin, Phone } from "lucide-react";
import { personalInfo } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bgDark border-t border-borderDark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-borderDark/60 items-center">
          
          {/* Logo & Headline */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cardDark border border-borderDark">
                <span className="font-extrabold text-base tracking-wider text-accent">
                  {personalInfo.initials}
                </span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-primaryText">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-secondaryText">
                  {personalInfo.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-secondaryText max-w-sm">
              Creating engaging content through creativity, technology, and AI. Open to full-time and project opportunities.
            </p>
          </div>

          {/* Quick Direct Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4 text-xs font-semibold">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cardDark border border-borderDark text-secondaryText hover:text-white hover:border-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cardDark border border-borderDark text-secondaryText hover:text-white hover:border-sky-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cardDark border border-borderDark text-secondaryText hover:text-white hover:border-accent transition-colors ml-auto md:ml-0"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Strip: Navigation & Dynamic Copyright Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondaryText">
          <nav className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="/#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
