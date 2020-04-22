const db = require('../models/dataBase');

exports.getOrders = (req, res) => {
    const orders = db.get('orders').value();
    res.json({ success: true, orders: orders});
};

exports.getOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const order = db.get('orders').find({id}).value();
    res.json({ success: true, order: order});
}

exports.postOrder = (req, res) => {
    req.body.id = db.get('orders').value().length;
    db.get('orders').push(req.body).write();
    res.json({ success: true, order: db.get('orders').last().value()});
};

exports.putOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const order = req.body;
    db.get('orders').find({id}).assign(order).write();
    res.json({ success: true, order: order });
}

exports.deleteOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const order = db.get('orders').remove({id}).write();
    res.json({ success: true, order: order });
};

