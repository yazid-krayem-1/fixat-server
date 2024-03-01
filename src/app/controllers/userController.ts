import { Request, Response } from 'express';
import { createUserService, getUsersService } from '../services/userService';
import { sendError, sendSuccess } from '../../utils';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsersService();
    sendSuccess(res, users, 'Users retrieved successfully');
  } catch (error: any) {
    sendError(res, 'Failed to get users', 500, 5001, { error: error.message });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const user = await createUserService({ username, email, password });
    sendSuccess(res, user, 'User created successfully');
  } catch (error: any) {
    sendError(res, 'Failed to create user', 500, 5002, {
      error: error.message
    });
  }
};
