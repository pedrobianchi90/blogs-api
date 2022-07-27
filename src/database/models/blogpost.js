const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  published: {
    type: DataTypes.DATE,
  },
  updated: {
    type: DataTypes.DATE,
  }
}
/** 
 * @param {import('sequelize').Sequelize} sequelize
*/
module.exports = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPost', attributes, {
    tableName: 'BlogPosts',
    timestamps: false,
  });
    blogPostModel.associate = (models) => {
      blogPostModel.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  }
  return blogPostModel;
};