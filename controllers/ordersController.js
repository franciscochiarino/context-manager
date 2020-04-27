
exports.getOrders = async (req, res) => {
    try {
        res.json({ success: true, orders: orders});
    }
    catch(err) {
        next(err);
    }
    
};

exports.getOrder = async (req, res) => {
    try {

    }
    catch(err) {
        next(err);
    }
    res.json({ success: true, order: order});
}

exports.postOrder = async (req, res) => {
    try {

    }
    catch(err) {
        next(err);
    }
    res.json({ success: true, order: db.get('orders').last().value()});
};

exports.putOrder = async (req, res) => {
    try {

    }
    catch(err) {
        next(err);
    }
    res.json({ success: true, order: order });
}

exports.deleteOrder = async (req, res) => {
    try {

    }
    catch(err) {
        next(err);
    }
    res.json({ success: true, order: order });
};

