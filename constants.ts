

import React from 'react';
import type { Skill, Project, ExperienceItem, Certificate } from './types';
import { MySqlIcon, TensorFlowIcon, PyTorchIcon, PythonIcon, RLangIcon, KerasIcon, OracleIcon, NLTKIcon, FigmaIcon, JupyterIcon, GoogleSheetsIcon, KaggleIcon, TableauIcon, ScikitLearnIcon  } from './components/icons';

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
  { name: 'Google Sheet', icon: React.createElement(GoogleSheetsIcon, { className: "w-8 h-8" }) },
  { name: 'Kaggle', icon: React.createElement(KaggleIcon, { className: "w-8 h-8" }) },
  { name: 'Tableau', icon: React.createElement(TableauIcon, { className: "w-8 h-8" }) },
  { name: 'ScikitLearn', icon: React.createElement(ScikitLearnIcon, { className: "w-8 h-8" }) },
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
    year: 'May 2025 - Present',
    title: 'Volunteer Staff',
    company: 'Informatika UMM - Malang',
    points: [
      'I assist in processing and managing data to make it easier to understand and utilize for academic purposes.',
    ],
  },
  {
    year: 'Jul 2022 - Present',
    title: 'Laboratory Assistant',
    company: 'Infotech UMM - Malang',
    points: [
      'Author E-Learning Basic Programming, Data Mining, and Machine Learning',
      'Assisted the practicum activities by teaching the practitioners the material contained in the module.',
    ],
  },
    {
    year: 'Dec 2022 - Jul 2024',
    title: 'Social Media Division',
    company: 'Infotech UMM - Malang',
    points: ["As an assistant member of the social media division, I play a role in helping to make rewind videos, content creators and interact with users on Labit UMM's Instagram. I am experienced in editing videos using the Capcut application, creating designs for quotes posters and managing Labit UMM accounts."]
  },
  {
    year: 'Dec 2023 - Jan 2024',
    title: 'Treasurer Infotech UMM',
    company: 'Infotech UMM - Malang',
    points: ["Carry out including controlling the event treasurer's budget, managing all Infotech finances / budgets, financial transparency every month, creating a treasury process flow and determining consumption for each activity"]
  },
    {
    year: 'Feb 2025 - Jun 2025',
    title: 'Web Content Manager',
    company: 'LPPI UMM - Malang',
    points: [
      "As a freelance Web Content Manager for a campus website (ICON-TINE, ICMEDH, INCLAR) built on WordPress, I am responsible for managing and updating various content, including announcements, academic schedules, and other important information. I organize the page structure for better navigation, edit content to ensure consistency and responsiveness across devices, and keep all published information up to date. Additionally, I coordinate with campus staff for timely content publication and perform basic optimization to ensure the website is accessible and user-friendly."
    
    ],
  },
  {
    year: 'Jul 2022 - Sep 2024',
    title: 'Academic Support',
    company: 'PT NyanHosting Solusi Website - Malang',
    points: [
      "Customer Support for NyanHosting, providing assistance to customers in managing their hosting and domain services.",
      "Social Media Management for NyanHosting, creating content and managing interactions on social media platforms.",
    ],
  },
  {
    year: 'Feb 2024 - Jul 2024',
    title: 'Machine Learning Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    points: [
      'Learned the basics of machine learning, including data collection, cleaning, processing, and visualization.',
      'Gained proficiency in building AI models such as CNNs, RNNs, and NLP applications through extensive online courses.',
      'Completed daily practice assignments and exercises with weekly deadlines, ensuring a consistent learning pace and thorough understanding of the material.',
      'Developed a deeper understanding of complex machine learning algorithms and their real-world applications.',
      'Implemented various techniques to solve challenging problems effectively.',
      'ENhanced my mindset and management skills, focusing on daily life organization and productivity.',
      'Trained in critical thinking and problem-solving, preparing for a successful career in tech.',
      'Learned how to better prepare for entering the professional world through guidance from industry experts.',
      'Collaborated in a team to develop an application (Product Track) aimed at preventing stunting in children from the womb, particularly benefiting pregnant women.',
      'Applied machine learning knowledge to create a solution that positively impacts the community.'
    ],
  },
  {
    year: 'Jan 2024 - Apr 2024',
    title: 'Data Audio Reviewer',
    company: 'Vokal AI - South Jakarta',
    points: [
      'Annotating Data Audio for the Ngaji.AI application, ensuring high-quality datasets for training and testing AI models.',
    ],
  },
  {
    year: 'Nov 2023 - Dec 2023',
    title: 'Assistant Product Manager',
    company: 'Vokal AI - South Jakarta',
    points: [
      'Assisted the Product Manager in organizing a team of interns, including Mobile Developers, Backend Developers, and Quality Assurance, to develop and enhance the Ngaji.AI application.',
      'Developed feature flows by creating use case diagrams and detailed use case reports.',
      'Designed user interfaces with the team using Figma, translating feature flows into intuitive and functional UI designs.',
    ],
  },
  {
    year: 'Aug 2023 - Dec 2023',
    title: 'Data Collecting',
    company: 'Vokal AI - South Jakarta',
    points: [
      'Collected and processed data for the Ngaji.AI application, ensuring high-quality datasets for training and testing AI models.',
    ],
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    title: 'Advanced Deployment Scenarios With Tensorflow',
    imageUrl: 'certificates/Advanced deployment scenarios with tensorflow.jpeg',
  },
  {
    title: 'Analyze Data to Answer Questions',
    imageUrl: 'certificates/Analyze Data to Answer Questions.jpeg',
  },
  {
    title: 'Browser-based Models with TensorFlow.js',
    imageUrl: 'certificates/Browser-based Models with TensorFlowjs.jpeg',
  },
  {
    title: 'Calculus for Machine Learning and Data Science',
    imageUrl: 'certificates/Calculus for Machine Learning and Data Science.jpeg',
  },
   {
    title: 'Code Yourself! An Introduction to Programming',
    imageUrl: 'certificates/Code Yourself! An Introduction to Programming.png',
  },
  {
    title: 'Convolutional Neural Networks in TensorFlow',
    imageUrl: 'certificates/Convolutional Neural Networks in TensorFlow.jpeg',
  },
  {
    title: 'Crash Course on Python',
    imageUrl: 'certificates/Crash Course on Python.jpeg',
  },
  {
    title: 'Custom and Distributed Training with TensorFlow',
    imageUrl: 'certificates/Custom and Distributed Training with TensorFlow.jpeg',
  },
  {
    title: 'Custom Models, Layers, and Loss Functions with TensorFlow',
    imageUrl: 'certificates/Custom Models, Layers, and Loss Functions with TensorFlow.jpeg',
  },
  {
    title: 'Data Pipelines with TensorFlow Data Services',
    imageUrl: 'certificates/Data Pipelines with TensorFlow Data Services.jpeg',
  },
  {
    title: 'DeepLearning.AI Tensorflow Developer',
    imageUrl: 'certificates/DeepLearning.AI Tensorflow Developer.jpeg',
  },
  {
    title: 'Device-based Models with TensorFlow Lite',
    imageUrl: 'certificates/Device-based Models with TensorFlow Lite.jpeg',
  },
  {
    title: 'Learning Analysis Data with Python',
    imageUrl: 'certificates/Dicoding.png',
  },
  {
    title: 'Generative AI for Everyone',
    imageUrl: 'certificates/Generative AI for Everyone.jpeg',
  },
  {
    title: 'Get Started with Python',
    imageUrl: 'certificates/Get Started with Python.jpeg',
  },{
    title: 'Introduction to Git and Github',
    imageUrl: 'certificates/Introduction to Git and Github.jpeg',
  },{
    title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
    imageUrl: 'certificates/Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning.jpeg',
  },{
    title: 'Linear Algebra for Machine Learning and Data Science',
    imageUrl: 'certificates/Linear Algebra for Machine Learning and Data Science.jpeg',
  },{
    title: 'Machine Learning',
    imageUrl: 'certificates/Machine Learning.jpeg',
  },{
    title: 'Managing Emotions in Times of Uncertainty & Stress',
    imageUrl: 'certificates/Managing Emotions in Times of UncertaintyStress.png',
  },{
    title: 'Mathematics for Machine Learning and Data Science',
    imageUrl: 'certificates/Mathematics for Machine Learning and Data Science.jpeg',
  },{
    title: 'Natural Language Processing in TensorFlow',
    imageUrl: 'certificates/Natural Language Processing in TensorFlow.jpeg',
  },{
    title: 'Probability and Statistics for Machine Learning and Data Science',
    imageUrl: 'certificates/Probability & Statistics for Machine Learning & Data Science.jpeg',
  },{
    title: 'Process Data from Dirty to Clean',
    imageUrl: 'certificates/Process Data from Dirty to Clean.jpeg',
  },{
    title: 'Sequence, Time Series and Prediction',
    imageUrl: 'certificates/Sequences, Time Series and Prediction.jpeg',
  },{
    title: 'Share Data Through the Art of Visualization',
    imageUrl: 'certificates/Share Data Through the Art of Visualization.jpeg',
  },{
    title: 'Structuring Machine Learning Projects',
    imageUrl: 'certificates/Structuring Machine Learning Projects.jpeg',
  },{
    title: 'TensorFlow Advanced Techniques',
    imageUrl: 'certificates/TensorFlow Advanced Techniques.jpeg',
  },{
    title: 'TensorFlow Data and Deployment',
    imageUrl: 'certificates/TensorFlow Data and Deployment.jpeg',
  },
  {
    title: 'Using Python to Interact with the Operating System',
    imageUrl: 'certificates/Using Python to Interact with the Operating System.jpeg',
  }
];
