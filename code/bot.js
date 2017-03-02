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
    // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

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
                            console.log('No new tweets\n');
                            console.log(timestamp());
                            console.log('\nError Message : ' + err.message, '\nCode: '+err.code);
                            console.log('\n\n');
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
                            console.log('No new tweets\n');
                            console.log(timestamp());
                            console.log('\nError Message : ' + err.message, '\nCode: '+err.code);
                            console.log('\n\n');
                        }
                    });

                }
            });
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...\n');
            console.log(timestamp());
            console.log('\nError Message : ' + err.message, '\nCode: '+err.code);
            console.log('\n\n');
        }
    });
});