import {
  createEngineerUser,
  currentUser,
  updateUserProfile,
  userById,
  userByRole,
} from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

// get
router.get("/user-details", currentUser)
router.get("/user-by-role", userByRole)

// post
router.post("/user-details/:id", userById)
router.post("/create-engineer", createEngineerUser)

// patch
router.patch("/profile", updateUserProfile)

export default router
