'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Recycled Plastic Bike',
        description: 'Accusamus tempora dolorem beatae voluptatum. Veniam doloremque aut aut in ipsam alias perspiciatis libero. Similique explicabo amet error sit officiis natus voluptatem. Dolorum porro eos. Tempora laudantium consectetur quidem a. Quo aliquam totam quam assumenda.',
        price: '905.00',
        category_id: 1,
        seller_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tasty Bronze Salad',
        description: 'Quidem sapiente maiores dolores sit animi quis enim harum corrupti. Suscipit incidunt assumenda eveniet numquam blanditiis soluta. Maxime exercitationem ratione nisi. Eum impedit quibusdam.',  
        price: '54.00',
        category_id: 2,
        seller_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
