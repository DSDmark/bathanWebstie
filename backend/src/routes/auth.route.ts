import express, { Router } from "express"

import { login, register } from "@/controllers/index.js"
const router: Router = express.Router()

// auth
router.post("/login", login)
router.post("/register", register)

export default router
