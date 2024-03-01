import dotenv from 'dotenv';

// Initialize dotenv configuration
dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_PORT: process.env.DB_PORT as string,
  BASE_URL: process.env.BASE_URL as string
};
