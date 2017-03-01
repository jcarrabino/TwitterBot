# This guide will explain:
- [What is a Web API?](#what-is-a-web-api)
- [How to get a Twitter API Key](#get-your-twitter-api-key)
- [How to get an MSTranslator Key](#get-your-mstranslator-api-key)
- [How to use the Twitter API](#how-to-use-twit)
- [How to use the MSTranslator API](#how-to-use-mstranslator)
- [How to automate your Twitter bot](#replying-to-tweets)

# What will the finished bot look like?
Our finished bot will be able to pull a tweet from Twitter based your specified search criteria, then reply to the original tweet's user with a translation of their tweet in whatever language you choose. 

# What is a Web API?
API stands for Application Programming Interface. It's quite a mouthful and a fancy name for a relatively simple concept. In one sentence, an API is an interface that lets a program that you are writing control or access another program that some other person wrote. Now why would this be useful?

Let's think of an analogy. Everyday I drive a car and through some miracle of engineering neither I nor the car spontaneously combusts. I also get to my destination without many problems. Though fascinating, I do not really care precisely how every aspect of my car works. I just want to drive and get to where I need to go. The interface of the car would be the steering wheel, gearshift, gas pedal, break pedal, and all of the other controls that let me drive my car. Now, say I wanted to teach my good robot friend, Killroy, how to drive a car. When building him I would not have to teach him about the inner workings of the car. I would just show him how to use the "interface" (the gas pedal, steering wheel etc...)!

This is basically what we will be doing when using Twitter's API. We don't necessarily care about the deep inner workings of Twitter. We will just be using its API which will allow us to use Twitter's platform in our own programs.

<br></br>
[Back to top](#this-guide-will-explain)
# Get your Twitter API Key

### Signing up for Twitter
First thing's first, we need to create a Twitter account for our bot. **[Signing up](https://twitter.com/signup)** for a Twitter account is fairly simple and should onle take a couple of minutes. After clicking on the "Signing up" hyperlink you will be redirected to the following screen, 

<p align="center">
    <img src="jcarrabino.github.io/pics/twitterSignUp.png">
</p>

Now that we've created a Twitter account for out bot, the next thing we need to do is to create an application for our bot. All you need to do is be logged into twitter and click on the following link, **[create a new app](https://apps.twitter.com/)**. 

This should redirect you to Twitter's application management page,

<p align="center">
    <img src="jcarrabino.github.io/pics/createAppTwit.png">
</p>

Now, click on the button that says "Create New App" which will send you to the following page,

<p align="center">
    <img src="jcarrabino.github.io/pics/createApp.png">
</p>

Here you will fill out all of the required fields in order to create your new Twitter app. If you are unsure of what to use for your website, you can just put your Twitter bot's profile page for now, which should look like this, "twitter.com/(Your-Twitter-Bot-UserName)"


[Back to top](#this-guide-will-explain)
### Get your own Twitter API Key
Now that we have an account and have created our application, we need to find our Twitter API Key. Keep in mind that each Twitter app has a unique API key used to access Twitter's API. With that being said, you should keep your API Key secret, as it is connected to you and we cannot make API calls to Twitter without a valid key.

First thing you need to do is head back to the application management page, **[here](https://apps.twitter.com/)**. Notice how there is a new link on this page for the Twitter app that you just created,

<p align="center">
    <img src="jcarrabino.github.io/pics/yourApp.png">
</p>

Click on the link with your app's name. This will take you to your app's home page, which will look like this,

<p align="center">
    <img src="jcarrabino.github.io/pics/appHome.png">
</p>

Notice the tabs listed at the top right under your app's name. Now click the third tab in that is titled "Keys and Access Tokens" which will take you to the page with your API keys and access tokens. It should look like this,

<p align="center">
    <img src="jcarrabino.github.io/pics/TwitAPIKey.png">
    <img src="jcarrabino.github.io/pics/TwitAPIToken.png">
</p>

At this point you should take a moment to copy and paste your API Key, API Secret, Access Token, and Access Token Secret into a separate text document. You will need to use these later on, as these are the four keys you will need to access and work with Twitter's API.


[Back to top](#this-guide-will-explain)
# Get your MSTranslator API Key

### Signing up for an account on Windows Azure Marketplace
Now that we have our Twitter API Keys/Tokens we can start working on getting our own MS Text Translator API Keys. In order to access Microsoft's Translator API we will need to create a Microsoft Azure account. If you already have a Microsoft affiliated email account then you can **[sign in](http://portal.azure.com/)** to Microsoft Azure with that. If not, then you can sign up for a Microsoft Azure account, **[here](http://azure.com/)**, by clicking on the link that says "Free Account" in the top-right corner.

### Subscribe to the Microsoft Translator API
Once you're signed into Azure, go to the **[Cognitive Services](https://portal.azure.com/#create/Microsoft.CognitiveServices)** section. This should bring you to the following page,

<p align="center">
    <img src="jcarrabino.github.io/pics/textAPISignUp.png">
</p>

Under "API Type" select "Translator Text API" and in the "Pricing Tier" section select the "F0" option to use the free subscription for the MS Text Translator API. Your Microsoft Text Translato API subscription will begin immediately after completing the above form and clicking on the "Create" button.

### Accessing your MSTranslator API Key
Now that we've successfully subscribed to Microsot Text Translator its time to head back to the **[Azure Portal](http://portal.azure.com/)** in order to access our API Keys.

Once on the Azure Portal Dashboard, navigate to the panel on the far left and click on the link that says "All Resources." This will take to the following page,

<p align="center">
    <img src="jcarrabino.github.io/pics/allRes.png">
</p>

If you successfully signed up for the MS Text Translator API then this page should display the Cognitive Services account that you just created. Click on the link under the "Name" column to go to your Cognitive Services account overview page. Once there you will need to scroll down the center column to the "Resource Management" section and click on the link that says "Keys" which will bring you to the following page,

<p align="center">
    <img src="jcarrabino.github.io/pics/textKeys.png">
</p>

There will be two API Keys listed here, and you should copy and paste these keys into the same document you stored your Twitter API keys in as we will be using these later.


[Back to top](#this-guide-will-explain)
# How to use Twit

### Getting Twit up and running

### Structure of an API request

### TheJSON Response

### Parsing data from a JSON response


[Back to top](#this-guide-will-explain)
# How to use MSTranslator

### Get MSTranslator up and running

### Structure of a text translation request


[Back to top](#this-guide-will-explain)
# Replying to tweets

### Pulling text from tweets to translate


[Back to top](#this-guide-will-explain)
# Scheduling tweets

### The End
# Resources:
- [Twitter API Documentation](https://dev.twitter.com/overview/api)
- [Twit Node Client Documentation](https://github.com/ttezel/twit)
- [MSTranslator Documentation](https://github.com/nanek/mstranslator)


[Back to top](#this-guide-will-explain)
