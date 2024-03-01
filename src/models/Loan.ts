import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class Loan extends Model {}

Loan.init(
  {
    LoanID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LenderID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    BorrowerID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    Amount: DataTypes.DECIMAL(10, 2),
    InterestRate: DataTypes.DECIMAL(5, 2),
    StartDate: DataTypes.DATEONLY,
    EndDate: DataTypes.DATEONLY,
    Status: DataTypes.ENUM('pending', 'active', 'completed', 'defaulted'),
    CreatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'Loan',
    tableName: 'Loans',
    timestamps: true,
    createdAt: 'CreatedAt',
    updatedAt: false
  }
);

export default Loan;
