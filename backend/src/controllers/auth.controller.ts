import { ROLES, SERVER_ERRORS } from "@/constants/index.js"
import { User } from "@/modules/index.js"
import { sendResponseUtil } from "@/utils/response.js"
import bcrypt from "bcryptjs"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !bcrypt.compareSync(password, user.password || "")) {
    res.status(401).json({ message: SERVER_ERRORS.inValidDetails })
    return
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1h" }
  )
  res.setHeader("token", token)
  res.status(200).json({ user })
}

export const createManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, department } = req.body

    if (await User.findOne({ email })) {
      sendResponseUtil(res, 409, "User already exists")
      return
    }

    const hashed = await bcrypt.hash(password, 10)

    let userDoc
    if (!department) {
      sendResponseUtil(res, 400, "User must include a department")
      return
    }
    userDoc = await User.create({
      name,
      email,
      password: hashed,
      role: ROLES.manager,
      department,
    })

    const token = jwt.sign(
      { id: userDoc._id, role: userDoc.role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    )

    res.setHeader("token", token)
    sendResponseUtil(res, 201, "User created successfully", userDoc)
  } catch (err) {
    console.error(err)
    sendResponseUtil(res, 201, SERVER_ERRORS.internalServer)
  }
}
