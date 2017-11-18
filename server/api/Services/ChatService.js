const mongoose = require('mongoose');
var User = mongoose.model('User');

const ChatService = {};

ChatService.getAll = function (email) {
    return User.findOne({ email: email })
        .then(function (user) {
            if (user) {
                return user.chats
            }
            return null;
        })
};

module.exports = ChatService;
