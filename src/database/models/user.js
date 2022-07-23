/**
 * 
 * @param {import('sequelize').sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    displayName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
};