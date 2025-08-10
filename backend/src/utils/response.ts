import { Response } from "express"

export const sendResponseUtil = <T>(
  res: Response,
  status: number,
  message: string,
  data: T | null = null
): Response => {
  return res.status(status).json({
    status,
    message,
    data,
  })
}

