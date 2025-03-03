module.exports = (sequelize, DataTypes) => {
  const Slider = sequelize.define(
    "Slider",
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
  );

  return Slider;
};
