const ChatService = require('../Services/ChatService');

const ChatController = {};

ChatController.getAll = function (req, res, next) {
    const email = req.query.email;

    return ChatService.getAll(email)
        .then(function (list) {
            return list ? res.send(list) : res.status(400).json({ message: 'No user found' })
        })
        .catch(next);
};

ChatController.create = function (req, res, next) {
    const email = req.body.email;
    const target = req.body.target;

    return ChatController.create(email, target)
        .then(function (resp) {
            return res.send(resp);
        })
        .catch(next);
};

module.exports = ChatController;
