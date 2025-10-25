---
title: "Marketing Analytics Deep Dive: Uncovering Customer Insights with Power BI, SQL & Python"
slug: "m-analytics"
date: "2025-10-22"
excerpt: "After learning Power BI, SQL, and Python, I tackled a real-world marketing dataset to analyze customer behavior and campaign performance. Here's what I discovered about conversion rates, engagement patterns, and customer sentiment"
coverImage: "/images/posts/00-main_dashboard.png"
---

<!-- what's above is called YAML frontmatter it will be the metadata of this post -->
<!-- and it will be inside data object(key and value) data: {
title: ...,} -->

After spending months learning Power BI, SQL, and Python, I wanted to put my skills to the test with something practical. I decided to analyze a marketing dataset for an online retail business to see if I could uncover actionable insights about customer behavior and campaign effectiveness.

**The challenge?**
Figure out why conversion rates were dropping and customer engagement was declining.

Spoiler alert: I found some interesting patterns.

## The Problem
The business was facing some real issues:
- Marketing campaigns weren't delivering great ROI
- Customer engagement and conversion rates were declining
- Overall customer satisfaction seemed to be dropping

I had access to customer reviews, social media data, and campaign performance metrics. My job was to dig into this data and find out what was actually going on.

## Setting Everything Up
I went with PostgreSQL since I'd used it before on my Trend Bites project. The original data came in Microsoft SQL Server format, so I used DBeaver to migrate everything over. Once that was done, I had six main tables to work with: customer journeys, engagement data, reviews, customer demographics, geography, and products.

![PostgreSQL Admin](/images/posts/PostgreSQL.png)
![Dataset Tables](/images/posts/01-modelView.png)

## The Fun Part: Sentiment Analysis
One of the coolest parts of this project was building a sentiment analysis system. I didn't want just a simple "positive or negative" classification that felt too basic. Instead, I combined the actual text sentiment (using NLTK's VADER) with the star rating customers gave.
This created some really interesting categories. For example, someone might leave a 3-star review but write really positive text—that's a "Mixed Positive." Or they might give 2 stars with negative text—that's straight-up "Negative." This nuanced approach gave me a much clearer picture of how customers actually felt.

```python
from nltk.sentiment.vader import SentimentIntensityAnalyzer

sia = SentimentIntensityAnalyzer()

# This function creates nuanced sentiment categories by combining VADER's text score 
# with the user's star rating.
def categorize_sentiment(score, rating):
    if score > 0.05:  # Positive text
        if rating >= 4:
            return "Positive"
        elif rating == 3:
            return "Mixed Positive"
        else: # Ratings 1-2
            return "Mixed Negative"
    elif score < -0.05:  # Negative text
        if rating <= 2:
            return "Negative"
        elif rating == 3:
            return "Mixed Negative"
        else: # Ratings 4-5
            return "Mixed Positive"
    else:  # Neutral text
        if rating >= 4:
            return "Positive"
        elif rating <= 2:
            return "Negative"
        else: # Rating is 3
            return "Neutral"

# Apply the custom function to each row of the DataFrame
df['sentiment_category'] = df.apply(
    lambda row: categorize_sentiment(row['sentiment_score'], row['rating']), axis=1
)
```

## What I Found

### The Conversion Rate Fall

January was crushing it with a 17.31% conversion rate. Then October hit and everything dropped to 6.11%. December recovered somewhat at 11.41%, but clearly something went wrong mid-year.

The crazy part? In January, Ski Boots had a 100% conversion rate. Every single person who viewed them bought them. That's the power of seasonal demand and good marketing timing.

![Conversion Chart](/images/posts/03-conversionRate-general.png "Conversion Chart")

### Building the Dashboard

I created an interactive Power BI dashboard with bookmarks and pop-up filter panels so stakeholders could explore the data themselves. They could filter by gender, sentiment category, or specific products to drill down into exactly what they wanted to see.

Want to see the dashboard in action? [Check out the full demo here.](https://drive.google.com/file/d/1ZTuawZ738NjPxoM9dL6n51qb7M0mO07k/view?usp=drive_link).

For the complete analysis including all findings, recommendations, and code, [check out the full project on GitHub.](https://github.com/Yasser274/Retail-Marketing-Analytics/tree/main)

## What I Learned

This project really drove home how much you can learn from data when you dig into it properly. Combining SQL for data cleaning, Python for sentiment analysis, and Power BI for visualization gave me a complete picture of what was happening with this business.

The biggest takeaway? Numbers alone don't tell the whole story. Understanding the why behind the metrics—through sentiment analysis and customer feedback is what leads to actionable insights.

If you're learning data analytics, I highly recommend finding a dataset like this and just diving in. You'll learn more from one real project than a dozen tutorials.