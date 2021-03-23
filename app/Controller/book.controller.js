const books = new(require('../Models/book.model'))();
const { STATUS_CODES } = require('../../Configs/constants');
const { validationResult } = require('express-validator');
class bookController {

    async Get(request, res) {
        try {
            //console.log(res);
            //res.handler.success({ userName: "John" }, "User created")
            res.send(await books.get());
        } catch (error) {
            console.log(error);
        }
    }

    async Add(request, response) {
        try {
            const errors = validationResult(request);
            console.log(errors);
            if (!errors.isEmpty())
                return response.send(undefined, errors.errors);

            const insertData = await books.add(request.body);
            //response.handler.success(data);
            response.send(insertData);
        } catch (error) {}
    }

    async Delete(request, response) {
        try {
            const deleteBook = await books.delete(request.params.id);
            response.send({ msg: 'deleted successfully', deleteBook });
        } catch (error) {}
    }

    async Update(request, response) {
        try {

        } catch (error) {}
    }
}

module.exports = bookController;