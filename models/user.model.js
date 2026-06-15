const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_type: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
}, {
    timestamps: true,
})

const UserModel = new mongoose.model('User', UserSchema);

module.exports = UserModel;