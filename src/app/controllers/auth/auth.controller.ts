import { Request, Response } from 'express';
import { sendError, sendSuccess } from '../../../utils';
import { createUserService, loginService } from '../../services';

export const loginController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await loginService({
      phone_number: req.body.phone_number,
      password: req.body.password
    });
    sendSuccess(res, users, 'Users retrieved successfully');
  } catch (error: any) {
    sendError(res, 'Failed to get users', 500, 5001, { error: error.message });
  }
};

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      avatar,
      first_name,
      last_name,
      email,
      phone_number,
      password,
      device_type,
      notification_status,
      device_language,
      affiliation_id
    } = req.body;

    const user = await createUserService({
      avatar,
      first_name,
      last_name,
      email,
      phone_number,
      password,
      device_type,
      notification_status,
      device_language,
      affiliation_id
    });
    sendSuccess(res, user, 'User created successfully');
  } catch (error: any) {
    sendError(res, 'Failed to create user', 500, 5002, {
      error: error.message
    });
  }
};
