const Order = require('../models/orderSchema');
const createError = require('http-errors');

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json({ success: true, orders: orders});
    }
    catch(err) {
        next(err);
    }
    
};

exports.getOrder = async (req, res) => {
    try {
        const order = await Order.find(req.params.id);
        if (!order) throw createError(404);
        res.json({ success: true, order: order});
    }
    catch(err) {
        next(err);
    }
}

exports.postOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        res.json({ success: true, order: order});
    }
    catch(err) {
        next(err);
    }
    
};

exports.putOrder = async (req, res) => {
    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({ success: true, order: updateOrder });
    }
    catch(err) {
        next(err);
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) throw createError(404);
        res.json({ success: true, order: order });
    }
    catch(err) {
        next(err);
    }
};

