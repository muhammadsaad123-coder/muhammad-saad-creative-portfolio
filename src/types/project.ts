export type ProjectCategory = 
  | "All Projects"
  | "AI Video Creation"
  | "Promotional Videos"
  | "Social Media Content"
  | "Graphic Design"
  | "Digital Marketing";

export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  secondaryCategory?: string;
  shortDescription: string;
  fullOverview: string;
  objective: string;
  creativeConcept: string;
  responsibilities: string[];
  productionProcess: {
    step: string;
    description: string;
  }[];
  keyCommunicationPoints?: string[];
  toolsUsed: string[];
  thumbnail: string;
  mediaType: "video" | "image";
  aspectRatio: "16:9" | "9:16" | "1:1";
  videoUrl?: string; // Local or external
  videoDuration?: string;
  featured: boolean;
  date: string;
  metricsLabel?: string;
  accentColor?: string;
}
