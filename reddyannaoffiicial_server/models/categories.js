module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
    },
  });

  Category.associate = (models) => {
    Category.hasMany(models.Blog, {
      foreignKey: "categoryId",
      onDelete: "CASCADE",
    });
  };

  return Category;
};
