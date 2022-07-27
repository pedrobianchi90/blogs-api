const { DataTypes } = require('sequelize');

const attributes = {
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    // references: {
    //   model: 'BlogPosts',
    //   key: 'id',
    // }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    // references: {
    //   model: 'Categories',
    //   key: 'id',
    // }
  },
}
/** 
 * @param {import('sequelize').Sequelize} sequelize
*/
module.exports = (sequelize, DataTypes) => {
  const postCategoryModel = sequelize.define('PostCategory', attributes, {
    tableName: 'PostCategories',
    timestamps: false,
  });
  postCategoryModel.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postCategoryModel,
    });
    models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        through: postCategoryModel
      });
  }
  return postCategoryModel;
};