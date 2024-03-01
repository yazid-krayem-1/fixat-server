import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/config';
import { registerRoutes } from './routes';
import { errorHandler, loggerMiddleware } from './app/middlewares';
import connectToDatabase from './core/database';
import logger from './utils/logger';
import i18n from './utils/i18n';

async function startServer() {
  try {
    await connectToDatabase();

    logger.info('Database connected successfully.');

    const app = express();
    const i18nMiddleware = i18n.init(
      {
        fallbackLng: 'en',
        backend: {
          loadPath: '../locales/{{lng}}/{{ns}}.json',
        },
        detection: {
          order: ['querystring', 'cookie'],
          caches: ['cookie'],
        },
      }
    );
    app.use((await i18nMiddleware).$TFunctionBrand);

    // ...

    // Global Middlewares
    app.use(loggerMiddleware); // Log each request
    app.use(helmet()); // Helps secure your apps by setting various HTTP headers
    app.use(cors()); // Enable CORS
    app.use(express.json()); // Parse JSON bodies

    // Register Routes
    registerRoutes(app);

    // Error Handling Middleware - should be the last piece of middleware
    app.use(errorHandler);

    // Start the server
    app.listen(config.PORT, () => {
      logger.info(`Server is running at ${config.BASE_URL}:${config.PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start the server:', error);
    process.exit(1); // Exit the process with an error code
  }
}

startServer();
