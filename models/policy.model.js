const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policy_mode: Number,
    policy_number: String,
    premium_amount_written: Number,
    premium_amount: Number,
    policy_type: String,
    policy_start_date: Date,
    policy_end_date: Date,
    csr: String,
    agent: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    lob: { type: mongoose.Schema.Types.ObjectId, ref: 'LOB' },
    carrier: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrier' },
    hasActiveClientPolicy: String
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
