---
layout: post
title:  Challenge Accepted
date:   2016-04-06
published: true
categories: [python, challenges]
tags: [python, data, analysis, challenges]
---

****

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


As indicated by the treemap above, Department of Health & Mental Hygiene has the most (1455) openings.


>Which departments have the highest and the lowest paying positions
    (based on current job openings)?

|Department| Salary Fr.| Salary from | Salary to |
|--------|:------------:|------------:|----------:|
|Office of Collective Bargaining|Hourly|$9|$10|
| Department of Health/Mental Hygiene|Hourly|$71|$76|

<u>*Hourly*</u>

Office of Collective Bargaining offers the lowest hourly rate, offering two positions ranging from $9/hour to $10/hour.

Department of Health & Mental Hygiene and Fire Department offer the highest salary range from $71/hour to $76/hour.

<u>*Daily*




<u>*Annually*

Department of Environmental Protection offers the lowest start salary range -- $25,997

Admin Trials and Hearings offers the lowest end salary range -- $29,000

Department of Health & Mental Hygiene offers the maximum end salary range -- $218,799/yr.

Department of Environmental Protection offers the maximum starting salary range -- $198,518/yr.




> Which jobs do you think are the hardest to fill?
  (What makes you say that?)


****

### *Show Off* ###


> Pick any dataset on labor you can find.
  Draw a comparison between two related datasets or points of view (e.g. Which industries are laying off the most people and which industries have a huge hiring gap?)

> Show the relative results in a single page, slide, blog post, or document with some pretty graphs and supporting text.
