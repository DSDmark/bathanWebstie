import { NextFunction, Request, Response } from "express"

import { User as UserModel } from "../modules/uses.js"

export interface IUserController {
  userById: (req: Request, res: Response, next: NextFunction) => Promise<void>
  currentUser: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>
}

export const userById = async (req, res) => {
  const user = await UserModel.findById(req.params.id)
  if (!user || (req.user.role === "engineer" && req.user.id !== user._id)) {
    return res.status(403).json({ message: "Permission denied" })
  }
  res.json(user)
}

export const currentUser = async (req, res) => {
  const user = await UserModel.findById(req.user._id)
  res.json(user)
}
