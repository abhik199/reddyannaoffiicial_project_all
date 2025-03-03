module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    blog_title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    blog_img: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categories", // Must match the table name in the DB
        key: "id",
      },
    },
  });

  return Blog;
};
