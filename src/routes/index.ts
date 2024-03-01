import { Application } from 'express';
import userRoutes from './userRoutes';
import loanRoutes from './loanRoutes';

// Function to register all routes
export const registerRoutes = (app: Application): void => {
  app.use('/users', userRoutes);
  app.use('/loans', loanRoutes);
  // As your app grows, add more route imports and use statements here
};
