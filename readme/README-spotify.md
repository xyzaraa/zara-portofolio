# Uncovering the Secrets Behind Spotify’s Popular Music

![Logo](Spotify%20Logo.png)

## Overview
Hello! In this project, I had the exciting opportunity to dive into a sea of Spotify data, a dataset that encompasses tens of thousands of songs, complete with various audio features and their corresponding popularity levels. My primary goal was to identify the patterns and characteristics that make a song a hit on this platform.

Here is the journey and the key findings I uncovered.

## The First Step: Understanding and Cleaning the Data
My first step, as always, was Exploratory Data Analysis (EDA) to ensure data quality. I found that this dataset covers over 32,000 songs across six main genres: EDM, Rap, Pop, R&B, Latin, and Rock.

After loading the data, I detected several rows with missing values (NaN) in crucial columns like track_name and track_artist. Although the count was very small—only 5 out of 32,833 total rows—I opted to clean them up to ensure the analysis I performed was truly accurate. I also confirmed that there were no data duplicates, meaning every track I analyzed was unique.

## Audio Feature Correlation: Searching for Hidden Relationships
One of my main focuses was to understand how audio features (such as energy, loudness, and danceability) relate to each other. From the correlation heatmap visualization, I found several interesting points:

- Energy and Loudness: There is a strong positive correlation (0.68) between energy and loudness. This confirms the intuition that songs that sound louder often are perceived to have higher energy intensity.

- Acousticness vs. Energy: Conversely, the acousticness feature has a significant negative correlation with energy (-0.54). This suggests that songs with high acoustic values tend to have lower energy levels, providing a calming or relaxing effect on the listener.

- Danceability and Valence: There is also a fairly positive relationship (0.33) between valence (emotional positivity) and danceability. Songs that are easy to dance to tend to carry a more positive vibe.

## The Evolution of Music Over Time
I then analyzed how music characteristics have evolved over the years by normalizing several audio features, such as energy, acousticness, and valence.

- Genre Shift: The trend of acousticness appears to decline over time, signaling a significant shift away from traditional acoustic music towards electronic or digital music production.

- Mood Change: The most striking feature is valence, which shows a dramatic decrease around the 2010s. This indicates a shift in the mood of popular music towards a more melancholic or emotional direction.

- Vocal Stability: The speechiness and instrumentalness features remained at low levels throughout the years, confirming that most popular music emphasizes vocals and is rarely purely instrumental or speech-based.

- Marketing Insights: Who is the King of Popularity and When is the Best Release Time?
To provide more direct insights, I also sought to find out who the most popular artist is and the optimal moment to release new music.

1. Chart Dominance:
I identified the top 10 artists based on their song popularity. The results showed Tones and I, Arizona Zervas, and Karol G in the top three positions.

A Quick Note: The song "Dance Monkey" by Tones and I truly dominated, as seen in the pie chart that shows the song’s largest contribution to popularity among the top 10 songs.

2. The Golden Time for Music Release:
Intuitively, one might think that releasing many songs early in the year is the best strategy. In fact, while I found that January is the month with the highest number of song releases, the months of November and October actually show the highest average popularity.

This is a crucial insight: quantity does not always align with quality or impact. A clever release strategy in the later months of the year can yield greater popularity.

## Conclusion
Based on these findings, I concluded that the key to popularity on Spotify currently seems to lie in loud and high-energy songs, while maintaining a strong vocal element. Furthermore, timing the release is critical; targeting October or November could be a more effective strategy for maximizing visibility and market reception, rather than flooding the market at the beginning of the year.

This analysis demonstrates how a deep understanding of audio data and market trends can provide a competitive advantage in the music industry.

## Tools and Libraries Used 
- Python
- Pandas
- Matplotlib
- Numpy
- Seaborn 
- Scikit-learn



