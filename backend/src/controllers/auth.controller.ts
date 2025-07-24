import { SERVER_ERRORS } from "@/constants/index.js"
import { User } from "@/modules/index.js"
import bcrypt from "bcryptjs"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !bcrypt.compareSync(password, user.password)) {
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

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, skills, seniority, employmentType } =
      req.body

    const exists = await User.findOne({ email })
    if (exists) {
      res.status(409).json({ message: "Email already in use" })
      return
    }
    const hashed = await bcrypt.hash(password, 10)
    const user = new User({
      name,
      email,
      password: hashed,
      role: "",
      skills: skills || [],
      seniority,
      employmentType,
    })
    await user.save()
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    )

    res.status(201).json({ token, role: user.role })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: SERVER_ERRORS.internalServer })
  }
}
