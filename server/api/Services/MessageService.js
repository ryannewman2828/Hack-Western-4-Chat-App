var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const mongoose = require('mongoose');
var User = mongoose.model('User');


const MessageService = {};

const tone_analyzer = new ToneAnalyzerV3({
    username: '3c9bc4c1-e7af-40a1-afda-c24586093085',
    password: 'Mc2IH5Crntqk',
    version_date: '2016-05-19'
});

MessageService.analyze = function (messages) {
    const email1 = messages.messages.email1;
    const email2 = messages.messages.email2;

    var messages1 = Object.keys(messages.messages).map(function (key) {
        return messages.messages[key];
    }).filter(function (message) {
        return message.senderEmail === email1;
    });

    var messages2 = Object.keys(messages.messages).map(function (key) {
        return messages.messages[key];
    }).filter(function (message) {
        return message.senderEmail === email2;
    });

    User.findOne({ email: email1 })
        .then(function (user1) {
            if (messages1.length === 0) {
                return null;
            }
            return tone_analyzer.tone({ text: messages1.join('\n'), tones: 'emotion' },
                function(err, tone) {
                    if (err) {
                        console.log(err);
                    }
                    user1.tone = tone;
                    user1.save();
                });
        })
        .then(function () {
            return User.findOne({ email: email2 })
                .then(function (user2) {
                    if (messages2.length === 0) {
                        return null;
                    }
                    return tone_analyzer.tone({ text: messages2.join('\n'), tones: 'emotion' },
                        function(err, tone) {
                            if (err) {
                                console.log(err);
                            }
                            user2.tone = tone;
                            user2.save();
                        });
                })
        })
};

module.exports = MessageService;
