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

|Activity           |Probability   |
|-------------------|--------------|
|Brush teeth        |0.10          |
|Eat Cereal         |0.40          |
|Play Video Games   |0.20          |
|Yoga               |0.30          |

*Aside: (I brush my teeth after breakfast okay?)*


After training a model with my a few days of my behavior, the model would determine the most probable action I would take after waking up would be to eat cereal.

After this, the probabilities for each action I might take are updated based on eating cereal being the initial action.

Markov chains are incredibly simple -- they have no memory of their previous states, (or actions, in this example). They operate solely based on the likelihood of the action following some current action.

Pretty cool, right?

***Text Generation and other Applications***

What do Markov chains have to do with Kanye?
Well, one cool thing that Markov chains have long been used for is to generate text.

In the same way a model could be trained with a sequence of behaviors, a model can be trained with sentences -- sequences of words.

Everyone has a particular manner of speech and some words are more likely to appear in my vocabulary than that of Kanye's and vice versa.  It's this idea that has formed the basis of text prediction on your cell phone.

When you mostly begin sentences with "Hey" instead of "Hi", you'll notice that "Hey" comes up most often in your text prediction when you open a new dialogue on your phone.

In the podcast, I have been referencing, they constructed a model based on a mixture of Kanye West lyrics and biblical text to create... [Random Kanye](http://genesisofkanye.tumblr.com/)

And using the 2016 Presidential Debate Transcripts, I've created a mini-debate simulator here...
(*[Markovify the Debates](https://markov-app.herokuapp.com/)*)

Hidden Markov models have formed a large part of accurate [spam filtering](http://crm114.sourceforge.net/docs/Plateau99.pdf) in the CRM114 program. Hidden Markov models essentially take into context a group of words as a state. The essential idea, however, is the same. Some words are more likely to appear in spam mail than not. Given a corpus of spam, a Markov model can accurately detect the probability of an email being spam.  

Markov chains have also provided a basis for [Google's PageRank algorithm](https://en.wikipedia.org/wiki/PageRank), which measures the importance of website pages. This algorithm produces a probability distribution that represents the likelihood of arriving at a particular page when a person randomly clicks on links. It's somewhat akin to the Six Degrees of Separation problem, but with web links instead of mail. Each click of a link here, is essentially a state change and PageRank computes the probability of changing state from one website to another to determine the website's popularity.



Other References:
http://setosa.io/ev/markov-chains/
