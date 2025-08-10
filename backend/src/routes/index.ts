import { auth } from "@/middlewares/index.js"
import express, { Router } from "express"
import authRoutes from "./auth.route.js"
import departmentRoutes from "./departments.route.js"
import empTypesRoutes from "./emp-type.route.js"
import seniorityLevelsRoutes from "./seniority-levels.route.js"
import skillsRoutes from "./skills.route.js"
import userRoutes from "./users.route.js"

const router: Router = express.Router()

import type { RequestHandler } from "express"

// auth
router.use("/auth", authRoutes)

// user
router.use("/user", auth as RequestHandler, userRoutes)

// common
router.use("/common", skillsRoutes)
router.use("/common", departmentRoutes)
router.use("/common", seniorityLevelsRoutes)
router.use("/common", empTypesRoutes)

export default router
