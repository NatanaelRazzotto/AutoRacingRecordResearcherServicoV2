const Sequelize = require("sequelize");
const config = require("../../../config");

const {
  db: { database, username, password },
} = config;
const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
  host: "db",//"127.0.0.1"
  port: 3306,
  logging: false,
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log(`Database sync & tables created and update!`)
  })

module.exports = sequelize;

