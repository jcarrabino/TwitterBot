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

<br></br>
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

<br></br>
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

<br></br>
[Back to top](#this-guide-will-explain)
# How to use Twit

### Getting Twit up and running
Before we can make calls to Twit, we will need to get our local environment up and running. For this guide it is assumed that you have node.js installed. If that is not the case, you can follow **[this guide](https://docs.npmjs.com/getting-started/installing-node)** in order to install node on your own. 

The first thing we need to do is to create a new directory(an empty folder) where the Twitter Bot's source code wil be stored. We will be using the Twit library, which is a Twitter API Client made for node.js. Twit contains a set of precompiled cocmmands that will allow us to more easily interact with Twitter's API.

You can install Twit by running, `npm install twit`, in the command line. Once Twit finishes installing create a new javascript file inside the Twitter bot's directory, for simplicity sake, let's call it `bot.js`. This is where we will be writing the code for our Twitter bot. 

Now create a separate javascript file titled `config.js`, also within your bot's directory. This is where we will store our Twitter API Keys. The contents of this file should look like this,
```javascript
module.exports = {
    consumer_key : "",
    consumer_secret : "",
    access_token : "",
    access_token_secret : ""
}
```
You should then copy and pasy your four Twitter Keys/Tokens inside the double quotes next to their corresponding variable names. When you have finished this go back to `bot.js`. Now that we have our keys stored in a configuration file we can initialize a Twit object by executing the following lines of code,
```javascript
//Set up Twitter 
var twit = require('twit');

//Include Keys stored in config.js
var config = require('./config.js');

//Initialize Twit object
var Twitter = new twit(config);
```
Now that we've initialized our Twit object we can access the calls provided to us by the Twit library. At this point we are ready to make test calls to send/receive data from Twitter. 


### Structure of an API request
Let's say that I want to GET the most popular tweet send out by Donald Trump. I could write something like this,

```javascript
// find latest tweet according the query 'q' in params
var params = {
    q: 'from:realDonaldTrump',  // REQUIRED
    result_type: 'popular',
    count: '1'
}
// for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

Twitter.get('search/tweets', params, function(err, data, response){
      console.log(err);
      console.log(data);
      console.log(response);
 });
```
Twit's get function allows us to send an API request to Twitter, and is structured as `Twitter.get(path, [params], callback)`.

The first parameter, path, specifies the endpoint to hit. So by setting path to "search/tweets" we are telling the request to search through the tweets at Twitter's API endpoint. 

The second parameter, [params], defines the parameters of our request. This is used to construct the API's request URL. The only required parameter in params is "q" which is the query parameter. The above request is searching specifically for tweets from realDonaldTrump. 

The last parameter is the callback function. Every method in the Twit library has a callback function passed as the last parameter. The callback function is formatted as such, `function(err, data, response)`. Where "err" will log any error messages if a bad request was sent, "data" will contain the parsed data received from Twitter, and "response" is the http.IncomingMessage received from Twitter.

The actual request that gets sent to Twitter from our Twitter.get method will contain the following information,

```
...
GET /1.1/search/tweets.json?q=from%3ArealDonaldTrump&result_pe=popular&count=1 HTTP/1.1\r\n
Authorization: 
OAuth oauth_consumer_key="",
    oauth_signature_method="HMAC-SHA1",
    oath_timestamp="1488383469",
    oauth_token="",
    oauth_nonce="",
    oauth_version="1.0",
    oauth_signature="%3D"
Host: api.twitter.com
X-Target-URI: https://api.twitter.com
Connection: close,
...
```
Note that all keys were removed from the above data. Also, these requests are more complicated because Twitter now requires OAuth keys for security reasons, but if that were not the case we could make the same request by passing our GET request using the following URL,
`https://api.twitter.com/1.1/search/tweets.json?q=from%3ArealDonaldTrump&result_pe=popular&count=1.json`
Let's examine this a bit more closely,
- `https://api.twitter.com`: This is the API's base URL, the base address of the host server we're addressing.
- `/1.1`: This is the version of OAuth currently used by Twitter
- `/search/tweets.json`: This is the path parameter we sent in our call to get. It also has `.json` added to the end of it to indicate the type of data we'll be getting back
- `?q=from%3ArealDonaldTrump&result_pe=popular&count=1`: Lastly this is the query we constructed from the `[params]` passed to the get method.

### The JSON Response

After calling the get function with a valid request, all of the parsed JSON data we want will be located in the "data" object of the callback function. 

So the function,
```javascript
Twitter.get('search/tweets', params, function(err, data, response){
      console.log(data);
 });
```
Returns the following parsed JSON object,
```javascript
{ statuses:
   [ { created_at: 'Wed Mar 01 01:30:49 +0000 2017',
       id: 836750538943377400,
       id_str: '836750538943377408',
       text: 'Join me live at 9:00 P.M. \n#JointAddress https://t.co/J882zbyVkJ https://t.co/gTtK3vJmkU',
       truncated: false,
       entities: [Object],
       extended_entities: [Object],
       metadata: [Object],
       source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
       in_reply_to_status_id: null,
       in_reply_to_status_id_str: null,
       in_reply_to_user_id: null,
       in_reply_to_user_id_str: null,
       in_reply_to_screen_name: null,
       user: [Object],
       geo: null,
       coordinates: null,
       place: null,
       contributors: null,
       is_quote_status: false,
       retweet_count: 5976,
       favorite_count: 38833,
       favorited: false,
       retweeted: false,
       possibly_sensitive: false,
       lang: 'en' } ],
  search_metadata:
   { completed_in: 0.012,
     max_id: 0,
     max_id_str: '0',
     next_results: '?max_id=836750538943377407&q=from%3ArealDonaldTrump&count=1&include_entities=1&result_type=popular',
     query: 'from%3ArealDonaldTrump',
     count: 1,
     since_id: 0,
     since_id_str: '0' } }
```

### Parsing data from a JSON response
Wow, that JSON response is long and kind of intimidating, but don't worry, there are only a few pieces of data we will be using from it.



<br></br>
[Back to top](#this-guide-will-explain)
# How to use MSTranslator

### Get MSTranslator up and running

### Structure of a text translation request

<br></br>
[Back to top](#this-guide-will-explain)
# Replying to tweets

### Pulling text from tweets to translate

<br></br>
[Back to top](#this-guide-will-explain)
# Scheduling tweets

### The End
# Resources:
- [Twitter API Documentation](https://dev.twitter.com/overview/api)
- [Twit Node Client Documentation](https://github.com/ttezel/twit)
- [MSTranslator Documentation](https://github.com/nanek/mstranslator)

<br></br>
[Back to top](#this-guide-will-explain)
