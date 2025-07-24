import { auth } from "@/middlewares/index.js"
import express, { Router } from "express"
import authRoutes from "./auth.route.js"
import userRoutes from "./user.route.js"

const router: Router = express.Router()

router.use("/auth", authRoutes)
import type { RequestHandler } from "express"

router.use("/user", auth as RequestHandler, userRoutes)

export default router
