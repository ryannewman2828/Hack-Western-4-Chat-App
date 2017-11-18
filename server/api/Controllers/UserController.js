const UserService = require('../Services/UserService');

const UserController = {};

UserController.register = function (req, res, next) {

};

UserController.login = function (req, res, next) {
    const email = req.body.email;
    const password = req.boby.password;
    
    return UserService.login(email, password)
        .then(function (token) {
            return res.status(200).json(token);
        })
        .catch(next);

};

module.exports = UserController;
