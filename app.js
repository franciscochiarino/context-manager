// Modules
const express = require('express');
const createError = require('http-errors');

// Routes
const indexRoute = require('./routes/indexRoute');
const booksRoute = require('./routes/booksRoute');

// Server
const app = express();

// Port
const port = process.env.PORT || 3000;

// Listen
app.listen(port, () => console.log('server is running'));

// Middleware
app.use(express.json());
app.use('/', indexRoute);
app.use('/books', booksRoute);

// Error handler
app.use((res, req, next) => {
    next(createError(404));
});

// Error function
app.use((err, req, res, next) => {
    res.json({
        status: err.status,
        message: err.message
    })
});


