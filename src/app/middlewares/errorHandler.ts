import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err.stack);
  res.status(500).send({
    error: {
      status: 500,
      message: 'Internal Server Error'
    }
  });
}
