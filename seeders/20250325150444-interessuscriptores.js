'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [intereses, intereses_metadata] = await queryInterface.sequelize.query('SELECT id FROM intereses');
    let [suscriptores, suscriptores_metadata] = await queryInterface.sequelize.query('SELECT id FROM suscriptores');

    await queryInterface.bulkInsert('interessuscriptores', [
      { 
        int_id: intereses[0].id, 
        sus_id: suscriptores[0].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[1].id, 
        sus_id: suscriptores[0].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[2].id, 
        sus_id: suscriptores[0].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[4].id, 
        sus_id: suscriptores[0].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[3].id, 
        sus_id: suscriptores[1].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[5].id, 
        sus_id: suscriptores[1].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[8].id, 
        sus_id: suscriptores[1].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        int_id: intereses[9].id, 
        sus_id: suscriptores[1].id, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('interessuscriptores', null, {});
  }
};
