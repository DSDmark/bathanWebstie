import { NextFunction, Request, Response } from "express"

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = res.statusCode ?? 500
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: err.stack,
  })
}
