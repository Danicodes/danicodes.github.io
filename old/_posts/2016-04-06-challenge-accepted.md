---
layout: post
title:  Challenge Accepted
date:   2016-04-06
published: true
categories: [python, challenges]
tags: [python, data, analysis, challenges]
---


Data Analysis Challenges

******************

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


*<u>Hourly</u>*

Office of Collective Bargaining offers the lowest hourly rate, offering two positions ranging from $9 to $10.

Department of Health & Mental Hygiene and Fire Department offer the highest salary range from $71 to $76.

*<u>Daily*

Department of Citywide Admin Services offers the lowest start and end salary at $232

Department of Sanitation offers the highest start and end salary at $406

*<u>Annually*

Department of Environmental Protection offers the lowest start salary range -- $25,997

Admin Trials and Hearings offers the lowest end salary range -- $29,000

Department of Health & Mental Hygiene offers the maximum end salary range -- $218,799.

Department of Environmental Protection offers the maximum starting salary range -- $198,518.




> Which jobs do you think are the hardest to fill?
  (What makes you say that?)

*Analyzing the [NYC Jobs dataset](https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t)*

 The time frame of a job post is potentially indicative of the level of hiring difficulty. Posts that are made available for a large span of time either show that the departments expect to take a large span of time to find a suitable candidate or perhaps there is not a high urgency for that position to be filled. For example the Board of Correction posted a Deputy Executive Director of Research position on March 15 of this year and it will remain posted until the same date in 2017, however it does not immediately follow that this is a difficult position to fill.  

 From this dataset, it seems that the jobs that are management based are harder to fill. Although not many postings included a post until date, many included the date posted, there were several management level positions dating back to 2011, which may correlate to hiring difficulty.

 Although there was no codebook present for this dataset, I inferred that the 'Level' variable is referring to the difficulty level of the job, with 0 indicating least difficulty and M*x* indicating a management-level position. There is a potential  correlation between the level of the position and the hiring difficulty however it is small. Although management based positions are more difficult, not all are difficult positions to fill.

****
