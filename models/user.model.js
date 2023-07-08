const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userType: String,
    email: String,
    gender: String,
    firstname: String,
    city: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
