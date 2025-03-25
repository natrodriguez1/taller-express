'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suscriptores', [{
      nombre: 'Natalie Rodriguez',
      email: 'natalie@uees.com',
      fecha_registro: '2025-03-24',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Juan Jaramillo',
      email: 'juan@uees.com',
      fecha_registro: '2025-03-25',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suscriptores', null, {});
  }
};
