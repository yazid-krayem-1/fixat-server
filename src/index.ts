import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/config';
import { registerRoutes } from './routes';
import { errorHandler, loggerMiddleware } from './app/middlewares';
import connectToDatabase from './core/database';
import logger from './utils/logger';
import i18nextMiddleware from 'i18next-http-middleware';
import { i18n } from './config/i18n';
import bodyParser from 'body-parser';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

async function startServer() {
  try {
    await connectToDatabase();

    logger.info('Database connected successfully.');

    const app = express();
    app.use(helmet()); // Helps secure your apps by setting various HTTP headers
    app.use(
      cors({
        origin: config.CORS_ORIGIN,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      })
    ); // Enable CORS
    app.use(loggerMiddleware); // Log requests
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public')); // Serve static files
    app.use('/uploads', express.static('uploads')); // Serve static files

    app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
  }));

    app.use(i18nextMiddleware.handle(i18n));

    // Register Routes
    registerRoutes(app);

    // swagger
    app.use('/api-docs', swaggerUi.serve);
    app.get('/api-docs', swaggerUi.setup(swaggerDocument));

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
function fileUpload(arg0: {useTempFiles: boolean; tempFileDir: string;}): any {
  throw new Error('Function not implemented.');
}

