const User = require('../models/userSchema');

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
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json({ success: true, user: user});
    }
    catch(err) {
        next(err);
    }
};

exports.postUser = async (req, res) => {
    const user = req.body;
    try {
        await User.insertMany(user);
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
        await User.findByIdAndUpdate(id, user);
        res.json({ success: true, user: user });
    }
    catch(err) {
        next(err);
    }
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.json({ success: true });
    }
    catch(err) {
        next(err);
    }
};

