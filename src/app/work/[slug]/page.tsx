import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Video, 
  Clock, 
  Calendar, 
  Cpu, 
  Play, 
  ExternalLink 
} from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} - Creative Case Study`,
      description: project.shortDescription,
      images: [
        {
          url: project.thumbnail,
          width: 1280,
          height: 720,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const relatedProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-secondaryText hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-secondaryText">
            <span className="text-zinc-600">/work/</span>
            <span className="text-primaryText">{project.slug}</span>
          </div>
        </div>
      </div>

      {/* Main Project Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-bold text-accent uppercase tracking-wider">
              {project.category}
            </span>
            {project.secondaryCategory && (
              <span className="px-3 py-1 rounded-full bg-cardDark border border-borderDark text-xs font-medium text-secondaryText">
                {project.secondaryCategory}
              </span>
            )}
            <span className="text-xs font-mono text-secondaryText">
              Year: {project.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primaryText tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-secondaryText max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-6 rounded-2xl bg-cardDark border border-borderDark">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
              Client / Brand
            </span>
            <span className="text-sm font-bold text-primaryText mt-1 block">
              {project.client}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
              Role &amp; Focus
            </span>
            <span className="text-sm font-bold text-primaryText mt-1 block">
              Creative Production
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
              Format
            </span>
            <span className="text-sm font-bold text-accent mt-1 block">
              {project.aspectRatio} {project.mediaType === "video" ? "Video" : "Graphic"}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText block">
              Key Tools
            </span>
            <span className="text-sm font-bold text-primaryText mt-1 block">
              {project.toolsUsed.slice(0, 2).join(", ")}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Media Showcase / Final Video or Design */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-2xl border border-borderDark bg-cardDark overflow-hidden shadow-2xl">
          
          <div className="px-6 py-4 border-b border-borderDark/80 bg-bgSecondary flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primaryText">
                Final Deliverable Preview
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.videoDuration && (
                <span className="text-xs font-mono text-secondaryText flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {project.videoDuration}
                </span>
              )}
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-bgDark border border-borderDark text-accent">
                {project.aspectRatio}
              </span>
            </div>
          </div>

          {/* Media Player Container */}
          <div className="p-4 sm:p-8 flex items-center justify-center bg-black/40">
            {project.aspectRatio === "9:16" ? (
              /* Vertical reel format */
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-borderDark shadow-2xl bg-bgDark">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="340px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgDark/90 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-bold text-accent uppercase">
                    Mobile Reel Showcase
                  </span>
                  <p className="text-sm font-medium text-white mt-1">
                    {project.title}
                  </p>
                </div>
              </div>
            ) : project.aspectRatio === "1:1" ? (
              /* Square social feed format */
              <div className="relative w-full max-w-[560px] aspect-square rounded-2xl overflow-hidden border border-borderDark shadow-2xl bg-bgDark">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="560px"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              /* 16:9 Landscape Video format */
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-borderDark shadow-2xl bg-bgDark">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Media Info Strip */}
          <div className="px-6 py-4 bg-bgSecondary/60 border-t border-borderDark/80 flex flex-wrap items-center justify-between gap-4 text-xs text-secondaryText">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Calibrated for social feeds, digital ads, and web landing embeds.</span>
            </div>
            <div className="font-mono">
              Tools: {project.toolsUsed.join(" • ")}
            </div>
          </div>

        </div>
      </section>

      {/* Case Study Details Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Content: Overview, Objective, Concept, Responsibilities */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Project Overview</span>
              </h2>
              <p className="text-base sm:text-lg text-secondaryText leading-relaxed">
                {project.fullOverview}
              </p>
            </div>

            {/* Objective & Creative Concept */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-cardDark border border-borderDark space-y-3">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-accent">
                  The Objective
                </h3>
                <p className="text-sm text-secondaryText leading-relaxed">
                  {project.objective}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cardDark border border-borderDark space-y-3">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400">
                  Creative Concept
                </h3>
                <p className="text-sm text-secondaryText leading-relaxed">
                  {project.creativeConcept}
                </p>
              </div>
            </div>

            {/* Key Communication Points (if applicable) */}
            {project.keyCommunicationPoints && (
              <div className="p-6 rounded-2xl bg-cardDark border border-borderDark space-y-4">
                <h3 className="text-base font-bold text-primaryText flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Key Communication Points</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-secondaryText">
                  {project.keyCommunicationPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* My Contribution / Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primaryText flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-accent" />
                <span>My Responsibilities &amp; Contribution</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-cardDark border border-borderDark flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-primaryText font-medium">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Process (Step by Step) */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primaryText flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-accent" />
                <span>Production Process</span>
              </h2>
              <div className="space-y-4">
                {project.productionProcess.map((proc, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-cardDark border border-borderDark flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
                  >
                    <span className="text-xs font-mono font-bold text-accent shrink-0 sm:w-44">
                      {proc.step}
                    </span>
                    <p className="text-sm text-secondaryText leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Tools, Client, Project Navigator */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tools Used Box */}
            <div className="p-6 rounded-2xl bg-cardDark border border-borderDark space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-primaryText flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" />
                <span>Tools &amp; Software</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-bgDark border border-borderDark text-xs font-bold text-primaryText"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Card */}
            <div className="p-6 rounded-2xl bg-cardDark border border-borderDark space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-secondaryText">
                Client Organization
              </span>
              <h4 className="text-lg font-bold text-primaryText">
                {project.client}
              </h4>
              <p className="text-xs text-secondaryText leading-relaxed">
                Work completed as part of official creative marketing initiatives and promotional asset development.
              </p>
            </div>

            {/* Next / Previous Project Navigation */}
            <div className="p-6 rounded-2xl bg-cardDark border border-borderDark space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-secondaryText block">
                Project Navigation
              </span>

              {prevProject && (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="block p-3 rounded-xl bg-bgDark border border-borderDark hover:border-accent transition-colors group"
                >
                  <span className="text-[10px] font-mono uppercase text-secondaryText block">
                    ← Previous Case Study
                  </span>
                  <span className="text-xs font-bold text-primaryText group-hover:text-accent transition-colors block mt-0.5 line-clamp-1">
                    {prevProject.title}
                  </span>
                </Link>
              )}

              {nextProject && (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="block p-3 rounded-xl bg-bgDark border border-borderDark hover:border-accent transition-colors group"
                >
                  <span className="text-[10px] font-mono uppercase text-secondaryText block">
                    Next Case Study →
                  </span>
                  <span className="text-xs font-bold text-primaryText group-hover:text-accent transition-colors block mt-0.5 line-clamp-1">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>

            {/* Inquire CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cardDark to-bgDark border border-accent/40 space-y-4">
              <h4 className="text-base font-bold text-primaryText">
                Need similar content for your brand?
              </h4>
              <p className="text-xs text-secondaryText leading-relaxed">
                I can craft high-converting promotional videos and creative graphics tailored to your product.
              </p>
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-bgDark text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-accentGlow"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Related Projects Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-borderDark/60">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primaryText">
              More Creative Work
            </h3>
            <p className="text-sm text-secondaryText mt-1">
              Explore other promotional campaigns and visual design projects.
            </p>
          </div>

          <Link
            href="/#work"
            className="text-xs font-bold uppercase tracking-wider text-accent hover:underline"
          >
            View All ({projects.length})
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <Link
              key={rel.id}
              href={`/work/${rel.slug}`}
              className="group rounded-xl bg-cardDark border border-borderDark hover:border-accent transition-all p-4 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-bgSecondary mb-3">
                <Image
                  src={rel.thumbnail}
                  alt={rel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-accent uppercase font-bold">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-primaryText group-hover:text-white line-clamp-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-secondaryText line-clamp-2 mt-1">
                  {rel.shortDescription}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-borderDark flex items-center justify-between text-xs font-semibold text-primaryText group-hover:text-accent">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
