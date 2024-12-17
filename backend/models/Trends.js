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
  formatted_traffic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time_ago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'trends',
  timestamps: false,
});

module.exports = Trend;
