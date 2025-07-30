import {
  currentUser,
  updateUserProfile,
  userById,
} from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

router.post("/user-details/:id", userById)
router.get("/user-details", currentUser)
router.patch("/profile", updateUserProfile)

export default router
