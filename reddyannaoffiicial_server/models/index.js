const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
// db.Admin = require("./admin")(sequelize, Sequelize);
// db.Card = require("./card")(sequelize, Sequelize);
// db.Slider = require("./slider")(sequelize, Sequelize);

db.Admin = require("./admin")(sequelize, Sequelize);
db.Blog = require("./blog")(sequelize, Sequelize);
db.Category = require("./categories")(sequelize, Sequelize);
db.Contact = require("./contact")(sequelize, Sequelize);

db.Category.hasMany(db.Blog, { foreignKey: "categoryId" });
db.Blog.belongsTo(db.Category, { foreignKey: "categoryId" });

module.exports = db;
