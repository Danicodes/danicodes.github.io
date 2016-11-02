---
layout: post
title:  Understanding Markov Chains with 2016 Presidential Debate Transcripts
date:   2016-10-27
published: true
categories: [python, machine learning]
tags: [python, data, analysis, machine learning]
---
*Markov chains and the Presidential Debate -- Spoiler: Hilarity ensues*

Once upon a time, I was listening to a Linear Digressions podcast called "Random Kanye". On Linear Digressions they talk about topics in the Machine Learning sphere and this podcast was on Markov Chains.

Markov Chains are pretty cool. Basically, Markov chains tell you the probability of moving from one state to another.

For example, if you were to train a model with activities from my morning behavior, you could ask the question, what is the most probable action that Danielle will carry out just after waking up? And the model would show something like this:

Brush teeth Pr: 0.10 (I brush my teeth after breakfast okay?)
Eat Cereal Pr: 0.4
Play Video Games Pr: 0.2
Yoga Pr: 0.3

Thus the most probable action I would take would be to eat cereal. After this the most probable actions are updated based on eating cereal being the previous action.

Pretty cool

**Markovify the Debate**

<form action="C:/Users/Documents/DataSets/markov_debate/debate_cgi.py">
  Number of lines for this Debate:
  <input type="number" name="lines" min="0" max="50" step="1" value="3">
  <input type="submit">
</form>
