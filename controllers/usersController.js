
exports.getUsers = (req, res) => {
    res.json({ success: true, users: users});
};

exports.getUser = (req, res) => {
    res.json({ success: true, user: user});
}

exports.postUser = (req, res) => {
    res.json({ success: true, user: db.get('users').last().value()});
};

exports.putUser = (req, res) => {
    res.json({ success: true, user: user });
}

exports.deleteUser = (req, res) => {
    res.json({ success: true, user: user });
};

