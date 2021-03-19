const express = require('express');
const router = express.Router();
const bookController = require('../Controller/book.controller')

router.post('/saveBook', bookController.saveBook);
router.get('/getAllBooks', bookController.getBooks);

module.exports = router;