import {
  createEngineerUser,
  currentUser,
  updateEngineerUser,
  updateUserProfile,
  userById,
  userByRole,
} from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

// get
router.get("/user-details", currentUser)
router.get("/user-by-role", userByRole)
router.get("/user-by-id", userById)

// post
router.post("/create-engineer", createEngineerUser)

// patch
router.patch("/profile", updateUserProfile)
router.patch("/update-engineer", updateEngineerUser)

export default router
