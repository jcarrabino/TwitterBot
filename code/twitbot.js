//Set up Twitter 
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

//Set up MSTranslator
var MsTranslator = require('mstranslator');
var MSconfig = require('./MSkey.js');
var client = new MsTranslator(MSconfig, true);

//Set up Node-Scheduler for Automation
var schedule = require('node-schedule');

//Set rules for retweet schedule
var rule = new schedule.RecurrenceRule();
rule.minute = 10;
rule.minute = 5;
rule.minute = 30;
rule.minute = 35;
rule.minute = 45;

var retweet = function() {
    // find latest tweet according the query 'q' in params
    var params = {
        q: 'from:realDonaldTrump',  // REQUIRED
        result_type: 'recent',
        count: '5'
    }
    // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twitter.get('search/tweets', params, function(err, data) {
        //Declare Variables
        var ogText = '';
        var retweetID = '';
        var name = '';
        var i = 0;
        // if there no errors
        if (!err) {
            for (i; i<5; i++){
                ogText = data.statuses[i].text;
                retweetID = data.statuses[i].id_str;
                name = data.statuses[i].user.screen_name;
                if(ogText.length <= 105){
                    if (ogText.length>=60)
                        break;
                }
            }
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
                if (twitText.length > 140) {
                    var diff = twitText.length - 140;
                    twitText = twitText.substring(0, twitText.length - diff);
                }
                
                // Tell Twitter to reply to User with translated tweet
                Twitter.post('statuses/update', {in_reply_to_status_id: retweetID, 
                    status: 'Translation: ' + twitText + ' @' + name}, function(err, response) {
                    if (response) {
                        console.log('Retweeted!!!');
                    }
                    // if there was an error while tweeting
                    if (err) {
                        console.log(err);
                    }
                });
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
};

//Call on retweet function based on scheduler's rules
var trollBot = schedule.scheduleJob(rule, function(){
    // find latest tweet according the query 'q' in params
    var params = {
        q: 'from:realDonaldTrump',  // REQUIRED
        result_type: 'recent',
        count: '5'
    }
    // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twitter.get('search/tweets', params, function(err, data) {
            //Declare Variables
            var ogText = '';
            var retweetID = '';
            var name = '';
            var i = 0;
            // if there no errors
            if (!err) {
                for (i; i<5; i++){
                    ogText = data.statuses[i].text;
                    retweetID = data.statuses[i].id_str;
                    name = data.statuses[i].user.screen_name;
                    if(ogText.length <= 105){
                        if (ogText.length>=60)
                            break;
                    }
                }
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
                    if (twitText.length > 140) {
                        var diff = twitText.length - 140;
                        twitText = twitText.substring(0, twitText.length - diff);
                    }
                    
                    // Tell Twitter to reply to User with translated tweet
                    Twitter.post('statuses/update', {in_reply_to_status_id: retweetID, 
                        status: 'Translation: ' + twitText + ' @' + name}, function(err, response) {
                        if (response) {
                            console.log('Retweeted!!!');
                        }
                        // if there was an error while tweeting
                        if (err) {
                            console.log(err);
                        }
                    });
                });
            }
            // if unable to Search a tweet
            else {
              console.log('Something went wrong while SEARCHING...');
            }
        });
    });
