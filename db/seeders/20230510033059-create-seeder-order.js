'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        product_id: 1,
        quantity: 3,
        status: 'delivered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 2,
        quantity: 2,
        status: 'paid',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
},

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Orders', null, {});
     
  }
};
