import { User } from '../../database/entities/User';
import logger from '../../utils/logger';

// get all users
export const getUsersService = async (): Promise<User[]> => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    logger.error('Error getting users in userService:', error);
    throw new Error('Error getting users');
  }
};

export const getUserService = async (): Promise<User | null> => {
  try {
    // const user = await User.findOne({ where: { Username: username } });
    return null;
  } catch (error) {
    logger.error('Error getting user in userService:', error);
    throw new Error('Error getting user');
  }
};

export const getUserByIdService = async (): Promise<User | null> => {
  try {
    // const user = await User.findOne({ where: { Id: id } });
    return null;
  } catch (error) {
    logger.error('Error getting user in userService:', error);
    throw new Error('Error getting user');
  }
};

// export const updateUserService = async (
//   request: UpdateUserAttributes
// ): Promise<number[]> => {
//   try {
//     const { id, username, email, password } = request;
//     const user = await User.update(
//       { Username: username, Email: email, PasswordHash: password },
//       { where: { Id: id } }
//     );
//     return user;
//   } catch (error) {
//     logger.error('Error updating user in userService:', error);
//     throw new Error('Error updating user');
//   }
// };

// export const deleteUserService = async (id: number): Promise<number> => {
//   try {
//     const user = await User.destroy({ where: { Id: id } });
//     return user;
//   } catch (error) {
//     logger.error('Error deleting user in userService:', error);
//     throw new Error('Error deleting user');
//   }
// };
