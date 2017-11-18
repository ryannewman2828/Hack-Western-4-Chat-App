const mongoose = require('mongoose');
const ChatUtil = require('../Util/ChatUtil');
var User = mongoose.model('User');
const Guid = require('guid');

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

ChatService.create = function (email, target) {
    return User.findOne({ email: email })
        .then(function (user) {
            const chats = user.chats.map(function (chat) {
                return {
                    email: chat.email
                }
            });
            if (target === 1 || target === 2) {
                return User.find({ userStatus: target})
                    .then(function (users) {
                        for (var i = 0; i < users.length; i++) {
                            if (chats.indexOf(users[i].email) === -1) {
                                const guid = Guid.raw();
                                user.chats.append({
                                    message_id: guid,
                                    email: users[i].email,
                                    name: users[i].name,
                                });
                                return {
                                    message_id: guid,
                                    user1Name: user.name,
                                    user2Name: users[i].name,
                                    user1Email: user.email,
                                    user2Email: users[i].email,
                                    status1: user.userStatus,
                                    status2: users[i].userStatus
                                };
                            }
                        }
                    })
            }
            return User.find({ userStatus: target, searching: true })
                .then(function (users) {
                    for (var i = 0; i < users.length; i++) {
                        if (chats.indexOf(users[i].email) === -1 && ChatUtil.isMatch(users[i], user)) {
                            const guid = Guid.raw();
                            user.chats.append({
                                message_id: guid,
                                email: users[i].email,
                                name: users[i].name,
                            });
                            user.save();
                            return {
                                message_id: guid,
                                user1Name: user.name,
                                user2Name: users[i].name,
                                user1Email: user.email,
                                user2Email: users[i].email,
                                status1: user.userStatus,
                                status2: users[i].userStatus
                            };
                        }
                    }
                });
        });
};

module.exports = ChatService;
