const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Trend = sequelize.define('Trend', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'trends',
  timestamps: true,
});

module.exports = Trend;