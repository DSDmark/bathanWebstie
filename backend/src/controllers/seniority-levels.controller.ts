import { SERVER_ERRORS } from "@/constants/common.js"
import { SeniorityLevels } from "@/modules/index.js"
import { sendResponseUtil } from "@/utils/response.js"
import { Request, Response } from "express"

export const getAllSeniorityLevels = async (_: Request, res: Response) => {
  try {
    const seniorityLevels = await SeniorityLevels.find()
    sendResponseUtil(
      res,
      200,
      "Seniority levels fetched successfully",
      seniorityLevels
    )
  } catch (error) {
    sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}
