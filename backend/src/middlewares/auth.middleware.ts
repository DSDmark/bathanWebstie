import { SERVER_ERRORS } from "@/constants/common.js"
import { sendResponseUtil } from "@/utils/response.js"
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request {
  user: {
    role: string
    id: string
  }
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "")
  if (!token) return res.status(401).json({ message: "No token provided" })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret")
    req.user = decoded
    next()
  } catch (err) {
    sendResponseUtil(res, 401, SERVER_ERRORS.invalidToken)
  }
}

export const restrictTo =
  (...roles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      sendResponseUtil(res, 403, SERVER_ERRORS.permissionDenied)
    }
    next()
  }
