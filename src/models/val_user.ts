import { DataTypes, Sequelize } from "sequelize"
import db from './conn'

export const Val_User = db.sequelize.define('val_user', {

  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING(45),
    allowNull: false
  },

  password: {
    type: DataTypes.STRING(150),
    allowNull: false
  },

  status: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
}, {
  tableName: 'val_user',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: false,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});
