'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      {
        order_id: 1,
        payment_method: 'debit',
        amount: '2715.00',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        order_id: 2,
        payment_method: 'cash',
        amount: '104.00',
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
},

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Payments', null, {});
     
  }
};
