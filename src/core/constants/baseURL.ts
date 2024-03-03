import { config } from '../../config';

const URL_CLIENT: object | any = {
  development: `${config.BASE_URL}:${config.PORT}`,
  staging: config.URL_CLIENT_STAGING,
  production: config.URL_CLIENT_PRODUCTION
};

const URL_SERVER: object | any = {
  development: `${config.BASE_URL}:${config.PORT}`,
  staging: config.URL_SERVER_STAGING,
  production: config.URL_SERVER_PRODUCTION
};

export const BASE_URL_CLIENT: string = URL_CLIENT[config.NODE_ENV];
export const BASE_URL_SERVER: string = URL_SERVER[config.NODE_ENV];
