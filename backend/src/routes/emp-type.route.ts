import { getEmpTypes } from "@/controllers/index.js"
import express, { Router } from "express"

const router: Router = express.Router()

router.get("/employment-type", getEmpTypes)

export default router
