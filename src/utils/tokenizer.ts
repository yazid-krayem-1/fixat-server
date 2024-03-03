import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { config } from '../config';
const secret = config.JWT_SECRET_ACCESS_TOKEN;
export const generateAccessToken = async (data: any) => {
  const token = jwt.sign(data, secret, { expiresIn: 30 * 24 * 60 * 60 }); // 30 days
  return token;
};
export const generateToken = async (data: any, exipration: number) => {
  const token = jwt.sign(data, secret, { expiresIn: exipration }); // 15 minutes
  return token;
};
export const generateRefreshToken = async (username: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = crypto
    .createHash('md5')
    .update(username + salt)
    .digest('hex');
  return hash;
};

export const checkToken = async (token: string) => {
  const decodedToken: any = jwt.verify(token, secret);
  return decodedToken;
};

export const tokenIsExpired = async (token: string) => {
  const decodedToken: any = jwt.decode(token);

  return decodedToken.exp < Date.now() / 1000;
};

export const generateOptNumber = async () => {
  const opt = Math.floor(1000 + Math.random() * 9000);
  return opt;
};
