"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const getLinkHref = (hash: string) => {
    if (isHome) return hash;
    return `/${hash}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-subtle"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Initials MS */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label="Muhammad Saad Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-cardDark border border-borderDark group-hover:border-accent transition-colors duration-200">
              <span className="font-extrabold text-base tracking-wider text-primaryText group-hover:text-accent transition-colors">
                MS
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-bgDark animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-primaryText group-hover:text-white transition-colors">
                Muhammad Saad
              </span>
              <span className="text-[11px] font-medium text-secondaryText tracking-wide flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-accent inline" />
                Creative &amp; AI Creator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-cardDark/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-borderDark">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={getLinkHref(link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-secondaryText hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={getLinkHref("#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bgDark font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-all duration-200 shadow-accentGlow hover:scale-105 active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href={getLinkHref("#contact")}
              className="px-3 py-1.5 rounded-full bg-accent text-bgDark font-bold text-xs uppercase tracking-wider hover:bg-accent-hover"
            >
              Talk
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-cardDark border border-borderDark text-primaryText hover:text-accent focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-bgDark/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 border-t border-borderDark animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-2 pt-4">
            <span className="text-xs font-mono uppercase tracking-widest text-secondaryText px-4 mb-2">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={getLinkHref(link.href)}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-lg font-bold text-primaryText hover:text-accent hover:bg-cardDark border border-transparent hover:border-borderDark transition-all"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-secondaryText">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-borderDark/60 flex flex-col gap-3">
            <div className="text-xs text-secondaryText flex items-center justify-between">
              <span>Based in Taxila, Pakistan</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            <a
              href="mailto:muhammadsaad.webdev@gmail.com"
              className="text-xs text-primaryText font-mono"
            >
              muhammadsaad.webdev@gmail.com
            </a>
            <Link
              href={getLinkHref("#contact")}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-bgDark font-bold text-sm uppercase tracking-wider hover:bg-accent-hover shadow-accentGlow"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
