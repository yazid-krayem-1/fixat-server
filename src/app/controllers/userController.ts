import { Request, Response } from 'express';
import { getUsersService } from '../services/userService';
import { sendError, sendSuccess } from '../../utils';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsersService();
    sendSuccess(res, users, 'Users retrieved successfully');
  } catch (error: any) {
    sendError(res, 'Failed to get users', 500, 5001, { error: error.message });
  }
};
