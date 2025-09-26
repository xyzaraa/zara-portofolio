

import React from 'react';
import type { Skill, Project, ExperienceItem, Certificate } from './types';
import { MySqlIcon, TensorFlowIcon, PyTorchIcon, PythonIcon, RLangIcon, KerasIcon, OracleIcon, NLTKIcon, FigmaIcon, JupyterIcon, GoogleSheetsIcon, KaggleIcon, TableauIcon, ScikitLearnIcon } from './components/icons';

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
  {
    id: 1,
    title: 'Steam Game Data',
    category: 'System Recommender',
    imageUrl: 'images/Steam Game.jpg',
    githubUrl: 'https://github.com/xyzaraa/steam-game-analysis',
    description: 'Developed a recommendation system for Steam games. This project analyzes user playtime, game genres, and user reviews to suggest personalized game recommendations. It helps users discover new games that match their preferences, enhancing their gaming experience.',
    gallery: ['images/Steam Game.jpg', 'https://picsum.photos/seed/steam1/800/600', 'https://picsum.photos/seed/steam2/800/600'],
    methodology: [
      { title: 'Data Scraping', description: 'Collected game and user data from the Steam API and public datasets.' },
      { title: 'Feature Engineering', description: 'Created features from raw data to represent user preferences and game characteristics.' },
      { title: 'Collaborative Filtering', description: 'Implemented a collaborative filtering algorithm to find similar users and recommend games.' },
      { title: 'Deployment', description: 'Built a simple web interface to showcase the recommendations.' }
    ],
    tools: ['PyTorch', 'MySQL', 'Jupyter'],
    language: 'Python'
  },
  {
    id: 2,
    title: 'Stock Market Data',
    category: 'Prediction',
    imageUrl: 'images/Stock Market.jpg',
    githubUrl: 'https://github.com/xyzaraa/trade-analysis',
    description: 'This project involves predicting stock market trends using time-series analysis and machine learning models. By analyzing historical stock prices and trading volumes, the model aims to forecast future price movements to assist investors in making informed decisions.',
    gallery: ['images/Stock Market.jpg', 'https://picsum.photos/seed/stock1/800/600', 'https://picsum.photos/seed/stock2/800/600'],
    methodology: [
      { title: 'Data Acquisition', description: 'Fetched historical stock data using financial data APIs.' },
      { title: 'Time-Series Analysis', description: 'Analyzed data for trends, seasonality, and other patterns.' },
      { title: 'Model Implementation', description: 'Used LSTM (Long Short-Term Memory) networks to capture temporal dependencies in the data.' },
      { title: 'Backtesting', description: 'Evaluated the model\'s predictive performance on historical data to simulate real-world trading scenarios.' }
    ],
    tools: ['TensorFlow', 'Keras', 'R'],
    language: 'R'
  },
  {
    id: 3,
    title: 'Bike Rental Analysis',
    category: 'Classification',
    imageUrl: 'images/Bike.jpg',
    githubUrl: 'https://github.com/xyzaraa/analysis_data',
    description: 'A project that predicts bike rental demand based on weather conditions, time of day, and seasonal factors. This helps businesses optimize bike availability and improve customer satisfaction.',
    gallery: ['images/Bike.jpg', 'https://picsum.photos/seed/bike1/800/600', 'https://picsum.photos/seed/bike2/800/600'],
    methodology: [
      { title: 'Data Cleaning', description: 'Processed missing values, duplicates, and inconsistent data from the dataset.' },
      { title: 'Feature Engineering', description: 'Created additional features such as holiday flags, weekend indicators, and temperature ranges.' },
      { title: 'Model Training', description: 'Applied Random Forest and Gradient Boosting models to classify and predict demand.' },
      { title: 'Evaluation', description: 'Measured performance with accuracy and F1-score to validate predictions.' }
    ],
    tools: ['Scikit-learn', 'Matplotlib', 'Seaborn'],
    language: 'Python'
  },
  {
    id: 4,
    title: 'Food Nutrition Detection',
    category: 'Classification',
    imageUrl: 'images/Food.jpg',
    githubUrl: 'https://github.com/xyzaraa/machine-learning-cnn',
    description: 'Built a CNN-based image classifier to detect food types and estimate their nutritional values. This project helps users track calorie intake more easily.',
    gallery: ['images/Food.jpg', 'https://picsum.photos/seed/food1/800/600', 'https://picsum.photos/seed/food2/800/600'],
    methodology: [
      { title: 'Image Dataset', description: 'Collected food images from public datasets and online sources.' },
      { title: 'Preprocessing', description: 'Resized, normalized, and augmented images to improve model generalization.' },
      { title: 'Model Building', description: 'Implemented a Convolutional Neural Network with TensorFlow/Keras.' },
      { title: 'Evaluation', description: 'Validated accuracy with test data and cross-validation.' }
    ],
    tools: ['TensorFlow', 'Keras', 'OpenCV'],
    language: 'Python'
  },
  {
    id: 5,
    title: 'Movie-Cartoon Recommender System',
    category: 'System Recommender',
    imageUrl: 'images/Movie.jpg',
    githubUrl: 'https://github.com/xyzaraa/movie-recommender-system',
    description: 'A hybrid recommendation system suggesting movies and cartoons based on user preferences. Combines collaborative filtering with content-based methods.',
    gallery: ['images/Movie.jpg', 'https://picsum.photos/seed/movie1/800/600', 'https://picsum.photos/seed/movie2/800/600'],
    methodology: [
      { title: 'Data Collection', description: 'Collected ratings and metadata from online databases.' },
      { title: 'Collaborative Filtering', description: 'Recommended items based on user similarity.' },
      { title: 'Content-Based Filtering', description: 'Recommended based on genres, keywords, and features.' },
      { title: 'Hybrid Model', description: 'Combined approaches to improve accuracy.' }
    ],
    tools: ['Python', 'Pandas', 'NumPy'],
    language: 'Python'
  },
  {
    id: 6,
    title: 'Spotify Data Analysis',
    category: 'Classification',
    imageUrl: 'images/spotify.jpg',
    githubUrl: 'https://github.com/xyzaraa/spotify-analysis',
    description: 'Analyzed Spotify datasets to classify songs by genre, mood, and popularity metrics. Provides insights into music trends and user preferences.',
    gallery: ['images/spotify.jpg', 'https://picsum.photos/seed/spotify1/800/600', 'https://picsum.photos/seed/spotify2/800/600'],
    methodology: [
      { title: 'Data Wrangling', description: 'Cleaned and structured raw Spotify dataset.' },
      { title: 'Feature Extraction', description: 'Derived features like tempo, energy, and acousticness.' },
      { title: 'Model Training', description: 'Applied classification algorithms such as Decision Trees and SVM.' },
      { title: 'Visualization', description: 'Built graphs to analyze trends and outcomes.' }
    ],
    tools: ['Python', 'Seaborn', 'Scikit-learn'],
    language: 'Python'
  },
  {
    id: 7,
    title: 'Twitter (X) Sentiment Analysis',
    category: 'Classification',
    imageUrl: 'images/Sentiment X.jpg',
    githubUrl: 'https://github.com/xyzaraa/NLP-sentiment-analysis',
    description: 'A Natural Language Processing (NLP) project that classifies tweets into positive, negative, or neutral sentiments. Useful for social media monitoring and opinion mining.',
    gallery: ['images/Sentiment X.jpg', 'https://picsum.photos/seed/twitter1/800/600', 'https://picsum.photos/seed/twitter2/800/600'],
    methodology: [
      { title: 'Data Collection', description: 'Scraped tweets using Twitter API.' },
      { title: 'Text Preprocessing', description: 'Tokenized, removed stopwords, and applied stemming/lemmatization.' },
      { title: 'Model Training', description: 'Trained Naive Bayes and LSTM models on the cleaned text.' },
      { title: 'Evaluation', description: 'Measured accuracy, precision, recall, and F1-score.' }
    ],
    tools: ['NLTK', 'TensorFlow', 'Keras'],
    language: 'Python'
  },
  {
    id: 8,
    title: 'Hotel Analysis',
    category: 'Prediction',
    imageUrl: 'images/hotel.jpg',
    githubUrl: 'https://github.com/xyzaraa/hotel_analysis',
    description: `Every booking has its own story; every cancellation is a mystery waiting to be solved. As we examine the reservation data, patterns emerge that reflect the complex dynamics between guests, timing, and hotel categories.

Interestingly, during the summer months such as July and August, cancellation rates surge and pose a significant challenge for the management team. One of the most affected is the City Hotel, which experiences a much higher cancellation rate compared to the Resort Hotel. In fact, individual guests—often referred to as Transient Customers, or those who make short-term reservations without being tied to contracts or groups—are the main drivers of cancellations. On the other hand, returning guests tend to be loyal and rarely cancel their reservations.

Moreover, Portugal, being the country with the highest number of customers, also records the most cancellations. This serves as a reminder that understanding customer behavior based on geographical location can open new insights for more effective marketing strategies.

Behind these challenges lies a significant opportunity to maximize revenue. Data shows that the Average Daily Rate (ADR) varies depending on hotel type, season, and customer type. Resort Hotels, for example, enjoy higher ADR, especially during holidays and weekends, creating golden opportunities to boost profits.

Yet, transient customers often both cancel frequently and generate the highest ADR. They are spontaneous guests who pay more for memorable stays. Likewise, special requests—from customized room decorations to specific meal options—bring additional potential to increase ADR.

Another fascinating factor is lead time. The earlier a reservation is made before arrival, the higher the ADR, particularly in Resort Hotels. There is something unique about booking a holiday well in advance, providing hotels with the chance to offer premium packages and personalized experiences.

So, how do we address all of this? Several strategies arise as potential solutions. For example, flexible cancellation policies could help reduce high cancellation rates. Offering incentives such as exclusive discounts or credits for future stays may encourage guests to keep their reservations.

Additionally, adjusting prices based on timing, customer type, and seasonal patterns is crucial for maximizing revenue. Focusing on Transient Customers can be a great opportunity by offering attractive promotions or loyalty programs tailored specifically for them.

Managing special requests is equally important. Imagine providing unique services at a small additional cost—not only satisfying guests but also increasing hotel revenue.

Finally, expanding promotions to countries with lower cancellation rates can help create balance within the guest portfolio.

Behind every reservation lies a story. With the right strategies, each story can become a step forward in elevating the hospitality industry to new heights.`,
    gallery: ['images/hotel.jpg', 'images/hotel-customer-dist.png', 'images/country-cust-hotel.png', 'images/compare-model-hotel.png'],
    methodology: [
      { title: 'Data Preprocessing', description: 'Cleaned hotel booking data and handled missing values.' },
      { title: 'Feature Engineering', description: 'Created additional features like length of stay and lead time.' },
      { title: 'Model Building', description: 'Implemented Logistic Regression and Random Forest for prediction.' },
      { title: 'Evaluation', description: 'Validated predictions with classification report.' }
    ],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib', 'XGBoost', 'CatBoost'],
    language: 'Python'
  },
  {
   id: 9,
title: 'Mobile Phone Price Prediction',
category: 'Prediction',
imageUrl: 'images/Mobile Phone.jpg',
githubUrl: 'https://github.com/xyzaraa/phone-price-prediction',
description: `"This project began with the ambitious goal of predicting mobile phone prices using a variety of their technical specifications. The raw data, obtained through web-scraping, was first analyzed, and it was immediately clear that significant data cleaning work needed to be done. The initial step was addressing the 'Spec Score' outliers; after identifying them using the IQR method, values that were too low (below the lower bound of 60.0) were capped at this number to stabilize the data and maintain the integrity of the distribution.

Next, attention turned to missing values. We found that the 'fm' (FM Radio) column had too many missing entries (725 out of 1019 rows), and we decided to drop this column to avoid sparsity. For other textual columns, such as storage, processor, and battery, missing values were handled by imputation using the 'Unknown' label. Once the basic data was clean, we proceeded to the exploratory phase. The correlation analysis between the logarithmic price ('Log10 Price') and 'Spec Score' showed a clear relationship: the higher the specification score, the higher the phone price, validating our initial assumption.
The dataset, obtained through web scraping, required extensive cleaning before analysis.

The following phase was feature engineering, which converted textual descriptions into useful numerical features. We successfully extracted key values such as Battery_mAh, Display_Inches, Camera_MP, RAM_GB, and Internal_Storage_GB from their respective text columns. Additionally, we created categorical features for Processor_Brand (e.g., 'Snapdragon', 'Dimensity') and Version_Main (e.g., 'Android 15', 'iOS 17'). Missing values in the newly extracted numerical features were imputed using the median of each column.

With this rich feature set, we split the data into training and testing sets (80:20) and tested two regression models: Linear Regression and XGBoost Regressor. After training both models using appropriate preprocessing pipelines (numerical scaling and categorical one-hot encoding), we evaluated their performance. Based on the R2 Score metric, Linear Regression showed slightly better performance with a score of 0.5387, outperforming the XGBoost Regressor which achieved an R2 Score of 0.4023. This suggests that a simpler linear relationship between the existing features and phone price is more dominant in this dataset.`,

gallery: ['images/Mobile Phone.jpg', 'images/phone-graph.png'],
methodology: [
  { title: 'Data Cleaning', description: 'Removed duplicates and normalized feature scales.' },
  { title: 'Feature Engineering', description: 'Extracted useful variables such as brand, storage capacity, and battery size.' },
  { title: 'Model Training', description: 'Trained regression models such as Linear Regression and XGBoost Regressor.' },
  { title: 'Evaluation', description: 'Measured performance with MAE, MSE, RMSE and R² metrics.' }
],
tools: ['Python', 'Seaborn', 'NumPy', 'Matplotlib', 'Pandas', 'Linear Regression', 'XGBoost'],
language: 'Python'

  },
];



export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
    year: 'Jul 2022 - Aug 2025',
    title: 'Laboratory Assistant',
    company: 'Infotech UMM - Malang',
    points: [
      'Author E-Learning Basic Programming, Data Mining, and Machine Learning',
      'Assisted the practicum activities by teaching the practitioners the material contained in the module.',
    ],
  },
  {
    year: 'May 2025 - July 2025',
    title: 'Volunteer Staff',
    company: 'Informatika UMM - Malang',
    points: [
      'I assist in processing and managing data to make it easier to understand and utilize for academic purposes.',
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
      'Enhanced my mindset and management skills, focusing on daily life organization and productivity.',
      'Trained in critical thinking and problem-solving, preparing for a successful career in tech.',
      'Learned how to better prepare for entering the professional world through guidance from industry experts.',
      'Collaborated in a team to develop an application (Product Track) aimed at preventing stunting in children from the womb, particularly benefiting pregnant women.',
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
  }, {
    title: 'Introduction to Git and Github',
    imageUrl: 'certificates/Introduction to Git and Github.jpeg',
  }, {
    title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
    imageUrl: 'certificates/Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning.jpeg',
  }, {
    title: 'Linear Algebra for Machine Learning and Data Science',
    imageUrl: 'certificates/Linear Algebra for Machine Learning and Data Science.jpeg',
  }, {
    title: 'Machine Learning',
    imageUrl: 'certificates/Machine Learning.jpeg',
  }, {
    title: 'Managing Emotions in Times of Uncertainty & Stress',
    imageUrl: 'certificates/Managing Emotions in Times of UncertaintyStress.png',
  }, {
    title: 'Mathematics for Machine Learning and Data Science',
    imageUrl: 'certificates/Mathematics for Machine Learning and Data Science.jpeg',
  }, {
    title: 'Natural Language Processing in TensorFlow',
    imageUrl: 'certificates/Natural Language Processing in TensorFlow.jpeg',
  }, {
    title: 'Probability and Statistics for Machine Learning and Data Science',
    imageUrl: 'certificates/Probability & Statistics for Machine Learning & Data Science.jpeg',
  }, {
    title: 'Process Data from Dirty to Clean',
    imageUrl: 'certificates/Process Data from Dirty to Clean.jpeg',
  }, {
    title: 'Sequence, Time Series and Prediction',
    imageUrl: 'certificates/Sequences, Time Series and Prediction.jpeg',
  }, {
    title: 'Share Data Through the Art of Visualization',
    imageUrl: 'certificates/Share Data Through the Art of Visualization.jpeg',
  }, {
    title: 'Structuring Machine Learning Projects',
    imageUrl: 'certificates/Structuring Machine Learning Projects.jpeg',
  }, {
    title: 'TensorFlow Advanced Techniques',
    imageUrl: 'certificates/TensorFlow Advanced Techniques.jpeg',
  }, {
    title: 'TensorFlow Data and Deployment',
    imageUrl: 'certificates/TensorFlow Data and Deployment.jpeg',
  },
  {
    title: 'Using Python to Interact with the Operating System',
    imageUrl: 'certificates/Using Python to Interact with the Operating System.jpeg',
  }
];
