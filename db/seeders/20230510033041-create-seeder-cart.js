'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [
      {
        user_id: 1,
        product_id: 1,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 2,
        quantity: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
