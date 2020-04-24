
exports.getBooks = (req, res) => {
    res.json({ success: true, books: books});
};

exports.getBook = (req, res) => {

    res.json({ success: true, book: book});
}

exports.postBook = (req, res) => {

    res.json({ success: true, book: book);
};

exports.putBook = (req, res) => {

    res.json({ success: true, book: book });
}

exports.deleteBook = (req, res) => {

    res.json({ success: true, book: book });
};

