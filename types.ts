// FIX: Import React types to resolve type conflicts for component prop definitions.
import type React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}
