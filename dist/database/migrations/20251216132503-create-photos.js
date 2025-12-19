"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('photo', { 

          id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true  
          },
          filename:{
            type: Sequelize.STRING,
            allowNull:false
          },
          originalfilename:{
            type: Sequelize.STRING,
            allowNull:false
          },
          student_id:{
            type: Sequelize.INTEGER,
            allowNull:true,
            references:{
              model:'student',
              key:'id'
            }, 
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          },
          created_at:{
            type: Sequelize.DATE,
            allowNull:false
          },
          updated_at:{
            type: Sequelize.DATE,
            allowNull:false
          },
        
      })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('photo');
     */
  }
};
