// src/models/associations.ts
import User from './User';
import Loan from './Loan';
import PaymentSchedule from './PaymentSchedule';
import Transaction from './Transaction';

// Associations for PaymentSchedule
Loan.hasMany(PaymentSchedule, { foreignKey: 'LoanID' });
PaymentSchedule.belongsTo(Loan, { foreignKey: 'LoanID' });

// Associations for Transactions
User.hasMany(Transaction, { foreignKey: 'UserID' });
Transaction.belongsTo(User, { foreignKey: 'UserID' });

Loan.hasMany(Transaction, { foreignKey: 'LoanID' });
Transaction.belongsTo(Loan, { foreignKey: 'LoanID' });
