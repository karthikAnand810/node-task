const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
