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
  BASE_URL: process.env.BASE_URL as string,
  DIALECT: process.env.DIALECT as string,
  URL_CLIENT_STAGING: process.env.URL_CLIENT_STAGING as string,
  URL_CLIENT_PRODUCTION: process.env.URL_CLIENT_PRODUCTION as string,
  URL_SERVER_STAGING: process.env.URL_SERVER_STAGING as string,
  URL_SERVER_PRODUCTION: process.env.URL_SERVER_PRODUCTION as string,
  NODE_ENV: process.env.NODE_ENV as string,
  APP_PORT: process.env.APP_PORT as string,
  JWT_SECRET_REFRESH_TOKEN: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  JWT_SECRET_ACCESS_TOKEN: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  SECRET_OTP: process.env.SECRET_OTP as string,
  APP_KEY: process.env.APP_KEY as string,
  CORS_ORIGIN: process.env.CORS_ORIGIN as string,

  // Rate limiter
  COMMON_RATE_LIMIT_MAX_REQUESTS: process.env.COMMON_RATE_LIMIT_MAX_REQUESTS as string,
  COMMON_RATE_LIMIT_WINDOW_MS: process.env.COMMON_RATE_LIMIT_WINDOW_MS as string,
};
