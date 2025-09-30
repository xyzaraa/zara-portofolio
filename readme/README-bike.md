 ## 1. Project Overview  
This project involves an exploratory data analysis (EDA) of the **Bike Sharing Dataset** to understand various factors influencing bicycle rental patterns in Washington D.C.  

The analysis includes:  
- Data wrangling  
- Checking for missing or duplicated values  
- Data cleaning  
- Visualizations to answer specific business questions  

The main objective is to discover patterns in bike rental behavior and provide insights into how external factors affect rental demand.  

## 2. Data Analysis Questions  
The analysis aims to answer the following key questions:  

1. **During the weekday, which days of the week are bicycle rentals most popular?**  
2. **Does wind speed influence customers to rent bicycles?**  
3. **What kind of weather affects the number of bicycle rentals?**  


## 3. Conclusion  

### Q1: On which days of the week are bicycle rentals most popular?  
- The **peak usage** occurred on **Saturday (weekday code 6)** → weekends are most popular, likely for recreation.  
- The **lowest usage** was on **Monday (weekday code 1)** → possibly due to people returning to work routines.  
- On weekdays (Mon–Fri), the **highest rentals** are typically on **Friday (weekday code 5)**.  


### Q2: Does wind speed influence customers to rent a bicycle?  
- The correlation between **wind speed** and total rentals (**cnt**) is **-0.2345**.  
- This indicates a **weak negative correlation**:  
  - Higher wind speeds → slightly fewer rentals.  
  - The effect is weak, meaning **other factors** (like weather and temperature) have a stronger influence.  


### Q3: What kind of weather affects the number of bicycle rentals?  
- Rentals **decrease significantly** as weather conditions worsen.  

| Weather Condition  | Description   | Avg. Daily Rentals (cnt Mean) |
|--------------------|--------------------------------------|-------------------------------|
| 1                  | Clear, Few clouds, Partly cloudy     | ~4876.79                      |
| 2                  | Mist + Cloudy, Mist + Broken clouds  | ~4035.86                      |
| 3                  | Light Snow, Light Rain + Thunderstorm| ~1803.29                      |

- **Clear weather (1)** → highest rentals (~4876).  
- **Mist (2)** → moderate rentals (~4035).  
- **Light Snow/Rain (3)** → drastic drop (~1803).  

📉 From Mist (2) to Light Snow (3), rentals dropped by ~3000 on average.  

✅ **Conclusion**: Severe weather strongly reduces the number of bike rentals.  

