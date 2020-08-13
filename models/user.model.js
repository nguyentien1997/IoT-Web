const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { require: true, type: String },
    password: { require: true, type: String },
    role: { require: true, type: String }
})

module.exports = mongoose.model('user', UserSchema);