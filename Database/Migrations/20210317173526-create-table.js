'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.createTable('Books', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            book_name: Sequelize.STRING,
            book_author: Sequelize.STRING,
            book_publish_Date: Sequelize.DATE,
            book_type: Sequelize.STRING,

            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.dropTable('books');
    }
};