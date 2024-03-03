import logger from '../utils/logger';
import db from '../database/data-source';

const connectToDatabase = async (): Promise<void> => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    logger.info('Connection has been established successfully.');
    // sequelize.sync() // Uncomment if you want Sequelize to synchronize the model with the database automatically
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

export default connectToDatabase;
