

import React from 'react';
import type { Skill, Project, ExperienceItem, Certificate } from './types';
import { MySqlIcon, TensorFlowIcon, PyTorchIcon, PythonIcon, RLangIcon, KerasIcon, OracleIcon, NLTKIcon, FigmaIcon, JupyterIcon } from './components/icons';

export const SKILLS_DATA: Skill[] = [
  { name: 'MySQL', icon: React.createElement(MySqlIcon, { className: "w-8 h-8" }) },
  { name: 'Tensorflow', icon: React.createElement(TensorFlowIcon, { className: "w-8 h-8" }) },
  { name: 'PyTorch', icon: React.createElement(PyTorchIcon, { className: "w-8 h-8" }) },
  { name: 'Python', icon: React.createElement(PythonIcon, { className: "w-8 h-8" }) },
  { name: 'R', icon: React.createElement(RLangIcon, { className: "w-8 h-8" }) },
  { name: 'Keras', icon: React.createElement(KerasIcon, { className: "w-8 h-8" }) },
  { name: 'Oracle', icon: React.createElement(OracleIcon, { className: "w-8 h-8" }) },
  { name: 'NLTK', icon: React.createElement(NLTKIcon, { className: "w-8 h-8" }) },
  { name: 'Figma', icon: React.createElement(FigmaIcon, { className: "w-8 h-8" }) },
  { name: 'Jupyter', icon: React.createElement(JupyterIcon, { className: "w-8 h-8" }) },
];

export const PROJECT_CATEGORIES: string[] = [
  'All Categories',
  'System Recommender',
  'Prediction',
  'Classification'
];

export const PROJECTS_DATA: Project[] = [
  { title: 'Steam Game Data', category: 'System Recommender', imageUrl: 'images/Steam Game.jpg', projectUrl: 'https://github.com/xyzaraa/steam-game-analysis'},
  { title: 'Stock Market Data', category: 'Prediction', imageUrl: 'images/Stock Market.jpg', projectUrl: 'https://github.com/xyzaraa/trade-analysis'},
  { title: 'Bike Rental Analysis', category: 'Classification', imageUrl: 'images/Bike.jpg', projectUrl: 'https://github.com/xyzaraa/analysis_data'},
  { title: 'Food Nutrition Detection', category: 'Classification', imageUrl: 'images/Food.jpg', projectUrl: 'https://github.com/xyzaraa/machine-learning-cnn'},
  { title: 'Movie-Cartoon Recommender System', category: 'System Recommender', imageUrl: 'images/Movie.jpg', projectUrl: 'https://github.com/xyzaraa/movie-recommender-system'},
  { title: 'Spotify Data Analysis', category: 'Classification', imageUrl: 'images/spotify.jpg', projectUrl: 'https://github.com/xyzaraa/spotify-analysis'},
  { title: 'Twitter (X) Sentiment Analysis', category: 'Classification', imageUrl: 'images/Sentiment X.jpg', projectUrl: 'https://github.com/xyzaraa/NLP-sentiment-analysis'},
  { title: 'Hotel Analysis', category: 'Prediction', imageUrl: 'images/hotel.jpg', projectUrl: 'https://github.com/xyzaraa/hotel_analysis'},
  { title: 'Mobile Phone Price Prediction', category: 'Prediction', imageUrl: 'images/Mobile Phone.jpg', projectUrl: 'https://github.com/xyzaraa/phone-price-prediction'},
];


export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    year: '2022 - Present',
    title: 'Laboratory Assistant',
    company: 'Infotech UMM - Malang',
    points: [
      'Author E-Learning Basic Programming, Data Mining, and Machine Learning',
      'Assisted the practicum activities by teaching the practitioners the material contained in the module.',
    ],
  },
  {
    year: '2023',
    title: 'Assistant Product Manager',
    company: 'Vokal AI - South Jakarta',
    points: [
      'Assisted the Product Manager in organizing a team of interns, including Mobile Developers, Backend Developers, and Quality Assurance, to develop and enhance the Ngaji.AI application.',
      'Developed feature flows by creating use case diagrams and detailed use case reports.',
      'Designed user interfaces with the team using Figma, translating feature flows into intuitive and functional UI designs.',
    ],
  },
    {
    year: '2023',
    title: 'Web Content Manager',
    company: 'LPPI UMM - Malang',
    points: [
      'Assisted the Product Manager in organizing a team of interns, including Mobile Developers, Backend Developers, and Quality Assurance, to develop and enhance the Ngaji.AI application.',
      'Developed feature flows by creating use case diagrams and detailed use case reports.',
      'Designed user interfaces with the team using Figma, translating feature flows into intuitive and functional UI designs.',
    ],
  },
  {
    year: '2023',
    title: 'Machine Learning Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    points: [
      'Learned the basics of machine learning, including data collection, cleaning, processing, and visualization.',
      'Gained proficiency in building AI models such as CNNs, RNNs, and NLP applications through extensive online courses.',
      'Completed daily practice assignments and exercises with weekly deadlines, ensuring a consistent learning pace and thorough understanding of the material.',
      'Developed a deeper understanding of complex machine learning algorithms and their real-world applications.',
    ],
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    title: 'Machine Learning Specialization',
    imageUrl: 'https://placehold.co/1200x800/303632/EAEAEA/png?text=Certificate+1',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    imageUrl: 'https://placehold.co/1200x800/303632/EAEAEA/png?text=Certificate+2',
  },
  {
    title: 'Advanced SQL for Data Scientists',
    imageUrl: 'https://placehold.co/1200x800/303632/EAEAEA/png?text=Certificate+3',
  },
];
