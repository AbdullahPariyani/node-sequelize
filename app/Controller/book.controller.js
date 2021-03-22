const books = new(require('../Models/book.model'))();
const { STATUS_CODES } = require('../../Configs/constants');
class bookController {

    async Get(request, response) {
        try {
            const data = await books.getBooks();
            response.handler.success(data);
            //response.send(data);
        } catch (error) {
            console.log(error);
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