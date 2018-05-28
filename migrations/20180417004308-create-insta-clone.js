'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('insta_clones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
        unique: true
      },
      password: {
        type: Sequelize.STRING
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING
        allowNull:false
      },
      lastName: {
        type: Sequelize.STRING
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('insta_clones');
  }
};
