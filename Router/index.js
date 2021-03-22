module.exports = app => {
    app.get('/', (req, res) => {
        res.send('welcome to Book managment portal');
    });

    // Book manage
    app.use('/book', require('./book.router'));
}