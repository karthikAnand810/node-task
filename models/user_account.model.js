const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    account_name: String,
    email: String,
    account_type: String,
    phone: String,
    address: String,
    state: String,
    zip: String,
    dob: Date,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
