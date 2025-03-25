'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('interessuscriptores', {
      fields: ['int_id'],
      name: 'int_id_fk',
      type: 'foreign key',
      references: {
      table: 'intereses',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      await queryInterface.addConstraint('interessuscriptores', {
      fields: ['sus_id'],
      name: 'sus_id_fk',
      type: 'foreign key',
      references: {
      table: 'suscriptores',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('interessuscriptores', 'int_id_fk');
    await queryInterface.removeConstraint('interessuscriptores', 'sus_id_fk')
  }
};
