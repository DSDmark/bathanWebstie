import { SERVER_ERRORS } from "@/constants/common.js"
import { sendResponseUtil } from "@/utils/response.js"
import { Request, Response } from "express"

export const getEmpTypes = async (_: Request, res: Response) => {
  try {
    // const empTypes = await EmpTypes.find()
    sendResponseUtil(res, 200, "Employment type fetched successfully", empTypes)
  } catch (error) {
    sendResponseUtil(res, 500, SERVER_ERRORS.internalServer)
  }
}
