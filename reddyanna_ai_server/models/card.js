module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
  );

  return Card;
};
