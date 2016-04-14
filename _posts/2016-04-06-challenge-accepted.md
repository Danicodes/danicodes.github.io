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


<u>*Hourly*</u>

Office of Collective Bargaining offers the lowest houly rate, offering two positions ranging from $9 to $10.

Department of Health & Mental Hygiene and Fire Department offer the highest salary range from $71 to $76.

<u>*Daily*

Department of Citywide Admin Services offers the lowest start and end salary at $232

Department of Sanitation offers the highest start and end salary at $406

<u>*Annually*

Department of Environmental Protection offers the lowest start salary range -- $25,997

Admin Trials and Hearings offers the lowest end salary range -- $29,000

Department of Health & Mental Hygiene offers the maximum end salary range -- $218,799/yr.

Department of Environmental Protection offers the maximum starting salary range -- $198,518/yr.




> Which jobs do you think are the hardest to fill?
  (What makes you say that?)

From article that I've read, it seems that the positions that are most difficult to fill are those which require skilled workers or are management positions. The time frame of the post is also a good indicator of the level of recruiting difficulty. Posts that are been available for a long span of time show that the departments expect to take a large amount of time to find a suitable candidate. For example the Board of Correction is attempting to hire a Deputy Executive Director of Research and expects to take a year to find one.   


****

### *Show Off* ###


> Pick any dataset on labor you can find.
  Draw a comparison between two related datasets or points of view (e.g. Which industries are laying off the most people and which industries have a huge hiring gap?)

> Show the relative results in a single page, slide, blog post, or document with some pretty graphs and supporting text.
