import { defaultTransformSchemaUtil } from "@/utils/index.js"
import mongoose from "mongoose"

const DepartmentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
})

defaultTransformSchemaUtil(DepartmentSchema)
export const Departments = mongoose.model("department", DepartmentSchema)
