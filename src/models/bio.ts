import { DataTypes, Sequelize } from "sequelize"
import db from './conn'

export const Bio = db.sequelize.define('bio', {

  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },

  maleName: {
    type: DataTypes.STRING(45),
    allowNull: true
  },

  femaleName: {
    type: DataTypes.STRING(45),
    allowNull: true
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING(45),
    allowNull: false
  },

  country: {
    type: DataTypes.STRING(20),
    allowNull: false
  },

  gender: {
    type: DataTypes.STRING(10),
    allowNull: false
  },

  joiningdate: {
    type: DataTypes.STRING(10),
    allowNull: false
  },

  maleBio: {
    type: DataTypes.STRING(45),
    allowNull: true
  },

  hobbie: {
    type: DataTypes.JSON,
    allowNull: false
  },
}, {
  tableName: 'bio',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});
