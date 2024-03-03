import { config } from './config';

module.exports = {
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  host: config.DB_HOST,
  port: config.DB_PORT,
  dialect: config.DIALECT,
  timezone: '+07:00'
};
