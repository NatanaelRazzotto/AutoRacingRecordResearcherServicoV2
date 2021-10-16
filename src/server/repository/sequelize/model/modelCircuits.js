const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelCircuits = database.define(
  'circuits',
  {
    circuitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    circuitRef: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    lng: {
      type: DataTypes.FLOAT,
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

ModelCircuits.associate = function (models) {
  ModelCircuits.hasMany(models.races);
};

module.exports = { ModelCircuits };
