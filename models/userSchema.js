const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AddressSchema = require('./addressSchema');
const {encrypt, compare} = require('../lib/encryption');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    address: AddressSchema,
    password: {type: String, required: true},
    tokens: [
        {
            token: {type: String, require: true}
        }
    ]
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
});

UserSchema.methods.checkPassword = async function(password) {
    return await compare(password, this.password);
};

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, 'secretkey');
    this.tokens.push({token});
    return token;
}

module.exports = mongoose.model('User', UserSchema);