import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-cardDark border border-borderDark shadow-card">
        
        <div className="w-16 h-16 rounded-2xl bg-bgDark border border-borderDark flex items-center justify-center text-accent mx-auto">
          <span className="font-mono text-2xl font-black">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-primaryText">
            Page Not Found
          </h1>
          <p className="text-sm text-secondaryText leading-relaxed">
            The project or page you are looking for doesn&apos;t exist, has been relocated, or is currently in development.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bgDark text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-accentGlow"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-bgDark text-primaryText border border-borderDark text-xs font-semibold hover:border-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
