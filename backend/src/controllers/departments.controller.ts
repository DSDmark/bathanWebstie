import { SERVER_ERRORS } from "@/constants/common.js"
import { Departments } from "@/modules/index.js"
import { sendResponseUtil } from "@/utils/response.js"
import { Request, Response } from "express"

export const getAllDepartments = async (_: Request, res: Response) => {
  try {
    const department = await Departments.find()
    sendResponseUtil(res, 200, "Departments fetched successfully", department)
  } catch (error) {
    sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}
