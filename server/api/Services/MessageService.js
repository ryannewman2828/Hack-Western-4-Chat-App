var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const MessageService = {};

const tone_analyzer = new ToneAnalyzerV3({
    username: '3c9bc4c1-e7af-40a1-afda-c24586093085',
    password: 'Mc2IH5Crntqk',
    version_date: '2016-05-19'
});

MessageService.analyze = function (messages) {
    
};

module.exports = MessageService;
