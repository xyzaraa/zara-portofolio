import React from 'react';
import { AreaOfInterest, Project, ProfileInfo, Hobby } from './types';

export const PROFILE_INFO: ProfileInfo = {
  name: "Kiara Azzahra", // Used in Header
  title: "Data Scientist & Machine Learning Enthusiast", // Used in Header
  introduction: "I'm a passionate data scientist with 2 years of experience in transforming raw data into actionable insights. My expertise lies in machine learning, statistical modeling, and data visualization.",
  experienceDetails: "I hold a Bachelor's degree in Data Science from Universitas Muhammadiyah Malang and have worked with companies in South Jakarta. My approach combines technical rigor with creative problem-solving to deliver impactful solutions.",
  skills: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Tableau', 'Scikit-learn'],
  resumeUrl: "https://kiaraazzahra.com/files/%28newest%29%20CV%20Kiara%20Azzahra.pdf", // Placeholder URL for the resume
  profileImageUrl: "https://ik.imagekit.io/bly37h3bc/nyan_1750177212811_sUrybre2Z.jpg", // Retained

};

export const AREAS_OF_INTEREST: AreaOfInterest[] = [
  {
    id: '1',
    title: 'Machine Learning',
    description: 'Developing predictive models for classification, regression, and clustering. Experience with Scikit-learn, TensorFlow, and Keras.',
    icon: <span role="img" aria-label="brain" className="text-4xl">🧠</span>,
  },
  {
    id: '2',
    title: 'Data Visualization',
    description: 'Creating insightful and interactive visualizations using tools like Matplotlib, Seaborn, Plotly, and Tableau to communicate complex data stories effectively.',
    icon: <span role="img" aria-label="bar chart" className="text-4xl">📊</span>,
  },
  {
    id: '3',
    title: 'Statistical Analysis',
    description: 'Applying statistical methods for hypothesis testing, A/B testing, and deriving meaningful insights from data distributions and relationships.',
    icon: <span role="img" aria-label="chart increasing" className="text-4xl">📈</span>,
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Utilizing Python with libraries like Pandas, NumPy, and SciPy for data manipulation, cleaning, analysis, and model implementation.',
    icon: <span role="img" aria-label="snake" className="text-4xl">🐍</span>,
  },
];

export const LATEST_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Spotify Data Analysis',
    date: 'December 2024',
    description: 'This project analyzes a Spotify dataset to uncover insights about songs, artists, and trends in music preferences. By examining various attributes and patterns, the analysis provides a deeper understanding of what makes tracks popular and how different features contribute to their success.',
    imageUrl: '/image/spotify.jpg',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Analysis'],
    projectUrl: 'https://github.com/xyzaraa/spotify-analysis',
  },
  {
    id: '2',
    title: 'Hotel Analysis',
    date: 'January 2025',
    description: 'This project aims to analyze hotel reservation data that can be used to explore the determinants of hotel management success as well as consumer trends and behavior. These factors can generate certain patterns that can help hotel managers or related parties to increase consumer booking/reservation rates.',
    imageUrl: '/image/building-66789_1280.jpg',
    tags: ['Python', 'XGBoost', 'CatBoost', 'KNeighbors Classifier'],
    projectUrl: 'https://github.com/xyzaraa/hotel_analysis', 
  },
  {
    id: '3',
    title: 'Food Nutrition Detection from Images',
    date: 'June 2024',
    description: 'This project utilizes InceptionV3 to classify food images and generate corresponding nutritional information based on model predictions. It aims to assist users in understanding the nutritional content of their meals through image-based food recognition.',
    imageUrl: '/image/cereals-563796_1280.jpg',
    tags: ['Python','CNN' ,'InceptionV3', 'Classification'],
    projectUrl: 'https://github.com/xyzaraa/machine-learning-cnn'
  },
    {
    id: '4',
    title: 'Movie-Cartoon Recommender System (CBRS)',
    date: 'January 2025',
    description: 'This project implements a content-based Movie Recommender System that suggests movies based on genre similarity. By analyzing the genres of movies a user has liked, the system recommends other films with similar characteristics.',
    imageUrl: 'image/tv-5837826_1280.jpg',
    tags: ['Python','KNN' ,'System Recommender'],
    projectUrl: 'https://github.com/xyzaraa/movie-recommender-system'
  },
  {
    id: '5',
    title: 'Twitter (X) Sentiment Analysis',
    date: 'June 2024',
    description: 'This project builds a topic modeling system using Latent Dirichlet Allocation (LDA) to analyze sentiment-related themes from Twitter data. It is based on various references and uses a sentiment dataset sourced from Kaggle.',
    imageUrl: '/image/twitter-1795652_1280.jpg',
    tags: ['Python', 'Sentiment Analysis', 'LDA', 'NLP'],
    projectUrl: 'https://github.com/xyzaraa/NLP-twitter-sentiment', 
  },
    {
    id: '6',
    title: 'Bike Rental Analysis',
    date: 'March 2024',
    description: 'This project analyzes bike rental demand using machine learning techniques. By leveraging historical bike sharing data, the model aims to predict rental counts based on factors such as weather conditions, time of day, and seasonal patterns.',
    imageUrl: '/image/girls-4582899_1280.jpg',
    tags: ['Python','Streamlit', 'Analysis'],
    projectUrl: 'https://github.com/xyzaraa/analysis_data', 
  },
  {
    id: '7',
    title: 'Stock Data June 2025 Analysis',
    date: 'June 2025',
    description: "We've built and compared Random Forest and XGBoost models for highly accurate stock closing price predictions. See the insights on market dynamics and model performance!",
    imageUrl: 'image/stock-market-6368031_1280.jpg',
    tags: ['Python', 'Analysis', 'Random Forest', 'XGBoost'],
    projectUrl: 'https://github.com/xyzaraa/trade-analysis', 
  },
   {
    id: '8',
    title: 'Mobile Phone Price Prediction',
    date: 'July 2025',
    description: 'This project predicts mobile phone prices using machine learning, involving data cleaning, feature engineering, and model evaluation with Linear Regression and XGBoost on a scraped dataset.',
    imageUrl: 'image/hands-1851218_1280.jpg',
    tags: ['Python', 'Analysis', 'Linear Regression', 'XGBoost'],
    projectUrl: 'https://github.com/xyzaraa/phone-price-prediction', 
  },
  {
    id: '9',
    title: 'Steam Game Analysis and System Recommender',
    date: 'July 2025',
    description: 'This project performs an EDA on Steam game data to uncover insights related to game performance, user preferences, and the impact of various game attributes.',
    imageUrl: '/image/xbox-2606608_1280.jpg',
    tags: ['Python', 'Analysis', 'Recommender System', 'Random Forest'],
    projectUrl: 'https://github.com/xyzaraa/steam-game-analysis', 
  }
];

export const HOBBIES: Hobby[] = [
  {
    id: 'h1',
    name: 'Listen to Music',
    description: 'Listening to music helps me to do everything, because music can affect the mood to do a things.',
    icon: <span role="img" aria-label="artist palette" className="text-4xl">🎧</span>,
  },
  {
    id: 'h2',
    name: 'Playing Games',
    description: "I love playing games like Valorant and Roblox when the world feels like it's about to collapse and is too complicated.",
    icon: <span role="img" aria-label="video game controller" className="text-4xl">🎮</span>,
  },
  {
    id: 'h3',
    name: 'Creative Writing',
    description: 'I actually want to be a writer, but i was never publish it to anyone except for myself.',
    icon: <span role="img" aria-label="writing hand" className="text-4xl">✍️</span>,
  },
  {
    id: 'h4',
    name: 'Nature-Inspired Sentiment',
    description: 'I love nature walks such as climbing mountains, playing on the beach, and enjoying the endless view of the vast sky.',
    icon: <span role="img" aria-label="camera with flash" className="text-4xl">🍃</span>,
  },
];