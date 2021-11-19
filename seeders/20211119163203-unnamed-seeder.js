'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert("Users",
      [
        {
          name: 'John',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jack',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
