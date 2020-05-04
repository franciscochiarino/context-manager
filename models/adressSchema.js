const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdressSchema = new Schema({
    street: {type: String},
    city: {type: String},
    country: {type: String}
});

module.exports = AdressSchema;