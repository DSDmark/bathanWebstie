import { NextFunction, Request, Response } from "express"

import { ROLES, SERVER_ERRORS } from "@/constants/common.js"
import { AuthRequest } from "@/middlewares/auth.middleware.js"
import { User } from "@/modules/index.js"
import { generateRandomPasswordUtil } from "@/utils/common.js"
import { sendResponseUtil } from "@/utils/response.js"
import bcrypt from "bcryptjs"

export interface IUserController {
  userById: (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => Promise<void>
  currentUser: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>
}

export const userById = async (req, res) => {
  const users = await User.findById(req.query.id).populate(
    "seniority department"
  )
  if (req.user.role !== ROLES.manager) {
    return sendResponseUtil(res, 403, SERVER_ERRORS.permissionDenied)
  }
  if (!users) {
    return sendResponseUtil(res, 404, SERVER_ERRORS.dateNotFound)
  }
  return sendResponseUtil(res, 200, "User fetched successfully", users)
}

export const userByRole = async (req, res) => {
  const users = await User.find({ role: req.query.role }).populate(
    "seniority department"
  )
  if (req.user.role !== ROLES.manager) {
    return sendResponseUtil(res, 403, SERVER_ERRORS.permissionDenied)
  }
  if (!users.length) {
    return sendResponseUtil(res, 404, SERVER_ERRORS.dateNotFound)
  }
  return sendResponseUtil(res, 200, "User fetched successfully", users)
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

export const createEngineerUser = async (req, res) => {
  try {
    const allowedFields = [
      "name",
      "email",
      "contact",
      "department",
      "description",
      "skills",
      "password",
      "seniorityLevels",
      "empType",
    ]

    const createPayload: { [key: string]: any } = {}

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        createPayload[field] = req.body[field]
      }
    }

    let plainPassword = createPayload.password
    if (!plainPassword) {
      plainPassword = generateRandomPasswordUtil()
    }

    const salt = await bcrypt.genSalt(10)
    createPayload.password = await bcrypt.hash(plainPassword, salt)

    createPayload.role = ROLES.engineer

    if (createPayload.seniorityLevels) {
      createPayload.seniority = createPayload.seniorityLevels
      delete createPayload.seniorityLevels
    }

    if (createPayload.empType) {
      createPayload.employmentType = createPayload.empType
      delete createPayload.empType
    }

    await User.create(createPayload)

    return sendResponseUtil(res, 201, "Engineer user created successfully", {
      generatedPassword: plainPassword,
    })
  } catch (error) {
    console.error(error)
    return sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}

export const updateEngineerUser = async (req, res) => {
  try {
    const { id } = req.body

    const allowedFields = [
      "name",
      "email",
      "contact",
      "department",
      "description",
      "skills",
      "seniorityLevels",
      "empType",
    ]

    const updatePayload: { [key: string]: any } = {}

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updatePayload[field] = req.body[field]
      }
    }

    // Map seniorityLevels → seniority
    if (updatePayload.seniorityLevels) {
      updatePayload.seniority = updatePayload.seniorityLevels
      delete updatePayload.seniorityLevels
    }

    // Map empType → employmentType
    if (updatePayload.empType) {
      updatePayload.employmentType = updatePayload.empType
      delete updatePayload.empType
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatePayload, {
      new: true,
      runValidators: true,
    })

    if (!updatedUser) {
      return sendResponseUtil(res, 404, SERVER_ERRORS.dateNotFound)
    }

    return sendResponseUtil(
      res,
      200,
      "Engineer user updated successfully",
      updatedUser
    )
  } catch (error) {
    console.error(error)
    return sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}
