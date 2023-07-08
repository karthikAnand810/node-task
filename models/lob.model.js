const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lobSchema = new Schema({
    company_name: String,
    category_name: String,
});

const LOB = mongoose.model('LOB', lobSchema);

module.exports = LOB;
