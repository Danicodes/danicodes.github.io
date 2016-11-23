---
layout: post
title:  Hip Hop Leads and Features Reflection
date:   2016-09-18
published: true
categories: [python, challenges, machine learning]
tags: [python, k-means, data, analysis, unsupervised learning, machine learning]
---
*modeling relationships between artists as a network*

****************

Brief: Using a (messy) database of artists and their music, I've attempted to find a relationship between the of number of songs a hip-hop artist has 'lead' on, versus the number they have 'featured' on, to see if this had any potential effect on the artist's Spotify popularity.

What I realized: Looking back at my first attempt at this problem, I see that I used k-means cluster in an attempt to separate and classify the hip-hop artists in terms of their ratio of leads to features. However, the k-means clustering algorithm is really a supervised learning algorithm. It works by being trained on a dataset with correct classifications. Meaning I would have had to separate and identify some  classes of hip-hop artists in order for the algorithm to place the other artists.

Some feedback on my initial approach I've decided that this problem would be better modeled as a network.

Truthfully, I had just learned about k-means and was eager to see it in action on some data, whether or not this was  'right' to do, I see that there is a clearer way to model the relationship between my variables.

Below is a 3-D graph, showing the relationship between an artist's number of leads, number of features and the artist's Spotify popularity rating.

<div>
    <a href="https://plot.ly/~williams11/6/" target="blank" title="Relationship between Hip-Hop Artists&#39; Popularity and Number of Songs as Leading or Supporting Artist" style="display: block; text-align: center;"><img src="https://plot.ly/~williams11/6.png" alt="Relationship between Hip-Hop Artists&#39; Popularity and Number of Songs as Leading or Supporting Artist" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="williams11:6"  src="https://plot.ly/embed.js" async></script>
</div>
