const express = require('express');
const router = express.Router();
const bookController = new(require('../Controller/book.controller'))();
//router.post('/saveBook', bookController.saveBook);
router.get('/getAllBooks', bookController.Get);

// router.route('/getAllBooks').post(bookController.Get);

module.exports = router;