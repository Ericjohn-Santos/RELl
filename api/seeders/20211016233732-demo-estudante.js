'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Estudantes',
      [{
        nome: 'Jão da Silva',
        email: "jao@gmail.com",
        data_nascimento: "1978-12-29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Zé dos Santos',
        email: "ze@gmail.com",
        data_nascimento: "1980-08-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Pereira',
        email: "maria@gmail.com",
        data_nascimento: "1983-03-03",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Zefa Ferreira',
        email: "zefa@gmail.com",
        data_nascimento: "1985-05-05",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
