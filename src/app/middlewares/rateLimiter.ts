import { Request } from 'express';
import { rateLimit } from 'express-rate-limit';
import logger from '../../utils/logger';
import {config} from '../../config';


const rateLimiter = rateLimit({
  legacyHeaders: true,
  limit: Number(config.COMMON_RATE_LIMIT_MAX_REQUESTS) ?? 20,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  windowMs: 15 * 60 * (Number(config.COMMON_RATE_LIMIT_WINDOW_MS) ?? 1000),
  keyGenerator,
});

function keyGenerator(request: Request): string {
  if (!request.ip) {
    logger.warn('Warning: request.ip is missing!');
    return request.socket.remoteAddress as string;
  }

  return request.ip.replace(/:\d+[^:]*$/, '');
}

export default rateLimiter;