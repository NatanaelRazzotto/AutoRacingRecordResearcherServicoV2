const { DataTypes } = require('sequelize');
const database = require('../../db');

const ModelResults = database.define(
  'results',
  {
    resultId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'races',
        key: 'raceId'
      }
    },
    driverId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    constructorId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    grid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionText: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    positionOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    laps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "time"
    },
    milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fastestLap: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fastestLapTime: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fastestLapSpeed: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    statusId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

ModelResults.associate = function (models) {
  ModelResults.belongsTo(models.races, { foreignKey: 'raceId', as: 'race' });
};

module.exports = { ModelResults };
