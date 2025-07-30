import { getAllSkills } from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

router.get("/skills", getAllSkills)

export default router
