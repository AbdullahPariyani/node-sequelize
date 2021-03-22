'use strict';
module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define("books", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: DataTypes.STRING,
        book_author: DataTypes.STRING,
        book_publish_Date: DataTypes.DATE,
        book_type: DataTypes.STRING
    });
    return Books;
}