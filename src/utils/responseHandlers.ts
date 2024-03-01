import { Response } from 'express';

interface ErrorDetails {
  [key: string]: string | number | boolean | ErrorDetails;
}

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message: string = 'Success',
  statusCode: number = 200
): void => {
  res.status(statusCode).json({
    success: true,
    data,
    message
  });
};

export const sendError = (
  res: Response,
  errorMessage: string,
  statusCode: number = 400,
  errorCode?: number,
  errorDetails?: ErrorDetails
): void => {
  res.status(statusCode).json({
    success: false,
    error: {
      message: errorMessage,
      code: errorCode,
      details: errorDetails
    }
  });
};
