const { DataTypes } = require('sequelize');
const database = require('../../db');

const ModelRaces = database.define(
  'races',
  {
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    round: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    circuitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'circuits',
        key: 'circuitId'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

ModelRaces.associate = function (models) {
  ModelRaces.belongsTo(models.circuits, { foreignKey: 'circuitId', as: 'circuit' });
  ModelRaces.hasMany(models.results);
};

module.exports = { ModelRaces };
