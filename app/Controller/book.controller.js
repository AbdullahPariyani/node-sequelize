const books = new(require('../Models/book.model'))();
class bookController {

    async Get(req, res) {
        res.send(await books.getBooks());
    }
}

module.exports = bookController;