module.exports = app => {
    app.get('/', (req, res) => {
        res.send('welcome to Book managment portal 1');
    });

    // Book manage
    app.use('/book', require('./book.router'));
}