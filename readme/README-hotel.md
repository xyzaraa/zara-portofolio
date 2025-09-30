![Cover Image](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Hotel%20Cover%20Github.png?raw=true)

## Project Overview
This project aims to analyze hotel reservation data to explore the key factors influencing hotel management success, as well as consumer trends and behaviors.  

The goals of this project are:  
- Provide insights for more informed decision-making regarding bookings and marketing strategies.  
- Help hotel managers adjust pricing and strategies for high and low seasons.  
- Assist travelers in identifying the best times to book hotels at affordable prices.  

**Dataset**: [Hotel Booking Demand Datasets](https://www.sciencedirect.com/science/article/pii/S2352340918315191#f0010) via [tidytuesday](https://github.com/dslc-io/tidytuesdayR).  
- Two hotel types: **Resort Hotel** and **City Hotel**  
- 31 variables, covering reservations from July 2015 – August 2017  
- Includes both canceled and completed bookings  

**Data Cleaning Steps**:  
- Import data  
- Remove duplicates  
- Check and handle missing values (imputed using column means)  

---

## Exploratory Data Analysis

### Analysis 1: Customer Type Distribution
- 75% of customers are **Transient**, the least common are **Group**.  
- Transient customers are short-term, non-contract bookings—dominant due to online platforms and independent travel.  

![Customer Type](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Distribusi_Tipe_Customer.png?raw=true)

---

### Analysis 2: Reservation Status per Hotel
- City Hotels have the highest **reservations** and also the highest **cancellations**.  
- Only **3.19%** of 119,390 customers made repeat bookings.  

![Reservation Status](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Status_Reservasi_Perhotel.png?raw=true)  
![Repeat Customers](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Jumlah_Customer_Reservasi_Ulang.png?raw=true)  

**Yearly Trends (2014–2017):**  
- 2014: Low reservations, fluctuating cancellations  
- 2015: Strong growth, peak in July  
- 2016: Highest reservations, visible seasonal patterns  
- 2017: Growth slowed, cancellations increased  

![Yearly Reservations](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Status_Reservasi_Pertahun_Tiap_Hotel.png?raw=true)

---

### Analysis 3: Annual Revenue by Hotel Type
- Resort Hotels consistently earn more revenue than City Hotels.  
- Peak year: **2016**  

![Annual Revenue](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Jumlah_Customer_Pertahun.png?raw=true)

**Resort Hotel ADR Insights:**  
- Transient leads ADR, followed by Contract, Transient-Party, Group  
- Higher ADR for 15–30+ day lead times  
- Special requests strongly correlated with ADR  
- Seasonal peak ADR ~200 in July–August  

![Resort ADR](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Resort%20Hotel%20ADR%20Relation.png?raw=true)

**City Hotel ADR Insights:**  
- Transient customers dominate ADR  
- Stable lead time distribution, some ADR outliers up to 250  
- More special requests = higher ADR  
- Seasonal ADR peak May–September  

![City ADR](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/City%20Hotel%20ADR%20Relation.png?raw=true)

---

### Analysis 4: ADR vs. Cancellation Rates
- Cancellations rise when ADR is high  
- Lower ADR → fewer cancellations  

| ADR vs. Cancellations |
|------------------------|
| ![ADR Monthly](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/ADR_Month.png?raw=true) |
| ![Monthly Cancellations](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Banyaknya_Pembatalan_Perbulan.png?raw=true) |

---

### Analysis 5: Top 10 Countries by Visitors & Cancellations
- Portugal ranks highest for both **visitors** and **cancellations**.  
- Likely due to accessibility for domestic travelers, who cancel more easily than international tourists.  

| Visitors vs. Cancellations |
|-----------------------------|
| ![](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Top10_Negara.png?raw=true) |
| ![](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Top10_Negara_Cancelation.png?raw=true) |

---

## Data Modelling
Models compared for predicting cancellations:  
- **CatBoost** – Best performance (highest accuracy)  
- XGBoost  
- KNN  

![Model Comparison](https://github.com/xyzaraa/hotel_analysis/blob/main/Assets/Model%20Comparison.png?raw=true)  

CatBoost outperformed the others, showing stronger ability to capture complex patterns for reliable predictions.  

---

## Conclusion
**Key Findings:**  
- High cancellation rates in City Hotels & Transient customers  
- Seasonal peaks: July = highest, January = lowest  
- ADR positively correlated with lead time, special requests, children, and hotel type  
- Resort Hotels generally earn more revenue, especially during holidays  

**Recommendations:**  
- Implement flexible cancellation policies or incentives  
- Optimize pricing based on hotel type, customer type, season, lead time  
- Focus marketing efforts on Transient customers  
- Manage special requests efficiently, consider fees for extras  
- Target countries with lower cancellation rates for promotions  

---

## Storyboard
Check the [Storyboard](https://medium.com/@kiarazzahraaa/storyboard-hotel-analysis-b27d4deb8e90) for a visual summary.  

---

## Author 👨‍💻
- [Alviya Laela Lestari (202110370311400)](https://github.com/alviyalaela)  
- [Kiara Azzahra (202110370311426)](https://github.com/xyzaraa)  