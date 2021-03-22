const books = new(require('../Models/book.model'))();
const { STATUS_CODES } = require('../Configs/constants');
class bookController {

    async Get(request, response) {
        try {
            let books = await books.getBooks();
            if (books)
                response.handler.success(books, 'STATUS.SUCCESS')
            else
                response.handler.notFound();
        } catch (error) {
            response.handler.serverError(error)
        }
    }

    async Add(request, response) {
        try {
            console.log("controller");
            const insertData = await books.add(request.body);
            //response.handler.success(data);
            response.send(insertData);
        } catch (error) {

        }

    }
}

module.exports = bookController;