---
layout: post
title:  Challenge Accepted
date:   2016-04-06
published: true
categories: [python, challenges]
tags: [python, data, analysis, challenges]
---

Data Analysis Challenges
****
### *Counting Vitae* ###

>Using a plaintext copy of your resume, create a bar chart of character
    frequency.
    (Bonus: programmatically strip out punctuation and whitespace.)  

<div>
          <a href="https://plot.ly/~williams11/0/"
          target="blank" title="Resume Character Frequencies" style="display: block; text-align: center;"><img src="https://plot.ly/~williams11/0.png" alt="Resume Character Frequencies" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
          <script data-plotly="williams11:0"  src="https://plot.ly/embed.js" async></script>
</div>

*Code for this visualization can be found [here](https://github.com/Danicodes/WMChallenge/blob/master/WorkMarketChallege.py)*

****

### *Friendly Competition* ###

>Which department has the most openings?

Most of the job posts here were made internally and externally, so I decided to look at only internal postings to avoid counting duplicate postings. In addition, external postings can implicitly be seen by internal employees while other postings are only made available internally, thus limiting the scope to the internal posting type should give accurate results.

![](/assets/AvailablePositions.jpg)


Max (1455 open positions):
*  Department of Health & Mental Hygiene

Min (1 open position):
*   Civil Service Commission
*   Landmarks Preservation
*   Office of Collective Bargaining
*   Manhattan Community Board #10
*   NYC Police Pension Fund
*   President Borough of Manhattan

>Which departments have the highest and the lowest paying positions
    (based on current job openings)?

Based on the excel sheet

*Lowest*

Office of Collective Bargaining offers the lowest hourly rate, offering two positions ranging from $9/hour to $10/hour.

*Highest*

Department of Health & Mental Hygiene offers 30 positions with pay ranging from $71/hour to $76/hour. (Sounds good to me)
Fire Department offers the same rate for two positions.

> Which jobs do you think are the hardest to fill?
  (What makes you say that?)


****
### *Show Off* ###

> Pick any dataset on labor you can find.
  Draw a comparison between two related datasets or points of view (e.g. Which industries are laying off the most people and which industries have a huge hiring gap?)

> Show the relative results in a single page, slide, blog post, or document with some pretty graphs and supporting text.
