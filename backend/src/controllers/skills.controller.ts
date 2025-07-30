import { SERVER_ERRORS } from "@/constants/common.js"
import { Skills } from "@/modules/index.js"
import { sendResponseUtil } from "@/utils/response.js"
import { Request, Response } from "express"

export const getAllSkills = async (_: Request, res: Response) => {
  try {
    const skills = await Skills.find()
    sendResponseUtil(res, 200, "Skills fetched successfully", skills)
  } catch (error) {
    sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}
