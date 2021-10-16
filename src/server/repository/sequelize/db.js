const Sequelize = require("sequelize");
const config = require("../../../../config");

const {
  db: { database, username, password },
} = config;
// const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
  host: "127.0.0.1",
  logging: false,
});

module.exports = sequelize;

// logging: NODE_ENV === "production" ? false : console.log,
//  logging: false,
