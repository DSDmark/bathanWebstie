import { getAllDepartments } from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

router.get("/departments", getAllDepartments)

export default router
