import {
  IAppUserCreate,
  IAppUserLogin
} from '../../../core/interfaces/IAppUser';
import { AppUser } from '../../../database/entities/AppUser';

export const loginService = async (
  request: IAppUserLogin
): Promise<AppUser> => {
  try {
    const user = await AppUser.findOne({
      where: { phone_number: request.phone_number, password: request.password }
    });
    return user;
  } catch (error) {
    throw new Error('Error getting user');
  }
};

export const createUserService = async (
  request: IAppUserCreate
): Promise<AppUser> => {
  try {
    const user = await AppUser.create(request);
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
};
