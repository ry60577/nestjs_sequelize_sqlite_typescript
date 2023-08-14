'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const currentTime = new Date().toISOString();
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'test4@cybertan.com.tw',
          password: 'Mis@12345',
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        {
          email: 'test5@cybertan.com.tw',
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
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.bulkDelete('Users', {
      email: ['test4@cybertan.com.tw', 'test5@cybertan.com.tw'],
    });
  },
};
