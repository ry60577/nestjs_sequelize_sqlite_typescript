'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const currentTime = new Date().toISOString();
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'test6@cybertan.com.tw',
          password: 'Mis@12345',
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          email: 'test7@cybertan.com.tw',
          password: 'Mis@12345',
          createdAt: currentTime,
          updatedAt: currentTime,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Users',
      {
        email: ['test6@cybertan.com.tw', 'test7@cybertan.com.tw'],
      },
      {},
    );
  },
};
