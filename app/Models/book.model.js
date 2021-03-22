const { books: BookSchemas } = require('../../Database/Schemas');
class bookModel {
    async getBooks() {
        console.log('model');
        try {
            return await BookSchemas.findAll();
        } catch (error) {
            console.log('error', error);
        }

    }
}

module.exports = bookModel;