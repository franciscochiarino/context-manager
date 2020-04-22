exports.getBooks = (req, res) => {
    console.log(req.body)
    res.send('Get request sent');
};

exports.postBook = (req, res) => {
    res.send('Post request sent');
};

exports.deleteBook = (req, res) => {
    console.log(req.params.id)
    res.send('Delete request sent');
};