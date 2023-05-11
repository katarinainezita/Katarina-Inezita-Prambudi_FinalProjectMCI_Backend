'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        user_id: 1,
        product_id: 2,
        rating: 4,
        comment: 'Est odit animi libero quisquam quos necessitatibus. Minus numquam maiores dolores iusto. Hic perspiciatis pariatur iusto dolorem repellendus laborum quia occaecati ad. Adipisci sequi saepe vitae est eos odio id. Vel cumque fugit recusandae debitis.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 2,
        rating: 5,
        comment: 'Nemo dolorum illo possimus veniam fugit consequuntur. Amet dignissimos sed nesciunt. Est modi nesciunt in tenetur saepe laboriosam commodi. Similique sapiente quisquam id deserunt quae officiis.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ], {});
},

async down (queryInterface, Sequelize) {
    
  await queryInterface.bulkDelete('Reviews', null, {});
  
}
};

