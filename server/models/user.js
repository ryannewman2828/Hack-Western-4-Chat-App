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
    stress: Schema.Types.Mixed,
    sympathy: Schema.Types.Mixed,
    outgoing: Schema.Types.Mixed,
    needsExcitment: Schema.Types.Mixed,
    needsStability: Schema.Types.Mixed,
    adventerous: Schema.Types.Mixed,
    altruism: Schema.Types.Mixed,
    melancholy: Schema.Types.Mixed,
    tone: Schema.Types.Mixed,
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
