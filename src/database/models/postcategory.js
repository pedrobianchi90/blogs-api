
// const attributes = {
//   postId: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     references: {
//       model: 'PostBlog',
//       key: 'id'
//     },
//   },
//   categoryId: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     references: {
//       model: 'Category',
//       key: 'id'
//     },
//   },
// }

/** @param {import('sequelize').Sequelize} sequelize */
module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', attributes = {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'PostBlog',
        key: 'id'
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      },
    },
  }, { timestamps: false })

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      through: postCategory,
      otherKey: 'postId',
    })

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'postId',
      through: postCategory,
      otherKey: 'categoryId',
    })
  }

  return postCategory;
};