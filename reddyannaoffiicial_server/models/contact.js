module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,

      validate: { isEmail: true },
    },
    phone: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
  });

  return Contact;
};
