var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
            unique: true,
            required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userStatus: {
        type: Number,
        required: true
    },
    stress: mongoose.Schema.Types.Mixed,
    sympathy: mongoose.Schema.Types.Mixed,
    outgoing: mongoose.Schema.Types.Mixed,
    needsExcitment: mongoose.Schema.Types.Mixed,
    needsStability: mongoose.Schema.Types.Mixed,
    adventerous: mongoose.Schema.Types.Mixed,
    altruism: mongoose.Schema.Types.Mixed,
    melancholy: mongoose.Schema.Types.Mixed,
    tone: mongoose.Schema.Types.Mixed,
    chats: [String],
});

userSchema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000)
    }, "SECRET");
};

module.exports = mongoose.model('User', userSchema);
