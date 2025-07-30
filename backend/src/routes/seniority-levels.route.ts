import { getAllSeniorityLevels } from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

router.get("/seniority-levels", getAllSeniorityLevels)

export default router
