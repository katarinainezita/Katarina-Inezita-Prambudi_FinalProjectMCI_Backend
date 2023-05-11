'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jeanne Swift',
        email: 'Colt.Borer@yahoo.com',
        password: 'cwG6yVIUCA9LlI1',
        role: 'buyer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pearl Kihn',
        email: 'Darrel85@gmail.com',
        password: '0Io16__WC1zVTOx',
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null,{});
  }
};
