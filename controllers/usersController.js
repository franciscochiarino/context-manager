const db = require('../models/dataBase');

exports.getUsers = (req, res) => {
    const users = db.get('users').value();
    res.json({ success: true, users: users});
};

exports.getUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = db.get('users').find({id}).value();
    res.json({ success: true, user: user});
}

exports.postUser = (req, res) => {
    req.body.id = db.get('users').value().length;
    db.get('users').push(req.body).write();
    res.json({ success: true, user: db.get('users').last().value()});
};

exports.putUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    db.get('users').find({id}).assign(user).write();
    res.json({ success: true, user: user });
}

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = db.get('users').remove({id}).write();
    res.json({ success: true, user: user });
};

