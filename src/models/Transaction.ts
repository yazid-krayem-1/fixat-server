import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class Transaction extends Model {}

Transaction.init(
  {
    TransactionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LoanID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Loans',
        key: 'LoanID'
      }
    },
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    Type: DataTypes.ENUM('disbursement', 'repayment'),
    Amount: DataTypes.DECIMAL(10, 2),
    TransactionDate: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'Transaction',
    tableName: 'Transactions',
    timestamps: true,
    createdAt: 'TransactionDate',
    updatedAt: false // Assuming no updatedAt field
  }
);

export default Transaction;
