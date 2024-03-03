import 'reflect-metadata';

import { blue } from 'colorette';
import fs from 'fs';
import path from 'path';
import { Sequelize, type SequelizeOptions } from 'sequelize-typescript';
import logger from '../utils/logger';
import { config } from '../config';

const pathEnv = path.resolve('.env');

if (!fs.existsSync(pathEnv)) {
  const envExample = blue('.env.example');
  const envLocal = blue('.env');

  const message = `Missing env!!!\nCopy / Duplicate ${envExample} root directory to ${envLocal}`;
  logger.info(`${message}`);

  throw new Error(message);
}

const sequelizeOptions: SequelizeOptions = {
  dialect: 'mysql',
  host: config.DB_HOST,
  port: Number(config.DB_PORT),
  logQueryParameters: false,
  timezone: '+07:00',
  models: [`${__dirname}/entities`],
  sync: { force: true }
  // repositoryMode: true,
};

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  { ...sequelizeOptions }
);

const db = { sequelize };

export default db;
