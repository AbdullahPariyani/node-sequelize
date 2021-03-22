const { header, body, param } = require('express-validator');

exports.add = [
    body('book_name', 'book_name field is required!').trim().notEmpty(),
    body('book_author', 'book_author field is required!').trim().notEmpty(),
    body('book_publish_Date', 'book_publish_Date field is required!').trim().notEmpty(),
    body('book_type', 'book_type field is required!').trim().notEmpty()
]