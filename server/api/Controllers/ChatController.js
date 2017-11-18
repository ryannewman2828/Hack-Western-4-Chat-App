const ChatService = require('../Services/ChatService');

const ChatController = {};

ChatController.getAll = function (req, res, next) {
    const username = req.query.username;

    return ChatService.getAll(username)
        .then(function (list) {
            return list ? res.send(list) : res.status(400).json({ message: 'No user found' })
        })
        .catch(next);
};

modules.exports = ChatController;
