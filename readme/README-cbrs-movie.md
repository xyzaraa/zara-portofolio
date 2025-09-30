This project was a practice exercise since it was my very first attempt at building a recommender system. I used the GroupLens dataset (small version for educational purposes) to train a NearestNeighbors (NN) model from scikit-learn.

I began with exploratory data analysis on two files: one containing movie information and the other containing ratings. After ensuring the data was free from null values, duplicates, and other errors, I merged the two datasets for easier processing in the next steps.

For preprocessing, I removed columns that were unnecessary for the final output, stripped year annotations from movie titles, and cleaned up separators in the genres column. Once the dataset was clean, I applied TfIdfVectorizer to transform the text into a matrix format, making it easier for the model to recognize patterns.

For the model, I implemented Nearest Neighbors with cosine similarity as the metric and the brute-force algorithm. After training, I tested the system using a custom recommendation function, where the input parameters are the movie title and the number of closest recommendations to return. The results successfully generated content-based movie recommendations.

