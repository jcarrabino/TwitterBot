# This Guide Will Explain:
- [What is a Web API?](#what-is-a-web-api)
- [How to get a Twitter API Key](#get-a-twitter-api-key)
- [How to get an MSTranslator Key](#get-an-mstranslator-api-key)
- [How to use the Twitter API Node Client, Twit](#how-to-use-twit)
- [Structure of an API Request](structure-of-an-api-request)
- [How to use the MSTranslator API](#how-to-use-ms-text-translator)
- [How to automate your Twitter bot](#replying-to-tweets)
- [Tying it all Together](#tying-it-all-together)

# What Will the Finished Bot Look Like?
Our finished bot will be able to pull a tweet from Twitter based your specified search criteria, then reply to the original tweet's user with a translation of their tweet in whatever language you choose. 

# What is a Web API?
API stands for Application Programming Interface. It's quite a mouthful and a fancy name for a relatively simple concept. In one sentence, an API is an interface that lets a program that you are writing control or access another program that some other person wrote. Now why would this be useful?

Let's think of an analogy. Everyday I drive a car and through some miracle of engineering neither I nor the car spontaneously combusts. I also get to my destination without many problems. Though fascinating, I do not really care precisely how every aspect of my car works. I just want to drive and get to where I need to go. The interface of the car would be the steering wheel, gearshift, gas pedal, break pedal, and all of the other controls that let me drive my car. Now, say I wanted to teach my good robot friend, Killroy, how to drive a car. When building him I would not have to teach him about the inner workings of the car. I would just show him how to use the "interface" (the gas pedal, steering wheel etc...)!

This is basically what we will be doing when using Twitter's API. We don't necessarily care about the deep inner workings of Twitter. We will just be using its API which will allow us to use Twitter's platform in our own programs.

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# Get a Twitter API Key
### Signing Up for Twitter
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

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
### Get Your Own Twitter API Key
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

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# Get an MSTranslator API Key
### Signing up for an account on Windows Azure Marketplace
Now that we have our Twitter API Keys/Tokens we can start working on getting our own MS Text Translator API Keys. In order to access Microsoft's Translator API we will need to create a Microsoft Azure account. If you already have a Microsoft affiliated email account then you can **[sign in](http://portal.azure.com/)** to Microsoft Azure with that. If not, then you can sign up for a Microsoft Azure account, **[here](http://azure.com/)**, by clicking on the link that says "Free Account" in the top-right corner.

### Subscribe to the Microsoft Translator API
Once you're signed into Azure, go to the **[Cognitive Services](https://portal.azure.com/#create/Microsoft.CognitiveServices)** section. This should bring you to the following page,

<p align="center">
    <img src="jcarrabino.github.io/pics/textAPISignUp.png">
</p>

Under "API Type" select "Translator Text API" and in the "Pricing Tier" section select the "F0" option to use the free subscription for the MS Text Translator API. Your Microsoft Text Translato API subscription will begin immediately after completing the above form and clicking on the "Create" button.

### Accessing the MSTranslator API Key
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

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# How to use Twit
### Getting Twit Up and Running
Before we can make calls to Twit, we will need to get our local environment up and running. For this guide it is assumed that you have node.js installed. If that is not the case, you can follow **[this guide](https://docs.npmjs.com/getting-started/installing-node)** in order to install node on your own. 

The first thing we need to do is to create a new directory(an empty folder) where the Twitter Bot's source code wil be stored. We will be using Twit, which is a Twitter API Client made for node.js. Twit contains a set of precompiled commands that will allow us to more easily interact with Twitter's API.

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
You should then copy and paste your four Twitter Keys/Tokens inside the double quotes next to the corresponding variable names. When you have finished this go back to `bot.js`. Now that we have our keys stored in a configuration file we can initialize a Twit object by executing the following lines of code,
```javascript
//Set up Twitter 
var twit = require('twit');

//Include Keys stored in config.js
var config = require('./config.js');

//Initialize Twit object
var Twitter = new twit(config);
```
Now that we've initialized our Twit object we can access the methods provided to us by the Twit library. At this point we are ready to make test calls to send/receive data from Twitter. 

# Structure of an API Request
Let's say that I want to GET the most popular tweet sent out by Donald Trump. I could write something like this,

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

The first parameter, `path`, specifies the endpoint to hit. So by setting path to "search/tweets" we are telling the request to search through the tweets at Twitter's API endpoint. 

The second parameter, `[params]`, defines the parameters of our request. This is used to construct the API's request URL. The only required parameter in params is "q" which is the query parameter. The above request is searching specifically for tweets from realDonaldTrump. 

The last parameter is the `callback` function. These callback functions use AJAX or Asynchronous JavaScript and XML. AJAX allows us to grab data from the Twitter API. Every method in the Twit library has a callback function passed as the last parameter. The callback function is formatted as such, `function(err, data, response)`. Where "err" will log any error messages if a bad request was sent, "data" will contain the parsed data received from Twitter, and "response" is the http.IncomingMessage received from Twitter.

The actual request that gets sent to Twitter from our Twitter.get method will contain the following information,

```
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
Connection: close
```
Note that all keys were removed from the above data. Also, these requests are more complicated because Twitter now requires OAuth keys for security reasons, but if that were not the case we could make the same request by passing our GET request via URL.

Let's examine what a potential GET request sent via URL would look like a bit more closely,
`https://api.twitter.com/1.1/search/tweets.json?q=from%3ArealDonaldTrump&result_pe=popular&count=1.json`
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
Returns the following Twitter JSON object and saves it in `data`,
```
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
   {[ completed_in: 0.012,
     max_id: 0,
     max_id_str: '0',
     next_results: '?max_id=836750538943377407&q=from%3ArealDonaldTrump&count=1&include_entities=1&result_type=popular',
     query: 'from%3ArealDonaldTrump',
     count: 1,
     since_id: 0,
     since_id_str: '0' ] } };
```

### Parsing Data from a JSON Response
Wow, that JSON response is long and kind of intimidating, but don't worry, there are only a few pieces of data we will be using from it. For the purposes of our Twitter bot, we want to pull the `text` from a tweet for translation, as well as the original tweeter's `id_str` and `screen_name` in order to reply to the original tweet with our translated tweet. 

Fortunately, these are easily accessible within our `data` object. Let's modify our get method's callback function in order to store the `id_str`, `screen_name`, and `text` into our own variables.

```javascript
var params = {
    q: 'from:realDonaldTrump',  // REQUIRED
    result_type: 'popular',
    count: '1'
};

//declare variables to store the data we need
var orig_text = '';
var user_id = '';
var user_sn = '';

Twitter.get('search/tweets', params, function(err, data, response){
      orig_text = data.statuses.text
      user_id = data.statuses.id_str
      user_sn = data.statuses.user.screen_name;
 });
```
So now we have a good idea of what kind of data we need to get and how to retrieve the data you need from the JSON object returned by Twitter.

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# How to use MS Text Translator
### Get MSTranslator Up and Running
Now that we've covered how to search for tweets, we should talk about how to translate their text contents using MS Text Translator. You can install MS Translator by running, `npm install mstranslator`, in the command line. Once MSTranslator finishes installing you should create a new javascript file titled `MSKey.js` within your bot's directory. This is where we will store our MS Text Translator API Key. It should be noted that a subscription to the MS Text Translator gives you two API Keys, however each app you make only requires one key, so only use the first key for this part. The contents of `MSKey.js` should look like this,
```javascript
module.exports = {
    api_key:"YOUR_KEY_1" 
}
```
When you have finished this go back to `bot.js`. Now that we have our keys stored in a configuration file we can initialize an MSTranslator object by executing the following lines of code,
```javascript
//Set up MSTranslator
var MsTranslator = require('mstranslator');

//Include key in MSKey.js
var MSconfig = require('./MSkey.js');

//Initialize MSTranslator object
var client = new MsTranslator(MSconfig, true);
```
Now that we've initialized our MSTranslator object we can access the calls provided to us by the MSTranslator library. At this point we are ready to make test calls to send/receive data from MSTranslator. 

### Translating Text
For our purposes we will only be covering MSTranslator's `translate` method. We will be calling this method with our MSTranslator object, which we have defined as `client`. 

Let's say we wanted to translate a text string from English to Russian,

```
var params = {
    text: "In Soviet Russia...",    //REQUIRED
    from: 'en',
    to: 'ru'    //REQUIRED
};

client.translate(params, function(err, data) {             
    var twitText = JSON.stringify(data);
};
```
MSTranslator's translate method allows us to send an API request to MS Text Translator, and is structured as `client.translate([params], callback)`. After the call to translate made above, `twitText = в Советской России ...`

The [params] object defines the parameters of our request. This is used to construct the API's request URL. The only required parameter in params are "text" and "to". After calling this function, twitText will be the Russian translation of the string,  

The last parameter is the callback function. These callback functions use AJAX or Asynchronous JavaScript and XML. AJAX allows us to grab data from the MSTranslator API. Every method in the MSTranslator library has a callback function passed as the last parameter. The callback function is formatted as such, `function(err, data)`. Where "err" will log any error messages if a bad request was sent and "data" will contain a JSON response containing the translated text.

So now that you know how to search for specific tweets, grab the data you need from them, and translate strings, it is time to tie everything we've covered together and create a bot capable of replying to tweets with translated text.

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# Replying to Tweets
At this point we've already discussed how to parse out the data we need from a Twitter API response, but that is only useful for GETting data. What we need to do now is use the data we've retrieved to POST a status update replying to the original tweet.

There are a couple of things to keep in mind before POSTing a reply to Twitter. First, is that we need to ensure that the translated tweet has enough room to concatenate with the original poster's username, as well as any other text you wish to add to it. For my bot, I want to add "Translation: " to the beginning of the tweet, put double quotes around the translated text, and in order to make my tweet a reply it needs to end in " @realDonaldTrump". That is a total of 32 characters. Therefore I need to ensure that My bot can ensure that each translated tweet is less than or equal to 108 characters. We can add a simple conditional statement and formatting loop in order to meet these conditions,

```javascript
// Russian text seems to add characters, this loop ensures total 
// text length < 140 after translation/adding chars to twitText
if (twitText.length > 108) {
    while(twitText.length > 108){
        var index = twitText.lastIndexOf(' ');
        twitText = twitText.slice(0,index);
    }
}
```

This section of code will check if the translated tweet's length is greater than 108, and if so it will trim off the last word of the string until it is less than or equal to 108 characters long.

The second thing we need to do is post the translated tweet as a reply to the original tweet. Fortunately Twit's post method is structured similarly to its get method, `Twitter.post(path, [params], callback)`. Whenever we are posting a tweet, our path variable needs to be set to, `statuses/update`. As for the params object, all we need to put here are `in_reply_to_status_id`, which is the `id_str` of the original tweet's author, and the `status`, which is the text content of the tweet we wish to post.

After running the conditional formatting loop, which formats the string contents of `twitText`, we can then send out our reply tweet with the following statement,

```javascript   
// Tell Twitter to reply to User with translated tweet
Twitter.post('statuses/update', {in_reply_to_status_id: retweetID, 
status: 'Translation: ' + twitText + '" @' + name}, function(err, data, response) {
    if (!err) {
         console.log('Successfully tweeted with string truncation!!!');
    }
    // if there was an error while tweeting
    else{
        console.log('No new tweets');
        console.log(err);
    }
});
```
Again, since this is formatted the same as the Twitter.get method, the `err` object in the callback function will log any error messages received by Twitter if it could not post the tweet. So in the line, `if(!err)`, we are ensuring that the tweet was successfully posted before logging `console.log('Successfully tweeted with string truncation!!!');`. Now that we can run queries for tweets, pull the information we need from Twitter's API response, translate the text, and post it as a reply to the original tweeter, we can start focusing on how to automate our bot.

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# Scheduling Tweets
In order to schedule when to send out tweets we will need the node.js add-on, Node Schedule, which can be installed by executing `npm install node-schedule` in the command line. Node Schedule allows us to use time-based scheduling in order to allow our bot to GET and POST tweets at predetermined times or dates using cron style formatting(which we will go over later in this section). 

Similar to MS Text Translator and Twit, a node-schdule object needs to be initialized at the beginning of our `bot.js` file. So underneath where MS Text Translator and Twit are set up we will need to add the following chunk of code,

```javascript   
//Set up Node Schedulr for Automation
var schedule = require('node-schedule');
```
With our node-schedule object initialized, we can start determining the rules for automation. Lets say I want to search for Donald Trump's most recent tweet every 30 minutes. In order to do this we will need to call on Node Schedule's scheduleJob method, which looks like this `var twitBot = schedule.scheduleJob('* * * * *', function(){...});`. 

Wait a second, that first parameter, '* * * * *', looks really funny, what could that possibly mean? Well, this is the cron-style formatting I mentioned earlier on in the section. Here is what each asterisk means, 

<p align="center">
    <img src="jcarrabino.github.io/pics/cron.png">
</p>

So, if we wanted to schedule our bot to search for and reply to tweets every 30 minutes, that cron parameter would look like this, `'* /30 * * * *'`.

As for the second parameter, `function(){...}`, inside those braces is where our functions to search for tweets, translate the text, and reply to the original poster would go. 

### Cleaner Error Logs
Right now our error logs are returning the entire error object, not all of which is necessary. It also does not have a way to add a timestamp to each log file. To fix this we can install one final node.js add-on called Console Timestamp by running, `npm install console-timestamp` in the command line. 

Like with every add on, we need to set up a timestamp object at the beginning of our bot.js script. We can do this by executing the following line of code,

```javascript
//Set up Timestamp
var timestamp = require('console-timestamp');
```

Let's look at those error logs again. Until now we've just been calling, `console.log(err);`, which will return the following JSON object,
```
 { [Error: Status is a duplicate.]
   message: 'Status is a duplicate.',
   code: 187,
   allErrors: [ { code: 187, message: 'Status is a duplicate.' } ],
   twitterReply: { errors: [ [Object] ] },
   statusCode: 403 }
```
This is okay, but I think we can do better. The only things that would be very useful to pull from this would be `err.message` and `err.code`. On top of that it would be nice to have a timestamp output to our error logs as well. We can do this by replacing each call to `console.log(err);` with,

```javascript
console.log(timestamp());
console.log('Error Message : ' + err.message, '\nCode: '+err.code);
console.log('\n');
```
Now each time an error is logged it's output will look like this,
```
09:20:53
Error Message : Status is a duplicate.
Code: 187
```

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# Tying it all Together
So now we have all of the tools in our arsenal to make a fully functioning Twitter bot, we just have to incorporate everything covered up until now into one cohesive script.

Here is what the finalized version of your bot.js script should look like,
```javascript
//Set up Twitter 
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

//Set up MSTranslator
var MsTranslator = require('mstranslator');
var MSconfig = require('./MSkey.js');
var client = new MsTranslator(MSconfig, true);

//Set up Node Schedule
var schedule = require('node-schedule');

//Set up Timestamp
var timestamp = require('console-timestamp');

//Automate bot to reply to tweet's based on scheduler's rules
var trollBot = schedule.scheduleJob('*/30 * * * *', function(){
    // find latest tweet according the query 'q' in params
    var params = {
        q: 'from:realDonaldTrump',  // REQUIRED
        result_type: 'recent',
        count: '1'
    }
    // for more parameters, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twitter.get('search/tweets', params, function(err, data, response) {
        // if there no errors
        if (!err) {
            
            ogText = data.statuses[0].text;
            retweetID = data.statuses[0].id_str;
            name = data.statuses[0].user.screen_name;
                
            //Remove non alpha-numeric chars from tweet to save space 
            //Russian translation increases character count
            ogText = ogText.replace(/[,\!$%\^&\*;{}=\-_`~()]/g,"");
            ogText = ogText.replace("\n","");
            //Set Translation parameters
            var params = {
              text: ogText,
              from: 'en',
              to: 'ru'
            };

            // Translate text of original tweet
            client.translate(params, function(err, data) {             
                var twitText = JSON.stringify(data);
                
                // Russian text seems to add characters, this loop ensures
                // total text length < 140 after translation/adding chars
                if (twitText.length > 108) {
                    while(twitText.length > 108){
                        var index = twitText.lastIndexOf(' ');
                        twitText = twitText.slice(0,index);
                    }
                    
                    // Tell Twitter to reply to User with translated tweet
                    Twitter.post('statuses/update', {in_reply_to_status_id: retweetID, 
                    status: 'Translation: ' + twitText + '" @' + name}, function(err, data, response) {
                        if (!err) {
                            console.log('Successfully tweeted with string truncation!!!');
                            console.log(timestamp());
                        }
                        // if there was an error while tweeting
                        else{
                            console.log('No new tweets');
                            console.log(timestamp());
                            console.log('Error Message : ' + err.message, '\nCode: '+err.code);
                            console.log('\n');
                        }
                    });

                    var diff = twitText.length - 140;
                    twitText = twitText.substring(0, twitText.length - diff);
                }
                else{
                    // Tell Twitter to reply to User with translated tweet
                    Twitter.post('statuses/update', {in_reply_to_status_id: retweetID, 
                    status: 'Translation: ' + twitText + ' @' + name}, function(err, data, response) {
                        if (!err) {
                            console.log('Successfully tweeted!!!');
                            console.log(timestamp());
                        }
                        // if there was an error while tweeting
                        else{
                            console.log('No new tweets');
                            console.log(timestamp());
                            console.log('Error Message : ' + err.message, '\nCode: '+err.code);
                            console.log('\n');
                        }
                    });

                }
            });
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
            console.log(timestamp());
            console.log('Error Message : ' + err.message, '\nCode: '+err.code);
        }
    });
});
```

To run this script open up a command line from the directory containing your bot.js file. Once there you can execute this script by running, `node bot.js` in the command line. Note that launching the bot this way will only keep it running so long as you're actively running the script. However, we want this bot to continue running long after we exit out of our command line. To do this we need to run bot.js with forever, which is located in your node-modules folder where all your dependencies are installed. You can run your bot with forever by executing the following command, `./node_modules/forever/bin/forever start bot.js`.

This will keep your bot running until you stop it by running, `./node_modules/forever/bin/forever stop bot.js`, or one of the other stop commands listed in **[Forever's](https://github.com/foreverjs/forever)** documentation.

If at any point you would like to view the logfile containing your bot's console logs, you can simply run, `./node_modules/forever/bin/forever logs`, which will return the name and location of your bot's logfile. 

Once you've got your script up and running, check out your Twitter bot's profile and sese what kind of antics it can get up to.
<p align="center">
    <img src="jcarrabino.github.io/pics/botPosts.png">
</p>

<br>
<p align="center">
    <A href="https://jcarrabino.github.io/#this-guide-will-explain">Back to top</A>
</p>
# Resources:
- [Twitter API Documentation](https://dev.twitter.com/overview/api)
- [Twit Node Client Documentation](https://github.com/ttezel/twit)
- [MSTranslator Documentation](https://github.com/nanek/mstranslator)
- [Node Schedule Documentation](https://github.com/node-schedule/node-schedule)
- [Console Timestamp Documentation](https://www.npmjs.com/package/console-timestamp)
- [Forever Documentation](https://github.com/foreverjs/forever)

© *John Carrabino ~ jcarrabino13@gmail.com*
