import sequelize from '../config/sequelize';
import logger from '../utils/logger';
import '../models/associations';

const connectToDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    logger.info('Connection has been established successfully.');
    // sequelize.sync() // Uncomment if you want Sequelize to synchronize the model with the database automatically
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

export default connectToDatabase;
