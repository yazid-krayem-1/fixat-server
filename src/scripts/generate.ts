import { green, red } from 'colorette';
import fs from 'fs';
import path from 'path';
import logger from '../utils/logger';

const msgType = green('script');

/**
 *
 * @param value
 * @param regExp
 */
function generateEnv(value: string, regExp: RegExp): void {
  const pathRes = path.resolve('.env');

  if (!fs.existsSync(pathRes)) {
    const errType = red('Missing env!!!');
    const message = `Copy / Duplicate ${green(
      '.env.example'
    )} root directory to ${green('.env')}`;

    logger.error(`${msgType} - ${errType}, ${message}`);

    throw new Error(message);
  }

  const contentEnv = fs.readFileSync(pathRes, { encoding: 'utf-8' });

  const uniqueCode =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const valueEnv = `${value}=${uniqueCode}`;

  if (contentEnv.includes(`${value}=`)) {
    // change value
    const replaceContent = contentEnv.replace(regExp, valueEnv);
    fs.writeFileSync(`${pathRes}`, replaceContent);

    logger.info(`${msgType} - refresh ${value} = ${uniqueCode}`);
  } else {
    // Generate value
    const extraContent = `${valueEnv}\n\n${contentEnv}`;
    fs.writeFileSync(`${pathRes}`, extraContent);

    logger.info(`${msgType} - generate ${value} = ${uniqueCode}`);
  }
}

const listDirectory = [
  'public/uploads/temp',
  'public/uploads/excel',
  'temp/logs'
];

for (let i = 0; i < listDirectory.length; i += 1) {
  const dir = listDirectory[i];

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });

    logger.info(`${msgType} - create directory ${dir}`);
  }
}

// generate app key
generateEnv('APP_KEY', /APP_KEY=(.*)?/);

// generate secret otp
generateEnv('SECRET_OTP', /SECRET_OTP=(.*)?/);

// generate jwt secret access token
generateEnv('JWT_SECRET_ACCESS_TOKEN', /JWT_SECRET_ACCESS_TOKEN=(.*)?/);

// generate jwt secret refresh token
generateEnv('JWT_SECRET_REFRESH_TOKEN', /JWT_SECRET_REFRESH_TOKEN=(.*)?/);
