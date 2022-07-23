module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        }
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('PostCategories');
  }
};
