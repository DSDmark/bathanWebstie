import { defaultTransformSchemaUtil } from "@/utils/index.js"
import mongoose from "mongoose"

const EmpTypeSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
})

defaultTransformSchemaUtil(EmpTypeSchema)
export const EmpTypes = mongoose.model("empType", EmpTypeSchema)
