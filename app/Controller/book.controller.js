const db = require('../models');
const Books = db.books;
const Op = db.Sequelize.Op;

exports.saveBook = (req, res) => {
    try {
        Books.create({
            book_name: req.body.book_name,
            book_author: req.body.book_author,
            book_publish_Date: req.body.book_publish_Date,
            book_type: req.body.book_type
        }).then(data => {
            res.send(data);
        }).catch(error => {
            console.log(error)
        });
    } catch (error) {
        console.log('error', error);
    }
}

exports.getBooks = (req, res) => {
    Books.findAll().then(data => res.send(data)).catch(error => console.log('not found'));
}