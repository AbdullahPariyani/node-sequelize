module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define("books", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: Sequelize.STRING,
        book_author: Sequelize.STRING,
        book_publish_Date: Sequelize.DATE,
        book_type: Sequelize.STRING
    });
    return Books;
}