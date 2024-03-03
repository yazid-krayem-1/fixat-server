import { Application } from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';

// Function to register all routes
export const registerRoutes = (app: Application): void => {
  app.use('/users', userRoutes);
  app.use('/auth', authRoutes);
  // As your app grows, add more route imports and use statements here
};
