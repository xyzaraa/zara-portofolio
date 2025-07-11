import React from 'react';

export interface AreaOfInterest {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  projectUrl?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  introduction: string;
  experienceDetails: string;
  skills: string[];
  resumeUrl: string;
  profileImageUrl: string; // Retained for potential use elsewhere, e.g., header or OpenGraph tags
  };

export interface Hobby {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}