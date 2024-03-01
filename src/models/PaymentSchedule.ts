import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class PaymentSchedule extends Model {}

PaymentSchedule.init(
  {
    ScheduleID: {
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
    DueDate: DataTypes.DATEONLY,
    AmountDue: DataTypes.DECIMAL(10, 2),
    Status: DataTypes.ENUM('scheduled', 'paid', 'missed'),
    PaymentDate: DataTypes.DATEONLY
  },
  {
    sequelize,
    modelName: 'PaymentSchedule',
    tableName: 'PaymentSchedule',
    timestamps: false // Assuming no createdAt or updatedAt fields
  }
);

export default PaymentSchedule;
