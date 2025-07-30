import express, { Router } from "express"

import { createManager, login } from "@/controllers/index.js"
const router: Router = express.Router()

// auth
router.post("/login", login)
router.post("/create-manager", createManager)

export default router
