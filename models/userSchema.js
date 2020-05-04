const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddressSchema = require('./addressSchema');
const {encrypt, compare} = require('../lib/encryption');

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    address: AddressSchema,
    password: {type: String, required: true}
},
{
    toObject: {
        virtuals: true
    }
});

UserSchema.virtual('fullName').get(() => {
    return `${this.firstName} ${this.lastName}` 
});

UserSchema.pre('save', async function(next) {
    this.password = await encrypt(this.password);
})

module.exports = mongoose.model('User', UserSchema);