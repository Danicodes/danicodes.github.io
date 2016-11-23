---
layout: post
title:  Understanding Markov Chains with 2016 Presidential Debate Transcripts
date:   2016-10-27
published: true
categories: [python, machine learning]
tags: [python, data, analysis, machine learning]
---
*Markov chains and the Presidential Debate -- [Spoiler: Hilarity ensues]*

***Random Kanye***

Once upon a time, I was listening to a [Linear Digressions](http://lineardigressions.com/) podcast called "Random Kanye". On Linear Digressions they talk about topics in the Machine Learning sphere and this podcast focused on Markov Chains.

Markov Chains are pretty cool. Basically, Markov chains tell you the probability of moving from one state to another.

For example, if you were to train a model with activities from my morning behavior, you could ask the question, what is the most probable action that Danielle will carry out just after waking up? And the model would show something like this:

|  Activity      |  Probability  |
|----------------|---------------|
|Brush teeth     | 0.10          |
|Eat Cereal      | 0.40          |
|Play Video Games| 0.20          |
|Yoga            | 0.30          |

*Aside: (I brush my teeth after breakfast okay?)*


After training a model with my a few days of my behavior, the model would determine the most probable action I would take after waking up would be to eat cereal.

After this, the probabilities for each action I might take are updated based on eating cereal being the initial action.

Pretty cool, right?

***Text Generation and other Applications***

What do Markov chains have to do with Kanye?
Well, one cool thing that Markov chains have been used for is to generate text.

In the same way a model could be trained with a sequence of behaviors, a model can be trained with sentences -- sequences of words.

Everyone has a particular manner of speech and some words are more likely to appear in my sentence structure than that of Kanye's and vice versa. It's this idea that has enabled things like text prediction on your cell phone.
When you mostly begin sentences with "heyyyyy" instead of "hi", it comes up more in your text prediction when you try to start a sentence.

In the podcast, I have been referencing, they constructed a model based on Kanye West lyrics and Biblical Text to create... [Random Kanye](http://genesisofkanye.tumblr.com/)



***Markovify the Debates [HERE](https://markov-app.herokuapp.com/)***       

References:
http://setosa.io/ev/markov-chains/
  
