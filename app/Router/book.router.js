const express = require('express');
const router = express.Router();
const bookController = new(require('../Controller/book.controller'))();
const bookValidators = require('../Middlewares/Validators/books.validators');
//router.post('/saveBook', bookController.saveBook);


router.route('/saveBook').post(bookValidators.add, bookController.Add);
router.route('/getAllBooks').get(bookController.Get);
router.route('/deleteBook/:id').delete(bookController.Delete);

module.exports = router;