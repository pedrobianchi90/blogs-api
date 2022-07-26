const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  }, { timestamps: false });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'id', as: 'posts'
    });
  }

  return User;
};

module.exports = User;
