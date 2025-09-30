import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  githubUrl: string;
  methodology: { title: string; description: string }[];
  readmeUrl: string;
  tools: string[];
  language: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  points: string[];
}

export interface Certificate {
  title: string;
  imageUrl: string;
}