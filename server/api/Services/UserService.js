const mongoose = require('mongoose');
const BPromise = require('bluebird');
var User = mongoose.model('User');

const UserService = {};

UserService.register = function () {
    
};

UserService.login = function (email, password) {
    User.find({ email: email })
        .then(function (user) {
            if (user && user.password === password){
                return BPromise.resolve({ token: user.generateJwt, email: email });
            }
        })
};

module.exports = UserService;
