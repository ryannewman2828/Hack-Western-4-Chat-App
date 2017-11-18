var Twitter = require('twitter');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
    username: 'c354d2d0-7be2-4142-9fc5-39ef8fcb7d06',
    password: 'yNbS6AjQynH6',
    version_date: '2017-10-13'
});

const TwitterController = {};

TwitterController.test = function (req, res) {
    var client = new Twitter({
        consumer_key: 'ooKqDmPPR82VA9tVDau8lQQQS',
        consumer_secret: 'ctqVfjxJeUpvijHjPWKsl3MAVNv4vOJ2285m3yV7rP7nzN8WZS',
        access_token_key: '738448370776186880-DGuEivW1voLUABdtMwJ4jOzhXIHRfmg',
        access_token_secret: 'WvbO5DzyzYJ0W6IPgcQKn7npyAGGVpnCSjNi0yFsRkx6d'
    });

    var params = {
        screen_name: 'Ryannewman28',
        headers: {
            'accept-language': 'en',
            'accept': 'application/json',
            "Content-Type": "application/json"
        }
    };
    return client.get('statuses/user_timeline', params, function(error, tweets, response) {
        tweets = tweets.map(function (tweet) {
            return {
                "content": tweet.text
            }
        });

        var params = {
            // Get the content items from the JSON file.
            content_items: tweets,
            consumption_preferences: true,
            raw_scores: true,
            headers: {
                'accept-language': 'en',
                'accept': 'application/json',
                "Content-Type": "application/json"
            }
        };

        return personality_insights.profile(params, function(error, response) {
            return res.send(response);
        });
    });
};

module.exports = TwitterController;
