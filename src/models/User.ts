import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class User extends Model {}

User.init(
  {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    PasswordHash: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    CreatedAt: DataTypes.DATE,
    UpdatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true,
    updatedAt: 'UpdatedAt',
    createdAt: 'CreatedAt'
  }
);

export default User;
