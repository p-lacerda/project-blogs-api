'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        defaultValue: 1,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        type: Sequelize.STRING
      },
      updated: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};