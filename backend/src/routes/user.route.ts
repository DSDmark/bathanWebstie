import { currentUser, userById } from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

router.post("/user-details/:id", userById)
router.post("/user-details", currentUser)

export default router
