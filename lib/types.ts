export interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  caseStudyUrl?: string;
  liveUrl?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tooling" | "design";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
