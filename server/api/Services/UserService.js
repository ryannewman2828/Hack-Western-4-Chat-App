const mongoose = require('mongoose');
const BPromise = require('bluebird');
var User = mongoose.model('User');

const UserService = {};

UserService.register = function (body) {
    var newUser = new User();
    newUser.name = body.name;
    newUser.email = body.email;
    newUser.password = body.password;
    newUser.userStatus = body.userStatus;
    newUser.stress = body.stress;
    newUser.sympathy = body.sympathy;
    newUser.outgoing = mongoose.Schema.Types.Mixed;
    newUser.needsExcitment = body.needsExcitement;
    newUser.needsStability = body.needsStability;
    newUser.adventerous = body.adventerous;
    newUser.altruism = body.altruism;
    newUser.melancholy = body.melancholy;
    newUser.tone = {};
    newUser.chats = [];

    newUser.save(function(err) {
        if (err) {
            throw err;
        }
    });

    return BPromise.resolve(true);
};

UserService.login = function (email, password) {
    return User.findOne({ email: email })
        .then(function (user) {
            if (user && user.password === password){
                console.log(user.generateJwt())
                return BPromise.resolve({ token: user.generateJwt(), email: email });
            }
            return BPromise.reject();
        })
};

module.exports = UserService;
