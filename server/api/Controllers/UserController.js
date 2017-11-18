var Twitter = require('twitter');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const UserService = require('../Services/UserService');

const UserController = {};

const client = new Twitter({
    consumer_key: 'ooKqDmPPR82VA9tVDau8lQQQS',
    consumer_secret: 'ctqVfjxJeUpvijHjPWKsl3MAVNv4vOJ2285m3yV7rP7nzN8WZS',
    access_token_key: '738448370776186880-DGuEivW1voLUABdtMwJ4jOzhXIHRfmg',
    access_token_secret: 'WvbO5DzyzYJ0W6IPgcQKn7npyAGGVpnCSjNi0yFsRkx6d'
});

const personality_insights = new PersonalityInsightsV3({
    username: 'c354d2d0-7be2-4142-9fc5-39ef8fcb7d06',
    password: 'yNbS6AjQynH6',
    version_date: '2017-10-13'
});

UserController.register = function (req, res, next) {
    const body = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        userStatus: 0
    };
    const twitterName = req.body.twitter;

    const params = {
        screen_name: twitterName,
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

            response.personality.forEach(function (obj) {
               obj.children.forEach(function (child) {
                   switch (child.name){
                       case "Adventurousness":
                           body.adventerous = child;
                           break;
                       case "Outgoing":
                           body.outgoing = child;
                           break;
                       case "Altruism":
                           body.altruism = child;
                           break;
                       case "Melancholy":
                           body.melancholy = child;
                           break;
                       case "Susceptible to stress":
                           body.stress = child;
                           break;
                       case "Sympathy":
                           body.sympathy = child;
                           break;
                   }
               });
            });

            response.needs.forEach(function (obj) {
                switch (obj.name){
                    case "Excitement":
                        body.needsExcitement = obj;
                        break;
                    case "Stability":
                        body.needsStability = obj;
                        break;
                }
            });

            return UserService.register(body)
                .then(function () {
                    return res.status(200).send({message: 'success'});
                })
        });
    });
};

UserController.login = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    
    return UserService.login(email, password)
        .then(function (token) {
            return res.status(200).json(token);
        })
        .catch(next);
};

module.exports = UserController;
