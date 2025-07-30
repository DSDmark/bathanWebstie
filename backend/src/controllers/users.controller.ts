import { NextFunction, Request, Response } from "express"

import { SERVER_ERRORS } from "@/constants/common.js"
import { User } from "@/modules/index.js"
import { sendResponseUtil } from "@/utils/response.js"

export interface IUserController {
  userById: (req: Request, res: Response, next: NextFunction) => Promise<void>
  currentUser: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>
}

export const userById = async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user || (req.user.role === "engineer" && req.user.id !== user._id)) {
    return res.status(403).json({ message: SERVER_ERRORS.permissionDenied })
  }
  res.json(user)
}

export const currentUser = async (req, res) => {
  const user = await User.findById(req.user.id).populate("skills")
  sendResponseUtil(res, 200, "User fetched successfully", user)
}

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return sendResponseUtil(res, 403, SERVER_ERRORS.permissionDenied)
    }

    const allowedFields = [
      "name",
      "contact",
      "department",
      "description",
      "skills",
    ]

    const updatePayload = {}

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updatePayload[field] = req.body[field]
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatePayload },
      { new: true, runValidators: true }
    ).populate("skills")

    if (!updatedUser) {
      return sendResponseUtil(res, 404, SERVER_ERRORS.dateNotFound)
    }

    return sendResponseUtil(
      res,
      200,
      "Profile updated successfully",
      updatedUser
    )
  } catch (error) {
    console.log(error)
    return sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}
