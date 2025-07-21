import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
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