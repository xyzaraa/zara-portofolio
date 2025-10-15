

import React from 'react';
import type { Skill, Project, ExperienceItem, Certificate } from './types';
import { MySqlIcon, TensorFlowIcon, PyTorchIcon, PythonIcon, KerasIcon, OracleIcon, NLTKIcon, FigmaIcon, JupyterIcon, GoogleSheetsIcon, KaggleIcon, TableauIcon, ScikitLearnIcon } from './components/icons';

export const SKILLS_DATA: Skill[] = [
  { name: 'MySQL', icon: React.createElement(MySqlIcon, { className: "w-8 h-8" }) },
  { name: 'Tensorflow', icon: React.createElement(TensorFlowIcon, { className: "w-8 h-8" }) },
  { name: 'PyTorch', icon: React.createElement(PyTorchIcon, { className: "w-8 h-8" }) },
  { name: 'Python', icon: React.createElement(PythonIcon, { className: "w-8 h-8" }) },
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
  'Analysis',
  'System Recommender',
  'Prediction',
  'Classification'
];

export const PROJECTS_DATA: Project[] = [
    {
    id: 1,
    title: 'Diabetic Retinopathy Classification',
    category: 'Classification',
    imageUrl: 'images/Diabetic Retinopathy.png',
    githubUrl: 'https://github.com/xyzaraa/diabetic-retinopathy-classification',
    methodology: [
      {
        title: 'Data Acquisition and Setup',
        description: 'Import dataset from Kaggle APTOS 2019 Diabetic Retinopathy (224x224) .'
      },
      {
        title: 'Data Preprocessing and Cleaning',
        description: 'Apply CLAHE and Gaussian Blur to enhance image quality and reduce noise.'
      },
      {
        title: 'Training Model Resnet50',
        description: 'Utilize transfer learning with ResNet50 architecture, fine-tuning the model for diabetic retinopathy classification.'
      },
      {
        title: 'Model Evaluation',
        description: 'Evaluate model performance using error analysis, accuracy, precision, recall, and F1-score metrics.'
      },
    ],
    readmeUrl: 'readme/README-dr.md',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    language: 'Python'
  },
  {
    id: 2,
    title: 'Steam Game Data',
    category: 'Analysis',
    imageUrl: 'images/Steam Game.jpg',
    githubUrl: 'https://github.com/xyzaraa/steam-game-analysis',
    methodology: [
      {
        title: 'Data Acquisition and Setup',
        description: 'Imported essential Python libraries and loaded the game data from Kaggle into a DataFrame.'
      },
      {
        title: 'Data Preprocessing and Cleaning',
        description: 'Checked the dataset structure for completeness and quality, verifying data types, identifying missing values, and converting the release_date column to datetime objects.'
      },
      {
        title: 'Exploratory Data Analysis (EDA)',
        description: 'Calculated and visualized the correlation matrix between numerical variables and analyzed outliers in fields like price and estimated downloads.'
      },
      {
        title: 'Key Metric Analysis',
        description: 'Generated visualizations to determine the Top 10 most downloaded games (by rating), the most prevalent genres among these high-rated games (Action, FPS, Tactical), and the most common supported operating systems.'
      },
      {
        title: 'Performance-Difficulty Correlation',
        description: 'Analyzed the relationship between game difficulty and average performance (rating and estimated downloads) to identify a "sweet spot" for optimal engagement.'
      },
      {
        title: 'Conclusion and Strategic Insights',
        description: 'Summarized findings, concluding that gamers show a strong market preference for challenging, action-oriented games (difficulty around 4.0), which provides a promising strategy for developers.'
      }
    ],
    readmeUrl: 'readme/README-steamgame.md',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    language: 'Python'
  },
  {
    id: 3,
    title: 'Stock Market Data',
    category: 'Prediction',
    imageUrl: 'images/Stock Market.jpg',
    githubUrl: 'https://github.com/xyzaraa/trade-analysis',
    methodology: [
      { title: 'Data Acquisition', description: 'Imported essential Python libraries (pandas, numpy, seaborn, matplotlib) and loaded the game data from Kaggle into a DataFrame.' },
      {
        title: 'Data Preprocessing and Cleaning',
        description: 'Checked the dataset structure for completeness and quality, verifying data types, and identifying missing values.'
      },
      { title: 'Explanatory Data Analysis', description: 'Calculated and visualized the correlation plot between variables.' },
      { title: 'Modelling', description: 'Using a regressor model to predict the stock closing prices.' }
    ],
    readmeUrl: 'readme/README-trade.md',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    language: 'Python'
  },
  {
    id: 4,
    title: 'Bike Rental Analysis',
    category: 'Analysis',
    imageUrl: 'images/Bike.jpg',
    githubUrl: 'https://github.com/xyzaraa/analysis_data',
    methodology: [
      {
        title: 'Import Library',
        description: 'Import necessary libraries for data analysis and visualization, including numpy, matplotlib.pyplot, pandas, seaborn, datetime, babel.numbers, and streamlit.'
      },
      {
        title: 'Data Wrangling',
        description: 'Access the data by reading the day.csv and hour.csv files into pandas DataFrames (day_df and hour_df) and inspect their descriptive statistics.'
      },
      {
        title: 'Assessing Data',
        description: 'Check both the day_df and hour_df DataFrames to ensure there are no duplicated data and no missing (NA) values.'
      },
      {
        title: 'Cleaning Data',
        description: 'Change the data types in both DataFrames by converting the dteday column to datetime and categorical columns (season, yr, mnth, holiday, weekday, workingday, weathersit) to categorical type.'
      },
      {
        title: 'Exploratory Data Analysis (EDA)',
        description: 'Perform EDA by grouping data by month, weekday, and weather situation to aggregate maximum, minimum, mean, and total bicycle rental counts and analyze the correlation between wind speed and rental count.'
      },
      {
        title: 'Visualization & Explanatory Analysis',
        description: 'Create visualizations (bar plots and scatter plots) to answer the main data analysis questions regarding rental popularity by day, the influence of wind speed, and the effect of weather conditions on rentals.'
      },
      {
        title: 'Dashboard with Streamlit',
        description: 'Create and run a Streamlit application (bike_sharing_rentals.py) to display the visualizations.'
      }
    ],
    readmeUrl: 'readme/README-bike.md',
    tools: ['Matplotlib', 'Seaborn', 'Streamlit', 'Pandas', 'Plotly'],
    language: 'Python'
  },
  {
    id: 5,
    title: 'Food Nutrition Detection',
    category: 'Classification',
    imageUrl: 'images/Food.jpg',
    githubUrl: 'https://github.com/xyzaraa/machine-learning-cnn',
    methodology: [
      { title: 'Image Dataset', description: 'Collected food images from public datasets and online sources.' },
      { title: 'Preprocessing', description: 'Resized, normalized, and augmented images to improve model generalization.' },
      { title: 'Model Building', description: 'Implemented a Convolutional Neural Network (InceptionV3) with TensorFlow/Keras.' },
      { title: 'Evaluation', description: 'Validated accuracy with test data ' }
    ],
    readmeUrl: 'readme/README-food-nutrition.md',
    tools: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'Numpy', 'Matplotlib', 'PIL'],
    language: 'Python'
  },
  {
    id: 6,
    title: 'Movie-Cartoon Recommender System',
    category: 'System Recommender',
    imageUrl: 'images/Movie.jpg',
    githubUrl: 'https://github.com/xyzaraa/movie-recommender-system',
    methodology: [
      {
        "title": "Data Acquisition and Cleaning",
        "description": "Loaded and merged the MovieLens 'movies' and 'ratings' datasets. Conducted initial data cleaning by checking for duplicates/nulls and dropping unnecessary columns (like userId, timestamp, and rating) for content-based filtering."
      },
      {
        "title": "Data Preprocessing",
        "description": "Cleaned the movie titles by removing the year annotation. The 'genres' column was preprocessed by splitting the pipe-separated string into a list of individual genres for better feature representation."
      },
      {
        "title": "Feature Engineering (TF-IDF)",
        "description": "Applied TF-IDF Vectorizer to convert the movie titles and the processed genres into separate feature matrices. These matrices were then horizontally stacked to create a combined feature vector for the similarity model."
      },
      {
        "title": "Model Implementation",
        "description": "A **NearestNeighbors (NN)** model from scikit-learn was trained on the combined TF-IDF matrix. **Cosine similarity** was chosen as the distance metric, implemented with a **brute-force** algorithm, to find content-based matches."
      },
      {
        "title": "Recommendation and Evaluation",
        "description": "A custom function, `recommend_movies`, was created to retrieve and display the top N closest movie recommendations based on the calculated cosine distance, successfully generating a content-based recommendation list."
      }
    ],
    readmeUrl: 'readme/README-cbrs-movie.md',
    tools: ['Python', 'Pandas', 'NumPy'],
    language: 'Python'
  },
  {
    id: 7,
    title: 'Spotify Data Analysis',
    category: 'Analysis',
    imageUrl: 'images/spotify.jpg',
    githubUrl: 'https://github.com/xyzaraa/spotify-analysis',
    methodology: [
      { title: 'Data Wrangling', description: 'Cleaned and structured raw Spotify dataset.' },
      { title: 'Feature Extraction', description: 'Derived features like tempo, energy, and acousticness.' },
      { title: 'Model Training', description: 'Applied classification algorithms such as Decision Trees and SVM.' },
      { title: 'Visualization', description: 'Built graphs to analyze trends and outcomes.' }
    ],
    readmeUrl: '#',
    tools: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn'],
    language: 'Python'
  },
  {
    id: 8,
    title: 'Twitter (X) Sentiment Analysis',
    category: 'Analysis',
    imageUrl: 'images/Sentiment X.jpg',
    githubUrl: 'https://github.com/xyzaraa/NLP-sentiment-analysis',
    methodology: [
      {
        "title": "Data Loading and Structuring",
        "description": "Loaded the Twitter training and validation datasets by unpacking the 'archive.zip' file. Corrected the DataFrame column structure by dropping extraneous columns and assigning appropriate headers for further analysis."
      },
      {
        "title": "Text Cleaning and Sentiment Labeling",
        "description": "Cleaned the tweet content by converting text to lowercase, removing non-word characters and digits, and stripping whitespace. Used the TextBlob library to calculate the polarity score for each cleaned tweet and assigned a categorical sentiment label ('positive,' 'negative,' or 'neutral') based on predefined thresholds."
      },
      {
        "title": "Exploratory Visualization",
        "description": "Analyzed the overall distribution of the newly calculated sentiment labels using a count plot. Generated a Word Cloud visualization specifically for the negative sentiment tweets to identify the most frequent terms before formal topic modeling."
      },
      {
        "title": "Topic Modeling Preprocessing",
        "description": "Further preprocessed the negative sentiment tweets by tokenizing the text and removing common English stop words (using the `STOPWORDS` set). A Gensim Dictionary and Corpus (Bag-of-Words format) were created from the tokenized data in preparation for LDA modeling."
      },
      {
        "title": "Latent Dirichlet Allocation (LDA) Modeling",
        "description": "Trained an LDA model using `gensim.models.LdaMulticore` with 5 topics on the processed negative sentiment corpus to discover underlying themes and discussions within the negative tweets."
      },
      {
        "title": "Topic Model Visualization",
        "description": "The fitted LDA model was evaluated and visualized using the pyLDAvis tool to provide an interactive interface for interpreting the discovered topics, their inter-topic distance, and the top terms associated with each."
      }
    ],
    readmeUrl: 'readme/README-twitter.md',
    tools: ['NLTK', 'TensorFlow', 'Keras', 'PyLDAvis', 'Gensim', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'TextBlob'],
    language: 'Python'
  },
  {
    id: 9,
    title: 'Hotel Analysis',
    category: 'Analysis',
    imageUrl: 'images/hotel.jpg',
    githubUrl: 'https://github.com/xyzaraa/hotel_analysis',
    methodology: [
      {
        title: 'Data Acquisition and Preparation',
        description: 'The hotel booking dataset was acquired. Data cleaning was performed, including handling missing values, standardizing formats, and removing anomalies to ensure data quality.'
      },
      {
        title: 'Exploratory Data Analysis (EDA)',
        description: 'Conducted a thorough analysis to uncover key patterns in booking trends, Average Daily Rate (ADR), customer types, and cancellation rates, visualized through various charts.'
      },
      {
        title: 'Feature Engineering and Selection',
        description: 'Relevant new features were created and the most impactful variables were selected to enhance the performance of the predictive model, focusing on factors influencing cancellations.'
      },
      {
        title: 'Predictive Model Development',
        description: 'Various classification algorithms were implemented and trained to predict hotel booking cancellations, with models being tuned for optimal performance.'
      },
      {
        title: 'Model Evaluation and Interpretation',
        description: 'Model performance was evaluated using metrics such as accuracy, precision, and recall, followed by interpreting the results to derive actionable business insights and recommendations.'
      }
    ],
    readmeUrl: 'readme/README-hotel.md',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib', 'XGBoost', 'CatBoost'],
    language: 'Python'
  },
  {
    id: 10,
    title: 'Mobile Phone Price Prediction',
    category: 'Prediction',
    imageUrl: 'images/Mobile Phone.jpg',
    githubUrl: 'https://github.com/xyzaraa/phone-price-prediction',
    methodology: [
      {
        "title": "Data Acquisition and Initial Exploration",
        "description": "The 'mobile.csv' dataset was loaded, followed by an initial check for its structure, missing values, and basic descriptive statistics of key numerical columns like 'Spec Score', 'rating', and 'price'."
      },
      {
        "title": "Data Cleaning and Outlier Treatment",
        "description": "Outliers in the 'Spec Score' column were identified and capped at the lower bound (60.0) using the Interquartile Range (IQR) method. The sparse 'fm' column was dropped, and missing values in text-based features like 'storage', 'processor', and 'battery' were imputed with 'Unknown'."
      },
      {
        "title": "Feature Engineering and Selection",
        "description": "New numerical features, including 'Battery\_mAh', 'Display\_Inches', 'Camera\_MP', 'RAM\_GB', and 'Internal\_Storage\_GB', were extracted from text columns. Categorical features for 'Processor\_Brand' and 'Version\_Main' were also engineered. A final set of 7 numerical and 5 categorical features was selected for modeling."
      },
      {
        "title": "Data Splitting and Preprocessing Pipeline",
        "description": "The dataset was split into 80% training and 20% testing sets. Preprocessing pipelines were established using `SimpleImputer` (median for numerical, most frequent for categorical), `StandardScaler` for numerical features, and `OneHotEncoder` for categorical features."
      },
      {
        "title": "Model Implementation and Training",
        "description": "Two machine learning models, **Linear Regression** and **XGBoost Regressor**, were implemented and trained using the defined preprocessing pipelines."
      },
      {
        "title": "Performance Evaluation",
        "description": "Both models were evaluated on the test set using multiple regression metrics, including **Mean Absolute Error (MAE)**, **Mean Squared Error (MSE)**, **Root Mean Squared Error (RMSE)**, and the **R-squared (R2) Score**."
      }
    ],
    readmeUrl: 'readme/README-phone.md',
    tools: ['Python', 'Seaborn', 'NumPy', 'Matplotlib', 'Pandas', 'Linear Regression', 'XGBoost'],
    language: 'Python'
  }
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
