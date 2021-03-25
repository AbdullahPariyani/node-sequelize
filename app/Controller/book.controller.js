const books = new(require('../Models/book.model'))();
const { STATUS_CODES } = require('../../Configs/constants');
const { validationResult } = require('express-validator');
const { generateUUID } = require('../../Configs/helper');
class bookController {

    async Get(request, res) {
        try {
            res.send(await books.get());
        } catch (error) {
            console.log(error);
        }
    }

    async Add(request, response) {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty())
                return response.send(undefined, errors.errors);

            request.body.uuid = generateUUID();
            console.log('request', request.body);
            const insertData = await books.add(request.body);
            //response.handler.success(data);
            response.send(insertData);
        } catch (error) {
            console.log(error)
        }
    }

    async Delete(request, response) {
        try {
            const deleteBook = await books.delete(request.params.id);
            response.send({ msg: 'deleted successfully', deleteBook });
        } catch (error) {}
    }

    async Edit(request, response) {
        try {
            const updateBook = await books.edit(request.body);
            response.send(updateBook);
        } catch (error) {}
    }
}

module.exports = bookController;