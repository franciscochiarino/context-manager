const User = require('../models/userSchema');
const createError = require('http-errors');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ success: true, users: users});
    }
    catch(err) {
        next(err);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw createError(404);
        res.json({ success: true, user: user});
    }
    catch(err) {
        next(err);
    }
};

exports.postUser = async (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
        res.json({ success: true, user: user});
    }
    catch(err) {
        next(err);
    }
};

exports.putUser = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, user, {new: true});
        if (!updateUser) throw createError(404);
        res.json({ success: true, user: updateUser });
    }
    catch(err) {
        next(err);
    }
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) throw createError(404);
        res.json({ success: true, user: user});
    }
    catch(err) {
        next(err);
    }
};

