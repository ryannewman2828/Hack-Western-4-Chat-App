var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const BPromise = require('bluebird');
const mongoose = require('mongoose');
var User = mongoose.model('User');


const MessageService = {};

const tone_analyzer = new ToneAnalyzerV3({
    username: '3c9bc4c1-e7af-40a1-afda-c24586093085',
    password: 'Mc2IH5Crntqk',
    version_date: '2016-05-19'
});

MessageService.analyze = function (messages) {
    const userMap = {};

    const arrMessages = Object.keys(messages).map(function (key) {
        return messages[key].messages;
    });

    arrMessages.forEach(function (messages) {
        messages = Object.keys(messages).map(function (key) {
            return messages[key];
        });
        messages.forEach(function (message) {
            if (userMap.hasOwnProperty(message.senderEmail)) {
                userMap[message.senderEmail].push(message.text);
            } else {
                userMap[message.senderEmail] = [message.text];
            }
        });
    });

    BPromise.all(Object.keys(userMap).map(function (key) {
        return User.findOne({ email: key })
            .then(function (user) {
                if (userMap[key].length === 0) {
                    return null;
                }
                return tone_analyzer.tone({ text: userMap[key].join('\n'), tones: 'emotion' },
                    function(err, tone) {
                        if (err) {
                            console.log(err);
                        }
                        user.tone = tone.document_tone.tone_categories[0].tones;
                        user.save();
                    });
            })
    }));
};

module.exports = MessageService;
